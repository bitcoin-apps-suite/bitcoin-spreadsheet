import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BapsPage.css';
import '../App.css';

const BapsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<string | false>(false);

  useEffect(() => {
    document.title = 'BAPS - Bitcoin Applications Protocol Schema';
    return () => {
      document.title = 'Bitcoin Spreadsheet';
    };
  }, []);

  const protocolFeatures = [
    {
      icon: '🚀',
      title: 'BApps - Bitcoin Applications',
      description: 'Build full-featured applications on Bitcoin using spreadsheets as the universal interface',
      details: 'Every spreadsheet is a potential BApp with payments, smart contracts, and on-chain logic'
    },
    {
      icon: '🔗',
      title: 'UTXO Version Control',
      description: 'Git-like versioning using Bitcoin\'s UTXO model for immutable change tracking',
      details: 'Every save creates a new transaction, forming an unbreakable chain of versions'
    },
    {
      icon: '🔐',
      title: 'Granular Encryption',
      description: 'Encrypt at file, row, column, or cell level with selective key distribution',
      details: 'Buyers receive only the decryption keys for the data they purchased'
    },
    {
      icon: '🪙',
      title: 'Tokenized Ownership',
      description: 'Issue shares in spreadsheets with automatic dividend distribution',
      details: 'Revenue from data sales is distributed to token holders via smart contracts'
    },
    {
      icon: '⚡',
      title: 'Micro-Transaction Pricing',
      description: 'Pay-per-cell pricing model with instant settlement',
      details: '1/1,000,000th of a penny per cell with Bitcoin SV\'s low fees'
    },
    {
      icon: '🌐',
      title: 'Decentralized Infrastructure',
      description: 'No central servers, no vendor lock-in, pure peer-to-peer data exchange',
      details: 'Built on Bitcoin SV for maximum security and censorship resistance'
    }
  ];

  const tokenProtocols = [
    {
      name: 'STAS (Satoshi Token Asset Standard)',
      icon: '🪙',
      description: 'Native Bitcoin SV token protocol with full script capabilities',
      features: ['Regulatory compliant', 'Atomic swaps', 'Smart contract integration', 'Fractional ownership'],
      useCase: 'Best for regulated securities and complex financial instruments',
      inscriptionSupport: 'Full on-chain metadata via OP_RETURN',
      ordinalCompatible: true
    },
    {
      name: '1Sat Ordinals',
      icon: '🎯',
      description: 'Bitcoin-native ordinal inscription protocol adapted for BSV',
      features: ['Satoshi-level tracking', 'Inscription in witness data', 'Immutable ordering', 'Cross-chain compatible'],
      useCase: 'Perfect for permanent data inscription and provenance tracking',
      inscriptionSupport: 'Native - entire protocol based on inscriptions',
      ordinalCompatible: true
    },
    {
      name: 'Sensible Contract NFTs',
      icon: '📜',
      description: 'UTXO-based NFT protocol with metadata flexibility',
      features: ['UTXO-based', 'Metadata on-chain', 'Low fees', 'Simple implementation'],
      useCase: 'Simple NFT representation of spreadsheet ownership',
      inscriptionSupport: 'Metadata directly in transaction',
      ordinalCompatible: false
    },
    {
      name: 'BSV-20 Protocol',
      icon: '🏷️',
      description: 'Inscription-based fungible token standard similar to BRC-20',
      features: ['JSON inscriptions', 'Fungible tokens', 'Simple deploys', 'Marketplace compatible'],
      useCase: 'Fungible shares in spreadsheet data pools',
      inscriptionSupport: 'JSON inscriptions for all operations',
      ordinalCompatible: true
    },
    {
      name: 'RareCandyNFT',
      icon: '🍬',
      description: 'Simple NFT protocol with focus on collectibles',
      features: ['Simple minting', 'Low complexity', 'Wallet support', 'Marketplace ready'],
      useCase: 'Collectible spreadsheet templates and datasets',
      inscriptionSupport: 'Optional metadata inscriptions',
      ordinalCompatible: false
    }
  ];

  const technicalSpecs = [
    {
      category: 'File Format & Inscriptions',
      items: [
        { name: 'Container', value: '.nft (ZIP-like with ordinal inscription)' },
        { name: 'Manifest', value: 'JSON metadata (inscribed on-chain)' },
        { name: 'Data Format', value: 'CSV, XML, XLSX (with inscription hash)' },
        { name: 'Encryption', value: 'AES-256-GCM' },
        { name: 'Signing', value: 'ECDSA with secp256k1' },
        { name: 'Inscription', value: 'Full data or IPFS hash in ordinal' }
      ]
    },
    {
      category: 'Blockchain & Protocols',
      items: [
        { name: 'Platform', value: 'Bitcoin SV' },
        { name: 'Storage', value: 'Inscriptions + OP_RETURN + IPFS' },
        { name: 'Versioning', value: 'UTXO Chain with ordinal tracking' },
        { name: 'Token Options', value: 'STAS, Run, Ordinals, BSV-20' },
        { name: 'Smart Contracts', value: 'sCrypt + Run Interactive' },
        { name: 'Ordinal Support', value: 'Full 1Sat ordinal tracking' }
      ]
    },
    {
      category: 'Access Control & Trading',
      items: [
        { name: 'Granularity', value: 'File/Row/Column/Cell (via inscriptions)' },
        { name: 'Key Management', value: 'Symmetric + Asymmetric' },
        { name: 'Distribution', value: 'Encrypted Key Wrapping' },
        { name: 'Permissions', value: 'JSON Schema (inscribed)' },
        { name: 'Authentication', value: 'HandCash OAuth' },
        { name: 'Trading', value: 'Ordinal marketplaces + DEX' }
      ]
    }
  ];

  const codeExamples = [
    {
      title: 'Creating a BApp',
      language: 'typescript',
      code: `// Create a new Bitcoin Application
const bapp = new BAPS.Application({
  name: 'My First BApp',
  type: 'defi-calculator',
  interface: spreadsheetData,
  smartContracts: ['swap.js', 'liquidity.js'],
  tokenProtocol: 'STAS' // or 'Ordinals', 'BSV-20', 'Run'
});

// Deploy BApp to Bitcoin
const inscription = await bapp.inscribe();
const appId = await bapp.deploy(bitcoinService);

console.log('BApp deployed:', appId);
console.log('Access at:', bapp.getUrl());`
    },
    {
      title: 'Selling Row Access',
      language: 'typescript',
      code: `// Mark rows for sale
const saleConfig = {
  rows: [1, 2, 3],
  pricePerRow: 0.000001, // 1 satoshi
  buyerPublicKey: buyerKey
};

// Create encrypted access keys
const accessKeys = await nft.createAccessKeys(saleConfig);

// Buyer receives only their decryption keys
const decryptedData = await buyer.decryptRows(accessKeys);`
    },
    {
      title: 'Tokenizing with Multiple Protocols',
      language: 'typescript',
      code: `// Option 1: STAS Protocol (Regulated)
const stasToken = new STASToken({
  spreadsheetTxid,
  totalShares: 1000000,
  compliance: 'SEC-compliant',
  dividendRights: true
});

// Option 2: 1Sat Ordinals (Permanent inscription)
const ordinalNFT = new OrdinalInscription({
  satoshi: 1,
  inscription: {
    protocol: 'baps',
    spreadsheetHash: sha256(csvData),
    metadata: manifestJSON,
    accessRights: encryptedKeys
  }
});

// Option 3: BSV-20 (Fungible shares)
const bsv20Token = new BSV20Inscription({
  op: 'deploy',
  tick: 'SHEET',
  max: '1000000',
  lim: '1000'
});

// Option 4: sCrypt Smart Contract (Interactive)
const smartContract = new sCrypt.Contract({
  name: 'Spreadsheet DAO',
  supply: 1000000,
  // Native Bitcoin script for complex logic
  script: contractCode,
  // Automatic execution on conditions
  triggers: ['cellUpdate', 'thresholdMet']
});`
    },
    {
      title: 'Inscribing Spreadsheet Data',
      language: 'typescript',
      code: `// Inscribe entire spreadsheet as ordinal
const inscription = {
  contentType: 'application/vnd.baps.spreadsheet',
  body: {
    version: '1.0.0',
    data: compressedCSV,
    schema: columnDefinitions,
    encryption: {
      algorithm: 'AES-256-GCM',
      encryptedKeys: {}
    },
    parent: previousVersionOrdinal
  }
};

// Create ordinal with spreadsheet inscription
const ordinal = await inscribeOrdinal({
  satoshi: 1,
  inscription: inscription,
  fee: 500 // sats
});

// Reference in BAPS manifest
const manifest = {
  ordinalNumber: ordinal.number,
  inscriptionId: ordinal.id,
  contentHash: sha256(inscription.body)
};`
    }
  ];

  const useCases = [
    {
      title: 'DeFi Calculator BApp',
      description: 'Build interactive DeFi applications with real-time calculations and on-chain settlements',
      example: 'A yield farming calculator that automatically executes swaps and compounds rewards directly from spreadsheet cells'
    },
    {
      title: 'DAO Voting BApp',
      description: 'Create decentralized voting systems where each cell represents a proposal and formulas calculate outcomes',
      example: 'A DAO where members vote by entering values in cells, with smart contracts executing decisions automatically'
    },
    {
      title: 'Supply Chain Tracker BApp',
      description: 'Track products through supply chains with each row representing a shipment and cells triggering payments',
      example: 'Logistics BApp where scanning a QR code updates a cell, triggering automatic payment releases via smart contracts'
    },
    {
      title: 'Scientific Computing BApp',
      description: 'Distributed computing platform where cells can run complex calculations and share results',
      example: 'Climate modeling BApp where researchers contribute computing power and get paid per calculation via microtransactions'
    },
    {
      title: 'NFT Marketplace BApp',
      description: 'Spreadsheet-based NFT marketplace where each row is a listing with embedded smart contracts',
      example: 'Art marketplace where formulas calculate royalties and cells execute trades when conditions are met'
    },
    {
      title: 'Prediction Market BApp',
      description: 'Create prediction markets where cells represent outcomes and formulas manage betting pools',
      example: 'Sports betting BApp with automatic odds calculation and instant payouts based on cell values'
    }
  ];

  return (
    <div className="baps-page">
      {/* Bitcoin Taskbar */}
      <div className="bitcoin-taskbar">
        <div className="taskbar-left">
          {/* Bitcoin Logo Menu */}
          <div className="bitcoin-menu-container">
            <button 
              className="bitcoin-logo-button"
              onClick={() => setIsMenuOpen('bitcoin')}
              aria-label="Bitcoin Menu"
            >
              <div className="bitcoin-logo">₿</div>
            </button>
            {isMenuOpen === 'bitcoin' && (
              <>
                <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />
                <div className="bitcoin-menu">
                  <div className="menu-header">
                    <div className="bitcoin-logo-small">₿</div>
                    <span>Bitcoin</span>
                  </div>
                  <div className="menu-separator" />
                  <div className="menu-item" onClick={() => {
                    navigate('/');
                    setIsMenuOpen(false);
                  }}>
                    <span>🏠</span> Home
                  </div>
                  <div className="menu-item" onClick={() => {
                    window.open('https://x.com/BitcoinSheets', '_blank');
                    setIsMenuOpen(false);
                  }}>
                    <span>🐦</span> Follow on X
                  </div>
                  <div className="menu-item" onClick={() => {
                    alert('Bitcoin Spreadsheet v1.0\nSecure blockchain-powered spreadsheets\n\nPowered by Bitcoin SV\n\n© @b0ase September 2025');
                    setIsMenuOpen(false);
                  }}>
                    <span>ℹ️</span> About Bitcoin Spreadsheet
                  </div>
                  <div className="menu-separator" />
                  <div className="menu-item" onClick={() => {
                    window.location.reload();
                    setIsMenuOpen(false);
                  }}>
                    <span>🔄</span> Restart
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Developer Menu */}
          <div className="developer-menu-container">
            <button 
              className="developer-menu-button"
              onClick={() => setIsMenuOpen('developer')}
              aria-label="Developer Menu"
            >
              <span>Developer</span>
            </button>
            {isMenuOpen === 'developer' && (
              <>
                <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />
                <div className="developer-menu">
                  <div className="menu-header">
                    <span>Developer Resources</span>
                  </div>
                  <div className="menu-separator" />
                  <div className="menu-item" onClick={() => {
                    const specsSection = document.querySelector('.content-section:nth-child(2)');
                    specsSection?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}>
                    <span>📋</span> BAPS Documentation
                  </div>
                  <div className="menu-separator" />
                  <div className="menu-item" onClick={() => {
                    window.open('https://github.com/b0ase/bitcoin-spreadsheet', '_blank');
                    setIsMenuOpen(false);
                  }}>
                    <span>🔗</span> GitHub Repository
                  </div>
                  <div className="menu-item" onClick={() => {
                    window.open('https://docs.handcash.io', '_blank');
                    setIsMenuOpen(false);
                  }}>
                    <span>💳</span> HandCash API Docs
                  </div>
                  <div className="menu-separator" />
                  <div className="menu-item" onClick={() => {
                    console.log('Debug info:', {
                      page: 'DevelopersPage',
                      location: window.location.href
                    });
                    alert('Debug info logged to console');
                    setIsMenuOpen(false);
                  }}>
                    <span>🐛</span> Debug Console
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="taskbar-right">
          <button 
            className="taskbar-home-button"
            onClick={() => navigate('/')}
            aria-label="Back to App"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 165, 0, 0.3)',
              color: 'rgba(255, 255, 255, 0.9)',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.2s ease'
            }}
          >
            ← Back to App
          </button>
          <a 
            href="https://x.com/BitcoinSheets" 
            target="_blank" 
            rel="noopener noreferrer"
            className="taskbar-twitter-link"
            aria-label="Follow on X"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <div className="bitcoin-logo-large">₿</div>
          </div>
          <h1 className="hero-title">
            <span className="bitcoin-text">BAPS</span>
          </h1>
          <p className="hero-description">
            Bitcoin Applications Protocol Schema - Build powerful BApps (Bitcoin Apps) with native data ownership. 
            Transform spreadsheets into interactive applications with granular access control and on-chain logic.
          </p>
          <div className="hero-buttons">
            <button 
              className="cta-button primary"
              onClick={() => {
                const specsSection = document.querySelector('.content-section:nth-child(2)');
                specsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Specifications
            </button>
            <a 
              href="/baps_executive_summary.pdf"
              download="BAPS_Executive_Summary.pdf"
              className="cta-button secondary"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              📄 Download PDF
            </a>
            <button 
              className="cta-button secondary"
              onClick={() => navigate('/')}
            >
              Try Demo
            </button>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="executive-summary">
        <div className="container">
          <div className="summary-content">
            <h2 className="summary-title">Executive Summary</h2>
            <div className="summary-text">
              <p>
                The <strong>Bitcoin Applications Protocol Schema (BAPS)</strong> represents a revolutionary approach to building decentralized applications on Bitcoin. By transforming spreadsheets into fully-functional <strong>BApps (Bitcoin Apps)</strong>, BAPS enables developers to create interactive, data-driven applications with native Bitcoin integration, granular access control, and on-chain logic.
              </p>
              <p>
                BAPS enables the creation of <strong>BApps</strong> - Bitcoin-native applications that combine spreadsheet functionality with smart contracts, tokens, and inscriptions. Each BApp is a living application that can process payments, execute logic, store data permanently via ordinals, and interact with other BApps through the Bitcoin network.
              </p>
              <p>
                Developers can build everything from DeFi calculators and DAO voting systems to supply chain trackers and scientific computing platforms. With support for multiple token protocols (STAS, Ordinals, BSV-20, Run), BApps can issue tokens, NFTs, and inscriptions while maintaining the familiar spreadsheet interface that billions of users already understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="use-cases-section">
        <div className="container">
          <div className="content-section">
            <h2 className="section-title">Use Cases</h2>
            <p className="section-description">
              Real-world BApps you can build with BAPS
            </p>
            
            <div className="usecases-grid">
              {useCases.map((usecase, index) => (
                <div key={index} className="usecase-card">
                  <h3 className="usecase-title">{usecase.title}</h3>
                  <p className="usecase-description">{usecase.description}</p>
                  <div className="usecase-example">
                    <strong>Example:</strong> {usecase.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          {/* BAPS Overview */}
          <div className="content-section">
            <h2 className="section-title">Building BApps with BAPS</h2>
            <p className="section-description">
              The Bitcoin Applications Protocol Schema (BAPS) empowers developers to build BApps - full-featured Bitcoin applications using spreadsheets as the interface. 
              Every spreadsheet becomes a potential application with built-in payments, smart contracts, and decentralized data storage.
            </p>
            
            <div className="features-grid">
              {protocolFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <p className="feature-details">{feature.details}</p>
                </div>
              ))}
            </div>

            <div className="architecture-diagram">
              <h3>System Architecture</h3>
              <div className="diagram">
                <div className="diagram-layer">
                  <h4>Application Layer</h4>
                  <p>Spreadsheet UI, HandCash Auth, Data Encryption</p>
                </div>
                <div className="diagram-layer">
                  <h4>Protocol Layer</h4>
                  <p>.nft Format, Access Control, Version Management</p>
                </div>
                <div className="diagram-layer">
                  <h4>Blockchain Layer</h4>
                  <p>Bitcoin SV, UTXO Model, Smart Contracts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Token Protocols */}
          <div className="content-section">
            <h2 className="section-title">Bitcoin SV Token Protocols</h2>
            <p className="section-description">
              Choose the right token protocol for your spreadsheet assets. BAPS supports multiple tokenization standards,
              including ordinals and inscriptions for permanent on-chain data storage.
            </p>
            
            <div className="token-protocols-grid">
              {tokenProtocols.map((protocol, index) => (
                <div key={index} className="protocol-card">
                  <div className="protocol-header">
                    <span className="protocol-icon">{protocol.icon}</span>
                    <h3 className="protocol-name">{protocol.name}</h3>
                  </div>
                  <p className="protocol-description">{protocol.description}</p>
                  <div className="protocol-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {protocol.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="protocol-usecase">
                    <strong>Best For:</strong> {protocol.useCase}
                  </div>
                  <div className="protocol-inscription">
                    <strong>Inscription Support:</strong> {protocol.inscriptionSupport}
                  </div>
                  {protocol.ordinalCompatible && (
                    <div className="ordinal-badge">✓ Ordinal Compatible</div>
                  )}
                </div>
              ))}
            </div>

            <div className="protocol-comparison">
              <h3>Protocol Selection Guide</h3>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Use Case</th>
                    <th>Recommended Protocol</th>
                    <th>Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Regulated Securities</td>
                    <td>STAS</td>
                    <td>Full compliance and atomic swap support</td>
                  </tr>
                  <tr>
                    <td>Permanent Data Storage</td>
                    <td>1Sat Ordinals</td>
                    <td>Inscription-native with immutable ordering</td>
                  </tr>
                  <tr>
                    <td>Interactive Spreadsheets</td>
                    <td>sCrypt Smart Contracts</td>
                    <td>Native Bitcoin script with complex logic</td>
                  </tr>
                  <tr>
                    <td>Fungible Shares</td>
                    <td>BSV-20</td>
                    <td>Simple JSON inscriptions for shares</td>
                  </tr>
                  <tr>
                    <td>Simple NFTs</td>
                    <td>Sensible/RareCandy</td>
                    <td>Low complexity with wallet support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="content-section">
            <h2 className="section-title">Technical Specifications</h2>
            <p className="section-description">
              Complete technical details for implementing BAPS
            </p>
            
            <div className="specs-grid">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="spec-category">
                  <h3 className="spec-category-title">{spec.category}</h3>
                  <div className="spec-items">
                    {spec.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="spec-item">
                        <span className="spec-name">{item.name}</span>
                        <span className="spec-value">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="file-format-section">
              <h3>.nft File Structure</h3>
              <div className="file-tree">
                <div className="file-item">root.nft</div>
                <div className="file-item indent">├── manifest.json</div>
                <div className="file-item indent">├── sheet.csv</div>
                <div className="file-item indent">├── schema.json</div>
                <div className="file-item indent">├── keys.json</div>
                <div className="file-item indent">└── signatures.json</div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="content-section">
            <h2 className="section-title">Code Examples</h2>
            <p className="section-description">
              Get started with BAPS using these code examples
            </p>
            
            <div className="code-examples">
              {codeExamples.map((example, index) => (
                <div key={index} className="code-example">
                  <h3 className="code-title">{example.title}</h3>
                  <div className="code-block">
                    <div className="code-header">
                      <span className="code-language">{example.language}</span>
                      <button className="copy-button">Copy</button>
                    </div>
                    <pre className="code-content">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Building BApps Section */}
          <div className="content-section">
            <h2 className="section-title">Building Your First BApp</h2>
            <p className="section-description">
              Transform any spreadsheet into a Bitcoin application in minutes
            </p>
            
            <div className="bapp-steps">
              <div className="bapp-step">
                <div className="step-number">1</div>
                <h3>Design Your Interface</h3>
                <p>Use familiar spreadsheet formulas and layouts. Every cell can be an input, output, or trigger for Bitcoin transactions.</p>
              </div>
              <div className="bapp-step">
                <div className="step-number">2</div>
                <h3>Add Bitcoin Logic</h3>
                <p>Connect cells to smart contracts, token protocols, and payment channels. Use formulas to define business logic.</p>
              </div>
              <div className="bapp-step">
                <div className="step-number">3</div>
                <h3>Choose Token Protocol</h3>
                <p>Select from STAS, Ordinals, BSV-20, or sCrypt smart contracts based on your BApp's requirements for compliance, permanence, or interactivity.</p>
              </div>
              <div className="bapp-step">
                <div className="step-number">4</div>
                <h3>Deploy as BApp</h3>
                <p>Inscribe your BApp on-chain with ordinals for permanent hosting. Users interact directly through the spreadsheet interface.</p>
              </div>
            </div>

            <div className="bapp-examples">
              <h3>Example BApp Architecture</h3>
              <div className="architecture-code">
                <pre>
                  <code>{`// DeFi Yield Calculator BApp
class YieldCalculatorBApp extends BAPS.Application {
  constructor() {
    super({
      name: 'DeFi Yield Calculator',
      inscription: 'ordinal://12345',
      tokens: ['STAS', 'BSV-20']
    });
  }

  // Cell A1: User deposits amount
  async onCellChange(cell, value) {
    if (cell === 'A1') {
      // Calculate yield in B1
      const yield = await this.calculateYield(value);
      this.updateCell('B1', yield);
      
      // Execute swap if threshold met
      if (yield > this.getCell('C1')) {
        await this.executeSwap(value, yield);
      }
    }
  }

  async executeSwap(amount, expectedYield) {
    // Smart contract execution
    const tx = await this.contract.swap({
      amount,
      expectedYield,
      slippage: 0.01
    });
    
    // Update transaction history
    this.appendRow('History', [Date.now(), tx.id, amount, expectedYield]);
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Build Your First BApp?</h2>
          <p className="cta-description">
            Join the Bitcoin Applications revolution. Transform spreadsheets into powerful BApps with BAPS.
          </p>
          <div className="cta-buttons">
            <button 
              className="cta-button large"
              onClick={() => navigate('/')}
            >
              Launch App
            </button>
            <a 
              href="/baps_executive_summary.pdf"
              download="BAPS_Executive_Summary.pdf"
              className="cta-button primary large"
              style={{ textDecoration: 'none' }}
            >
              📄 Executive Summary
            </a>
            <a 
              href="https://github.com/b0ase/bitcoin-spreadsheet"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary large"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="page-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">₿</div>
              <span className="footer-title">BAPS - Bitcoin Applications</span>
            </div>
            <div className="footer-links">
              <a href="https://x.com/BitcoinSheets" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://github.com/b0ase/bitcoin-spreadsheet" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <button onClick={() => navigate('/bitcoin-spreadsheet')}>
                Home
              </button>
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

export default BapsPage;
