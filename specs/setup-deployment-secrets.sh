#!/bin/bash

echo "🔧 Setting up Vercel deployment secrets for GitHub Actions"
echo ""

# Get project info from .vercel/project.json
if [ -f ".vercel/project.json" ]; then
    PROJECT_ID=$(cat .vercel/project.json | grep -o '"projectId":"[^"]*"' | sed 's/"projectId":"//;s/"//')
    ORG_ID=$(cat .vercel/project.json | grep -o '"orgId":"[^"]*"' | sed 's/"orgId":"//;s/"//')
    
    echo "📋 Found project configuration:"
    echo "   Project ID: $PROJECT_ID"
    echo "   Org ID: $ORG_ID"
    echo ""
else
    echo "❌ .vercel/project.json not found. Please run 'vercel link' first."
    exit 1
fi

echo "🔑 To complete the setup, you need to:"
echo ""
echo "1. Get your Vercel token:"
echo "   • Go to https://vercel.com/account/tokens"
echo "   • Create a new token"
echo "   • Copy the token"
echo ""
echo "2. Add the following secrets to your GitHub repository:"
echo "   • Go to https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/settings/secrets/actions"
echo "   • Add these secrets:"
echo ""
echo "   VERCEL_TOKEN: [paste your token here]"
echo "   VERCEL_ORG_ID: $ORG_ID"
echo "   VERCEL_PROJECT_ID: $PROJECT_ID"
echo ""
echo "3. Or run these commands (after getting your token):"
echo ""
echo "   gh secret set VERCEL_TOKEN --body \"YOUR_TOKEN_HERE\""
echo "   gh secret set VERCEL_ORG_ID --body \"$ORG_ID\""
echo "   gh secret set VERCEL_PROJECT_ID --body \"$PROJECT_ID\""
echo ""
echo "🚀 Once secrets are added, pushes to main branch will automatically deploy!"