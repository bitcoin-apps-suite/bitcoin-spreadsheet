import React, { useState, useEffect, useCallback } from 'react';
import SpreadsheetExchangeSidebar from './SpreadsheetExchangeSidebar';
import '../pages/ExchangePage.css';

interface SpreadsheetListing {
  id: string;
  rank: number;
  title: string;
  description: string;
  author: string;
  authorHandle: string;
  authorType: 'human' | 'ai';
  publishDate: string;
  rowCount: number;
  columnCount: number;
  cellCount: number;
  formulas: number;
  views: number;
  purchases: number;
  holders: number;
  sharesAvailable: number;
  totalShares: number;
  sharesInCirculation: number;
  revenue: number;
  dividendPerShare: number;
  volume24h: number;
  currentPrice: number;
  priceChange24h: number;
  marketCap: number;
  category: string;
  genre: string;
  tags: string[];
  txId: string;
  trending?: boolean;
  isNft: boolean;
  nftId?: string;
  nftOrigin?: string;
  marketUrl?: string;
  royaltyPercentage?: number;
}

interface SpreadsheetExchangeViewProps {
  onClose?: () => void;
  onSelectSpreadsheet?: (spreadsheet: SpreadsheetListing) => void;
  userSpreadsheets?: any[]; // User's published spreadsheets
}

const SpreadsheetExchangeView: React.FC<SpreadsheetExchangeViewProps> = ({ 
  onClose,
  onSelectSpreadsheet,
  userSpreadsheets = []
}) => {
  const [listings, setListings] = useState<SpreadsheetListing[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<string>('rank');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterGenre, setFilterGenre] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sidebarWidth, setSidebarWidth] = useState(320);
  const [isResizing, setIsResizing] = useState(false);
  const [isDarkMode] = useState(() => {
    return true; // Default to dark mode
  });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsResizing(true);
    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + (e.clientX - startX);
      setSidebarWidth(Math.max(280, Math.min(600, newWidth)));
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [sidebarWidth]);

  // Mock NFT spreadsheet data for demonstration
  useEffect(() => {
    const mockListings: SpreadsheetListing[] = [
      {
        id: '1',
        rank: 1,
        title: 'E-commerce Sales Dashboard NFT',
        description: 'Real-time sales tracking with automated profit calculations. Fully tokenized on Bitcoin SV.',
        author: 'Bitcoin Merchant',
        authorHandle: '@bitcoinmerchant',
        authorType: 'human',
        publishDate: '2024-01-15',
        rowCount: 1250,
        columnCount: 15,
        cellCount: 18750,
        formulas: 324,
        views: 15234,
        purchases: 89,
        holders: 67,
        sharesAvailable: 423,
        totalShares: 1000,
        sharesInCirculation: 577,
        revenue: 0.05,
        dividendPerShare: 0.00005,
        volume24h: 0.234,
        currentPrice: 0.001,
        priceChange24h: 5.2,
        marketCap: 1.0,
        category: 'Business',
        genre: 'Dashboard',
        tags: ['sales', 'analytics', 'dashboard'],
        txId: '1a2b3c4d5e6f',
        trending: true,
        isNft: true,
        nftId: 'BSV-NFT-001',
        nftOrigin: 'Bitcoin SV',
        marketUrl: 'https://market.bitcoinspreadsheet.com/nft/001',
        royaltyPercentage: 2.5
      },
      {
        id: '2',
        rank: 2,
        title: 'Crypto Portfolio Tracker NFT',
        description: 'Track multiple cryptocurrency investments with live pricing formulas',
        author: 'Crypto Trader Pro',
        authorHandle: '@cryptotrader',
        authorType: 'human',
        publishDate: '2024-01-14',
        rowCount: 500,
        columnCount: 25,
        cellCount: 12500,
        formulas: 156,
        views: 8932,
        purchases: 156,
        holders: 98,
        sharesAvailable: 123,
        totalShares: 500,
        sharesInCirculation: 377,
        revenue: 0.12,
        dividendPerShare: 0.00024,
        volume24h: 0.567,
        currentPrice: 0.005,
        priceChange24h: 12.3,
        marketCap: 2.5,
        category: 'Finance',
        genre: 'Portfolio',
        tags: ['crypto', 'portfolio', 'tracking'],
        txId: '2b3c4d5e6f7g',
        trending: true,
        isNft: true,
        nftId: 'BSV-NFT-002',
        nftOrigin: 'Bitcoin SV',
        royaltyPercentage: 3.0
      },
      {
        id: '3',
        rank: 3,
        title: 'AI Weather Prediction Model',
        description: 'Historical weather data with AI-powered predictive modeling formulas',
        author: 'WeatherPro AI',
        authorHandle: '@weatherpro',
        authorType: 'ai',
        publishDate: '2024-01-13',
        rowCount: 10000,
        columnCount: 30,
        cellCount: 300000,
        formulas: 892,
        views: 4567,
        purchases: 45,
        holders: 38,
        sharesAvailable: 500,
        totalShares: 750,
        sharesInCirculation: 250,
        revenue: 0.08,
        dividendPerShare: 0.00011,
        volume24h: 0.089,
        currentPrice: 0.002,
        priceChange24h: -2.1,
        marketCap: 1.5,
        category: 'Data',
        genre: 'Analytics',
        tags: ['weather', 'data', 'analytics', 'AI'],
        txId: '3c4d5e6f7g8h',
        isNft: true,
        nftId: 'BSV-NFT-003',
        nftOrigin: 'Bitcoin SV',
        royaltyPercentage: 2.0
      },
      {
        id: '4',
        rank: 4,
        title: 'Project Management DAO Template',
        description: 'Complete project tracking with Gantt chart formulas for DAOs',
        author: 'Project Manager',
        authorHandle: '@projectmanager',
        authorType: 'human',
        publishDate: '2024-01-12',
        rowCount: 300,
        columnCount: 20,
        cellCount: 6000,
        formulas: 78,
        views: 2134,
        purchases: 23,
        holders: 19,
        sharesAvailable: 150,
        totalShares: 200,
        sharesInCirculation: 50,
        revenue: 0.03,
        dividendPerShare: 0.00015,
        volume24h: 0.045,
        currentPrice: 0.0015,
        priceChange24h: 8.7,
        marketCap: 0.3,
        category: 'Business',
        genre: 'Template',
        tags: ['project', 'management', 'template', 'DAO'],
        txId: '4d5e6f7g8h9i',
        isNft: true,
        nftId: 'BSV-NFT-004',
        nftOrigin: 'Bitcoin SV',
        royaltyPercentage: 1.5
      }
    ];
    setListings(mockListings);
  }, []);

  const filteredListings = listings
    .filter(listing => 
      (filterCategory === 'all' || listing.category.toLowerCase() === filterCategory) &&
      (filterGenre === 'all' || listing.genre.toLowerCase() === filterGenre) &&
      (searchTerm === '' || 
       listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       listing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       listing.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price': return b.currentPrice - a.currentPrice;
        case 'revenue': return b.revenue - a.revenue;
        case 'updated': return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case 'volume': return b.volume24h - a.volume24h;
        case 'holders': return b.holders - a.holders;
        default: return a.rank - b.rank;
      }
    });

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: isDarkMode ? '#121212' : '#fff',
      color: isDarkMode ? '#e0e0e0' : '#333'
    }}>
      <SpreadsheetExchangeSidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        filterGenre={filterGenre}
        setFilterGenre={setFilterGenre}
        isDarkMode={isDarkMode}
        width={sidebarWidth}
        isResizing={isResizing}
        onMouseDown={handleMouseDown}
      />
      
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <div style={{
          padding: '20px',
          borderBottom: `1px solid ${isDarkMode ? '#333' : '#dee2e6'}`,
          backgroundColor: isDarkMode ? '#1a1a1a' : '#f8f9fa'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h1 style={{
                margin: '0 0 8px 0',
                fontSize: '24px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center'
              }}>
                <img 
                  src="/bitcoin-watercolor-icon.png" 
                  alt="Bitcoin" 
                  className="bitcoin-icon-beveled"
                  style={{ width: '32px', height: '32px', marginRight: '12px' }}
                />
                Bitcoin Spreadsheet Exchange
              </h1>
              <p style={{
                margin: 0,
                color: isDarkMode ? '#b0b0b0' : '#666',
                fontSize: '14px'
              }}>
                Discover, buy, and sell data-rich spreadsheets. Own shares in revenue-generating datasets.
              </p>
            </div>
            {onClose && (
              <button 
                onClick={onClose}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#1976d2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                ← Back to Editor
              </button>
            )}
          </div>
          
          <div style={{
            marginTop: '16px',
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}>
            <input
              type="text"
              placeholder="Search spreadsheets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                padding: '8px 12px',
                border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
                borderRadius: '6px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#fff',
                color: isDarkMode ? '#e0e0e0' : '#333',
                fontSize: '14px'
              }}
            />
          </div>
        </div>
        
        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: '20px'
        }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '40px 50px 2fr 120px 100px 100px 80px 80px 100px 100px 100px 140px',
            gap: '12px',
            padding: '12px 16px',
            backgroundColor: isDarkMode ? '#252525' : '#f0f0f0',
            borderBottom: `2px solid ${isDarkMode ? '#444' : '#ccc'}`,
            fontWeight: 'bold',
            fontSize: '12px',
            color: isDarkMode ? '#b0b0b0' : '#666',
            position: 'sticky',
            top: 0,
            zIndex: 10
          }}>
            <div></div>
            <div>Rank</div>
            <div>Title / Author</div>
            <div>Category</div>
            <div style={{ textAlign: 'right' }}>Price</div>
            <div style={{ textAlign: 'right' }}>Change 24h</div>
            <div style={{ textAlign: 'center' }}>Size</div>
            <div style={{ textAlign: 'center' }}>Holders</div>
            <div style={{ textAlign: 'right' }}>Revenue</div>
            <div style={{ textAlign: 'right' }}>Volume 24h</div>
            <div style={{ textAlign: 'right' }}>Market Cap</div>
            <div style={{ textAlign: 'center' }}>Actions</div>
          </div>

          {/* Table Rows */}
          {filteredListings.map(listing => (
            <div key={listing.id} style={{
              display: 'grid',
              gridTemplateColumns: '40px 50px 2fr 120px 100px 100px 80px 80px 100px 100px 100px 140px',
              gap: '12px',
              padding: '16px',
              backgroundColor: isDarkMode ? '#1a1a1a' : '#fff',
              borderBottom: `1px solid ${isDarkMode ? '#333' : '#e0e0e0'}`,
              alignItems: 'center',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDarkMode ? '#252525' : '#f8f8f8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isDarkMode ? '#1a1a1a' : '#fff';
            }}>
              {/* Icon */}
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f5f5',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                color: isDarkMode ? '#e0e0e0' : '#333'
              }}>
                {listing.category === 'Finance' ? 'FIN' : 
                 listing.category === 'Business' ? 'BIZ' : 
                 listing.category === 'Data' ? 'DAT' : 'GEN'}
              </div>
              
              {/* Rank */}
              <div style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: isDarkMode ? '#888' : '#666'
              }}>
                #{listing.rank}
              </div>
              
              {/* Title & Author */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '4px'
                }}>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: isDarkMode ? '#e0e0e0' : '#333'
                  }}>
                    {listing.title}
                  </span>
                  {listing.trending && (
                    <span style={{
                      fontSize: '10px',
                      padding: '2px 4px',
                      backgroundColor: '#ff9500',
                      color: 'white',
                      borderRadius: '3px',
                      fontWeight: 'bold'
                    }}>HOT</span>
                  )}
                  {listing.isNft && (
                    <span style={{
                      fontSize: '10px',
                      padding: '2px 4px',
                      backgroundColor: '#9c27b0',
                      color: 'white',
                      borderRadius: '3px',
                      fontWeight: 'bold'
                    }}>NFT</span>
                  )}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: isDarkMode ? '#999' : '#666',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  {listing.authorType === 'ai' ? '[AI]' : ''} {listing.authorHandle}
                </div>
              </div>
              
              {/* Category/Genre */}
              <div style={{
                fontSize: '12px',
                color: isDarkMode ? '#b0b0b0' : '#666'
              }}>
                <div style={{ fontWeight: 'bold' }}>{listing.category}</div>
                <div style={{ fontSize: '11px', opacity: 0.8 }}>{listing.genre}</div>
              </div>
              
              {/* Price */}
              <div style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#1976d2',
                textAlign: 'right'
              }}>
                {listing.currentPrice} BSV
              </div>
              
              {/* Change 24h */}
              <div style={{
                fontSize: '13px',
                fontWeight: 'bold',
                color: listing.priceChange24h >= 0 ? '#4caf50' : '#f44336',
                textAlign: 'right'
              }}>
                {listing.priceChange24h >= 0 ? '+' : ''}{listing.priceChange24h}%
              </div>
              
              {/* Size */}
              <div style={{
                fontSize: '12px',
                color: isDarkMode ? '#b0b0b0' : '#666',
                textAlign: 'center'
              }}>
                {listing.rowCount}×{listing.columnCount}
              </div>
              
              {/* Holders */}
              <div style={{
                fontSize: '12px',
                color: isDarkMode ? '#b0b0b0' : '#666',
                textAlign: 'center'
              }}>
                {listing.holders}
              </div>
              
              {/* Revenue */}
              <div style={{
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#4caf50',
                textAlign: 'right'
              }}>
                {listing.revenue} BSV
              </div>
              
              {/* Volume 24h */}
              <div style={{
                fontSize: '13px',
                color: '#ff9500',
                textAlign: 'right'
              }}>
                {listing.volume24h} BSV
              </div>
              
              {/* Market Cap */}
              <div style={{
                fontSize: '13px',
                fontWeight: 'bold',
                color: isDarkMode ? '#e0e0e0' : '#333',
                textAlign: 'right'
              }}>
                {listing.marketCap} BSV
              </div>
              
              {/* Actions */}
              <div style={{
                display: 'flex',
                gap: '6px',
                justifyContent: 'center'
              }}>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSpreadsheet?.(listing);
                  }}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#1976d2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Open
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
          
          {filteredListings.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '40px',
              color: isDarkMode ? '#999' : '#666'
            }}>
              <p>No spreadsheets found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetExchangeView;