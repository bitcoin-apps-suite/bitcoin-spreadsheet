import React, { useState, useEffect, useCallback } from 'react';
import { BitcoinService, SpreadsheetData, CellData } from '../services/BitcoinService';
import Cell from './Cell';
import Toolbar from './Toolbar';
import './Spreadsheet.css';

interface SpreadsheetProps {
  bitcoinService: BitcoinService;
}

const Spreadsheet: React.FC<SpreadsheetProps> = ({ bitcoinService }) => {
  const [spreadsheet, setSpreadsheet] = useState<SpreadsheetData | null>(null);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Spreadsheet dimensions
  const ROWS = 20;
  const COLS = 10;

  useEffect(() => {
    const initSpreadsheet = async () => {
      try {
        const newSpreadsheet = await bitcoinService.createSpreadsheet('My Spreadsheet');
        setSpreadsheet(newSpreadsheet);
      } catch (error) {
        console.error('Failed to create spreadsheet:', error);
      }
    };

    initSpreadsheet();
  }, [bitcoinService]);

  const getCellKey = (row: number, col: number): string => {
    return `${row}-${col}`;
  };

  const getColumnLabel = (col: number): string => {
    return String.fromCharCode(65 + col); // A, B, C, etc.
  };

  const handleCellClick = useCallback((row: number, col: number) => {
    setSelectedCell({ row, col });
    setIsEditing(false);
  }, []);

  const handleCellDoubleClick = useCallback((row: number, col: number) => {
    setSelectedCell({ row, col });
    setIsEditing(true);
  }, []);

  const handleCellValueChange = useCallback(async (row: number, col: number, value: string) => {
    if (!spreadsheet) return;

    try {
      // Determine data type
      const dataType = /^\d+(\.\d+)?$/.test(value) ? 'number' :
                      value.startsWith('=') ? 'formula' : 'string';

      await bitcoinService.updateCell(spreadsheet.id, row, col, value, dataType);

      // Update local state
      const cellKey = getCellKey(row, col);
      const updatedCells = {
        ...spreadsheet.cells,
        [cellKey]: {
          row,
          col,
          value,
          dataType: dataType as 'string' | 'number' | 'formula',
          lastUpdated: Date.now()
        }
      };

      setSpreadsheet({
        ...spreadsheet,
        cells: updatedCells
      });

      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update cell:', error);
    }
  }, [spreadsheet, bitcoinService]);

  const getCellValue = (row: number, col: number): string => {
    if (!spreadsheet) return '';

    const cellKey = getCellKey(row, col);
    const cell = spreadsheet.cells[cellKey];

    if (!cell) return '';

    if (cell.dataType === 'formula') {
      // For demo purposes, return the formula as-is
      // In a full implementation, you'd evaluate the formula
      return cell.value;
    }

    return cell.value;
  };

  if (!spreadsheet) {
    return <div className="loading">Creating spreadsheet...</div>;
  }

  return (
    <div className="spreadsheet-container">
      <Toolbar
        spreadsheet={spreadsheet}
        selectedCell={selectedCell}
        onTitleChange={(title) => setSpreadsheet({ ...spreadsheet, title })}
      />

      <div className="spreadsheet-grid">
        {/* Header row with column labels */}
        <div className="grid-header">
          <div className="corner-cell"></div>
          {Array.from({ length: COLS }, (_, col) => (
            <div key={`header-${col}`} className="header-cell">
              {getColumnLabel(col)}
            </div>
          ))}
        </div>

        {/* Data rows */}
        {Array.from({ length: ROWS }, (_, row) => (
          <div key={`row-${row}`} className="grid-row">
            {/* Row number */}
            <div className="row-number">{row + 1}</div>

            {/* Cells */}
            {Array.from({ length: COLS }, (_, col) => {
              const cellKey = getCellKey(row, col);
              const isSelected = selectedCell?.row === row && selectedCell?.col === col;
              const cellValue = getCellValue(row, col);

              return (
                <Cell
                  key={cellKey}
                  row={row}
                  col={col}
                  value={cellValue}
                  isSelected={isSelected}
                  isEditing={isSelected && isEditing}
                  onClick={() => handleCellClick(row, col)}
                  onDoubleClick={() => handleCellDoubleClick(row, col)}
                  onValueChange={(value) => handleCellValueChange(row, col, value)}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div className="status-bar">
        {selectedCell && (
          <span>
            Cell {getColumnLabel(selectedCell.col)}{selectedCell.row + 1}
          </span>
        )}
      </div>
    </div>
  );
};

export default Spreadsheet;
