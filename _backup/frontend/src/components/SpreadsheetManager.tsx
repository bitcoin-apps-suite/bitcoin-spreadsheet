import React, { useState, useEffect } from 'react';
import { BitcoinService, SpreadsheetData } from '../services/BitcoinService';
import './SpreadsheetManager.css';

interface SpreadsheetManagerProps {
  bitcoinService: BitcoinService;
  onSelectSpreadsheet: (spreadsheet: SpreadsheetData) => void;
  currentSpreadsheet: SpreadsheetData | null;
}

const SpreadsheetManager: React.FC<SpreadsheetManagerProps> = ({
  bitcoinService,
  onSelectSpreadsheet,
  currentSpreadsheet
}) => {
  const [spreadsheets, setSpreadsheets] = useState<SpreadsheetData[]>([]);
  const [showNewDialog, setShowNewDialog] = useState(false);
  const [newSheetTitle, setNewSheetTitle] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  // Load saved spreadsheets from localStorage
  useEffect(() => {
    const loadSpreadsheets = () => {
      const saved = localStorage.getItem('spreadsheets');
      if (saved) {
        try {
          let sheets = JSON.parse(saved);
          // Filter out any demo spreadsheets from storage
          sheets = sheets.filter((sheet: SpreadsheetData) => 
            !sheet.title?.includes('Demo') && !sheet.title?.includes('demo')
          );
          setSpreadsheets(sheets);
          // Update localStorage to remove demo spreadsheets permanently
          localStorage.setItem('spreadsheets', JSON.stringify(sheets));
        } catch (error) {
          console.error('Failed to load spreadsheets:', error);
        }
      }
    };

    loadSpreadsheets();
  }, []);

  // Save spreadsheets to localStorage whenever they change
  useEffect(() => {
    if (spreadsheets.length > 0) {
      localStorage.setItem('spreadsheets', JSON.stringify(spreadsheets));
    }
  }, [spreadsheets]);

  // Add current spreadsheet to the list if it's not there
  useEffect(() => {
    if (currentSpreadsheet && !spreadsheets.find(s => s.id === currentSpreadsheet.id)) {
      setSpreadsheets(prev => [...prev, currentSpreadsheet]);
    }
  }, [currentSpreadsheet, spreadsheets]);

  const createNewSpreadsheet = async () => {
    if (!newSheetTitle.trim()) {
      alert('Please enter a title for the new spreadsheet');
      return;
    }

    setIsCreating(true);
    try {
      const newSpreadsheet = await bitcoinService.createSpreadsheet(newSheetTitle);
      setSpreadsheets(prev => [...prev, newSpreadsheet]);
      onSelectSpreadsheet(newSpreadsheet);
      setShowNewDialog(false);
      setNewSheetTitle('');
    } catch (error) {
      console.error('Failed to create spreadsheet:', error);
      alert('Failed to create spreadsheet. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  const deleteSpreadsheet = (id: string) => {
    if (window.confirm('Are you sure you want to delete this spreadsheet? This action cannot be undone.')) {
      setSpreadsheets(prev => prev.filter(s => s.id !== id));
      
      // If we deleted the current spreadsheet, select another non-blank one
      if (currentSpreadsheet?.id === id) {
        const remaining = spreadsheets.filter(s => s.id !== id);
        // Find the first non-blank spreadsheet
        const nonBlankRemaining = remaining.filter(s => getCellCount(s) > 0);
        
        if (nonBlankRemaining.length > 0) {
          onSelectSpreadsheet(nonBlankRemaining[0]);
        } else if (remaining.length > 0) {
          // If there are spreadsheets but all are blank, select the first one
          onSelectSpreadsheet(remaining[0]);
        } else {
          // Create a new default spreadsheet if no spreadsheets remain
          bitcoinService.createSpreadsheet('Untitled Spreadsheet').then(newSheet => {
            setSpreadsheets([newSheet]);
            onSelectSpreadsheet(newSheet);
          });
        }
      }
    }
  };

  const renameSpreadsheet = (id: string) => {
    const sheet = spreadsheets.find(s => s.id === id);
    if (!sheet) return;

    const newTitle = prompt('Enter new title:', sheet.title);
    if (newTitle && newTitle.trim()) {
      setSpreadsheets(prev => prev.map(s => 
        s.id === id ? { ...s, title: newTitle.trim() } : s
      ));

      // Update current spreadsheet if it's the one being renamed
      if (currentSpreadsheet?.id === id) {
        onSelectSpreadsheet({ ...currentSpreadsheet, title: newTitle.trim() });
      }
    }
  };

  const getCellCount = (spreadsheet: SpreadsheetData): number => {
    return Object.values(spreadsheet.cells || {})
      .filter(cell => cell.value.trim() !== '').length;
  };

  const getLastModified = (spreadsheet: SpreadsheetData): string => {
    const cells = Object.values(spreadsheet.cells || {});
    if (cells.length === 0) return 'Never';

    const lastUpdate = Math.max(...cells.map(c => c.lastUpdated || 0));
    if (lastUpdate === 0) return 'Never';

    const date = new Date(lastUpdate);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  const renderSpreadsheetList = () => {
    // Filter out blank spreadsheets and demo spreadsheets
    const nonBlankSpreadsheets = spreadsheets.filter(sheet => {
      // Skip demo spreadsheets
      if (sheet.title && (sheet.title.includes('Demo') || sheet.title.includes('demo'))) {
        return false;
      }
      const cellCount = getCellCount(sheet);
      return cellCount > 0;
    });

    if (spreadsheets.length === 0 || nonBlankSpreadsheets.length === 0) {
      return (
        <div className="empty-state">
          <p>{spreadsheets.length === 0 ? 'No spreadsheets yet' : 'No spreadsheets with content'}</p>
          <button 
            className="create-first-button"
            onClick={() => setShowNewDialog(true)}
          >
            Create your first spreadsheet
          </button>
        </div>
      );
    }

    return nonBlankSpreadsheets.map(sheet => (
      <div 
        key={sheet.id}
        className={`spreadsheet-item ${currentSpreadsheet?.id === sheet.id ? 'active' : ''}`}
      >
        <div 
          className="sheet-info"
          onClick={() => onSelectSpreadsheet(sheet)}
        >
          <div className="sheet-title">{sheet.title}</div>
          <div className="sheet-meta">
            <span className="cell-count">{getCellCount(sheet)} cells</span>
            <span className="separator">•</span>
            <span className="last-modified">{getLastModified(sheet)}</span>
            {sheet.owner && (
              <>
                <span className="separator">•</span>
                <span className="owner">@{sheet.owner}</span>
              </>
            )}
          </div>
        </div>
        <div className="sheet-actions">
          <button 
            className="action-button"
            onClick={(e) => {
              e.stopPropagation();
              renameSpreadsheet(sheet.id);
            }}
            title="Rename"
          >
            Rename
          </button>
          <button 
            className="action-button"
            onClick={(e) => {
              e.stopPropagation();
              deleteSpreadsheet(sheet.id);
            }}
            title="Delete"
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="spreadsheet-manager">
      <div className="manager-header">
        <h3>My Spreadsheets</h3>
        <button 
          className="new-sheet-button"
          onClick={() => setShowNewDialog(true)}
        >
          + New Spreadsheet
        </button>
      </div>

      <div className="spreadsheet-list">
        {renderSpreadsheetList()}
      </div>

      {showNewDialog && (
        <div className="dialog-overlay" onClick={() => setShowNewDialog(false)}>
          <div className="dialog" onClick={(e) => e.stopPropagation()}>
            <h3>Create New Spreadsheet</h3>
            <input
              type="text"
              placeholder="Enter spreadsheet title..."
              value={newSheetTitle}
              onChange={(e) => setNewSheetTitle(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !isCreating) {
                  createNewSpreadsheet();
                }
              }}
              autoFocus
            />
            <div className="dialog-buttons">
              <button 
                className="cancel-button"
                onClick={() => {
                  setShowNewDialog(false);
                  setNewSheetTitle('');
                }}
              >
                Cancel
              </button>
              <button 
                className="create-button"
                onClick={createNewSpreadsheet}
                disabled={isCreating}
              >
                {isCreating ? 'Creating...' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpreadsheetManager;