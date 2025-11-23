import CryptoJS from 'crypto-js';
import { BSVService, CellAddress } from './BSVService';

export interface CellData {
  row: number;
  col: number;
  value: string;
  dataType: 'number' | 'string' | 'formula';
  lastUpdated: number;
  encrypted?: boolean;
  address?: string; // Bitcoin address for this cell (if per-cell addresses enabled)
}

export interface SpreadsheetData {
  id: string;
  title: string;
  cells: { [key: string]: CellData };
  owner: string;
  publicKey?: string;
}

interface HandCashConnect {
  profile: {
    handle: string;
    paymail: string;
    publicKey: string;
  };
  wallet: {
    pay: (payment: any) => Promise<any>;
    getBalance: () => Promise<{ satoshis: number }>;
  };
}

export class BitcoinService {
  private handcash: HandCashConnect | null = null;
  private encryptionKey: string | null = null;
  private isConnected: boolean = false;
  private bsvService: BSVService;
  private useCellAddresses: boolean = false;

  constructor(useCellAddresses: boolean = false) {
    this.handcash = null;
    this.encryptionKey = null;
    this.useCellAddresses = useCellAddresses;
    // Initialize BSV service with optional per-cell addresses
    this.bsvService = new BSVService(undefined, useCellAddresses);
  }

  // Connect to HandCash wallet
  async connect(): Promise<void> {
    try {
      console.log('Connecting to Bitcoin network...');
      
      // Check if we have authenticated HandCash user
      const savedUser = localStorage.getItem('handcash_user');
      const authTokens = localStorage.getItem('handcash_tokens');
      
      if (savedUser && authTokens) {
        try {
          const user = JSON.parse(savedUser);
          console.log('Using authenticated HandCash user: @' + user.handle);
          
          // Use the authenticated user's info
          this.handcash = {
            profile: {
              handle: user.handle,
              paymail: user.paymail,
              publicKey: user.publicKey
            },
            wallet: {
              pay: async (payment: any) => {
                console.log('Payment via HandCash:', payment);
                return { txid: 'handcash_tx_' + Date.now() };
              },
              getBalance: async () => ({ satoshis: 1000000 })
            }
          } as HandCashConnect;
          
          this.isConnected = true;
          this.generateEncryptionKey();
          console.log('Connected to Bitcoin via HandCash as @' + user.handle);
        } catch (error) {
          console.error('Error loading HandCash user:', error);
          await this.connectDemoMode();
        }
      } else {
        // Fallback for demo mode
        console.log('No HandCash authentication found, using demo mode');
        await this.connectDemoMode();
      }
    } catch (error) {
      console.error('Failed to connect to Bitcoin:', error);
      // Fall back to demo mode
      await this.connectDemoMode();
    }
  }

  // Demo mode connection (for development)
  private async connectDemoMode(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    this.handcash = {
      profile: {
        handle: 'demo_user',
        paymail: 'demo@handcash.io',
        publicKey: 'demo_public_key_' + Math.random().toString(36).substr(2, 9)
      },
      wallet: {
        pay: async (payment: any) => ({ txid: 'demo_tx_' + Date.now() }),
        getBalance: async () => ({ satoshis: 100000 })
      }
    } as HandCashConnect;
    
    this.isConnected = true;
    this.generateEncryptionKey();
    console.log('Connected to Bitcoin testnet (demo mode)');
  }

  // Generate encryption key from user's public key
  private generateEncryptionKey(): void {
    if (this.handcash?.profile?.publicKey) {
      // Create a deterministic encryption key from the public key
      this.encryptionKey = CryptoJS.SHA256(this.handcash.profile.publicKey).toString();
    }
  }

  // Encrypt data before storing on-chain
  private encryptData(data: string): string {
    if (!this.encryptionKey) {
      throw new Error('No encryption key available');
    }
    return CryptoJS.AES.encrypt(data, this.encryptionKey).toString();
  }

  // Decrypt data retrieved from chain
  private decryptData(encryptedData: string): string {
    if (!this.encryptionKey) {
      throw new Error('No encryption key available');
    }
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.encryptionKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  async createSpreadsheet(title: string): Promise<SpreadsheetData> {
    const spreadsheetId = `spreadsheet_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const spreadsheet: SpreadsheetData = {
      id: spreadsheetId,
      title,
      cells: {},
      owner: this.handcash?.profile?.handle || 'anonymous',
      publicKey: this.handcash?.profile?.publicKey
    };

    // In production, this would create an encrypted on-chain record
    console.log('Creating encrypted spreadsheet on Bitcoin:', spreadsheet);

    return spreadsheet;
  }

  async updateCell(
    spreadsheetId: string,
    row: number,
    col: number,
    value: string,
    dataType: 'number' | 'string' | 'formula'
  ): Promise<void> {
    const cellKey = `${row}-${col}`;
    
    // Encrypt the cell value before storing
    const encryptedValue = this.encryptData(value);
    
    const cellData: CellData = {
      row,
      col,
      value: encryptedValue,
      dataType,
      lastUpdated: Date.now(),
      encrypted: true
    };

    console.log('Preparing to save encrypted cell to Bitcoin:', { spreadsheetId, cellKey });

    // For now, we'll store locally until we have UTXO management
    // In production, this would:
    // 1. Get UTXOs from HandCash or a UTXO provider
    // 2. Build transaction with BSVService
    // 3. Broadcast to network
    
    // TODO: Implement UTXO fetching and transaction broadcasting
    const mockTransaction = {
      spreadsheetId,
      cellKey,
      cellData,
      txid: 'pending_implementation'
    };
    
    console.log('Transaction prepared (awaiting UTXO implementation):', mockTransaction);
    
    // Store in localStorage for now
    const storageKey = `cell_${spreadsheetId}_${cellKey}`;
    localStorage.setItem(storageKey, JSON.stringify(cellData));
  }

  async getCell(spreadsheetId: string, row: number, col: number): Promise<CellData | null> {
    console.log('Getting cell from Bitcoin:', { spreadsheetId, row, col });

    // In production, retrieve and decrypt from blockchain
    const mockEncryptedData = this.encryptData('');
    
    return {
      row,
      col,
      value: this.decryptData(mockEncryptedData),
      dataType: 'string',
      lastUpdated: Date.now(),
      encrypted: true
    };
  }

  async calculateFormula(formula: string, cells: { [key: string]: CellData }): Promise<string> {
    try {
      if (formula.startsWith('=SUM(')) {
        const match = formula.match(/=SUM\((\w+)\)/);
        if (match) {
          const range = match[1];
          // Simple implementation - in reality, you'd parse the range and sum values
          return '0'; // Placeholder
        }
      }

      return formula.replace('=', '');
    } catch (error) {
      console.error('Formula calculation error:', error);
      return '#ERROR';
    }
  }

  async getBalance(): Promise<string> {
    if (this.handcash?.wallet) {
      const balance = await this.handcash.wallet.getBalance();
      return (balance.satoshis / 100000000).toFixed(8); // Convert satoshis to Bitcoin
    }
    return '0.00000000';
  }

  async getAddress(): Promise<string> {
    if (this.handcash?.profile) {
      return this.handcash.profile.paymail || this.handcash.profile.handle;
    }
    return 'Not connected';
  }

  isUserConnected(): boolean {
    return this.isConnected;
  }

  getUserHandle(): string {
    return this.handcash?.profile?.handle || 'Anonymous';
  }

  /**
   * Save entire spreadsheet to blockchain with BAP attestation
   * Costs 1 penny (capped)
   */
  async saveSpreadsheetToBlockchain(spreadsheet: SpreadsheetData): Promise<string> {
    try {
      console.log('Saving spreadsheet to blockchain with BAP...', spreadsheet);
      
      // Create NFT format of spreadsheet
      const nftData = this.bsvService.createSpreadsheetNFT({
        ...spreadsheet,
        created: Date.now(),
        modified: Date.now(),
        owner: this.getUserHandle()
      });

      // Calculate cost (capped at 1 penny)
      const dataSize = nftData.length;
      const costUSD = this.bsvService.calculateCost(dataSize);
      
      console.log(`Transaction cost: $${costUSD.toFixed(4)} (capped at $0.01)`);

      // For production, we need:
      // 1. HandCash payment API to get UTXOs
      // 2. Build transaction with BSVService
      // 3. Broadcast to BSV network
      
      // Mock transaction for now
      const mockTxId = `mock_tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Store locally with "blockchain" marker
      const blockchainRecord = {
        txid: mockTxId,
        spreadsheet: spreadsheet,
        timestamp: Date.now(),
        cost: costUSD,
        bapAttestation: this.bsvService.createBAPAttestation(
          spreadsheet.id,
          1, // version
          undefined // no previous version
        )
      };
      
      localStorage.setItem(`blockchain_${spreadsheet.id}`, JSON.stringify(blockchainRecord));
      
      console.log('Spreadsheet saved (mock):', blockchainRecord);
      
      return mockTxId;
    } catch (error) {
      console.error('Failed to save spreadsheet to blockchain:', error);
      throw error;
    }
  }

  /**
   * Get BSV address for receiving payments
   */
  getBSVAddress(): string {
    return this.bsvService.getAddress();
  }

  /**
   * Get public key for verification
   */
  getPublicKey(): string {
    return this.bsvService.getPublicKey();
  }

  /**
   * Toggle per-cell address generation
   */
  setUseCellAddresses(enabled: boolean): void {
    this.useCellAddresses = enabled;
    this.bsvService.setUseCellAddresses(enabled);
  }

  /**
   * Check if using per-cell addresses
   */
  isUsingCellAddresses(): boolean {
    return this.useCellAddresses;
  }

  /**
   * Get Bitcoin address for a specific cell
   */
  getCellAddress(row: number, col: number): CellAddress {
    return this.bsvService.getCellAddress(row, col);
  }

  /**
   * Get all generated cell addresses
   */
  getAllCellAddresses(): CellAddress[] {
    return this.bsvService.getAllCellAddresses();
  }

  /**
   * Save cell data with its own address (if enabled)
   */
  async saveCellToBlockchain(
    spreadsheetId: string,
    row: number,
    col: number,
    value: string,
    dataType: 'number' | 'string' | 'formula'
  ): Promise<string> {
    try {
      if (this.useCellAddresses) {
        // Get or generate address for this cell
        const cellAddress = this.getCellAddress(row, col);
        console.log(`Cell [${row},${col}] address:`, cellAddress.address);
        
        // In production, build and broadcast transaction
        // For now, store locally with address info
        const cellData: CellData = {
          row,
          col,
          value,
          dataType,
          lastUpdated: Date.now(),
          address: cellAddress.address
        };
        
        const storageKey = `cell_${spreadsheetId}_${row}-${col}`;
        localStorage.setItem(storageKey, JSON.stringify(cellData));
        
        return cellAddress.address;
      } else {
        // Use regular cell saving
        await this.updateCell(spreadsheetId, row, col, value, dataType);
        return this.getBSVAddress();
      }
    } catch (error) {
      console.error('Failed to save cell to blockchain:', error);
      throw error;
    }
  }
}