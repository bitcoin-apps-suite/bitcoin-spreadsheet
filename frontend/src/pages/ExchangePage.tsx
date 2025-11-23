import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SpreadsheetTaskbar from '../components/SpreadsheetTaskbar';

const ExchangePage: React.FC = () => {
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
      <PageLayout title="/exchange - Trade Dividend-Bearing Shares">
      <div className="exchange-page">
        <style>{`
          .exchange-page {
            color: #ffffff;
            line-height: 1.6;
            max-width: 1200px;
            margin: 0 auto;
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
            background: #000000;
            padding: 40px 20px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .hero-exchange {
            text-align: center;
            padding: 40px 20px;
            background: #000000;
            margin-bottom: 60px;
            border-bottom: 1px solid #333333;
          }

          .hero-exchange h1 {
            font-size: 2.5rem;
            margin-bottom: 16px;
            color: #2196f3;
            font-weight: 200;
            line-height: 1.2;
          }

          .hero-exchange .subtitle {
            font-size: 1.2rem;
            color: #cccccc;
            max-width: 700px;
            margin: 0 auto;
            font-weight: 300;
          }

          .exchange-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 32px;
            margin: 60px 0;
          }

          .feature-card {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 32px 24px;
            text-align: left;
            transition: all 0.2s ease;
            border-left: 3px solid #2196f3;
          }

          .feature-card:hover {
            border-color: #2196f3;
            box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
          }

          .feature-icon {
            font-size: 1.5rem;
            margin-bottom: 12px;
            display: block;
          }

          .feature-card h3 {
            color: #2196f3;
            margin-bottom: 12px;
            font-size: 1.25rem;
            font-weight: 300;
          }

          .feature-card p {
            color: #cccccc;
            font-size: 1rem;
            line-height: 1.5;
            font-weight: 300;
          }

          .trading-interface {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 40px 32px;
            margin: 60px 0;
            overflow-x: auto;
          }

          .trading-interface h3 {
            color: #2196f3;
            margin-top: 0;
            margin-bottom: 24px;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 200;
          }

          .trading-interface p {
            color: #cccccc;
            text-align: center;
            margin-bottom: 32px;
            font-size: 1rem;
            font-weight: 300;
          }

          .trading-table {
            width: 100%;
            background: #1a1a1a;
            border-radius: 8px;
            overflow: hidden;
            border-collapse: collapse;
            margin: 32px 0 0 0;
            border: 1px solid #444444;
          }

          .trading-table th,
          .trading-table td {
            padding: 16px;
            text-align: left;
            border-bottom: 1px solid #444444;
          }

          .trading-table th {
            background: #2a2a2a;
            color: #2196f3;
            font-weight: 300;
            font-size: 0.875rem;
          }

          .trading-table tr:hover {
            background: #2a2a2a;
          }

          .token-symbol {
            font-family: 'Monaco', 'Menlo', monospace;
            font-weight: 300;
            color: #2196f3;
          }

          .price-change.positive {
            color: #4caf50;
            font-weight: 300;
          }

          .price-change.negative {
            color: #f44336;
            font-weight: 300;
          }

          .dividend-yield {
            color: #ffb74d;
            font-weight: 300;
          }

          .trade-actions {
            display: flex;
            gap: 8px;
          }

          .trade-btn {
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 300;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .trade-btn.buy {
            background: #4caf50;
            color: white;
          }

          .trade-btn.sell {
            background: #f44336;
            color: white;
          }

          .trade-btn.buy:hover {
            background: #388e3c;
          }

          .trade-btn.sell:hover {
            background: #d32f2f;
          }

          .platform-fees {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 48px 32px;
            margin: 60px 0;
          }

          .platform-fees h2 {
            color: #2196f3;
            text-align: center;
            margin-bottom: 24px;
            font-size: 1.875rem;
            font-weight: 200;
            line-height: 1.2;
          }

          .platform-fees > p {
            color: #cccccc;
            text-align: center;
            margin-bottom: 40px;
            font-size: 1rem;
            font-weight: 300;
          }

          .fee-breakdown {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 32px;
            margin: 40px 0 0 0;
          }

          .fee-item {
            background: #1a1a1a;
            border: 1px solid #444444;
            border-radius: 8px;
            padding: 24px;
            text-align: center;
            border-left: 3px solid #2196f3;
          }

          .fee-item h4 {
            color: #2196f3;
            margin-bottom: 8px;
            font-size: 1.125rem;
            font-weight: 300;
          }

          .fee-percentage {
            font-size: 1.75rem;
            font-weight: 300;
            color: #2196f3;
            display: block;
            margin-bottom: 8px;
          }

          .fee-description {
            color: #cccccc;
            font-size: 0.875rem;
            line-height: 1.4;
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
            .exchange-page {
              padding: 20px 16px;
            }

            .hero-exchange h1 {
              font-size: 2rem;
            }
            
            .hero-exchange .subtitle {
              font-size: 1.1rem;
            }
            
            .exchange-features {
              grid-template-columns: 1fr;
              gap: 20px;
              margin: 40px 0;
            }

            .trading-interface {
              padding: 32px 20px;
            }
            
            .trading-table {
              font-size: 0.875rem;
            }
            
            .trade-actions {
              flex-direction: column;
              gap: 8px;
            }

            .platform-fees {
              padding: 32px 20px;
            }

            .fee-breakdown {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .cta-section {
              padding: 32px 20px;
            }
          }
        `}</style>

        <div className="hero-exchange">
          <h1>/exchange - Trade Dividend Shares</h1>
          <p className="subtitle">
            Trade tokenized spreadsheet shares and $bSheets platform tokens. 
            Earn dividends from every transaction across the entire Bitcoin Spreadsheets ecosystem.
          </p>
        </div>

        <div className="exchange-features">
          <div className="feature-card">
            <span className="feature-icon">💹</span>
            <h3>Real-Time Trading</h3>
            <p>Trade spreadsheet tokens and $bSheets with instant settlement on Bitcoin blockchain.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">💰</span>
            <h3>Dividend Payments</h3>
            <p>Earn automatic dividends from platform fees, trading commissions, and spreadsheet revenues.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h3>Advanced Analytics</h3>
            <p>Track portfolio performance, dividend yields, and market trends with professional tools.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🔒</span>
            <h3>Secure Custody</h3>
            <p>All trades executed through smart contracts with no counterparty risk or central authority.</p>
          </div>
        </div>

        <div className="trading-interface">
          <h3>Live Trading Dashboard</h3>
          <p style={{ textAlign: 'center', color: '#cccccc', marginBottom: '30px' }}>
            Real-time prices and trading for all tokenized spreadsheets and $bSheets
          </p>
          
          <table className="trading-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Price (₿)</th>
                <th>24h Change</th>
                <th>Volume</th>
                <th>Dividend Yield</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="token-symbol">$bSheets</td>
                <td>0.00125</td>
                <td className="price-change positive">+8.7%</td>
                <td>₿15.4</td>
                <td className="dividend-yield">15.2% APY</td>
                <td>
                  <div className="trade-actions">
                    <button className="trade-btn buy">Buy</button>
                    <button className="trade-btn sell">Sell</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="token-symbol">$bSheets_UKGDP2026_01</td>
                <td>0.00245</td>
                <td className="price-change positive">+12.3%</td>
                <td>₿2.14</td>
                <td className="dividend-yield">8.5% APY</td>
                <td>
                  <div className="trade-actions">
                    <button className="trade-btn buy">Buy</button>
                    <button className="trade-btn sell">Sell</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="token-symbol">$bSheets_ENERGY_MARKETS_03</td>
                <td>0.00089</td>
                <td className="price-change negative">-3.2%</td>
                <td>₿0.83</td>
                <td className="dividend-yield">12.1% APY</td>
                <td>
                  <div className="trade-actions">
                    <button className="trade-btn buy">Buy</button>
                    <button className="trade-btn sell">Sell</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="token-symbol">$bSheets_FOREX_ANALYSIS_07</td>
                <td>0.00312</td>
                <td className="price-change positive">+15.6%</td>
                <td>₿3.67</td>
                <td className="dividend-yield">11.8% APY</td>
                <td>
                  <div className="trade-actions">
                    <button className="trade-btn buy">Buy</button>
                    <button className="trade-btn sell">Sell</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="platform-fees">
          <h2 style={{ color: '#2196f3', textAlign: 'center', marginBottom: '20px' }}>
            Platform Revenue Distribution
          </h2>
          <p style={{ textAlign: 'center', color: '#cccccc', marginBottom: '30px' }}>
            The app takes a percentage of every transaction and distributes it to $bSheets shareholders as dividends
          </p>
          
          <div className="fee-breakdown">
            <div className="fee-item">
              <span className="fee-percentage">2%</span>
              <h4 style={{ color: '#2196f3', marginBottom: '10px' }}>Trading Fees</h4>
              <p className="fee-description">
                Every trade on /exchange generates fees distributed to $bSheets holders
              </p>
            </div>
            <div className="fee-item">
              <span className="fee-percentage">5%</span>
              <h4 style={{ color: '#2196f3', marginBottom: '10px' }}>Market Sales</h4>
              <p className="fee-description">
                Revenue from /market data sales shared with platform token holders
              </p>
            </div>
            <div className="fee-item">
              <span className="fee-percentage">3%</span>
              <h4 style={{ color: '#2196f3', marginBottom: '10px' }}>Mint Fees</h4>
              <p className="fee-description">
                Tokenization fees from /mint operations distributed as dividends
              </p>
            </div>
            <div className="fee-item">
              <span className="fee-percentage">1%</span>
              <h4 style={{ color: '#2196f3', marginBottom: '10px' }}>Storage Fees</h4>
              <p className="fee-description">
                Blockchain /save costs with surplus going to $bSheets shareholders
              </p>
            </div>
          </div>

          <div style={{ background: '#f0f9ff', border: '2px solid #3b82f6', borderRadius: '8px', padding: '32px', marginTop: '40px' }}>
            <h3 style={{ color: '#1e40af', textAlign: 'center', marginBottom: '24px', fontSize: '1.5rem', fontWeight: '600' }}>
              The Devastating Business Model
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
              <div style={{ textAlign: 'center', padding: '20px', background: '#111111', borderRadius: '8px', border: '1px solid #333333' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#059669', marginBottom: '8px' }}>₿12.8</div>
                <div style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Daily Dividends</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: '#111111', borderRadius: '8px', border: '1px solid #333333' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#059669', marginBottom: '8px' }}>47,892</div>
                <div style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>$bSheets Holders</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: '#111111', borderRadius: '8px', border: '1px solid #333333' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: '700', color: '#059669', marginBottom: '8px' }}>15.2%</div>
                <div style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Annual Yield</div>
              </div>
            </div>
            <p style={{ textAlign: 'center', color: '#374151', marginTop: '24px', fontSize: '0.95rem', lineHeight: '1.5' }}>
              <strong>Every transaction</strong> across /save, /mint, /market, and /exchange generates revenue 
              automatically distributed to $bSheets shareholders. The more the platform grows, 
              the higher the dividends.
            </p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Start Trading & Earning Dividends</h2>
          <p style={{ marginBottom: '30px', color: '#cccccc' }}>
            Join the Bitcoin Spreadsheets exchange ecosystem. Trade tokens, earn dividends, 
            and participate in the future of data ownership.
          </p>
          <button 
            className="cta-button"
            onClick={() => navigate('/')}
          >
            Start Trading
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => navigate('/save')}
          >
            Learn About /save →
          </button>
        </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ExchangePage;