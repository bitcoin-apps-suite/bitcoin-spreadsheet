import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BapsPage.css';
import '../App.css';

const BapsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<string | false>(false);

  useEffect(() => {
    document.title = 'BAP - Bitcoin Attestation Protocol';
    return () => {
      document.title = 'Bitcoin Spreadsheet';
    };
  }, []);

  const protocolFeatures = [
    {
      icon: '🔐',
      title: 'Bitcoin Attestation Protocol',
      description: 'Create cryptographic identity attestations and link data on the Bitcoin blockchain',
      details: 'BAP enables self-sovereign identity and data attestation using Bitcoin-native cryptography'
    },
    {
      icon: '🔑',
      title: 'Identity Key Management',
      description: 'Hierarchical deterministic key derivation from seed phrases',
      details: 'Generate identity keys using BIP32/39/44 standards for secure, recoverable identities'
    },
    {
      icon: '✍️',
      title: 'Cryptographic Signatures',
      description: 'Sign and verify data with ECDSA secp256k1 signatures',
      details: 'Every attestation is cryptographically signed and verifiable on-chain'
    },
    {
      icon: '📝',
      title: 'On-Chain Attestations',
      description: 'Attest to data ownership, authorship, and integrity',
      details: 'Store attestations permanently using OP_RETURN with protocol ID 1BAPSuaPnfGnSBM3GLV9yhxUdYe4vGbdMT'
    },
    {
      icon: '🔗',
      title: 'Data Linking',
      description: 'Link attestations to create chains of related data',
      details: 'Reference previous attestations by transaction ID to create version histories'
    },
    {
      icon: '🌐',
      title: 'Universal Compatibility',
      description: 'Works with any data type and Bitcoin protocol',
      details: 'Compatible with 1Sat Ordinals, STAS tokens, sCrypt contracts, and all BSV protocols'
    }
  ];

  const bsvCapabilities = [
    {
      name: 'TeraNode',
      icon: '⚡',
      description: 'Next-generation BSV node implementation for massive scale',
      features: ['1 million+ TPS capacity', 'Horizontal scaling', 'Microservices architecture', 'Enterprise-ready'],
      details: 'TeraNode enables BSV to process over 1 million transactions per second, making it suitable for global-scale data applications'
    },
    {
      name: '1Sat Ordinals',
      icon: '🎯',
      description: 'Inscription protocol for permanent on-chain data storage',
      features: ['Satoshi-level tracking', 'Immutable data storage', 'Content addressing', 'NFT capabilities'],
      details: 'Each satoshi can carry inscribed data, creating permanent, traceable digital assets'
    },
    {
      name: 'sCrypt Smart Contracts',
      icon: '📝',
      description: 'Native Bitcoin script-based smart contracts',
      features: ['TypeScript/JavaScript syntax', 'Turing-complete within gas limits', 'Direct UTXO manipulation', 'No additional layers'],
      details: 'Write complex smart contracts that compile directly to Bitcoin Script'
    },
    {
      name: 'Micropayments',
      icon: '💰',
      description: 'Sub-cent transactions with instant finality',
      features: ['Fees < $0.0001', 'Instant 0-conf transactions', 'Payment channels', 'Streaming money'],
      details: 'Enable new business models with true micropayments at global scale'
    },
    {
      name: 'IPv6 Integration',
      icon: '🌐',
      description: 'Direct peer-to-peer transactions via IPv6',
      features: ['End-to-end encryption', 'Direct node communication', 'Reduced latency', 'Enhanced privacy'],
      details: 'BSV nodes can communicate directly using IPv6 for improved efficiency'
    },
    {
      name: 'Simplified Payment Verification (SPV)',
      icon: '✅',
      description: 'Lightweight client verification without full blockchain',
      features: ['Merkle proofs', 'Header-only validation', 'Mobile-friendly', 'Instant verification'],
      details: 'Verify transactions without downloading the entire blockchain'
    }
  ];

  const bapImplementation = {
    protocolID: '1BAPSuaPnfGnSBM3GLV9yhxUdYe4vGbdMT',
    version: '0.1.5',
    specification: 'https://github.com/icellan/bap',
    author: 'Siggi - https://github.com/icellan',
    format: {
      identity: {
        fields: ['BAP_ID', 'ID_KEY', 'ADDRESS', 'SIGNATURE'],
        description: 'Create an identity attestation'
      },
      attestation: {
        fields: ['BAP_ID', 'ATTEST', 'HASH', 'TYPE', 'ID', 'SEQUENCE'],
        description: 'Attest to data with optional attributes'
      },
      revocation: {
        fields: ['BAP_ID', 'REVOKE', 'TXID', 'VOUT'],
        description: 'Revoke a previous attestation'
      }
    },
    example: `// BAP Identity Creation
OP_FALSE OP_RETURN
"1BAPSuaPnfGnSBM3GLV9yhxUdYe4vGbdMT"
"ID"
<bitcoin_address>
<signature>

// BAP Data Attestation for Spreadsheet
OP_FALSE OP_RETURN  
"1BAPSuaPnfGnSBM3GLV9yhxUdYe4vGbdMT"
"ATTEST"
<sha256_hash_of_spreadsheet>
"urn:x-spreadsheet:1"
<spreadsheet_id>
<sequence_number>
<signing_address>
<signature>

// Additional attributes (optional)
[attribute_count]
[attribute_1_key]
[attribute_1_value]
...`
  };

  const technicalSpecs = [
    {
      category: 'BAP Protocol Structure',
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
        { name: 'Data Storage', value: '1Sat Ordinals inscriptions' },
        { name: 'Smart Contracts', value: 'sCrypt (native Bitcoin Script)' },
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
        { name: 'Trading', value: 'P2P exchanges + Ordinal marketplaces' }
      ]
    }
  ];

  const codeExamples = [
    {
      title: 'Creating a Blockchain Asset',
      language: 'typescript',
      code: `// Create a new Bitcoin Asset from spreadsheet
const asset = new BAP.Asset({
  name: 'Financial Data Q4 2024',
  type: 'spreadsheet',
  data: spreadsheetData,
  encryption: 'row-level',
  protocol: '1SatOrdinals' // Inscribe as ordinal
});

// Deploy asset to Bitcoin
const inscription = await asset.inscribe();
const assetId = await asset.deploy(bitcoinService);

console.log('Asset deployed:', assetId);
console.log('Trading at:', asset.getMarketplaceUrl());`
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
      title: 'Using BSV Capabilities',
      language: 'typescript',
      code: `// 1Sat Ordinals - Permanent Data Inscription
const ordinalNFT = new OrdinalInscription({
  satoshi: 1,
  inscription: {
    protocol: 'bap',
    spreadsheetHash: sha256(csvData),
    metadata: manifestJSON,
    accessRights: encryptedKeys
  }
});

// sCrypt Smart Contract - Native Bitcoin Script
const smartContract = new sCrypt.Contract({
  name: 'Data Access Controller',
  // Compile TypeScript to Bitcoin Script
  @method()
  public unlock(preimage: SigHashPreimage, amount: bigint) {
    assert(this.checkSig(preimage, amount));
    // Release data keys when payment received
  }
});

// Micropayment Stream
const paymentChannel = new PaymentChannel({
  recipient: dataProvider,
  ratePerCell: 0.000001, // 1 satoshi per cell
  streamingEnabled: true
});

// TeraNode-Ready Batch Processing
const batch = new TeraNodeBatch({
  transactions: spreadsheetUpdates,
  parallelProcessing: true,
  targetTPS: 10000
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

// Reference in BAP manifest
const manifest = {
  ordinalNumber: ordinal.number,
  inscriptionId: ordinal.id,
  contentHash: sha256(inscription.body)
};`
    }
  ];

  const assetClasses = [
    {
      icon: '📊',
      title: 'Spreadsheets (Data Assets)',
      description: 'Familiar UI with on-chain version control',
      features: ['Cell-to-UTXO mapping', 'Selective encryption', 'Pay-per-cell monetization'],
      example: 'DAO voting sheets, DeFi calculators, NFT marketplaces'
    },
    {
      icon: '📄',
      title: 'Documents (Knowledge Assets)',
      description: '.doc, .pdf, .md wrapped in .nft container',
      features: ['Immutable UTXO versioning', 'Per-section access control', 'Automatic royalties'],
      example: 'Research papers sold by chapter, encrypted reports with royalty payouts'
    },
    {
      icon: '🎵',
      title: 'Media (Creative Assets)',
      description: 'Audio, video, and images with on-chain licensing',
      features: ['Smart contract licensing', 'Pay-per-stream micropayments', 'Automatic royalty distribution'],
      example: 'Musicians releasing albums with microtransaction streaming'
    },
    {
      icon: '🪙',
      title: 'Tokens & Shares (Financial Assets)',
      description: 'Equity, fungible tokens, and utility tokens',
      features: ['Automated dividends', 'Governance voting', 'Compliance rules'],
      example: 'Tokenized company shares, DAO governance spreadsheets'
    },
    {
      icon: '📡',
      title: 'IoT & Sensors (Data Stream Assets)',
      description: 'Live sensor feeds inscribed as UTXOs',
      features: ['Real-time data streams', 'Pay-per-datapoint', 'Subscription access'],
      example: 'Weather data streams, energy grid reporting'
    },
    {
      icon: '📜',
      title: 'Contracts (Legal/Business Assets)',
      description: 'Human-readable + machine-executable agreements',
      features: ['Automatic execution', 'Payment triggers', 'Compliance tracking'],
      example: 'Shipping contracts that release payment on delivery confirmation'
    }
  ];

  const useCases = [
    {
      title: 'Financial Data Assets',
      description: 'Turn financial spreadsheets into tradeable assets with built-in access controls',
      example: 'Quarterly earnings data that can be sold row-by-row to different subscribers'
    },
    {
      title: 'Research Data Marketplace',
      description: 'Monetize scientific datasets by selling access to specific columns or rows',
      example: 'Climate data where researchers can purchase access to specific geographic regions or time periods'
    },
    {
      title: 'Supply Chain Records',
      description: 'Immutable supply chain data as blockchain assets with selective disclosure',
      example: 'Shipment records where different parties can access only their relevant columns'
    },
    {
      title: 'IP and Patent Data',
      description: 'Tokenize intellectual property documentation and research data',
      example: 'Patent filing data where ownership shares are distributed to contributors'
    },
    {
      title: 'Accounting Ledgers',
      description: 'Auditable, immutable accounting records with controlled access',
      example: 'Company ledgers where auditors can verify specific entries without seeing all data'
    },
    {
      title: 'Market Data Feeds',
      description: 'Real-time market data as subscription-based blockchain assets',
      example: 'Trading data where subscribers pay per row or time period accessed'
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
                    window.open('https://github.com/icellan/bap', '_blank');
                    setIsMenuOpen(false);
                  }}>
                    <span>📋</span> BAP Documentation
                  </div>
                  <div className="menu-item" onClick={() => {
                    window.open('https://www.bitcoinfiles.org/', '_blank');
                    setIsMenuOpen(false);
                  }}>
                    <span>📁</span> Bitcoin Files Protocol
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
            <span className="bitcoin-text">BAP</span>
          </h1>
          <p className="hero-subtitle" style={{fontSize: '0.95rem', marginBottom: '8px', opacity: 0.9}}>
            Bitcoin Attestation Protocol
          </p>
          <p className="hero-tagline" style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '16px', color: '#FFA500'}}>
            Cryptographic Identity & Data Attestation on Bitcoin
          </p>
          <p className="hero-description">
            Create verifiable identities and attest to data on the Bitcoin blockchain. 
            BAP enables cryptographic proof of authorship, ownership chains, and data integrity.
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
              href="/bap_executive_summary.pdf"
              download="BAP_Executive_Summary.pdf"
              className="cta-button secondary"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              📄 Download BAP Summary
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
                The <strong>Bitcoin Attestation Protocol (BAP)</strong> is a simple protocol to create an identity system and attestation scheme for the Bitcoin blockchain. It enables users to create verifiable identities and attest to the authenticity, ownership, and integrity of any data stored on-chain.
              </p>
              <p>
                BAP provides a universal method for <strong>cryptographic attestation</strong> — signing data with your Bitcoin keys to prove authorship, establish ownership chains, and create audit trails. Using the protocol ID <code>1BAPSuaPnfGnSBM3GLV9yhxUdYe4vGbdMT</code>, all BAP attestations are discoverable and verifiable by any Bitcoin application.
              </p>
              <p>
                In Bitcoin Spreadsheet, we use BAP to <strong>version control</strong> spreadsheets on-chain. Each save creates a new attestation linking to the previous version, establishing an immutable audit trail. Combined with encryption and 1Sat Ordinals, this creates a complete data management system on Bitcoin.
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
              Real-world data assets you can create with BAP
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

      {/* Asset Classes */}
      <section className="asset-classes-section" style={{background: '#1a1a1a', padding: '60px 0'}}>
        <div className="container">
          <div className="content-section">
            <h2 className="section-title">Using BAP with Bitcoin Assets</h2>
            <p className="section-description">
              BAP provides the identity and attestation layer for Bitcoin assets. Combined with ordinals, 
              tokens, and smart contracts, any digital object can become a verifiable, tradeable asset.
            </p>
            
            <div className="asset-classes-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px', marginTop: '20px'}}>
              {assetClasses.map((asset, index) => (
                <div key={index} className="asset-class-card" style={{
                  background: 'rgba(30, 30, 30, 0.5)',
                  border: '1px solid rgba(255, 165, 0, 0.15)',
                  borderRadius: '6px',
                  padding: '16px',
                  transition: 'all 0.2s ease'
                }}>
                  <div className="asset-header" style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <span className="asset-icon" style={{fontSize: '1.3rem', marginRight: '8px'}}>{asset.icon}</span>
                    <h3 className="asset-title" style={{fontSize: '0.95rem', margin: 0, fontWeight: 600}}>{asset.title}</h3>
                  </div>
                  <p className="asset-description" style={{fontSize: '0.8rem', marginBottom: '10px', opacity: 0.9, lineHeight: '1.3'}}>{asset.description}</p>
                  <div className="asset-features" style={{marginBottom: '10px'}}>
                    <ul style={{margin: 0, paddingLeft: '16px', opacity: 0.8, fontSize: '0.75rem', lineHeight: '1.4'}}>
                      {asset.features.map((feature, idx) => (
                        <li key={idx} style={{marginBottom: '2px'}}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="asset-example" style={{
                    borderTop: '1px solid rgba(255, 165, 0, 0.1)',
                    paddingTop: '8px',
                    fontSize: '0.75rem',
                    opacity: 0.7
                  }}>
                    <strong>Example:</strong> {asset.example}
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
          {/* BAP Overview */}
          <div className="content-section">
            <h2 className="section-title">Core Protocol Features</h2>
            <p className="section-description">
              BAP provides essential cryptographic primitives for identity and attestation on Bitcoin.
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

          {/* BSV Capabilities */}
          <div className="content-section">
            <h2 className="section-title">Bitcoin SV Capabilities</h2>
            <p className="section-description">
              BSV provides the scalability and features needed for enterprise-grade data applications.
              With TeraNode and native capabilities, BSV can handle global-scale data operations.
            </p>
            
            <div className="capabilities-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px'}}>
              {bsvCapabilities.map((capability, index) => (
                <div key={index} className="capability-card" style={{
                  background: 'rgba(30, 30, 30, 0.5)',
                  border: '1px solid rgba(255, 165, 0, 0.15)',
                  borderRadius: '6px',
                  padding: '16px',
                  transition: 'all 0.2s ease'
                }}>
                  <div className="capability-header" style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <span className="capability-icon" style={{fontSize: '1.3rem', marginRight: '8px'}}>{capability.icon}</span>
                    <h3 className="capability-name" style={{fontSize: '1rem', margin: 0, fontWeight: 600, color: '#FFA500'}}>{capability.name}</h3>
                  </div>
                  <p className="capability-description" style={{fontSize: '0.85rem', marginBottom: '10px', opacity: 0.9}}>{capability.description}</p>
                  <div className="capability-features" style={{marginBottom: '10px'}}>
                    <ul style={{margin: 0, paddingLeft: '16px', fontSize: '0.8rem', opacity: 0.8}}>
                      {capability.features.map((feature, idx) => (
                        <li key={idx} style={{marginBottom: '2px'}}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="capability-details" style={{
                    borderTop: '1px solid rgba(255, 165, 0, 0.1)',
                    paddingTop: '8px',
                    fontSize: '0.75rem',
                    opacity: 0.7,
                    fontStyle: 'italic'
                  }}>
                    {capability.details}
                  </div>
                </div>
              ))}
            </div>

            <div className="bsv-resources" style={{
              marginTop: '30px',
              padding: '16px',
              background: 'rgba(30, 30, 30, 0.5)',
              borderRadius: '6px',
              border: '1px solid rgba(255, 165, 0, 0.15)'
            }}>
              <h3 style={{fontSize: '1.1rem', marginBottom: '12px', color: '#FFA500'}}>Learn More</h3>
              <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
                <a href="https://bsvblockchain.org" target="_blank" rel="noopener noreferrer" 
                   style={{color: '#FFA500', fontSize: '0.85rem', textDecoration: 'none'}}>
                  BSV Association →
                </a>
                <a href="https://docs.bsvblockchain.org/network-topology/nodes/sv-node/teranode" target="_blank" rel="noopener noreferrer" 
                   style={{color: '#FFA500', fontSize: '0.85rem', textDecoration: 'none'}}>
                  TeraNode Documentation →
                </a>
                <a href="https://scrypt.io" target="_blank" rel="noopener noreferrer" 
                   style={{color: '#FFA500', fontSize: '0.85rem', textDecoration: 'none'}}>
                  sCrypt Smart Contracts →
                </a>
                <a href="https://1satordinals.com" target="_blank" rel="noopener noreferrer" 
                   style={{color: '#FFA500', fontSize: '0.85rem', textDecoration: 'none'}}>
                  1Sat Ordinals →
                </a>
              </div>
            </div>
          </div>

          {/* Real BAP Protocol Implementation */}
          <div className="content-section">
            <h2 className="section-title">BAP Protocol Implementation</h2>
            <p className="section-description">
              The real Bitcoin Attestation Protocol as specified at{' '}
              <a href="https://github.com/icellan/bap" target="_blank" rel="noopener noreferrer" style={{color: '#FFA500'}}>
                github.com/icellan/bap
              </a>
            </p>
            
            <div style={{
              background: 'rgba(30, 30, 30, 0.5)',
              border: '1px solid rgba(255, 165, 0, 0.15)',
              borderRadius: '6px',
              padding: '16px',
              marginBottom: '20px'
            }}>
              <h3 style={{fontSize: '1rem', color: '#FFA500', marginBottom: '12px'}}>Protocol Structure</h3>
              
              <div style={{marginBottom: '16px'}}>
                <h4 style={{fontSize: '0.9rem', marginBottom: '8px', opacity: 0.9}}>Identity Creation (ID)</h4>
                <pre style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: '8px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  overflow: 'auto'
                }}>
{`OP_FALSE OP_RETURN
"1BAPSuaPnfGnSBM3GLV9yhxUdYe4vGbdMT"  // Protocol ID
"ID"                                   // Action: Identity
<bitcoin_address>                      // Identity address
<signature>                            // Signature of address`}
                </pre>
              </div>

              <div style={{marginBottom: '16px'}}>
                <h4 style={{fontSize: '0.9rem', marginBottom: '8px', opacity: 0.9}}>Data Attestation (ATTEST)</h4>
                <pre style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: '8px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  overflow: 'auto'
                }}>
{`OP_FALSE OP_RETURN
"1BAPSuaPnfGnSBM3GLV9yhxUdYe4vGbdMT"  // Protocol ID
"ATTEST"                               // Action: Attestation
<sha256_hash>                          // Hash of data
<urn>                                  // URN type identifier
<id>                                   // Unique ID
<sequence>                             // Version/sequence number
<signing_address>                      // Signer's address
<signature>                            // ECDSA signature
[attributes...]                        // Optional attributes`}
                </pre>
              </div>

              <div style={{marginBottom: '16px'}}>
                <h4 style={{fontSize: '0.9rem', marginBottom: '8px', opacity: 0.9}}>Revocation (REVOKE)</h4>
                <pre style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: '8px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  overflow: 'auto'
                }}>
{`OP_FALSE OP_RETURN
"1BAPSuaPnfGnSBM3GLV9yhxUdYe4vGbdMT"  // Protocol ID
"REVOKE"                               // Action: Revocation
<txid>                                 // Transaction to revoke
<vout>                                 // Output index`}
                </pre>
              </div>
            </div>

            <div style={{
              background: 'rgba(30, 30, 30, 0.5)',
              border: '1px solid rgba(255, 165, 0, 0.15)',
              borderRadius: '6px',
              padding: '16px'
            }}>
              <h3 style={{fontSize: '1rem', color: '#FFA500', marginBottom: '12px'}}>Spreadsheet Implementation</h3>
              <p style={{fontSize: '0.85rem', marginBottom: '12px', opacity: 0.9}}>
                In Bitcoin Spreadsheet, we use BAP to create versioned, attestable spreadsheet data:
              </p>
              <ul style={{fontSize: '0.85rem', opacity: 0.9, marginLeft: '20px'}}>
                <li>Each spreadsheet save creates a BAP attestation</li>
                <li>The attestation includes the spreadsheet hash and version number</li>
                <li>Previous versions are linked via the sequence field</li>
                <li>Signatures prove authorship and prevent tampering</li>
                <li>Combined with 1Sat Ordinals for permanent storage</li>
              </ul>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="content-section">
            <h2 className="section-title">Technical Architecture</h2>
            <p className="section-description">
              Complete technical implementation details for spreadsheet storage
            </p>
            
            {/* Compact Specification Table */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '12px',
              marginBottom: '24px'
            }}>
              {/* File Format Card */}
              <div style={{
                background: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 165, 0, 0.15)',
                borderRadius: '6px',
                padding: '12px'
              }}>
                <h4 style={{fontSize: '0.9rem', color: '#FFA500', marginBottom: '8px', fontWeight: 600}}>
                  📁 File Format & Storage
                </h4>
                <table style={{width: '100%', fontSize: '0.75rem'}}>
                  <tbody>
                    <tr style={{borderBottom: '1px solid rgba(255, 165, 0, 0.05)'}}>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Container</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>.nft (ZIP + ordinal)</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255, 165, 0, 0.05)'}}>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Formats</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>CSV, XML, XLSX</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255, 165, 0, 0.05)'}}>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Encryption</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>AES-256-GCM</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255, 165, 0, 0.05)'}}>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Signing</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>ECDSA secp256k1</td>
                    </tr>
                    <tr>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Storage</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>Ordinals + IPFS</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Blockchain Card */}
              <div style={{
                background: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 165, 0, 0.15)',
                borderRadius: '6px',
                padding: '12px'
              }}>
                <h4 style={{fontSize: '0.9rem', color: '#FFA500', marginBottom: '8px', fontWeight: 600}}>
                  ⛓️ Blockchain Layer
                </h4>
                <table style={{width: '100%', fontSize: '0.75rem'}}>
                  <tbody>
                    <tr style={{borderBottom: '1px solid rgba(255, 165, 0, 0.05)'}}>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Platform</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>Bitcoin SV</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255, 165, 0, 0.05)'}}>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Inscriptions</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>1Sat Ordinals</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255, 165, 0, 0.05)'}}>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Versioning</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>UTXO Chain</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255, 165, 0, 0.05)'}}>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Smart Contracts</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>sCrypt</td>
                    </tr>
                    <tr>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Node</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>TeraNode</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Access Control Card */}
              <div style={{
                background: 'rgba(30, 30, 30, 0.5)',
                border: '1px solid rgba(255, 165, 0, 0.15)',
                borderRadius: '6px',
                padding: '12px'
              }}>
                <h4 style={{fontSize: '0.9rem', color: '#FFA500', marginBottom: '8px', fontWeight: 600}}>
                  🔐 Access & Trading
                </h4>
                <table style={{width: '100%', fontSize: '0.75rem'}}>
                  <tbody>
                    <tr style={{borderBottom: '1px solid rgba(255, 165, 0, 0.05)'}}>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Granularity</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>Cell-level</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255, 165, 0, 0.05)'}}>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Keys</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>Symmetric + Asymmetric</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255, 165, 0, 0.05)'}}>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Permissions</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>JSON Schema</td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255, 165, 0, 0.05)'}}>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Auth</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>HandCash OAuth</td>
                    </tr>
                    <tr>
                      <td style={{padding: '4px 0', opacity: 0.7}}>Trading</td>
                      <td style={{padding: '4px 0', textAlign: 'right', color: '#FFA500', fontSize: '0.7rem'}}>P2P + Marketplaces</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* File Structure Diagram */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 165, 0, 0.15)',
              borderRadius: '6px',
              padding: '12px',
              marginTop: '16px'
            }}>
              <h4 style={{fontSize: '0.9rem', color: '#FFA500', marginBottom: '8px', fontWeight: 600}}>
                .nft Container Structure
              </h4>
              <pre style={{
                margin: 0,
                fontSize: '0.75rem',
                lineHeight: '1.4',
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'Monaco, Menlo, monospace'
              }}>
{`root.nft/
├── manifest.json     # Metadata & version info
├── sheet.csv        # Spreadsheet data
├── schema.json      # Column definitions
├── keys.json        # Encrypted access keys
└── signatures.json  # Digital signatures`}
              </pre>
            </div>
          </div>

          {/* Code Examples */}
          <div className="content-section">
            <h2 className="section-title">Code Examples</h2>
            <p className="section-description">
              Get started with BAP using these code examples
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

          {/* Creating Data Assets Section */}
          <div className="content-section">
            <h2 className="section-title">Creating Your First Data Asset</h2>
            <p className="section-description">
              Transform any spreadsheet into a tradeable blockchain asset in minutes
            </p>
            
            <div className="bapp-steps">
              <div className="bapp-step">
                <div className="step-number">1</div>
                <h3>Create Your Spreadsheet</h3>
                <p>Use familiar spreadsheet tools to organize your data. Every cell can be individually encrypted and monetized.</p>
              </div>
              <div className="bapp-step">
                <div className="step-number">2</div>
                <h3>Set Access Controls</h3>
                <p>Define which rows, columns, or cells are public vs. premium. Set prices for selective data access.</p>
              </div>
              <div className="bapp-step">
                <div className="step-number">3</div>
                <h3>Choose Storage Method</h3>
                <p>Use 1Sat Ordinals for permanent inscription or IPFS for larger datasets. Add sCrypt smart contracts for advanced logic.</p>
              </div>
              <div className="bapp-step">
                <div className="step-number">4</div>
                <h3>Mint as NFT</h3>
                <p>Deploy your data asset on-chain as an NFT. Buyers can purchase access to specific data ranges.</p>
              </div>
            </div>

            <div className="asset-examples">
              <h3>Example Asset Structure</h3>
              <div className="architecture-code">
                <pre>
                  <code>{`// Financial Data Asset
class FinancialDataAsset extends BAP.Asset {
  constructor() {
    super({
      name: 'Q4 2024 Financial Data',
      type: 'spreadsheet',
      inscription: 'ordinal://12345',
      tokenProtocol: 'STAS'
    });
  }

  // Define access tiers
  accessTiers = {
    public: ['A1:A10'],     // Company names
    premium: ['B1:B10'],    // Revenue data
    exclusive: ['C1:D10']   // Profit margins
  };

  // Set pricing per tier
  pricing = {
    premium: 0.001,    // 1000 sats
    exclusive: 0.01    // 10000 sats
  };

  // Encrypt sensitive columns
  async encryptData() {
    await this.encryptRange('B1:D10', {
      algorithm: 'AES-256',
      granularity: 'column'
    });
  }

  // Generate access keys for buyer
  async sellAccess(buyerPubKey, tier) {
    const keys = await this.generateKeys(tier);
    return this.encryptForBuyer(keys, buyerPubKey);
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
          <h2 className="cta-title">The Vision</h2>
          <p className="cta-description" style={{fontSize: '0.95rem', lineHeight: '1.5'}}>
            <strong style={{color: '#FFA500'}}>One Ledger, Many Assets:</strong> Spreadsheets, contracts, media, tokens — all managed with the same rules.<br/>
            <strong style={{color: '#FFA500'}}>One Protocol, Infinite Apps:</strong> Any developer can turn assets into BApps with familiar UIs and Bitcoin-native logic.<br/>
            <strong style={{color: '#FFA500'}}>One Economy, Built on Bitcoin:</strong> Everything becomes tradeable, auditable, and monetizable at micro and macro scale.
          </p>
          <div className="cta-buttons">
            <button 
              className="cta-button large"
              onClick={() => navigate('/')}
            >
              Launch App
            </button>
            <a 
              href="/bap_executive_summary.pdf"
              download="BAP_Executive_Summary.pdf"
              className="cta-button primary large"
              style={{ textDecoration: 'none' }}
            >
              📄 BAP Executive Summary
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
              <span className="footer-title">BAP - Bitcoin Asset Protocol</span>
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
