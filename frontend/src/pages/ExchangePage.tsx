import React, { useState, useEffect } from 'react';
import './ExchangePage.css';

interface SpreadsheetListing {
  id: string;
  title: string;
  description: string;
  owner: string;
  price: number;
  currency: 'BSV' | 'USD';
  category: string;
  rowCount: number;
  columnCount: number;
  lastUpdated: string;
  tags: string[];
  preview?: string;
  revenue?: number;
  shares?: number;
  dividendYield?: number;
}

const ExchangePage: React.FC = () => {
  const [listings, setListings] = useState<SpreadsheetListing[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'revenue' | 'updated'>('updated');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Mock data for demonstration
  useEffect(() => {
    const mockListings: SpreadsheetListing[] = [
      {
        id: '1',
        title: 'E-commerce Sales Dashboard',
        description: 'Real-time sales tracking with automated profit calculations',
        owner: '@bitcoinmerchant',
        price: 0.001,
        currency: 'BSV',
        category: 'Business',
        rowCount: 1250,
        columnCount: 15,
        lastUpdated: '2024-01-15',
        tags: ['sales', 'analytics', 'dashboard'],
        revenue: 0.05,
        shares: 1000,
        dividendYield: 8.5
      },
      {
        id: '2',
        title: 'Crypto Portfolio Tracker',
        description: 'Track multiple cryptocurrency investments with live pricing',
        owner: '@cryptotrader',
        price: 0.005,
        currency: 'BSV',
        category: 'Finance',
        rowCount: 500,
        columnCount: 25,
        lastUpdated: '2024-01-14',
        tags: ['crypto', 'portfolio', 'tracking'],
        revenue: 0.12,
        shares: 500,
        dividendYield: 12.3
      },
      {
        id: '3',
        title: 'Weather Data Analytics',
        description: 'Historical weather data with predictive modeling formulas',
        owner: '@weatherpro',
        price: 0.002,
        currency: 'BSV',
        category: 'Data',
        rowCount: 10000,
        columnCount: 30,
        lastUpdated: '2024-01-13',
        tags: ['weather', 'data', 'analytics'],
        revenue: 0.08,
        shares: 750,
        dividendYield: 6.2
      },
      {
        id: '4',
        title: 'Project Management Template',
        description: 'Complete project tracking with Gantt chart formulas',
        owner: '@projectmanager',
        price: 0.0015,
        currency: 'BSV',
        category: 'Business',
        rowCount: 300,
        columnCount: 20,
        lastUpdated: '2024-01-12',
        tags: ['project', 'management', 'template'],
        revenue: 0.03,
        shares: 200,
        dividendYield: 15.7
      }
    ];
    setListings(mockListings);
  }, []);

  const filteredListings = listings
    .filter(listing => 
      (filterCategory === 'all' || listing.category.toLowerCase() === filterCategory) &&
      (searchTerm === '' || 
       listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       listing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       listing.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price': return a.price - b.price;
        case 'revenue': return (b.revenue || 0) - (a.revenue || 0);
        case 'updated': return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        default: return 0;
      }
    });

  return (
    <div className="exchange-page">
      <div className="exchange-header">
        <h1>
          <img 
            src="/bitcoin-watercolor-icon.png" 
            alt="Bitcoin" 
            className="bitcoin-icon-beveled"
            style={{ width: '32px', height: '32px', marginRight: '12px', verticalAlign: 'middle' }}
          />
          Bitcoin Spreadsheet Exchange
        </h1>
        <p>Discover, buy, and sell data-rich spreadsheets. Own shares in revenue-generating datasets.</p>
      </div>

      <div className="exchange-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search spreadsheets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filters">
          <select 
            value={filterCategory} 
            onChange={(e) => setFilterCategory(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Categories</option>
            <option value="business">Business</option>
            <option value="finance">Finance</option>
            <option value="data">Data</option>
            <option value="analytics">Analytics</option>
          </select>
          
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value as 'price' | 'revenue' | 'updated')}
            className="sort-select"
          >
            <option value="updated">Latest Updated</option>
            <option value="price">Price (Low to High)</option>
            <option value="revenue">Highest Revenue</option>
          </select>
        </div>
      </div>

      <div className="listings-grid">
        {filteredListings.map(listing => (
          <div key={listing.id} className="listing-card">
            <div className="listing-header">
              <h3>{listing.title}</h3>
              <div className="listing-price">
                {listing.price} {listing.currency}
              </div>
            </div>
            
            <p className="listing-description">{listing.description}</p>
            
            <div className="listing-stats">
              <div className="stat">
                <span className="stat-label">Size:</span>
                <span className="stat-value">{listing.rowCount} × {listing.columnCount}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Owner:</span>
                <span className="stat-value">{listing.owner}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Updated:</span>
                <span className="stat-value">{listing.lastUpdated}</span>
              </div>
            </div>

            {listing.revenue && (
              <div className="revenue-info">
                <div className="revenue-stat">
                  <span className="revenue-label">Monthly Revenue:</span>
                  <span className="revenue-value">{listing.revenue} BSV</span>
                </div>
                <div className="shares-info">
                  <span className="shares-available">{listing.shares} shares available</span>
                  <span className="dividend-yield">{listing.dividendYield}% yield</span>
                </div>
              </div>
            )}
            
            <div className="listing-tags">
              {listing.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
            
            <div className="listing-actions">
              <button className="btn-preview">Preview</button>
              <button className="btn-buy">Buy Access</button>
              {listing.shares && listing.shares > 0 && (
                <button className="btn-invest">Buy Shares</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredListings.length === 0 && (
        <div className="no-results">
          <p>No spreadsheets found matching your criteria.</p>
        </div>
      )}
      
      <div className="exchange-footer">
        <p>💡 Want to list your spreadsheet? <button className="link-button">Create Listing</button></p>
        <p>🔒 All transactions are secured by Bitcoin blockchain technology</p>
      </div>
    </div>
  );
};

export default ExchangePage;