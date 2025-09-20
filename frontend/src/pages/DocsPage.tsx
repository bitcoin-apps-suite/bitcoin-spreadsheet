import React from 'react';
import './DocsPage.css';
import SpreadsheetTaskbar from '../components/SpreadsheetTaskbar';

const DocsPage: React.FC = () => {
  return (
    <div className="docs-page">
      <SpreadsheetTaskbar 
        isAuthenticated={false}
        currentUser={null}
        onLogout={() => {}}
      />
      
      <div className="docs-container">
        <header className="docs-header">
          <h1>Bitcoin Spreadsheet Documentation</h1>
          <p className="docs-subtitle">
            Build the future of decentralized spreadsheets and earn $BSHEETS tokens
          </p>
        </header>

        <nav className="docs-nav">
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#tokenomics">Tokenomics</a></li>
            <li><a href="#development">Development</a></li>
            <li><a href="#contributing">Contributing</a></li>
            <li><a href="#api">API Reference</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
          </ul>
        </nav>

        <main className="docs-content">
          {/* Overview Section */}
          <section id="overview" className="docs-section">
            <h2>Project Overview</h2>
            <p>
              Bitcoin Spreadsheet is a revolutionary decentralized spreadsheet application that stores data 
              on the Bitcoin SV blockchain. Built with modern web technologies and featuring HandCash wallet 
              integration, it aims to create a truly decentralized alternative to Google Sheets and Microsoft Excel.
            </p>
            
            <div className="feature-grid">
              <div className="feature-card">
                <h3>🔐 Decentralized Storage</h3>
                <p>All data is stored on the Bitcoin SV blockchain with AES-256 encryption</p>
              </div>
              <div className="feature-card">
                <h3>💰 HandCash Integration</h3>
                <p>Secure wallet-based authentication and payments</p>
              </div>
              <div className="feature-card">
                <h3>📊 Excel Compatibility</h3>
                <p>400+ Excel functions powered by HyperFormula</p>
              </div>
              <div className="feature-card">
                <h3>🌐 Open Source</h3>
                <p>MIT licensed, fork-friendly, community-driven development</p>
              </div>
            </div>
          </section>

          {/* Tokenomics Section */}
          <section id="tokenomics" className="docs-section">
            <h2>Tokenomics</h2>
            <div className="tokenomics-overview">
              <div className="token-stat">
                <h3>1,000,000,000</h3>
                <p>Total $BSHEETS Supply</p>
              </div>
              <div className="token-stat">
                <h3>51%</h3>
                <p>Reserved for Company</p>
              </div>
              <div className="token-stat">
                <h3>49%</h3>
                <p>Available for Developers</p>
              </div>
              <div className="token-stat">
                <h3>1%</h3>
                <p>Maximum per PR</p>
              </div>
            </div>

            <div className="tokenomics-details">
              <h3>Developer Token Distribution</h3>
              <p>
                We're offering <strong>490,000,000 $BSHEETS tokens</strong> (49% of total supply) to developers 
                who contribute to the project. Each successfully merged pull request can earn up to 1% of the 
                total supply (10,000,000 tokens), depending on the complexity and impact of the contribution.
              </p>
              
              <h4>Token Allocation Guidelines:</h4>
              <ul>
                <li><strong>Major Features (0.5-1%)</strong>: New core functionality, blockchain integration</li>
                <li><strong>Medium Features (0.2-0.5%)</strong>: UI improvements, formula functions, optimizations</li>
                <li><strong>Minor Features (0.05-0.2%)</strong>: Bug fixes, documentation, small enhancements</li>
                <li><strong>Critical Fixes (0.1-0.3%)</strong>: Security fixes, performance improvements</li>
              </ul>
            </div>
          </section>

          {/* Development Section */}
          <section id="development" className="docs-section">
            <h2>Development Workflow</h2>
            
            <div className="workflow-steps">
              <div className="workflow-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Browse Issues</h3>
                  <p>Check our <a href="https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues" target="_blank" rel="noopener noreferrer">GitHub issues</a> for tasks that need work. Each issue is labeled with estimated token rewards.</p>
                </div>
              </div>
              
              <div className="workflow-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Fork & Develop</h3>
                  <p>Fork the repository, create a branch, and implement your solution. Follow our coding standards and include tests.</p>
                </div>
              </div>
              
              <div className="workflow-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Submit PR</h3>
                  <p>Create a pull request with a clear description, link to the issue, and demonstrate your solution works.</p>
                </div>
              </div>
              
              <div className="workflow-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Get Rewarded</h3>
                  <p>Once merged, tokens are allocated to your HandCash wallet. Track your contributions on our <a href="/contributions">leaderboard</a>.</p>
                </div>
              </div>
            </div>

            <div className="development-info">
              <h3>Getting Started</h3>
              <div className="code-block">
                <pre>
{`# Clone the repository
git clone https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet.git

# Install dependencies
cd bitcoin-spreadsheet
npm install

# Start development server
npm run start:frontend

# Run tests
npm test`}
                </pre>
              </div>
            </div>
          </section>

          {/* Contributing Section */}
          <section id="contributing" className="docs-section">
            <h2>Contributing Guidelines</h2>
            
            <h3>What We're Looking For</h3>
            <div className="contribution-types">
              <div className="contrib-category">
                <h4>🧮 Spreadsheet Engine</h4>
                <ul>
                  <li>Formula function implementations</li>
                  <li>Performance optimizations</li>
                  <li>Excel compatibility improvements</li>
                </ul>
              </div>
              
              <div className="contrib-category">
                <h4>⛓️ Blockchain Features</h4>
                <ul>
                  <li>BSV integration enhancements</li>
                  <li>Encryption improvements</li>
                  <li>Data synchronization</li>
                </ul>
              </div>
              
              <div className="contrib-category">
                <h4>🎨 User Interface</h4>
                <ul>
                  <li>Mobile responsiveness</li>
                  <li>Accessibility improvements</li>
                  <li>Design system components</li>
                </ul>
              </div>
              
              <div className="contrib-category">
                <h4>🔧 Infrastructure</h4>
                <ul>
                  <li>Testing improvements</li>
                  <li>Build optimizations</li>
                  <li>Documentation updates</li>
                </ul>
              </div>
            </div>

            <h3>Code Standards</h3>
            <ul>
              <li>TypeScript for all new code</li>
              <li>React functional components with hooks</li>
              <li>Comprehensive test coverage</li>
              <li>Clear, documented APIs</li>
              <li>Mobile-first responsive design</li>
            </ul>
          </section>

          {/* API Reference */}
          <section id="api" className="docs-section">
            <h2>API Reference</h2>
            
            <h3>Core Services</h3>
            <div className="api-section">
              <h4>BitcoinService</h4>
              <p>Handles blockchain interactions and data storage.</p>
              <div className="code-block">
                <pre>
{`// Create a new spreadsheet
const spreadsheet = await bitcoinService.createSpreadsheet('My Spreadsheet');

// Save data to blockchain
await bitcoinService.saveSpreadsheet(spreadsheet);

// Load user's spreadsheets
const spreadsheets = await bitcoinService.getUserSpreadsheets();`}
                </pre>
              </div>
            </div>

            <div className="api-section">
              <h4>HandCashService</h4>
              <p>Manages wallet authentication and payments.</p>
              <div className="code-block">
                <pre>
{`// Authenticate user
const user = await handCashService.login();

// Get current user
const currentUser = handCashService.getCurrentUser();

// Check authentication status
const isAuth = handCashService.isAuthenticated();`}
                </pre>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section id="roadmap" className="docs-section">
            <h2>Development Roadmap</h2>
            
            <div className="roadmap">
              <div className="roadmap-phase">
                <h3>Phase 1: Core Platform (Q4 2024)</h3>
                <ul>
                  <li>✅ Basic spreadsheet functionality</li>
                  <li>✅ HandCash authentication</li>
                  <li>✅ Token system implementation</li>
                  <li>🔄 Formula engine completion</li>
                  <li>🔄 Mobile optimization</li>
                </ul>
              </div>
              
              <div className="roadmap-phase">
                <h3>Phase 2: Advanced Features (Q1 2025)</h3>
                <ul>
                  <li>📅 Real-time collaboration</li>
                  <li>📅 Advanced charting</li>
                  <li>📅 Import/Export tools</li>
                  <li>📅 Plugin system</li>
                  <li>📅 API marketplace</li>
                </ul>
              </div>
              
              <div className="roadmap-phase">
                <h3>Phase 3: Enterprise (Q2 2025)</h3>
                <ul>
                  <li>📅 Enterprise SSO</li>
                  <li>📅 Advanced permissions</li>
                  <li>📅 Audit logging</li>
                  <li>📅 Custom deployments</li>
                  <li>📅 SLA support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="quick-links">
            <h2>Quick Links</h2>
            <div className="links-grid">
              <a href="https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet" target="_blank" rel="noopener noreferrer" className="link-card">
                <h3>GitHub Repository</h3>
                <p>View source code and contribute</p>
              </a>
              <a href="https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues" target="_blank" rel="noopener noreferrer" className="link-card">
                <h3>Open Issues</h3>
                <p>Find tasks to work on</p>
              </a>
              <a href="/token" className="link-card">
                <h3>$BSHEETS Token</h3>
                <p>Learn about tokenomics</p>
              </a>
              <a href="/contributions" className="link-card">
                <h3>Contributors</h3>
                <p>See who's building the future</p>
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DocsPage;