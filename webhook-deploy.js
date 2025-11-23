#!/usr/bin/env node

/**
 * Simple webhook to trigger Vercel deployment
 * This can be hosted on a simple server or used locally
 */

const https = require('https');

const VERCEL_WEBHOOK_URL = process.env.VERCEL_DEPLOY_HOOK_URL;

function triggerDeploy() {
    if (!VERCEL_WEBHOOK_URL) {
        console.error('❌ VERCEL_DEPLOY_HOOK_URL environment variable not set');
        console.log('💡 Get your deploy hook URL from:');
        console.log('   https://vercel.com/ai-tribes/bitcoin-spreadsheet/settings/git');
        process.exit(1);
    }

    const url = new URL(VERCEL_WEBHOOK_URL);
    
    const postData = JSON.stringify({
        ref: 'main',
        commit: process.env.GITHUB_SHA || 'manual-trigger'
    });

    const options = {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    console.log('🚀 Triggering Vercel deployment...');

    const req = https.request(options, (res) => {
        console.log(`📊 Response status: ${res.statusCode}`);
        
        let responseBody = '';
        res.on('data', (chunk) => {
            responseBody += chunk;
        });

        res.on('end', () => {
            if (res.statusCode === 200) {
                console.log('✅ Deployment triggered successfully!');
                if (responseBody) {
                    const response = JSON.parse(responseBody);
                    console.log(`🔗 Deployment URL: ${response.deploymentUrl}`);
                }
            } else {
                console.log('❌ Failed to trigger deployment');
                console.log('Response:', responseBody);
            }
        });
    });

    req.on('error', (e) => {
        console.error('❌ Error triggering deployment:', e.message);
    });

    req.write(postData);
    req.end();
}

// Run if called directly
if (require.main === module) {
    triggerDeploy();
}

module.exports = { triggerDeploy };