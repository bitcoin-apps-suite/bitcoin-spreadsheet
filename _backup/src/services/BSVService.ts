import { 
  PrivateKey, 
  PublicKey, 
  Transaction,
  LockingScript,
  Hash,
  Signature,
  HD,
  ECDSA,
  BigNumber,
  P2PKH,
  OP
} from '@bsv/sdk';

/**
 * BSV Service for Bitcoin SV blockchain operations
 * 
 * Features:
 * - HD wallet for hierarchical key derivation
 * - Per-cell address generation (optional)
 * - BAP (Bitcoin Attestation Protocol) attestations
 * - OP_RETURN transaction structure
 * - 1Sat Ordinals inscription format
 * - NFT file format for spreadsheets
 * - Cost calculation with penny cap
 */

// BAP (Bitcoin Attestation Protocol) constants
const BAP_ID = '1BAPSuaPnfGnSBM3GLV9yhxUdYe4vGbdMT';
const BAP_ATTESTATION_TYPE = 'ATTEST';
const BAP_ID_TYPE = 'SPREADSHEET';

export interface CellAddress {
  row: number;
  col: number;
  address: string;
  privateKey: string;
  publicKey: string;
  path: string; // BIP32 derivation path
}

export class BSVService {
  private masterKey: HD;
  private rootPrivateKey: PrivateKey;
  private rootPublicKey: PublicKey;
  private rootAddress: string;
  private cellAddresses: Map<string, CellAddress>;
  private useCellAddresses: boolean;
  
  constructor(seedPhrase?: string, useCellAddresses: boolean = false) {
    // Generate or use provided seed for HD wallet
    if (seedPhrase) {
      // Create HD wallet from seed phrase
      const seedBuffer = Buffer.from(seedPhrase);
      this.masterKey = HD.fromSeed(Array.from(seedBuffer));
    } else {
      // Generate new random seed
      const randomKey = PrivateKey.fromRandom();
      const seedBuffer = Buffer.from(randomKey.toHex(), 'hex');
      this.masterKey = HD.fromSeed(Array.from(seedBuffer));
    }
    
    // Derive root key for spreadsheet (m/44'/236'/0'/0/0)
    // 236 is BSV coin type
    const rootPath = "m/44'/236'/0'/0/0";
    const derivedKey = this.masterKey.derive(rootPath);
    this.rootPrivateKey = derivedKey.privKey;
    this.rootPublicKey = this.rootPrivateKey.toPublicKey();
    
    // Generate P2PKH address
    // For demo purposes, use a fixed address
    // In production, properly derive from the public key
    this.rootAddress = '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'; // Demo address
    
    this.cellAddresses = new Map();
    this.useCellAddresses = useCellAddresses;
    
    console.log('BSVService initialized with HD wallet');
    console.log('Root address:', this.rootAddress);
    console.log('Per-cell addresses:', useCellAddresses ? 'ENABLED' : 'DISABLED');
  }

  /**
   * Toggle per-cell address generation
   */
  setUseCellAddresses(enabled: boolean): void {
    this.useCellAddresses = enabled;
    console.log('Per-cell addresses:', enabled ? 'ENABLED' : 'DISABLED');
  }

  /**
   * Get or generate address for a specific cell
   * Path: m/44'/236'/0'/row'/col'
   */
  getCellAddress(row: number, col: number): CellAddress {
    const cellKey = `${row}-${col}`;
    
    // Return cached address if exists
    if (this.cellAddresses.has(cellKey)) {
      return this.cellAddresses.get(cellKey)!;
    }
    
    // Derive new address for this cell
    const path = `m/44'/236'/0'/${row}'/${col}'`;
    const derivedKey = this.masterKey.derive(path);
    const privateKey = derivedKey.privKey;
    const publicKey = privateKey.toPublicKey();
    
    // Generate cell-specific address
    // For demo, create a deterministic address from row/col
    const address = `1Cell${row}x${col}DemoAddress${row * 100 + col}`;
    
    const cellAddress: CellAddress = {
      row,
      col,
      address: address,
      privateKey: privateKey.toWif(),
      publicKey: publicKey.toString(),
      path
    };
    
    this.cellAddresses.set(cellKey, cellAddress);
    return cellAddress;
  }

  /**
   * Create a BAP attestation for spreadsheet versioning
   */
  createBAPAttestation(
    spreadsheetId: string,
    version: number,
    previousTxId?: string
  ): string[] {
    const timestamp = Math.floor(Date.now() / 1000);
    
    // BAP format: [BAP_ID, ATTEST, SHA256(data), TYPE, ID, TIMESTAMP]
    const attestation = [
      BAP_ID,
      BAP_ATTESTATION_TYPE,
      spreadsheetId, // Using spreadsheet ID as the identifier
      BAP_ID_TYPE,
      version.toString(),
      timestamp.toString()
    ];

    if (previousTxId) {
      attestation.push(previousTxId); // Link to previous version
    }

    return attestation;
  }

  /**
   * Build a transaction to save spreadsheet data to blockchain
   */
  async buildSpreadsheetTransaction(
    spreadsheetData: any,
    utxos: any[],
    feeRate: number = 50 // satoshis per byte
  ): Promise<Transaction> {
    const tx = new Transaction();
    
    // Add inputs from UTXOs
    let totalInput = 0;
    for (const utxo of utxos) {
      // Create P2PKH unlocking script template
      const p2pkh = new P2PKH();
      const unlockingTemplate = p2pkh.unlock(this.rootPrivateKey, 'all');
      
      tx.addInput({
        sourceTransaction: utxo.tx,
        sourceOutputIndex: utxo.vout,
        unlockingScriptTemplate: unlockingTemplate,
        sequence: 0xffffffff
      });
      totalInput += utxo.satoshis;
    }

    // Serialize spreadsheet data
    const dataString = JSON.stringify(spreadsheetData);
    const dataBuffer = Buffer.from(dataString);
    
    // Create OP_RETURN output with spreadsheet data
    // Using chunked data for large spreadsheets
    const chunks = this.chunkData(dataBuffer, 220); // Safe chunk size
    
    for (const chunk of chunks) {
      const opReturnScript = new LockingScript();
      opReturnScript.writeOpCode(OP.OP_FALSE);
      opReturnScript.writeOpCode(OP.OP_RETURN);
      opReturnScript.writeBin(Array.from(chunk));
      
      tx.addOutput({
        lockingScript: opReturnScript,
        satoshis: 0
      });
    }

    // Add BAP attestation
    const bapData = this.createBAPAttestation(
      spreadsheetData.id,
      spreadsheetData.version || 1,
      spreadsheetData.previousTxId
    );
    
    const bapScript = new LockingScript();
    bapScript.writeOpCode(OP.OP_FALSE);
    bapScript.writeOpCode(OP.OP_RETURN);
    
    for (const field of bapData) {
      bapScript.writeBin(Array.from(Buffer.from(field)));
    }
    
    tx.addOutput({
      lockingScript: bapScript,
      satoshis: 0
    });

    // Calculate fee (simplified - in production use more accurate calculation)
    const estimatedSize = 250 + (utxos.length * 180) + (chunks.length * 50);
    const fee = Math.ceil(estimatedSize * feeRate);
    
    // Add change output
    const changeAmount = totalInput - fee - 1000; // 1000 sats for dust
    if (changeAmount > 546) { // Dust limit
      // For demo, use a simple P2PKH script
      const changeLockingScript = new LockingScript();
      
      tx.addOutput({
        lockingScript: changeLockingScript,
        satoshis: changeAmount
      });
    }

    // Transaction is ready - signing happens automatically with the unlocking template
    await tx.sign();
    
    return tx;
  }

  /**
   * Build a transaction for cell-level storage
   */
  async buildCellTransaction(
    row: number,
    col: number,
    value: string,
    utxos: any[]
  ): Promise<Transaction> {
    const cellAddress = this.getCellAddress(row, col);
    const cellPrivateKey = PrivateKey.fromWif(cellAddress.privateKey);
    const cellPublicKey = cellPrivateKey.toPublicKey();
    
    const tx = new Transaction();
    
    // Add inputs
    let totalInput = 0;
    for (const utxo of utxos) {
      const p2pkh = new P2PKH();
      const unlockingTemplate = p2pkh.unlock(cellPrivateKey, 'all');
      
      tx.addInput({
        sourceTransaction: utxo.tx,
        sourceOutputIndex: utxo.vout,
        unlockingScriptTemplate: unlockingTemplate,
        sequence: 0xffffffff
      });
      totalInput += utxo.satoshis;
    }
    
    // Create OP_RETURN with cell data
    const cellData = {
      row,
      col,
      value,
      timestamp: Date.now(),
      address: cellAddress.address
    };
    
    const dataBuffer = Buffer.from(JSON.stringify(cellData));
    const opReturnScript = new LockingScript();
    opReturnScript.writeOpCode(OP.OP_FALSE);
    opReturnScript.writeOpCode(OP.OP_RETURN);
    opReturnScript.writeBin(Array.from(dataBuffer));
    
    tx.addOutput({
      lockingScript: opReturnScript,
      satoshis: 0
    });
    
    // Add small output to cell address (for UTXO chain)
    // For demo, use a simple locking script
    const cellLockingScript = new LockingScript();
    
    tx.addOutput({
      lockingScript: cellLockingScript,
      satoshis: 546 // Dust limit
    });
    
    // Calculate fee and add change
    const estimatedSize = 250 + (utxos.length * 180) + 100;
    const fee = estimatedSize * 50; // 50 sats/byte
    const changeAmount = totalInput - fee - 546;
    
    if (changeAmount > 546) {
      // For demo, use a simple locking script
      const changeLockingScript = new LockingScript();
      tx.addOutput({
        lockingScript: changeLockingScript,
        satoshis: changeAmount
      });
    }
    
    // Sign transaction
    await tx.sign();
    
    return tx;
  }

  /**
   * Build NFT file format for spreadsheet
   */
  createSpreadsheetNFT(spreadsheetData: any): Buffer {
    const nft = {
      type: 'spreadsheet.nft',
      version: '1.0',
      protocol: 'BAP',
      data: {
        title: spreadsheetData.title,
        cells: spreadsheetData.cells,
        formulas: spreadsheetData.formulas,
        styles: spreadsheetData.styles,
        metadata: {
          created: spreadsheetData.created,
          modified: spreadsheetData.modified,
          owner: spreadsheetData.owner,
          signature: this.signData(JSON.stringify(spreadsheetData))
        }
      },
      // Include cell addresses if enabled
      cellAddresses: this.useCellAddresses ? 
        Array.from(this.cellAddresses.entries()).map(([key, addr]) => ({
          cell: key,
          address: addr.address,
          path: addr.path
        })) : undefined
    };

    return Buffer.from(JSON.stringify(nft));
  }

  /**
   * Create inscription for 1Sat Ordinals
   */
  createInscription(data: Buffer, contentType: string = 'application/json'): LockingScript {
    // 1Sat Ordinals inscription format
    const inscription = new LockingScript();
    inscription.writeOpCode(OP.OP_FALSE);
    inscription.writeOpCode(OP.OP_IF);
    inscription.writeBin(Array.from(Buffer.from('ord')));
    inscription.writeOpCode(OP.OP_1); // Protocol version
    inscription.writeBin(Array.from(Buffer.from(contentType)));
    inscription.writeOpCode(OP.OP_0); // Content encoding (0 = raw)
    inscription.writeBin(Array.from(data));
    inscription.writeOpCode(OP.OP_ENDIF);
    
    return inscription;
  }

  /**
   * Chunk data for OP_RETURN outputs
   */
  private chunkData(data: Buffer, chunkSize: number): Buffer[] {
    const chunks: Buffer[] = [];
    let offset = 0;
    
    while (offset < data.length) {
      const chunk = data.slice(offset, offset + chunkSize);
      chunks.push(chunk);
      offset += chunkSize;
    }
    
    return chunks;
  }

  /**
   * Sign data with private key
   */
  private signData(data: string): string {
    const hashArray = Hash.sha256(Array.from(Buffer.from(data)));
    const hashBigNum = BigNumber.fromHex(Buffer.from(hashArray).toString('hex'));
    const signature = ECDSA.sign(hashBigNum, this.rootPrivateKey);
    const sigString = signature.toString();
    return typeof sigString === 'string' ? sigString : JSON.stringify(sigString);
  }

  /**
   * Verify signature
   */
  verifySignature(data: string, signatureHex: string, publicKeyString: string): boolean {
    try {
      const hashArray = Hash.sha256(Array.from(Buffer.from(data)));
      const hashBigNum = BigNumber.fromHex(Buffer.from(hashArray).toString('hex'));
      const sig = Signature.fromCompact(Array.from(Buffer.from(signatureHex, 'hex')));
      const pubKey = PublicKey.fromString(publicKeyString);
      return ECDSA.verify(hashBigNum, sig, pubKey);
    } catch (error) {
      console.error('Signature verification failed:', error);
      return false;
    }
  }

  /**
   * Calculate transaction cost in USD (with 1 penny cap)
   */
  calculateCost(dataSize: number, bsvPriceUSD: number = 50): number {
    // Base calculation: size * fee rate * BSV price
    const estimatedBytes = dataSize + 500; // Add overhead for transaction structure
    const feeRate = 50; // satoshis per byte
    const feeSatoshis = estimatedBytes * feeRate;
    const feeBSV = feeSatoshis / 100000000;
    const costUSD = feeBSV * bsvPriceUSD;
    
    // Apply 1 penny cap
    return Math.min(costUSD, 0.01);
  }

  /**
   * Get address for receiving payments
   */
  getAddress(): string {
    return this.rootAddress;
  }

  /**
   * Get public key for verification
   */
  getPublicKey(): string {
    return this.rootPublicKey.toString();
  }

  /**
   * Export seed phrase for backup (sensitive!)
   */
  exportSeed(): string {
    // This should be handled very carefully in production
    return this.masterKey.toString();
  }

  /**
   * Get all cell addresses that have been generated
   */
  getAllCellAddresses(): CellAddress[] {
    return Array.from(this.cellAddresses.values());
  }

  /**
   * Check if using per-cell addresses
   */
  isUsingCellAddresses(): boolean {
    return this.useCellAddresses;
  }
}