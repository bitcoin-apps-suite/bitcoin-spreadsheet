import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import './TokenPage.css'; // Use TokenPage styles for consistent formatting
import '../styles/app-dark.css';
import '../styles/mobile.css';

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
      <div className="token-page">
        <div className="token-container">
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
        <section className="philosophy-section">
          <h2>Revolutionary Infrastructure</h2>
          <div className="philosophy-content">
            <div className="philosophy-points">
              <div className="point">
                <h3>Decentralized Storage</h3>
                <p>Every spreadsheet stored permanently on Bitcoin blockchain - no servers, no downtime, no corporate control.</p>
              </div>
              <div className="point">
                <h3>Native Tokenization</h3>
                <p>Transform any spreadsheet into tradeable shares with built-in dividend distribution and marketplace integration.</p>
              </div>
              <div className="point">
                <h3>Financial Primitives</h3>
                <p>Built-in micropayment rails, subscription models, and economic incentives for data creators and consumers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="philosophy-section">
          <h2>Core Features</h2>
          <div className="philosophy-content">
            <p>
              Bitcoin Spreadsheets provides revolutionary infrastructure for blockchain-based data management with 
              enterprise-grade security, tokenization capabilities, and economic primitives built for the future of data ownership.
            </p>
            <div className="philosophy-points">
              <div className="point">
                <h3>Blockchain Security</h3>
                <p>Every cell cryptographically secured on the Bitcoin SV blockchain with immutable audit trails and transparent ownership verification.</p>
              </div>
              <div className="point">
                <h3>Tokenization Engine</h3>
                <p>Convert spreadsheets, cells, and datasets into tradeable dividend-bearing shares with built-in fractional ownership and revenue distribution.</p>
              </div>
              <div className="point">
                <h3>NFT Storage</h3>
                <p>Save your spreadsheets as permanent, immutable NFTs with fractional ownership capabilities and marketplace integration.</p>
              </div>
            </div>
            <div className="philosophy-points">
              <div className="point">
                <h3>HandCash Integration</h3>
                <p>Seamless authentication and instant micropayments with HandCash wallet for streamlined user experience.</p>
              </div>
              <div className="point">
                <h3>Real-time Collaboration</h3>
                <p>Share spreadsheet ownership and collaborate with transparent on-chain tracking and distributed permissions management.</p>
              </div>
              <div className="point">
                <h3>Economic Primitives</h3>
                <p>Earn from your data with dynamic pricing models, subscription services, and automated dividend distribution systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenization Section */}
        <section className="token-model-section">
          <h2>Own The Data Economy</h2>
          <div className="model-card">
            <h3>$bSheets Token Model</h3>
            <p>
              Bitcoin Spreadsheets operates as an independent business with its own
              dividend-bearing shares ($bSheets). Every spreadsheet can be tokenized
              into millions of tradeable shares with transparent on-chain ownership.
            </p>
            <ul>
              <li>
                <strong>Token Supply:</strong> 1,000,000,000 total $bSheets tokens with controlled distribution
              </li>
              <li>
                <strong>Revenue Sharing:</strong> Dividend-bearing shares with transparent profit distribution
              </li>
              <li>
                <strong>Marketplace Integration:</strong> Trade spreadsheet ownership fractions seamlessly
              </li>
              <li>
                <strong>On-Chain Governance:</strong> Token holders participate in platform development decisions
              </li>
            </ul>
          </div>

          <div className="model-card">
            <h3>Supported Token Protocols</h3>
            <ul>
              {protocols.map((protocol, index) => (
                <li key={index}>
                  <strong>{protocol.name}:</strong> {protocol.description}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Marketplace Preview */}
        <section className="token-model-section">
          <h2>Spreadsheet Marketplace</h2>
          <div className="model-card">
            <h3>Trade Dataset Shares</h3>
            <p>
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
        <section className="token-model-section">
          <h2>Simple, Transparent Economics</h2>
          <div className="model-card">
            <h3>Micropayment Infrastructure</h3>
            <p>Built on micropayment infrastructure with fair value distribution</p>
            <ul>
              <li>
                <strong>Storage:</strong> $0.000001 per cell - Permanent blockchain storage
              </li>
              <li>
                <strong>Revenue Share:</strong> 80% to creators - Fair dividend distribution
              </li>
              <li>
                <strong>Trading:</strong> 0.1% trading fee - Low-cost marketplace
              </li>
            </ul>
          </div>
        </section>

        {/* Testimonials */}
        <section className="token-model-section">
          <h2>Trusted by Innovators</h2>
          <div className="model-card">
            <h3>User Testimonials</h3>
            <ul>
              <li>
                <strong>Sarah Chen, Financial Analyst:</strong> "Finally, a spreadsheet platform where I actually own my financial models. The tokenization feature is revolutionary."
              </li>
              <li>
                <strong>Alex Rodriguez, Data Scientist:</strong> "Earning passive income from my datasets while maintaining full ownership? This changes everything for data creators."
              </li>
              <li>
                <strong>Maria Johnson, Accounting Firm Owner:</strong> "The immutable audit trail gives our clients complete confidence in our financial reporting."
              </li>
            </ul>
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
      </div>
    </PageLayout>
  );
};

export default BitcoinSpreadsheetsPage;
