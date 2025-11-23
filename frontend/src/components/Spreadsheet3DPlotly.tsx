import React, { useState, useEffect, useMemo } from 'react';
import Plot from 'react-plotly.js';
import { SpreadsheetData } from '../services/BitcoinService';
import './Spreadsheet3DPlotly.css';

interface Spreadsheet3DPlotlyProps {
  spreadsheet: SpreadsheetData;
  isDarkMode: boolean;
  onCellUpdate?: (row: number, col: number, value: any) => void;
}

type VisualizationType = 'surface' | 'scatter3d' | 'mesh3d' | 'heatmap3d' | 'bar3d' | 'ribbon';

const Spreadsheet3DPlotly: React.FC<Spreadsheet3DPlotlyProps> = ({ 
  spreadsheet, 
  isDarkMode,
  onCellUpdate 
}) => {
  const [visualizationType, setVisualizationType] = useState<VisualizationType>('surface');
  const [selectedRange, setSelectedRange] = useState<string>('A1:J10');
  const [autoRotate, setAutoRotate] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  // Convert spreadsheet cells to matrix for Plotly
  const processSpreadsheetData = useMemo(() => {
    const cells = spreadsheet.cells || {};
    
    // Find the dimensions of the data
    let maxRow = 0;
    let maxCol = 0;
    
    Object.keys(cells).forEach(key => {
      const [row, col] = key.split('-').map(Number);
      maxRow = Math.max(maxRow, row);
      maxCol = Math.max(maxCol, col);
    });

    // Create a matrix with sample data if empty
    if (maxRow === 0 && maxCol === 0) {
      // Generate sample data for demonstration
      maxRow = 20;
      maxCol = 20;
      const matrix: number[][] = [];
      
      for (let i = 0; i <= maxRow; i++) {
        const row: number[] = [];
        for (let j = 0; j <= maxCol; j++) {
          // Create interesting patterns for demo
          const value = Math.sin(i * 0.3) * Math.cos(j * 0.3) * 100 + 
                        Math.sin(i * 0.1) * 50 +
                        Math.random() * 10;
          row.push(value);
        }
        matrix.push(row);
      }
      return { matrix, maxRow, maxCol };
    }

    // Convert cells to matrix
    const matrix: number[][] = [];
    for (let i = 0; i <= maxRow; i++) {
      const row: number[] = [];
      for (let j = 0; j <= maxCol; j++) {
        const cell = cells[`${i}-${j}`];
        const value = cell ? parseFloat(cell.value) || 0 : 0;
        row.push(value);
      }
      matrix.push(row);
    }

    return { matrix, maxRow, maxCol };
  }, [spreadsheet.cells]);

  // Auto-rotate animation
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setFrameIndex(prev => prev + 1);
    }, 50);

    return () => clearInterval(interval);
  }, [autoRotate]);

  const getPlotData = () => {
    const { matrix, maxRow, maxCol } = processSpreadsheetData;
    
    switch (visualizationType) {
      case 'surface':
        return [{
          type: 'surface',
          z: matrix,
          colorscale: isDarkMode ? 'Viridis' : 'RdBu',
          contours: {
            z: {
              show: true,
              usecolormap: true,
              highlightcolor: "#42f462",
              project: { z: true }
            }
          },
          showscale: true,
          colorbar: {
            thickness: 20,
            len: 0.7,
            tickfont: { color: isDarkMode ? '#fff' : '#000' }
          }
        }];

      case 'scatter3d':
        const scatterData: any[] = [];
        matrix.forEach((row, i) => {
          row.forEach((value, j) => {
            if (value !== 0) {
              scatterData.push({ x: j, y: i, z: value });
            }
          });
        });
        
        return [{
          type: 'scatter3d',
          mode: 'markers',
          x: scatterData.map(d => d.x),
          y: scatterData.map(d => d.y),
          z: scatterData.map(d => d.z),
          marker: {
            size: 5,
            color: scatterData.map(d => d.z),
            colorscale: isDarkMode ? 'Plasma' : 'Portland',
            showscale: true,
            colorbar: {
              thickness: 20,
              len: 0.7,
              tickfont: { color: isDarkMode ? '#fff' : '#000' }
            }
          }
        }];

      case 'mesh3d':
        const meshX: number[] = [];
        const meshY: number[] = [];
        const meshZ: number[] = [];
        
        for (let i = 0; i < maxRow; i++) {
          for (let j = 0; j < maxCol; j++) {
            meshX.push(j);
            meshY.push(i);
            meshZ.push(matrix[i][j]);
          }
        }
        
        return [{
          type: 'mesh3d',
          x: meshX,
          y: meshY,
          z: meshZ,
          intensity: meshZ,
          colorscale: isDarkMode ? 'Electric' : 'Jet',
          showscale: true,
          colorbar: {
            thickness: 20,
            len: 0.7,
            tickfont: { color: isDarkMode ? '#fff' : '#000' }
          }
        }];

      case 'heatmap3d':
        // Create multiple layers for 3D heatmap effect
        const layers = [];
        const numLayers = 5;
        
        for (let layer = 0; layer < numLayers; layer++) {
          const opacity = 0.3 + (layer * 0.1);
          const zOffset = layer * 10;
          
          layers.push({
            type: 'surface',
            z: matrix.map(row => row.map(val => val + zOffset)),
            surfacecolor: matrix,
            colorscale: isDarkMode ? 'Hot' : 'YlOrRd',
            opacity: opacity,
            showscale: layer === 0,
            colorbar: layer === 0 ? {
              thickness: 20,
              len: 0.7,
              tickfont: { color: isDarkMode ? '#fff' : '#000' }
            } : undefined
          });
        }
        return layers;

      case 'bar3d':
        const barData: any[] = [];
        
        for (let i = 0; i <= Math.min(10, maxRow); i++) {
          for (let j = 0; j <= Math.min(10, maxCol); j++) {
            const value = matrix[i]?.[j] || 0;
            if (value !== 0) {
              barData.push({
                type: 'mesh3d',
                x: [j-0.4, j+0.4, j+0.4, j-0.4, j-0.4, j+0.4, j+0.4, j-0.4],
                y: [i-0.4, i-0.4, i+0.4, i+0.4, i-0.4, i-0.4, i+0.4, i+0.4],
                z: [0, 0, 0, 0, value, value, value, value],
                i: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
                j: [1, 2, 3, 0, 4, 5, 6, 7, 1, 5, 6, 2],
                k: [4, 5, 6, 7, 5, 6, 7, 4, 0, 4, 7, 3],
                intensity: Array(8).fill(value),
                colorscale: [[0, '#1976d2'], [1, '#42a5f5']],
                showscale: false
              });
            }
          }
        }
        return barData;

      case 'ribbon':
        const ribbonTraces = [];
        
        for (let i = 0; i <= Math.min(10, maxRow); i++) {
          const x = [];
          const y = [];
          const z = [];
          
          for (let j = 0; j <= maxCol; j++) {
            x.push(j);
            y.push(i);
            z.push(matrix[i]?.[j] || 0);
          }
          
          ribbonTraces.push({
            type: 'scatter3d',
            mode: 'lines',
            x: x,
            y: y,
            z: z,
            line: {
              color: `hsl(${(i * 360) / maxRow}, 70%, 50%)`,
              width: 4
            },
            showlegend: false
          });
        }
        return ribbonTraces;

      default:
        return [];
    }
  };

  const layout: any = {
    autosize: true,
    height: window.innerHeight - 200,
    paper_bgcolor: isDarkMode ? '#0a0a0a' : '#f5f5f5',
    plot_bgcolor: isDarkMode ? '#1a1a1a' : '#ebebeb',
    font: {
      color: isDarkMode ? '#e0e0e0' : '#333'
    },
    scene: {
      camera: {
        eye: {
          x: 1.5 * Math.cos(frameIndex * 0.02),
          y: 1.5 * Math.sin(frameIndex * 0.02),
          z: 1.5
        }
      },
      xaxis: {
        title: 'Column',
        gridcolor: isDarkMode ? '#444' : '#ddd',
        showbackground: true,
        backgroundcolor: isDarkMode ? '#1a1a1a' : '#f0f0f0'
      },
      yaxis: {
        title: 'Row',
        gridcolor: isDarkMode ? '#444' : '#ddd',
        showbackground: true,
        backgroundcolor: isDarkMode ? '#1a1a1a' : '#f0f0f0'
      },
      zaxis: {
        title: 'Value',
        gridcolor: isDarkMode ? '#444' : '#ddd',
        showbackground: true,
        backgroundcolor: isDarkMode ? '#1a1a1a' : '#f0f0f0'
      }
    },
    margin: {
      l: 0,
      r: 0,
      b: 40,
      t: 40
    },
    title: {
      text: `${spreadsheet.title || 'Spreadsheet'} - 3D Visualization`,
      font: {
        size: 20,
        color: isDarkMode ? '#e0e0e0' : '#333'
      }
    }
  };

  return (
    <div className="spreadsheet-3d-plotly">
      <div className="visualization-controls">
        <div className="control-group">
          <label>Visualization Type:</label>
          <select 
            value={visualizationType} 
            onChange={(e) => setVisualizationType(e.target.value as VisualizationType)}
            className="control-select"
          >
            <option value="surface">3D Surface Plot</option>
            <option value="scatter3d">3D Scatter Plot</option>
            <option value="mesh3d">3D Mesh</option>
            <option value="heatmap3d">3D Layered Heatmap</option>
            <option value="bar3d">3D Bar Chart</option>
            <option value="ribbon">3D Ribbon Chart</option>
          </select>
        </div>

        <div className="control-group">
          <label>Data Range:</label>
          <input 
            type="text" 
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
            placeholder="e.g., A1:J10"
            className="control-input"
          />
        </div>

        <div className="control-group">
          <label className="checkbox-label">
            <input 
              type="checkbox"
              checked={autoRotate}
              onChange={(e) => setAutoRotate(e.target.checked)}
            />
            Auto Rotate
          </label>
        </div>

        <div className="control-group">
          <button 
            onClick={() => {
              // Reset view
              setFrameIndex(0);
              setAutoRotate(false);
            }}
            className="control-button"
          >
            Reset View
          </button>
        </div>

        <div className="info-panel">
          <div className="info-item">
            <span className="info-label">Cells:</span>
            <span className="info-value">{Object.keys(spreadsheet.cells || {}).length}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Dimensions:</span>
            <span className="info-value">
              {processSpreadsheetData.maxRow + 1} × {processSpreadsheetData.maxCol + 1}
            </span>
          </div>
        </div>
      </div>

      <div className="plot-container">
        <Plot
          data={getPlotData() as any}
          layout={layout}
          config={{
            displayModeBar: true,
            displaylogo: false,
            modeBarButtonsToRemove: ['sendDataToCloud'],
            toImageButtonOptions: {
              format: 'png',
              filename: `${spreadsheet.title || 'spreadsheet'}_3d_visualization`,
              height: 1080,
              width: 1920,
              scale: 1
            }
          }}
          style={{ width: '100%', height: '100%' }}
          useResizeHandler={true}
        />
      </div>

      <div className="visualization-tips">
        <h3>Interactive Controls:</h3>
        <ul>
          <li><strong>Rotate:</strong> Click and drag to rotate the 3D view</li>
          <li><strong>Zoom:</strong> Scroll or pinch to zoom in/out</li>
          <li><strong>Pan:</strong> Right-click and drag to pan</li>
          <li><strong>Reset:</strong> Double-click to reset the view</li>
          <li><strong>Export:</strong> Use the camera icon to save as image</li>
        </ul>
      </div>
    </div>
  );
};

export default Spreadsheet3DPlotly;