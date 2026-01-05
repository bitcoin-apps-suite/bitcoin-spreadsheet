'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BitcoinService } from '../services/BitcoinService';
import { HandCashService, HandCashUser } from '../services/HandCashService';

interface AuthContextType {
    bitcoinService: BitcoinService | null;
    handcashService: HandCashService;
    isAuthenticated: boolean;
    currentUser: HandCashUser | null;
    isLoading: boolean;
    login: (user: HandCashUser) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [bitcoinService, setBitcoinService] = useState<BitcoinService | null>(null);
    const [handcashService] = useState<HandCashService>(new HandCashService());
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState<HandCashUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const initializeBitcoinService = async () => {
        const service = new BitcoinService();
        await service.connect();
        setBitcoinService(service);
    };

    const checkAuthentication = () => {
        if (handcashService.isAuthenticated()) {
            const user = handcashService.getCurrentUser();
            setCurrentUser(user);
            setIsAuthenticated(true);
            initializeBitcoinService();
        } else {
            initializeBitcoinService();
        }
        setIsLoading(false);
    };

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

        if (authToken) {
            console.log('Found authToken, handling callback...');
            handcashService.handleCallback(authToken).then(user => {
                login(user);
                window.history.replaceState({}, document.title, window.location.pathname);
            }).catch(err => {
                console.error('Failed to handle callback:', err);
            });
        } else {
            checkAuthentication();
        }
    }, [handcashService]);

    const login = (user: HandCashUser) => {
        setCurrentUser(user);
        setIsAuthenticated(true);
        initializeBitcoinService();
    };

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        document.cookie.split(";").forEach(function (c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        setIsAuthenticated(false);
        setCurrentUser(null);
        setBitcoinService(null);
        window.location.replace('/');
    };

    return (
        <AuthContext.Provider value={{
            bitcoinService,
            handcashService,
            isAuthenticated,
            currentUser,
            isLoading,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
