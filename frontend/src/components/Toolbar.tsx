import React, { useState } from 'react';
import { SpreadsheetData } from '../services/BitcoinService';
import './Toolbar.css';

interface ToolbarProps {
  spreadsheet: SpreadsheetData;
  selectedCell: { row: number; col: number } | null;
  onTitleChange: (title: string) => void;
  isDirty: boolean;
  isAuthenticated: boolean;
  onSave: () => void;
  calculateSaveCost: () => { cells: number; satoshis: number; usd: string };
}

const Toolbar: React.FC<ToolbarProps> = ({ spreadsheet, selectedCell, onTitleChange, isDirty, isAuthenticated, onSave, calculateSaveCost }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleValue, setTitleValue] = useState(spreadsheet.title);

  const handleTitleSubmit = () => {
    onTitleChange(titleValue);
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTitleSubmit();
    } else if (e.key === 'Escape') {
      setTitleValue(spreadsheet.title);
      setIsEditingTitle(false);
    }
  };

  const insertFormula = (formula: string) => {
    // This would typically insert the formula into the selected cell
    console.log('Inserting formula:', formula);
  };

  return (
    <div className="toolbar">
      <div className="toolbar-section">
        <div className="spreadsheet-title">
          {isEditingTitle ? (
            <input
              type="text"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              onKeyDown={handleTitleKeyDown}
              onBlur={handleTitleSubmit}
              autoFocus
              className="title-input"
            />
          ) : (
            <h2 onClick={() => setIsEditingTitle(true)} className="title-text">
              {spreadsheet.title}
            </h2>
          )}
        </div>
      </div>

      <div className="toolbar-section">
        <div className="formula-bar">
          <span className="formula-label">fx</span>
          {selectedCell && (
            <span className="cell-reference">
              {String.fromCharCode(65 + selectedCell.col)}{selectedCell.row + 1}
            </span>
          )}
          <input
            type="text"
            placeholder="Enter formula or value"
            className="formula-input"
            readOnly
          />
        </div>
      </div>

      <div className="toolbar-section">
        <div className="function-buttons">
          <button
            className="function-btn"
            onClick={() => insertFormula('=SUM()')}
            title="Sum"
          >
            Σ
          </button>
          <button
            className="function-btn"
            onClick={() => insertFormula('=AVERAGE()')}
            title="Average"
          >
            AVG
          </button>
          <button
            className="function-btn"
            onClick={() => insertFormula('=COUNT()')}
            title="Count"
          >
            CNT
          </button>
          <button
            className="function-btn"
            onClick={() => insertFormula('=MAX()')}
            title="Maximum"
          >
            MAX
          </button>
          <button
            className="function-btn"
            onClick={() => insertFormula('=MIN()')}
            title="Minimum"
          >
            MIN
          </button>
        </div>
      </div>

      <div className="toolbar-section">
        <div className="combined-save-section">
          <div className="cost-info">
            <div className="cost-header">
              <span className="cost-label">Cost:</span>
              <span className="cost-amount">{calculateSaveCost().usd}</span>
            </div>
            <div className="cell-count">
              {calculateSaveCost().cells} cells • {calculateSaveCost().satoshis} sats
            </div>
          </div>
          
          {isDirty && (
            <span className="unsaved-indicator">● Unsaved changes</span>
          )}
          
          <button 
            className="combined-save-button"
            onClick={onSave}
            title={isAuthenticated ? "Save to blockchain with multiple storage options" : "Sign in required to save to blockchain"}
          >
            💾 {isAuthenticated ? 'Save to Blockchain' : 'Sign in to Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
