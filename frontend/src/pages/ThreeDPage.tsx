import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spreadsheet3D from '../components/Spreadsheet3D';
import Spreadsheet3DPlotly from '../components/Spreadsheet3DPlotly';
import SpreadsheetManager from '../components/SpreadsheetManager';
import SpreadsheetToolbar from '../components/SpreadsheetToolbar';
import SpreadsheetTaskbar from '../components/SpreadsheetTaskbar';
import NavbarLogin from '../components/NavbarLogin';
import { BitcoinService, SpreadsheetData } from '../services/BitcoinService';
import { HandCashService, HandCashUser } from '../services/HandCashService';
import '../App.css';
import '../styles/app-dark.css';

const ThreeDPage: React.FC = () => {
  const [bitcoinService, setBitcoinService] = useState<BitcoinService | null>(null);
  const [handcashService] = useState<HandCashService>(new HandCashService());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<HandCashUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSpreadsheet, setCurrentSpreadsheet] = useState<SpreadsheetData | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [viewMode, setViewMode] = useState<'three' | 'plotly'>('plotly');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isAutoSaveEnabled, setIsAutoSaveEnabled] = useState(false);

  useEffect(() => {
    // Apply dark mode class to body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    if (handcashService.isAuthenticated()) {
      const user = handcashService.getCurrentUser();
      setCurrentUser(user);
      setIsAuthenticated(true);
    }
    initializeBitcoinService();
  };

  const initializeBitcoinService = async () => {
    const service = new BitcoinService();
    await service.connect();
    setBitcoinService(service);
    
    // Load existing spreadsheets from localStorage
    const saved = localStorage.getItem('spreadsheets');
    if (saved) {
      try {
        let sheets = JSON.parse(saved);
        // Filter out demo spreadsheets and find the first non-empty real spreadsheet
        sheets = sheets.filter((sheet: SpreadsheetData) => 
          !sheet.title?.includes('Demo') && !sheet.title?.includes('demo')
        );
        
        const nonEmptySheet = sheets.find((sheet: SpreadsheetData) => 
          sheet.cells && Object.keys(sheet.cells).length > 0
        );
        
        if (nonEmptySheet) {
          setCurrentSpreadsheet(nonEmptySheet);
        }
      } catch (error) {
        console.error('Failed to load spreadsheets:', error);
      }
    }
    
    setIsLoading(false);
  };

  const handleLogin = (user: HandCashUser) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Clear everything
    localStorage.clear();
    sessionStorage.clear();
    
    // Clear all cookies
    document.cookie.split(";").forEach(function(c) { 
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
    });
    
    // Reset state
    setIsAuthenticated(false);
    setCurrentUser(null);
    setBitcoinService(null);
    
    // Force hard reload to clear all memory
    window.location.replace('/');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('darkMode', newMode.toString());
      return newMode;
    });
  };

  const handleSave = async () => {
    if (currentSpreadsheet && bitcoinService) {
      try {
        await bitcoinService.saveSpreadsheetToBlockchain(currentSpreadsheet);
        console.log('Spreadsheet saved successfully');
      } catch (error) {
        console.error('Failed to save spreadsheet:', error);
      }
    }
  };

  const handleNewSpreadsheet = async () => {
    if (bitcoinService) {
      const newSheet = await bitcoinService.createSpreadsheet('New Spreadsheet');
      setCurrentSpreadsheet(newSheet);
    }
  };

  const handleToggle3DView = () => {
    // Switch between 3D visualization modes
    setViewMode(prev => prev === 'plotly' ? 'three' : 'plotly');
  };

  if (isLoading) {
    return (
      <div className="App">
        <div className="loading">Loading 3D Spreadsheet...</div>
      </div>
    );
  }

  return (
    <div className="App" style={{ backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5' }}>
      {/* Spreadsheet Taskbar */}
      <SpreadsheetTaskbar 
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      
      {/* Standard App Header */}
      <header className="App-header" style={{ backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5' }}>
        <div className="connection-indicator" />
        <h1>
          <img 
            src="/bitcoin-watercolor-icon.png" 
            alt="Bitcoin" 
            className="bitcoin-icon-beveled"
            style={{ width: '40px', height: '40px', marginRight: '16px', verticalAlign: 'middle' }}
          />
          <span className="bitcoin-orange">Bitcoin</span> Spreadsheet - 3D View
        </h1>
        <p className="app-subtitle">Interactive 3D visualization of blockchain spreadsheets</p>
        
        {/* Desktop user info (top right) */}
        <div className="user-info desktop-user-info">
          {isAuthenticated && currentUser ? (
            <>
              <div className="handcash-user-badge">
                <img 
                  src="https://handcash.io/favicon.ico" 
                  alt="HandCash" 
                  className="handcash-user-icon"
                />
                <span className="user-handle">@{currentUser.handle}</span>
                <div className="connection-dot"></div>
              </div>
              <button className="logout-btn" onClick={handleLogout}>
                Sign Out
              </button>
            </>
          ) : (
            <NavbarLogin onLogin={handleLogin} />
          )}
        </div>

        {/* Mobile user info (below title) */}
        <div className="mobile-user-info">
          {isAuthenticated && currentUser ? (
            <div className="mobile-auth-section">
              <div className="handcash-user-badge">
                <img 
                  src="https://handcash.io/favicon.ico" 
                  alt="HandCash" 
                  className="handcash-user-icon"
                />
                <span className="user-handle">@{currentUser.handle}</span>
                <div className="connection-dot"></div>
              </div>
              <button className="logout-btn mobile-logout-btn" onClick={handleLogout}>
                Sign Out
              </button>
            </div>
          ) : (
            <div className="mobile-login-section">
              <NavbarLogin onLogin={handleLogin} />
            </div>
          )}
        </div>
      </header>

      {/* Spreadsheet Toolbar */}
      <SpreadsheetToolbar
        isDarkMode={isDarkMode}
        isAutoSaveEnabled={isAutoSaveEnabled}
        onAutoSaveToggle={setIsAutoSaveEnabled}
        onSave={handleSave}
        spreadsheetTitle={currentSpreadsheet?.title}
        onTitleChange={(newTitle) => {
          if (currentSpreadsheet) {
            setCurrentSpreadsheet({ ...currentSpreadsheet, title: newTitle });
          }
        }}
        is3DView={true}
        onToggle3DView={handleToggle3DView}
        onNewSpreadsheet={handleNewSpreadsheet}
      />

      {/* 3D View Controls */}
      <div style={{
        padding: '8px 24px',
        borderBottom: `1px solid ${isDarkMode ? '#333' : '#ddd'}`,
        backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              color: '#1976d2',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            ← Back to 2D View
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              padding: '6px 10px',
              backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
              color: isDarkMode ? '#e0e0e0' : '#333',
              border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <select
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value as 'three' | 'plotly')}
            style={{
              padding: '8px 12px',
              backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
              color: isDarkMode ? '#e0e0e0' : '#333',
              border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            <option value="plotly">Plotly Visualization</option>
            <option value="three">CSS 3D View</option>
          </select>
          <button
            onClick={toggleDarkMode}
            style={{
              padding: '8px 12px',
              backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
              color: isDarkMode ? '#e0e0e0' : '#333',
              border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            {isDarkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>

      <div className="disclaimer">
        <small>This is a demonstration version. Use at your own risk. Blockchain transactions cannot be reversed.</small>
      </div>

      {/* Main content with sidebar */}
      <main className="main-container" style={{ 
        backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
        minHeight: 'calc(100vh - 320px)'
      }}>
        {bitcoinService ? (
          <div className="app-content" style={{ height: '100%' }}>
            {isSidebarOpen && (
              <SpreadsheetManager
                bitcoinService={bitcoinService}
                onSelectSpreadsheet={setCurrentSpreadsheet}
                currentSpreadsheet={currentSpreadsheet}
              />
            )}
            <div className="spreadsheet-wrapper" style={{ 
              height: 'calc(100vh - 320px)',
              overflow: 'hidden',
              backgroundColor: isDarkMode ? '#0a0a0a' : '#ffffff'
            }}>
              {currentSpreadsheet ? (
                viewMode === 'plotly' ? (
                  <Spreadsheet3DPlotly
                    spreadsheet={currentSpreadsheet}
                    isDarkMode={isDarkMode}
                    onCellUpdate={(row, col, value) => {
                      const updatedCells = { ...currentSpreadsheet.cells };
                      updatedCells[`${row}-${col}`] = {
                        row,
                        col,
                        value,
                        dataType: typeof value === 'number' ? 'number' : 'string',
                        lastUpdated: Date.now()
                      };
                      setCurrentSpreadsheet({ ...currentSpreadsheet, cells: updatedCells });
                    }}
                  />
                ) : (
                  <Spreadsheet3D
                    bitcoinService={bitcoinService}
                    spreadsheet={currentSpreadsheet}
                    onSpreadsheetUpdate={setCurrentSpreadsheet}
                    isAuthenticated={isAuthenticated}
                    isDarkMode={isDarkMode}
                  />
                )
              ) : (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  fontSize: '18px'
                }}>
                  Initializing 3D spreadsheet...
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="loading">Initializing blockchain connection...</div>
        )}
      </main>
    </div>
  );
};

export default ThreeDPage;