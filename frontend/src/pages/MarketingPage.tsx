import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const MarketingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="Why Bitcoin Spreadsheets">
      <div className="marketing-page">
        <style>{`
          .marketing-page {
            color: #ffffff;
            line-height: 1.6;
          }

          .hero-marketing {
            text-align: center;
            padding: 60px 20px;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            margin: -20px -20px 40px -20px;
          }

          .hero-marketing h1 {
            font-size: 3rem;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #f7931a, #ffb74d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-marketing .subtitle {
            font-size: 1.4rem;
            color: #cccccc;
            max-width: 800px;
            margin: 0 auto 40px auto;
          }

          .value-section {
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
          }

          .section-header {
            color: #f7931a;
            font-size: 2.2rem;
            margin-bottom: 30px;
            text-align: center;
          }

          .value-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin: 40px 0;
          }

          .value-card {
            background: #2a2a2a;
            border: 1px solid #404040;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
            transition: all 0.3s ease;
          }

          .value-card:hover {
            border-color: #f7931a;
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(247, 147, 26, 0.2);
          }

          .value-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            display: block;
          }

          .value-card h3 {
            color: #f7931a;
            margin-bottom: 15px;
            font-size: 1.4rem;
          }

          .business-model {
            background: #1a1a1a;
            border-radius: 16px;
            padding: 40px;
            margin: 40px 0;
            border: 1px solid #333333;
          }

          .bsheets-section {
            background: linear-gradient(135deg, #0d47a1 0%, #1976d2 100%);
            color: white;
            border-radius: 16px;
            padding: 40px;
            margin: 40px 0;
            text-align: center;
          }

          .bsheets-logo {
            font-size: 4rem;
            margin-bottom: 20px;
            display: block;
          }

          .marketplace-demo {
            background: #2a2a2a;
            border-radius: 12px;
            padding: 30px;
            margin: 30px 0;
            overflow-x: auto;
          }

          .market-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }

          .market-table th,
          .market-table td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #404040;
          }

          .market-table th {
            background: #1a1a1a;
            color: #f7931a;
            font-weight: 600;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .market-table tr:hover {
            background: rgba(247, 147, 26, 0.1);
          }

          .token-name {
            font-family: 'Monaco', 'Menlo', monospace;
            font-weight: 600;
            color: #4fc3f7;
          }

          .price {
            font-weight: 600;
            color: #ffffff;
          }

          .change-positive {
            color: #4caf50;
            font-weight: 600;
          }

          .change-negative {
            color: #f44336;
            font-weight: 600;
          }

          .dividend-yield {
            color: #ffb74d;
            font-weight: 600;
          }

          .tokenization-flow {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 30px 0;
          }

          .flow-step {
            background: #2a2a2a;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            position: relative;
          }

          .flow-step::after {
            content: '→';
            position: absolute;
            right: -20px;
            top: 50%;
            transform: translateY(-50%);
            color: #f7931a;
            font-size: 1.5rem;
            font-weight: bold;
          }

          .flow-step:last-child::after {
            display: none;
          }

          .step-number {
            background: #f7931a;
            color: #1a1a1a;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 15px auto;
            font-weight: bold;
          }

          .dynamic-example {
            background: #0a0a0a;
            border: 2px solid #f7931a;
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
          }

          .dynamic-example h4 {
            color: #f7931a;
            margin-top: 0;
            text-align: center;
          }

          .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin: 20px 0;
          }

          .metric-item {
            background: #1a1a1a;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            border: 1px solid #333;
          }

          .metric-value {
            display: block;
            font-size: 1.5rem;
            font-weight: bold;
            color: #4fc3f7;
            margin-bottom: 5px;
          }

          .metric-label {
            font-size: 0.9rem;
            color: #cccccc;
          }

          .cta-section {
            text-align: center;
            padding: 50px 20px;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            margin: 40px -20px -20px -20px;
            border-radius: 16px 16px 0 0;
          }

          .cta-button {
            background: linear-gradient(135deg, #f7931a, #ffb74d);
            color: #1a1a1a;
            border: none;
            padding: 15px 40px;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 10px;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(247, 147, 26, 0.3);
          }

          .cta-button.secondary {
            background: transparent;
            border: 2px solid #f7931a;
            color: #f7931a;
          }

          .ecosystem-diagram {
            background: #1a1a1a;
            border-radius: 12px;
            padding: 30px;
            margin: 30px 0;
            text-align: center;
          }

          .ecosystem-components {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 20px 0;
          }

          .component {
            background: #2a2a2a;
            border: 1px solid #404040;
            border-radius: 8px;
            padding: 20px;
          }

          .component h4 {
            color: #f7931a;
            margin-top: 0;
          }

          @media (max-width: 768px) {
            .hero-marketing h1 {
              font-size: 2rem;
            }
            
            .hero-marketing .subtitle {
              font-size: 1.1rem;
            }
            
            .value-grid {
              grid-template-columns: 1fr;
            }
            
            .market-table {
              font-size: 0.8rem;
            }
            
            .tokenization-flow {
              grid-template-columns: 1fr;
            }
            
            .flow-step::after {
              transform: rotate(90deg);
              right: 50%;
              top: 100%;
              margin-right: -10px;
              margin-top: 10px;
            }
          }
        `}</style>

        <div className="hero-marketing">
          <h1>Why Put Spreadsheets On-Chain?</h1>
          <p className="subtitle">
            Bitcoin Spreadsheets revolutionizes data ownership, monetization, and collaboration 
            through blockchain technology. Every cell becomes a potential revenue stream.
          </p>
        </div>

        <div className="value-section">
          <h2 className="section-header">The Value Proposition</h2>
          
          <div className="value-grid">
            <div className="value-card">
              <span className="value-icon">🏦</span>
              <h3>True Data Ownership</h3>
              <p>
                Your spreadsheets live on Bitcoin blockchain forever. No servers to fail, 
                no companies to shut down, no terms of service to change. You own the keys, 
                you own the data.
              </p>
            </div>

            <div className="value-card">
              <span className="value-icon">💰</span>
              <h3>Monetize Everything</h3>
              <p>
                Every cell can generate revenue through subscriptions, one-time purchases, 
                or dividend-bearing tokenization. Turn your expertise into a passive income stream.
              </p>
            </div>

            <div className="value-card">
              <span className="value-icon">🌐</span>
              <h3>Global Marketplace</h3>
              <p>
                Instantly access a global market for data, analysis, and insights. 
                Buy shares in valuable datasets or sell subscriptions to your own work.
              </p>
            </div>

            <div className="value-card">
              <span className="value-icon">🔒</span>
              <h3>Immutable Audit Trail</h3>
              <p>
                Every change is cryptographically signed and permanently recorded. 
                Perfect for compliance, legal documentation, and building trust.
              </p>
            </div>

            <div className="value-card">
              <span className="value-icon">⚡</span>
              <h3>Micropayment Economy</h3>
              <p>
                Pay only for what you use with Bitcoin's micropayment infrastructure. 
                Access premium datasets for fractions of a penny.
              </p>
            </div>

            <div className="value-card">
              <span className="value-icon">🚀</span>
              <h3>Dynamic Valuations</h3>
              <p>
                Popular datasets appreciate in value as demand grows. Early investors 
                in valuable data sources earn returns as usage increases.
              </p>
            </div>
          </div>
        </div>

        <div className="business-model">
          <h2 className="section-header">Business Model & Economics</h2>
          
          <div className="bsheets-section">
            <span className="bsheets-logo">📊</span>
            <h3>$bSheets: The Native Currency</h3>
            <p>
              Bitcoin Spreadsheets operates as an independent business with its own 
              dividend-bearing shares. $bSheets holders receive a portion of all 
              platform revenue from trading fees, subscriptions, and tokenization.
            </p>
          </div>

          <div className="ecosystem-diagram">
            <h3>Platform Ecosystem</h3>
            <div className="ecosystem-components">
              <div className="component">
                <h4>📈 Marketplace</h4>
                <p>Trade spreadsheet shares, datasets, and subscription rights</p>
              </div>
              <div className="component">
                <h4>🏭 Mint</h4>
                <p>Tokenize spreadsheets into millions of tradeable shares</p>
              </div>
              <div className="component">
                <h4>💱 Exchange</h4>
                <p>Buy and sell $bSheets and dataset tokens with Bitcoin</p>
              </div>
              <div className="component">
                <h4>💵 Staking</h4>
                <p>Stake $bSheets to earn platform dividends and voting rights</p>
              </div>
            </div>
          </div>

          <div className="tokenization-flow">
            <div className="flow-step">
              <div className="step-number">1</div>
              <h4>Create</h4>
              <p>Build valuable spreadsheets with real-world data and analysis</p>
            </div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <h4>Tokenize</h4>
              <p>Convert spreadsheet into up to 1M tradeable shares</p>
            </div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <h4>List</h4>
              <p>Offer shares on the marketplace with subscription model</p>
            </div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <h4>Earn</h4>
              <p>Receive dividends as your data generates revenue</p>
            </div>
          </div>
        </div>

        <div className="marketplace-demo">
          <h2 className="section-header">Live Marketplace Example</h2>
          <p style={{ textAlign: 'center', marginBottom: '30px' }}>
            Real-time trading data for tokenized spreadsheets. Each dataset operates 
            as its own micro-business with transparent revenue sharing.
          </p>

          <table className="market-table">
            <thead>
              <tr>
                <th>Dataset Token</th>
                <th>Price (₿)</th>
                <th>24hr Change</th>
                <th>Volume</th>
                <th>Liquidity</th>
                <th>Dividend Yield</th>
                <th>Staking Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="token-name">$bSheets_UKGDP2026_01</td>
                <td className="price">0.00245</td>
                <td className="change-positive">+12.3%</td>
                <td>₿2.14</td>
                <td>₿45.6</td>
                <td className="dividend-yield">8.5% APY</td>
                <td>30 days</td>
              </tr>
              <tr>
                <td className="token-name">$bSheets_CRYPTO_PORT_03</td>
                <td className="price">0.00089</td>
                <td className="change-negative">-3.2%</td>
                <td>₿0.83</td>
                <td>₿12.4</td>
                <td className="dividend-yield">12.1% APY</td>
                <td>7 days</td>
              </tr>
              <tr>
                <td className="token-name">$bSheets_STARTUP_MET_12</td>
                <td className="price">0.00156</td>
                <td className="change-positive">+7.8%</td>
                <td>₿1.42</td>
                <td>₿28.9</td>
                <td className="dividend-yield">6.3% APY</td>
                <td>90 days</td>
              </tr>
              <tr>
                <td className="token-name">$bSheets_FOREX_ANAL_07</td>
                <td className="price">0.00312</td>
                <td className="change-positive">+15.6%</td>
                <td>₿3.67</td>
                <td>₿67.2</td>
                <td className="dividend-yield">11.8% APY</td>
                <td>60 days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dynamic-example">
          <h4>Dynamic Dataset Example: $bSheets_UKGDP2026_01</h4>
          <p>
            This spreadsheet tracks UK GDP forecasts for 2026. As economic data updates 
            and accuracy improves, subscriber count and token value change dynamically.
          </p>
          
          <div className="metrics-grid">
            <div className="metric-item">
              <span className="metric-value">1,247</span>
              <span className="metric-label">Active Subscribers</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">₿0.12</span>
              <span className="metric-label">Daily Revenue</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">94.2%</span>
              <span className="metric-label">Prediction Accuracy</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">156</span>
              <span className="metric-label">Data Sources</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">24/7</span>
              <span className="metric-label">Update Frequency</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">$2.1M</span>
              <span className="metric-label">Market Cap</span>
            </div>
          </div>

          <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#cccccc' }}>
            As this dataset proves valuable for financial planning and investment decisions, 
            demand increases, subscription prices rise, and token holders earn higher dividends. 
            Poor-performing datasets naturally decrease in value, creating market efficiency.
          </p>
        </div>

        <div className="cta-section">
          <h2>Join the Data Ownership Revolution</h2>
          <p style={{ marginBottom: '30px', color: '#cccccc' }}>
            Stop letting corporations profit from your data. Start building, owning, 
            and monetizing spreadsheets on Bitcoin today.
          </p>
          <button 
            className="cta-button"
            onClick={() => navigate('/')}
          >
            Launch Bitcoin Spreadsheets
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => navigate('/educational-proposal')}
          >
            Read Education Proposal
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default MarketingPage;