import React, { useEffect, useRef, useState } from 'react';
import { RevoGrid, type ColumnRegular } from '@revolist/react-datagrid';
import { BitcoinService, SpreadsheetData, CellData } from '../services/BitcoinService';
import SpreadsheetToolbar from './SpreadsheetToolbar';
import Spreadsheet3D from './Spreadsheet3D';
import MobileSpreadsheet from './MobileSpreadsheet';

// RevoGrid doesn't require explicit CSS import - styles are included in the component

interface AdvancedSpreadsheetProps {
  bitcoinService: BitcoinService;
  spreadsheet: SpreadsheetData | null;
  onSpreadsheetUpdate: (spreadsheet: SpreadsheetData) => void;
  isAuthenticated: boolean;
  is3DView?: boolean;
  onToggle3DView?: () => void;
  onNewSpreadsheet?: () => void;
}

const AdvancedSpreadsheet: React.FC<AdvancedSpreadsheetProps> = ({
  bitcoinService,
  spreadsheet,
  onSpreadsheetUpdate,
  isAuthenticated,
  is3DView = false,
  onToggle3DView,
  onNewSpreadsheet
}) => {
  const gridRef = useRef<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [source, setSource] = useState<any[]>([]);
  const [columns, setColumns] = useState<ColumnRegular[]>([]);
  const [isAutoSaveEnabled, setIsAutoSaveEnabled] = useState(false);
  const autoSaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [selectedCell, setSelectedCell] = useState<{row: number; col: string} | null>(null);
  const [editingValue, setEditingValue] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains('dark-mode'));
    };
    
    checkDarkMode();
    
    // Watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize columns with proper sizing
  useEffect(() => {
    // Create columns A-Z (26 columns)
    const cols: ColumnRegular[] = [];
    for (let i = 0; i < 26; i++) {
      const letter = String.fromCharCode(65 + i);
      cols.push({
        prop: letter,
        name: letter,
        size: 85, // Slightly smaller default width
        cellProperties: () => ({
          class: isDarkMode ? 'dark-cell' : '',
        })
      });
    }
    setColumns(cols);
  }, [isDarkMode]);

  // Initialize spreadsheet data
  useEffect(() => {
    if (!spreadsheet) {
      // Initialize with sample data if no spreadsheet for 3D demo
      const initialData: any[] = [];
      
      for (let i = 0; i < 100; i++) {
        const row: any = {};
        for (let j = 0; j < 26; j++) {
          const letter = String.fromCharCode(65 + j);
          row[letter] = '';
        }
        initialData.push(row);
      }
      
      // Add some sample data for 3D visualization
      if (is3DView) {
        initialData[0].A = 'Demo';
        initialData[0].B = 'Data';
        initialData[1].A = '100';
        initialData[1].B = '200';
        initialData[2].A = '=A2+B2';
        initialData[3].C = 'Test';
        initialData[4].D = 'Layer1';
      }
      
      setSource(initialData);
      return;
    }

    // Convert spreadsheet cells to RevoGrid data format
    const maxRow = Math.max(
      100,
      ...Object.keys(spreadsheet.cells || {}).map(key => {
        const [row] = key.split('-').map(Number);
        return row + 1;
      })
    );

    // Create data array for RevoGrid
    const newData: any[] = [];
    for (let i = 0; i < maxRow; i++) {
      const row: any = {};
      for (let j = 0; j < 26; j++) {
        const letter = String.fromCharCode(65 + j);
        const cellKey = `${i}-${j}`;
        const cell = spreadsheet.cells?.[cellKey];
        row[letter] = cell?.value || '';
      }
      newData.push(row);
    }

    setSource(newData);
  }, [spreadsheet, is3DView]);

  // Save data to BitcoinService
  const saveData = async (changes: any[] | null = null) => {
    if (!spreadsheet) return;

    // If specific changes are provided, update only those cells
    if (changes) {
      const updatedCells: { [key: string]: CellData } = { ...spreadsheet.cells };
      
      changes.forEach((change) => {
        const { rowIndex, columnIndex, value } = change;
        const key = `${rowIndex}-${columnIndex}`;
        if (value && value.toString().trim()) {
          updatedCells[key] = {
            value: value.toString(),
            lastUpdated: Date.now(),
            row: rowIndex,
            col: columnIndex,
            dataType: 'string' as const
          };
        } else {
          delete updatedCells[key];
        }
      });

      const updatedSpreadsheet = {
        ...spreadsheet,
        cells: updatedCells,
        lastModified: new Date().toISOString()
      };

      onSpreadsheetUpdate(updatedSpreadsheet);
      
      // Save to localStorage
      const spreadsheets = JSON.parse(localStorage.getItem('spreadsheets') || '[]');
      const index = spreadsheets.findIndex((s: any) => s.id === spreadsheet.id);
      if (index !== -1) {
        spreadsheets[index] = updatedSpreadsheet;
        localStorage.setItem('spreadsheets', JSON.stringify(spreadsheets));
      }
    }
  };

  // Handle cell changes with better behavior
  const handleAfterEdit = (e: any) => {
    const { detail } = e;
    if (!detail || !detail.models) return;

    const changes: any[] = [];
    let lastCell: {row: number; col: string} | null = null;
    
    // Process cell changes
    Object.entries(detail.models).forEach(([key, model]: [string, any]) => {
      const [_, rowIndex] = key.split('.');
      Object.entries(model).forEach(([colProp, value]) => {
        const columnIndex = colProp.charCodeAt(0) - 65; // Convert A-Z to 0-25
        changes.push({
          rowIndex: parseInt(rowIndex),
          columnIndex,
          value
        });
        // Track the last edited cell for formula bar
        lastCell = {
          row: parseInt(rowIndex),
          col: colProp
        };
      });
    });

    // Update selected cell for formula bar
    if (lastCell) {
      const cellRef = lastCell as {row: number; col: string};
      setSelectedCell(cellRef);
      const currentSource = source as any[];
      setEditingValue(currentSource[cellRef.row]?.[cellRef.col] || '');
    }

    // Clear existing timeout
    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
    }

    // Save immediately or with delay based on auto-save setting
    if (isAutoSaveEnabled) {
      autoSaveTimeoutRef.current = setTimeout(() => {
        saveData(changes);
      }, 1000); // 1 second delay for auto-save
    } else {
      saveData(changes);
    }
  };

  // Formula bar input handler
  const handleFormulaBarChange = (value: string) => {
    setEditingValue(value);
    if (selectedCell && gridRef.current) {
      // Update the cell value in real-time
      const newSource = [...source];
      newSource[selectedCell.row][selectedCell.col] = value;
      setSource(newSource);
    }
  };

  // Handle formula bar enter key
  const handleFormulaBarEnter = () => {
    if (selectedCell) {
      const changes = [{
        rowIndex: selectedCell.row,
        columnIndex: selectedCell.col.charCodeAt(0) - 65,
        value: editingValue
      }];
      saveData(changes);
    }
  };

  // Use mobile view for mobile devices
  if (isMobile && !is3DView) {
    return (
      <MobileSpreadsheet
        bitcoinService={bitcoinService}
        spreadsheet={spreadsheet}
        onSpreadsheetUpdate={onSpreadsheetUpdate}
        isAuthenticated={isAuthenticated}
        isDarkMode={isDarkMode}
      />
    );
  }

  return (
    <div className="advanced-spreadsheet-container" style={{ 
      width: '100%', 
      height: '100%',
      backgroundColor: isDarkMode ? '#1a1a1a' : '#fff'
    }}>
      {/* Spreadsheet Toolbar */}
      <SpreadsheetToolbar 
        isDarkMode={isDarkMode}
        isAutoSaveEnabled={isAutoSaveEnabled}
        onAutoSaveToggle={setIsAutoSaveEnabled}
        onSave={() => saveData()}
        spreadsheetTitle={spreadsheet?.title || 'Untitled Spreadsheet'}
        is3DView={is3DView}
        onToggle3DView={onToggle3DView}
        onTitleChange={(newTitle) => {
          if (spreadsheet) {
            const updatedSpreadsheet = {
              ...spreadsheet,
              title: newTitle,
              lastModified: new Date().toISOString()
            };
            onSpreadsheetUpdate(updatedSpreadsheet);
            
            // Update localStorage
            const spreadsheets = JSON.parse(localStorage.getItem('spreadsheets') || '[]');
            const index = spreadsheets.findIndex((s: any) => s.id === spreadsheet.id);
            if (index !== -1) {
              spreadsheets[index] = updatedSpreadsheet;
              localStorage.setItem('spreadsheets', JSON.stringify(spreadsheets));
            }
          }
        }}
        onNewSpreadsheet={onNewSpreadsheet}
      />

      {/* Formula Bar */}
      {!is3DView && (
        <div className="formula-bar" style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px',
          backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f5f5',
          borderBottom: `1px solid ${isDarkMode ? '#444' : '#ddd'}`,
          fontFamily: 'monospace'
        }}>
          <span style={{
            padding: '0 10px',
            color: isDarkMode ? '#b0b0b0' : '#666',
            fontWeight: 'bold',
            minWidth: '50px'
          }}>
            {selectedCell ? `${selectedCell.col}${selectedCell.row + 1}` : ''}
          </span>
          <span style={{
            color: isDarkMode ? '#666' : '#ccc',
            padding: '0 5px'
          }}>|</span>
          <input
            type="text"
            value={editingValue}
            onChange={(e) => handleFormulaBarChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleFormulaBarEnter();
              }
            }}
            style={{
              flex: 1,
              padding: '4px 8px',
              backgroundColor: isDarkMode ? '#1a1a1a' : '#fff',
              color: isDarkMode ? '#e0e0e0' : '#333',
              border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
              borderRadius: '3px',
              fontFamily: 'monospace',
              fontSize: '13px'
            }}
            placeholder="Enter cell value or formula"
          />
        </div>
      )}

      {/* Spreadsheet View */}
      {is3DView ? (
        <div key="3d-view" style={{ width: '100%', height: 'calc(100vh - 350px)' }}>
          <Spreadsheet3D
            bitcoinService={bitcoinService}
            spreadsheet={spreadsheet}
            onSpreadsheetUpdate={onSpreadsheetUpdate}
            isAuthenticated={isAuthenticated}
            isDarkMode={isDarkMode}
          />
        </div>
      ) : (
        <div 
          key="2d-view" 
          className={`revogrid-container ${isDarkMode ? 'revogrid-dark' : ''}`}
          style={{ height: 'calc(100vh - 400px)' }}
        >
          <RevoGrid
            ref={gridRef}
            source={source}
            columns={columns}
            theme={isDarkMode ? 'compact' : 'default'}
            rowHeaders={true}
            autoSizeColumn={false}
            range={true}
            resize={true}
            readonly={false}
            useClipboard={true}
            exporting={true}
            onAfteredit={handleAfterEdit}
            rowSize={24} // Compact row height
            frameSize={1}
            additionalData={{
              isDarkMode
            }}
          />
        </div>
      )}

      {/* Enhanced styles for RevoGrid */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Base grid styling */
        .revogrid-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
          font-size: 13px;
        }
        
        /* Compact cell styling */
        .revogrid-container revo-grid {
          --cell-padding: 2px 4px;
          --row-height: 24px;
        }
        
        /* Header styling */
        .revogrid-container .rgHeaderCell {
          font-weight: 500;
          font-size: 12px;
          text-align: center;
          background: linear-gradient(to bottom, #f8f8f8, #e8e8e8);
          border-right: 1px solid #d0d0d0;
          border-bottom: 1px solid #d0d0d0;
        }
        
        /* Cell styling */
        .revogrid-container .rgCell {
          padding: 2px 4px;
          line-height: 20px;
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          transition: background-color 0.1s;
        }
        
        /* Cell hover effect */
        .revogrid-container .rgCell:hover {
          background-color: rgba(0, 123, 255, 0.05);
        }
        
        /* Selection styling */
        .revogrid-container .rgCell.focused {
          border: 2px solid #4285F4 !important;
          outline: none;
          box-shadow: inset 0 0 0 1px #4285F4;
        }
        
        .revogrid-container .rgCell.selected {
          background-color: rgba(66, 133, 244, 0.1);
        }
        
        /* Edit mode */
        .revogrid-container .editor-input,
        .revogrid-container .rgCell.edit-mode {
          padding: 1px 3px;
          font-size: 13px;
          border: 2px solid #4285F4;
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        /* Row number column */
        .revogrid-container .rowHeaders .rgHeaderCell {
          width: 40px;
          min-width: 40px;
          background: linear-gradient(to bottom, #f8f8f8, #e8e8e8);
        }
        
        /* Dark mode enhancements */
        .revogrid-dark {
          --revo-background: #1a1a1a;
          --revo-header-background: linear-gradient(to bottom, #2a2a2a, #222);
          --revo-header-color: #b0b0b0;
          --revo-cell-background: #0a0a0a;
          --revo-cell-color: #e0e0e0;
          --revo-border-color: #333;
          --revo-selection-bg: rgba(255, 165, 0, 0.15);
          --revo-selection-border-color: #FFA500;
          --revo-focus-color: #FFA500;
          --revo-hover-bg: rgba(255, 165, 0, 0.08);
        }
        
        .revogrid-dark revo-grid {
          background-color: var(--revo-background) !important;
        }
        
        .revogrid-dark .rgHeaderCell {
          background: var(--revo-header-background) !important;
          color: var(--revo-header-color) !important;
          border-color: var(--revo-border-color) !important;
          border-right: 1px solid #444;
          border-bottom: 1px solid #444;
        }
        
        .revogrid-dark .rgCell {
          background-color: var(--revo-cell-background) !important;
          color: var(--revo-cell-color) !important;
          border-color: #2a2a2a !important;
          border-right: 1px solid #2a2a2a;
          border-bottom: 1px solid #2a2a2a;
        }
        
        .revogrid-dark .rgCell:hover {
          background-color: var(--revo-hover-bg) !important;
        }
        
        .revogrid-dark .rgCell.focused {
          border-color: var(--revo-focus-color) !important;
          box-shadow: inset 0 0 0 1px var(--revo-focus-color) !important;
        }
        
        .revogrid-dark .rgCell.selected {
          background-color: var(--revo-selection-bg) !important;
        }
        
        .revogrid-dark .selection-border {
          border-color: var(--revo-selection-border-color) !important;
        }
        
        .revogrid-dark .editor-input,
        .revogrid-dark .rgCell.edit-mode {
          background-color: #1a1a1a !important;
          color: var(--revo-cell-color) !important;
          border: 2px solid var(--revo-focus-color) !important;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
        
        /* Scrollbar styling */
        .revogrid-container ::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }
        
        .revogrid-container ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border: 1px solid #ddd;
        }
        
        .revogrid-container ::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 6px;
          border: 2px solid #f1f1f1;
        }
        
        .revogrid-container ::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }
        
        .revogrid-container ::-webkit-scrollbar-corner {
          background: #f1f1f1;
        }
        
        .revogrid-dark ::-webkit-scrollbar-track {
          background: #2a2a2a;
          border: 1px solid #333;
        }
        
        .revogrid-dark ::-webkit-scrollbar-thumb {
          background-color: #555;
          border: 2px solid #2a2a2a;
        }
        
        .revogrid-dark ::-webkit-scrollbar-thumb:hover {
          background-color: #666;
        }
        
        .revogrid-dark ::-webkit-scrollbar-corner {
          background: #2a2a2a;
        }
        
        /* Formula bar styling */
        .formula-bar {
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        /* Grid lines */
        .revogrid-container .rgRow {
          border-bottom: 1px solid #e0e0e0;
        }
        
        .revogrid-dark .rgRow {
          border-bottom: 1px solid #2a2a2a;
        }
        
        /* Improve text rendering */
        .revogrid-container .rgCell {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Active cell indicator */
        .revogrid-container .rgCell.focused::before {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          border: 2px solid #4285F4;
          pointer-events: none;
          z-index: 10;
        }
        
        .revogrid-dark .rgCell.focused::before {
          border-color: #FFA500;
        }
      ` }} />
    </div>
  );
};

export default AdvancedSpreadsheet;