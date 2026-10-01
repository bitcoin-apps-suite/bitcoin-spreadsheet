import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './mobile/mobile-bwallet.css';
import { applyShellClasses } from './mobile/shell';
// Service worker disabled for blockchain deployment; re-enable with:
// import * as serviceWorkerRegistration from './registerServiceWorker';

applyShellClasses();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Register service worker for PWA functionality - DISABLED for blockchain deployment
// serviceWorkerRegistration.register();
