import React, { useState } from 'react';
import './TasksPage.css';
import SpreadsheetTaskbar from '../components/SpreadsheetTaskbar';

interface Task {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  category: 'Frontend' | 'Backend' | 'Blockchain' | 'UI/UX' | 'Testing' | 'Documentation';
  estimatedHours: number;
  reward: number;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Open' | 'In Progress' | 'Under Review' | 'Completed';
  requirements: string[];
  tags: string[];
  assignedTo?: string;
  interestedDevs: string[];
  datePosted: string;
  deadline?: string;
}

const TasksPage: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('Open');
  const [showContactForm, setShowContactForm] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    github: '',
    message: '',
    experience: ''
  });

  // Mock tasks data
  const tasks: Task[] = [
    {
      id: 'TASK-001',
      title: 'Enhance Formula Engine with Array Functions',
      description: 'Extend the existing formula engine to support advanced array functions, XLOOKUP, dynamic arrays, and complex financial calculations. Current engine supports basic formulas only.',
      difficulty: 'Expert',
      category: 'Frontend',
      estimatedHours: 40,
      reward: 150000,
      priority: 'High',
      status: 'Open',
      requirements: [
        'Experience with React and TypeScript',
        'Knowledge of Excel formulas and spreadsheet engines',
        'Familiarity with HyperFormula or similar libraries',
        'Strong problem-solving skills'
      ],
      tags: ['formulas', 'excel', 'hyperformula', 'calculations'],
      interestedDevs: [],
      datePosted: '2025-09-19',
      deadline: '2025-10-30'
    },
    {
      id: 'TASK-002',
      title: 'Improve Mobile Touch Gestures',
      description: 'Enhance the existing mobile interface with better touch gestures, pinch-to-zoom, cell selection improvements, and smoother scrolling for large spreadsheets.',
      difficulty: 'Hard',
      category: 'Frontend',
      estimatedHours: 30,
      reward: 100000,
      priority: 'Medium',
      status: 'Open',
      requirements: [
        'React Native or responsive web development',
        'Touch gesture implementation experience',
        'Mobile UI/UX best practices',
        'Cross-platform testing capabilities'
      ],
      tags: ['mobile', 'touch', 'responsive', 'gestures'],
      interestedDevs: ['dev1', 'dev2'],
      datePosted: '2025-09-20'
    },
    {
      id: 'TASK-003',
      title: 'Bitcoin SV Smart Contract Integration',
      description: 'Develop smart contracts for spreadsheet storage, ownership, and revenue sharing on Bitcoin SV blockchain.',
      difficulty: 'Expert',
      category: 'Blockchain',
      estimatedHours: 60,
      reward: 200000,
      priority: 'Critical',
      status: 'Open',
      requirements: [
        'Bitcoin SV development experience',
        'Smart contract programming (sCrypt)',
        'Understanding of UTXO model',
        'Cryptocurrency and blockchain expertise'
      ],
      tags: ['bitcoin-sv', 'smart-contracts', 'scrypt', 'blockchain'],
      interestedDevs: [],
      datePosted: '2025-09-18',
      deadline: '2025-11-01'
    },
    {
      id: 'TASK-004',
      title: 'Complete Real-time Collaboration',
      description: 'Finish the WebRTC-based real-time collaboration system. Foundation exists but needs cursor tracking, conflict resolution, and presence indicators.',
      difficulty: 'Hard',
      category: 'Backend',
      estimatedHours: 35,
      reward: 120000,
      priority: 'High',
      status: 'In Progress',
      requirements: [
        'WebSocket implementation experience',
        'Real-time synchronization algorithms',
        'Node.js and backend development',
        'Conflict resolution strategies'
      ],
      tags: ['websockets', 'collaboration', 'real-time', 'sync'],
      interestedDevs: ['dev3'],
      assignedTo: 'dev3',
      datePosted: '2025-09-17'
    },
    {
      id: 'TASK-005',
      title: 'Implement Chart Visualization',
      description: 'Add Chart.js or D3.js integration for creating charts from spreadsheet data. Currently mentioned in docs but not yet implemented.',
      difficulty: 'Medium',
      category: 'Frontend',
      estimatedHours: 25,
      reward: 80000,
      priority: 'Medium',
      status: 'Open',
      requirements: [
        'Data visualization libraries (D3.js, Chart.js)',
        'React component development',
        'Interactive chart design',
        'Data binding and updates'
      ],
      tags: ['charts', 'visualization', 'd3', 'data'],
      interestedDevs: ['dev4', 'dev5'],
      datePosted: '2025-09-21'
    },
    {
      id: 'TASK-006',
      title: 'Comprehensive Testing Suite',
      description: 'Develop unit tests, integration tests, and end-to-end tests covering all spreadsheet functionality and edge cases.',
      difficulty: 'Medium',
      category: 'Testing',
      estimatedHours: 20,
      reward: 60000,
      priority: 'High',
      status: 'Open',
      requirements: [
        'Jest and React Testing Library',
        'Cypress or Playwright for E2E testing',
        'Test-driven development experience',
        'Quality assurance mindset'
      ],
      tags: ['testing', 'jest', 'cypress', 'qa'],
      interestedDevs: [],
      datePosted: '2025-09-21'
    },
    {
      id: 'TASK-007',
      title: 'Implement Pivot Tables',
      description: 'Build full pivot table functionality with drag-and-drop interface, multiple aggregation functions, and dynamic data summarization.',
      difficulty: 'Hard',
      category: 'Frontend',
      estimatedHours: 40,
      reward: 100000,
      priority: 'Medium',
      status: 'Open',
      requirements: [
        'Data aggregation algorithms',
        'Drag-and-drop UI implementation',
        'React and TypeScript expertise',
        'Experience with data transformation'
      ],
      tags: ['pivot-tables', 'data', 'aggregation', 'analytics'],
      interestedDevs: [],
      datePosted: '2025-09-20'
    },
    {
      id: 'TASK-008',
      title: 'Excel/CSV Import Export Enhancement',
      description: 'Improve import/export to handle complex Excel files with formulas, formatting, multiple sheets, and large datasets efficiently.',
      difficulty: 'Medium',
      category: 'Backend',
      estimatedHours: 25,
      reward: 75000,
      priority: 'High',
      status: 'Open',
      requirements: [
        'Excel file format knowledge',
        'File parsing experience',
        'Memory optimization skills',
        'Data transformation expertise'
      ],
      tags: ['excel', 'csv', 'import', 'export', 'files'],
      interestedDevs: [],
      datePosted: '2025-09-21'
    },
    {
      id: 'TASK-009',
      title: 'Conditional Formatting Engine',
      description: 'Create a conditional formatting system with rules based on cell values, formulas, data bars, color scales, and icon sets.',
      difficulty: 'Medium',
      category: 'Frontend',
      estimatedHours: 20,
      reward: 60000,
      priority: 'Medium',
      status: 'Open',
      requirements: [
        'CSS and styling expertise',
        'Rule engine development',
        'React component optimization',
        'UI/UX design skills'
      ],
      tags: ['formatting', 'rules', 'styling', 'visualization'],
      interestedDevs: [],
      datePosted: '2025-09-19'
    },
    {
      id: 'TASK-010',
      title: 'Performance Optimization for Large Datasets',
      description: 'Optimize rendering and calculations for spreadsheets with 100,000+ cells using virtual scrolling, web workers, and lazy loading.',
      difficulty: 'Expert',
      category: 'Frontend',
      estimatedHours: 50,
      reward: 150000,
      priority: 'Critical',
      status: 'Open',
      requirements: [
        'Virtual scrolling implementation',
        'Web Workers expertise',
        'Performance profiling skills',
        'Memory management knowledge'
      ],
      tags: ['performance', 'optimization', 'virtual-scrolling', 'web-workers'],
      interestedDevs: [],
      datePosted: '2025-09-21'
    },
    {
      id: 'TASK-011',
      title: 'Macro Recording and Playback',
      description: 'Implement macro recording system to capture user actions and replay them, with basic scripting support for automation.',
      difficulty: 'Hard',
      category: 'Frontend',
      estimatedHours: 35,
      reward: 90000,
      priority: 'Low',
      status: 'Open',
      requirements: [
        'Event recording and replay',
        'Scripting language design',
        'Security considerations',
        'User action tracking'
      ],
      tags: ['macros', 'automation', 'scripting', 'recording'],
      interestedDevs: [],
      datePosted: '2025-09-18'
    },
    {
      id: 'TASK-012',
      title: 'Accessibility and Screen Reader Support',
      description: 'Ensure full WCAG 2.1 AA compliance with proper ARIA labels, keyboard navigation, and screen reader compatibility.',
      difficulty: 'Medium',
      category: 'Frontend',
      estimatedHours: 30,
      reward: 70000,
      priority: 'High',
      status: 'Open',
      requirements: [
        'WCAG guidelines knowledge',
        'ARIA implementation',
        'Screen reader testing',
        'Keyboard navigation expertise'
      ],
      tags: ['accessibility', 'a11y', 'wcag', 'aria'],
      interestedDevs: [],
      datePosted: '2025-09-20'
    }
  ];

  const filteredTasks = tasks.filter(task => {
    const difficultyMatch = selectedDifficulty === 'All' || task.difficulty === selectedDifficulty;
    const categoryMatch = selectedCategory === 'All' || task.category === selectedCategory;
    const statusMatch = selectedStatus === 'All' || task.status === selectedStatus;
    return difficultyMatch && categoryMatch && statusMatch;
  });

  const handleContactSubmit = (taskId: string) => {
    // Here you would implement the actual contact form submission
    console.log('Contact form submitted for task:', taskId, contactForm);
    setShowContactForm(null);
    setContactForm({
      name: '',
      email: '',
      github: '',
      message: '',
      experience: ''
    });
    alert('Your interest has been registered! We will contact you soon.');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return '#4CAF50';
      case 'Medium': return '#FF9800';
      case 'Hard': return '#F44336';
      case 'Expert': return '#9C27B0';
      default: return '#666';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Low': return '#4CAF50';
      case 'Medium': return '#FF9800';
      case 'High': return '#F44336';
      case 'Critical': return '#D32F2F';
      default: return '#666';
    }
  };

  return (
    <div className="tasks-page">
      <SpreadsheetTaskbar 
        isAuthenticated={false}
        currentUser={null}
        onLogout={() => {}}
      />
      
      {/* Header */}
      <div className="tasks-header-links">
        <a href="/contributions" className="header-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Contributions
        </a>
        <a href="/docs" className="header-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            <path d="M14 2v6h6"/>
            <path d="M16 13H8"/>
            <path d="M16 17H8"/>
            <path d="M10 9H8"/>
          </svg>
          Documentation
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
          GitHub
        </a>
      </div>

      <div className="tasks-container">
        {/* Hero Section */}
        <section className="tasks-hero">
          <h1>Development Tasks</h1>
          <p className="tasks-tagline">
            Help build the future of decentralized spreadsheets and earn $BSHEETS tokens
          </p>
          
          {/* Quick Stats */}
          <div className="tasks-stats">
            <div className="stat-card">
              <div className="stat-value">{tasks.filter(t => t.status === 'Open').length}</div>
              <div className="stat-label">Open Tasks</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{tasks.reduce((sum, t) => sum + t.reward, 0).toLocaleString()}</div>
              <div className="stat-label">Total Rewards</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{tasks.filter(t => t.interestedDevs.length > 0).length}</div>
              <div className="stat-label">Active Interest</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{tasks.filter(t => t.status === 'Completed').length}</div>
              <div className="stat-label">Completed</div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="tasks-filters">
          <div className="filter-group">
            <label>Status:</label>
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              <option value="All">All Status</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Under Review">Under Review</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Difficulty:</label>
            <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Category:</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="All">All Categories</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Blockchain">Blockchain</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Testing">Testing</option>
              <option value="Documentation">Documentation</option>
            </select>
          </div>
        </section>

        {/* Tasks List */}
        <section className="tasks-list-section">
          <h2>Available Tasks ({filteredTasks.length})</h2>
          <div className="tasks-list">
            {filteredTasks.map(task => (
              <div key={task.id} className="task-card">
                <div className="task-header">
                  <div className="task-title-section">
                    <h3>{task.title}</h3>
                    <div className="task-badges">
                      <span className="badge difficulty" style={{ backgroundColor: getDifficultyColor(task.difficulty) }}>
                        {task.difficulty}
                      </span>
                      <span className="badge category">{task.category}</span>
                      <span className="badge priority" style={{ backgroundColor: getPriorityColor(task.priority) }}>
                        {task.priority}
                      </span>
                      <span className="badge status">{task.status}</span>
                    </div>
                  </div>
                  <div className="task-reward">
                    <div className="reward-amount">{task.reward.toLocaleString()}</div>
                    <div className="reward-label">$BSHEETS</div>
                  </div>
                </div>

                <p className="task-description">{task.description}</p>

                <div className="task-details">
                  <div className="task-meta">
                    <span><strong>Estimated:</strong> {task.estimatedHours} hours</span>
                    <span><strong>Posted:</strong> {new Date(task.datePosted).toLocaleDateString()}</span>
                    {task.deadline && (
                      <span><strong>Deadline:</strong> {new Date(task.deadline).toLocaleDateString()}</span>
                    )}
                    {task.interestedDevs.length > 0 && (
                      <span><strong>Interest:</strong> {task.interestedDevs.length} developers</span>
                    )}
                  </div>

                  <div className="task-requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {task.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="task-tags">
                    {task.tags.map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="task-actions">
                  {task.status === 'Open' && (
                    <button 
                      className="register-interest-btn"
                      onClick={() => setShowContactForm(task.id)}
                    >
                      Register Interest
                    </button>
                  )}
                  {task.assignedTo && (
                    <span className="assigned-to">Assigned to: @{task.assignedTo}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Get Started */}
        <section className="getting-started-section">
          <h2>How to Get Started</h2>
          <div className="getting-started-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Browse Tasks</h3>
              <p>Review available tasks and find ones that match your skills and interests</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Register Interest</h3>
              <p>Click "Register Interest" and fill out the contact form with your details</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Get Assigned</h3>
              <p>We'll review your application and assign the task if you're a good fit</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Build & Earn</h3>
              <p>Complete the task, submit a PR, and earn $BSHEETS tokens upon approval</p>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="modal-overlay" onClick={() => setShowContactForm(null)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Register Interest</h3>
              <button onClick={() => setShowContactForm(null)} className="close-btn">✕</button>
            </div>
            
            <div className="modal-content">
              <p>Task: <strong>{tasks.find(t => t.id === showContactForm)?.title}</strong></p>
              
              <form onSubmit={(e) => { e.preventDefault(); handleContactSubmit(showContactForm); }}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label>GitHub Username *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.github}
                    onChange={(e) => setContactForm({...contactForm, github: e.target.value})}
                    placeholder="your-github-username"
                  />
                </div>
                
                <div className="form-group">
                  <label>Relevant Experience *</label>
                  <textarea
                    required
                    value={contactForm.experience}
                    onChange={(e) => setContactForm({...contactForm, experience: e.target.value})}
                    placeholder="Describe your relevant experience for this task..."
                    rows={4}
                  />
                </div>
                
                <div className="form-group">
                  <label>Additional Message</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Any additional information or questions..."
                    rows={3}
                  />
                </div>
                
                <div className="modal-actions">
                  <button type="button" onClick={() => setShowContactForm(null)} className="cancel-btn">
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksPage;