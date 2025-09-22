import React, { useState, useEffect } from 'react';
import './DocsPage.css';
import SpreadsheetTaskbar from '../components/SpreadsheetTaskbar';
import PageLayout from '../components/PageLayout';

const DocsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'tokenomics', 'development', 'contributing', 'api', 'roadmap'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 200) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, tabId: string) => {
    e.preventDefault();
    setActiveTab(tabId);
    
    const element = document.getElementById(tabId);
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="docs-page">
      <SpreadsheetTaskbar 
        isAuthenticated={false}
        currentUser={null}
        onLogout={() => {}}
      />
      
      <PageLayout 
        title="Bitcoin Spreadsheet Documentation"
        description="Build the future of decentralized spreadsheets and earn $BSHEETS tokens"
        className="docs-layout"
      >
        <div className="docs-container">

        <nav className="docs-nav">
          <ul>
            <li>
              <a 
                href="#overview" 
                className={activeTab === 'overview' ? 'active' : ''}
                onClick={(e) => handleTabClick(e, 'overview')}
              >
                Overview
              </a>
            </li>
            <li>
              <a 
                href="#tokenomics" 
                className={activeTab === 'tokenomics' ? 'active' : ''}
                onClick={(e) => handleTabClick(e, 'tokenomics')}
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a 
                href="#development" 
                className={activeTab === 'development' ? 'active' : ''}
                onClick={(e) => handleTabClick(e, 'development')}
              >
                Development
              </a>
            </li>
            <li>
              <a 
                href="#contributing" 
                className={activeTab === 'contributing' ? 'active' : ''}
                onClick={(e) => handleTabClick(e, 'contributing')}
              >
                Contributing
              </a>
            </li>
            <li>
              <a 
                href="#api" 
                className={activeTab === 'api' ? 'active' : ''}
                onClick={(e) => handleTabClick(e, 'api')}
              >
                API Reference
              </a>
            </li>
            <li>
              <a 
                href="#roadmap" 
                className={activeTab === 'roadmap' ? 'active' : ''}
                onClick={(e) => handleTabClick(e, 'roadmap')}
              >
                Roadmap
              </a>
            </li>
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
                <h3>100%</h3>
                <p>For Contributors</p>
              </div>
              <div className="token-stat">
                <h3>425,000</h3>
                <p>Already Distributed</p>
              </div>
              <div className="token-stat">
                <h3>0%</h3>
                <p>Company Reserve</p>
              </div>
            </div>

            <div className="tokenomics-details">
              <h3>Developer Token Distribution</h3>
              <p>
                We're offering <strong>1,000,000,000 $BSHEETS tokens</strong> (100% of total supply) to developers 
                and contributors. This is a pure meritocracy - no company reserves, no pre-mine, just rewards for 
                those who build. Each contribution earns tokens based on impact and complexity.
              </p>
              
              <h4>Token Allocation Guidelines:</h4>
              <ul>
                <li><strong>Major Features (5,000-10,000 BSHEETS)</strong>: Core functionality, blockchain integration, architecture improvements</li>
                <li><strong>Standard Features (2,000-5,000 BSHEETS)</strong>: Regular features, API endpoints, service integrations</li>
                <li><strong>Enhancements (1,000-3,000 BSHEETS)</strong>: Performance improvements, optimizations, refactoring</li>
                <li><strong>Bug Fixes (500-2,000 BSHEETS)</strong>: Critical to minor bug fixes based on severity</li>
                <li><strong>UI/UX (1,000-2,500 BSHEETS)</strong>: Design improvements, component updates, mobile optimization</li>
                <li><strong>Documentation (500-1,500 BSHEETS)</strong>: Technical docs, user guides, code comments</li>
              </ul>

              <h4>Token Utility & Use Cases:</h4>
              <ul>
                <li><strong>Governance Rights</strong>: Vote on protocol changes and feature prioritization</li>
                <li><strong>Premium Features</strong>: Access advanced spreadsheet functions and templates</li>
                <li><strong>Revenue Sharing</strong>: Earn dividends from platform revenue based on token holdings</li>
                <li><strong>Marketplace Currency</strong>: Buy/sell spreadsheet templates and formulas in our marketplace</li>
                <li><strong>Staking Rewards</strong>: Stake tokens to validate spreadsheet data and earn rewards</li>
                <li><strong>API Credits</strong>: Pay for API usage and blockchain storage costs</li>
              </ul>

              <h4>Distribution Process:</h4>
              <div className="vesting-info">
                <p><strong>Immediate Rewards:</strong> 100% unlocked upon PR merge - no vesting period</p>
                <p><strong>Monthly Distribution:</strong> Tokens distributed on the 1st of each month for previous month's contributions</p>
                <p><strong>Transparent Tracking:</strong> All contributions publicly tracked in CONTRIBUTIONS.md</p>
                <p><strong>No Hidden Reserves:</strong> 100% of tokens go to contributors - zero company allocation</p>
                <p><strong>Current Distribution:</strong> 425,000 BSHEETS already distributed to founding developer</p>
              </div>

              <h4>Economic Model:</h4>
              <div className="economic-model">
                <div className="model-section">
                  <h5>Revenue Streams:</h5>
                  <ul>
                    <li>Premium subscription plans (10% of revenue to token holders)</li>
                    <li>Enterprise licenses and custom deployments</li>
                    <li>Marketplace transaction fees (2.5% per transaction)</li>
                    <li>API usage fees and blockchain storage costs</li>
                    <li>NFT spreadsheet royalties (5% per trade)</li>
                  </ul>
                </div>
                
                <div className="model-section">
                  <h5>Token Burn Mechanism:</h5>
                  <ul>
                    <li>25% of platform revenue used for quarterly token burns</li>
                    <li>Deflationary pressure to increase token value over time</li>
                    <li>Transparent burn tracking on Bitcoin SV blockchain</li>
                  </ul>
                </div>
              </div>

              <h4>Getting Started:</h4>
              <div className="getting-started-tokens">
                <p>Ready to earn $BSHEETS tokens? Check out our <a href="/tasks" className="inline-link">Tasks page</a> for available work, or browse our <a href="https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues" target="_blank" rel="noopener noreferrer" className="inline-link">GitHub issues</a>. Every contribution counts!</p>
                <p>View our <a href="/contributions" className="inline-link">Contributions tracker</a> to see how tokens are distributed. This is a 100% community-driven project where every developer is rewarded fairly for their work.</p>
              </div>
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
      </PageLayout>
    </div>
  );
};

export default DocsPage;