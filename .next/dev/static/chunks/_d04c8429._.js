(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/services/BSVService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BSVService",
    ()=>BSVService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$mod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/mod.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/index.js [app-client] (ecmascript)");
;
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
 */ // BAP (Bitcoin Attestation Protocol) constants
const BAP_ID = '1BAPSuaPnfGnSBM3GLV9yhxUdYe4vGbdMT';
const BAP_ATTESTATION_TYPE = 'ATTEST';
const BAP_ID_TYPE = 'SPREADSHEET';
class BSVService {
    masterKey;
    rootPrivateKey;
    rootPublicKey;
    rootAddress;
    cellAddresses;
    useCellAddresses;
    constructor(seedPhrase, useCellAddresses = false){
        // Generate or use provided seed for HD wallet
        if (seedPhrase) {
            // Create HD wallet from seed phrase
            const seedBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(seedPhrase);
            this.masterKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HD"].fromSeed(Array.from(seedBuffer));
        } else {
            // Generate new random seed
            const randomKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateKey"].fromRandom();
            const seedBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(randomKey.toHex(), 'hex');
            this.masterKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HD"].fromSeed(Array.from(seedBuffer));
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
   */ setUseCellAddresses(enabled) {
        this.useCellAddresses = enabled;
        console.log('Per-cell addresses:', enabled ? 'ENABLED' : 'DISABLED');
    }
    /**
   * Get or generate address for a specific cell
   * Path: m/44'/236'/0'/row'/col'
   */ getCellAddress(row, col) {
        const cellKey = `${row}-${col}`;
        // Return cached address if exists
        if (this.cellAddresses.has(cellKey)) {
            return this.cellAddresses.get(cellKey);
        }
        // Derive new address for this cell
        const path = `m/44'/236'/0'/${row}'/${col}'`;
        const derivedKey = this.masterKey.derive(path);
        const privateKey = derivedKey.privKey;
        const publicKey = privateKey.toPublicKey();
        // Generate cell-specific address
        // For demo, create a deterministic address from row/col
        const address = `1Cell${row}x${col}DemoAddress${row * 100 + col}`;
        const cellAddress = {
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
   */ createBAPAttestation(spreadsheetId, version, previousTxId) {
        const timestamp = Math.floor(Date.now() / 1000);
        // BAP format: [BAP_ID, ATTEST, SHA256(data), TYPE, ID, TIMESTAMP]
        const attestation = [
            BAP_ID,
            BAP_ATTESTATION_TYPE,
            spreadsheetId,
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
   */ async buildSpreadsheetTransaction(spreadsheetData, utxos, feeRate = 50 // satoshis per byte
    ) {
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        // Add inputs from UTXOs
        let totalInput = 0;
        for (const utxo of utxos){
            // Create P2PKH unlocking script template
            const p2pkh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P2PKH"]();
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
        const dataBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(dataString);
        // Create OP_RETURN output with spreadsheet data
        // Using chunked data for large spreadsheets
        const chunks = this.chunkData(dataBuffer, 220); // Safe chunk size
        for (const chunk of chunks){
            const opReturnScript = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockingScript"]();
            opReturnScript.writeOpCode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OP"].OP_FALSE);
            opReturnScript.writeOpCode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OP"].OP_RETURN);
            opReturnScript.writeBin(Array.from(chunk));
            tx.addOutput({
                lockingScript: opReturnScript,
                satoshis: 0
            });
        }
        // Add BAP attestation
        const bapData = this.createBAPAttestation(spreadsheetData.id, spreadsheetData.version || 1, spreadsheetData.previousTxId);
        const bapScript = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockingScript"]();
        bapScript.writeOpCode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OP"].OP_FALSE);
        bapScript.writeOpCode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OP"].OP_RETURN);
        for (const field of bapData){
            bapScript.writeBin(Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(field)));
        }
        tx.addOutput({
            lockingScript: bapScript,
            satoshis: 0
        });
        // Calculate fee (simplified - in production use more accurate calculation)
        const estimatedSize = 250 + utxos.length * 180 + chunks.length * 50;
        const fee = Math.ceil(estimatedSize * feeRate);
        // Add change output
        const changeAmount = totalInput - fee - 1000; // 1000 sats for dust
        if (changeAmount > 546) {
            // For demo, use a simple P2PKH script
            const changeLockingScript = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockingScript"]();
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
   */ async buildCellTransaction(row, col, value, utxos) {
        const cellAddress = this.getCellAddress(row, col);
        const cellPrivateKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateKey"].fromWif(cellAddress.privateKey);
        const cellPublicKey = cellPrivateKey.toPublicKey();
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        // Add inputs
        let totalInput = 0;
        for (const utxo of utxos){
            const p2pkh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P2PKH"]();
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
        const dataBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(JSON.stringify(cellData));
        const opReturnScript = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockingScript"]();
        opReturnScript.writeOpCode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OP"].OP_FALSE);
        opReturnScript.writeOpCode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OP"].OP_RETURN);
        opReturnScript.writeBin(Array.from(dataBuffer));
        tx.addOutput({
            lockingScript: opReturnScript,
            satoshis: 0
        });
        // Add small output to cell address (for UTXO chain)
        // For demo, use a simple locking script
        const cellLockingScript = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockingScript"]();
        tx.addOutput({
            lockingScript: cellLockingScript,
            satoshis: 546 // Dust limit
        });
        // Calculate fee and add change
        const estimatedSize = 250 + utxos.length * 180 + 100;
        const fee = estimatedSize * 50; // 50 sats/byte
        const changeAmount = totalInput - fee - 546;
        if (changeAmount > 546) {
            // For demo, use a simple locking script
            const changeLockingScript = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockingScript"]();
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
   */ createSpreadsheetNFT(spreadsheetData) {
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
            cellAddresses: this.useCellAddresses ? Array.from(this.cellAddresses.entries()).map(([key, addr])=>({
                    cell: key,
                    address: addr.address,
                    path: addr.path
                })) : undefined
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(JSON.stringify(nft));
    }
    /**
   * Create inscription for 1Sat Ordinals
   */ createInscription(data, contentType = 'application/json') {
        // 1Sat Ordinals inscription format
        const inscription = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockingScript"]();
        inscription.writeOpCode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OP"].OP_FALSE);
        inscription.writeOpCode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OP"].OP_IF);
        inscription.writeBin(Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from('ord')));
        inscription.writeOpCode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OP"].OP_1); // Protocol version
        inscription.writeBin(Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(contentType)));
        inscription.writeOpCode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OP"].OP_0); // Content encoding (0 = raw)
        inscription.writeBin(Array.from(data));
        inscription.writeOpCode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OP"].OP_ENDIF);
        return inscription;
    }
    /**
   * Chunk data for OP_RETURN outputs
   */ chunkData(data, chunkSize) {
        const chunks = [];
        let offset = 0;
        while(offset < data.length){
            const chunk = data.slice(offset, offset + chunkSize);
            chunks.push(chunk);
            offset += chunkSize;
        }
        return chunks;
    }
    /**
   * Sign data with private key
   */ signData(data) {
        const hashArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash"].sha256(Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(data)));
        const hashBigNum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BigNumber"].fromHex(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(hashArray).toString('hex'));
        const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ECDSA"].sign(hashBigNum, this.rootPrivateKey);
        const sigString = signature.toString();
        return typeof sigString === 'string' ? sigString : JSON.stringify(sigString);
    }
    /**
   * Verify signature
   */ verifySignature(data, signatureHex, publicKeyString) {
        try {
            const hashArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hash"].sha256(Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(data)));
            const hashBigNum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BigNumber"].fromHex(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(hashArray).toString('hex'));
            const sig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Signature"].fromCompact(Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(signatureHex, 'hex')));
            const pubKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].fromString(publicKeyString);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ECDSA"].verify(hashBigNum, sig, pubKey);
        } catch (error) {
            console.error('Signature verification failed:', error);
            return false;
        }
    }
    /**
   * Calculate transaction cost in USD (with 1 penny cap)
   */ calculateCost(dataSize, bsvPriceUSD = 50) {
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
   */ getAddress() {
        return this.rootAddress;
    }
    /**
   * Get public key for verification
   */ getPublicKey() {
        return this.rootPublicKey.toString();
    }
    /**
   * Export seed phrase for backup (sensitive!)
   */ exportSeed() {
        // This should be handled very carefully in production
        return this.masterKey.toString();
    }
    /**
   * Get all cell addresses that have been generated
   */ getAllCellAddresses() {
        return Array.from(this.cellAddresses.values());
    }
    /**
   * Check if using per-cell addresses
   */ isUsingCellAddresses() {
        return this.useCellAddresses;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/BitcoinService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BitcoinService",
    ()=>BitcoinService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$BSVService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/BSVService.ts [app-client] (ecmascript)");
;
;
class BitcoinService {
    handcash = null;
    encryptionKey = null;
    isConnected = false;
    bsvService;
    useCellAddresses = false;
    constructor(useCellAddresses = false){
        this.handcash = null;
        this.encryptionKey = null;
        this.useCellAddresses = useCellAddresses;
        // Initialize BSV service with optional per-cell addresses
        this.bsvService = new __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$BSVService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BSVService"](undefined, useCellAddresses);
    }
    // Connect to HandCash wallet
    async connect() {
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
                            pay: async (payment)=>{
                                console.log('Payment via HandCash:', payment);
                                return {
                                    txid: 'handcash_tx_' + Date.now()
                                };
                            },
                            getBalance: async ()=>({
                                    satoshis: 1000000
                                })
                        }
                    };
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
    async connectDemoMode() {
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        this.handcash = {
            profile: {
                handle: 'demo_user',
                paymail: 'demo@handcash.io',
                publicKey: 'demo_public_key_' + Math.random().toString(36).substr(2, 9)
            },
            wallet: {
                pay: async (payment)=>({
                        txid: 'demo_tx_' + Date.now()
                    }),
                getBalance: async ()=>({
                        satoshis: 100000
                    })
            }
        };
        this.isConnected = true;
        this.generateEncryptionKey();
        console.log('Connected to Bitcoin testnet (demo mode)');
    }
    // Generate encryption key from user's public key
    generateEncryptionKey() {
        if (this.handcash?.profile?.publicKey) {
            // Create a deterministic encryption key from the public key
            this.encryptionKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SHA256(this.handcash.profile.publicKey).toString();
        }
    }
    // Encrypt data before storing on-chain
    encryptData(data) {
        if (!this.encryptionKey) {
            throw new Error('No encryption key available');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].AES.encrypt(data, this.encryptionKey).toString();
    }
    // Decrypt data retrieved from chain
    decryptData(encryptedData) {
        if (!this.encryptionKey) {
            throw new Error('No encryption key available');
        }
        const bytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].AES.decrypt(encryptedData, this.encryptionKey);
        return bytes.toString(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].enc.Utf8);
    }
    async createSpreadsheet(title) {
        const spreadsheetId = `spreadsheet_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const spreadsheet = {
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
    async updateCell(spreadsheetId, row, col, value, dataType) {
        const cellKey = `${row}-${col}`;
        // Encrypt the cell value before storing
        const encryptedValue = this.encryptData(value);
        const cellData = {
            row,
            col,
            value: encryptedValue,
            dataType,
            lastUpdated: Date.now(),
            encrypted: true
        };
        console.log('Preparing to save encrypted cell to Bitcoin:', {
            spreadsheetId,
            cellKey
        });
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
    async getCell(spreadsheetId, row, col) {
        console.log('Getting cell from Bitcoin:', {
            spreadsheetId,
            row,
            col
        });
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
    async calculateFormula(formula, cells) {
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
    async getBalance() {
        if (this.handcash?.wallet) {
            const balance = await this.handcash.wallet.getBalance();
            return (balance.satoshis / 100000000).toFixed(8); // Convert satoshis to Bitcoin
        }
        return '0.00000000';
    }
    async getAddress() {
        if (this.handcash?.profile) {
            return this.handcash.profile.paymail || this.handcash.profile.handle;
        }
        return 'Not connected';
    }
    isUserConnected() {
        return this.isConnected;
    }
    getUserHandle() {
        return this.handcash?.profile?.handle || 'Anonymous';
    }
    /**
   * Save entire spreadsheet to blockchain with BAP attestation
   * Costs 1 penny (capped)
   */ async saveSpreadsheetToBlockchain(spreadsheet) {
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
                bapAttestation: this.bsvService.createBAPAttestation(spreadsheet.id, 1, undefined // no previous version
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
   */ getBSVAddress() {
        return this.bsvService.getAddress();
    }
    /**
   * Get public key for verification
   */ getPublicKey() {
        return this.bsvService.getPublicKey();
    }
    /**
   * Toggle per-cell address generation
   */ setUseCellAddresses(enabled) {
        this.useCellAddresses = enabled;
        this.bsvService.setUseCellAddresses(enabled);
    }
    /**
   * Check if using per-cell addresses
   */ isUsingCellAddresses() {
        return this.useCellAddresses;
    }
    /**
   * Get Bitcoin address for a specific cell
   */ getCellAddress(row, col) {
        return this.bsvService.getCellAddress(row, col);
    }
    /**
   * Get all generated cell addresses
   */ getAllCellAddresses() {
        return this.bsvService.getAllCellAddresses();
    }
    /**
   * Save cell data with its own address (if enabled)
   */ async saveCellToBlockchain(spreadsheetId, row, col, value, dataType) {
        try {
            if (this.useCellAddresses) {
                // Get or generate address for this cell
                const cellAddress = this.getCellAddress(row, col);
                console.log(`Cell [${row},${col}] address:`, cellAddress.address);
                // In production, build and broadcast transaction
                // For now, store locally with address info
                const cellData = {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/HandCashAuthService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// HandCash Authentication Service - REST API Implementation
// This service handles OAuth2 flow with HandCash without SDK dependencies
__turbopack_context__.s([
    "HandCashAuthService",
    ()=>HandCashAuthService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
class HandCashAuthService {
    config;
    currentUser = null;
    tokens = null;
    // HandCash API endpoints
    HANDCASH_AUTH_URL = 'https://app.handcash.io/auth/authorize';
    HANDCASH_API_BASE = 'https://api.handcash.io';
    HANDCASH_CONNECT_BASE = 'https://connect.handcash.io/v3';
    constructor(){
        // Initialize configuration from environment variables
        this.config = {
            appId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_HANDCASH_APP_ID || '',
            appSecret: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_HANDCASH_APP_SECRET,
            redirectUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_HANDCASH_REDIRECT_URL || (("TURBOPACK compile-time truthy", 1) ? `${window.location.origin}/auth/handcash/callback` : "TURBOPACK unreachable"),
            environment: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'development'
        };
        // Load existing session if available
        this.loadSession();
    }
    // Load session from localStorage
    loadSession() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const savedTokens = localStorage.getItem('handcash_tokens');
            const savedUser = localStorage.getItem('handcash_user');
            if (savedTokens && savedUser) {
                const tokens = JSON.parse(savedTokens);
                const user = JSON.parse(savedUser);
                // Clear old sessions with generic "handcash_user" handle
                if (user.handle === 'handcash_user') {
                    console.log('Clearing old session with generic username');
                    this.clearSession();
                    return;
                }
                // Validate session is not expired
                if (this.isSessionValid(tokens)) {
                    this.tokens = tokens;
                    this.currentUser = user;
                } else {
                    // Clear expired session
                    this.clearSession();
                }
            }
        } catch (error) {
            console.error('Failed to load session:', error);
            this.clearSession();
        }
    }
    // Check if session is still valid
    isSessionValid(tokens) {
        if (!tokens.accessToken) return false;
        // If we have expiry info, check it
        if (tokens.expiresIn && ("TURBOPACK compile-time value", "object") !== 'undefined') {
            const savedAt = localStorage.getItem('handcash_tokens_saved_at');
            if (savedAt) {
                const expiryTime = parseInt(savedAt) + tokens.expiresIn * 1000;
                return Date.now() < expiryTime;
            }
        }
        // Default to valid if we can't determine
        return true;
    }
    // Save session to localStorage
    saveSession() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (this.tokens) {
            localStorage.setItem('handcash_tokens', JSON.stringify(this.tokens));
            localStorage.setItem('handcash_tokens_saved_at', Date.now().toString());
        }
        if (this.currentUser) {
            localStorage.setItem('handcash_user', JSON.stringify(this.currentUser));
        }
    }
    // Clear session
    clearSession() {
        this.tokens = null;
        this.currentUser = null;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        localStorage.removeItem('handcash_tokens');
        localStorage.removeItem('handcash_tokens_saved_at');
        localStorage.removeItem('handcash_user');
        // Also clear old format data
        localStorage.removeItem('handcash_auth_token');
        // Clear sessionStorage too
        sessionStorage.clear();
    }
    // Generate HandCash authorization URL
    getAuthorizationUrl() {
        if (!this.config.appId) {
            throw new Error('HandCash App ID is not configured');
        }
        // According to HandCash documentation, the correct format is:
        // https://app.handcash.io/#/authorizeApp?appId=${appId}
        // The redirect URL is configured in the HandCash dashboard, not passed as parameter
        const authUrl = `https://app.handcash.io/#/authorizeApp?appId=${this.config.appId}`;
        // Store state for CSRF protection (even though HandCash doesn't use it in the URL)
        this.generateState();
        return authUrl;
    }
    // Generate random state for CSRF protection
    generateState() {
        const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        if ("TURBOPACK compile-time truthy", 1) {
            sessionStorage.setItem('handcash_oauth_state', state);
        }
        return state;
    }
    // Verify state parameter for CSRF protection
    verifyState(state) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const savedState = sessionStorage.getItem('handcash_oauth_state');
        sessionStorage.removeItem('handcash_oauth_state');
        return savedState === state;
    }
    // Start OAuth login flow
    async login() {
        try {
            const authUrl = this.getAuthorizationUrl();
            console.log('=== HandCash OAuth2 Authentication ===');
            console.log('App ID:', this.config.appId);
            console.log('Redirect URL:', this.config.redirectUrl);
            console.log('Authorization URL:', authUrl);
            console.log('=====================================');
            // Redirect to HandCash for authorization
            if ("TURBOPACK compile-time truthy", 1) {
                window.location.href = authUrl;
            }
        } catch (error) {
            console.error('Failed to start OAuth flow:', error);
            throw error;
        }
    }
    // Handle HandCash callback - HandCash returns authToken directly
    async handleCallback(callbackUrl) {
        try {
            console.log('=== HandCash Callback Handler ===');
            console.log('Full callback URL:', callbackUrl);
            const url = new URL(callbackUrl);
            // HandCash returns the authToken in the hash fragment
            // Format: #authToken=xxx or sometimes just #xxx
            let authToken = null;
            // First check hash fragment
            if (url.hash) {
                const hashContent = url.hash.substring(1); // Remove #
                console.log('Hash content:', hashContent);
                // Check if it's a parameter format (#authToken=xxx)
                if (hashContent.includes('=')) {
                    const hashParams = new URLSearchParams(hashContent);
                    authToken = hashParams.get('authToken') || hashParams.get('token');
                } else if (hashContent.length > 20) {
                    // Might be just the token (#xxx)
                    authToken = hashContent;
                }
            }
            // Also check query params as fallback
            if (!authToken) {
                const urlParams = new URLSearchParams(url.search);
                authToken = urlParams.get('authToken') || urlParams.get('auth_token') || urlParams.get('token') || urlParams.get('code'); // HandCash sometimes uses 'code'
            }
            // Check for errors
            const urlParams = new URLSearchParams(url.search);
            const hashParams = url.hash ? new URLSearchParams(url.hash.substring(1)) : new URLSearchParams();
            const error = urlParams.get('error') || hashParams.get('error');
            console.log('Extracted authToken:', authToken);
            console.log('Found error:', error);
            // Check for errors
            if (error) {
                const errorDescription = urlParams.get('error_description') || hashParams.get('error_description');
                throw new Error(`HandCash error: ${error} - ${errorDescription || 'Unknown error'}`);
            }
            if (!authToken) {
                console.error('No authToken found in callback URL');
                console.log('URL hash:', url.hash);
                console.log('URL search:', url.search);
                throw new Error('No authToken received from HandCash. Check the console for debug information.');
            }
            // HandCash directly provides the authToken, no exchange needed
            this.tokens = {
                accessToken: authToken,
                tokenType: 'Bearer'
            };
            // Try to fetch user profile using the authToken
            const user = await this.fetchUserProfile();
            this.currentUser = user;
            // Save session
            this.saveSession();
            return user;
        } catch (error) {
            console.error('Callback handling failed:', error);
            throw error;
        }
    }
    // Exchange authorization code for access tokens
    async exchangeCodeForTokens(code) {
        try {
            const params = new URLSearchParams({
                grant_type: 'authorization_code',
                code: code,
                client_id: this.config.appId,
                redirect_uri: this.config.redirectUrl
            });
            // Add client secret if available (for confidential clients)
            if (this.config.appSecret) {
                params.append('client_secret', this.config.appSecret);
            }
            // Try different token endpoints
            const tokenEndpoints = [
                `${this.HANDCASH_API_BASE}/oauth/token`,
                `${this.HANDCASH_CONNECT_BASE}/oauth/token`,
                `https://app.handcash.io/api/oauth/token`
            ];
            for (const endpoint of tokenEndpoints){
                try {
                    const response = await fetch(endpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Accept': 'application/json'
                        },
                        body: params.toString()
                    });
                    if (response.ok) {
                        const data = await response.json();
                        return {
                            accessToken: data.access_token,
                            refreshToken: data.refresh_token,
                            expiresIn: data.expires_in,
                            tokenType: data.token_type || 'Bearer'
                        };
                    }
                } catch (err) {
                    console.warn(`Token exchange failed at ${endpoint}:`, err);
                }
            }
            throw new Error('Failed to exchange code for tokens at all endpoints');
        } catch (error) {
            console.error('Token exchange failed:', error);
            throw error;
        }
    }
    // Fetch user profile from HandCash
    async fetchUserProfile() {
        if (!this.tokens?.accessToken) {
            throw new Error('No access token available');
        }
        // Try to fetch profile from server-side API
        const SKIP_API_PROFILE_FETCH = false; // Enable API profile fetching
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                // Determine API endpoint based on environment
                const apiBase = this.config.environment === 'production' ? '' // In production, use same origin (Vercel handles /api routes)
                 : 'http://localhost:4001'; // Local API server on port 4001
                console.log('Fetching user profile from API...');
                console.log('API Base:', apiBase);
                console.log('Auth Token:', this.tokens.accessToken.substring(0, 20) + '...');
                // Call our API endpoint to fetch the profile server-side
                const response = await fetch(`${apiBase}/api/handcash-profile`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        authToken: this.tokens.accessToken
                    })
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log('Profile fetched successfully:', data.profile);
                    return {
                        handle: data.profile.handle || 'handcash_user',
                        paymail: data.profile.paymail || 'user@handcash.io',
                        publicKey: data.profile.publicKey,
                        avatarUrl: data.profile.avatarUrl,
                        displayName: data.profile.displayName || data.profile.handle
                    };
                } else {
                    const error = await response.json();
                    console.error('API error fetching profile:', error);
                }
            } catch (error) {
                console.error('Failed to fetch user profile from API:', error);
            }
        }
        // Fallback: Try to decode the authToken if it's a JWT
        try {
            const tokenParts = this.tokens.accessToken.split('.');
            if (tokenParts.length === 3) {
                const payload = JSON.parse(atob(tokenParts[1]));
                console.log('Decoded token payload:', payload);
                if (payload.handle || payload.user || payload.username) {
                    return {
                        handle: payload.handle || payload.user || payload.username,
                        paymail: payload.paymail || `${payload.handle || payload.user || 'user'}@handcash.io`,
                        publicKey: payload.publicKey || payload.id,
                        avatarUrl: payload.avatarUrl || payload.avatar,
                        displayName: payload.displayName || payload.name
                    };
                }
            }
        } catch (decodeError) {
            console.log('Token is not a JWT or could not be decoded');
        }
        // Final fallback - create a unique identifier from the token
        console.warn('Using fallback user data - Enable API endpoint for real profile');
        // Generate a consistent username from the token
        const tokenHash = this.tokens.accessToken.substring(0, 8).toLowerCase();
        const fallbackHandle = `user_${tokenHash}`;
        return {
            handle: fallbackHandle,
            paymail: `${fallbackHandle}@handcash.io`,
            publicKey: this.tokens.accessToken.substring(0, 20),
            avatarUrl: undefined,
            displayName: `User ${tokenHash.toUpperCase()}`
        };
    }
    // Make authenticated API request
    async makeAuthenticatedRequest(endpoint, options = {}) {
        if (!this.tokens?.accessToken) {
            throw new Error('Not authenticated');
        }
        const response = await fetch(endpoint, {
            ...options,
            headers: {
                ...options.headers,
                'Authorization': `${this.tokens.tokenType || 'Bearer'} ${this.tokens.accessToken}`,
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            if (response.status === 401) {
                // Token expired, clear session
                this.clearSession();
                throw new Error('Authentication expired, please login again');
            }
            throw new Error(`API request failed: ${response.statusText}`);
        }
        return response.json();
    }
    // Public methods
    logout() {
        this.clearSession();
    }
    isAuthenticated() {
        return this.tokens !== null && this.currentUser !== null;
    }
    getCurrentUser() {
        return this.currentUser;
    }
    getAccessToken() {
        return this.tokens?.accessToken || null;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/HandCashService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HandCashService",
    ()=>HandCashService
]);
// HandCash Service - Simplified wrapper using HandCashAuthService
// This maintains backward compatibility while using the new REST API implementation
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$HandCashAuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/HandCashAuthService.ts [app-client] (ecmascript)");
;
class HandCashService {
    authService;
    constructor(){
        this.authService = new __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$HandCashAuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandCashAuthService"]();
    }
    // Start the login flow
    async login() {
        return this.authService.login();
    }
    // Handle OAuth callback
    async handleCallback(authToken) {
        // The new service expects the full callback URL, not just the token
        // If we're given just a token, construct the URL
        let callbackUrl;
        if (authToken.startsWith('http')) {
            // It's already a URL
            callbackUrl = authToken;
        } else {
            // It's just a token, construct URL with it
            // This handles legacy code that might pass just the token
            callbackUrl = `${window.location.origin}/auth/handcash/callback?code=${authToken}`;
        }
        return this.authService.handleCallback(callbackUrl);
    }
    // Logout
    logout() {
        this.authService.logout();
    }
    // Check if user is logged in
    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
    // Get current user
    getCurrentUser() {
        return this.authService.getCurrentUser();
    }
    // Make a payment (placeholder for future implementation)
    async makePayment(destination, amount, currencyCode = 'USD') {
        if (!this.isAuthenticated()) {
            throw new Error('User not authenticated');
        }
        // TODO: Implement actual payment using HandCash API
        console.log('Payment request:', {
            destination,
            amount,
            currencyCode
        });
        return {
            transactionId: 'demo_tx_' + Date.now(),
            timestamp: new Date().toISOString()
        };
    }
    // Get wallet balance (placeholder for future implementation)
    async getBalance() {
        if (!this.isAuthenticated()) {
            throw new Error('User not authenticated');
        }
        // TODO: Implement actual balance check using HandCash API
        return {
            total: 0.001,
            currency: 'BSV',
            spendable: 0.001
        };
    }
    // Load existing session (for compatibility)
    loadSession() {
    // Session is now handled by HandCashAuthService
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/contexts/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$BitcoinService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/BitcoinService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$HandCashService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/HandCashService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [bitcoinService, setBitcoinService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [handcashService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$HandCashService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandCashService"]());
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const initializeBitcoinService = async ()=>{
        const service = new __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$BitcoinService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BitcoinService"]();
        await service.connect();
        setBitcoinService(service);
    };
    const checkAuthentication = ()=>{
        if (handcashService.isAuthenticated()) {
            const user = handcashService.getCurrentUser();
            setCurrentUser(user);
            setIsAuthenticated(true);
            initializeBitcoinService();
        } else {
            initializeBitcoinService();
        }
        setIsLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // Check if we're coming back from HandCash with an authToken
            const urlParams = new URLSearchParams(window.location.search);
            const hashParams = new URLSearchParams(window.location.hash.replace('#', ''));
            // Check multiple possible parameter names HandCash might use
            const authToken = urlParams.get('authToken') || urlParams.get('auth_token') || urlParams.get('access_token') || urlParams.get('token') || hashParams.get('authToken') || hashParams.get('auth_token') || hashParams.get('access_token') || hashParams.get('token');
            if (authToken) {
                console.log('Found authToken, handling callback...');
                handcashService.handleCallback(authToken).then({
                    "AuthProvider.useEffect": (user)=>{
                        login(user);
                        window.history.replaceState({}, document.title, window.location.pathname);
                    }
                }["AuthProvider.useEffect"]).catch({
                    "AuthProvider.useEffect": (err)=>{
                        console.error('Failed to handle callback:', err);
                    }
                }["AuthProvider.useEffect"]);
            } else {
                checkAuthentication();
            }
        }
    }["AuthProvider.useEffect"], [
        handcashService
    ]);
    const login = (user)=>{
        setCurrentUser(user);
        setIsAuthenticated(true);
        initializeBitcoinService();
    };
    const logout = ()=>{
        localStorage.clear();
        sessionStorage.clear();
        document.cookie.split(";").forEach(function(c) {
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        setIsAuthenticated(false);
        setCurrentUser(null);
        setBitcoinService(null);
        window.location.replace('/');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            bitcoinService,
            handcashService,
            isAuthenticated,
            currentUser,
            isLoading,
            login,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/AuthContext.tsx",
        lineNumber: 91,
        columnNumber: 9
    }, this);
}
_s(AuthProvider, "oaQzxSY5jzdPQNQ/cPs5c1VLdWE=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/ClientLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AuthContext.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CleanTaskbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/ui/CleanTaskbar.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/ui/CleanTaskbar.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c = CleanTaskbar;
const DevSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/ui/DevSidebar.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/ui/DevSidebar.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c1 = DevSidebar;
const DockManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/ui/DockManager.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/ui/DockManager.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c2 = DockManager;
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c3 = ()=>__turbopack_context__.A("[project]/components/ui/Footer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/ui/Footer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c4 = Footer;
const ProofOfConceptBanner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/ui/ProofOfConceptBanner.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/ui/ProofOfConceptBanner.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c5 = ProofOfConceptBanner;
function ClientLayout({ children }) {
    _s();
    const { isAuthenticated, currentUser, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientLayout.useEffect": ()=>{
            const handleResize = {
                "ClientLayout.useEffect.handleResize": ()=>{
                    setIsMobile(window.innerWidth <= 768);
                }
            }["ClientLayout.useEffect.handleResize"];
            handleResize();
            window.addEventListener('resize', handleResize);
            return ({
                "ClientLayout.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["ClientLayout.useEffect"];
        }
    }["ClientLayout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `App ${sidebarCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProofOfConceptBanner, {}, void 0, false, {
                fileName: "[project]/app/ClientLayout.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "taskbar-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CleanTaskbar, {
                    tickerCollapsed: true,
                    isAuthenticated: isAuthenticated,
                    currentUser: currentUser,
                    onLogout: logout
                }, void 0, false, {
                    fileName: "[project]/app/ClientLayout.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ClientLayout.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "app-with-sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DevSidebar, {
                        onCollapsedChange: setSidebarCollapsed
                    }, void 0, false, {
                        fileName: "[project]/app/ClientLayout.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "main-content",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/ClientLayout.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ClientLayout.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DockManager, {}, void 0, false, {
                fileName: "[project]/app/ClientLayout.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ClientLayout.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s(ClientLayout, "JFev+JBUXdVQSoNE2bpUZRgcLnQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c6 = ClientLayout;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "CleanTaskbar");
__turbopack_context__.k.register(_c1, "DevSidebar");
__turbopack_context__.k.register(_c2, "DockManager");
__turbopack_context__.k.register(_c3, "Footer$dynamic");
__turbopack_context__.k.register(_c4, "Footer");
__turbopack_context__.k.register(_c5, "ProofOfConceptBanner");
__turbopack_context__.k.register(_c6, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d04c8429._.js.map