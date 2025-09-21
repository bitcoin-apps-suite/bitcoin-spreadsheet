import React, { useState, useEffect } from 'react';
import './ContractsPage.css';
import SpreadsheetTaskbar from '../components/SpreadsheetTaskbar';
import { HandCashService } from '../services/HandCashService';

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
          issueNumber: 47,
          title: 'Implement Real-time Collaboration',
          description: 'Add WebRTC-based real-time collaboration so multiple users can edit the same spreadsheet simultaneously. Should include cursor tracking, cell locking, and conflict resolution.',
          reward: '10,000 BSHEETS',
          status: 'open',
          difficulty: 'Expert',
          category: 'Feature',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/47',
          createdAt: '2024-12-15',
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
          issueNumber: 48,
          title: 'Add Advanced Charting Library',
          description: 'Integrate a comprehensive charting library (Chart.js or D3.js) to allow users to create various chart types from spreadsheet data.',
          reward: '5,000 BSHEETS',
          status: 'assigned',
          difficulty: 'Medium',
          category: 'Feature',
          assignee: '@developer123',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/48',
          createdAt: '2024-12-10',
          deadline: '2025-01-10',
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
          issueNumber: 49,
          title: 'Implement Pivot Tables',
          description: 'Build a full-featured pivot table functionality similar to Excel, allowing users to summarize and analyze data dynamically.',
          reward: '8,000 BSHEETS',
          status: 'open',
          difficulty: 'Hard',
          category: 'Feature',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/49',
          createdAt: '2024-12-18',
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
          issueNumber: 50,
          title: 'Mobile App Development',
          description: 'Create a React Native mobile app for Bitcoin Spreadsheet with full functionality and offline support.',
          reward: '15,000 BSHEETS',
          status: 'open',
          difficulty: 'Expert',
          category: 'Mobile',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/50',
          createdAt: '2024-12-20',
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
          issueNumber: 51,
          title: 'Excel Import/Export Enhancement',
          description: 'Improve Excel file import/export to support advanced features like macros, pivot tables, and complex formatting.',
          reward: '3,000 BSHEETS',
          status: 'in_progress',
          difficulty: 'Medium',
          category: 'Enhancement',
          assignee: '@coder456',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/51',
          createdAt: '2024-12-12',
          deadline: '2024-12-30',
          requiredSkills: ['Excel File Format', 'File Parsing', 'TypeScript'],
          deliverables: [
            'Support for .xlsx format',
            'Preserve formulas and formatting',
            'Handle large files efficiently'
          ]
        },
        {
          id: 'contract-6',
          issueNumber: 52,
          title: 'Performance Optimization',
          description: 'Optimize rendering and calculation performance for spreadsheets with 100,000+ cells.',
          reward: '6,000 BSHEETS',
          status: 'open',
          difficulty: 'Hard',
          category: 'Performance',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/52',
          createdAt: '2024-12-19',
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
          issueNumber: 53,
          title: 'API Documentation',
          description: 'Create comprehensive API documentation with examples and interactive playground.',
          reward: '2,000 BSHEETS',
          status: 'open',
          difficulty: 'Easy',
          category: 'Documentation',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/53',
          createdAt: '2024-12-21',
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
          issueNumber: 54,
          title: 'Accessibility Improvements',
          description: 'Ensure WCAG 2.1 AA compliance with screen reader support and keyboard navigation.',
          reward: '4,000 BSHEETS',
          status: 'review',
          difficulty: 'Medium',
          category: 'Accessibility',
          assignee: '@a11y_expert',
          githubUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-spreadsheet/issues/54',
          createdAt: '2024-12-14',
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
      
      alert(`Successfully signed up for contract #${selectedContract.issueNumber}!\n\nYou will receive ${selectedContract.reward} upon successful completion and merge of your PR.\n\nPayment wallet: @${currentUser.handle}`);
      
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
    <div className="contracts-page">
      <SpreadsheetTaskbar
        isAuthenticated={isAuthenticated}
        currentUser={currentUser}
        onLogout={() => {
          setIsAuthenticated(false);
          setCurrentUser(null);
        }}
      />

      <div className="contracts-container">
        <header className="contracts-header">
          <div className="header-content">
            <h1>Developer Contracts</h1>
            <p className="subtitle">
              Sign up for development tasks and earn $BSHEETS tokens upon successful PR merge
            </p>
          </div>
          
          <div className="header-stats">
            <div className="stat-card">
              <span className="stat-value">{contracts.filter(c => c.status === 'open').length}</span>
              <span className="stat-label">Open Contracts</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">
                {contracts.reduce((sum, c) => {
                  if (c.status === 'open') {
                    return sum + parseInt(c.reward.replace(/[^0-9]/g, ''));
                  }
                  return sum;
                }, 0).toLocaleString()}
              </span>
              <span className="stat-label">Tokens Available</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">{contracts.filter(c => c.status === 'completed').length}</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>
        </header>

        <div className="contracts-filters">
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
            Open
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

        {loading ? (
          <div className="loading">Loading contracts...</div>
        ) : (
          <div className="contracts-grid">
            {filteredContracts.map(contract => (
              <div key={contract.id} className="contract-card">
                <div className="contract-header">
                  <div className="contract-meta">
                    <span className="issue-number">#{contract.issueNumber}</span>
                    <span 
                      className="contract-status"
                      style={{ backgroundColor: getStatusColor(contract.status) }}
                    >
                      {contract.status.replace('_', ' ')}
                    </span>
                    <span 
                      className="contract-difficulty"
                      style={{ backgroundColor: getDifficultyColor(contract.difficulty) }}
                    >
                      {contract.difficulty}
                    </span>
                  </div>
                  <div className="contract-reward">
                    {contract.reward}
                  </div>
                </div>

                <h3 className="contract-title">{contract.title}</h3>
                <p className="contract-description">{contract.description}</p>

                <div className="contract-skills">
                  {contract.requiredSkills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>

                <div className="contract-deliverables">
                  <h4>Deliverables:</h4>
                  <ul>
                    {contract.deliverables.slice(0, 3).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                    {contract.deliverables.length > 3 && (
                      <li className="more">+{contract.deliverables.length - 3} more</li>
                    )}
                  </ul>
                </div>

                {contract.deadline && (
                  <div className="contract-deadline">
                    <span className="deadline-label">Deadline:</span>
                    <span className="deadline-date">{new Date(contract.deadline).toLocaleDateString()}</span>
                  </div>
                )}

                {contract.assignee && (
                  <div className="contract-assignee">
                    <span className="assignee-label">Assigned to:</span>
                    <span className="assignee-name">{contract.assignee}</span>
                  </div>
                )}

                <div className="contract-actions">
                  <a 
                    href={contract.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    View on GitHub
                  </a>
                  {contract.status === 'open' && (
                    <button 
                      className="signup-button"
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
      </div>

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
  );
};

export default ContractsPage;