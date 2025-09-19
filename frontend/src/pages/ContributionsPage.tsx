import React from 'react';
import './ContributionsPage.css';
import SpreadsheetTaskbar from '../components/SpreadsheetTaskbar';

interface Contributor {
  handle: string;
  github: string;
  avatar?: string;
  tokensAwarded: number;
  prsAccepted: number;
  contributions: {
    pr: string;
    title: string;
    tokens: number;
    date: string;
    link: string;
  }[];
}

const ContributionsPage: React.FC = () => {
  // Mock data - replace with actual data from your backend/blockchain
  const contributors: Contributor[] = [
    {
      handle: 'b0ase',
      github: 'b0ase',
      tokensAwarded: 500000,
      prsAccepted: 15,
      contributions: [
        {
          pr: '#1',
          title: 'Initial project setup and core spreadsheet functionality',
          tokens: 100000,
          date: '2024-01-15',
          link: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/pull/1'
        },
        {
          pr: '#2',
          title: 'Implemented blockchain storage integration',
          tokens: 75000,
          date: '2024-01-20',
          link: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/pull/2'
        },
        {
          pr: '#3',
          title: 'Added HandCash authentication',
          tokens: 50000,
          date: '2024-01-25',
          link: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/pull/3'
        }
      ]
    },
    {
      handle: 'contributor2',
      github: 'contributor2',
      tokensAwarded: 25000,
      prsAccepted: 2,
      contributions: [
        {
          pr: '#4',
          title: 'Fixed mobile responsive issues',
          tokens: 15000,
          date: '2024-02-01',
          link: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/pull/4'
        },
        {
          pr: '#5',
          title: 'Added dark mode support',
          tokens: 10000,
          date: '2024-02-05',
          link: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/pull/5'
        }
      ]
    }
  ];

  const totalTokensDistributed = contributors.reduce((sum, c) => sum + c.tokensAwarded, 0);
  const totalPRs = contributors.reduce((sum, c) => sum + c.prsAccepted, 0);

  return (
    <div className="contributions-page">
      <SpreadsheetTaskbar 
        isAuthenticated={false}
        currentUser={null}
        onLogout={() => {}}
      />
      
      {/* Header with GitHub and Docs links */}
      <div className="contributions-header-links">
        <a href="/developers" className="header-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            <path d="M14 2v6h6"/>
            <path d="M16 13H8"/>
            <path d="M16 17H8"/>
            <path d="M10 9H8"/>
          </svg>
          Developer Docs
        </a>
        <a 
          href="https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet" 
          target="_blank" 
          rel="noopener noreferrer"
          className="header-link"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub Repository
        </a>
      </div>

      <div className="contributions-container">
        {/* Hero Section */}
        <section className="contributions-hero">
          <h1>Developer Contributions</h1>
          <p className="contributions-tagline">
            Recognizing the builders who make Bitcoin Spreadsheet possible
          </p>
          
          {/* Stats Overview */}
          <div className="contributions-stats">
            <div className="stat-card">
              <div className="stat-value">{contributors.length}</div>
              <div className="stat-label">Active Contributors</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{totalTokensDistributed.toLocaleString()}</div>
              <div className="stat-label">$BSHEETS Distributed</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{totalPRs}</div>
              <div className="stat-label">PRs Merged</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">1B</div>
              <div className="stat-label">Total Supply</div>
            </div>
          </div>
        </section>

        {/* Leaderboard */}
        <section className="leaderboard-section">
          <h2>Top Contributors</h2>
          <div className="leaderboard">
            {contributors
              .sort((a, b) => b.tokensAwarded - a.tokensAwarded)
              .map((contributor, index) => (
                <div key={contributor.handle} className="leaderboard-item">
                  <div className="rank">#{index + 1}</div>
                  <div className="contributor-info">
                    <div className="contributor-avatar">
                      {contributor.avatar ? (
                        <img src={contributor.avatar} alt={contributor.handle} />
                      ) : (
                        <div className="avatar-placeholder">
                          {contributor.handle[0].toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="contributor-details">
                      <div className="contributor-name">
                        <a 
                          href={`https://github.com/${contributor.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @{contributor.handle}
                        </a>
                      </div>
                      <div className="contributor-stats">
                        <span>{contributor.prsAccepted} PRs</span>
                        <span className="dot">•</span>
                        <span>{contributor.contributions.length} contributions</span>
                      </div>
                    </div>
                  </div>
                  <div className="tokens-awarded">
                    <div className="token-amount">{contributor.tokensAwarded.toLocaleString()}</div>
                    <div className="token-label">$BSHEETS</div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Recent Contributions */}
        <section className="recent-contributions-section">
          <h2>Recent Contributions</h2>
          <div className="contributions-list">
            {contributors.flatMap(contributor => 
              contributor.contributions.map(contribution => ({
                ...contribution,
                contributor: contributor.handle
              }))
            )
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 10)
            .map((contribution, index) => (
              <div key={`${contribution.contributor}-${contribution.pr}`} className="contribution-item">
                <div className="contribution-main">
                  <div className="contribution-title">
                    <a 
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contribution.pr}: {contribution.title}
                    </a>
                  </div>
                  <div className="contribution-meta">
                    <span className="contributor-handle">@{contribution.contributor}</span>
                    <span className="dot">•</span>
                    <span className="contribution-date">
                      {new Date(contribution.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="contribution-reward">
                  <span className="reward-amount">+{contribution.tokens.toLocaleString()}</span>
                  <span className="reward-currency">$BSHEETS</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Contribute */}
        <section className="how-to-contribute-section">
          <h2>Start Contributing</h2>
          <div className="contribute-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Fork & Clone</h3>
              <p>Fork the repository and clone it locally to start developing</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Build Features</h3>
              <p>Implement new features, fix bugs, or improve documentation</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Submit PR</h3>
              <p>Create a pull request with clear description and tests</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Earn Tokens</h3>
              <p>Receive $BSHEETS tokens when your PR is merged</p>
            </div>
          </div>
          
          <div className="cta-section">
            <a 
              href="https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
            >
              Start Contributing
            </a>
            <a 
              href="/token"
              className="cta-button secondary"
            >
              Learn About $BSHEETS
            </a>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="disclaimer-section">
          <p>
            Token allocation is discretionary and based on contribution quality and impact. 
            Past distributions do not guarantee future allocations. Contributing code does not 
            constitute employment or contractual relationship.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ContributionsPage;