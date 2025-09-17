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
  isDarkMode
}) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showBitcoinSuite, setShowBitcoinSuite] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menus: MenuData[] = [
    {
      label: 'Bitcoin Spreadsheet',
      items: [
        { label: 'About Bitcoin Spreadsheet', action: () => alert('Bitcoin Spreadsheet v1.0\n\nDecentralized spreadsheets on Bitcoin SV\n\n© @b0ase 2025\nBuilt with HandCash integration') },
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
        { label: 'Exchange', action: () => navigate('/exchange') }
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
        { label: '3D View', shortcut: '⌥⌘3', action: () => console.log('Toggle 3D view') },
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
        { label: 'BSV SDK Docs', href: 'https://docs.bsvblockchain.org' },
        { label: 'HandCash SDK Docs', href: 'https://docs.handcash.io' },
        { divider: true },
        { label: 'GitHub Repository', href: 'https://github.com/b0ase/blockchain-spreadsheet' },
        { label: 'API Documentation', action: () => console.log('API Documentation') },
        { divider: true },
        { label: 'Bitcoin Writer', href: 'https://bitcoin-writer.vercel.app' },
        { label: 'Bitcoin Drive', href: 'https://bitcoin-drive.vercel.app' },
        { divider: true },
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
        { label: 'Bitcoin Spreadsheet Help', shortcut: '⌘?', action: () => alert('Bitcoin Spreadsheet v1.0\n\nCreate, encrypt, and store spreadsheets on the Bitcoin blockchain') },
        { label: 'Keyboard Shortcuts', action: () => console.log('Show keyboard shortcuts') },
        { label: 'Function List', action: () => console.log('Show function list') },
        { divider: true },
        { label: 'Release Notes', href: '/releases' },
        { label: 'What\'s New', action: () => alert('What\'s New in v1.0:\n\n• Handsontable integration\n• Dark mode support\n• Formula support with HyperFormula\n• Blockchain storage\n• HandCash authentication') },
        { divider: true },
        { label: 'Report an Issue', href: 'https://github.com/b0ase/blockchain-spreadsheet/issues' },
        { label: 'Contact @b0ase', href: 'https://twitter.com/b0ase' }
      ]
    }
  ];

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
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000
      }}
    >
      {/* Bitcoin Logo */}
      <div style={{ position: 'relative' }}>
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
            <button
              style={{
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
                transition: 'background 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(25, 118, 210, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              Bitcoin Apps
            </button>
            
            {[
              { name: 'Bitcoin Auth', color: '#ef4444' },
              { name: 'Bitcoin Chat', color: '#ff6500' },
              { name: 'Bitcoin Domains', color: '#eab308' },
              { name: 'Bitcoin Draw', color: '#10b981' },
              { name: 'Bitcoin Drive', color: '#22c55e', href: 'https://bitcoin-drive.vercel.app' },
              { name: 'Bitcoin Email', color: '#06b6d4' },
              { name: 'Bitcoin Exchange', color: '#3b82f6' },
              { name: 'Bitcoin Music', color: '#8b5cf6' },
              { name: 'Bitcoin Paint', color: '#a855f7' },
              { name: 'Bitcoin Pics', color: '#ec4899' },
              { name: 'Bitcoin Registry', color: '#f43f5e' },
              { name: 'Bitcoin Shares', color: '#f43f5e' },
              { name: 'Bitcoin Spreadsheets', color: '#3b82f6', active: true },
              { name: 'Bitcoin Video', color: '#65a30d' },
              { name: 'Bitcoin Wallet', color: '#f59e0b' },
              { name: 'Bitcoin Writer', color: '#1976d2', href: 'https://bitcoin-writer.vercel.app' }
            ].map((app) => (
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
                    if (!app.active) {
                      console.log(`Opening ${app.name}`);
                    }
                    setShowBitcoinSuite(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '6px 16px',
                    color: '#ffffff',
                    background: app.active ? 'rgba(255, 149, 0, 0.15)' : 'transparent',
                    border: 'none',
                    width: '100%',
                    textAlign: 'left',
                    fontSize: '13px',
                    transition: 'background 0.15s ease',
                    cursor: app.active ? 'default' : 'pointer'
                  }}
                  onMouseEnter={(e) => !app.active && (e.currentTarget.style.background = 'rgba(128, 128, 128, 0.2)')}
                  onMouseLeave={(e) => !app.active && (e.currentTarget.style.background = 'transparent')}
                  disabled={app.active}
                >
                  <span style={{ color: app.color, marginRight: '12px', fontSize: '16px', fontWeight: 'bold' }}>₿</span>
                  {app.name}
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
        gap: '16px',
        paddingRight: '16px',
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.8)'
      }}>
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