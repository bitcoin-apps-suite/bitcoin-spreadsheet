import React from 'react';
import { 
  SPREADSHEET_STORAGE_OPTIONS,
  StorageOption,
  SpreadsheetPricingBreakdown,
  formatUSD,
  formatSatoshis,
  getCostComparison
} from '../utils/storageOptions';

interface StorageOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (option: StorageOption) => void;
  selectedOption: StorageOption | null;
  pricing: SpreadsheetPricingBreakdown | null;
  onConfirm: () => void;
}

const StorageOptionsModal: React.FC<StorageOptionsModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  selectedOption,
  pricing,
  onConfirm
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="storage-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Choose Storage Method</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="storage-options-grid">
          {SPREADSHEET_STORAGE_OPTIONS.map(option => (
            <div 
              key={option.id}
              className={`storage-option-card ${selectedOption?.id === option.id ? 'selected' : ''}`}
              onClick={() => onSelect(option)}
            >
              <div className="option-header">
                <span className="option-icon">{option.icon}</span>
                <h3>{option.name}</h3>
              </div>
              <p className="option-description">{option.description}</p>
              <div className="option-features">
                {option.features.map((feature, idx) => (
                  <div key={idx} className="feature">✓ {feature}</div>
                ))}
              </div>
              <div className="option-rate">
                <small>{formatSatoshis(option.baseRatePerCell)} per cell</small>
              </div>
            </div>
          ))}
        </div>

        {pricing && (
          <div className="pricing-breakdown-section">
            <h3>Cost Breakdown</h3>
            <div className="pricing-breakdown-content">
              <table className="breakdown-table">
                <tbody>
                  <tr>
                    <td>Total Cells:</td>
                    <td>{pricing.cellCount.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Non-empty Cells:</td>
                    <td>{pricing.nonEmptyCells.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Data Size:</td>
                    <td>{(pricing.dataSize / 1024).toFixed(2)} KB</td>
                  </tr>
                  <tr>
                    <td>Base Cost:</td>
                    <td>{formatSatoshis(pricing.baseCostSatoshis)}</td>
                  </tr>
                  <tr>
                    <td>Service Fee:</td>
                    <td>{formatSatoshis(pricing.serviceFee)}</td>
                  </tr>
                  <tr className="total-row">
                    <td><strong>Total:</strong></td>
                    <td>
                      <strong>{formatUSD(pricing.totalCostUSD)}</strong>
                      <br />
                      <span style={{fontSize: '11px', color: '#888'}}>
                        {formatSatoshis(pricing.totalCostSatoshis)}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="pricing-info">
                <p className="cost-comparison">
                  {getCostComparison(pricing.totalCostUSD)}
                </p>
                <p>
                  <strong>💡 How it works:</strong> You pay directly to the Bitcoin network. 
                  We charge 2x the base network fee to cover processing and infrastructure.
                </p>
                <p style={{marginTop: '8px', fontSize: '11px'}}>
                  <strong>Cost per cell:</strong> {formatUSD(pricing.costPerCell)}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button 
            className="confirm-btn" 
            onClick={onConfirm}
            disabled={!selectedOption}
          >
            Save to Blockchain
          </button>
        </div>
      </div>
    </div>
  );
};

export default StorageOptionsModal;