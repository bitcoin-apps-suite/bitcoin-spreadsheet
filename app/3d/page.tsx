'use client';

import dynamic from 'next/dynamic';

const ThreeDPage = dynamic(() => import('../../views/ThreeDPage'), {
    ssr: false,
    loading: () => <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#1a1a1a',
        color: '#fff'
    }}>Loading 3D View...</div>
});

export default function Page() {
    return <ThreeDPage />;
}
