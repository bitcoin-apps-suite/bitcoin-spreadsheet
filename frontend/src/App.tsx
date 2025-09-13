import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Spreadsheet from './components/Spreadsheet';
import SpreadsheetManager from './components/SpreadsheetManager';
import Login from './components/Login';
import NavbarLogin from './components/NavbarLogin';
import HandCashCallback from './components/HandCashCallback';
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
  const [isMenuOpen, setIsMenuOpen] = useState<string | false>(false);
  const navigate = useNavigate();

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
      <Route path="/auth/handcash/callback" element={<HandCashCallback />} />
      <Route path="/*" element={
        isLoading ? (
          <div className="App">
            <div className="loading">Loading Bitcoin Spreadsheet...</div>
          </div>
        ) : (
          <div className="App">
            {/* Bitcoin Taskbar */}
            <div className="bitcoin-taskbar">
              <div className="taskbar-left">
                {/* Bitcoin Logo Menu */}
                <div className="bitcoin-menu-container">
                  <button 
                    className="bitcoin-logo-button"
                    onClick={() => setIsMenuOpen('bitcoin')}
                    aria-label="Bitcoin Menu"
                  >
                    <div className="bitcoin-logo">₿</div>
                  </button>
                  {isMenuOpen === 'bitcoin' && (
                    <>
                      <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />
                      <div className="bitcoin-menu">
                        <div className="menu-header">
                          <div className="bitcoin-logo-small">₿</div>
                          <span>Bitcoin</span>
                        </div>
                        <div className="menu-separator" />
                        <div className="menu-item" onClick={() => {
                          window.open('https://x.com/BitcoinSheets', '_blank');
                          setIsMenuOpen(false);
                        }}>
                          <span>🐦</span> Follow on X
                        </div>
                        <div className="menu-item" onClick={() => {
                          alert('Bitcoin Spreadsheet v1.0\nSecure blockchain-powered spreadsheets\n\nPowered by Bitcoin SV\n\n© @b0ase September 2025');
                          setIsMenuOpen(false);
                        }}>
                          <span>ℹ️</span> About Bitcoin Spreadsheet
                        </div>
                        <div className="menu-separator" />
                        <div className="menu-item" onClick={() => {
                          window.location.reload();
                          setIsMenuOpen(false);
                        }}>
                          <span>🔄</span> Restart
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Bitcoin Spreadsheet Menu */}
                <div className="spreadsheet-menu-container">
                  <button 
                    className="spreadsheet-menu-button"
                    onClick={() => setIsMenuOpen('spreadsheet')}
                    aria-label="Bitcoin Spreadsheet Menu"
                  >
                    <span>Bitcoin Spreadsheet</span>
                  </button>
                  {isMenuOpen === 'spreadsheet' && (
                    <>
                      <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />
                      <div className="spreadsheet-menu">
                        <div className="menu-header">
                          <span>Bitcoin Spreadsheet</span>
                        </div>
                        <div className="menu-separator" />
                        <div className="menu-item" onClick={() => {
                          if (bitcoinService) {
                            bitcoinService.createSpreadsheet('New Spreadsheet').then(sheet => {
                              setCurrentSpreadsheet(sheet);
                            });
                          }
                          setIsMenuOpen(false);
                        }}>
                          <span>📄</span> New Spreadsheet
                        </div>
                        <div className="menu-item" onClick={() => {
                          setIsSidebarOpen(!isSidebarOpen);
                          setIsMenuOpen(false);
                        }}>
                          <span>📁</span> {isSidebarOpen ? 'Hide' : 'Show'} My Spreadsheets
                        </div>
                        <div className="menu-separator" />
                        <div className="menu-item" onClick={() => {
                          if (currentSpreadsheet) {
                            window.dispatchEvent(new CustomEvent('openTokenizationModal', { 
                              detail: { spreadsheet: currentSpreadsheet } 
                            }));
                          } else {
                            alert('Please open a spreadsheet first to tokenize it.');
                          }
                          setIsMenuOpen(false);
                        }}>
                          <span>🪙</span> Tokenize Spreadsheet
                        </div>
                        <div className="menu-separator" />
                        <div className="menu-item" onClick={() => {
                          const spreadsheetCount = Object.keys(localStorage.getItem('spreadsheets') ? JSON.parse(localStorage.getItem('spreadsheets') || '[]') : []).length;
                          alert(`You have ${spreadsheetCount} spreadsheet${spreadsheetCount !== 1 ? 's' : ''} saved locally.`);
                          setIsMenuOpen(false);
                        }}>
                          <span>📊</span> Statistics
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <header className="App-header">
              <div className="connection-indicator" />
              <h1><span className="bitcoin-orange">Bitcoin</span> Spreadsheet</h1>
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
          </div>
        )
      } />
    </Routes>
  );
}

export default App;