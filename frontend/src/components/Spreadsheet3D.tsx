import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box } from '@react-three/drei';
import * as THREE from 'three';
import { BitcoinService, SpreadsheetData, CellData } from '../services/BitcoinService';

interface Spreadsheet3DProps {
  bitcoinService: BitcoinService;
  spreadsheet: SpreadsheetData | null;
  onSpreadsheetUpdate: (spreadsheet: SpreadsheetData) => void;
  isAuthenticated: boolean;
  isDarkMode?: boolean;
}

// 3D Cell Component
const Cell3D: React.FC<{
  position: [number, number, number];
  value: string;
  isSelected: boolean;
  onClick: () => void;
  isDarkMode: boolean;
}> = ({ position, value, isSelected, onClick, isDarkMode }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001) * 0.02;
    }
  });

  const cellColor = useMemo(() => {
    if (isSelected) return '#1976d2';
    if (hovered) return isDarkMode ? '#444' : '#f0f0f0';
    return isDarkMode ? '#2a2a2a' : '#ffffff';
  }, [isSelected, hovered, isDarkMode]);

  const textColor = isDarkMode ? '#e0e0e0' : '#333333';

  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[0.9, 0.1, 0.9]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial color={cellColor} />
      </Box>
      {value && (
        <Text
          position={[0, 0.06, 0]}
          fontSize={0.1}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          maxWidth={0.8}
        >
          {value}
        </Text>
      )}
    </group>
  );
};

// Grid Component
const Grid3D: React.FC<{
  rows: number;
  cols: number;
  layers: number;
  cellData: { [key: string]: CellData };
  selectedCell: [number, number, number] | null;
  onCellClick: (row: number, col: number, layer: number) => void;
  isDarkMode: boolean;
}> = ({ rows, cols, layers, cellData, selectedCell, onCellClick, isDarkMode }) => {
  const cells = [];

  for (let layer = 0; layer < layers; layer++) {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const key = `${row}-${col}-${layer}`;
        const cell = cellData[key];
        const position: [number, number, number] = [
          col - cols / 2,
          layer * 2,
          row - rows / 2
        ];
        const isSelected = selectedCell && 
          selectedCell[0] === row && 
          selectedCell[1] === col && 
          selectedCell[2] === layer;

        cells.push(
          <Cell3D
            key={key}
            position={position}
            value={cell?.value || ''}
            isSelected={!!isSelected}
            onClick={() => onCellClick(row, col, layer)}
            isDarkMode={isDarkMode}
          />
        );
      }
    }
  }

  return <>{cells}</>;
};

// Axis Labels Component
const AxisLabels: React.FC<{
  rows: number;
  cols: number;
  layers: number;
  isDarkMode: boolean;
}> = ({ rows, cols, layers, isDarkMode }) => {
  const textColor = isDarkMode ? '#999' : '#666';
  const labels = [];

  // Column labels (A, B, C...)
  for (let col = 0; col < cols; col++) {
    const letter = String.fromCharCode(65 + col);
    labels.push(
      <Text
        key={`col-${col}`}
        position={[col - cols / 2, -0.5, -rows / 2 - 1]}
        fontSize={0.2}
        color={textColor}
        anchorX="center"
        anchorY="middle"
      >
        {letter}
      </Text>
    );
  }

  // Row labels (1, 2, 3...)
  for (let row = 0; row < rows; row++) {
    labels.push(
      <Text
        key={`row-${row}`}
        position={[-cols / 2 - 1, -0.5, row - rows / 2]}
        fontSize={0.2}
        color={textColor}
        anchorX="center"
        anchorY="middle"
      >
        {row + 1}
      </Text>
    );
  }

  // Layer labels (L1, L2, L3...)
  for (let layer = 0; layer < layers; layer++) {
    labels.push(
      <Text
        key={`layer-${layer}`}
        position={[-cols / 2 - 1, layer * 2, -rows / 2 - 1]}
        fontSize={0.2}
        color={textColor}
        anchorX="center"
        anchorY="middle"
      >
        L{layer + 1}
      </Text>
    );
  }

  return <>{labels}</>;
};

const Spreadsheet3D: React.FC<Spreadsheet3DProps> = ({
  bitcoinService,
  spreadsheet,
  onSpreadsheetUpdate,
  isAuthenticated,
  isDarkMode = false
}) => {
  const [selectedCell, setSelectedCell] = useState<[number, number, number] | null>(null);
  const [dimensions] = useState({ rows: 10, cols: 10, layers: 5 });

  // Convert 2D spreadsheet data to 3D format
  const cellData = useMemo(() => {
    const data: { [key: string]: CellData } = {};
    
    if (spreadsheet?.cells) {
      Object.entries(spreadsheet.cells).forEach(([key, cell]) => {
        // Convert 2D coordinates to 3D (place all existing data on layer 0)
        const [row, col] = key.split('-').map(Number);
        const key3D = `${row}-${col}-0`;
        data[key3D] = cell;
      });
    }

    return data;
  }, [spreadsheet]);

  const handleCellClick = (row: number, col: number, layer: number) => {
    setSelectedCell([row, col, layer]);
    console.log(`Selected cell: ${String.fromCharCode(65 + col)}${row + 1}L${layer + 1}`);
  };

  const cameraSettings = {
    position: [15, 10, 15] as [number, number, number],
    fov: 75
  };

  return (
    <div style={{ 
      width: '100%', 
      height: 'calc(100vh - 200px)',
      backgroundColor: isDarkMode ? '#0a0a0a' : '#ffffff'
    }}>
      {/* 3D Controls Info */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: 1000,
        padding: '8px 12px',
        backgroundColor: isDarkMode ? 'rgba(42, 42, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        color: isDarkMode ? '#e0e0e0' : '#333',
        borderRadius: '4px',
        fontSize: '12px',
        fontFamily: 'monospace'
      }}>
        <div>🖱️ Click & Drag: Rotate view</div>
        <div>⚫ Scroll: Zoom in/out</div>
        <div>📦 Click cell: Select</div>
        {selectedCell && (
          <div style={{ marginTop: '8px', fontWeight: 'bold' }}>
            Selected: {String.fromCharCode(65 + selectedCell[1])}{selectedCell[0] + 1}L{selectedCell[2] + 1}
          </div>
        )}
      </div>

      <Canvas camera={cameraSettings}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 10]} 
          intensity={0.8}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        {/* Controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxDistance={50}
          minDistance={5}
        />

        {/* 3D Spreadsheet Grid */}
        <Grid3D
          rows={dimensions.rows}
          cols={dimensions.cols}
          layers={dimensions.layers}
          cellData={cellData}
          selectedCell={selectedCell}
          onCellClick={handleCellClick}
          isDarkMode={isDarkMode}
        />

        {/* Axis Labels */}
        <AxisLabels
          rows={dimensions.rows}
          cols={dimensions.cols}
          layers={dimensions.layers}
          isDarkMode={isDarkMode}
        />

        {/* Grid lines for reference */}
        <gridHelper 
          args={[dimensions.rows, dimensions.rows]} 
          position={[0, -0.5, 0]}
          rotation={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export default Spreadsheet3D;