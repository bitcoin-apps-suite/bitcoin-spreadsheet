import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BitcoinService, SpreadsheetData, CellData } from '../services/BitcoinService';
import Cell from './Cell';
import Toolbar from './Toolbar';
import StorageOptionsModal from './StorageOptionsModal';
import TokenizationModal from './TokenizationModal';
import { 
  StorageOption, 
  SpreadsheetPricingBreakdown,
  calculateSpreadsheetPricing,
  SPREADSHEET_STORAGE_OPTIONS
} from '../utils/storageOptions';
import './Spreadsheet.css';

interface SpreadsheetProps {
  bitcoinService: BitcoinService;
  spreadsheet?: SpreadsheetData | null;
  onSpreadsheetUpdate?: (spreadsheet: SpreadsheetData) => void;
  isAuthenticated?: boolean;
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  onLogin?: () => void;
}

const Spreadsheet: React.FC<SpreadsheetProps> = ({ bitcoinService, spreadsheet: propSpreadsheet, onSpreadsheetUpdate, isAuthenticated = false, isSidebarOpen, onToggleSidebar, onLogin }) => {
  const [spreadsheet, setSpreadsheet] = useState<SpreadsheetData | null>(propSpreadsheet || null);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [copiedCell, setCopiedCell] = useState<{ row: number; col: number; value: string } | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [savedToBlockchain, setSavedToBlockchain] = useState(false);
  const [showStorageModal, setShowStorageModal] = useState(false);
  const [selectedStorageOption, setSelectedStorageOption] = useState<StorageOption | null>(null);
  const [storagePricing, setStoragePricing] = useState<SpreadsheetPricingBreakdown | null>(null);
  const [showTokenizationModal, setShowTokenizationModal] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Spreadsheet dimensions - expanded to 26 columns (A-Z) and 100 rows
  const ROWS = 100;
  const COLS = 26;

  // Use provided spreadsheet or create a new one
  useEffect(() => {
    if (propSpreadsheet) {
      setSpreadsheet(propSpreadsheet);
    } else {
      const initSpreadsheet = async () => {
        try {
          const newSpreadsheet = await bitcoinService.createSpreadsheet('My Spreadsheet');
          setSpreadsheet(newSpreadsheet);
          if (onSpreadsheetUpdate) {
            onSpreadsheetUpdate(newSpreadsheet);
          }
        } catch (error) {
          console.error('Failed to create spreadsheet:', error);
        }
      };
      initSpreadsheet();
    }
  }, [bitcoinService, propSpreadsheet, onSpreadsheetUpdate]);

  // Listen for tokenization modal event
  useEffect(() => {
    const handleOpenTokenization = (event: CustomEvent) => {
      if (event.detail?.spreadsheet?.id === spreadsheet?.id) {
        setShowTokenizationModal(true);
      }
    };

    window.addEventListener('openTokenizationModal', handleOpenTokenization as EventListener);
    
    return () => {
      window.removeEventListener('openTokenizationModal', handleOpenTokenization as EventListener);
    };
  }, [spreadsheet]);

  const getCellKey = (row: number, col: number): string => {
    return `${row}-${col}`;
  };

  const getColumnLabel = (col: number): string => {
    // Support for A-Z columns
    if (col < 26) {
      return String.fromCharCode(65 + col);
    }
    // For columns beyond Z, use AA, AB, etc.
    const firstLetter = String.fromCharCode(65 + Math.floor(col / 26) - 1);
    const secondLetter = String.fromCharCode(65 + (col % 26));
    return firstLetter + secondLetter;
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

      // Don't save to blockchain immediately - just update local state
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

      const updatedSpreadsheet = {
        ...spreadsheet,
        cells: updatedCells
      };
      setSpreadsheet(updatedSpreadsheet);
      if (onSpreadsheetUpdate) {
        onSpreadsheetUpdate(updatedSpreadsheet);
      }

      setIsEditing(false);
      setIsDirty(true); // Mark as unsaved changes
      setSavedToBlockchain(false);
    } catch (error) {
      console.error('Failed to update cell:', error);
    }
  }, [spreadsheet]);

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCell) return;

      const { row, col } = selectedCell;

      // Copy (Ctrl+C or Cmd+C)
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && !isEditing) {
        const value = getCellValue(row, col);
        setCopiedCell({ row, col, value });
        navigator.clipboard.writeText(value);
        return;
      }

      // Paste (Ctrl+V or Cmd+V)
      if ((e.ctrlKey || e.metaKey) && e.key === 'v' && !isEditing && copiedCell) {
        handleCellValueChange(row, col, copiedCell.value);
        return;
      }

      // Navigation keys (when not editing)
      if (!isEditing) {
        switch (e.key) {
          case 'ArrowUp':
            if (row > 0) {
              setSelectedCell({ row: row - 1, col });
              e.preventDefault();
            }
            break;
          case 'ArrowDown':
            if (row < ROWS - 1) {
              setSelectedCell({ row: row + 1, col });
              e.preventDefault();
            }
            break;
          case 'ArrowLeft':
            if (col > 0) {
              setSelectedCell({ row, col: col - 1 });
              e.preventDefault();
            }
            break;
          case 'ArrowRight':
            if (col < COLS - 1) {
              setSelectedCell({ row, col: col + 1 });
              e.preventDefault();
            }
            break;
          case 'Enter':
            setIsEditing(true);
            e.preventDefault();
            break;
          case 'Delete':
          case 'Backspace':
            handleCellValueChange(row, col, '');
            e.preventDefault();
            break;
          case 'Tab':
            if (e.shiftKey && col > 0) {
              setSelectedCell({ row, col: col - 1 });
            } else if (!e.shiftKey && col < COLS - 1) {
              setSelectedCell({ row, col: col + 1 });
            }
            e.preventDefault();
            break;
        }
      } else if (e.key === 'Escape') {
        setIsEditing(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCell, isEditing, copiedCell, handleCellValueChange]);

  // Calculate cost for saving to blockchain
  const calculateSaveCost = (): { cells: number; satoshis: number; usd: string } => {
    if (!spreadsheet) return { cells: 0, satoshis: 0, usd: '$0.00' };

    const nonEmptyCells = Object.values(spreadsheet.cells).filter(cell => cell.value.trim() !== '').length;
    // 1/10,000th of a penny per cell = $0.000001 per cell
    // Assuming 1 BSV = $50 (adjust based on current price)
    const usdPerCell = 0.000001;
    const totalUsd = nonEmptyCells * usdPerCell;
    const bsvPrice = 50; // Current BSV price in USD
    const satoshisPerBsv = 100000000;
    const satoshis = Math.ceil((totalUsd / bsvPrice) * satoshisPerBsv);

    return {
      cells: nonEmptyCells,
      satoshis,
      usd: `$${totalUsd.toFixed(6)}`
    };
  };

  // Open storage options modal
  const openStorageModal = async () => {
    if (!spreadsheet || !isDirty) return;

    // Check if user is authenticated
    if (!isAuthenticated) {
      const shouldSignIn = window.confirm(
        'Sign in required to save to blockchain.\n\n' +
        'You need a HandCash account to save your spreadsheet permanently to the Bitcoin blockchain.\n\n' +
        'Would you like to sign in now?'
      );
      
      if (shouldSignIn && onLogin) {
        onLogin();
      }
      return;
    }

    // Set default storage option and calculate initial pricing
    const defaultOption = SPREADSHEET_STORAGE_OPTIONS[0];
    setSelectedStorageOption(defaultOption);
    
    try {
      const pricing = await calculateSpreadsheetPricing(spreadsheet.cells, defaultOption);
      setStoragePricing(pricing);
      setShowStorageModal(true);
    } catch (error) {
      console.error('Failed to calculate pricing:', error);
      alert('Failed to calculate storage pricing. Please try again.');
    }
  };

  // Handle storage option selection
  const handleStorageOptionSelect = async (option: StorageOption) => {
    if (!spreadsheet) return;
    
    setSelectedStorageOption(option);
    try {
      const pricing = await calculateSpreadsheetPricing(spreadsheet.cells, option);
      setStoragePricing(pricing);
    } catch (error) {
      console.error('Failed to calculate pricing:', error);
    }
  };

  // Save spreadsheet to blockchain with selected storage option
  const saveWithSelectedOption = async () => {
    if (!spreadsheet || !selectedStorageOption) return;

    try {
      console.log('Saving to blockchain...', {
        spreadsheet,
        storageOption: selectedStorageOption,
        pricing: storagePricing
      });

      // Mark all cells as saved
      for (const [key, cell] of Object.entries(spreadsheet.cells)) {
        if (cell.value.trim() !== '') {
          await bitcoinService.updateCell(
            spreadsheet.id,
            cell.row,
            cell.col,
            cell.value,
            cell.dataType
          );
        }
      }

      setIsDirty(false);
      setSavedToBlockchain(true);
      setShowStorageModal(false);
      alert(`Spreadsheet saved to blockchain successfully using ${selectedStorageOption.name}!`);
    } catch (error) {
      console.error('Failed to save to blockchain:', error);
      alert('Failed to save to blockchain. Please try again.');
    }
  };

  if (!spreadsheet) {
    return <div className="loading">Creating spreadsheet...</div>;
  }

  return (
    <div className="spreadsheet-container">
      <Toolbar
        spreadsheet={spreadsheet}
        selectedCell={selectedCell}
        onTitleChange={(title) => {
          const updated = { ...spreadsheet, title };
          setSpreadsheet(updated);
          if (onSpreadsheetUpdate) {
            onSpreadsheetUpdate(updated);
          }
        }}
        isDirty={isDirty}
        isAuthenticated={isAuthenticated}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={onToggleSidebar}
        onSave={openStorageModal}
        calculateSaveCost={calculateSaveCost}
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

      {/* Status bar with save button and cost display */}
      <div className="status-bar">
        <div className="status-left">
          {selectedCell && (
            <span>
              Cell {getColumnLabel(selectedCell.col)}{selectedCell.row + 1}
            </span>
          )}
          {copiedCell && (
            <span className="copied-indicator">
              | Copied: {getColumnLabel(copiedCell.col)}{copiedCell.row + 1}
            </span>
          )}
        </div>
        <div className="status-right">
          {savedToBlockchain && !isDirty && (
            <span className="saved-indicator">✓ Saved to blockchain</span>
          )}
        </div>
      </div>

      {/* Storage Options Modal */}
      <StorageOptionsModal
        isOpen={showStorageModal}
        onClose={() => setShowStorageModal(false)}
        onSelect={handleStorageOptionSelect}
        selectedOption={selectedStorageOption}
        pricing={storagePricing}
        onConfirm={saveWithSelectedOption}
      />

      {/* Tokenization Modal */}
      <TokenizationModal
        isOpen={showTokenizationModal}
        spreadsheet={spreadsheet}
        onClose={() => setShowTokenizationModal(false)}
        userAddress="demo_wallet_address"
        userHandle="demo_user"
      />
    </div>
  );
};

export default Spreadsheet;
