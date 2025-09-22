import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpreadsheetUtils } from '../utils/SpreadsheetUtils';

interface MenuItem {
  label?: string;
  action?: () => void;
  href?: string;
  divider?: boolean;
  shortcut?: string;
}

interface MenuData {
  label: string;
  items: MenuItem[];
}

interface TaskbarProps {
  isAuthenticated: boolean;
  currentUser: any;
  onLogout: () => void;
  onNewSpreadsheet?: () => void;
  onSaveSpreadsheet?: () => void;
  onSaveToBlockchain?: () => void;
  onImport?: () => void;
  onExport?: () => void;
  toggleDarkMode?: () => void;
  isDarkMode?: boolean;
  onToggle3DView?: () => void;
}

const SpreadsheetTaskbar: React.FC<TaskbarProps> = ({ 
  isAuthenticated, 
  currentUser, 
  onLogout,
  onNewSpreadsheet,
  onSaveSpreadsheet,
  onSaveToBlockchain,
  onImport,
  onExport,
  toggleDarkMode,
  isDarkMode,
  onToggle3DView
}) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showBitcoinSuite, setShowBitcoinSuite] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const menuRef = useRef<HTMLDivElement>(null);

  const menus: MenuData[] = [
    {
      label: 'Bitcoin Spreadsheet',
      items: [
        { label: 'Home', shortcut: '⇧⌘H', action: () => navigate('/') },
        { divider: true },
        { label: 'About Bitcoin Spreadsheet', action: () => alert('Bitcoin Spreadsheet v1.0\n\nDecentralized spreadsheets on Bitcoin SV\n\n© 2025 THE BITCOIN CORPORATION LTD\nUK Company No. 16735102\n\nBuilt with HandCash integration') },
        { divider: true },
        { label: 'Preferences...', shortcut: '⌘,', action: () => console.log('Preferences') },
        { label: 'Encryption Settings...', action: () => console.log('Encryption') },
        { divider: true },
        { label: 'Hide Bitcoin Spreadsheet', shortcut: '⌘H', action: () => console.log('Hide') },
        { label: 'Hide Others', shortcut: '⌥⌘H', action: () => console.log('Hide Others') },
        { divider: true },
        { label: isAuthenticated ? 'Sign Out' : 'Sign In', shortcut: '⌘Q', action: isAuthenticated ? onLogout : () => document.querySelector<HTMLButtonElement>('.login-btn')?.click() }
      ]
    },
    {
      label: 'File',
      items: [
        { label: 'New Spreadsheet', shortcut: '⌘N', action: onNewSpreadsheet || (() => console.log('New')) },
        { label: 'Open...', shortcut: '⌘O', action: () => console.log('Open') },
        { label: 'Open Recent', action: () => console.log('Recent') },
        { divider: true },
        { label: 'Close', shortcut: '⌘W', action: () => console.log('Close') },
        { label: 'Save', shortcut: '⌘S', action: onSaveSpreadsheet || (() => console.log('Save')) },
        { label: 'Save As...', shortcut: '⇧⌘S', action: () => console.log('Save As') },
        { label: 'Save to Blockchain', shortcut: '⌘B', action: onSaveToBlockchain || (() => console.log('Save to Blockchain')) },
        { divider: true },
        { label: 'Import from Excel', action: onImport || (() => console.log('Import Excel')) },
        { label: 'Import from CSV', action: () => SpreadsheetUtils.importFromCSV() },
        { label: 'Import from Google Sheets', action: () => console.log('Import Google Sheets') },
        { divider: true },
        { label: 'Export to Excel', action: onExport || (() => console.log('Export Excel')) },
        { label: 'Export to CSV', action: () => SpreadsheetUtils.exportToCSV() },
        { label: 'Export to PDF', action: () => console.log('Export PDF') },
        { label: 'Export to HTML', action: () => console.log('Export HTML') }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', shortcut: '⌘Z', action: () => SpreadsheetUtils.undo() },
        { label: 'Redo', shortcut: '⇧⌘Z', action: () => SpreadsheetUtils.redo() },
        { divider: true },
        { label: 'Cut', shortcut: '⌘X', action: () => SpreadsheetUtils.cutSelection() },
        { label: 'Copy', shortcut: '⌘C', action: () => SpreadsheetUtils.copySelection() },
        { label: 'Paste', shortcut: '⌘V', action: () => SpreadsheetUtils.pasteSelection() },
        { label: 'Paste Special...', shortcut: '⇧⌘V', action: () => console.log('Paste Special') },
        { label: 'Select All', shortcut: '⌘A', action: () => document.execCommand('selectAll') },
        { divider: true },
        { label: 'Find...', shortcut: '⌘F', action: () => console.log('Find') },
        { label: 'Find & Replace...', shortcut: '⌥⌘F', action: () => console.log('Find & Replace') }
      ]
    },
    {
      label: 'Insert',
      items: [
        { label: 'Row Above', action: () => SpreadsheetUtils.insertRowAbove() },
        { label: 'Row Below', action: () => SpreadsheetUtils.insertRowBelow() },
        { label: 'Column Left', action: () => SpreadsheetUtils.insertColumnLeft() },
        { label: 'Column Right', action: () => SpreadsheetUtils.insertColumnRight() },
        { divider: true },
        { label: 'Delete Row', action: () => SpreadsheetUtils.deleteRow() },
        { label: 'Delete Column', action: () => SpreadsheetUtils.deleteColumn() },
        { divider: true },
        { label: 'Function...', shortcut: '⇧⌘F', action: () => console.log('Insert Function') },
        { label: 'Chart...', action: () => console.log('Insert Chart') },
        { label: 'Image...', action: () => console.log('Insert Image') },
        { label: 'Link...', shortcut: '⌘K', action: () => console.log('Insert Link') },
        { divider: true },
        { label: 'Comment', shortcut: '⇧⌘C', action: () => console.log('Insert Comment') },
        { label: 'Note', action: () => console.log('Insert Note') }
      ]
    },
    {
      label: 'Format',
      items: [
        { label: 'Bold', shortcut: '⌘B', action: () => SpreadsheetUtils.applyBold() },
        { label: 'Italic', shortcut: '⌘I', action: () => console.log('Apply Italic') },
        { label: 'Underline', shortcut: '⌘U', action: () => console.log('Apply Underline') },
        { label: 'Strikethrough', shortcut: '⌥⇧5', action: () => console.log('Strikethrough') },
        { divider: true },
        { label: 'Number', action: () => console.log('Format Number') },
        { label: 'Currency', action: () => SpreadsheetUtils.applyCurrency() },
        { label: 'Percentage', action: () => SpreadsheetUtils.applyPercentage() },
        { label: 'Date', action: () => console.log('Format Date') },
        { label: 'Time', action: () => console.log('Format Time') },
        { divider: true },
        { label: 'Align Left', action: () => console.log('Align Left') },
        { label: 'Align Center', action: () => console.log('Align Center') },
        { label: 'Align Right', action: () => console.log('Align Right') },
        { divider: true },
        { label: 'Conditional Formatting...', action: () => console.log('Conditional Formatting') },
        { label: 'Clear Formatting', action: () => console.log('Clear Formatting') }
      ]
    },
    {
      label: 'Data',
      items: [
        { label: 'Sort A → Z', action: () => SpreadsheetUtils.sortAscending() },
        { label: 'Sort Z → A', action: () => SpreadsheetUtils.sortDescending() },
        { label: 'Sort Range...', action: () => console.log('Sort Range') },
        { divider: true },
        { label: 'Filter', shortcut: '⌘⇧F', action: () => SpreadsheetUtils.toggleFilters() },
        { label: 'Filter Views', action: () => console.log('Filter Views') },
        { divider: true },
        { label: 'Pivot Table...', action: () => console.log('Pivot Table') },
        { label: 'Data Validation...', action: () => console.log('Data Validation') },
        { divider: true },
        { label: 'Split Text to Columns...', action: () => console.log('Split Text') },
        { label: 'Remove Duplicates', action: () => console.log('Remove Duplicates') }
      ]
    },
    {
      label: 'Blockchain',
      items: [
        { label: 'Developer Contracts', href: '/contracts' },
        { label: '$BSHEETS Token', href: '/token' },
        { label: 'Contributions', href: '/contributions' },
        { divider: true },
        { label: 'Encrypt Spreadsheet', shortcut: '⌘L', action: () => console.log('Encrypt') },
        { label: 'Decrypt Spreadsheet', action: () => console.log('Decrypt') },
        { divider: true },
        { label: 'Create NFT', action: () => console.log('Create NFT') },
        { label: 'Issue Spreadsheet Shares', action: () => console.log('Issue shares') },
        { divider: true },
        { label: 'Set Access Permissions', action: () => console.log('Set permissions') },
        { label: 'Set Paywall', action: () => console.log('Set paywall') },
        { label: 'Set Timelock', action: () => console.log('Set timelock') },
        { divider: true },
        { label: 'Publish to Chain', action: () => console.log('Publish to chain') },
        { label: 'View on Explorer', href: 'https://whatsonchain.com' },
        { divider: true },
        { label: 'Token Exchange', href: '/exchange' }
      ]
    },
    {
      label: 'Formulas',
      items: [
        { label: 'SUM', action: () => SpreadsheetUtils.insertSumFormula() },
        { label: 'AVERAGE', action: () => SpreadsheetUtils.insertAverageFormula() },
        { label: 'COUNT', action: () => SpreadsheetUtils.insertCountFormula() },
        { label: 'MAX', action: () => SpreadsheetUtils.insertFormula('MAX(A1:A10)') },
        { label: 'MIN', action: () => SpreadsheetUtils.insertFormula('MIN(A1:A10)') },
        { divider: true },
        { label: 'IF', action: () => SpreadsheetUtils.insertFormula('IF(A1>0,"Yes","No")') },
        { label: 'VLOOKUP', action: () => SpreadsheetUtils.insertFormula('VLOOKUP(A1,A:B,2,FALSE)') },
        { label: 'INDEX', action: () => SpreadsheetUtils.insertFormula('INDEX(A:A,1)') },
        { label: 'MATCH', action: () => SpreadsheetUtils.insertFormula('MATCH(A1,A:A,0)') },
        { divider: true },
        { label: 'TODAY', action: () => SpreadsheetUtils.insertFormula('TODAY()') },
        { label: 'NOW', action: () => SpreadsheetUtils.insertFormula('NOW()') },
        { label: 'RAND', action: () => SpreadsheetUtils.insertFormula('RAND()') },
        { divider: true },
        { label: 'Function Help', href: 'https://hyperformula.handsontable.com/guide/built-in-functions.html' }
      ]
    },
    {
      label: 'Tools',
      items: [
        { label: 'Macros', action: () => console.log('Macros') },
        { label: 'Script Editor', action: () => console.log('Script Editor') },
        { divider: true },
        { label: 'Protect Range...', action: () => console.log('Protect Range') },
        { label: 'Protect Sheet...', action: () => console.log('Protect Sheet') },
        { divider: true },
        { label: 'Spell Check', shortcut: '⌘:', action: () => console.log('Spell Check') },
        { label: 'Word Count', action: () => console.log('Word Count') },
        { divider: true },
        { label: 'Storage Calculator', action: () => console.log('Storage Calculator') },
        { label: 'Blockchain Cost Estimator', action: () => console.log('Cost Estimator') }
      ]
    },
    {
      label: 'View',
      items: [
        { label: 'Toggle Sidebar', shortcut: '⌥⌘S', action: () => console.log('Toggle sidebar') },
        { label: 'Toggle Dark Mode', shortcut: '⌥⌘D', action: toggleDarkMode },
        { label: 'Toggle Formula Bar', action: () => console.log('Toggle formula bar') },
        { label: '3D View', shortcut: '⌥⌘3', action: () => navigate('/3d') },
        { divider: true },
        { label: 'Gridlines', action: () => console.log('Toggle gridlines') },
        { label: 'Protected Ranges', action: () => console.log('Show protected ranges') },
        { label: 'Formulas', action: () => console.log('Show formulas') },
        { divider: true },
        { label: 'Freeze ▸', action: () => {} },
        { label: '  1 Row', action: () => console.log('Freeze 1 row') },
        { label: '  2 Rows', action: () => console.log('Freeze 2 rows') },
        { label: '  1 Column', action: () => console.log('Freeze 1 column') },
        { label: '  2 Columns', action: () => console.log('Freeze 2 columns') },
        { divider: true },
        { label: 'Full Screen', shortcut: '⌃⌘F', action: () => document.documentElement.requestFullscreen() },
        { divider: true },
        { label: 'Zoom In', shortcut: '⌘+', action: () => (document.body.style as any).zoom = '110%' },
        { label: 'Zoom Out', shortcut: '⌘-', action: () => (document.body.style as any).zoom = '90%' },
        { label: 'Actual Size', shortcut: '⌘0', action: () => (document.body.style as any).zoom = '100%' }
      ]
    },
    {
      label: 'Developers',
      items: [
        { label: 'Developer Contracts', href: '/contracts' },
        { label: 'Open Tasks', href: '/tasks' },
        { label: 'Contributions', href: '/contributions' },
        { label: '$BSHEETS Token', href: '/token' },
        { divider: true },
        { label: 'Documentation', href: '/docs' },
        { label: 'API Documentation', action: () => console.log('API Documentation') },
        { label: 'BSV SDK Docs', href: 'https://docs.bsvblockchain.org' },
        { label: 'HandCash SDK Docs', href: 'https://docs.handcash.io' },
        { divider: true },
        { label: 'GitHub Repository', href: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet' },
        { label: 'Report Issue', href: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/new' },
        { label: 'Submit Pull Request', href: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/pulls' },
        { divider: true },
        { label: 'Bitcoin Writer', href: 'https://bitcoin-writer.vercel.app' },
        { label: 'Bitcoin Drive', href: 'https://bitcoin-drive.vercel.app' },
        { label: 'BAP Executive Summary', href: '/bap' }
      ]
    },
    {
      label: 'Window',
      items: [
        { label: 'New Window', shortcut: '⌘N', action: () => window.open(window.location.href) },
        { label: 'Minimize', shortcut: '⌘M', action: () => console.log('Minimize') },
        { label: 'Zoom', action: () => console.log('Zoom') },
        { divider: true },
        { label: 'Bring All to Front', action: () => console.log('Bring to front') }
      ]
    },
    {
      label: 'Help',
      items: [
        { label: 'Bitcoin Spreadsheet Help', shortcut: '⌘?', action: () => alert('Bitcoin Spreadsheet v1.0\n\nCreate, encrypt, and store spreadsheets on the Bitcoin blockchain\n\n© 2025 THE BITCOIN CORPORATION LTD\nUK Company No. 16735102') },
        { label: 'Keyboard Shortcuts', action: () => console.log('Show keyboard shortcuts') },
        { label: 'Function List', action: () => console.log('Show function list') },
        { divider: true },
        { label: 'Release Notes', href: '/releases' },
        { label: 'What\'s New', action: () => alert('What\'s New in v1.0:\n\n• Handsontable integration\n• Dark mode support\n• Formula support with HyperFormula\n• Blockchain storage\n• HandCash authentication\n\n© 2025 THE BITCOIN CORPORATION LTD') },
        { divider: true },
        { label: 'Report an Issue', href: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues' },
        { label: 'Contact @b0ase', href: 'https://twitter.com/b0ase' }
      ]
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setShowBitcoinSuite(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openBitcoinApp = (appName: string) => {
    // Handle opening other Bitcoin apps
    switch(appName) {
      case 'writer':
        window.open('https://bitcoin-writer.vercel.app', '_blank');
        break;
      case 'drive':
        window.open('https://bitcoin-drive.vercel.app', '_blank');
        break;
      default:
        console.log(`Opening ${appName}`);
    }
  };

  // Mobile taskbar
  if (isMobile) {
    return (
      <div 
        ref={menuRef}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '56px',
          background: '#0A0E27',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '0 8px',
          zIndex: 10000
        }}
      >
        {/* Mobile menu items */}
        <button
          onClick={() => setActiveMenu(activeMenu === 'file' ? null : 'file')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            color: activeMenu === 'file' ? '#87CEEB' : 'rgba(255, 255, 255, 0.7)',
            padding: '8px',
            fontSize: '11px',
            cursor: 'pointer'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
            <path d="M13 2v7h7"/>
          </svg>
          <span>File</span>
        </button>

        <button
          onClick={() => setActiveMenu(activeMenu === 'edit' ? null : 'edit')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            color: activeMenu === 'edit' ? '#87CEEB' : 'rgba(255, 255, 255, 0.7)',
            padding: '8px',
            fontSize: '11px',
            cursor: 'pointer'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          <span>Edit</span>
        </button>

        <button
          onClick={() => window.dispatchEvent(new CustomEvent('openSpreadsheetExchange'))}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            padding: '8px',
            fontSize: '11px',
            cursor: 'pointer'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="7"/>
            <path d="M12 1v14M5 5h14"/>
            <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"/>
          </svg>
          <span>Exchange</span>
        </button>

        <button
          onClick={toggleDarkMode}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.7)',
            padding: '8px',
            fontSize: '11px',
            cursor: 'pointer'
          }}
        >
          {isDarkMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M14.46 14.46l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M14.46 9.54l4.24-4.24"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
          <span>Theme</span>
        </button>

        <button
          onClick={() => setActiveMenu(activeMenu === 'more' ? null : 'more')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            background: 'transparent',
            border: 'none',
            color: activeMenu === 'more' ? '#87CEEB' : 'rgba(255, 255, 255, 0.7)',
            padding: '8px',
            fontSize: '11px',
            cursor: 'pointer'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="1"/>
            <circle cx="12" cy="5" r="1"/>
            <circle cx="12" cy="19" r="1"/>
          </svg>
          <span>More</span>
        </button>

        {/* Mobile dropdown menus */}
        {activeMenu && (
          <div style={{
            position: 'fixed',
            bottom: '60px',
            left: '8px',
            right: '8px',
            background: '#1a1a1a',
            borderRadius: '12px 12px 0 0',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            maxHeight: '60vh',
            overflowY: 'auto',
            zIndex: 10001
          }}>
            <div style={{ padding: '12px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#87CEEB' }}>
                {activeMenu === 'file' ? 'File' : 
                 activeMenu === 'edit' ? 'Edit' : 
                 activeMenu === 'more' ? 'More Options' : activeMenu}
              </h3>
              {activeMenu === 'file' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button onClick={() => { onNewSpreadsheet?.(); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#fff', textAlign: 'left' }}>New Spreadsheet</button>
                  <button onClick={() => { onSaveSpreadsheet?.(); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#fff', textAlign: 'left' }}>Save</button>
                  <button onClick={() => { onImport?.(); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#fff', textAlign: 'left' }}>Import</button>
                  <button onClick={() => { onExport?.(); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#fff', textAlign: 'left' }}>Export</button>
                </div>
              )}
              {activeMenu === 'edit' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button onClick={() => { SpreadsheetUtils.undo(); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#fff', textAlign: 'left' }}>Undo</button>
                  <button onClick={() => { SpreadsheetUtils.redo(); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#fff', textAlign: 'left' }}>Redo</button>
                  <button onClick={() => { SpreadsheetUtils.copySelection(); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#fff', textAlign: 'left' }}>Copy</button>
                  <button onClick={() => { SpreadsheetUtils.pasteSelection(); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#fff', textAlign: 'left' }}>Paste</button>
                </div>
              )}
              {activeMenu === 'more' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button onClick={() => { navigate('/docs'); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#fff', textAlign: 'left' }}>Documentation</button>
                  <button onClick={() => { navigate('/token'); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#fff', textAlign: 'left' }}>$BSHEETS Token</button>
                  <button onClick={() => { navigate('/tasks'); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#fff', textAlign: 'left' }}>Tasks</button>
                  <button onClick={() => { navigate('/contributions'); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 255, 255, 0.05)', border: 'none', borderRadius: '8px', color: '#fff', textAlign: 'left' }}>Contributions</button>
                  {isAuthenticated ? (
                    <button onClick={() => { onLogout(); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(255, 0, 0, 0.1)', border: 'none', borderRadius: '8px', color: '#ff6666', textAlign: 'left' }}>Sign Out</button>
                  ) : (
                    <button onClick={() => { document.querySelector<HTMLButtonElement>('.login-btn')?.click(); setActiveMenu(null); }} style={{ padding: '10px', background: 'rgba(66, 133, 244, 0.1)', border: 'none', borderRadius: '8px', color: '#4285F4', textAlign: 'left' }}>Sign In</button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop taskbar
  return (
    <div 
      ref={menuRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '28px',
        background: 'linear-gradient(180deg, #3a3a3a 0%, #2a2a2a 100%)',
        borderBottom: '1px solid #1a1a1a',
        fontSize: '13px',
        fontWeight: '500',
        color: '#ffffff',
        userSelect: 'none',
        position: 'fixed',
        top: 40, // Account for proof of concept banner
        left: 0,
        right: 0,
        zIndex: 10000
      }}
    >
      {/* Bitcoin Logo - Aligned with dev sidebar center */}
      <div style={{ position: 'relative', marginLeft: '18px' }}>
        <button
          onClick={() => {
            setShowBitcoinSuite(!showBitcoinSuite);
            setActiveMenu(null);
          }}
          style={{
            padding: '0 12px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#1976d2',
            display: 'flex',
            alignItems: 'center',
            height: '28px',
            background: showBitcoinSuite ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.15s ease'
          }}
          title="Bitcoin Suite Apps"
        >
          ₿
        </button>

        {/* Bitcoin Suite Dropdown */}
        {showBitcoinSuite && (
          <div style={{
            position: 'absolute',
            top: '28px',
            left: 0,
            minWidth: '220px',
            background: '#1a1a1a',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
            padding: '8px 0',
            zIndex: 1000
          }}>
            <a
              href="https://www.bitcoinapps.store"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                padding: '8px 16px',
                fontSize: '12px',
                color: '#1976d2',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '4px',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: '600',
                transition: 'background 0.15s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(25, 118, 210, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              Bitcoin Apps →
            </a>
            
            {[
              { name: 'Bitcoin Auth', color: '#666666', comingSoon: true },
              { name: 'Bitcoin Chat', color: '#666666', comingSoon: true },
              { name: 'Bitcoin Domains', color: '#666666', comingSoon: true },
              { name: 'Bitcoin Draw', color: '#666666', comingSoon: true },
              { name: 'Bitcoin Drive', color: '#22c55e', href: 'https://bitcoin-drive.vercel.app' },
              { name: 'Bitcoin Email', color: '#06b6d4' },
              { name: 'Bitcoin Exchange', color: '#666666', comingSoon: true },
              { name: 'Bitcoin Music', color: '#666666', comingSoon: true },
              { name: 'Bitcoin Paint', color: '#666666', comingSoon: true },
              { name: 'Bitcoin Pics', color: '#666666', comingSoon: true },
              { name: 'Bitcoin Registry', color: '#666666', comingSoon: true },
              { name: 'Bitcoin Shares', color: '#666666', comingSoon: true },
              { name: 'Bitcoin Spreadsheets', color: '#3b82f6', active: true },
              { name: 'Bitcoin Video', color: '#666666', comingSoon: true },
              { name: 'Bitcoin Wallet', color: '#666666', comingSoon: true },
              { name: 'Bitcoin Writer', color: '#1976d2', href: 'https://bitcoin-writer.vercel.app' }
            ].map((app: any) => (
              app.href ? (
                <a
                  key={app.name}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '6px 16px',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '13px',
                    transition: 'background 0.15s ease',
                    cursor: 'pointer',
                    background: app.active ? 'rgba(255, 149, 0, 0.15)' : 'transparent'
                  }}
                  onMouseEnter={(e) => !app.active && (e.currentTarget.style.background = 'rgba(128, 128, 128, 0.2)')}
                  onMouseLeave={(e) => !app.active && (e.currentTarget.style.background = 'transparent')}
                >
                  <span style={{ color: app.color, marginRight: '12px', fontSize: '16px', fontWeight: 'bold' }}>₿</span>
                  {app.name}
                  {app.active && <span style={{ marginLeft: 'auto', fontSize: '10px', opacity: 0.6 }}>●</span>}
                </a>
              ) : (
                <button
                  key={app.name}
                  onClick={() => {
                    if (!app.active && !app.comingSoon) {
                      console.log(`Opening ${app.name}`);
                    }
                    if (!app.comingSoon) {
                      setShowBitcoinSuite(false);
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '6px 16px',
                    color: app.comingSoon ? '#666666' : '#ffffff',
                    background: app.active ? 'rgba(255, 149, 0, 0.15)' : 'transparent',
                    border: 'none',
                    width: '100%',
                    textAlign: 'left',
                    fontSize: '13px',
                    transition: 'background 0.15s ease',
                    cursor: app.active ? 'default' : (app.comingSoon ? 'not-allowed' : 'pointer')
                  }}
                  onMouseEnter={(e) => !app.active && !app.comingSoon && (e.currentTarget.style.background = 'rgba(128, 128, 128, 0.2)')}
                  onMouseLeave={(e) => !app.active && !app.comingSoon && (e.currentTarget.style.background = 'transparent')}
                  disabled={app.active || app.comingSoon}
                >
                  <span style={{ color: app.color, marginRight: '12px', fontSize: '16px', fontWeight: 'bold', opacity: app.comingSoon ? 0.5 : 1 }}>₿</span>
                  <span style={{ flex: 1 }}>{app.name}</span>
                  {app.comingSoon && <span style={{ fontSize: '10px', opacity: 0.5, marginLeft: 'auto' }}>(coming soon)</span>}
                  {app.active && <span style={{ marginLeft: 'auto', fontSize: '10px', opacity: 0.6 }}>●</span>}
                </button>
              )
            ))}
          </div>
        )}
      </div>

      {/* Menu Items */}
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {menus.map((menu) => (
          <div key={menu.label} style={{ position: 'relative' }}>
            <button
              onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
              onMouseEnter={() => activeMenu && setActiveMenu(menu.label)}
              style={{
                padding: '0 12px',
                height: '24px',
                background: activeMenu === menu.label ? 'rgba(128, 128, 128, 0.2)' : 'transparent',
                border: 'none',
                color: '#ffffff',
                fontSize: '13px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 0.15s ease'
              }}
            >
              {menu.label}
            </button>

            {/* Dropdown Menu */}
            {activeMenu === menu.label && (
              <div style={{
                position: 'absolute',
                top: '28px',
                left: 0,
                minWidth: '200px',
                background: '#1a1a1a',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
                padding: '4px 0',
                zIndex: 9999,
                overflow: 'hidden'
              }}>
                {menu.items.map((item, index) => (
                  item.divider ? (
                    <div 
                      key={index}
                      style={{
                        height: '1px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        margin: '4px 0'
                      }}
                    />
                  ) : item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '4px 12px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(128, 128, 128, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span style={{ opacity: 0.6, fontSize: '12px' }}>{item.shortcut}</span>
                      )}
                    </a>
                  ) : (
                    <button
                      key={index}
                      onClick={() => {
                        item.action?.();
                        setActiveMenu(null);
                      }}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        padding: '4px 12px',
                        background: 'transparent',
                        border: 'none',
                        color: '#ffffff',
                        fontSize: '13px',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        textAlign: 'left',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(128, 128, 128, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span style={{ opacity: 0.6, fontSize: '12px' }}>{item.shortcut}</span>
                      )}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right side - Status */}
      <div style={{
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        paddingRight: '16px',
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.8)'
      }}>
        {/* Quick Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* GitHub */}
          <a
            href="https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              opacity: 0.9,
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            title="GitHub Repository"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          
          {/* Docs */}
          <a
            href="/docs"
            style={{
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              opacity: 0.9,
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            title="Developer Docs"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <path d="M14 2v6h6"/>
              <path d="M16 13H8"/>
              <path d="M16 17H8"/>
              <path d="M10 9H8"/>
            </svg>
          </a>
          
          {/* Token */}
          <a
            href="/token"
            style={{
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              opacity: 0.9,
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            title="$BSHEETS Token"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v12M9 9h6c0.83 0 1.5.67 1.5 1.5S15.83 12 15 12H9h6c0.83 0 1.5.67 1.5 1.5S15.83 15 15 15H9" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </a>
          
          {/* Leaderboard */}
          <a
            href="/contributions"
            style={{
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              opacity: 0.9,
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            title="Contributors Leaderboard"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="4" height="10" rx="1"/>
              <rect x="10" y="6" width="4" height="15" rx="1"/>
              <rect x="17" y="8" width="4" height="13" rx="1"/>
            </svg>
          </a>
        </div>

        <div style={{ width: '1px', height: '16px', background: 'rgba(255, 255, 255, 0.2)' }} />
        
        {/* Connection Status */}
        {isAuthenticated && currentUser ? (
          <>
            <span>{currentUser.handle || 'Connected'}</span>
            <span style={{ color: '#00ff88' }}>●</span>
          </>
        ) : (
          <>
            <span>Not Connected</span>
            <span style={{ color: '#ff4444', opacity: 0.6 }}>●</span>
          </>
        )}
      </div>
    </div>
  );
};

export default SpreadsheetTaskbar;