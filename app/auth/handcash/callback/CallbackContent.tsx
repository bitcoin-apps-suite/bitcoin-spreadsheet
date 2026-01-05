'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { HandCashService } from '../../../../services/HandCashService';

export const dynamic = 'force-dynamic';

const CallbackContent: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<string>('Processing authentication...');

    useEffect(() => {
        const handleCallback = async () => {
            try {
                // Log the full callback URL for debugging
                const fullUrl = window.location.href;
                console.log('=== HandCash OAuth Callback ===');
                console.log('Full URL:', fullUrl);

                // Parse params from searchParams (Next.js way) and hash (manually)
                const errorParam = searchParams.get('error');
                const hashParams = new URLSearchParams(window.location.hash.replace('#', ''));
                const hashError = hashParams.get('error');

                if (errorParam || hashError) {
                    const errorDescription = searchParams.get('error_description') || hashParams.get('error_description') || 'Unknown error';
                    setError(`Authentication failed: ${errorParam || hashError} - ${errorDescription}`);
                    setTimeout(() => router.push('/'), 3000);
                    return;
                }

                // HandCash returns authToken directly, not OAuth code
                // Check all possible parameter names and locations
                const authToken = searchParams.get('authToken') ||
                    hashParams.get('authToken') ||
                    searchParams.get('auth_token') ||
                    hashParams.get('auth_token') ||
                    searchParams.get('token') ||
                    hashParams.get('token') ||
                    searchParams.get('access_token') ||
                    hashParams.get('access_token');

                // Also check if the entire hash might be the token
                const hashOnly = window.location.hash.replace('#', '');
                const isJustToken = hashOnly && !hashOnly.includes('=') && !hashOnly.includes('&');
                const finalAuthToken = authToken || (isJustToken ? hashOnly : null);

                console.log('Looking for authToken...');
                console.log('Found in params:', authToken);
                console.log('Hash only:', hashOnly);
                console.log('Final authToken:', finalAuthToken);

                if (finalAuthToken) {
                    setStatus('Processing HandCash authentication...');

                    const handcashService = new HandCashService();

                    // Pass the full URL for the service to handle
                    console.log('Calling handleCallback with full URL');

                    await handcashService.handleCallback(fullUrl);

                    setStatus('Authentication successful! Redirecting...');

                    // Clear the URL parameters for security
                    window.history.replaceState({}, document.title, '/');

                    // Small delay to show success message
                    setTimeout(() => {
                        router.push('/');
                    }, 1000);
                } else {
                    // No auth data found
                    console.error('No authorization code or token found in callback');
                    console.log('Expected parameters: code, access_token, or authToken');

                    // Check if user is already authenticated
                    const handcashService = new HandCashService();
                    if (handcashService.isAuthenticated()) {
                        setStatus('Already authenticated. Redirecting...');
                        setTimeout(() => router.push('/'), 1000);
                    } else {
                        setError('Authentication incomplete - no authorization data received');
                        setTimeout(() => router.push('/'), 3000);
                    }
                }
            } catch (err: any) {
                console.error('Callback error:', err);
                setError(err.message || 'Failed to complete authentication');
                setTimeout(() => router.push('/'), 3000);
            }
        };

        handleCallback();
    }, [router, searchParams]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#000',
            color: '#fff',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            {error ? (
                <>
                    <h2 style={{ color: '#ff4444' }}>Authentication Error</h2>
                    <p>{error}</p>
                    <p style={{ opacity: 0.7 }}>Redirecting to home...</p>
                </>
            ) : (
                <>
                    <h2>HandCash Authentication</h2>
                    <p>{status}</p>
                    <div style={{
                        marginTop: '20px',
                        width: '40px',
                        height: '40px',
                        border: '4px solid #333',
                        borderTop: '4px solid #4CAF50',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }} />
                    <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
                </>
            )}
        </div>
    );
};

export default CallbackContent;
