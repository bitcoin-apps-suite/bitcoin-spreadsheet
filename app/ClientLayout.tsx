'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useAuth } from '../contexts/AuthContext';

const CleanTaskbar = dynamic(() => import('../components/ui/CleanTaskbar'));
const DevSidebar = dynamic(() => import('../components/ui/DevSidebar'));
const DockManager = dynamic(() => import('../components/ui/DockManager'));
const Footer = dynamic(() => import('../components/ui/Footer'));
const ProofOfConceptBanner = dynamic(() => import('../components/ui/ProofOfConceptBanner'));

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, currentUser, logout } = useAuth();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`App ${sidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
            <ProofOfConceptBanner />
            <CleanTaskbar
                tickerCollapsed={true}
                isAuthenticated={isAuthenticated}
                currentUser={currentUser}
                onLogout={logout}
            />
            <div className="app-with-sidebar">
                <DevSidebar onCollapsedChange={setSidebarCollapsed} />
                <main className="main-content">
                    {children}
                </main>
            </div>
            <DockManager />
        </div>
    );
}
