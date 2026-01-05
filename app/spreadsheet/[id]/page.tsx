'use client';

import React from 'react';
import BitcoinSpreadsheetPage from '../../../views/BitcoinSpreadsheetPage';
import { useParams } from 'next/navigation';

export default function Page() {
    const params = useParams();
    const id = params?.id as string;
    return <BitcoinSpreadsheetPage />;
}
