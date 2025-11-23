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
  const [selectedListing, setSelectedListing] = useState<SpreadsheetListing | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'preview' | 'trading' | 'history'>('overview');

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

  // Enhanced mock NFT spreadsheet data
  useEffect(() => {
    const mockListings: SpreadsheetListing[] = [
      {
        id: '1',
        rank: 1,
        title: 'DeFi Yield Farming Calculator v3.2',
        description: 'Advanced yield farming calculator with impermanent loss tracking, APY projections, and multi-protocol support. Includes real-time price feeds from 15+ DEXs.',
        author: 'DeFi Wizard',
        authorHandle: '@defiwizard',
        authorType: 'human',
        publishDate: '2024-01-15',
        rowCount: 2500,
        columnCount: 45,
        cellCount: 112500,
        formulas: 1847,
        views: 45234,
        purchases: 892,
        holders: 423,
        sharesAvailable: 77,
        totalShares: 1000,
        sharesInCirculation: 923,
        revenue: 12.45,
        dividendPerShare: 0.0135,
        volume24h: 8.234,
        currentPrice: 0.085,
        priceChange24h: 15.2,
        marketCap: 85.0,
        category: 'Finance',
        genre: 'DeFi',
        tags: ['defi', 'yield', 'farming', 'calculator', 'APY'],
        txId: '1a2b3c4d5e6f7890abcdef1234567890',
        trending: true,
        isNft: true,
        nftId: 'BSV-NFT-001',
        nftOrigin: 'Bitcoin SV',
        marketUrl: 'https://market.bitcoinspreadsheet.com/nft/001',
        royaltyPercentage: 5.0
      },
      {
        id: '2',
        rank: 2,
        title: 'Supply Chain Management System',
        description: 'Enterprise-grade supply chain tracker with IoT integration, shipment tracking, inventory management, and automated reorder points. Connects to 50+ logistics APIs.',
        author: 'LogiTech Solutions',
        authorHandle: '@logitech',
        authorType: 'human',
        publishDate: '2024-01-14',
        rowCount: 5000,
        columnCount: 85,
        cellCount: 425000,
        formulas: 3256,
        views: 28932,
        purchases: 356,
        holders: 198,
        sharesAvailable: 23,
        totalShares: 500,
        sharesInCirculation: 477,
        revenue: 8.92,
        dividendPerShare: 0.0187,
        volume24h: 3.567,
        currentPrice: 0.125,
        priceChange24h: -3.2,
        marketCap: 62.5,
        category: 'Business',
        genre: 'Enterprise',
        tags: ['supply-chain', 'logistics', 'inventory', 'IoT', 'tracking'],
        txId: '2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q',
        trending: true,
        isNft: true,
        nftId: 'BSV-NFT-002',
        nftOrigin: 'Bitcoin SV',
        royaltyPercentage: 3.0
      },
      {
        id: '3',
        rank: 3,
        title: 'Machine Learning Stock Predictor',
        description: 'Advanced ML model analyzing 10+ years of market data. Features sentiment analysis, technical indicators, and pattern recognition. 78% accuracy on backtests.',
        author: 'QuantumAI Labs',
        authorHandle: '@quantumai',
        authorType: 'ai',
        publishDate: '2024-01-13',
        rowCount: 50000,
        columnCount: 120,
        cellCount: 6000000,
        formulas: 8923,
        views: 124567,
        purchases: 2145,
        holders: 1538,
        sharesAvailable: 0,
        totalShares: 10000,
        sharesInCirculation: 10000,
        revenue: 45.78,
        dividendPerShare: 0.00457,
        volume24h: 23.089,
        currentPrice: 0.0342,
        priceChange24h: 28.5,
        marketCap: 342.0,
        category: 'Finance',
        genre: 'Trading',
        tags: ['AI', 'machine-learning', 'stocks', 'prediction', 'quant'],
        txId: '3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r',
        isNft: true,
        nftId: 'BSV-NFT-003',
        nftOrigin: 'Bitcoin SV',
        royaltyPercentage: 2.0
      },
      {
        id: '4',
        rank: 4,
        title: 'Real Estate Investment Analyzer',
        description: 'Comprehensive real estate analysis tool with cash flow projections, ROI calculations, mortgage amortization, and market comparables. Includes tax optimization strategies.',
        author: 'PropTech Innovations',
        authorHandle: '@proptech',
        authorType: 'human',
        publishDate: '2024-01-12',
        rowCount: 1800,
        columnCount: 60,
        cellCount: 108000,
        formulas: 2178,
        views: 62134,
        purchases: 823,
        holders: 619,
        sharesAvailable: 850,
        totalShares: 5000,
        sharesInCirculation: 4150,
        revenue: 18.94,
        dividendPerShare: 0.00456,
        volume24h: 5.045,
        currentPrice: 0.0215,
        priceChange24h: 8.7,
        marketCap: 107.5,
        category: 'Real Estate',
        genre: 'Investment',
        tags: ['real-estate', 'investment', 'ROI', 'cash-flow', 'property'],
        txId: '4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s',
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
            }}
            onClick={() => {
              setSelectedListing(listing);
              setShowDetailModal(true);
              setActiveTab('overview');
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

      {/* Detail Modal */}
      {showDetailModal && selectedListing && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          backdropFilter: 'blur(4px)'
        }}
        onClick={() => setShowDetailModal(false)}>
          <div style={{
            width: '90%',
            maxWidth: '1200px',
            height: '85vh',
            backgroundColor: isDarkMode ? '#1a1a1a' : '#fff',
            borderRadius: '16px',
            border: `1px solid ${isDarkMode ? '#333' : '#ddd'}`,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
          onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: `1px solid ${isDarkMode ? '#333' : '#e0e0e0'}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: isDarkMode ? '#252525' : '#f8f8f8'
            }}>
              <div>
                <h2 style={{
                  margin: '0 0 8px 0',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: isDarkMode ? '#e0e0e0' : '#333'
                }}>
                  {selectedListing.title}
                </h2>
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  fontSize: '14px',
                  color: isDarkMode ? '#999' : '#666'
                }}>
                  <span>by {selectedListing.authorHandle}</span>
                  <span>•</span>
                  <span>{selectedListing.views.toLocaleString()} views</span>
                  <span>•</span>
                  <span>{selectedListing.holders} holders</span>
                  {selectedListing.trending && (
                    <>
                      <span>•</span>
                      <span style={{ color: '#ff9500' }}>🔥 Trending</span>
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={() => setShowDetailModal(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: isDarkMode ? '#999' : '#666',
                  padding: '8px'
                }}
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div style={{
              display: 'flex',
              borderBottom: `1px solid ${isDarkMode ? '#333' : '#e0e0e0'}`,
              background: isDarkMode ? '#1a1a1a' : '#fff'
            }}>
              {['overview', 'preview', 'trading', 'history'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  style={{
                    padding: '12px 24px',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: activeTab === tab ? '2px solid #87CEEB' : '2px solid transparent',
                    color: activeTab === tab ? '#87CEEB' : (isDarkMode ? '#999' : '#666'),
                    fontSize: '14px',
                    fontWeight: activeTab === tab ? 'bold' : 'normal',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{
              flex: 1,
              overflow: 'auto',
              padding: '24px'
            }}>
              {activeTab === 'overview' && (
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 16px 0', color: isDarkMode ? '#e0e0e0' : '#333' }}>Description</h3>
                    <p style={{ lineHeight: 1.6, color: isDarkMode ? '#b0b0b0' : '#666', marginBottom: '24px' }}>
                      {selectedListing.description}
                    </p>

                    <h3 style={{ margin: '24px 0 16px 0', color: isDarkMode ? '#e0e0e0' : '#333' }}>Key Features</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
                      <div style={{ padding: '16px', background: isDarkMode ? '#252525' : '#f5f5f5', borderRadius: '8px' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#87CEEB' }}>{selectedListing.formulas.toLocaleString()}</div>
                        <div style={{ fontSize: '12px', color: isDarkMode ? '#999' : '#666', marginTop: '4px' }}>Active Formulas</div>
                      </div>
                      <div style={{ padding: '16px', background: isDarkMode ? '#252525' : '#f5f5f5', borderRadius: '8px' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4caf50' }}>{selectedListing.cellCount.toLocaleString()}</div>
                        <div style={{ fontSize: '12px', color: isDarkMode ? '#999' : '#666', marginTop: '4px' }}>Total Cells</div>
                      </div>
                      <div style={{ padding: '16px', background: isDarkMode ? '#252525' : '#f5f5f5', borderRadius: '8px' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff9500' }}>{selectedListing.purchases}</div>
                        <div style={{ fontSize: '12px', color: isDarkMode ? '#999' : '#666', marginTop: '4px' }}>Total Purchases</div>
                      </div>
                      <div style={{ padding: '16px', background: isDarkMode ? '#252525' : '#f5f5f5', borderRadius: '8px' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#9c27b0' }}>{selectedListing.royaltyPercentage}%</div>
                        <div style={{ fontSize: '12px', color: isDarkMode ? '#999' : '#666', marginTop: '4px' }}>Creator Royalty</div>
                      </div>
                    </div>

                    <h3 style={{ margin: '24px 0 16px 0', color: isDarkMode ? '#e0e0e0' : '#333' }}>Tags</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {selectedListing.tags.map(tag => (
                        <span
                          key={tag}
                          style={{
                            padding: '6px 12px',
                            background: isDarkMode ? '#252525' : '#f0f0f0',
                            borderRadius: '16px',
                            fontSize: '12px',
                            color: isDarkMode ? '#87CEEB' : '#4682B4'
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{
                      padding: '20px',
                      background: isDarkMode ? '#252525' : '#f8f8f8',
                      borderRadius: '12px',
                      marginBottom: '20px'
                    }}>
                      <h3 style={{ margin: '0 0 16px 0', color: isDarkMode ? '#e0e0e0' : '#333' }}>Market Data</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: isDarkMode ? '#999' : '#666' }}>Current Price</span>
                          <span style={{ fontWeight: 'bold', color: '#87CEEB' }}>{selectedListing.currentPrice} BSV</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: isDarkMode ? '#999' : '#666' }}>24h Change</span>
                          <span style={{
                            fontWeight: 'bold',
                            color: selectedListing.priceChange24h >= 0 ? '#4caf50' : '#f44336'
                          }}>
                            {selectedListing.priceChange24h >= 0 ? '+' : ''}{selectedListing.priceChange24h}%
                          </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: isDarkMode ? '#999' : '#666' }}>Market Cap</span>
                          <span style={{ fontWeight: 'bold' }}>{selectedListing.marketCap} BSV</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: isDarkMode ? '#999' : '#666' }}>24h Volume</span>
                          <span style={{ fontWeight: 'bold' }}>{selectedListing.volume24h} BSV</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: isDarkMode ? '#999' : '#666' }}>Total Revenue</span>
                          <span style={{ fontWeight: 'bold', color: '#4caf50' }}>{selectedListing.revenue} BSV</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: isDarkMode ? '#999' : '#666' }}>Dividend/Share</span>
                          <span style={{ fontWeight: 'bold' }}>{selectedListing.dividendPerShare} BSV</span>
                        </div>
                      </div>
                    </div>

                    <div style={{
                      padding: '20px',
                      background: isDarkMode ? '#252525' : '#f8f8f8',
                      borderRadius: '12px'
                    }}>
                      <h3 style={{ margin: '0 0 16px 0', color: isDarkMode ? '#e0e0e0' : '#333' }}>Ownership</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: isDarkMode ? '#999' : '#666' }}>Available</span>
                          <span style={{ fontWeight: 'bold' }}>{selectedListing.sharesAvailable}/{selectedListing.totalShares}</span>
                        </div>
                        <div style={{
                          height: '8px',
                          background: isDarkMode ? '#333' : '#e0e0e0',
                          borderRadius: '4px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${(selectedListing.sharesInCirculation / selectedListing.totalShares) * 100}%`,
                            height: '100%',
                            background: 'linear-gradient(90deg, #87CEEB, #4682B4)'
                          }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: isDarkMode ? '#999' : '#666' }}>In Circulation</span>
                          <span>{((selectedListing.sharesInCirculation / selectedListing.totalShares) * 100).toFixed(1)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'preview' && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  flexDirection: 'column',
                  gap: '20px'
                }}>
                  <div style={{
                    width: '100%',
                    height: '400px',
                    background: isDarkMode ? '#252525' : '#f5f5f5',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${isDarkMode ? '#333' : '#ddd'}`
                  }}>
                    <div style={{ textAlign: 'center', color: isDarkMode ? '#999' : '#666' }}>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
                      <p>Spreadsheet Preview</p>
                      <p style={{ fontSize: '12px', marginTop: '8px' }}>
                        {selectedListing.rowCount} rows × {selectedListing.columnCount} columns
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onSelectSpreadsheet?.(selectedListing)}
                    style={{
                      padding: '12px 32px',
                      background: 'linear-gradient(135deg, #87CEEB, #4682B4)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    Open in Editor
                  </button>
                </div>
              )}

              {activeTab === 'trading' && (
                <div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '24px',
                    marginBottom: '24px'
                  }}>
                    <div style={{
                      padding: '24px',
                      background: isDarkMode ? '#252525' : '#f8f8f8',
                      borderRadius: '12px',
                      border: '2px solid #4caf50'
                    }}>
                      <h3 style={{ margin: '0 0 20px 0', color: '#4caf50' }}>Buy Shares</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <input
                          type="number"
                          placeholder="Number of shares"
                          style={{
                            padding: '12px',
                            background: isDarkMode ? '#1a1a1a' : '#fff',
                            border: `1px solid ${isDarkMode ? '#333' : '#ddd'}`,
                            borderRadius: '8px',
                            color: isDarkMode ? '#e0e0e0' : '#333'
                          }}
                        />
                        <div style={{ fontSize: '14px', color: isDarkMode ? '#999' : '#666' }}>
                          Available: {selectedListing.sharesAvailable} shares
                        </div>
                        <button style={{
                          padding: '12px',
                          background: '#4caf50',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: 'pointer'
                        }}>
                          Buy Now
                        </button>
                      </div>
                    </div>

                    <div style={{
                      padding: '24px',
                      background: isDarkMode ? '#252525' : '#f8f8f8',
                      borderRadius: '12px',
                      border: '2px solid #f44336'
                    }}>
                      <h3 style={{ margin: '0 0 20px 0', color: '#f44336' }}>Sell Shares</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <input
                          type="number"
                          placeholder="Number of shares"
                          style={{
                            padding: '12px',
                            background: isDarkMode ? '#1a1a1a' : '#fff',
                            border: `1px solid ${isDarkMode ? '#333' : '#ddd'}`,
                            borderRadius: '8px',
                            color: isDarkMode ? '#e0e0e0' : '#333'
                          }}
                        />
                        <div style={{ fontSize: '14px', color: isDarkMode ? '#999' : '#666' }}>
                          Your holdings: 0 shares
                        </div>
                        <button style={{
                          padding: '12px',
                          background: '#f44336',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: 'pointer'
                        }}>
                          Sell Now
                        </button>
                      </div>
                    </div>
                  </div>

                  <div style={{
                    padding: '24px',
                    background: isDarkMode ? '#252525' : '#f8f8f8',
                    borderRadius: '12px'
                  }}>
                    <h3 style={{ margin: '0 0 20px 0', color: isDarkMode ? '#e0e0e0' : '#333' }}>Order Book</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                      <div>
                        <h4 style={{ color: '#4caf50', marginBottom: '12px' }}>Buy Orders</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {[0.082, 0.081, 0.080, 0.079, 0.078].map((price, i) => (
                            <div key={i} style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              padding: '8px',
                              background: 'rgba(76, 175, 80, 0.1)',
                              borderRadius: '4px'
                            }}>
                              <span>{price} BSV</span>
                              <span>{Math.floor(Math.random() * 100) + 10} shares</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 style={{ color: '#f44336', marginBottom: '12px' }}>Sell Orders</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {[0.086, 0.087, 0.088, 0.089, 0.090].map((price, i) => (
                            <div key={i} style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              padding: '8px',
                              background: 'rgba(244, 67, 54, 0.1)',
                              borderRadius: '4px'
                            }}>
                              <span>{price} BSV</span>
                              <span>{Math.floor(Math.random() * 100) + 10} shares</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div>
                  <div style={{
                    height: '300px',
                    background: isDarkMode ? '#252525' : '#f8f8f8',
                    borderRadius: '12px',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${isDarkMode ? '#333' : '#ddd'}`
                  }}>
                    <div style={{ textAlign: 'center', color: isDarkMode ? '#999' : '#666' }}>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>📈</div>
                      <p>Price Chart (30 Days)</p>
                    </div>
                  </div>

                  <h3 style={{ margin: '24px 0 16px 0', color: isDarkMode ? '#e0e0e0' : '#333' }}>Recent Transactions</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {Array.from({ length: 10 }, (_, i) => ({
                      type: Math.random() > 0.5 ? 'buy' : 'sell',
                      amount: Math.floor(Math.random() * 50) + 1,
                      price: (0.08 + Math.random() * 0.01).toFixed(3),
                      time: `${Math.floor(Math.random() * 60)} minutes ago`,
                      txId: `${Math.random().toString(36).substr(2, 9)}...`
                    })).map((tx, i) => (
                      <div key={i} style={{
                        display: 'grid',
                        gridTemplateColumns: '80px 100px 100px 150px 1fr',
                        gap: '16px',
                        padding: '12px',
                        background: isDarkMode ? '#252525' : '#f8f8f8',
                        borderRadius: '8px',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          color: tx.type === 'buy' ? '#4caf50' : '#f44336',
                          fontWeight: 'bold',
                          textTransform: 'uppercase'
                        }}>
                          {tx.type}
                        </span>
                        <span>{tx.amount} shares</span>
                        <span>{tx.price} BSV</span>
                        <span style={{ color: isDarkMode ? '#999' : '#666', fontSize: '12px' }}>{tx.time}</span>
                        <span style={{ color: isDarkMode ? '#87CEEB' : '#4682B4', fontSize: '12px', fontFamily: 'monospace' }}>{tx.txId}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '20px 24px',
              borderTop: `1px solid ${isDarkMode ? '#333' : '#e0e0e0'}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: isDarkMode ? '#252525' : '#f8f8f8'
            }}>
              <div style={{ fontSize: '12px', color: isDarkMode ? '#999' : '#666' }}>
                Transaction ID: {selectedListing.txId}
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => {
                    setShowDetailModal(false);
                    onSelectSpreadsheet?.(selectedListing);
                  }}
                  style={{
                    padding: '10px 24px',
                    background: 'linear-gradient(135deg, #87CEEB, #4682B4)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Open Spreadsheet
                </button>
                <button
                  style={{
                    padding: '10px 24px',
                    background: '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Buy Shares
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpreadsheetExchangeView;