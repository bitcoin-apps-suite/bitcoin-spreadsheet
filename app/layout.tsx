import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '../styles/spreadsheet-dark.css';
import '../styles/mobile.css';
import { AuthProvider } from '../contexts/AuthContext';
import ClientLayout from './ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Bitcoin Spreadsheets',
    description: 'Cloud-based spreadsheet application powered by Bitcoin',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} App`}>
                <AuthProvider>
                    <ClientLayout>{children}</ClientLayout>
                </AuthProvider>
            </body>
        </html>
    );
}
