'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Spreadsheet from '../components/Spreadsheet';
import MobileSpreadsheet from '../components/MobileSpreadsheet';
import SpreadsheetManager from '../components/SpreadsheetManager';
import SpreadsheetExchangeView from '../components/SpreadsheetExchangeView';
import { SpreadsheetData } from '../services/BitcoinService';

export default function HomePage() {
    const { bitcoinService, isAuthenticated } = useAuth();
    const [currentSpreadsheet, setCurrentSpreadsheet] = useState<SpreadsheetData | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [showExchange, setShowExchange] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('darkMode');
            return savedMode !== 'false';
        }
        return true;
    });

    // Dark mode effect
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    // Responsive effect
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Exchange listener
    useEffect(() => {
        const handleOpenExchange = () => setShowExchange(true);
        window.addEventListener('openSpreadsheetExchange', handleOpenExchange);
        return () => window.removeEventListener('openSpreadsheetExchange', handleOpenExchange);
    }, []);

    if (!bitcoinService) {
        return <div className="loading">Initializing blockchain connection...</div>;
    }

    return (
        <div className="spreadsheet-page-content">
            {showExchange ? (
                <SpreadsheetExchangeView
                    onClose={() => setShowExchange(false)}
                    onSelectSpreadsheet={(spreadsheet) => {
                        console.log('Selected spreadsheet from exchange:', spreadsheet);
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
                                onNewSpreadsheet={() => {
                                    bitcoinService.createSpreadsheet('New Spreadsheet').then(sheet => {
                                        setCurrentSpreadsheet(sheet);
                                    });
                                }}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
