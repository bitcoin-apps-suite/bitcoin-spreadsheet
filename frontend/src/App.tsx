import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Spreadsheet from './components/Spreadsheet';
import Login from './components/Login';
import HandCashCallback from './components/HandCashCallback';
import { BitcoinService } from './services/BitcoinService';
import { HandCashService, HandCashUser } from './services/HandCashService';

function App() {
  const [bitcoinService, setBitcoinService] = useState<BitcoinService | null>(null);
  const [handcashService] = useState<HandCashService>(new HandCashService());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<HandCashUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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
        ) : !isAuthenticated ? (
          <Login onLogin={handleLogin} />
        ) : (
          <div className="App">
            <a 
              href="https://x.com/BitcoinSheets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link-fixed"
              aria-label="Follow on X"
              style={{ position: 'fixed', top: '24px', left: '24px', zIndex: 9999 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <header className="App-header">
              <div className="connection-indicator" />
              <h1>Bitcoin Spreadsheet</h1>
              <div className="user-info">
                <span className="user-handle">@{currentUser?.handle}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Sign Out
                </button>
              </div>
            </header>
            <div className="disclaimer">
              <small>This is a demonstration version. Use at your own risk. Blockchain transactions cannot be reversed.</small>
            </div>
            <main>
              {bitcoinService ? (
                <Spreadsheet bitcoinService={bitcoinService} />
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