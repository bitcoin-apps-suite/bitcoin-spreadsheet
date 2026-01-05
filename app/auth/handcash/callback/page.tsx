'use client';

import React, { Suspense } from 'react';
import CallbackContent from './CallbackContent';

export const dynamic = 'force-dynamic';

export default function HandCashCallbackPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CallbackContent />
        </Suspense>
    );
}
