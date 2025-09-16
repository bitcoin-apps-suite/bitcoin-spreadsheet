import React, { useEffect, useRef, useState } from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { HyperFormula } from 'hyperformula';
import { BitcoinService, SpreadsheetData, CellData } from '../services/BitcoinService';
import SpreadsheetToolbar from './SpreadsheetToolbar';

// Import Handsontable styles
import 'handsontable/dist/handsontable.full.min.css';

// Register all Handsontable modules
registerAllModules();

interface AdvancedSpreadsheetProps {
  bitcoinService: BitcoinService;
  spreadsheet: SpreadsheetData | null;
  onSpreadsheetUpdate: (spreadsheet: SpreadsheetData) => void;
  isAuthenticated: boolean;
}

const AdvancedSpreadsheet: React.FC<AdvancedSpreadsheetProps> = ({
  bitcoinService,
  spreadsheet,
  onSpreadsheetUpdate,
  isAuthenticated
}) => {
  const hotTableRef = useRef<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [data, setData] = useState<any[][]>(() => 
    Array.from({ length: 100 }, () => Array.from({ length: 26 }, () => ''))
  );
  const [isAutoSaveEnabled, setIsAutoSaveEnabled] = useState(false);
  const autoSaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Initialize spreadsheet data
  useEffect(() => {
    if (!spreadsheet) {
      // Initialize with empty data if no spreadsheet
      const initialData = Array(100).fill(null).map(() => Array(26).fill(''));
      setData(initialData);
      return;
    }

    // Convert spreadsheet cells to Handsontable data format
    const maxRow = Math.max(
      100,
      ...Object.keys(spreadsheet.cells || {}).map(key => {
        const [row] = key.split('-').map(Number);
        return row + 1;
      })
    );
    
    const maxCol = Math.max(
      26,
      ...Object.keys(spreadsheet.cells || {}).map(key => {
        const [, col] = key.split('-').map(Number);
        return col + 1;
      })
    );

    // Create empty data array - use Array.from for proper 2D array initialization
    const newData: any[][] = Array.from({ length: maxRow }, () => 
      Array.from({ length: maxCol }, () => '')
    );

    // Fill in the data from spreadsheet cells
    Object.entries(spreadsheet.cells || {}).forEach(([key, cell]) => {
      const [row, col] = key.split('-').map(Number);
      if (row < maxRow && col < maxCol) {
        newData[row][col] = cell.value;
      }
    });

    setData(newData);
  }, [spreadsheet]);

  // Save data to BitcoinService
  const saveData = async (changes: any[] | null = null) => {
    if (!spreadsheet || !hotTableRef.current) return;

    const hot = hotTableRef.current.hotInstance;
    if (!hot) return;

    // If specific changes are provided, update only those cells
    if (changes) {
      const updatedCells: { [key: string]: CellData } = { ...spreadsheet.cells };
      
      changes.forEach(([row, col, oldValue, newValue]) => {
        const key = `${row}-${col}`;
        if (newValue && newValue.toString().trim()) {
          updatedCells[key] = {
            value: newValue.toString(),
            lastUpdated: Date.now(),
            row: row,
            col: col,
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

  // Auto-save handler
  const handleCellChange = (changes: any[] | null, source: string | null) => {
    if (!changes || source === 'loadData') return;

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

  // Handsontable settings
  const hotSettings = {
    data: data,
    colHeaders: true,
    rowHeaders: true,
    width: '100%',
    height: 'calc(100vh - 350px)',
    licenseKey: 'non-commercial-and-evaluation',
    
    // Features
    contextMenu: true,
    manualColumnResize: true,
    manualRowResize: true,
    manualColumnMove: true,
    manualRowMove: true,
    autoWrapRow: true,
    autoWrapCol: true,
    dropdownMenu: true,
    filters: true,
    columnSorting: true,
    comments: true,
    customBorders: true,
    mergeCells: true,
    search: true,
    undo: true,
    redo: true,
    
    // Formulas with HyperFormula
    formulas: {
      engine: HyperFormula,
      sheetName: spreadsheet?.title || 'Sheet1'
    },
    
    // Initial dimensions
    startRows: 100,
    startCols: 26,
    minRows: 100,
    minCols: 26,
    maxRows: 10000,
    maxCols: 100,
    
    // Cell settings
    wordWrap: true,
    copyPaste: true,
    
    // Appearance - Dark mode support
    className: isDarkMode ? 'dark-table' : '',
    
    // Column widths
    colWidths: 100,
    rowHeights: 23,
    
    // Events
    afterChange: handleCellChange,
    
    // Custom cell renderer for dark mode
    cells: function(row: number, col: number) {
      const cellProperties: any = {};
      
      if (isDarkMode) {
        cellProperties.className = 'dark-cell';
      }
      
      return cellProperties;
    }
  };

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
      />

      {/* Handsontable Component */}
      <div className={isDarkMode ? 'handsontable-dark' : ''}>
        <HotTable
          ref={(ref) => {
            hotTableRef.current = ref;
            // Make the instance globally accessible for SpreadsheetUtils
            if (ref && ref.hotInstance) {
              (window as any).hotInstance = ref.hotInstance;
            }
          }}
          settings={hotSettings}
        />
      </div>

      {/* Dark mode styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .handsontable-dark .ht_master .wtHolder {
          background-color: #1a1a1a !important;
        }
        
        .handsontable-dark .ht_master table {
          background-color: #1a1a1a !important;
        }
        
        .handsontable-dark .ht_master td {
          background-color: #0a0a0a !important;
          color: #e0e0e0 !important;
          border-color: #333 !important;
        }
        
        .handsontable-dark .ht_master th {
          background-color: #2a2a2a !important;
          color: #b0b0b0 !important;
          border-color: #444 !important;
        }
        
        .handsontable-dark .ht_master tr:hover td {
          background-color: rgba(255, 165, 0, 0.1) !important;
        }
        
        .handsontable-dark .ht_master td.current {
          background-color: rgba(255, 165, 0, 0.2) !important;
          border: 2px solid #FFA500 !important;
        }
        
        .handsontable-dark .ht_master td.area {
          background-color: rgba(255, 165, 0, 0.1) !important;
        }
        
        .handsontable-dark .handsontableInput {
          background-color: #1a1a1a !important;
          color: #e0e0e0 !important;
          border: 2px solid #FFA500 !important;
        }
        
        .handsontable-dark .htContextMenu {
          background-color: #2a2a2a !important;
          border: 1px solid #444 !important;
        }
        
        .handsontable-dark .htContextMenu .ht_master td {
          background-color: #2a2a2a !important;
          color: #e0e0e0 !important;
        }
        
        .handsontable-dark .htContextMenu .ht_master td:hover {
          background-color: #3a3a3a !important;
        }
        
        .handsontable-dark .htDropdownMenu {
          background-color: #2a2a2a !important;
          border: 1px solid #444 !important;
        }
        
        .handsontable-dark .htFilters {
          background-color: #2a2a2a !important;
        }
        
        .handsontable-dark .changeType {
          background-color: #2a2a2a !important;
          color: #e0e0e0 !important;
        }
        
        .handsontable-dark .htCommentTextArea {
          background-color: #2a2a2a !important;
          color: #e0e0e0 !important;
          border: 1px solid #444 !important;
        }
        
        .handsontable-dark ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        
        .handsontable-dark ::-webkit-scrollbar-track {
          background: #2a2a2a;
        }
        
        .handsontable-dark ::-webkit-scrollbar-thumb {
          background-color: #4a4a4a;
          border-radius: 5px;
        }
        
        .handsontable-dark ::-webkit-scrollbar-thumb:hover {
          background-color: #5a5a5a;
        }
      ` }} />
    </div>
  );
};

export default AdvancedSpreadsheet;