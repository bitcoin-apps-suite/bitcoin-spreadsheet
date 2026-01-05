import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import SpreadsheetTaskbar from '../components/SpreadsheetTaskbar';

const SavePage: React.FC = () => {
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
      <PageLayout title="/save - Native On-Chain Storage">
      <div className="save-page">
        <style>{`
          .save-page {
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

          .hero-save {
            text-align: center;
            padding: 40px 20px;
            background: #000000;
            margin-top: 100px;
            margin-bottom: 60px;
            border-bottom: 1px solid #333333;
          }

          .hero-save h1 {
            font-size: 2.5rem;
            margin-bottom: 16px;
            color: #4fc3f7;
            font-weight: 200;
            line-height: 1.2;
          }

          .hero-save .subtitle {
            font-size: 1.2rem;
            color: #cccccc;
            max-width: 600px;
            margin: 0 auto;
            font-weight: 300;
          }

          .save-process {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 32px;
            margin: 60px 0;
          }

          .process-step {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 32px 24px;
            text-align: left;
            transition: all 0.2s ease;
          }

          .process-step:hover {
            border-color: #4fc3f7;
            box-shadow: 0 4px 12px rgba(79, 195, 247, 0.2);
          }

          .step-number {
            background: #4fc3f7;
            color: #000000;
            width: 32px;
            height: 32px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
            font-weight: 600;
            font-size: 1rem;
          }

          .process-step h3 {
            color: #4fc3f7;
            margin-bottom: 12px;
            font-size: 1.25rem;
            font-weight: 300;
          }

          .process-step p {
            color: #cccccc;
            font-size: 1rem;
            line-height: 1.5;
            font-weight: 300;
          }

          .benefits-section {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 48px 32px;
            margin: 60px 0;
          }

          .benefits-section h2 {
            color: #4fc3f7;
            text-align: center;
            margin-bottom: 40px;
            font-size: 1.875rem;
            font-weight: 200;
            line-height: 1.2;
          }

          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 32px;
            margin: 40px 0 0 0;
          }

          .benefit-item {
            background: #1a1a1a;
            border: 1px solid #444444;
            border-radius: 8px;
            padding: 24px;
            border-left: 3px solid #4fc3f7;
          }

          .benefit-icon {
            font-size: 1.5rem;
            margin-bottom: 12px;
            display: block;
          }

          .benefit-item h4 {
            color: #4fc3f7;
            margin-bottom: 8px;
            font-size: 1.125rem;
            font-weight: 300;
          }

          .benefit-item p {
            color: #cccccc;
            font-size: 0.95rem;
            line-height: 1.5;
            font-weight: 300;
          }

          .comparison-table {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            overflow: hidden;
            margin: 60px 0;
          }

          .comparison-table table {
            width: 100%;
            border-collapse: collapse;
          }

          .comparison-table th,
          .comparison-table td {
            padding: 16px;
            text-align: left;
            border-bottom: 1px solid #333333;
          }

          .comparison-table th {
            background: #1a1a1a;
            color: #4fc3f7;
            font-weight: 300;
            font-size: 0.875rem;
          }

          .comparison-table td:first-child {
            font-weight: 300;
            color: #ffffff;
          }

          .comparison-table .traditional {
            color: #ff6b6b;
          }

          .comparison-table .blockchain {
            color: #4caf50;
          }

          .tech-specs {
            background: #111111;
            border: 1px solid #333333;
            border-radius: 8px;
            padding: 40px 32px;
            margin: 60px 0;
          }

          .tech-specs h3 {
            color: #4fc3f7;
            margin-top: 0;
            margin-bottom: 32px;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 200;
          }

          .spec-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 24px;
            margin: 32px 0 0 0;
          }

          .spec-item {
            background: #1a1a1a;
            padding: 24px 16px;
            border-radius: 8px;
            text-align: center;
            border: 1px solid #444444;
          }

          .spec-value {
            display: block;
            font-size: 1.5rem;
            font-weight: 300;
            color: #4fc3f7;
            margin-bottom: 8px;
          }

          .spec-label {
            color: #cccccc;
            font-size: 0.875rem;
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
            color: #000000;
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
            color: #000000;
          }

          @media (max-width: 768px) {
            .save-page {
              padding: 20px 16px;
            }

            .hero-save h1 {
              font-size: 2rem;
            }
            
            .hero-save .subtitle {
              font-size: 1.1rem;
            }
            
            .save-process {
              grid-template-columns: 1fr;
              gap: 20px;
              margin: 40px 0;
            }

            .benefits-section {
              padding: 32px 20px;
            }

            .benefits-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .tech-specs {
              padding: 32px 20px;
            }

            .spec-grid {
              grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
              gap: 16px;
            }
            
            .comparison-table {
              overflow-x: auto;
            }

            .cta-section {
              padding: 32px 20px;
            }
          }
        `}</style>

        <div className="hero-save">
          <h1>/save - Native Blockchain Storage</h1>
          <p className="subtitle">
            Every spreadsheet saved directly to Bitcoin blockchain. 
            No servers, no downtime, permanent ownership.
          </p>
        </div>

        <div className="save-process">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Create Spreadsheet</h3>
            <p>Build your spreadsheet with powerful formulas, data analysis, and calculations using our familiar interface.</p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Click /save</h3>
            <p>Every cell is encrypted with AES-256 and committed to Bitcoin blockchain via optimized transactions.</p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Own Forever</h3>
            <p>Your data is permanently stored on Bitcoin. No company can delete it, censor it, or hold it hostage.</p>
          </div>
        </div>

        <div className="benefits-section">
          <h2 style={{ color: '#f7931a', textAlign: 'center', marginBottom: '30px' }}>
            Why Save on Bitcoin Blockchain?
          </h2>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="benefit-icon">🔒</span>
              <h4>True Ownership</h4>
              <p>You hold the private keys. Your data can never be seized, censored, or lost by third parties.</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">♾️</span>
              <h4>Permanent Storage</h4>
              <p>Bitcoin blockchain is the most secure, permanent storage medium ever created. Your data lives forever.</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">🌍</span>
              <h4>Global Access</h4>
              <p>Access your spreadsheets from anywhere in the world. No geographic restrictions or server dependencies.</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">🔐</span>
              <h4>Military-Grade Encryption</h4>
              <p>AES-256 encryption ensures only you can read your data. Even we can't see your spreadsheet contents.</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">📈</span>
              <h4>Monetization Ready</h4>
              <p>Saved spreadsheets can be immediately tokenized, shared, or monetized through our /mint and /market features.</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">⚡</span>
              <h4>Instant Verification</h4>
              <p>Every save creates an immutable timestamp proof. Perfect for compliance, auditing, and legal documentation.</p>
            </div>
          </div>
        </div>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Traditional Cloud</th>
                <th>Bitcoin Spreadsheets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Data Ownership</strong></td>
                <td className="traditional">❌ Company owns your data</td>
                <td className="blockchain">✅ You own your private keys</td>
              </tr>
              <tr>
                <td><strong>Permanence</strong></td>
                <td className="traditional">❌ Can be deleted by company</td>
                <td className="blockchain">✅ Permanent blockchain storage</td>
              </tr>
              <tr>
                <td><strong>Censorship</strong></td>
                <td className="traditional">❌ Subject to terms of service</td>
                <td className="blockchain">✅ Censorship resistant</td>
              </tr>
              <tr>
                <td><strong>Access Control</strong></td>
                <td className="traditional">❌ Company can revoke access</td>
                <td className="blockchain">✅ Only you control access</td>
              </tr>
              <tr>
                <td><strong>Data Mining</strong></td>
                <td className="traditional">❌ Your data is analyzed/sold</td>
                <td className="blockchain">✅ Encrypted, private by default</td>
              </tr>
              <tr>
                <td><strong>Monetization</strong></td>
                <td className="traditional">❌ Company profits from your work</td>
                <td className="blockchain">✅ You earn from your data</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tech-specs">
          <h3>Technical Specifications</h3>
          <div className="spec-grid">
            <div className="spec-item">
              <span className="spec-value">AES-256</span>
              <span className="spec-label">Encryption Standard</span>
            </div>
            <div className="spec-item">
              <span className="spec-value">&lt;0.001₿</span>
              <span className="spec-label">Average Save Cost</span>
            </div>
            <div className="spec-item">
              <span className="spec-value">&lt;5 sec</span>
              <span className="spec-label">Confirmation Time</span>
            </div>
            <div className="spec-item">
              <span className="spec-value">1M+ cells</span>
              <span className="spec-label">Max Spreadsheet Size</span>
            </div>
            <div className="spec-item">
              <span className="spec-value">99.99%</span>
              <span className="spec-label">Network Uptime</span>
            </div>
            <div className="spec-item">
              <span className="spec-value">∞</span>
              <span className="spec-label">Storage Duration</span>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Own Your Data?</h2>
          <p style={{ marginBottom: '30px', color: '#cccccc' }}>
            Start creating spreadsheets with true ownership. Save directly to Bitcoin blockchain today.
          </p>
          <button 
            className="cta-button"
            onClick={() => navigate('/')}
          >
            Start Creating
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => navigate('/mint')}
          >
            Learn About /mint →
          </button>
        </div>
        </div>
      </PageLayout>
    </>
  );
};

export default SavePage;