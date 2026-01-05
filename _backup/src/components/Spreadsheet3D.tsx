import React, { useState, useMemo } from 'react';
import { BitcoinService, SpreadsheetData, CellData } from '../services/BitcoinService';

interface Spreadsheet3DProps {
  bitcoinService: BitcoinService;
  spreadsheet: SpreadsheetData | null;
  onSpreadsheetUpdate: (spreadsheet: SpreadsheetData) => void;
  isAuthenticated: boolean;
  isDarkMode?: boolean;
}

// CSS 3D Cell Component
const Cell3D: React.FC<{
  position: { x: number; y: number; z: number };
  value: string;
  isSelected: boolean;
  onClick: () => void;
  isDarkMode: boolean;
  cellRef: string;
}> = ({ position, value, isSelected, onClick, isDarkMode, cellRef }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cellStyle: React.CSSProperties = {
    position: 'absolute',
    width: '80px',
    height: '30px',
    border: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
    backgroundColor: isSelected 
      ? '#1976d2' 
      : isHovered 
        ? (isDarkMode ? '#444' : '#f0f0f0')
        : (isDarkMode ? '#2a2a2a' : '#ffffff'),
    color: isSelected 
      ? '#fff' 
      : (isDarkMode ? '#e0e0e0' : '#333'),
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    fontFamily: 'monospace',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: '2px 4px',
    boxSizing: 'border-box',
    transform: `translate3d(${position.x}px, ${position.y}px, ${position.z}px)`,
    transformStyle: 'preserve-3d',
    transition: 'all 0.2s ease',
    boxShadow: isSelected 
      ? '0 2px 8px rgba(25, 118, 210, 0.3)' 
      : '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div
      style={cellStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={`${cellRef}: ${value || 'Empty'}`}
    >
      {value || ''}
    </div>
  );
};

// Layer Label Component
const LayerLabel: React.FC<{
  layer: number;
  position: { x: number; y: number; z: number };
  isDarkMode: boolean;
}> = ({ layer, position, isDarkMode }) => {
  const labelStyle: React.CSSProperties = {
    position: 'absolute',
    width: '60px',
    height: '20px',
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f9f9f9',
    color: isDarkMode ? '#999' : '#666',
    border: `1px solid ${isDarkMode ? '#333' : '#ccc'}`,
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    fontWeight: 'bold',
    transform: `translate3d(${position.x}px, ${position.y}px, ${position.z}px)`,
    transformStyle: 'preserve-3d',
  };

  return (
    <div style={labelStyle}>
      Layer {layer + 1}
    </div>
  );
};

const Spreadsheet3D: React.FC<Spreadsheet3DProps> = ({
  bitcoinService,
  spreadsheet,
  onSpreadsheetUpdate,
  isAuthenticated,
  isDarkMode = false
}) => {
  console.log('🎯 Spreadsheet3D component rendering!');
  console.log('🎯 Props:', { bitcoinService: !!bitcoinService, spreadsheet: !!spreadsheet, isDarkMode });
  const [selectedCell, setSelectedCell] = useState<{row: number, col: number, layer: number} | null>(null);
  const [rotationY, setRotationY] = useState(15);
  const [rotationX, setRotationX] = useState(-10);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const dimensions = { rows: 8, cols: 8, layers: 3 };

  // Convert 2D spreadsheet data to 3D format
  const cellData = useMemo(() => {
    const data: { [key: string]: CellData } = {};
    
    if (spreadsheet?.cells) {
      Object.entries(spreadsheet.cells).forEach(([key, cell]) => {
        // Convert 2D coordinates to 3D (place existing data on layer 0)
        const [row, col] = key.split('-').map(Number);
        if (row < dimensions.rows && col < dimensions.cols) {
          const key3D = `${row}-${col}-0`;
          data[key3D] = cell;
        }
      });
    }

    return data;
  }, [spreadsheet, dimensions.rows, dimensions.cols]);

  // Generate column letters (A, B, C...)
  const getColumnLetter = (col: number): string => {
    return String.fromCharCode(65 + col);
  };

  // Handle cell selection
  const handleCellClick = (row: number, col: number, layer: number) => {
    setSelectedCell({ row, col, layer });
    
    // Create cell reference like A1L1, B2L2, etc.
    const cellRef = `${getColumnLetter(col)}${row + 1}L${layer + 1}`;
    console.log(`Selected cell: ${cellRef}`);
  };

  // Mouse controls for 3D rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;
    
    setRotationY(prev => prev + deltaX * 0.5);
    setRotationX(prev => Math.max(-60, Math.min(60, prev - deltaY * 0.5)));
    
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale(prev => Math.max(0.3, Math.min(2, prev + delta)));
  };

  // Container style for 3D scene
  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: 'calc(100vh - 200px)',
    backgroundColor: isDarkMode ? '#0a0a0a' : '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    perspective: '1200px',
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  // 3D scene transform
  const sceneStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: `translate(-50%, -50%) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${scale})`,
    transformStyle: 'preserve-3d',
    width: '600px',
    height: '400px',
  };

  // Generate cells for all layers
  const cells = [];
  for (let layer = 0; layer < dimensions.layers; layer++) {
    for (let row = 0; row < dimensions.rows; row++) {
      for (let col = 0; col < dimensions.cols; col++) {
        const key = `${row}-${col}-${layer}`;
        const cell = cellData[key];
        const cellRef = `${getColumnLetter(col)}${row + 1}L${layer + 1}`;
        
        const position = {
          x: col * 90 - (dimensions.cols * 90) / 2,
          y: row * 35 - (dimensions.rows * 35) / 2,
          z: layer * 100
        };

        const isSelected = selectedCell && 
          selectedCell.row === row && 
          selectedCell.col === col && 
          selectedCell.layer === layer;

        cells.push(
          <Cell3D
            key={key}
            position={position}
            value={cell?.value || ''}
            isSelected={!!isSelected}
            onClick={() => handleCellClick(row, col, layer)}
            isDarkMode={isDarkMode}
            cellRef={cellRef}
          />
        );
      }
    }
  }

  // Generate layer labels
  const layerLabels = [];
  for (let layer = 0; layer < dimensions.layers; layer++) {
    layerLabels.push(
      <LayerLabel
        key={`layer-${layer}`}
        layer={layer}
        position={{
          x: -(dimensions.cols * 90) / 2 - 80,
          y: -(dimensions.rows * 35) / 2 - 15,
          z: layer * 100
        }}
        isDarkMode={isDarkMode}
      />
    );
  }

  // Add column and row headers for each layer
  const headers = [];
  for (let layer = 0; layer < dimensions.layers; layer++) {
    // Column headers
    for (let col = 0; col < dimensions.cols; col++) {
      headers.push(
        <div
          key={`col-header-${layer}-${col}`}
          style={{
            position: 'absolute',
            width: '80px',
            height: '20px',
            backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
            color: isDarkMode ? '#999' : '#666',
            border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'bold',
            transform: `translate3d(${col * 90 - (dimensions.cols * 90) / 2}px, ${-(dimensions.rows * 35) / 2 - 25}px, ${layer * 100}px)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {getColumnLetter(col)}
        </div>
      );
    }

    // Row headers
    for (let row = 0; row < dimensions.rows; row++) {
      headers.push(
        <div
          key={`row-header-${layer}-${row}`}
          style={{
            position: 'absolute',
            width: '30px',
            height: '30px',
            backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
            color: isDarkMode ? '#999' : '#666',
            border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'bold',
            transform: `translate3d(${-(dimensions.cols * 90) / 2 - 35}px, ${row * 35 - (dimensions.rows * 35) / 2}px, ${layer * 100}px)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {row + 1}
        </div>
      );
    }
  }

  return (
    <div style={containerStyle}>
      {/* Controls Info */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: 100,
        padding: '8px 12px',
        backgroundColor: isDarkMode ? 'rgba(42, 42, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        color: isDarkMode ? '#e0e0e0' : '#333',
        borderRadius: '6px',
        fontSize: '11px',
        fontFamily: 'monospace',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '200px'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>🧊 3D Spreadsheet</div>
        <div>🖱️ Drag: Rotate view</div>
        <div>⚫ Scroll: Zoom in/out</div>
        <div>📦 Click: Select cell</div>
        {selectedCell && (
          <div style={{ marginTop: '8px', fontWeight: 'bold', color: '#1976d2' }}>
            Selected: {getColumnLetter(selectedCell.col)}{selectedCell.row + 1}L{selectedCell.layer + 1}
          </div>
        )}
        <div style={{ marginTop: '4px', fontSize: '10px', opacity: 0.7 }}>
          {dimensions.layers} layers × {dimensions.rows}×{dimensions.cols} grid
        </div>
      </div>

      {/* Reset View Button */}
      <button
        onClick={() => {
          setRotationX(-10);
          setRotationY(15);
          setScale(1);
        }}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 100,
          padding: '6px 12px',
          backgroundColor: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '11px',
          fontWeight: 'bold'
        }}
      >
        Reset View
      </button>

      {/* 3D Scene */}
      <div
        style={sceneStyle}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        {/* Render all cells */}
        {cells}
        
        {/* Render layer labels */}
        {layerLabels}
        
        {/* Render headers */}
        {headers}
      </div>
    </div>
  );
};

export default Spreadsheet3D;