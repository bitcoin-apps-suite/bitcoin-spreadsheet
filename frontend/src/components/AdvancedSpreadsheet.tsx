import React, { useEffect, useRef, useState, useCallback } from 'react';
import Spreadsheet from 'x-data-spreadsheet';
import { HyperFormula } from 'hyperformula';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import 'x-data-spreadsheet/dist/xspreadsheet.css';
import './AdvancedSpreadsheet.css';
import { BitcoinService, SpreadsheetData } from '../services/BitcoinService';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const spreadsheetRef = useRef<any>(null);
  const formulaEngineRef = useRef<HyperFormula | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize HyperFormula engine
  useEffect(() => {
    formulaEngineRef.current = HyperFormula.buildEmpty({
      licenseKey: 'gpl-v3',
      maxColumns: 16384,
      maxRows: 1048576,
    });
  }, []);

  // Initialize x-spreadsheet
  useEffect(() => {
    if (!containerRef.current) return;

    const options: any = {
      mode: 'edit',
      showToolbar: true,
      showGrid: true,
      showContextmenu: true,
      showBottomBar: true,
      
      view: {
        height: () => window.innerHeight - 300,
        width: () => window.innerWidth - 40,
      },
      
      row: {
        len: 100,
        height: 25,
      },
      
      col: {
        len: 26,
        width: 100,
        minWidth: 60,
        indexWidth: 60,
      },
    };

    // Create spreadsheet instance
    spreadsheetRef.current = new Spreadsheet(containerRef.current, options);

    // Load existing data if available
    if (spreadsheet?.cells) {
      const data = convertCellsToGrid(spreadsheet.cells);
      spreadsheetRef.current.loadData(data);
    }

    // Add change handler
    spreadsheetRef.current.change((data: any) => {
      handleDataChange(data);
    });

    return () => {
      // Cleanup
      if (spreadsheetRef.current) {
        spreadsheetRef.current = null;
      }
    };
  }, []);

  // Convert cells to grid format for x-spreadsheet
  const convertCellsToGrid = (cells: any) => {
    const rows: any = {};
    
    Object.entries(cells).forEach(([key, cell]: [string, any]) => {
      const [col, row] = parseCell(key);
      if (!rows[row]) {
        rows[row] = { cells: {} };
      }
      
      // Check if it's a formula
      let cellValue = cell.value;
      if (cell.formula) {
        cellValue = cell.formula;
      } else if (typeof cellValue === 'string' && cellValue.startsWith('=')) {
        // Calculate formula using HyperFormula
        try {
          const result = calculateFormula(cellValue);
          cellValue = result;
        } catch (e) {
          console.error('Formula error:', e);
        }
      }
      
      rows[row].cells[col] = {
        text: cellValue,
        style: cell.style || 0,
      };
    });

    return { rows };
  };

  // Parse cell reference (e.g., "A1" -> [0, 0])
  const parseCell = (cellRef: string): [number, number] => {
    const match = cellRef.match(/([A-Z]+)(\d+)/);
    if (!match) return [0, 0];
    
    const col = match[1].charCodeAt(0) - 65;
    const row = parseInt(match[2]) - 1;
    return [col, row];
  };

  // Calculate formula (simplified for now)
  const calculateFormula = (formula: string) => {
    // Basic formula calculation - can be enhanced later
    if (formula.startsWith('=SUM(')) {
      // Simple SUM formula parsing
      return formula; // Return as-is for now, x-spreadsheet handles formulas
    }
    return formula;
  };

  // Handle data changes
  const handleDataChange = useCallback(async (data: any) => {
    if (!spreadsheet || !autoSave) return;

    // Convert grid data back to cells format
    const cells: any = {};
    
    if (data.rows) {
      Object.entries(data.rows).forEach(([rowIndex, rowData]: [string, any]) => {
        if (rowData.cells) {
          Object.entries(rowData.cells).forEach(([colIndex, cellData]: [string, any]) => {
            const col = String.fromCharCode(65 + parseInt(colIndex));
            const row = parseInt(rowIndex) + 1;
            const cellKey = `${col}${row}`;
            
            cells[cellKey] = {
              value: cellData.text || '',
              formula: cellData.text?.startsWith('=') ? cellData.text : null,
              style: cellData.style || null,
            };
          });
        }
      });
    }

    // Update spreadsheet
    const updatedSpreadsheet = {
      ...spreadsheet,
      cells,
      lastModified: Date.now(),
    };

    onSpreadsheetUpdate(updatedSpreadsheet);

    // Save to Bitcoin if authenticated
    // TODO: Implement save to blockchain
    // if (isAuthenticated && bitcoinService) {
    //   try {
    //     await bitcoinService.saveSpreadsheet(updatedSpreadsheet);
    //   } catch (error) {
    //     console.error('Failed to save to blockchain:', error);
    //   }
    // }
  }, [spreadsheet, autoSave, isAuthenticated, bitcoinService, onSpreadsheetUpdate]);

  // Import Excel file
  const handleImportExcel = (file: File) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
        // Convert to x-spreadsheet format
        const rows: any = {};
        jsonData.forEach((row: any, rowIndex: number) => {
          rows[rowIndex] = { cells: {} };
          row.forEach((cell: any, colIndex: number) => {
            rows[rowIndex].cells[colIndex] = { text: String(cell || '') };
          });
        });
        
        // Load into spreadsheet
        spreadsheetRef.current?.loadData({ rows });
        
        // Trigger change handler
        handleDataChange({ rows });
        
      } catch (error) {
        console.error('Import error:', error);
        alert('Failed to import file. Please check the format.');
      }
    };
    
    reader.readAsBinaryString(file);
  };

  // Export to Excel
  const handleExportExcel = () => {
    const data = spreadsheetRef.current?.getData();
    if (!data || !data.rows) return;
    
    // Convert to array format
    const arrayData: any[][] = [];
    const maxRow = Math.max(...Object.keys(data.rows).map(Number));
    
    for (let r = 0; r <= maxRow; r++) {
      const row: any[] = [];
      const rowData = data.rows[r];
      
      if (rowData && rowData.cells) {
        const maxCol = Math.max(...Object.keys(rowData.cells).map(Number));
        for (let c = 0; c <= maxCol; c++) {
          row.push(rowData.cells[c]?.text || '');
        }
      }
      
      arrayData.push(row);
    }
    
    // Create workbook
    const ws = XLSX.utils.aoa_to_sheet(arrayData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    
    // Save file
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    saveAs(blob, `bitcoin-spreadsheet-${Date.now()}.xlsx`);
  };

  // Export to CSV
  const handleExportCSV = () => {
    const data = spreadsheetRef.current?.getData();
    if (!data || !data.rows) return;
    
    // Convert to CSV format
    let csv = '';
    const maxRow = Math.max(...Object.keys(data.rows).map(Number));
    
    for (let r = 0; r <= maxRow; r++) {
      const rowData = data.rows[r];
      const row: string[] = [];
      
      if (rowData && rowData.cells) {
        const maxCol = Math.max(...Object.keys(rowData.cells).map(Number));
        for (let c = 0; c <= maxCol; c++) {
          const cell = rowData.cells[c]?.text || '';
          // Escape quotes and wrap in quotes if contains comma
          const escaped = cell.toString().replace(/"/g, '""');
          row.push(escaped.includes(',') ? `"${escaped}"` : escaped);
        }
      }
      
      csv += row.join(',') + '\n';
    }
    
    // Save file
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, `bitcoin-spreadsheet-${Date.now()}.csv`);
  };

  // String to ArrayBuffer
  const s2ab = (s: string) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  };

  // Add formula to current cell
  const insertFormula = (formula: string) => {
    // This would need x-spreadsheet API to get current cell
    // For now, just show the formula
    alert(`Formula to insert: ${formula}\nClick on a cell and type = to start entering formulas`);
  };

  return (
    <div className="advanced-spreadsheet-container">
      <div className="spreadsheet-toolbar">
        <div className="toolbar-section">
          <button 
            className="toolbar-btn"
            onClick={() => fileInputRef.current?.click()}
            title="Import Excel/CSV"
          >
            📂 Import
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".xlsx,.xls,.csv"
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleImportExcel(file);
            }}
          />
          
          <button 
            className="toolbar-btn"
            onClick={handleExportExcel}
            title="Export as Excel"
          >
            📊 Export Excel
          </button>
          
          <button 
            className="toolbar-btn"
            onClick={handleExportCSV}
            title="Export as CSV"
          >
            📄 Export CSV
          </button>
        </div>

        <div className="toolbar-section">
          <select 
            className="formula-select"
            onChange={(e) => insertFormula(e.target.value)}
            value=""
          >
            <option value="">Insert Formula...</option>
            <optgroup label="Math">
              <option value="=SUM(A1:A10)">SUM</option>
              <option value="=AVERAGE(A1:A10)">AVERAGE</option>
              <option value="=MIN(A1:A10)">MIN</option>
              <option value="=MAX(A1:A10)">MAX</option>
              <option value="=COUNT(A1:A10)">COUNT</option>
            </optgroup>
            <optgroup label="Text">
              <option value="=CONCAT(A1,B1)">CONCAT</option>
              <option value="=LEFT(A1,5)">LEFT</option>
              <option value="=RIGHT(A1,5)">RIGHT</option>
              <option value="=LEN(A1)">LENGTH</option>
              <option value="=UPPER(A1)">UPPER</option>
            </optgroup>
            <optgroup label="Logical">
              <option value="=IF(A1>10,'Yes','No')">IF</option>
              <option value="=AND(A1>0,B1>0)">AND</option>
              <option value="=OR(A1>0,B1>0)">OR</option>
            </optgroup>
            <optgroup label="Lookup">
              <option value="=VLOOKUP(A1,A1:B10,2,FALSE)">VLOOKUP</option>
              <option value="=HLOOKUP(A1,A1:Z1,2,FALSE)">HLOOKUP</option>
              <option value="=INDEX(A1:B10,1,2)">INDEX</option>
            </optgroup>
          </select>
        </div>

        <div className="toolbar-section">
          <label className="autosave-toggle">
            <input
              type="checkbox"
              checked={autoSave}
              onChange={(e) => setAutoSave(e.target.checked)}
            />
            Auto-save to Blockchain
          </label>
        </div>

        {isLoading && (
          <div className="toolbar-section">
            <span className="loading-indicator">Saving...</span>
          </div>
        )}
      </div>

      <div className="formula-bar">
        <span className="cell-reference">A1</span>
        <input 
          type="text" 
          className="formula-input"
          placeholder="Enter formula or value..."
        />
      </div>

      <div ref={containerRef} className="spreadsheet-container" />
      
      <div className="status-bar">
        <span>Ready</span>
        <span className="status-right">
          {spreadsheet ? `${Object.keys(spreadsheet.cells || {}).length} cells` : 'No data'}
        </span>
      </div>
    </div>
  );
};

export default AdvancedSpreadsheet;