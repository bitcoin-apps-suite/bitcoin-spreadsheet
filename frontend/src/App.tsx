import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import './styles/app-dark.css';
import './styles/mobile.css';
import Spreadsheet from './components/Spreadsheet';
import MobileSpreadsheet from './components/MobileSpreadsheet';
import SpreadsheetManager from './components/SpreadsheetManager';
import NavbarLogin from './components/NavbarLogin';
import EnhancedConnectionsModal from './components/EnhancedConnectionsModal';
import HandCashCallback from './components/HandCashCallback';
import BitcoinSpreadsheetPage from './pages/BitcoinSpreadsheetPage';
import BapsPage from './pages/BapsPage';
import ExchangePage from './pages/ExchangePage';
import ThreeDPage from './pages/ThreeDPage';
import TokenPage from './pages/TokenPage';
import ClaudeChat from './components/ClaudeChat';
import SpreadsheetTaskbar from './components/SpreadsheetTaskbar';
import SpreadsheetExchangeView from './components/SpreadsheetExchangeView';
import InstallPrompt from './components/InstallPrompt';
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
  const [showExchange, setShowExchange] = useState(false);
  const [showConnectionsModal, setShowConnectionsModal] = useState(false);
  const [connectedServices, setConnectedServices] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
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

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Listen for exchange open event
  useEffect(() => {
    const handleOpenExchange = () => setShowExchange(true);
    window.addEventListener('openSpreadsheetExchange', handleOpenExchange);
    return () => window.removeEventListener('openSpreadsheetExchange', handleOpenExchange);
  }, []);

  // Load connected services from localStorage
  useEffect(() => {
    const loadConnectedServices = () => {
      const services = [];
      if (isAuthenticated && currentUser) {
        services.push('HandCash');
      }
      // Check for other connected services in localStorage
      const connected = localStorage.getItem('connectedServices');
      if (connected) {
        try {
          const parsed = JSON.parse(connected);
          services.push(...parsed);
        } catch (error) {
          console.error('Failed to parse connected services:', error);
        }
      }
      setConnectedServices(services);
    };
    
    loadConnectedServices();
    
    // Listen for service updates from connection modal
    const handleServicesUpdated = () => loadConnectedServices();
    window.addEventListener('servicesUpdated', handleServicesUpdated);
    
    return () => window.removeEventListener('servicesUpdated', handleServicesUpdated);
  }, [isAuthenticated, currentUser]);

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
      <Route path="/3d" element={<ThreeDPage />} />
      <Route path="/token" element={<TokenPage />} />
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
              {/* Mobile header layout - only on mobile */}
              <div className="mobile-header-wrapper">
                <div className="mobile-header-title">
                  <h1>
                    <img 
                      src="/bitcoin-watercolor-icon.png" 
                      alt="Bitcoin" 
                      className="bitcoin-icon-beveled"
                      style={{ width: '40px', height: '40px', marginRight: '16px', verticalAlign: 'middle' }}
                    />
                    <span className="bitcoin-orange">Bitcoin</span> Spreadsheet
                  </h1>
                </div>
                <div className="mobile-header-connections">
                  <div className="connection-badge" onClick={() => setShowConnectionsModal(true)}>
                    {connectedServices.length === 0 ? (
                      <button className="connect-badge-btn">
                        Connect
                      </button>
                    ) : (
                      <>
                        <div className="connected-avatars">
                          {connectedServices.slice(0, 3).map((service, index) => (
                            <div 
                              key={service} 
                              className="service-avatar" 
                              style={{ 
                                marginLeft: index > 0 ? '-8px' : '0',
                                zIndex: 3 - index 
                              }}
                              title={service}
                            >
                              {service === 'HandCash' ? (
                                <img src="https://handcash.io/favicon.ico" alt="HandCash" />
                              ) : service === 'Salesforce' ? (
                                <div className="avatar-icon salesforce">S</div>
                              ) : service === 'Stripe' ? (
                                <div className="avatar-icon stripe">$</div>
                              ) : service === 'Google Sheets' ? (
                                <div className="avatar-icon sheets">G</div>
                              ) : service === 'QuickBooks' ? (
                                <div className="avatar-icon quickbooks">Q</div>
                              ) : (
                                <div className="avatar-icon default">{service.charAt(0)}</div>
                              )}
                            </div>
                          ))}
                          {connectedServices.length > 3 && (
                            <div 
                              className="service-avatar more-count" 
                              style={{ marginLeft: '-8px', zIndex: 0 }}
                            >
                              <span>+{connectedServices.length - 3}</span>
                            </div>
                          )}
                        </div>
                        <span className="connection-count">
                          {connectedServices.length} connected
                        </span>
                      </>
                    )}
                  </div>
                  {/* Mobile user section */}
                  {isAuthenticated && currentUser && (
                    <div className="mobile-user-section">
                      <div className="handcash-user-badge">
                        <img 
                          src="https://handcash.io/favicon.ico" 
                          alt="HandCash" 
                          className="handcash-user-icon"
                        />
                        <span className="user-handle">@{currentUser.handle}</span>
                        <div className="connection-dot"></div>
                      </div>
                      <button className="mobile-logout-btn" onClick={handleLogout}>
                        Exit
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Desktop header layout - hidden on mobile */}
              <div className="desktop-header-wrapper">
                <div className="connection-badge" onClick={() => setShowConnectionsModal(true)}>
                  {connectedServices.length === 0 ? (
                    <button className="connect-badge-btn">
                      Connect
                    </button>
                  ) : (
                    <>
                      <div className="connected-avatars">
                        {connectedServices.slice(0, 3).map((service, index) => (
                          <div 
                            key={service} 
                            className="service-avatar" 
                            style={{ 
                              marginLeft: index > 0 ? '-8px' : '0',
                              zIndex: 3 - index 
                            }}
                            title={service}
                          >
                            {service === 'HandCash' ? (
                              <img src="https://handcash.io/favicon.ico" alt="HandCash" />
                            ) : service === 'Salesforce' ? (
                              <div className="avatar-icon salesforce">S</div>
                            ) : service === 'Stripe' ? (
                              <div className="avatar-icon stripe">$</div>
                            ) : service === 'Google Sheets' ? (
                              <div className="avatar-icon sheets">G</div>
                            ) : service === 'QuickBooks' ? (
                              <div className="avatar-icon quickbooks">Q</div>
                            ) : (
                              <div className="avatar-icon default">{service.charAt(0)}</div>
                            )}
                          </div>
                        ))}
                        {connectedServices.length > 3 && (
                          <div 
                            className="service-avatar more-count" 
                            style={{ marginLeft: '-8px', zIndex: 0 }}
                          >
                            <span>+{connectedServices.length - 3}</span>
                          </div>
                        )}
                      </div>
                      <span className="connection-count">
                        {connectedServices.length} connected
                      </span>
                    </>
                  )}
                </div>
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
              </div>
              
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
                    <button 
                      className="connections-button"
                      onClick={() => setShowConnectionsModal(true)}
                      style={{
                        padding: '10px 24px',
                        backgroundColor: '#4285F4',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease',
                        marginRight: '8px',
                        minWidth: '160px',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(66, 133, 244, 0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#3367D6';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(66, 133, 244, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#4285F4';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(66, 133, 244, 0.2)';
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>⚙️</span>
                      Manage Connections
                    </button>
                    <button className="logout-btn" onClick={handleLogout}>
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      className="connect-button"
                      onClick={() => setShowConnectionsModal(true)}
                      style={{
                        padding: '10px 24px',
                        backgroundColor: '#4285F4',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease',
                        minWidth: '140px',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(66, 133, 244, 0.2)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#3367D6';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(66, 133, 244, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#4285F4';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(66, 133, 244, 0.2)';
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>🔗</span>
                      Connect
                    </button>
                  </>
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
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <button 
                        className="connections-button mobile-connections-btn"
                        onClick={() => setShowConnectionsModal(true)}
                        style={{
                          padding: '10px 20px',
                          backgroundColor: '#4285F4',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          fontSize: '14px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(66, 133, 244, 0.2)'
                        }}
                      >
                        Manage Connections
                      </button>
                      <button className="logout-btn mobile-logout-btn" onClick={handleLogout}>
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mobile-login-section">
                    <button 
                      className="connect-button mobile-connect"
                      onClick={() => setShowConnectionsModal(true)}
                      style={{
                        padding: '12px 24px',
                        backgroundColor: '#4285F4',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '15px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        width: '100%',
                        maxWidth: '200px',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 8px rgba(66, 133, 244, 0.2)'
                      }}
                    >
                      Connect
                    </button>
                  </div>
                )}
              </div>
            </header>
            <div className="disclaimer">
              <small>This is a demonstration version. Use at your own risk. Blockchain transactions cannot be reversed.</small>
            </div>
            <main className="main-container">
              {bitcoinService ? (
                showExchange ? (
                  <SpreadsheetExchangeView 
                    onClose={() => setShowExchange(false)}
                    onSelectSpreadsheet={(spreadsheet) => {
                      console.log('Selected spreadsheet from exchange:', spreadsheet);
                      // Could load the spreadsheet data here
                      setShowExchange(false);
                    }}
                  />
                ) : (
                  <div className="app-content">
                    {isSidebarOpen && (
                      <SpreadsheetManager
                        bitcoinService={bitcoinService}
                        onSelectSpreadsheet={setCurrentSpreadsheet}
                        currentSpreadsheet={currentSpreadsheet}
                      />
                    )}
                    <div className="spreadsheet-wrapper">
                      {isMobile ? (
                        <MobileSpreadsheet
                          spreadsheetData={currentSpreadsheet}
                          onSpreadsheetUpdate={setCurrentSpreadsheet}
                          isDarkMode={isDarkMode}
                        />
                      ) : (
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
                          onNewSpreadsheet={() => {
                            if (bitcoinService) {
                              bitcoinService.createSpreadsheet('New Spreadsheet').then(sheet => {
                                setCurrentSpreadsheet(sheet);
                              });
                            }
                          }}
                        />
                      )}
                    </div>
                  </div>
                )
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
             
             {/* Enhanced Connections Modal */}
             <EnhancedConnectionsModal
               isOpen={showConnectionsModal}
               onClose={() => setShowConnectionsModal(false)}
               onLogin={handleLogin}
               bitcoinService={bitcoinService}
               isDarkMode={isDarkMode}
               onDataImport={(data) => {
                 // Handle imported spreadsheet data
                 setCurrentSpreadsheet(data);
                 console.log('Imported spreadsheet:', data);
               }}
             />
             
             {/* PWA Install Prompt */}
             <InstallPrompt />
          </div>
        )
      } />
    </Routes>
  );
}

export default App;