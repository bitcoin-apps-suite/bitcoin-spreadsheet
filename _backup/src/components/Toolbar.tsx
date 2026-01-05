import React, { useState } from 'react';
import { SpreadsheetData } from '../services/BitcoinService';
import './Toolbar.css';

interface ToolbarProps {
  spreadsheet: SpreadsheetData;
  selectedCell: { row: number; col: number } | null;
  onTitleChange: (title: string) => void;
  isDirty: boolean;
  isAuthenticated: boolean;
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  onSave: () => void;
  calculateSaveCost: () => { cells: number; satoshis: number; usd: string };
  useCellAddresses?: boolean;
  onToggleCellAddresses?: (enabled: boolean) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ spreadsheet, selectedCell, onTitleChange, isDirty, isAuthenticated, isSidebarOpen, onToggleSidebar, onSave, calculateSaveCost, useCellAddresses, onToggleCellAddresses }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleValue, setTitleValue] = useState(spreadsheet.title);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="function-buttons desktop-only">
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
        
        <div className="mobile-menu mobile-only">
          <button 
            className="hamburger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            title="Functions Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Functions
          </button>
          
          {isMenuOpen && (
            <div className="dropdown-menu">
              {onToggleSidebar && (
                <>
                  <button onClick={() => { onToggleSidebar(); setIsMenuOpen(false); }}>
                    <span>📊</span> {isSidebarOpen ? 'Hide' : 'Show'} Spreadsheets
                  </button>
                  <div className="dropdown-divider"></div>
                </>
              )}
              <button onClick={() => { insertFormula('=SUM()'); setIsMenuOpen(false); }}>
                <span>Σ</span> Sum
              </button>
              <button onClick={() => { insertFormula('=AVERAGE()'); setIsMenuOpen(false); }}>
                <span>AVG</span> Average
              </button>
              <button onClick={() => { insertFormula('=COUNT()'); setIsMenuOpen(false); }}>
                <span>CNT</span> Count
              </button>
              <button onClick={() => { insertFormula('=MAX()'); setIsMenuOpen(false); }}>
                <span>MAX</span> Maximum
              </button>
              <button onClick={() => { insertFormula('=MIN()'); setIsMenuOpen(false); }}>
                <span>MIN</span> Minimum
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="toolbar-section">
        <div className="combined-save-section">
          {/* Per-cell addresses toggle */}
          {onToggleCellAddresses && (
            <div className="cell-address-toggle" style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '12px',
              padding: '4px 8px',
              background: 'rgba(255, 165, 0, 0.1)',
              borderRadius: '4px',
              fontSize: '12px'
            }}>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={useCellAddresses || false}
                  onChange={(e) => onToggleCellAddresses(e.target.checked)}
                  style={{ marginRight: '6px' }}
                />
                <span title="Generate unique Bitcoin address for each cell">
                  🔑 Per-Cell Addresses
                </span>
              </label>
            </div>
          )}
          
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
