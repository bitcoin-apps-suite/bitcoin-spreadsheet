import React from 'react';

interface SpreadsheetExchangeSidebarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
  filterGenre: string;
  setFilterGenre: (genre: string) => void;
  isDarkMode?: boolean;
  width?: number;
  isResizing?: boolean;
  onMouseDown?: (e: React.MouseEvent) => void;
}

const SpreadsheetExchangeSidebar: React.FC<SpreadsheetExchangeSidebarProps> = ({
  activeCategory,
  setActiveCategory,
  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  filterGenre,
  setFilterGenre,
  isDarkMode = false,
  width = 320,
  isResizing = false,
  onMouseDown
}) => {
  const sidebarStyle: React.CSSProperties = {
    width: `${width}px`,
    minWidth: '280px',
    maxWidth: '600px',
    height: '100%',
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f8f9fa',
    borderRight: `1px solid ${isDarkMode ? '#333' : '#dee2e6'}`,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    cursor: isResizing ? 'ew-resize' : 'default'
  };

  const categories = [
    { id: 'all', label: 'All Spreadsheets' },
    { id: 'business', label: 'Business' },
    { id: 'finance', label: 'Finance' },
    { id: 'data', label: 'Data Analysis' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'templates', label: 'Templates' },
    { id: 'nft', label: 'NFT Collections' }
  ];

  const genres: {[key: string]: string[]} = {
    'business': ['Dashboard', 'Reports', 'Planning', 'Template', 'Operations'],
    'finance': ['Portfolio', 'Trading', 'Banking', 'Accounting', 'Investment'],
    'data': ['Analytics', 'Visualization', 'Research', 'Statistics', 'Modeling'],
    'analytics': ['Metrics', 'KPIs', 'Forecasting', 'Insights', 'Trends'],
    'templates': ['Starter', 'Advanced', 'Custom', 'Industry', 'Personal'],
    'nft': ['Art', 'Gaming', 'Collectibles', 'Utility', 'DeFi']
  };

  const sortOptions = [
    { id: 'rank', label: 'Top Ranked' },
    { id: 'updated', label: 'Recently Updated' },
    { id: 'price', label: 'Highest Price' },
    { id: 'revenue', label: 'Highest Revenue' },
    { id: 'volume', label: 'Trading Volume' },
    { id: 'holders', label: 'Most Holders' }
  ];

  return (
    <div style={sidebarStyle}>
      {/* Header */}
      <div style={{
        padding: '20px',
        borderBottom: `1px solid ${isDarkMode ? '#333' : '#dee2e6'}`
      }}>
        <h2 style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: 'bold',
          color: isDarkMode ? '#e0e0e0' : '#333',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          Exchange
        </h2>
        <p style={{
          margin: '8px 0 0 0',
          fontSize: '13px',
          color: isDarkMode ? '#999' : '#666',
          lineHeight: '1.4'
        }}>
          Browse and trade spreadsheets on the Bitcoin blockchain
        </p>
      </div>

      {/* Categories */}
      <div style={{
        padding: '16px 0',
        borderBottom: `1px solid ${isDarkMode ? '#333' : '#dee2e6'}`
      }}>
        <h3 style={{
          margin: '0 0 12px 20px',
          fontSize: '14px',
          fontWeight: '600',
          color: isDarkMode ? '#b0b0b0' : '#666',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Categories
        </h3>
        <div>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilterCategory(category.id)}
              style={{
                width: '100%',
                padding: '10px 20px',
                border: 'none',
                backgroundColor: filterCategory === category.id 
                  ? (isDarkMode ? '#2a2a2a' : '#e3f2fd')
                  : 'transparent',
                color: filterCategory === category.id
                  ? (isDarkMode ? '#1976d2' : '#1976d2')
                  : (isDarkMode ? '#e0e0e0' : '#333'),
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.2s ease',
                borderLeft: filterCategory === category.id 
                  ? '3px solid #1976d2' 
                  : '3px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (filterCategory !== category.id) {
                  e.currentTarget.style.backgroundColor = isDarkMode ? '#2a2a2a' : '#f5f5f5';
                }
              }}
              onMouseLeave={(e) => {
                if (filterCategory !== category.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Genres */}
      {filterCategory !== 'all' && genres[filterCategory] && (
        <div style={{
          padding: '16px 0',
          borderBottom: `1px solid ${isDarkMode ? '#333' : '#dee2e6'}`
        }}>
          <h3 style={{
            margin: '0 0 12px 20px',
            fontSize: '14px',
            fontWeight: '600',
            color: isDarkMode ? '#b0b0b0' : '#666',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Genre
          </h3>
          <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <button
              onClick={() => setFilterGenre('all')}
              style={{
                padding: '6px 10px',
                border: 'none',
                backgroundColor: filterGenre === 'all' ? (isDarkMode ? '#2a2a2a' : '#e3f2fd') : 'transparent',
                color: filterGenre === 'all' ? '#1976d2' : (isDarkMode ? '#e0e0e0' : '#333'),
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '13px',
                borderRadius: '4px',
                transition: 'all 0.2s ease'
              }}
            >
              All Genres
            </button>
            {genres[filterCategory].map(genre => (
              <button
                key={genre}
                onClick={() => setFilterGenre(genre.toLowerCase())}
                style={{
                  padding: '6px 10px',
                  border: 'none',
                  backgroundColor: filterGenre === genre.toLowerCase() ? (isDarkMode ? '#2a2a2a' : '#e3f2fd') : 'transparent',
                  color: filterGenre === genre.toLowerCase() ? '#1976d2' : (isDarkMode ? '#e0e0e0' : '#333'),
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '13px',
                  borderRadius: '4px',
                  transition: 'all 0.2s ease'
                }}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sort Options */}
      <div style={{
        padding: '16px 0',
        borderBottom: `1px solid ${isDarkMode ? '#333' : '#dee2e6'}`
      }}>
        <h3 style={{
          margin: '0 0 12px 20px',
          fontSize: '14px',
          fontWeight: '600',
          color: isDarkMode ? '#b0b0b0' : '#666',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Sort By
        </h3>
        <div style={{ padding: '0 20px' }}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
              borderRadius: '6px',
              backgroundColor: isDarkMode ? '#2a2a2a' : '#fff',
              color: isDarkMode ? '#e0e0e0' : '#333',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Market Stats */}
      <div style={{
        padding: '16px 20px',
        borderBottom: `1px solid ${isDarkMode ? '#333' : '#dee2e6'}`
      }}>
        <h3 style={{
          margin: '0 0 12px 0',
          fontSize: '14px',
          fontWeight: '600',
          color: isDarkMode ? '#b0b0b0' : '#666',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Market Stats
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: isDarkMode ? '#e0e0e0' : '#333'
          }}>
            <span>NFTs Listed:</span>
            <span style={{ fontWeight: 'bold', color: '#9c27b0' }}>342</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: isDarkMode ? '#e0e0e0' : '#333'
          }}>
            <span>24h Volume:</span>
            <span style={{ fontWeight: 'bold', color: '#4caf50' }}>12.4 BSV</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: isDarkMode ? '#e0e0e0' : '#333'
          }}>
            <span>Total Holders:</span>
            <span style={{ fontWeight: 'bold', color: '#1976d2' }}>1,234</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: isDarkMode ? '#e0e0e0' : '#333'
          }}>
            <span>Market Cap:</span>
            <span style={{ fontWeight: 'bold', color: '#ff9500' }}>89.3 BSV</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: isDarkMode ? '#e0e0e0' : '#333'
          }}>
            <span>Avg Dividend:</span>
            <span style={{ fontWeight: 'bold', color: '#4caf50' }}>0.00012 BSV</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{
        padding: '16px 20px',
        marginTop: 'auto'
      }}>
        <h3 style={{
          margin: '0 0 12px 0',
          fontSize: '14px',
          fontWeight: '600',
          color: isDarkMode ? '#b0b0b0' : '#666',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Quick Actions
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button style={{
            padding: '8px 12px',
            backgroundColor: '#9c27b0',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}>
            Mint NFT Spreadsheet
          </button>
          <button style={{
            padding: '8px 12px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}>
            List My NFT
          </button>
          <button style={{
            padding: '8px 12px',
            backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f5f5',
            color: isDarkMode ? '#e0e0e0' : '#333',
            border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
            borderRadius: '6px',
            fontSize: '13px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}>
            My NFT Portfolio
          </button>
        </div>
      </div>

      {/* Resize Handle */}
      {onMouseDown && (
        <div
          onMouseDown={onMouseDown}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            cursor: 'ew-resize',
            backgroundColor: isResizing ? '#1976d2' : 'transparent',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => {
            if (!isResizing) {
              e.currentTarget.style.backgroundColor = 'rgba(25, 118, 210, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isResizing) {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
        />
      )}
    </div>
  );
};

export default SpreadsheetExchangeSidebar;