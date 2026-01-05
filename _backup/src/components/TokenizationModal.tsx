import React, { useState, useEffect } from 'react';
import { SpreadsheetData } from '../services/BitcoinService';
import { TokenizationService, TOKEN_PROTOCOLS, TokenProtocol, TokenizedSpreadsheet } from '../services/TokenizationService';
import './TokenizationModal.css';

interface TokenizationModalProps {
  isOpen: boolean;
  spreadsheet: SpreadsheetData | null;
  onClose: () => void;
  userAddress?: string;
  userHandle?: string;
}

const TokenizationModal: React.FC<TokenizationModalProps> = ({
  isOpen,
  spreadsheet,
  onClose,
  userAddress = 'demo_address',
  userHandle = 'demo_user'
}) => {
  const [tokenizationService] = useState(() => new TokenizationService());
  const [selectedProtocol, setSelectedProtocol] = useState<TokenProtocol>(TOKEN_PROTOCOLS[0]);
  const [totalShares, setTotalShares] = useState(1000000);
  const [pricePerShare, setPricePerShare] = useState(100); // 100 satoshis
  const [isTokenizing, setIsTokenizing] = useState(false);
  const [existingToken, setExistingToken] = useState<TokenizedSpreadsheet | null>(null);
  const [showTrading, setShowTrading] = useState(false);
  const [sharesToBuy, setSharesToBuy] = useState(100);

  useEffect(() => {
    if (spreadsheet && isOpen) {
      const existing = tokenizationService.getTokenizedSpreadsheet(spreadsheet.id);
      if (existing) {
        setExistingToken(existing);
        setShowTrading(true);
      } else {
        setExistingToken(null);
        setShowTrading(false);
      }
    }
  }, [spreadsheet, isOpen, tokenizationService]);

  if (!isOpen || !spreadsheet) return null;

  const getCellCount = () => {
    return Object.values(spreadsheet.cells || {})
      .filter(cell => cell.value.trim() !== '').length;
  };

  const handleTokenize = async () => {
    setIsTokenizing(true);
    try {
      const tokenized = await tokenizationService.tokenizeSpreadsheet(
        spreadsheet.id,
        spreadsheet.title,
        getCellCount(),
        selectedProtocol,
        totalShares,
        pricePerShare,
        userAddress,
        userHandle
      );
      
      setExistingToken(tokenized);
      setShowTrading(true);
      alert(`Successfully tokenized "${spreadsheet.title}" with ${totalShares.toLocaleString()} shares!`);
    } catch (error: any) {
      alert(`Failed to tokenize: ${error.message}`);
    } finally {
      setIsTokenizing(false);
    }
  };

  const handleBuyShares = async () => {
    if (!existingToken) return;
    
    try {
      await tokenizationService.buyShares(
        spreadsheet.id,
        `buyer_${Date.now()}`,
        'new_buyer',
        sharesToBuy
      );
      
      // Refresh token data
      const updated = tokenizationService.getTokenizedSpreadsheet(spreadsheet.id);
      setExistingToken(updated || null);
      
      alert(`Successfully purchased ${sharesToBuy} shares!`);
    } catch (error: any) {
      alert(`Failed to buy shares: ${error.message}`);
    }
  };

  const formatBSV = (satoshis: number) => {
    return tokenizationService.formatBSV(satoshis);
  };

  const calculateMarketCap = () => {
    return totalShares * pricePerShare;
  };

  return (
    <>
      <div className="tokenization-overlay" onClick={onClose} />
      <div className="tokenization-modal">
        <div className="modal-header">
          <h2>🪙 Tokenize Spreadsheet</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>

        <div className="spreadsheet-info">
          <h3>{spreadsheet.title}</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Cells:</span>
              <span className="value">{getCellCount()}</span>
            </div>
            <div className="info-item">
              <span className="label">ID:</span>
              <span className="value">{spreadsheet.id.substring(0, 8)}...</span>
            </div>
          </div>
        </div>

        {!showTrading ? (
          <>
            <div className="tokenization-form">
              <div className="form-group">
                <label>Token Protocol</label>
                <select 
                  value={selectedProtocol.id}
                  onChange={(e) => {
                    const protocol = TOKEN_PROTOCOLS.find(p => p.id === e.target.value);
                    if (protocol) setSelectedProtocol(protocol);
                  }}
                >
                  {TOKEN_PROTOCOLS.map(protocol => (
                    <option key={protocol.id} value={protocol.id}>
                      {protocol.name} - {protocol.description}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Total Shares</label>
                <input
                  type="number"
                  value={totalShares}
                  onChange={(e) => setTotalShares(Number(e.target.value))}
                  min="1"
                  max={selectedProtocol.maxSupply || 100000000}
                />
                <small>Maximum: {selectedProtocol.maxSupply?.toLocaleString() || 'Unlimited'}</small>
              </div>

              <div className="form-group">
                <label>Price Per Share (satoshis)</label>
                <input
                  type="number"
                  value={pricePerShare}
                  onChange={(e) => setPricePerShare(Number(e.target.value))}
                  min="1"
                />
                <small>{formatBSV(pricePerShare)} per share</small>
              </div>

              <div className="market-summary">
                <h4>Market Summary</h4>
                <div className="summary-grid">
                  <div className="summary-item">
                    <span className="label">Total Shares:</span>
                    <span className="value">{totalShares.toLocaleString()}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Price/Share:</span>
                    <span className="value">{formatBSV(pricePerShare)}</span>
                  </div>
                  <div className="summary-item highlight">
                    <span className="label">Market Cap:</span>
                    <span className="value">{formatBSV(calculateMarketCap())}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button className="cancel-button" onClick={onClose}>
                Cancel
              </button>
              <button 
                className="tokenize-button"
                onClick={handleTokenize}
                disabled={isTokenizing}
              >
                {isTokenizing ? 'Tokenizing...' : 'Tokenize Spreadsheet'}
              </button>
            </div>
          </>
        ) : existingToken && (
          <>
            <div className="token-details">
              <h3>Token Details</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="label">Protocol:</span>
                  <span className="value">{existingToken.protocol.name}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Total Shares:</span>
                  <span className="value">{existingToken.totalShares.toLocaleString()}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Available:</span>
                  <span className="value">{existingToken.availableShares.toLocaleString()}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Price/Share:</span>
                  <span className="value">{formatBSV(existingToken.pricePerShare)}</span>
                </div>
                <div className="detail-item highlight">
                  <span className="label">Market Cap:</span>
                  <span className="value">{formatBSV(existingToken.marketCap)}</span>
                </div>
              </div>

              <h4>Ownership</h4>
              <div className="owners-list">
                {existingToken.owners.map((owner, index) => (
                  <div key={index} className="owner-item">
                    <span className="owner-handle">
                      {owner.handle || owner.address.substring(0, 8)}...
                    </span>
                    <span className="owner-shares">
                      {owner.shares.toLocaleString()} shares ({owner.percentage.toFixed(2)}%)
                    </span>
                  </div>
                ))}
              </div>

              <div className="trading-section">
                <h4>Buy Shares</h4>
                <div className="buy-form">
                  <input
                    type="number"
                    value={sharesToBuy}
                    onChange={(e) => setSharesToBuy(Number(e.target.value))}
                    min="1"
                    max={existingToken.availableShares}
                  />
                  <button onClick={handleBuyShares} className="buy-button">
                    Buy for {formatBSV(sharesToBuy * existingToken.pricePerShare)}
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button className="close-button" onClick={onClose}>
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TokenizationModal;