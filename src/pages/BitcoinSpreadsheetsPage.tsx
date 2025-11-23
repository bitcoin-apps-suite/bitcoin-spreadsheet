import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import './BitcoinSpreadsheetPage.css';

const BitcoinSpreadsheetsPage: React.FC = () => {
  const navigate = useNavigate();


  const protocols = [
    { name: 'Ordinals', description: 'Inscribe data on satoshis' },
    { name: 'STAS', description: 'Native BSV tokens' },
    { name: 'Run', description: 'Smart contracts' },
    { name: '1Sat', description: 'One satoshi per token' },
    { name: '$bSheets', description: 'Dividend-bearing shares' }
  ];

  return (
    <PageLayout title="Bitcoin Spreadsheets">
      <div className="bitcoin-spreadsheet-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="logo-container">
              <div className="bitcoin-logo-large">₿</div>
            </div>
            <h1 className="hero-title">
              Spreadsheets
            </h1>
            <p className="hero-description">
              Save spreadsheets on the Bitcoin blockchain as NFTs. Track millions of shareholders in real-time.
            </p>
            <div className="hero-buttons">
              <button
                className="cta-button primary"
                onClick={() => navigate('/')}
              >
                Launch App
              </button>
              <button
                className="cta-button secondary"
                onClick={() => navigate('/marketing')}
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Revolutionary Infrastructure */}
        <section className="infrastructure-section">
          <div className="container">
            <h2 className="section-title">Revolutionary Infrastructure</h2>
            <div className="infrastructure-grid">
              <div className="infrastructure-item">
                <h3>Decentralized Storage</h3>
                <p>Every spreadsheet stored permanently on Bitcoin blockchain - no servers, no downtime, no corporate control.</p>
              </div>
              <div className="infrastructure-item">
                <h3>Native Tokenization</h3>
                <p>Transform any spreadsheet into tradeable shares with built-in dividend distribution and marketplace integration.</p>
              </div>
              <div className="infrastructure-item">
                <h3>Financial Primitives</h3>
                <p>Built-in micropayment rails, subscription models, and economic incentives for data creators and consumers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Core Features</h2>

            <div className="feature-content">
              <div className="feature-block">
                <h3>Blockchain Security</h3>
                <p>Every cell cryptographically secured on the Bitcoin SV blockchain with immutable audit trails and transparent ownership verification.</p>
              </div>

              <div className="feature-block">
                <h3>Tokenization Engine</h3>
                <p>Convert spreadsheets, cells, and datasets into tradeable dividend-bearing shares with built-in fractional ownership and revenue distribution.</p>
              </div>

              <div className="feature-block">
                <h3>NFT Storage</h3>
                <p>Save your spreadsheets as permanent, immutable NFTs with fractional ownership capabilities and marketplace integration.</p>
              </div>

              <div className="feature-block">
                <h3>HandCash Integration</h3>
                <p>Seamless authentication and instant micropayments with HandCash wallet for streamlined user experience.</p>
              </div>

              <div className="feature-block">
                <h3>Real-time Collaboration</h3>
                <p>Share spreadsheet ownership and collaborate with transparent on-chain tracking and distributed permissions management.</p>
              </div>

              <div className="feature-block">
                <h3>Economic Primitives</h3>
                <p>Earn from your data with dynamic pricing models, subscription services, and automated dividend distribution systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenization Section */}
        <section className="tokenization-section">
          <div className="container">
            <div className="tokenization-content">
              <div className="tokenization-text">
                <h2 className="section-title">Own The Data Economy</h2>
                <p className="section-description">
                  Bitcoin Spreadsheets operates as an independent business with its own
                  dividend-bearing shares ($bSheets). Every spreadsheet can be tokenized
                  into millions of tradeable shares with transparent on-chain ownership.
                </p>
                <div className="protocols-list">
                  <h4>Supported Token Protocols:</h4>
                  {protocols.map((protocol, index) => (
                    <div key={index} className="protocol-item">
                      <span className="protocol-name">{protocol.name}</span>
                      <span className="protocol-desc">{protocol.description}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="tokenization-visual">
                <div className="token-card">
                  <div className="token-header">
                    <span className="token-label">$bSheets</span>
                    <span className="token-badge">📊</span>
                  </div>
                  <div className="token-stats">
                    <div className="stat">
                      <span className="stat-value">1M</span>
                      <span className="stat-label">Total Shares</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">2,500</span>
                      <span className="stat-label">Holders</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">₿5.2</span>
                      <span className="stat-label">Market Cap</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketplace Preview */}
        <section className="marketplace-section">
          <div className="container">
            <h2 className="section-title">Spreadsheet Marketplace</h2>
            <p className="section-description">
              Buy, sell, and trade shares in valuable datasets. Each spreadsheet operates
              as its own micro-business with transparent revenue sharing.
            </p>
            <div className="marketplace-preview">
              <div className="market-table">
                <div className="table-header">
                  <span>Dataset</span>
                  <span>Price</span>
                  <span>24h Change</span>
                  <span>Volume</span>
                  <span>Dividend Yield</span>
                </div>
                <div className="table-row featured">
                  <span className="dataset-name">$bSheets_UKGDP2026_01</span>
                  <span className="price">₿0.00245</span>
                  <span className="change positive">+12.3%</span>
                  <span className="volume">₿2.1</span>
                  <span className="dividend">8.5% APY</span>
                </div>
                <div className="table-row">
                  <span className="dataset-name">$bSheets_ENERGY_MARKETS_03</span>
                  <span className="price">₿0.00089</span>
                  <span className="change negative">-3.2%</span>
                  <span className="volume">₿0.8</span>
                  <span className="dividend">12.1% APY</span>
                </div>
                <div className="table-row">
                  <span className="dataset-name">$bSheets_STARTUP_METRICS_12</span>
                  <span className="price">₿0.00156</span>
                  <span className="change positive">+7.8%</span>
                  <span className="volume">₿1.4</span>
                  <span className="dividend">6.3% APY</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section">
          <div className="container">
            <h2 className="section-title">Simple, Transparent Economics</h2>
            <p className="section-description">
              Built on micropayment infrastructure with fair value distribution
            </p>
            <div className="pricing-cards">
              <div className="pricing-card">
                <h3 className="pricing-title">Storage</h3>
                <div className="pricing-amount">
                  <span className="pricing-value">$0.000001</span>
                  <span className="pricing-unit">per cell</span>
                </div>
                <p className="pricing-detail">Permanent blockchain storage</p>
              </div>
              <div className="pricing-card featured">
                <div className="featured-badge">EARN</div>
                <h3 className="pricing-title">Revenue Share</h3>
                <div className="pricing-amount">
                  <span className="pricing-value">80%</span>
                  <span className="pricing-unit">to creators</span>
                </div>
                <p className="pricing-detail">Fair dividend distribution</p>
              </div>
              <div className="pricing-card">
                <h3 className="pricing-title">Trading</h3>
                <div className="pricing-amount">
                  <span className="pricing-value">0.1%</span>
                  <span className="pricing-unit">trading fee</span>
                </div>
                <p className="pricing-detail">Low-cost marketplace</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="container">
            <h2 className="section-title">Trusted by Innovators</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p>"Finally, a spreadsheet platform where I actually own my financial models. The tokenization feature is revolutionary."</p>
                <div className="testimonial-author">
                  <strong>Sarah Chen</strong>
                  <span>Financial Analyst</span>
                </div>
              </div>
              <div className="testimonial-card">
                <p>"Earning passive income from my datasets while maintaining full ownership? This changes everything for data creators."</p>
                <div className="testimonial-author">
                  <strong>Alex Rodriguez</strong>
                  <span>Data Scientist</span>
                </div>
              </div>
              <div className="testimonial-card">
                <p>"The immutable audit trail gives our clients complete confidence in our financial reporting."</p>
                <div className="testimonial-author">
                  <strong>Maria Johnson</strong>
                  <span>Accounting Firm Owner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">Join the Data Ownership Revolution</h2>
            <p className="cta-description">
              Create, own, and monetize your spreadsheets on Bitcoin. Start earning from your data today.
            </p>
            <button
              className="cta-button large"
              onClick={() => navigate('/')}
            >
              Launch Bitcoin Spreadsheets
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="page-footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="footer-logo">₿</div>
                <span className="footer-title">Bitcoin Spreadsheets</span>
              </div>
              <div className="footer-links">
                <a href="https://x.com/BitcoinSheets" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a href="https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <button onClick={() => navigate('/marketing')}>
                  Marketing
                </button>
                <button onClick={() => navigate('/educational-proposal')}>
                  Education
                </button>
              </div>
              <div className="footer-copyright">
                © @b0ase November 2025
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageLayout>
  );
};

export default BitcoinSpreadsheetsPage;
