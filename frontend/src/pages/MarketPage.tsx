import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SpreadsheetTaskbar from '../components/SpreadsheetTaskbar';

const MarketPage: React.FC = () => {
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
      <PageLayout title="/market - Sell Access to Your Data">
      <div className="market-page">
        <style>{`
          .market-page {
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

          .hero-market {
            text-align: center;
            padding: 40px 20px;
            background: #000000;
            margin-top: 100px;
            margin-bottom: 60px;
            border-bottom: 1px solid #333333;
          }

          .hero-market h1 {
            font-size: 2.5rem;
            margin-bottom: 16px;
            color: #4fc3f7;
            font-weight: 200;
            line-height: 1.2;
          }

          .hero-market .subtitle {
            font-size: 1.2rem;
            color: #cccccc;
            max-width: 700px;
            margin: 0 auto;
            font-weight: 300;
          }

          .market-features {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 48px 32px;
            margin: 60px 0;
          }

          .features-header {
            text-align: center;
            margin-bottom: 40px;
          }

          .features-header h2 {
            color: #4fc3f7;
            font-size: 1.875rem;
            margin-bottom: 16px;
            font-weight: 200;
          }

          .features-header p {
            color: #cccccc;
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
            font-weight: 300;
          }

          .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
            gap: 32px;
            margin-top: 40px;
          }

          .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            padding: 24px 0;
            border-bottom: 1px solid #333333;
          }

          .feature-item:last-child {
            border-bottom: none;
          }

          .feature-number {
            background: #4fc3f7;
            color: #000000;
            width: 32px;
            height: 32px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 0.9rem;
            flex-shrink: 0;
          }

          .feature-content h3 {
            color: #ffffff;
            margin: 0 0 8px 0;
            font-size: 1.125rem;
            font-weight: 500;
          }

          .feature-content p {
            color: #cccccc;
            margin: 0;
            font-size: 0.95rem;
            line-height: 1.5;
            font-weight: 300;
          }

          .pricing-models {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 48px 32px;
            margin: 60px 0;
          }

          .pricing-models h2 {
            color: #4fc3f7;
            text-align: center;
            margin-bottom: 40px;
            font-size: 1.875rem;
            font-weight: 200;
            line-height: 1.2;
          }

          .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 32px;
            margin: 40px 0 0 0;
          }

          .pricing-option {
            background: #1a1a1a;
            border: 1px solid #444444;
            border-radius: 8px;
            padding: 32px 24px;
            text-align: center;
            position: relative;
            transition: all 0.2s ease;
          }

          .pricing-option:hover {
            border-color: #4fc3f7;
            box-shadow: 0 4px 12px rgba(79, 195, 247, 0.2);
          }

          .pricing-badge {
            position: absolute;
            top: -8px;
            right: 16px;
            background: #4fc3f7;
            color: #ffffff;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 300;
          }

          .pricing-title {
            color: #4fc3f7;
            font-size: 1.25rem;
            margin-bottom: 12px;
            font-weight: 300;
          }

          .pricing-amount {
            font-size: 2rem;
            font-weight: 300;
            color: #4fc3f7;
            margin-bottom: 8px;
          }

          .pricing-description {
            color: #cccccc;
            margin-bottom: 20px;
            font-size: 0.95rem;
            font-weight: 300;
          }

          .pricing-features {
            text-align: left;
            margin: 24px 0;
          }

          .pricing-features li {
            color: #cccccc;
            margin: 8px 0;
            padding-left: 20px;
            position: relative;
            font-size: 0.9rem;
            font-weight: 300;
          }

          .pricing-features li::before {
            content: '✓';
            color: #4fc3f7;
            font-weight: bold;
            position: absolute;
            left: 0;
          }

          .marketplace-demo {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 40px 32px;
            margin: 60px 0;
            overflow-x: auto;
          }

          .marketplace-demo h3 {
            color: #4fc3f7;
            margin-top: 0;
            margin-bottom: 32px;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 200;
          }

          .market-listings {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 32px;
            margin: 32px 0 0 0;
          }

          .listing-card {
            background: #1a1a1a;
            border: 1px solid #444444;
            border-radius: 8px;
            padding: 24px;
            transition: all 0.2s ease;
          }

          .listing-card:hover {
            border-color: #4fc3f7;
            box-shadow: 0 4px 12px rgba(79, 195, 247, 0.2);
          }

          .listing-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
          }

          .listing-title {
            font-size: 1.125rem;
            color: #4fc3f7;
            font-weight: 300;
          }

          .listing-price {
            background: #4fc3f7;
            color: #ffffff;
            padding: 4px 12px;
            border-radius: 12px;
            font-weight: 300;
            font-size: 0.875rem;
          }

          .listing-description {
            color: #cccccc;
            margin-bottom: 16px;
            line-height: 1.5;
            font-size: 0.95rem;
            font-weight: 300;
          }

          .listing-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin: 16px 0;
          }

          .stat-box {
            background: #2a2a2a;
            padding: 12px;
            border-radius: 6px;
            text-align: center;
            border: 1px solid #555555;
          }

          .stat-value {
            display: block;
            font-weight: 300;
            color: #ffffff;
            font-size: 1rem;
          }

          .stat-label {
            color: #cccccc;
            font-size: 0.75rem;
            font-weight: 300;
          }

          .listing-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 20px;
          }

          .action-btn {
            padding: 10px 16px;
            border: none;
            border-radius: 6px;
            font-weight: 300;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 0.875rem;
          }

          .action-btn.primary {
            background: #4fc3f7;
            color: #ffffff;
          }

          .action-btn.secondary {
            background: transparent;
            border: 1px solid #4fc3f7;
            color: #4fc3f7;
          }

          .action-btn.primary:hover {
            background: #29b6f6;
          }

          .action-btn.secondary:hover {
            background: #4fc3f7;
            color: #ffffff;
          }

          .revenue-breakdown {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 40px 32px;
            margin: 60px 0;
          }

          .revenue-breakdown h2 {
            color: #4fc3f7;
            text-align: center;
            margin-bottom: 32px;
            font-size: 1.5rem;
            font-weight: 200;
          }

          .revenue-flow {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 24px;
            margin: 32px 0 0 0;
          }

          .revenue-step {
            background: #1a1a1a;
            padding: 24px;
            border-radius: 8px;
            text-align: center;
            border: 1px solid #444444;
          }

          .revenue-step-number {
            background: #4fc3f7;
            color: #ffffff;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px auto;
            font-weight: 300;
            font-size: 0.875rem;
          }

          .revenue-step h4 {
            color: #4fc3f7;
            margin-bottom: 8px;
            font-size: 1rem;
            font-weight: 300;
          }

          .revenue-step p {
            color: #cccccc;
            font-size: 0.875rem;
            line-height: 1.4;
            font-weight: 300;
          }

          .success-stories {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 48px 32px;
            margin: 60px 0;
          }

          .success-stories h3 {
            color: #4fc3f7;
            text-align: center;
            margin-bottom: 32px;
            font-size: 1.5rem;
            font-weight: 200;
          }

          .stories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 32px;
            margin: 32px 0 0 0;
          }

          .story-card {
            background: #1a1a1a;
            border: 1px solid #444444;
            border-radius: 8px;
            padding: 24px;
            border-left: 3px solid #4fc3f7;
          }

          .story-quote {
            font-style: italic;
            color: #cccccc;
            margin-bottom: 16px;
            line-height: 1.5;
            font-size: 0.95rem;
            font-weight: 300;
          }

          .story-author {
            color: #ffffff;
            font-weight: 300;
            font-size: 0.95rem;
          }

          .story-earnings {
            color: #4fc3f7;
            font-weight: 300;
            font-size: 1.125rem;
            margin-top: 8px;
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
            color: #4fc3f7;
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
            background: #4fc3f7;
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
            background: #29b6f6;
            transform: translateY(-1px);
          }

          .cta-button.secondary {
            background: transparent;
            border: 1px solid #4fc3f7;
            color: #4fc3f7;
          }

          .cta-button.secondary:hover {
            background: #4fc3f7;
            color: #ffffff;
          }

          @media (max-width: 768px) {
            .market-page {
              padding: 20px 16px;
            }

            .hero-market h1 {
              font-size: 2rem;
            }
            
            .hero-market .subtitle {
              font-size: 1.1rem;
            }
            
            .market-features {
              padding: 32px 20px;
              margin: 40px 0;
            }
            
            .features-list {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .feature-item {
              padding: 20px 0;
            }

            .pricing-models {
              padding: 32px 20px;
            }

            .pricing-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .marketplace-demo {
              padding: 32px 20px;
            }
            
            .market-listings {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .revenue-breakdown {
              padding: 32px 20px;
            }

            .revenue-flow {
              grid-template-columns: 1fr;
              gap: 16px;
            }

            .success-stories {
              padding: 32px 20px;
            }

            .stories-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .cta-section {
              padding: 32px 20px;
            }
            
            .listing-actions {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="hero-market">
          <h1>Sell Access to Your Data</h1>
          <p className="subtitle">
            Monetize your spreadsheets by selling access to valuable datasets. 
            Set your own prices and earn from every view, download, and subscription.
          </p>
        </div>

        <div className="market-features">
          <div className="features-header">
            <h2>Platform Capabilities</h2>
            <p>Comprehensive tools for monetizing your spreadsheet data with enterprise-grade security and blockchain technology</p>
          </div>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-number">1</div>
              <div className="feature-content">
                <h3>Multiple Revenue Streams</h3>
                <p>Implement flexible pricing models: one-time purchases, subscription-based access, or usage-based micro-transactions for your spreadsheet data.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">2</div>
              <div className="feature-content">
                <h3>Dynamic Pricing Engine</h3>
                <p>Intelligent pricing algorithms adjust rates based on market demand, data freshness, and historical performance to maximize revenue.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">3</div>
              <div className="feature-content">
                <h3>Analytics Dashboard</h3>
                <p>Comprehensive reporting on earnings, subscriber growth, usage patterns, and market performance with real-time insights.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">4</div>
              <div className="feature-content">
                <h3>Access Control System</h3>
                <p>Granular permission management allowing selective data sharing, read-only access, watermarking, and time-limited licenses.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">5</div>
              <div className="feature-content">
                <h3>Global Distribution</h3>
                <p>Reach international markets with Bitcoin-based payments, instant settlement, and minimal transaction fees.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-number">6</div>
              <div className="feature-content">
                <h3>Smart Contract Automation</h3>
                <p>Automated revenue distribution, access provisioning, and dispute resolution through immutable blockchain contracts.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-models">
          <h2 style={{ color: '#4fc3f7', textAlign: 'center', marginBottom: '20px' }}>
            Flexible Pricing Models
          </h2>
          <p style={{ textAlign: 'center', color: '#cccccc', marginBottom: '30px' }}>
            Choose the pricing strategy that maximizes your spreadsheet revenue
          </p>
          
          <div className="pricing-grid">
            <div className="pricing-option">
              <h4 className="pricing-title">One-Time Purchase</h4>
              <div className="pricing-amount">₿0.001+</div>
              <p className="pricing-description">Single payment for permanent access</p>
              <ul className="pricing-features">
                <li>Full spreadsheet download</li>
                <li>No recurring fees</li>
                <li>Perfect for static data</li>
                <li>Higher per-access revenue</li>
              </ul>
            </div>

            <div className="pricing-option">
              <div className="pricing-badge">POPULAR</div>
              <h4 className="pricing-title">Monthly Subscription</h4>
              <div className="pricing-amount">₿0.0001+</div>
              <p className="pricing-description">Recurring access to live data</p>
              <ul className="pricing-features">
                <li>Real-time data updates</li>
                <li>Predictable revenue stream</li>
                <li>Ideal for dynamic datasets</li>
                <li>Higher lifetime value</li>
              </ul>
            </div>

            <div className="pricing-option">
              <h4 className="pricing-title">Usage-Based</h4>
              <div className="pricing-amount">₿0.00001+</div>
              <p className="pricing-description">Pay per cell or calculation</p>
              <ul className="pricing-features">
                <li>Micro-transaction pricing</li>
                <li>Scales with usage</li>
                <li>Great for API access</li>
                <li>Lower barrier to entry</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="marketplace-demo">
          <h3>Live Market Listings</h3>
          <p style={{ textAlign: 'center', color: '#cccccc', marginBottom: '30px' }}>
            Browse actual spreadsheets available for purchase on the Bitcoin Spreadsheets marketplace
          </p>
          
          <div className="market-listings">
            <div className="listing-card">
              <div className="listing-header">
                <span className="listing-title">UK GDP Forecasting 2026</span>
                <span className="listing-price">₿0.025/month</span>
              </div>
              <p className="listing-description">
                Comprehensive economic model predicting UK GDP growth with 94.2% accuracy rate. 
                Updated daily with latest economic indicators and government data.
              </p>
              <div className="listing-stats">
                <div className="stat-box">
                  <span className="stat-value">1,247</span>
                  <span className="stat-label">Subscribers</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">94.2%</span>
                  <span className="stat-label">Accuracy</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">Daily</span>
                  <span className="stat-label">Updates</span>
                </div>
              </div>
              <div className="listing-actions">
                <button className="action-btn primary">Subscribe</button>
                <button className="action-btn secondary">Preview</button>
              </div>
            </div>

            <div className="listing-card">
              <div className="listing-header">
                <span className="listing-title">Energy Market Analysis</span>
                <span className="listing-price">₿0.015/month</span>
              </div>
              <p className="listing-description">
                Real-time energy commodity prices, supply chain analysis, and market predictions. 
                Covers oil, gas, renewable energy trends across global markets.
              </p>
              <div className="listing-stats">
                <div className="stat-box">
                  <span className="stat-value">856</span>
                  <span className="stat-label">Subscribers</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">91.7%</span>
                  <span className="stat-label">Accuracy</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">Hourly</span>
                  <span className="stat-label">Updates</span>
                </div>
              </div>
              <div className="listing-actions">
                <button className="action-btn primary">Subscribe</button>
                <button className="action-btn secondary">Preview</button>
              </div>
            </div>

            <div className="listing-card">
              <div className="listing-header">
                <span className="listing-title">Forex Analysis Dashboard</span>
                <span className="listing-price">₿0.05/one-time</span>
              </div>
              <p className="listing-description">
                Complete foreign exchange analysis toolkit with currency pair predictions, 
                volatility indicators, and algorithmic trading signals.
              </p>
              <div className="listing-stats">
                <div className="stat-box">
                  <span className="stat-value">2,341</span>
                  <span className="stat-label">Purchases</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">88.9%</span>
                  <span className="stat-label">Win Rate</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">Live</span>
                  <span className="stat-label">Signals</span>
                </div>
              </div>
              <div className="listing-actions">
                <button className="action-btn primary">Buy Now</button>
                <button className="action-btn secondary">Preview</button>
              </div>
            </div>

            <div className="listing-card">
              <div className="listing-header">
                <span className="listing-title">Game Revenue Analytics</span>
                <span className="listing-price">₿0.025/month</span>
              </div>
              <p className="listing-description">
                Comprehensive video game monetization tracking with player spending patterns, 
                in-app purchase optimization, and seasonal revenue forecasting models.
              </p>
              <div className="listing-stats">
                <div className="stat-box">
                  <span className="stat-value">1,156</span>
                  <span className="stat-label">Subscribers</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">92.4%</span>
                  <span className="stat-label">Accuracy</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">Weekly</span>
                  <span className="stat-label">Updates</span>
                </div>
              </div>
              <div className="listing-actions">
                <button className="action-btn primary">Subscribe</button>
                <button className="action-btn secondary">Preview</button>
              </div>
            </div>
          </div>
        </div>

        <div className="revenue-breakdown">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Revenue Flow</h2>
          <p style={{ textAlign: 'center', marginBottom: '30px' }}>
            How your earnings flow from buyer to your wallet automatically
          </p>
          
          <div className="revenue-flow">
            <div className="revenue-step">
              <div className="revenue-step-number">1</div>
              <h4>Customer Pays</h4>
              <p>Buyer purchases access using Bitcoin via HandCash or other BSV wallets</p>
            </div>
            <div className="revenue-step">
              <div className="revenue-step-number">2</div>
              <h4>Smart Contract Processes</h4>
              <p>Blockchain automatically splits payment according to preset revenue sharing rules</p>
            </div>
            <div className="revenue-step">
              <div className="revenue-step-number">3</div>
              <h4>Instant Distribution</h4>
              <p>85% to seller, 10% to token holders, 5% to $bSheets platform - all automatic</p>
            </div>
            <div className="revenue-step">
              <div className="revenue-step-number">4</div>
              <h4>Access Granted</h4>
              <p>Customer receives immediate access to purchased data with usage tracking</p>
            </div>
          </div>
        </div>

        <div className="success-stories">
          <h2 style={{ color: '#4fc3f7', textAlign: 'center', marginBottom: '20px' }}>
            Creator Success Stories
          </h2>
          
          <div className="stories-grid">
            <div className="story-card">
              <p className="story-quote">
                "My financial models now generate $2,400 monthly from 200+ subscribers. 
                The automated payments and access control make it completely passive income."
              </p>
              <div className="story-author">Sarah Chen - Financial Analyst</div>
              <div className="story-earnings">Monthly Earnings: $2,400</div>
            </div>

            <div className="story-card">
              <p className="story-quote">
                "I tokenized my energy market research and sold 40% of shares for $8,500. 
                Now I earn dividends while keeping majority control of my work."
              </p>
              <div className="story-author">Dr. Michael Torres - Energy Economist</div>
              <div className="story-earnings">Token Sale: $8,500</div>
            </div>

            <div className="story-card">
              <p className="story-quote">
                "Converting my startup metrics template into a subscription model 
                generates $950 monthly. Best decision I made for my consulting business."
              </p>
              <div className="story-author">Lisa Park - Business Consultant</div>
              <div className="story-earnings">Monthly Earnings: $950</div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Start Monetizing Your Data Today</h2>
          <p style={{ marginBottom: '30px', color: '#cccccc' }}>
            Join thousands of creators earning from their spreadsheet expertise. 
            List your first dataset and start generating revenue immediately.
          </p>
          <button 
            className="cta-button"
            onClick={() => navigate('/')}
          >
            Create & List Now
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => navigate('/exchange')}
          >
            Explore /exchange →
          </button>
        </div>
        </div>
      </PageLayout>
    </>
  );
};

export default MarketPage;