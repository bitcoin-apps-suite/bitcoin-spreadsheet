import React, { useState, useEffect } from 'react';
import { HandCashService, HandCashUser } from '../services/HandCashService';
import { BitcoinService } from '../services/BitcoinService';
import './EnhancedConnectionsModal.css';
import './EnhancedConnectionsModal.mobile.css';

interface EnhancedConnectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: HandCashUser) => void;
  bitcoinService: BitcoinService | null;
  isDarkMode?: boolean;
  onDataImport?: (data: any) => void;
}

interface ConnectedAccount {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  type: string;
  balance?: number; // BSV balance
}

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  bsvCredits: number;
  features: string[];
  popular?: boolean;
}

const EnhancedConnectionsModal: React.FC<EnhancedConnectionsModalProps> = ({ 
  isOpen, 
  onClose, 
  onLogin,
  bitcoinService,
  isDarkMode = false,
  onDataImport
}) => {
  const [activeTab, setActiveTab] = useState<'connections' | 'subscriptions' | 'topup'>('connections');
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [connectedAccounts, setConnectedAccounts] = useState<ConnectedAccount[]>([]);
  const [handcashService] = useState(new HandCashService());
  const [bsvBalance, setBsvBalance] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleServiceConnect = (serviceName: string) => {
    setIsLoading(serviceName);
    
    // Simulate connection process
    setTimeout(() => {
      const currentConnected = JSON.parse(localStorage.getItem('connectedServices') || '[]');
      if (!currentConnected.includes(serviceName)) {
        const updated = [...currentConnected, serviceName];
        localStorage.setItem('connectedServices', JSON.stringify(updated));
        
        // Update the connected accounts state
        setConnectedAccounts(prev => [...prev, {
          id: serviceName.toLowerCase(),
          name: serviceName,
          type: serviceName.toLowerCase(),
          balance: Math.random() * 0.1 // Random small BSV balance
        }]);
      }
      
      setIsLoading(null);
      
      // Dispatch event to update parent component
      window.dispatchEvent(new CustomEvent('servicesUpdated'));
    }, 1500);
  };

  const subscriptionPlans: SubscriptionPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: 9.99,
      bsvCredits: 0.01,
      features: [
        '10 Spreadsheets',
        '1,000 Blockchain Transactions',
        'Revenue Share Tokenization',
        'Basic Import/Export',
        'Email Support'
      ]
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 29.99,
      bsvCredits: 0.05,
      features: [
        'Unlimited Spreadsheets',
        '10,000 Blockchain Transactions',
        'Advanced Import/Export',
        'QuickBooks Integration',
        'Revenue Share Tokenization',
        'Priority Support'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 99.99,
      bsvCredits: 0.20,
      features: [
        'Everything in Pro',
        'Unlimited Transactions',
        'Custom Integrations',
        'API Access',
        'Advanced Analytics',
        'Dedicated Support',
        'White Label Options'
      ]
    }
  ];

  useEffect(() => {
    loadConnectedAccounts();
    checkBsvBalance();
  }, []);

  const loadConnectedAccounts = () => {
    const accounts: ConnectedAccount[] = [];
    
    // Check HandCash
    if (handcashService.isAuthenticated()) {
      const user = handcashService.getCurrentUser();
      if (user) {
        accounts.push({
          id: 'handcash',
          name: `$${user.handle}`,
          email: user.paymail,
          avatar: user.avatarUrl,
          type: 'HandCash Wallet',
          balance: 0.05 // Mock balance
        });
      }
    }
    
    // Check other integrations
    ['google', 'microsoft', 'quickbooks'].forEach(service => {
      const stored = localStorage.getItem(`${service}User`);
      if (stored) {
        const user = JSON.parse(stored);
        accounts.push({
          id: service,
          name: user.name || user.companyName,
          email: user.email,
          type: service.charAt(0).toUpperCase() + service.slice(1)
        });
      }
    });
    
    setConnectedAccounts(accounts);
  };

  const checkBsvBalance = () => {
    const mockBalance = parseFloat(localStorage.getItem('bsvBalance') || '0.001');
    setBsvBalance(mockBalance);
  };


  const handleQuickBooksConnect = async () => {
    setIsLoading('quickbooks');
    
    // Simulate OAuth flow
    setTimeout(() => {
      const mockQBUser = {
        companyName: 'Your Company Inc.',
        email: 'accounting@company.com',
        companyId: 'QB123456'
      };
      
      localStorage.setItem('quickbooksUser', JSON.stringify(mockQBUser));
      setConnectedAccounts(prev => [...prev, {
        id: 'quickbooks',
        name: mockQBUser.companyName,
        email: mockQBUser.email,
        type: 'QuickBooks'
      }]);
      
      setIsLoading(null);
      alert('QuickBooks connected! You can now sync your financial data.');
    }, 2000);
  };

  const handleSubscribe = async (planId: string) => {
    setSelectedPlan(planId);
    setIsLoading('subscribe');
    
    const plan = subscriptionPlans.find(p => p.id === planId);
    if (!plan) return;
    
    // Simulate payment processing
    setTimeout(() => {
      // Add BSV credits
      const newBalance = bsvBalance + plan.bsvCredits;
      setBsvBalance(newBalance);
      localStorage.setItem('bsvBalance', newBalance.toString());
      localStorage.setItem('subscription', planId);
      
      setIsLoading(null);
      alert(`Subscribed to ${plan.name} plan! Added ${plan.bsvCredits} BSV to your wallet.`);
    }, 2000);
  };

  const handleTopUp = async (amount: number) => {
    setIsLoading('topup');
    
    // Simulate BSV purchase
    setTimeout(() => {
      const bsvAmount = amount / 50; // Mock exchange rate: $50/BSV
      const newBalance = bsvBalance + bsvAmount;
      setBsvBalance(newBalance);
      localStorage.setItem('bsvBalance', newBalance.toString());
      
      setIsLoading(null);
      alert(`Added ${bsvAmount.toFixed(4)} BSV to your wallet!`);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`connections-modal ${isDarkMode ? 'dark' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Data Connections & Subscriptions</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M16 1.61L14.39 0L8 6.39L1.61 0L0 1.61L6.39 8L0 14.39L1.61 16L8 9.61L14.39 16L16 14.39L9.61 8L16 1.61Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* Wallet Options - HandCash and Bitcoin Wallet */}
        <div className="wallet-options">
          <div className="handcash-card">
            <img 
              src="https://handcash.io/favicon.ico"
              alt="HandCash"
              className="handcash-logo-large"
              style={{ width: '56px', height: '56px', borderRadius: '12px' }}
            />
            <div className="handcash-info">
              <div className="handcash-title">HandCash Wallet</div>
              <div className="handcash-description">
                Connect your Bitcoin SV wallet for secure blockchain transactions. We don't store your private keys.
              </div>
            </div>
            <button 
              className="handcash-connect-btn"
              onClick={() => handcashService.login()}
            >
              Connect Wallet
            </button>
          </div>
          
          <div className="bitcoin-wallet-card">
            <img 
              src="/bitcoin-wallet-icon.jpg"
              alt="Bitcoin Wallet"
              className="bitcoin-wallet-logo-large"
              style={{ width: '56px', height: '56px', borderRadius: '12px' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
            <div className="bitcoin-wallet-icon-fallback" style={{ display: 'none' }}>
              <svg 
                width="56" 
                height="56" 
                viewBox="0 0 56 56" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ borderRadius: '12px' }}
              >
                <rect width="56" height="56" rx="12" fill="url(#bitcoinGradient)"/>
                <path 
                  d="M20 16h10c3.314 0 6 2.686 6 6 0 1.657-.671 3.157-1.757 4.243.686.686 1.11 1.636 1.11 2.686 0 2.071-1.686 3.757-3.757 3.757H20V16zm4 3v6h6c1.657 0 3-1.343 3-3s-1.343-3-3-3h-6zm0 9v6h8.596c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5H24z" 
                  fill="white"
                />
                <defs>
                  <linearGradient id="bitcoinGradient" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFD700"/>
                    <stop offset="1" stopColor="#F5C500"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="bitcoin-wallet-info">
              <div className="bitcoin-wallet-title">Bitcoin Wallet</div>
              <div className="bitcoin-wallet-description">
                Our native Bitcoin wallet with seamless spreadsheet integration. Enhanced security and built-in features.
              </div>
            </div>
            <button 
              className="bitcoin-wallet-coming-soon-btn"
              disabled
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'connections' ? 'active' : ''}`}
            onClick={() => setActiveTab('connections')}
          >
            Data Connections
          </button>
          <button 
            className={`tab-btn ${activeTab === 'subscriptions' ? 'active' : ''}`}
            onClick={() => setActiveTab('subscriptions')}
          >
            Subscriptions
          </button>
          <button 
            className={`tab-btn ${activeTab === 'topup' ? 'active' : ''}`}
            onClick={() => setActiveTab('topup')}
          >
            BSV Top-up
          </button>
        </div>

        <div className="modal-content">
          {activeTab === 'connections' && (
            <div className="services-section">
              <div className="section-label">All Data Sources</div>
              <div className="services-grid">
              {/* Enterprise */}
              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg"
                  alt="Salesforce"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(51%) sepia(85%) saturate(1743%) hue-rotate(166deg) brightness(96%) contrast(101%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Salesforce</div>
                  <div className="service-desc">CRM & Sales Pipeline</div>
                </div>
                <button 
                  className="service-connect"
                  onClick={() => handleServiceConnect('Salesforce')}
                  disabled={isLoading === 'Salesforce'}
                >
                  {isLoading === 'Salesforce' ? 'Connecting...' : 'Connect'}
                </button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg"
                  alt="HubSpot"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(62%) sepia(56%) saturate(3585%) hue-rotate(338deg) brightness(101%) contrast(101%)' }}
                />
                <div className="service-info">
                  <div className="service-name">HubSpot</div>
                  <div className="service-desc">Marketing & CRM</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg"
                  alt="Stripe"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(89%) saturate(1464%) hue-rotate(222deg) brightness(103%) contrast(102%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Stripe</div>
                  <div className="service-desc">Payment Processing</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg"
                  alt="Shopify"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(68%) sepia(23%) saturate(1076%) hue-rotate(48deg) brightness(94%) contrast(90%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Shopify</div>
                  <div className="service-desc">E-commerce Data</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mailchimp.svg"
                  alt="Mailchimp"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(81%) sepia(51%) saturate(4072%) hue-rotate(315deg) brightness(100%) contrast(101%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Mailchimp</div>
                  <div className="service-desc">Email Marketing</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              {/* Financial */}
              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/quickbooks.svg"
                  alt="QuickBooks"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(85%) saturate(1424%) hue-rotate(75deg) brightness(96%) contrast(98%)' }}
                />
                <div className="service-info">
                  <div className="service-name">QuickBooks</div>
                  <div className="service-desc">Accounting Platform</div>
                </div>
                <button 
                  className="service-connect"
                  onClick={() => handleQuickBooksConnect()}
                  disabled={isLoading === 'quickbooks'}
                >
                  {isLoading === 'quickbooks' ? 'Connecting...' : 'Connect'}
                </button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/xero.svg"
                  alt="Xero"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(56%) sepia(96%) saturate(1517%) hue-rotate(163deg) brightness(101%) contrast(97%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Xero</div>
                  <div className="service-desc">Cloud Accounting</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/plaid.svg"
                  alt="Plaid"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(99%) saturate(1794%) hue-rotate(163deg) brightness(95%) contrast(101%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Plaid</div>
                  <div className="service-desc">Banking Data</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg"
                  alt="PayPal"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(1946%) hue-rotate(200deg) brightness(97%) contrast(102%)' }}
                />
                <div className="service-info">
                  <div className="service-name">PayPal</div>
                  <div className="service-desc">Payment Gateway</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/square.svg"
                  alt="Square"
                  className="service-logo"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="service-info">
                  <div className="service-name">Square</div>
                  <div className="service-desc">Point of Sale</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              {/* Analytics & Databases */}
              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googleanalytics.svg"
                  alt="Google Analytics"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(68%) saturate(1251%) hue-rotate(356deg) brightness(97%) contrast(95%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Google Analytics</div>
                  <div className="service-desc">Web Analytics</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg"
                  alt="PostgreSQL"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(39%) sepia(27%) saturate(1248%) hue-rotate(174deg) brightness(93%) contrast(87%)' }}
                />
                <div className="service-info">
                  <div className="service-name">PostgreSQL</div>
                  <div className="service-desc">Database</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg"
                  alt="MongoDB"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(42%) sepia(76%) saturate(518%) hue-rotate(76deg) brightness(98%) contrast(96%)' }}
                />
                <div className="service-info">
                  <div className="service-name">MongoDB</div>
                  <div className="service-desc">NoSQL Database</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/snowflake.svg"
                  alt="Snowflake"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(92%) saturate(1457%) hue-rotate(163deg) brightness(100%) contrast(95%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Snowflake</div>
                  <div className="service-desc">Data Warehouse</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redis.svg"
                  alt="Redis"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(35%) sepia(82%) saturate(2512%) hue-rotate(343deg) brightness(102%) contrast(97%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Redis</div>
                  <div className="service-desc">Cache Database</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              {/* Productivity & Collaboration */}
              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlesheets.svg"
                  alt="Google Sheets"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(44%) sepia(81%) saturate(542%) hue-rotate(91deg) brightness(96%) contrast(94%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Google Sheets</div>
                  <div className="service-desc">Spreadsheets</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftexcel.svg"
                  alt="Excel"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(51%) saturate(617%) hue-rotate(106deg) brightness(94%) contrast(91%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Excel Online</div>
                  <div className="service-desc">Microsoft 365</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/airtable.svg"
                  alt="Airtable"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(66%) sepia(97%) saturate(1206%) hue-rotate(359deg) brightness(104%) contrast(101%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Airtable</div>
                  <div className="service-desc">Database Platform</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg"
                  alt="Notion"
                  className="service-logo"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="service-info">
                  <div className="service-name">Notion</div>
                  <div className="service-desc">Workspace</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg"
                  alt="Slack"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(85%) saturate(1240%) hue-rotate(226deg) brightness(100%) contrast(95%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Slack</div>
                  <div className="service-desc">Team Chat</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              {/* API & Custom Integrations */}
              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postman.svg"
                  alt="REST API"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(89%) saturate(1108%) hue-rotate(201deg) brightness(101%) contrast(101%)' }}
                />
                <div className="service-info">
                  <div className="service-name">REST API</div>
                  <div className="service-desc">Custom Endpoint</div>
                </div>
                <button className="service-connect">Configure</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zapier.svg"
                  alt="Zapier"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(51%) sepia(96%) saturate(2975%) hue-rotate(355deg) brightness(101%) contrast(103%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Zapier</div>
                  <div className="service-desc">Automation</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/webhook.svg"
                  alt="Webhooks"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(41%) sepia(98%) saturate(1240%) hue-rotate(226deg) brightness(100%) contrast(95%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Webhooks</div>
                  <div className="service-desc">Real-time Events</div>
                </div>
                <button className="service-connect">Configure</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftexcel.svg"
                  alt="CSV/Excel"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(51%) sepia(87%) saturate(493%) hue-rotate(89deg) brightness(101%) contrast(102%)' }}
                />
                <div className="service-info">
                  <div className="service-name">CSV/Excel</div>
                  <div className="service-desc">File Import</div>
                </div>
                <button className="service-connect">Import</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/graphql.svg"
                  alt="GraphQL"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(83%) saturate(6269%) hue-rotate(308deg) brightness(96%) contrast(95%)' }}
                />
                <div className="service-info">
                  <div className="service-name">GraphQL</div>
                  <div className="service-desc">API Query</div>
                </div>
                <button className="service-connect">Configure</button>
              </div>

              {/* Additional Popular Services */}
              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twilio.svg"
                  alt="Twilio"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(25%) sepia(89%) saturate(4174%) hue-rotate(346deg) brightness(102%) contrast(97%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Twilio</div>
                  <div className="service-desc">SMS & Voice</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg"
                  alt="Discord"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(95%) saturate(1055%) hue-rotate(207deg) brightness(98%) contrast(102%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Discord</div>
                  <div className="service-desc">Community Chat</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sendgrid.svg"
                  alt="SendGrid"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(96%) saturate(1457%) hue-rotate(163deg) brightness(100%) contrast(95%)' }}
                />
                <div className="service-info">
                  <div className="service-name">SendGrid</div>
                  <div className="service-desc">Email API</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
                  alt="GitHub"
                  className="service-logo"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="service-info">
                  <div className="service-name">GitHub</div>
                  <div className="service-desc">Code Repository</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jira.svg"
                  alt="Jira"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(1946%) hue-rotate(200deg) brightness(97%) contrast(102%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Jira</div>
                  <div className="service-desc">Project Management</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              {/* Additional Business Data Sources */}
              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg"
                  alt="Twitter/X"
                  className="service-logo"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="service-info">
                  <div className="service-name">Twitter/X</div>
                  <div className="service-desc">Social Media</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                  alt="Instagram"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(32%) sepia(89%) saturate(2196%) hue-rotate(308deg) brightness(101%) contrast(98%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Instagram</div>
                  <div className="service-desc">Social Media</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg"
                  alt="Amazon"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(68%) saturate(1251%) hue-rotate(356deg) brightness(97%) contrast(95%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Amazon</div>
                  <div className="service-desc">E-commerce</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ebay.svg"
                  alt="eBay"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(19%) sepia(99%) saturate(2664%) hue-rotate(216deg) brightness(94%) contrast(101%)' }}
                />
                <div className="service-info">
                  <div className="service-name">eBay</div>
                  <div className="service-desc">Marketplace</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/etsy.svg"
                  alt="Etsy"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(51%) sepia(96%) saturate(2975%) hue-rotate(355deg) brightness(101%) contrast(103%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Etsy</div>
                  <div className="service-desc">Handmade Market</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg"
                  alt="YouTube"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(25%) sepia(89%) saturate(4174%) hue-rotate(346deg) brightness(102%) contrast(97%)' }}
                />
                <div className="service-info">
                  <div className="service-name">YouTube</div>
                  <div className="service-desc">Video Analytics</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg"
                  alt="TikTok"
                  className="service-logo"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="service-info">
                  <div className="service-name">TikTok</div>
                  <div className="service-desc">Short Video</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/coinbase.svg"
                  alt="Coinbase"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(1946%) hue-rotate(200deg) brightness(97%) contrast(102%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Coinbase</div>
                  <div className="service-desc">Crypto Exchange</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/binance.svg"
                  alt="Binance"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(68%) saturate(1251%) hue-rotate(356deg) brightness(97%) contrast(95%)' }}
                />
                <div className="service-info">
                  <div className="service-name">Binance</div>
                  <div className="service-desc">Crypto Exchange</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>

              <div className="service-card">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/woocommerce.svg"
                  alt="WooCommerce"
                  className="service-logo"
                  style={{ filter: 'brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(1946%) hue-rotate(258deg) brightness(97%) contrast(102%)' }}
                />
                <div className="service-info">
                  <div className="service-name">WooCommerce</div>
                  <div className="service-desc">WordPress Store</div>
                </div>
                <button className="service-connect">Connect</button>
              </div>
            </div>
          </div>
          )}

          {activeTab === 'subscriptions' && (
            <div className="subscription-section">
              <div className="subscription-intro">
                <div className="section-label">Choose Your Plan</div>
                <div className="intro-text">
                  All plans include monthly BSV credits automatically added to your HandCash wallet. 
                  Scale your blockchain spreadsheet operations with transparent, predictable pricing.
                </div>
              </div>
              
              <div className="subscription-grid">
                <div className="plan-card">
                  <div className="plan-header">
                    <div className="plan-name">Starter</div>
                    <div className="plan-price">$9.99<span>/month</span></div>
                    <div className="plan-subtitle">Perfect for small teams</div>
                  </div>
                  <div className="plan-features">
                    <div className="feature">✓ 10 Active Spreadsheets</div>
                    <div className="feature">✓ 1,000 Blockchain Transactions</div>
                    <div className="feature">✓ 5 Data Source Connections</div>
                    <div className="feature">✓ Monthly BSV Auto Top-up (0.01 BSV)</div>
                    <div className="feature">✓ Basic Import/Export</div>
                    <div className="feature">✓ Email Support</div>
                  </div>
                  <button className="plan-button" onClick={() => handleSubscribe('starter')}>
                    {isLoading === 'subscribe' && selectedPlan === 'starter' ? 'Processing...' : 'Start Free Trial'}
                  </button>
                  <div className="trial-note">7-day free trial</div>
                </div>

                <div className="plan-card popular">
                  <div className="popular-badge">Most Popular</div>
                  <div className="plan-header">
                    <div className="plan-name">Professional</div>
                    <div className="plan-price">$29.99<span>/month</span></div>
                    <div className="plan-subtitle">For growing businesses</div>
                  </div>
                  <div className="plan-features">
                    <div className="feature">✓ Unlimited Spreadsheets</div>
                    <div className="feature">✓ 10,000 Blockchain Transactions</div>
                    <div className="feature">✓ All 30+ Data Source Connections</div>
                    <div className="feature">✓ Monthly BSV Auto Top-up (0.05 BSV)</div>
                    <div className="feature">✓ Advanced Import/Export</div>
                    <div className="feature">✓ QuickBooks Integration</div>
                    <div className="feature">✓ Revenue Share Tokenization</div>
                    <div className="feature">✓ Priority Support</div>
                  </div>
                  <button className="plan-button" onClick={() => handleSubscribe('pro')}>
                    {isLoading === 'subscribe' && selectedPlan === 'pro' ? 'Processing...' : 'Start Free Trial'}
                  </button>
                  <div className="trial-note">14-day free trial</div>
                </div>

                <div className="plan-card">
                  <div className="plan-header">
                    <div className="plan-name">Enterprise</div>
                    <div className="plan-price">$99.99<span>/month</span></div>
                    <div className="plan-subtitle">For large organizations</div>
                  </div>
                  <div className="plan-features">
                    <div className="feature">✓ Everything in Professional</div>
                    <div className="feature">✓ Unlimited Blockchain Transactions</div>
                    <div className="feature">✓ Monthly BSV Auto Top-up (0.20 BSV)</div>
                    <div className="feature">✓ Custom Data Integrations</div>
                    <div className="feature">✓ API Access & Webhooks</div>
                    <div className="feature">✓ Advanced Analytics Dashboard</div>
                    <div className="feature">✓ Dedicated Account Manager</div>
                    <div className="feature">✓ White Label Options</div>
                    <div className="feature">✓ SLA & 24/7 Support</div>
                  </div>
                  <button className="plan-button" onClick={() => handleSubscribe('enterprise')}>
                    {isLoading === 'subscribe' && selectedPlan === 'enterprise' ? 'Processing...' : 'Contact Sales'}
                  </button>
                  <div className="trial-note">Custom demo available</div>
                </div>
              </div>

              <div className="subscription-footer">
                <div className="footer-note">
                  <strong>All plans include:</strong> End-to-end encryption, automatic blockchain backups, 
                  99.9% uptime SLA, and seamless HandCash wallet integration. BSV credits are automatically 
                  added to your wallet each month - no manual top-ups required.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'topup' && (
            <div className="topup-section">
              <div className="topup-intro">
                <div className="section-label">Add BSV to Your Wallet</div>
                <div className="intro-text">
                  Top up your HandCash wallet to pay for blockchain transactions, data encryption, and spreadsheet operations. 
                  All transactions are processed securely through HandCash - we never handle your private keys.
                </div>
              </div>

              <div className="current-balance">
                <div className="balance-label">Current HandCash Balance:</div>
                <div className="balance-amount">{bsvBalance.toFixed(4)} BSV</div>
                <div className="balance-usd">≈ ${(bsvBalance * 50).toFixed(2)} USD</div>
              </div>

              <div className="topup-explainer">
                <div className="explainer-title">What BSV is used for:</div>
                <div className="explainer-grid">
                  <div className="explainer-item">
                    <div className="explainer-icon">📊</div>
                    <div className="explainer-text">Spreadsheet Storage<br/><span>~$0.001 per save</span></div>
                  </div>
                  <div className="explainer-item">
                    <div className="explainer-icon">🔐</div>
                    <div className="explainer-text">Data Encryption<br/><span>~$0.0001 per cell</span></div>
                  </div>
                  <div className="explainer-item">
                    <div className="explainer-icon">🔄</div>
                    <div className="explainer-text">Data Sync<br/><span>~$0.0005 per sync</span></div>
                  </div>
                  <div className="explainer-item">
                    <div className="explainer-icon">📈</div>
                    <div className="explainer-text">Revenue Tokens<br/><span>~$0.01 per token</span></div>
                  </div>
                </div>
              </div>
              
              <div className="topup-grid">
                <div className="topup-card">
                  <div className="topup-amount">0.01 BSV</div>
                  <div className="topup-price">$0.50</div>
                  <div className="topup-desc">~20 spreadsheet saves</div>
                  <button 
                    className="topup-button" 
                    onClick={() => handleTopUp(0.50)}
                    disabled={isLoading === 'topup'}
                  >
                    {isLoading === 'topup' ? 'Processing...' : 'Add to Wallet'}
                  </button>
                </div>

                <div className="topup-card popular">
                  <div className="popular-badge">Best Value</div>
                  <div className="topup-amount">0.05 BSV</div>
                  <div className="topup-price">$2.50</div>
                  <div className="topup-desc">~100 spreadsheet saves</div>
                  <button 
                    className="topup-button" 
                    onClick={() => handleTopUp(2.50)}
                    disabled={isLoading === 'topup'}
                  >
                    {isLoading === 'topup' ? 'Processing...' : 'Add to Wallet'}
                  </button>
                </div>

                <div className="topup-card">
                  <div className="topup-amount">0.10 BSV</div>
                  <div className="topup-price">$5.00</div>
                  <div className="topup-desc">~200 spreadsheet saves</div>
                  <button 
                    className="topup-button" 
                    onClick={() => handleTopUp(5.00)}
                    disabled={isLoading === 'topup'}
                  >
                    {isLoading === 'topup' ? 'Processing...' : 'Add to Wallet'}
                  </button>
                </div>
              </div>

              <div className="topup-footer">
                <div className="footer-note">
                  <strong>Secure & Transparent:</strong> All payments processed via HandCash. 
                  BSV is added instantly to your wallet. No hidden fees - you only pay for what you use. 
                  Current rate: ~$50 USD per BSV.
                </div>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedConnectionsModal;