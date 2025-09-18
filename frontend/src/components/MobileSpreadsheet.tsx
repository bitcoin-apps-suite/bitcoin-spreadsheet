import React, { useState, useRef, useEffect } from 'react';
import { SpreadsheetData, CellData } from '../services/BitcoinService';
import './MobileSpreadsheet.css';

interface MobileSpreadsheetProps {
  spreadsheetData: SpreadsheetData | null;
  onSpreadsheetUpdate: (data: SpreadsheetData) => void;
  isDarkMode: boolean;
}

const MobileSpreadsheet: React.FC<MobileSpreadsheetProps> = ({
  spreadsheetData,
  onSpreadsheetUpdate,
  isDarkMode
}) => {
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [editingCell, setEditingCell] = useState<string | null>(null);
  const [cellValue, setCellValue] = useState<string>('');
  const [showFormulaBar, setShowFormulaBar] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate grid cells
  const columns = Array.from({ length: 10 }, (_, i) => String.fromCharCode(65 + i));
  const rows = Array.from({ length: 50 }, (_, i) => i + 1);

  // Initialize empty spreadsheet
  useEffect(() => {
    if (!spreadsheetData) {
      const initialData: SpreadsheetData = {
        id: `sheet-${Date.now()}`,
        title: 'Mobile Spreadsheet',
        cells: {},
        owner: ''
      };
      onSpreadsheetUpdate(initialData);
    }
  }, [spreadsheetData, onSpreadsheetUpdate]);

  const getCellValue = (cellId: string) => {
    return spreadsheetData?.cells[cellId]?.value || '';
  };

  const getCellDisplay = (cellId: string) => {
    const cell = spreadsheetData?.cells[cellId];
    if (!cell) return '';
    
    // For formulas, show the computed value when not editing
    if (cell.dataType === 'formula' && !editingCell) {
      // Calculate formula result here - for now just show the value
      return cell.value || '';
    }
    return cell.value || '';
  };

  const handleCellTap = (cellId: string) => {
    if (editingCell === cellId) return;
    
    if (selectedCell === cellId) {
      // Double tap to edit
      startEditing(cellId);
    } else {
      // Single tap to select
      setSelectedCell(cellId);
      setCellValue(getCellValue(cellId));
      setShowFormulaBar(true);
    }
  };

  const startEditing = (cellId: string) => {
    setEditingCell(cellId);
    setCellValue(getCellValue(cellId));
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleCellChange = (value: string) => {
    setCellValue(value);
  };

  const handleCellSubmit = () => {
    if (!editingCell && !selectedCell) return;
    
    const cellId = editingCell || selectedCell;
    if (!cellId || !spreadsheetData) return;

    const updatedCells = { ...spreadsheetData.cells };
    
    if (cellValue.trim()) {
      // Parse row and column from cellId (e.g., 'A1' -> row: 1, col: 0)
      const col = cellId.charCodeAt(0) - 65; // A=0, B=1, etc.
      const row = parseInt(cellId.slice(1)) - 1; // 1-indexed to 0-indexed
      
      updatedCells[cellId] = {
        row: row,
        col: col,
        value: cellValue,
        dataType: cellValue.startsWith('=') ? 'formula' : 'string',
        lastUpdated: Date.now()
      };
    } else {
      delete updatedCells[cellId];
    }

    const updatedSpreadsheet: SpreadsheetData = {
      ...spreadsheetData,
      cells: updatedCells
    };

    onSpreadsheetUpdate(updatedSpreadsheet);
    setEditingCell(null);
    setShowFormulaBar(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCellSubmit();
    } else if (e.key === 'Escape') {
      setEditingCell(null);
      setCellValue('');
      setShowFormulaBar(false);
    }
  };

  return (
    <div className={`mobile-spreadsheet ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Mobile toolbar */}
      <div className="mobile-toolbar">
        <button className="mobile-tool-btn" onClick={() => setShowFormulaBar(!showFormulaBar)}>
          <span>fx</span>
        </button>
        <button className="mobile-tool-btn">
          <span>📊</span>
        </button>
        <button className="mobile-tool-btn">
          <span>🎨</span>
        </button>
        <button className="mobile-tool-btn">
          <span>💾</span>
        </button>
      </div>

      {/* Formula bar */}
      {showFormulaBar && (
        <div className="mobile-formula-bar">
          <span className="cell-reference">{selectedCell || 'A1'}</span>
          <input
            ref={inputRef}
            type="text"
            value={cellValue}
            onChange={(e) => handleCellChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleCellSubmit}
            placeholder="Enter value or formula"
            className="formula-input"
          />
        </div>
      )}

      {/* Spreadsheet grid */}
      <div ref={gridRef} className="mobile-grid-container">
        <table className="mobile-grid">
          <thead>
            <tr>
              <th className="row-header"></th>
              {columns.map(col => (
                <th key={col} className="col-header">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row}>
                <td className="row-header">{row}</td>
                {columns.map(col => {
                  const cellId = `${col}${row}`;
                  const isSelected = selectedCell === cellId;
                  const isEditing = editingCell === cellId;
                  
                  return (
                    <td
                      key={cellId}
                      className={`grid-cell ${isSelected ? 'selected' : ''} ${isEditing ? 'editing' : ''}`}
                      onClick={() => handleCellTap(cellId)}
                    >
                      {isEditing ? (
                        <input
                          ref={inputRef}
                          type="text"
                          value={cellValue}
                          onChange={(e) => handleCellChange(e.target.value)}
                          onKeyDown={handleKeyDown}
                          onBlur={handleCellSubmit}
                          className="cell-edit-input"
                          autoFocus
                        />
                      ) : (
                        <span className="cell-content">{getCellDisplay(cellId)}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile bottom navigation */}
      <div className="mobile-bottom-nav">
        <button className="nav-btn active">
          <span>📊</span>
          <span>Sheet</span>
        </button>
        <button className="nav-btn">
          <span>📈</span>
          <span>Charts</span>
        </button>
        <button className="nav-btn">
          <span>⚡</span>
          <span>Functions</span>
        </button>
        <button className="nav-btn">
          <span>📁</span>
          <span>Files</span>
        </button>
      </div>
    </div>
  );
};

export default MobileSpreadsheet;