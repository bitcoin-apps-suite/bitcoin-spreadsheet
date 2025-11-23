import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SpreadsheetTaskbar from '../components/SpreadsheetTaskbar';

const MintPage: React.FC = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <>
      <SpreadsheetTaskbar
        isAuthenticated={false}
        currentUser={null}
        onLogout={() => {}}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
      />
      <PageLayout title="/mint - Tokenize Your Spreadsheets">
        <div className="mint-page">
        <style>{`
          .mint-page {
            color: #ffffff;
            line-height: 1.6;
            max-width: 1000px;
            margin: 0 auto;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
            background: #000000;
            padding: 40px 20px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .hero-mint {
            text-align: center;
            padding: 40px 20px;
            background: #000000;
            margin-bottom: 60px;
            border-bottom: 1px solid #333333;
          }

          .hero-mint h1 {
            font-size: 2.5rem;
            margin-bottom: 16px;
            color: #2196f3;
            font-weight: 200;
            line-height: 1.2;
          }

          .hero-mint .subtitle {
            font-size: 1.2rem;
            color: #cccccc;
            max-width: 600px;
            margin: 0 auto;
            font-weight: 300;
          }

          .mint-process {
            margin: 60px 0;
          }

          .process-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .process-item {
            display: flex;
            align-items: flex-start;
            padding: 20px 0;
            border-bottom: 1px solid #333333;
          }

          .process-item:last-child {
            border-bottom: none;
          }

          .step-number {
            background: #2196f3;
            color: #ffffff;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            font-weight: 400;
            font-size: 0.875rem;
            flex-shrink: 0;
          }

          .process-content h3 {
            color: #2196f3;
            margin: 0 0 8px 0;
            font-size: 1.125rem;
            font-weight: 400;
          }

          .process-content p {
            color: #cccccc;
            font-size: 1rem;
            line-height: 1.5;
            margin: 0;
            font-weight: 300;
          }

          .token-example {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 40px 32px;
            margin: 60px 0;
            text-align: center;
          }

          .token-example h3 {
            color: #2196f3;
            margin-top: 0;
            margin-bottom: 32px;
            font-size: 1.5rem;
            font-weight: 200;
          }

          .token-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 24px;
            margin: 32px 0 0 0;
          }

          .token-detail {
            background: #1a1a1a;
            padding: 24px 16px;
            border-radius: 8px;
            border: 1px solid #444444;
            text-align: center;
          }

          .token-value {
            display: block;
            font-size: 1.5rem;
            font-weight: 300;
            color: #2196f3;
            margin-bottom: 8px;
          }

          .token-label {
            color: #cccccc;
            font-size: 0.875rem;
            font-weight: 300;
          }

          .tokenization-options {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 48px 32px;
            margin: 60px 0;
          }

          .tokenization-options h2 {
            color: #2196f3;
            text-align: center;
            margin-bottom: 40px;
            font-size: 1.875rem;
            font-weight: 200;
            line-height: 1.2;
          }

          .options-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 32px;
            margin: 40px 0 0 0;
          }

          .option-card {
            background: #1a1a1a;
            border: 1px solid #444444;
            border-radius: 8px;
            padding: 24px;
            border-left: 3px solid #2196f3;
            transition: all 0.2s ease;
          }

          .option-card:hover {
            box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
            border-color: #2196f3;
          }

          .option-icon {
            font-size: 1.5rem;
            margin-bottom: 12px;
            display: block;
          }

          .option-card h4 {
            color: #2196f3;
            margin-bottom: 8px;
            font-size: 1.125rem;
            font-weight: 300;
          }

          .option-card p {
            color: #cccccc;
            font-size: 0.95rem;
            line-height: 1.5;
            font-weight: 300;
          }

          .revenue-model {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 40px 32px;
            margin: 60px 0;
          }

          .revenue-model h2 {
            color: #2196f3;
            text-align: center;
            margin-bottom: 32px;
            font-size: 1.5rem;
            font-weight: 200;
          }

          .revenue-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 24px;
            margin: 32px 0 0 0;
          }

          .revenue-item {
            background: #1a1a1a;
            padding: 24px 16px;
            border-radius: 8px;
            text-align: center;
            border: 1px solid #444444;
          }

          .revenue-percentage {
            font-size: 1.5rem;
            font-weight: 300;
            color: #2196f3;
            display: block;
            margin-bottom: 8px;
          }

          .revenue-label {
            color: #cccccc;
            font-size: 0.875rem;
            font-weight: 300;
          }

          .examples-section {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 48px 32px;
            margin: 60px 0;
          }

          .examples-section h3 {
            color: #2196f3;
            margin-top: 0;
            margin-bottom: 32px;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 200;
          }

          .example-tokens {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
            margin: 32px 0 0 0;
          }

          .example-token {
            background: #1a1a1a;
            border: 1px solid #444444;
            border-radius: 8px;
            padding: 24px;
          }

          .token-name {
            font-family: 'Monaco', 'Menlo', monospace;
            color: #2196f3;
            font-weight: 300;
            font-size: 1rem;
            margin-bottom: 16px;
          }

          .token-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            font-size: 0.875rem;
          }

          .stat-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #444444;
          }

          .stat-label {
            color: #cccccc;
            font-weight: 300;
          }

          .stat-value {
            color: #ffffff;
            font-weight: 300;
          }

          .cta-section {
            text-align: center;
            padding: 48px 32px;
            background: #111111;
            margin: 60px 0 0 0;
            border-radius: 8px;
            border: 1px solid #333333;
          }

          .cta-section h2 {
            color: #2196f3;
            margin-bottom: 16px;
            font-size: 1.5rem;
            font-weight: 200;
          }

          .cta-section p {
            color: #cccccc;
            margin-bottom: 32px;
            font-size: 1rem;
            font-weight: 300;
          }

          .cta-button {
            background: #2196f3;
            color: #ffffff;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: 300;
            cursor: pointer;
            transition: all 0.2s ease;
            margin: 8px;
            text-decoration: none;
            display: inline-block;
          }

          .cta-button:hover {
            background: #1976d2;
            transform: translateY(-1px);
          }

          .cta-button.secondary {
            background: transparent;
            border: 1px solid #2196f3;
            color: #2196f3;
          }

          .cta-button.secondary:hover {
            background: #2196f3;
            color: #ffffff;
          }

          @media (max-width: 768px) {
            .mint-page {
              padding: 20px 16px;
            }

            .hero-mint h1 {
              font-size: 2rem;
            }
            
            .hero-mint .subtitle {
              font-size: 1.1rem;
            }
            
            .mint-process {
              grid-template-columns: 1fr;
              gap: 20px;
              margin: 40px 0;
            }

            .tokenization-options {
              padding: 32px 20px;
            }

            .options-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .revenue-model {
              padding: 32px 20px;
            }

            .revenue-grid {
              grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
              gap: 16px;
            }

            .examples-section {
              padding: 32px 20px;
            }

            .example-tokens {
              grid-template-columns: 1fr;
              gap: 16px;
            }
            
            .token-details {
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }

            .cta-section {
              padding: 32px 20px;
            }
          }
        `}</style>

        <div className="hero-mint">
          <h1>/mint - Tokenize Your Spreadsheets</h1>
          <p className="subtitle">
            Transform saved spreadsheets into tradeable tokens with fractional ownership 
            and automatic dividend distribution.
          </p>
        </div>

        <div className="mint-process">
          <ol className="process-list">
            <li className="process-item">
              <div className="step-number">1</div>
              <div className="process-content">
                <h3>Select Spreadsheet</h3>
                <p>Choose any spreadsheet you've saved on-chain. Must be fully saved and encrypted before tokenization.</p>
              </div>
            </li>
            <li className="process-item">
              <div className="step-number">2</div>
              <div className="process-content">
                <h3>Set Parameters</h3>
                <p>Define total shares (up to 1B), initial price, and revenue sharing model for token holders.</p>
              </div>
            </li>
            <li className="process-item">
              <div className="step-number">3</div>
              <div className="process-content">
                <h3>Deploy Token</h3>
                <p>Smart contract creates tradeable shares tied to your spreadsheet. You maintain control while enabling ownership.</p>
              </div>
            </li>
            <li className="process-item">
              <div className="step-number">4</div>
              <div className="process-content">
                <h3>Earn Revenue</h3>
                <p>Every access fee, subscription, and data usage automatically distributes dividends to token holders.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="token-example">
          <h3>Example: $bSheets_UKGDP2026_01</h3>
          <p style={{ color: '#cccccc', marginBottom: '30px' }}>
            UK GDP Forecasting Model - Tokenized with 1,000,000,000 shares
          </p>
          
          <div className="token-details">
            <div className="token-detail">
              <span className="token-value">1,000,000,000</span>
              <span className="token-label">Total Shares</span>
            </div>
            <div className="token-detail">
              <span className="token-value">₿0.00245</span>
              <span className="token-label">Current Price</span>
            </div>
            <div className="token-detail">
              <span className="token-value">2,847</span>
              <span className="token-label">Share Holders</span>
            </div>
            <div className="token-detail">
              <span className="token-value">8.5%</span>
              <span className="token-label">Annual Yield</span>
            </div>
            <div className="token-detail">
              <span className="token-value">₿2.45</span>
              <span className="token-label">Market Cap</span>
            </div>
            <div className="token-detail">
              <span className="token-value">₿0.12</span>
              <span className="token-label">Daily Revenue</span>
            </div>
          </div>
        </div>

        <div className="tokenization-options">
          <h2 style={{ color: '#e91e63', textAlign: 'center', marginBottom: '20px' }}>
            Tokenization Options
          </h2>
          
          <div className="options-grid">
            <div className="option-card">
              <span className="option-icon">💎</span>
              <h4>Fractional Ownership</h4>
              <p>Split spreadsheet into millions of tradeable shares. Investors buy fractions based on data value.</p>
            </div>

            <div className="option-card">
              <span className="option-icon">📊</span>
              <h4>Revenue Sharing</h4>
              <p>Automatic distribution of access fees and subscriptions to token holders based on ownership percentage.</p>
            </div>

            <div className="option-card">
              <span className="option-icon">🔄</span>
              <h4>Dynamic Pricing</h4>
              <p>Token value fluctuates based on spreadsheet popularity, accuracy, and subscriber growth.</p>
            </div>

            <div className="option-card">
              <span className="option-icon">🏦</span>
              <h4>Governance Rights</h4>
              <p>Token holders vote on pricing changes, feature updates, and access policies for the spreadsheet.</p>
            </div>

            <div className="option-card">
              <span className="option-icon">⚡</span>
              <h4>Instant Liquidity</h4>
              <p>Trade tokens on /exchange immediately. No lock-up periods or complex withdrawal processes.</p>
            </div>

            <div className="option-card">
              <span className="option-icon">🎯</span>
              <h4>Performance Incentives</h4>
              <p>Higher accuracy and usage rates increase token value and dividend payouts to holders.</p>
            </div>
          </div>
        </div>

        <div className="revenue-model">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Revenue Distribution Model</h2>
          <p style={{ textAlign: 'center', marginBottom: '30px' }}>
            Every transaction generates revenue shared between creators and token holders
          </p>
          
          <div className="revenue-grid">
            <div className="revenue-item">
              <span className="revenue-percentage">70%</span>
              <span>Token Holders</span>
            </div>
            <div className="revenue-item">
              <span className="revenue-percentage">20%</span>
              <span>Original Creator</span>
            </div>
            <div className="revenue-item">
              <span className="revenue-percentage">8%</span>
              <span>$bSheets Platform</span>
            </div>
            <div className="revenue-item">
              <span className="revenue-percentage">2%</span>
              <span>Network Fees</span>
            </div>
          </div>
        </div>

        <div className="examples-section">
          <h3 style={{ color: '#e91e63', textAlign: 'center', marginBottom: '20px' }}>
            Live Tokenized Spreadsheets
          </h3>
          
          <div className="example-tokens">
            <div className="example-token">
              <div className="token-name">$bSheets_UKGDP2026_01</div>
              <div className="token-stats">
                <div className="stat-item">
                  <span className="stat-label">Price:</span>
                  <span className="stat-value">₿0.00245</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">24h Change:</span>
                  <span className="stat-value" style={{ color: '#4caf50' }}>+12.3%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Holders:</span>
                  <span className="stat-value">2,847</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Yield:</span>
                  <span className="stat-value">8.5% APY</span>
                </div>
              </div>
            </div>

            <div className="example-token">
              <div className="token-name">$bSheets_ENERGY_MARKETS_03</div>
              <div className="token-stats">
                <div className="stat-item">
                  <span className="stat-label">Price:</span>
                  <span className="stat-value">₿0.00089</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">24h Change:</span>
                  <span className="stat-value" style={{ color: '#f44336' }}>-3.2%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Holders:</span>
                  <span className="stat-value">1,456</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Yield:</span>
                  <span className="stat-value">12.1% APY</span>
                </div>
              </div>
            </div>

            <div className="example-token">
              <div className="token-name">$bSheets_FOREX_ANALYSIS_07</div>
              <div className="token-stats">
                <div className="stat-item">
                  <span className="stat-label">Price:</span>
                  <span className="stat-value">₿0.00312</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">24h Change:</span>
                  <span className="stat-value" style={{ color: '#4caf50' }}>+15.6%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Holders:</span>
                  <span className="stat-value">3,912</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Yield:</span>
                  <span className="stat-value">11.8% APY</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Tokenize Your Spreadsheet?</h2>
          <p style={{ marginBottom: '30px', color: '#cccccc' }}>
            Transform your data into a revenue-generating asset. Start earning from your expertise today.
          </p>
          <button 
            className="cta-button"
            onClick={() => navigate('/')}
          >
            Create & Mint Now
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => navigate('/market')}
          >
            Explore /market →
          </button>
        </div>
        </div>
      </PageLayout>
    </>
  );
};

export default MintPage;