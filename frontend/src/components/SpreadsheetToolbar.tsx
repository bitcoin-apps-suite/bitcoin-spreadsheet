import React, { useState, useEffect } from 'react';
import { SpreadsheetUtils } from '../utils/SpreadsheetUtils';

interface SpreadsheetToolbarProps {
  isDarkMode?: boolean;
  isAutoSaveEnabled?: boolean;
  onAutoSaveToggle?: (enabled: boolean) => void;
  onSave?: () => void;
  spreadsheetTitle?: string;
  onTitleChange?: (newTitle: string) => void;
}

const SpreadsheetToolbar: React.FC<SpreadsheetToolbarProps> = ({ 
  isDarkMode, 
  isAutoSaveEnabled, 
  onAutoSaveToggle, 
  onSave,
  spreadsheetTitle,
  onTitleChange
}) => {
  const [selectedCell, setSelectedCell] = useState('A1');
  const [formulaValue, setFormulaValue] = useState('');
  const [currentFormat, setCurrentFormat] = useState('General');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editingTitleValue, setEditingTitleValue] = useState('');

  const buttonStyle = {
    padding: '4px 8px',
    margin: '1px',
    border: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
    borderRadius: '3px',
    background: isDarkMode ? '#2a2a2a' : '#f8f8f8',
    color: isDarkMode ? '#e0e0e0' : '#333',
    cursor: 'pointer',
    fontSize: '11px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '3px',
    transition: 'all 0.15s ease',
    fontWeight: '500'
  };

  const iconButtonStyle = {
    ...buttonStyle,
    padding: '5px',
    minWidth: '24px',
    height: '24px',
    justifyContent: 'center',
    fontSize: '12px'
  };

  const dropdownStyle = {
    padding: '4px 8px',
    margin: '1px',
    border: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
    borderRadius: '3px',
    background: isDarkMode ? '#2a2a2a' : '#fff',
    color: isDarkMode ? '#e0e0e0' : '#333',
    fontSize: '11px',
    minWidth: '90px',
    height: '24px',
    cursor: 'pointer'
  };

  const formulaBarStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '6px',
    borderBottom: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
    background: isDarkMode ? '#1a1a1a' : '#f9f9f9',
    gap: '6px'
  };

  const toolbarStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    alignItems: 'center',
    padding: '4px 6px',
    borderBottom: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
    background: isDarkMode ? '#1a1a1a' : '#f9f9f9',
    gap: '2px'
  };

  const separatorStyle = {
    width: '1px',
    height: '20px',
    background: isDarkMode ? '#444' : '#ddd',
    margin: '0 4px'
  };

  return (
    <div>
      {/* Formula Bar */}
      <div style={formulaBarStyle}>
        {/* Spreadsheet Title */}
        {isEditingTitle ? (
          <input
            type="text"
            value={editingTitleValue}
            onChange={(e) => setEditingTitleValue(e.target.value)}
            onBlur={() => {
              if (editingTitleValue.trim() && editingTitleValue !== spreadsheetTitle) {
                onTitleChange?.(editingTitleValue.trim());
              }
              setIsEditingTitle(false);
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                if (editingTitleValue.trim() && editingTitleValue !== spreadsheetTitle) {
                  onTitleChange?.(editingTitleValue.trim());
                }
                setIsEditingTitle(false);
              } else if (e.key === 'Escape') {
                setIsEditingTitle(false);
                setEditingTitleValue(spreadsheetTitle || '');
              }
            }}
            autoFocus
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: isDarkMode ? '#e0e0e0' : '#333',
              backgroundColor: isDarkMode ? '#2a2a2a' : '#fff',
              border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
              borderRadius: '3px',
              padding: '2px 6px',
              marginRight: '12px',
              minWidth: '120px',
              outline: 'none'
            }}
          />
        ) : (
          <div 
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: isDarkMode ? '#e0e0e0' : '#333',
              marginRight: '12px',
              minWidth: '120px',
              cursor: 'pointer',
              padding: '2px 6px',
              borderRadius: '3px',
              transition: 'background-color 0.15s ease'
            }}
            onDoubleClick={() => {
              setIsEditingTitle(true);
              setEditingTitleValue(spreadsheetTitle || 'Untitled Spreadsheet');
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            title="Double-click to rename"
          >
            {spreadsheetTitle || 'Untitled Spreadsheet'}
          </div>
        )}

        {/* Auto-save */}
        <label style={{
          display: 'flex',
          alignItems: 'center',
          color: isDarkMode ? '#e0e0e0' : '#333',
          fontSize: '11px',
          marginRight: '8px',
          cursor: 'pointer'
        }}>
          <input
            type="checkbox"
            checked={isAutoSaveEnabled || false}
            onChange={(e) => onAutoSaveToggle?.(e.target.checked)}
            style={{ marginRight: '4px', transform: 'scale(0.8)' }}
          />
          Auto-save
        </label>

        {/* Save Button */}
        <button
          onClick={() => onSave?.()}
          style={{
            padding: '4px 8px',
            backgroundColor: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '11px',
            fontWeight: 'bold',
            marginRight: '12px',
            height: '22px',
            display: 'flex',
            alignItems: 'center',
            gap: '3px'
          }}
        >
          💾 Save
        </button>

        <div style={{
          minWidth: '50px',
          padding: '3px 6px',
          border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
          borderRadius: '3px',
          background: isDarkMode ? '#2a2a2a' : '#fff',
          color: isDarkMode ? '#e0e0e0' : '#333',
          fontSize: '11px',
          fontWeight: 'bold',
          height: '22px',
          display: 'flex',
          alignItems: 'center'
        }}>
          {selectedCell}
        </div>
        <span style={{ fontSize: '14px', color: isDarkMode ? '#666' : '#999' }}>𝑓ₓ</span>
        <input
          type="text"
          value={formulaValue}
          onChange={(e) => setFormulaValue(e.target.value)}
          placeholder="Enter formula or value..."
          style={{
            flex: 1,
            padding: '3px 8px',
            border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
            borderRadius: '3px',
            background: isDarkMode ? '#2a2a2a' : '#fff',
            color: isDarkMode ? '#e0e0e0' : '#333',
            fontSize: '11px',
            outline: 'none',
            height: '22px'
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              // Apply formula to selected cell
              if (formulaValue.trim()) {
                SpreadsheetUtils.insertFormula(formulaValue);
                setFormulaValue('');
              }
            }
          }}
        />
      </div>

      {/* Main Toolbar */}
      <div style={toolbarStyle}>
        {/* File Operations */}
        <button 
          style={iconButtonStyle}
          onClick={() => console.log('New')}
          title="New Spreadsheet"
        >
          📄
        </button>
        <button 
          style={iconButtonStyle}
          onClick={() => console.log('Open')}
          title="Open"
        >
          📁
        </button>
        <button 
          style={iconButtonStyle}
          onClick={() => console.log('Save')}
          title="Save"
        >
          💾
        </button>

        <div style={separatorStyle}></div>

        {/* Undo/Redo */}
        <button 
          style={iconButtonStyle}
          onClick={() => SpreadsheetUtils.undo()}
          title="Undo (⌘Z)"
        >
          ↶
        </button>
        <button 
          style={iconButtonStyle}
          onClick={() => SpreadsheetUtils.redo()}
          title="Redo (⇧⌘Z)"
        >
          ↷
        </button>

        <div style={separatorStyle}></div>

        {/* Format Dropdown */}
        <select 
          style={dropdownStyle}
          value={currentFormat}
          onChange={(e) => {
            setCurrentFormat(e.target.value);
            switch(e.target.value) {
              case 'Currency':
                SpreadsheetUtils.applyCurrency();
                break;
              case 'Percentage':
                SpreadsheetUtils.applyPercentage();
                break;
              // Add more format cases
            }
          }}
        >
          <option value="General">General</option>
          <option value="Number">Number</option>
          <option value="Currency">Currency</option>
          <option value="Percentage">Percentage</option>
          <option value="Date">Date</option>
          <option value="Time">Time</option>
          <option value="Text">Text</option>
        </select>

        <div style={separatorStyle}></div>

        {/* Font Formatting */}
        <button 
          style={{...iconButtonStyle, fontWeight: 'bold'}}
          onClick={() => SpreadsheetUtils.applyBold()}
          title="Bold (⌘B)"
        >
          B
        </button>
        <button 
          style={{...iconButtonStyle, fontStyle: 'italic'}}
          onClick={() => console.log('Italic')}
          title="Italic (⌘I)"
        >
          I
        </button>
        <button 
          style={{...iconButtonStyle, textDecoration: 'underline'}}
          onClick={() => console.log('Underline')}
          title="Underline (⌘U)"
        >
          U
        </button>

        <div style={separatorStyle}></div>

        {/* Alignment */}
        <button 
          style={iconButtonStyle}
          onClick={() => console.log('Align Left')}
          title="Align Left"
        >
          ⬅️
        </button>
        <button 
          style={iconButtonStyle}
          onClick={() => console.log('Align Center')}
          title="Align Center"
        >
          ↔️
        </button>
        <button 
          style={iconButtonStyle}
          onClick={() => console.log('Align Right')}
          title="Align Right"
        >
          ➡️
        </button>

        <div style={separatorStyle}></div>

        {/* Insert/Delete */}
        <button 
          style={buttonStyle}
          onClick={() => SpreadsheetUtils.insertRowAbove()}
          title="Insert Row"
        >
          +R
        </button>
        <button 
          style={buttonStyle}
          onClick={() => SpreadsheetUtils.insertColumnLeft()}
          title="Insert Column"
        >
          +C
        </button>
        <button 
          style={buttonStyle}
          onClick={() => SpreadsheetUtils.deleteRow()}
          title="Delete Row"
        >
          -R
        </button>
        <button 
          style={buttonStyle}
          onClick={() => SpreadsheetUtils.deleteColumn()}
          title="Delete Column"
        >
          -C
        </button>

        <div style={separatorStyle}></div>

        {/* Functions */}
        <button 
          style={buttonStyle}
          onClick={() => SpreadsheetUtils.insertSumFormula()}
          title="Sum Function"
        >
          Σ
        </button>
        <button 
          style={buttonStyle}
          onClick={() => SpreadsheetUtils.insertAverageFormula()}
          title="Average Function"
        >
          ⌀
        </button>
        <button 
          style={buttonStyle}
          onClick={() => SpreadsheetUtils.insertCountFormula()}
          title="Count Function"
        >
          #
        </button>

        <div style={separatorStyle}></div>

        {/* Data Operations */}
        <button 
          style={buttonStyle}
          onClick={() => SpreadsheetUtils.sortAscending()}
          title="Sort A→Z"
        >
          A→Z
        </button>
        <button 
          style={buttonStyle}
          onClick={() => SpreadsheetUtils.sortDescending()}
          title="Sort Z→A"
        >
          Z→A
        </button>
        <button 
          style={buttonStyle}
          onClick={() => SpreadsheetUtils.toggleFilters()}
          title="Toggle Filters"
        >
          🔽
        </button>

        <div style={separatorStyle}></div>

        {/* Import/Export */}
        <button 
          style={buttonStyle}
          onClick={() => SpreadsheetUtils.importFromCSV()}
          title="Import CSV"
        >
          📥
        </button>
        <button 
          style={buttonStyle}
          onClick={() => SpreadsheetUtils.exportToCSV()}
          title="Export CSV"
        >
          📤
        </button>

        <div style={separatorStyle}></div>

        {/* More Formulas Dropdown */}
        <select 
          style={{...dropdownStyle, minWidth: '70px'}}
          onChange={(e) => {
            if (e.target.value) {
              SpreadsheetUtils.insertFormula(e.target.value);
              e.target.value = ''; // Reset selection
            }
          }}
        >
          <option value="">📊 fx</option>
          <option value="SUM(A1:A10)">SUM</option>
          <option value="AVERAGE(A1:A10)">AVERAGE</option>
          <option value="COUNT(A1:A10)">COUNT</option>
          <option value="MAX(A1:A10)">MAX</option>
          <option value="MIN(A1:A10)">MIN</option>
          <option value="IF(A1>0,&quot;Yes&quot;,&quot;No&quot;)">IF</option>
          <option value="VLOOKUP(A1,A:B,2,FALSE)">VLOOKUP</option>
          <option value="TODAY()">TODAY</option>
          <option value="NOW()">NOW</option>
          <option value="RAND()">RAND</option>
        </select>

        {/* Chart Button */}
        <button 
          style={buttonStyle}
          onClick={() => console.log('Insert Chart')}
          title="Insert Chart"
        >
          📊
        </button>
      </div>
    </div>
  );
};

export default SpreadsheetToolbar;