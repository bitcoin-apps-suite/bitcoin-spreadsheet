import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import './styles/handsontable-dark.css';
import './styles/app-dark.css';
import Spreadsheet from './components/Spreadsheet';
import SpreadsheetManager from './components/SpreadsheetManager';
import NavbarLogin from './components/NavbarLogin';
import HandCashCallback from './components/HandCashCallback';
import BitcoinSpreadsheetPage from './pages/BitcoinSpreadsheetPage';
import BapsPage from './pages/BapsPage';
import ExchangePage from './pages/ExchangePage';
import ClaudeChat from './components/ClaudeChat';
import SpreadsheetTaskbar from './components/SpreadsheetTaskbar';
import { BitcoinService, SpreadsheetData } from './services/BitcoinService';
import { HandCashService, HandCashUser } from './services/HandCashService';

function App() {
  const [bitcoinService, setBitcoinService] = useState<BitcoinService | null>(null);
  const [handcashService] = useState<HandCashService>(new HandCashService());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<HandCashUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSpreadsheet, setCurrentSpreadsheet] = useState<SpreadsheetData | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [isClaudeChatOpen, setIsClaudeChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const navigate = useNavigate();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('darkMode', newMode.toString());
      return newMode;
    });
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Check if we're coming back from HandCash with an authToken
    const urlParams = new URLSearchParams(window.location.search);
    const hashParams = new URLSearchParams(window.location.hash.replace('#', ''));
    
    // Check multiple possible parameter names HandCash might use
    const authToken = urlParams.get('authToken') || 
                     urlParams.get('auth_token') || 
                     urlParams.get('access_token') || 
                     urlParams.get('token') ||
                     hashParams.get('authToken') ||
                     hashParams.get('auth_token') ||
                     hashParams.get('access_token') ||
                     hashParams.get('token');
    
    console.log('App loading - URL:', window.location.href);
    console.log('URL params:', Array.from(urlParams.entries()));
    console.log('Hash params:', Array.from(hashParams.entries()));
    console.log('Auth token found:', authToken);
    
    if (authToken) {
      // We have an authToken, handle the callback
      console.log('Found authToken, handling callback...');
      const handcashService = new HandCashService();
      handcashService.handleCallback(authToken).then(user => {
        handleLogin(user);
        // Clean up URL after successful auth
        window.history.replaceState({}, document.title, window.location.pathname);
      }).catch(err => {
        console.error('Failed to handle callback:', err);
      });
    } else {
      checkAuthentication();
    }
  }, []);

  const checkAuthentication = () => {
    // Check if user is already logged in
    if (handcashService.isAuthenticated()) {
      const user = handcashService.getCurrentUser();
      setCurrentUser(user);
      setIsAuthenticated(true);
      initializeBitcoinService();
    } else {
      // Allow guest access - initialize Bitcoin service for anonymous users
      initializeBitcoinService();
    }
    setIsLoading(false);
  };

  const initializeBitcoinService = async () => {
    const service = new BitcoinService();
    await service.connect();
    setBitcoinService(service);
  };

  const handleLogin = (user: HandCashUser) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
    initializeBitcoinService();
  };

  const handleLogout = () => {
    // Clear EVERYTHING
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

  return (
    <Routes>
      <Route path="/bitcoin-spreadsheet" element={<BitcoinSpreadsheetPage />} />
      <Route path="/bap" element={<BapsPage />} />
      <Route path="/developers" element={<BapsPage />} /> {/* Keep for backwards compatibility */}
      <Route path="/exchange" element={<ExchangePage />} />
      <Route path="/auth/handcash/callback" element={<HandCashCallback />} />
      <Route path="/*" element={
        isLoading ? (
          <div className="App">
            <div className="loading">Loading Bitcoin Spreadsheet...</div>
          </div>
        ) : (
          <div className="App" style={{ paddingTop: '28px' }}>
            {/* Bitcoin Spreadsheet Taskbar */}
            <SpreadsheetTaskbar
              isAuthenticated={isAuthenticated}
              currentUser={currentUser}
              onLogout={handleLogout}
              onNewSpreadsheet={() => {
                if (bitcoinService) {
                  bitcoinService.createSpreadsheet('New Spreadsheet').then(sheet => {
                    setCurrentSpreadsheet(sheet);
                  });
                }
              }}
              onSaveSpreadsheet={() => {
                // Trigger save functionality
                console.log('Save spreadsheet');
              }}
              onImport={() => {
                // Trigger import functionality
                console.log('Import spreadsheet');
              }}
              onExport={() => {
                // Trigger export functionality
                console.log('Export spreadsheet');
              }}
              toggleDarkMode={toggleDarkMode}
              isDarkMode={isDarkMode}
            />
            <header className="App-header">
              <div className="connection-indicator" />
              <h1>
                <img 
                  src="/bitcoin-watercolor-icon.png" 
                  alt="Bitcoin" 
                  className="bitcoin-icon-beveled"
                  style={{ width: '40px', height: '40px', marginRight: '16px', verticalAlign: 'middle' }}
                />
                <span className="bitcoin-orange">Bitcoin</span> Spreadsheet
              </h1>
              <p className="app-subtitle">Secure, encrypted spreadsheets on the blockchain</p>
              
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
            <div className="disclaimer">
              <small>This is a demonstration version. Use at your own risk. Blockchain transactions cannot be reversed.</small>
            </div>
            <main className="main-container">
              {bitcoinService ? (
                <div className="app-content">
                  {isSidebarOpen && (
                    <SpreadsheetManager
                      bitcoinService={bitcoinService}
                      onSelectSpreadsheet={setCurrentSpreadsheet}
                      currentSpreadsheet={currentSpreadsheet}
                    />
                  )}
                  <div className="spreadsheet-wrapper">
                    <Spreadsheet 
                      bitcoinService={bitcoinService}
                      spreadsheet={currentSpreadsheet}
                      onSpreadsheetUpdate={setCurrentSpreadsheet}
                      isAuthenticated={isAuthenticated}
                      isSidebarOpen={isSidebarOpen}
                      onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                      onLogin={() => {
                        const loginService = new HandCashService();
                        loginService.login();
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="loading">Initializing blockchain connection...</div>
              )}
            </main>
            
            {/* Claude AI Chat Button */}
            <button 
              className="claude-chat-button"
              onClick={() => setIsClaudeChatOpen(true)}
              style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFA500, #FF8C00)',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(255, 165, 0, 0.3)',
                display: isClaudeChatOpen ? 'none' : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 999
              }}
              title="Chat with Claude AI"
            >
              💬
            </button>
            
             {/* Claude AI Chat Component */}
             <ClaudeChat 
               spreadsheetData={currentSpreadsheet?.cells ? Object.values(currentSpreadsheet.cells) : []}
               isOpen={isClaudeChatOpen}
               onClose={() => setIsClaudeChatOpen(false)}
             />
          </div>
        )
      } />
    </Routes>
  );
}

export default App;