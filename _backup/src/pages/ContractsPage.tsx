import React, { useState, useEffect } from 'react';
import './TokenPage.css'; // Use TokenPage styles for consistent formatting
import SpreadsheetTaskbar from '../components/SpreadsheetTaskbar';
import PageLayout from '../components/PageLayout';
import { HandCashService } from '../services/HandCashService';

// Additional styles for contract-specific elements
const contractStyles = `
  .filter-buttons {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 16px;
  }
  .filter-buttons button {
    padding: 8px 16px;
    border: 1px solid rgba(66, 133, 244, 0.3);
    background: rgba(66, 133, 244, 0.05);
    color: rgba(255, 255, 255, 0.8);
    border-radius: 100px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 300;
  }
  .filter-buttons button:hover {
    background: rgba(66, 133, 244, 0.1);
    border-color: #4285F4;
    color: #4285F4;
  }
  .filter-buttons button.active {
    background: linear-gradient(135deg, #4285F4, #5A9BF5);
    border-color: #4285F4;
    color: #000;
    font-weight: 500;
  }
  .contract-header {
    display: flex;
    justify-content: between;
    align-items: flex-start;
    margin-bottom: 16px;
  }
  .contract-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .contract-reward {
    font-size: 18px;
    font-weight: 500;
    color: #4285F4;
  }
  .contract-details {
    margin: 20px 0;
  }
  .contract-details h4 {
    font-size: 16px;
    font-weight: 400;
    color: #4285F4;
    margin: 16px 0 8px 0;
  }
  .skills-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 8px 0;
  }
  .skills-list li {
    background: rgba(66, 133, 244, 0.1);
    color: #4285F4;
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 12px;
    border: 1px solid rgba(66, 133, 244, 0.2);
  }
  .contract-actions {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
  }
  .contracts-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .issue-number {
    background: rgba(255, 255, 255, 0.1);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
  }
  .contract-info {
    margin: 12px 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = contractStyles;
  document.head.appendChild(styleSheet);
}

interface Contract {
  id: string;
  issueNumber: number;
  title: string;
  description: string;
  reward: string;
  status: 'open' | 'assigned' | 'in_progress' | 'review' | 'completed';
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  category: string;
  assignee?: string;
  githubUrl: string;
  createdAt: string;
  deadline?: string;
  requiredSkills: string[];
  deliverables: string[];
}

const ContractsPage: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [filter, setFilter] = useState<'all' | 'open' | 'assigned' | 'my_contracts'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check HandCash authentication
    const handcashService = new HandCashService();
    if (handcashService.isAuthenticated()) {
      setIsAuthenticated(true);
      setCurrentUser(handcashService.getCurrentUser());
    }

    // Fetch contracts from GitHub issues
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    setLoading(true);
    try {
      // In production, this would fetch from GitHub API
      // For now, using mock data that represents GitHub issues
      const mockContracts: Contract[] = [
        {
          id: 'contract-1',
          issueNumber: 2,
          title: 'Implement Real-time Collaboration',
          description: 'Add WebRTC-based real-time collaboration so multiple users can edit the same spreadsheet simultaneously. Should include cursor tracking, cell locking, and conflict resolution.',
          reward: '10,000 BSHEETS',
          status: 'open',
          difficulty: 'Expert',
          category: 'Feature',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/2',
          createdAt: '2025-09-19',
          requiredSkills: ['WebRTC', 'React', 'TypeScript', 'Real-time Systems'],
          deliverables: [
            'WebRTC integration for peer-to-peer connections',
            'Cursor tracking and display for multiple users',
            'Cell locking mechanism to prevent conflicts',
            'Conflict resolution system',
            'Tests with 90% coverage'
          ]
        },
        {
          id: 'contract-2',
          issueNumber: 3,
          title: 'Add Advanced Charting Library',
          description: 'Integrate a comprehensive charting library (Chart.js or D3.js) to allow users to create various chart types from spreadsheet data.',
          reward: '5,000 BSHEETS',
          status: 'assigned',
          difficulty: 'Medium',
          category: 'Feature',
          assignee: '@developer123',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/3',
          createdAt: '2025-09-18',
          deadline: '2025-10-15',
          requiredSkills: ['Chart.js/D3.js', 'Data Visualization', 'React'],
          deliverables: [
            'Support for 10+ chart types',
            'Interactive chart editing',
            'Data binding from cells',
            'Export charts as images'
          ]
        },
        {
          id: 'contract-3',
          issueNumber: 4,
          title: 'Implement Pivot Tables',
          description: 'Build a full-featured pivot table functionality similar to Excel, allowing users to summarize and analyze data dynamically.',
          reward: '8,000 BSHEETS',
          status: 'open',
          difficulty: 'Hard',
          category: 'Feature',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/4',
          createdAt: '2025-09-20',
          requiredSkills: ['Data Processing', 'Algorithms', 'React', 'TypeScript'],
          deliverables: [
            'Drag-and-drop pivot table builder',
            'Multiple aggregation functions',
            'Filtering and sorting',
            'Performance optimization for large datasets'
          ]
        },
        {
          id: 'contract-4',
          issueNumber: 5,
          title: 'Mobile App Development',
          description: 'Create a React Native mobile app for Bitcoin Spreadsheet with full functionality and offline support.',
          reward: '15,000 BSHEETS',
          status: 'open',
          difficulty: 'Expert',
          category: 'Mobile',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/5',
          createdAt: '2025-09-21',
          requiredSkills: ['React Native', 'Mobile Development', 'Offline Storage', 'BSV Integration'],
          deliverables: [
            'iOS and Android apps',
            'Offline mode with sync',
            'Touch-optimized UI',
            'Push notifications',
            'App store deployment'
          ]
        },
        {
          id: 'contract-5',
          issueNumber: 6,
          title: 'Excel Import/Export Enhancement',
          description: 'Improve Excel file import/export to support advanced features like macros, pivot tables, and complex formatting.',
          reward: '3,000 BSHEETS',
          status: 'in_progress',
          difficulty: 'Medium',
          category: 'Enhancement',
          assignee: '@coder456',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/6',
          createdAt: '2025-09-19',
          deadline: '2025-09-30',
          requiredSkills: ['Excel File Format', 'File Parsing', 'TypeScript'],
          deliverables: [
            'Support for .xlsx format',
            'Preserve formulas and formatting',
            'Handle large files efficiently'
          ]
        },
        {
          id: 'contract-6',
          issueNumber: 7,
          title: 'Performance Optimization for Large Datasets',
          description: 'Optimize rendering and calculation performance for spreadsheets with 100,000+ cells.',
          reward: '6,000 BSHEETS',
          status: 'open',
          difficulty: 'Hard',
          category: 'Performance',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/7',
          createdAt: '2025-09-20',
          requiredSkills: ['Performance Optimization', 'Virtual Scrolling', 'Web Workers'],
          deliverables: [
            'Virtual scrolling implementation',
            'Web Worker for calculations',
            'Lazy loading strategies',
            'Performance benchmarks'
          ]
        },
        {
          id: 'contract-7',
          issueNumber: 8,
          title: 'Create API Documentation',
          description: 'Create comprehensive API documentation with examples and interactive playground.',
          reward: '2,000 BSHEETS',
          status: 'open',
          difficulty: 'Easy',
          category: 'Documentation',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/8',
          createdAt: '2025-09-21',
          requiredSkills: ['Technical Writing', 'API Documentation', 'Swagger/OpenAPI'],
          deliverables: [
            'Complete API reference',
            'Code examples in multiple languages',
            'Interactive API playground',
            'Integration guides'
          ]
        },
        {
          id: 'contract-8',
          issueNumber: 9,
          title: 'Accessibility and Screen Reader Support',
          description: 'Ensure WCAG 2.1 AA compliance with screen reader support and keyboard navigation.',
          reward: '4,000 BSHEETS',
          status: 'review',
          difficulty: 'Medium',
          category: 'Accessibility',
          assignee: '@a11y_expert',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/9',
          createdAt: '2025-09-18',
          requiredSkills: ['WCAG', 'ARIA', 'Screen Readers', 'Accessibility Testing'],
          deliverables: [
            'Full keyboard navigation',
            'Screen reader compatibility',
            'ARIA labels and roles',
            'Accessibility audit report'
          ]
        }
      ];

      setContracts(mockContracts);
    } catch (error) {
      console.error('Error fetching contracts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (contract: Contract) => {
    if (!isAuthenticated) {
      // Redirect to HandCash login
      const handcashService = new HandCashService();
      handcashService.login();
      return;
    }

    setSelectedContract(contract);
    setShowSignupModal(true);
  };

  const submitContractSignup = async () => {
    if (!selectedContract || !currentUser) return;

    try {
      // In production, this would:
      // 1. Create a smart contract on BSV
      // 2. Register the developer's commitment
      // 3. Update GitHub issue assignee
      // 4. Send confirmation to HandCash wallet
      
      alert(`Contract signing recorded!\n\nTask: ${selectedContract.title}\nReward: ${selectedContract.reward}\nWallet: @${currentUser.handle}\n\nNext steps:\n1. Contact @b0ase on GitHub to claim this task\n2. Fork the repository and start development\n3. Submit PR when complete for review`);
      
      setShowSignupModal(false);
      setSelectedContract(null);
      
      // Refresh contracts to show updated status
      fetchContracts();
    } catch (error) {
      console.error('Error signing contract:', error);
      alert('Failed to sign up for contract. Please try again.');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return '#22c55e';
      case 'assigned': return '#F7931A';
      case 'in_progress': return '#3b82f6';
      case 'review': return '#a855f7';
      case 'completed': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return '#22c55e';
      case 'Medium': return '#F7931A';
      case 'Hard': return '#ef4444';
      case 'Expert': return '#a855f7';
      default: return '#6b7280';
    }
  };

  const filteredContracts = contracts.filter(contract => {
    if (filter === 'all') return true;
    if (filter === 'open') return contract.status === 'open';
    if (filter === 'assigned') return contract.status === 'assigned' || contract.status === 'in_progress';
    if (filter === 'my_contracts' && currentUser) {
      return contract.assignee === `@${currentUser.handle}`;
    }
    return true;
  });

  return (
    <div className="token-page">
      <SpreadsheetTaskbar
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        onLogout={() => {
          setIsAuthenticated(false);
          setCurrentUser(null);
        }}
      />

      <PageLayout 
        title="Developer Contracts"
        description="Sign up for development tasks and earn $bSheets tokens upon successful PR merge"
        className="token-layout"
      >
        <div className="token-container">

          {/* Overview Section */}
          <section className="overview-section">
            <h2>Contract Overview</h2>
            <div className="stats-grid">
              <div className="stat">
                <h3>Open Contracts</h3>
                <p className="stat-value">{contracts.filter(c => c.status === 'open').length}</p>
                <p className="stat-label">Available tasks</p>
              </div>
              <div className="stat">
                <h3>Tokens Available</h3>
                <p className="stat-value">
                  {contracts.reduce((sum, c) => {
                    if (c.status === 'open') {
                      return sum + parseInt(c.reward.replace(/[^0-9]/g, ''));
                    }
                    return sum;
                  }, 0).toLocaleString()}
                </p>
                <p className="stat-label">$bSheets rewards</p>
              </div>
              <div className="stat">
                <h3>Completed</h3>
                <p className="stat-value">{contracts.filter(c => c.status === 'completed').length}</p>
                <p className="stat-label">Finished tasks</p>
              </div>
              <div className="stat">
                <h3>Active</h3>
                <p className="stat-value">{contracts.filter(c => c.status === 'assigned' || c.status === 'in_progress').length}</p>
                <p className="stat-label">In progress</p>
              </div>
            </div>
          </section>

          {/* Filters Section */}
          <section className="filters-section">
            <div className="model-card">
              <h3>Filter Contracts</h3>
              <div className="filter-buttons">
                <button
                  className={filter === 'all' ? 'active' : ''}
                  onClick={() => setFilter('all')}
                >
                  All Contracts
                </button>
                <button
                  className={filter === 'open' ? 'active' : ''}
                  onClick={() => setFilter('open')}
                >
                  Available
                </button>
                <button
                  className={filter === 'assigned' ? 'active' : ''}
                  onClick={() => setFilter('assigned')}
                >
                  In Progress
                </button>
                {isAuthenticated && (
                  <button
                    className={filter === 'my_contracts' ? 'active' : ''}
                    onClick={() => setFilter('my_contracts')}
                  >
                    My Contracts
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Available Contracts Section */}
          <section className="contracts-section">
            <h2>Available Development Contracts</h2>
            {loading ? (
              <div className="loading">Loading contracts...</div>
            ) : (
              <div className="contracts-list">
                {filteredContracts.map(contract => (
                  <div key={contract.id} className="model-card">
                    <div className="contract-header">
                      <div className="contract-meta">
                        <span className="issue-number">#{contract.issueNumber}</span>
                        <span 
                          className="contract-status"
                          style={{ 
                            backgroundColor: getStatusColor(contract.status),
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '500'
                          }}
                        >
                          {contract.status.replace('_', ' ').toUpperCase()}
                        </span>
                        <span 
                          className="contract-difficulty"
                          style={{ 
                            backgroundColor: getDifficultyColor(contract.difficulty),
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '12px',
                            fontWeight: '500'
                          }}
                        >
                          {contract.difficulty}
                        </span>
                      </div>
                      <div className="contract-reward">
                        <strong>{contract.reward}</strong>
                      </div>
                    </div>

                    <h3>{contract.title}</h3>
                    <p>{contract.description}</p>

                    <div className="contract-details">
                      <div className="contract-skills">
                        <h4>Required Skills</h4>
                        <ul className="skills-list">
                          {contract.requiredSkills.map(skill => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="contract-deliverables">
                        <h4>Key Deliverables</h4>
                        <ul>
                          {contract.deliverables.slice(0, 4).map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                          {contract.deliverables.length > 4 && (
                            <li><em>+{contract.deliverables.length - 4} additional requirements</em></li>
                          )}
                        </ul>
                      </div>
                    </div>

                    {(contract.deadline || contract.assignee) && (
                      <div className="contract-info">
                        {contract.deadline && (
                          <p><strong>Deadline:</strong> {new Date(contract.deadline).toLocaleDateString()}</p>
                        )}
                        {contract.assignee && (
                          <p><strong>Assigned to:</strong> {contract.assignee}</p>
                        )}
                      </div>
                    )}

                    <div className="contract-actions">
                      <a 
                        href={contract.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn secondary"
                        style={{ marginRight: '12px' }}
                      >
                        View on GitHub
                      </a>
                      {contract.status === 'open' && (
                        <button 
                          className="cta-btn primary"
                          onClick={() => handleSignUp(contract)}
                        >
                          {isAuthenticated ? 'Sign Contract' : 'Login to Sign'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Contract Signup Modal */}
          {showSignupModal && selectedContract && (
            <div className="modal-overlay" onClick={() => setShowSignupModal(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Contract Agreement</h2>
                
                <div className="contract-details">
                  <h3>{selectedContract.title}</h3>
                  <p className="contract-terms">
                    By signing this contract, you agree to:
                  </p>
                  <ul>
                    <li>Complete the deliverables as specified in issue #{selectedContract.issueNumber}</li>
                    <li>Submit a pull request that meets the project's quality standards</li>
                    <li>Respond to code review feedback within 48 hours</li>
                    <li>Receive {selectedContract.reward} upon successful merge</li>
                  </ul>
                  
                  {selectedContract.deadline && (
                    <p className="deadline-warning">
                      ⚠️ This contract has a deadline of {new Date(selectedContract.deadline).toLocaleDateString()}
                    </p>
                  )}

                  <div className="wallet-info">
                    <p>Payment will be sent to:</p>
                    <div className="wallet-display">
                      <img src="https://handcash.io/favicon.ico" alt="HandCash" />
                      <span>@{currentUser?.handle}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-actions">
                  <button 
                    className="cancel-button" 
                    onClick={() => setShowSignupModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    className="confirm-button"
                    onClick={submitContractSignup}
                  >
                    Sign Contract & Start Work
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </PageLayout>
    </div>
  );
};

export default ContractsPage;