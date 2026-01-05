'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { HandCashUser } from '../../services/HandCashService';

interface AppHeaderProps {
    isAuthenticated: boolean;
    currentUser: HandCashUser | null;
    onLogout: () => void;
    onConnect: () => void;
    connectedServices: string[];
    isMobile: boolean;
}

export default function AppHeader({
    isAuthenticated,
    currentUser,
    onLogout,
    onConnect,
    connectedServices,
    isMobile
}: AppHeaderProps) {
    const router = useRouter();

    return (
        <header className="App-header">
            {/* Mobile header layout */}
            <div className="mobile-header-wrapper" style={{ display: isMobile ? 'flex' : 'none' }}>
                <div className="mobile-header-title">
                    <h1
                        onClick={() => router.push('/')}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src="/bitcoin-spreadsheets-icon.png"
                            alt=""
                            className="bitcoin-icon-beveled"
                        />
                        <span className="bitcoin-orange">Bitcoin</span> Spreadsheets
                    </h1>
                </div>
                <div className="mobile-header-connections">
                    <div className="connection-badge" onClick={onConnect}>
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
                            <button className="mobile-logout-btn" onClick={onLogout}>
                                Exit
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Desktop header layout */}
            <div className="desktop-header-wrapper" style={{ display: !isMobile ? 'flex' : 'none' }}>
                <h1
                    onClick={() => router.push('/')}
                    style={{ cursor: 'pointer' }}
                >
                    <img
                        src="/bitcoin-spreadsheets-icon.png"
                        alt=""
                        className="bitcoin-icon-beveled"
                    />
                    <span className="bitcoin-orange">Bitcoin</span> Spreadsheets
                </h1>
                <p className="app-subtitle">Secure, encrypted spreadsheets on the blockchain</p>
            </div>

            {/* Desktop user info */}
            <div className="user-info desktop-user-info" style={{ display: !isMobile ? 'flex' : 'none' }}>
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
                            onClick={onConnect}
                        >
                            <span className="connections-button-icon">⚙️</span>
                            Manage Connections
                        </button>
                        <button className="logout-btn" onClick={onLogout}>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="connect-button"
                            onClick={onConnect}
                        >
                            <span className="connections-button-icon">🔗</span>
                            Connect
                        </button>
                    </>
                )}
            </div>

            {/* Mobile user info (below title) */}
            <div className="mobile-user-info" style={{ display: isMobile ? 'block' : 'none' }}>
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
                        <div className="mobile-user-actions">
                            <button
                                className="mobile-connections-btn"
                                onClick={onConnect}
                            >
                                Manage Connections
                            </button>
                            <button className="mobile-logout-btn" onClick={onLogout}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="mobile-login-section">
                        <button
                            className="mobile-connect"
                            onClick={onConnect}
                        >
                            Connect
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
