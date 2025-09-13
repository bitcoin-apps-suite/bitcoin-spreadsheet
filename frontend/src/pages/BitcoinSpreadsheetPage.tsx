import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BitcoinSpreadsheetPage.css';

const BitcoinSpreadsheetPage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: '🔐',
      title: 'Blockchain Security',
      description: 'Every cell is cryptographically secured on the Bitcoin SV blockchain'
    },
    {
      icon: '🪙',
      title: 'Tokenize Documents',
      description: 'Convert spreadsheets into tradeable tokens with fractional ownership'
    },
    {
      icon: '💎',
      title: 'NFT Storage',
      description: 'Save your spreadsheets as permanent, immutable NFTs'
    },
    {
      icon: '🤝',
      title: 'HandCash Integration',
      description: 'Seamless authentication and payments with HandCash wallet'
    },
    {
      icon: '📊',
      title: 'Real-time Collaboration',
      description: 'Share and trade spreadsheet ownership in real-time'
    },
    {
      icon: '⚡',
      title: 'Instant Transactions',
      description: 'Lightning-fast saves with microtransaction pricing'
    }
  ];

  const protocols = [
    { name: 'Ordinals', description: 'Inscribe data on satoshis' },
    { name: 'STAS', description: 'Native BSV tokens' },
    { name: 'Run', description: 'Smart contracts' },
    { name: '1Sat', description: 'One satoshi per token' }
  ];

  return (
    <div className="bitcoin-spreadsheet-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <div className="bitcoin-logo-large">₿</div>
          </div>
          <h1 className="hero-title">
            <span className="bitcoin-text">Bitcoin</span> Spreadsheet
          </h1>
          <p className="hero-subtitle">
            The World's First Blockchain-Powered Spreadsheet Platform
          </p>
          <p className="hero-description">
            Create, tokenize, and trade spreadsheets on the Bitcoin SV blockchain.
            Every cell is an NFT. Every document can have a million shareholders.
          </p>
          <div className="hero-buttons">
            <button 
              className="cta-button primary"
              onClick={() => navigate('/')}
            >
              Launch App
            </button>
            <a 
              href="https://x.com/BitcoinSheets"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
            >
              Follow on X
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Revolutionary Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenization Section */}
      <section className="tokenization-section">
        <div className="container">
          <div className="tokenization-content">
            <div className="tokenization-text">
              <h2 className="section-title">Tokenize Your Spreadsheets</h2>
              <p className="section-description">
                Transform your spreadsheets into tradeable digital assets with up to 
                1 million shares. Enable fractional ownership and create liquid markets 
                for your data.
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
                  <span className="token-label">TOKENIZED</span>
                  <span className="token-badge">🪙</span>
                </div>
                <div className="token-stats">
                  <div className="stat">
                    <span className="stat-value">1M</span>
                    <span className="stat-label">Total Shares</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">100</span>
                    <span className="stat-label">Owners</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">₿0.5</span>
                    <span className="stat-label">Market Cap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-description">
            Pay only for what you use with microtransaction pricing
          </p>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3 className="pricing-title">Storage</h3>
              <div className="pricing-amount">
                <span className="pricing-value">$0.000001</span>
                <span className="pricing-unit">per cell</span>
              </div>
              <p className="pricing-detail">1/1,000,000th of a penny per cell</p>
            </div>
            <div className="pricing-card featured">
              <div className="featured-badge">POPULAR</div>
              <h3 className="pricing-title">Tokenization</h3>
              <div className="pricing-amount">
                <span className="pricing-value">Dynamic</span>
                <span className="pricing-unit">market-based</span>
              </div>
              <p className="pricing-detail">Set your own token price</p>
            </div>
            <div className="pricing-card">
              <h3 className="pricing-title">Trading</h3>
              <div className="pricing-amount">
                <span className="pricing-value">0%</span>
                <span className="pricing-unit">platform fee</span>
              </div>
              <p className="pricing-detail">Peer-to-peer token trading</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Build on Bitcoin?</h2>
          <p className="cta-description">
            Join the revolution. Create your first blockchain spreadsheet today.
          </p>
          <button 
            className="cta-button large"
            onClick={() => navigate('/')}
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="page-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">₿</div>
              <span className="footer-title">Bitcoin Spreadsheet</span>
            </div>
            <div className="footer-links">
              <a href="https://x.com/BitcoinSheets" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://github.com/b0ase/bitcoin-spreadsheet" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <div className="footer-copyright">
              © @b0ase September 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BitcoinSpreadsheetPage;