import React, { useState, useEffect, useRef } from 'react';
import { BitcoinService, SpreadsheetData, CellData } from '../services/BitcoinService';
import './MobileSpreadsheet.css';

interface MobileSpreadsheetProps {
  bitcoinService: BitcoinService;
  spreadsheet: SpreadsheetData | null;
  onSpreadsheetUpdate: (spreadsheet: SpreadsheetData) => void;
  isAuthenticated: boolean;
  isDarkMode: boolean;
}

const MobileSpreadsheet: React.FC<MobileSpreadsheetProps> = ({
  bitcoinService,
  spreadsheet,
  onSpreadsheetUpdate,
  isAuthenticated,
  isDarkMode
}) => {
  const [data, setData] = useState<any[][]>([]);
  const [selectedCell, setSelectedCell] = useState<{row: number; col: number} | null>(null);
  const [editingCell, setEditingCell] = useState<{row: number; col: number} | null>(null);
  const [editValue, setEditValue] = useState('');
  const [viewportCols, setViewportCols] = useState({ start: 0, end: 4 });
  const [viewportRows, setViewportRows] = useState({ start: 0, end: 20 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [showQuickActions, setShowQuickActions] = useState(false);

  // Initialize data
  useEffect(() => {
    const initialData: any[][] = [];
    for (let i = 0; i < 100; i++) {
      const row: any[] = [];
      for (let j = 0; j < 26; j++) {
        row.push('');
      }
      initialData.push(row);
    }

    if (spreadsheet?.cells) {
      Object.entries(spreadsheet.cells).forEach(([key, cell]) => {
        const [row, col] = key.split('-').map(Number);
        if (row < 100 && col < 26) {
          initialData[row][col] = cell.value;
        }
      });
    }

    setData(initialData);
  }, [spreadsheet]);

  // Adjust viewport based on screen size
  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const colWidth = 80;
      const visibleCols = Math.floor(width / colWidth);
      setViewportCols({ start: 0, end: Math.min(visibleCols, 26) });

      const height = window.innerHeight - 200; // Account for toolbar and navigation
      const rowHeight = 40;
      const visibleRows = Math.floor(height / rowHeight);
      setViewportRows({ start: 0, end: Math.min(visibleRows, 100) });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const handleCellTap = (row: number, col: number) => {
    if (selectedCell?.row === row && selectedCell?.col === col) {
      // Double tap to edit
      setEditingCell({ row, col });
      setEditValue(data[row][col] || '');
      setShowQuickActions(false);
    } else {
      setSelectedCell({ row, col });
      setEditingCell(null);
      setShowQuickActions(true);
    }
  };

  const handleCellEdit = (value: string) => {
    if (!editingCell || !spreadsheet) return;

    const newData = [...data];
    newData[editingCell.row][editingCell.col] = value;
    setData(newData);

    const key = `${editingCell.row}-${editingCell.col}`;
    const updatedCells = { ...spreadsheet.cells };

    if (value.trim()) {
      updatedCells[key] = {
        value,
        lastUpdated: Date.now(),
        row: editingCell.row,
        col: editingCell.col,
        dataType: 'string' as const
      };
    } else {
      delete updatedCells[key];
    }

    const updatedSpreadsheet = {
      ...spreadsheet,
      cells: updatedCells,
      lastModified: new Date().toISOString()
    };

    onSpreadsheetUpdate(updatedSpreadsheet);
    setEditingCell(null);
    setShowQuickActions(false);
  };

  const handleScroll = (direction: 'left' | 'right' | 'up' | 'down') => {
    switch(direction) {
      case 'left':
        if (viewportCols.start > 0) {
          setViewportCols({
            start: viewportCols.start - 1,
            end: viewportCols.end - 1
          });
        }
        break;
      case 'right':
        if (viewportCols.end < 26) {
          setViewportCols({
            start: viewportCols.start + 1,
            end: viewportCols.end + 1
          });
        }
        break;
      case 'up':
        if (viewportRows.start > 0) {
          setViewportRows({
            start: viewportRows.start - 1,
            end: viewportRows.end - 1
          });
        }
        break;
      case 'down':
        if (viewportRows.end < 100) {
          setViewportRows({
            start: viewportRows.start + 1,
            end: viewportRows.end + 1
          });
        }
        break;
    }
  };

  const columnLabel = (index: number) => String.fromCharCode(65 + index);

  return (
    <div className={`mobile-spreadsheet ${isDarkMode ? 'dark' : ''}`}>
      {/* Mobile Toolbar */}
      <div className="mobile-toolbar">
        <button className="toolbar-btn" onClick={() => handleScroll('left')}>
          ←
        </button>
        <button className="toolbar-btn" onClick={() => handleScroll('up')}>
          ↑
        </button>
        <button className="toolbar-btn" onClick={() => handleScroll('down')}>
          ↓
        </button>
        <button className="toolbar-btn" onClick={() => handleScroll('right')}>
          →
        </button>
        <div className="cell-indicator">
          {selectedCell ? `${columnLabel(selectedCell.col)}${selectedCell.row + 1}` : ''}
        </div>
      </div>

      {/* Quick Actions (shown when cell selected) */}
      {showQuickActions && selectedCell && (
        <div className="quick-actions">
          <button onClick={() => {
            setEditingCell(selectedCell);
            setEditValue(data[selectedCell.row][selectedCell.col] || '');
            setShowQuickActions(false);
          }}>Edit</button>
          <button onClick={() => {
            handleCellEdit('');
            setShowQuickActions(false);
          }}>Clear</button>
          <button onClick={() => setShowQuickActions(false)}>Cancel</button>
        </div>
      )}

      {/* Edit Modal */}
      {editingCell && (
        <div className="edit-modal">
          <div className="edit-header">
            <span>Edit {columnLabel(editingCell.col)}{editingCell.row + 1}</span>
            <button onClick={() => setEditingCell(null)}>✕</button>
          </div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            autoFocus
            className="edit-input"
          />
          <div className="edit-actions">
            <button onClick={() => handleCellEdit(editValue)}>Save</button>
            <button onClick={() => setEditingCell(null)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Spreadsheet Grid */}
      <div className="mobile-grid-container" ref={containerRef}>
        <table className="mobile-grid">
          <thead>
            <tr>
              <th className="row-header"></th>
              {Array.from(
                { length: viewportCols.end - viewportCols.start },
                (_, i) => viewportCols.start + i
              ).map(col => (
                <th key={col} className="col-header">
                  {columnLabel(col)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from(
              { length: viewportRows.end - viewportRows.start },
              (_, i) => viewportRows.start + i
            ).map(row => (
              <tr key={row}>
                <td className="row-header">{row + 1}</td>
                {Array.from(
                  { length: viewportCols.end - viewportCols.start },
                  (_, i) => viewportCols.start + i
                ).map(col => (
                  <td
                    key={`${row}-${col}`}
                    className={`cell ${
                      selectedCell?.row === row && selectedCell?.col === col ? 'selected' : ''
                    } ${
                      editingCell?.row === row && editingCell?.col === col ? 'editing' : ''
                    }`}
                    onClick={() => handleCellTap(row, col)}
                  >
                    {data[row]?.[col] || ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <span className="range-info">
          {columnLabel(viewportCols.start)}:{columnLabel(viewportCols.end - 1)} | 
          Rows {viewportRows.start + 1}-{viewportRows.end}
        </span>
      </div>
    </div>
  );
};

export default MobileSpreadsheet;