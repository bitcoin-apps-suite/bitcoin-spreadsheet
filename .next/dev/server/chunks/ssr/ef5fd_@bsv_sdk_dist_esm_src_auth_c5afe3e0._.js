module.exports = [
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/Certificate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Certificate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$ProtoWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/ProtoWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Signature.js [app-ssr] (ecmascript)");
;
;
;
class Certificate {
    /**
     * Type identifier for the certificate, base64 encoded string, 32 bytes.
     */ type;
    /**
     * Unique serial number of the certificate, base64 encoded string, 32 bytes.
     */ serialNumber;
    /**
     * The public key belonging to the certificate's subject, compressed public key hex string.
     */ subject;
    /**
     * Public key of the certifier who issued the certificate, compressed public key hex string.
     */ certifier;
    /**
     * The outpoint used to confirm that the certificate has not been revoked (TXID.OutputIndex), as a string.
     */ revocationOutpoint;
    /**
     * All the fields present in the certificate, with field names as keys and encrypted field values as Base64 strings.
     */ fields;
    /**
     * Certificate signature by the certifier's private key, DER encoded hex string.
     */ signature;
    /**
     * Constructs a new Certificate.
     *
     * @param {Base64String} type - Type identifier for the certificate, base64 encoded string, 32 bytes.
     * @param {Base64String} serialNumber - Unique serial number of the certificate, base64 encoded string, 32 bytes.
     * @param {PubKeyHex} subject - The public key belonging to the certificate's subject, compressed public key hex string.
     * @param {PubKeyHex} certifier - Public key of the certifier who issued the certificate, compressed public key hex string.
     * @param {OutpointString} revocationOutpoint - The outpoint used to confirm that the certificate has not been revoked (TXID.OutputIndex), as a string.
     * @param {Record<CertificateFieldNameUnder50Bytes, string>} fields - All the fields present in the certificate.
     * @param {HexString} signature - Certificate signature by the certifier's private key, DER encoded hex string.
     */ constructor(type, serialNumber, subject, certifier, revocationOutpoint, fields, signature){
        this.type = type;
        this.serialNumber = serialNumber;
        this.subject = subject;
        this.certifier = certifier;
        this.revocationOutpoint = revocationOutpoint;
        this.fields = fields;
        this.signature = signature;
    }
    /**
     * Serializes the certificate into binary format, with or without a signature.
     *
     * @param {boolean} [includeSignature=true] - Whether to include the signature in the serialization.
     * @returns {number[]} - The serialized certificate in binary format.
     */ toBinary(includeSignature = true) {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        // Write type (Base64String, 32 bytes)
        const typeBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](this.type, 'base64');
        writer.write(typeBytes);
        // Write serialNumber (Base64String, 32 bytes)
        const serialNumberBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](this.serialNumber, 'base64');
        writer.write(serialNumberBytes);
        // Write subject (33 bytes compressed PubKeyHex)
        const subjectBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](this.subject, 'hex');
        writer.write(subjectBytes);
        // Write certifier (33 bytes compressed PubKeyHex)
        const certifierBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](this.certifier, 'hex');
        writer.write(certifierBytes);
        // Write revocationOutpoint (TXID + OutputIndex)
        const [txid, outputIndex] = this.revocationOutpoint.split('.');
        const txidBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](txid, 'hex');
        writer.write(txidBytes);
        writer.writeVarIntNum(Number(outputIndex));
        // Write fields
        // Sort field names lexicographically
        const fieldNames = Object.keys(this.fields).sort();
        writer.writeVarIntNum(fieldNames.length);
        for (const fieldName of fieldNames){
            const fieldValue = this.fields[fieldName];
            // Field name
            const fieldNameBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](fieldName, 'utf8');
            writer.writeVarIntNum(fieldNameBytes.length);
            writer.write(fieldNameBytes);
            // Field value
            const fieldValueBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](fieldValue, 'utf8');
            writer.writeVarIntNum(fieldValueBytes.length);
            writer.write(fieldValueBytes);
        }
        // Write signature if included
        if (includeSignature && (this.signature ?? '').length > 0) {
            const signatureBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](this.signature, 'hex'); // ✅ Type assertion ensures it's a string
            writer.write(signatureBytes);
        }
        return writer.toArray();
    }
    /**
     * Deserializes a certificate from binary format.
     *
     * @param {number[]} bin - The binary data representing the certificate.
     * @returns {Certificate} - The deserialized Certificate object.
     */ static fromBinary(bin) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](bin);
        // Read type
        const typeBytes = reader.read(32);
        const type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](typeBytes);
        // Read serialNumber
        const serialNumberBytes = reader.read(32);
        const serialNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](serialNumberBytes);
        // Read subject (33 bytes)
        const subjectBytes = reader.read(33);
        const subject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](subjectBytes);
        // Read certifier (33 bytes)
        const certifierBytes = reader.read(33);
        const certifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](certifierBytes);
        // Read revocationOutpoint
        const txidBytes = reader.read(32);
        const txid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](txidBytes);
        const outputIndex = reader.readVarIntNum();
        const revocationOutpoint = `${txid}.${outputIndex}`;
        // Read fields
        const numFields = reader.readVarIntNum();
        const fields = {};
        for(let i = 0; i < numFields; i++){
            // Field name
            const fieldNameLength = reader.readVarIntNum();
            const fieldNameBytes = reader.read(fieldNameLength);
            const fieldName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](fieldNameBytes);
            // Field value
            const fieldValueLength = reader.readVarIntNum();
            const fieldValueBytes = reader.read(fieldValueLength);
            const fieldValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](fieldValueBytes);
            fields[fieldName] = fieldValue;
        }
        // Read signature if present
        let signature;
        if (!reader.eof()) {
            const signatureBytes = reader.read();
            const sig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromDER(signatureBytes);
            signature = sig.toString('hex');
        }
        return new Certificate(type, serialNumber, subject, certifier, revocationOutpoint, fields, signature);
    }
    /**
     * Verifies the certificate's signature.
     *
     * @returns {Promise<boolean>} - A promise that resolves to true if the signature is valid.
     */ async verify() {
        // A verifier can be any wallet capable of verifying signatures
        const verifier = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$ProtoWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('anyone');
        const verificationData = this.toBinary(false); // Exclude the signature from the verification data
        const signatureHex = this.signature ?? ''; // Provide a fallback value (empty string)
        const { valid } = await verifier.verifySignature({
            signature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](signatureHex, 'hex'),
            data: verificationData,
            protocolID: [
                2,
                'certificate signature'
            ],
            keyID: `${this.type} ${this.serialNumber}`,
            counterparty: this.certifier // The certifier is the one who signed the certificate
        });
        return valid;
    }
    /**
   * Signs the certificate using the provided certifier wallet.
   *
   * @param {Wallet} certifierWallet - The wallet representing the certifier.
   * @returns {Promise<void>}
   */ async sign(certifierWallet) {
        if (this.signature != null && this.signature.length > 0) {
            throw new Error(`Certificate has already been signed! Signature present: ${this.signature}`);
        }
        // Ensure the certifier declared is the one actually signing
        this.certifier = (await certifierWallet.getPublicKey({
            identityKey: true
        })).publicKey;
        const preimage = this.toBinary(false); // Exclude the signature when signing
        const { signature } = await certifierWallet.createSignature({
            data: preimage,
            protocolID: [
                2,
                'certificate signature'
            ],
            keyID: `${this.type} ${this.serialNumber}`
        });
        this.signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](signature);
    }
    /**
     * Helper function which retrieves the protocol ID and key ID for certificate field encryption.
     *
     * For master certificate creation, no serial number is provided because entropy is required
     * from both the client and the certifier. In this case, the `keyID` is simply the `fieldName`.
     *
     * For VerifiableCertificates verifier keyring creation, both the serial number and field name are available,
     * so the `keyID` is formed by concatenating the `serialNumber` and `fieldName`.
     *
     * @param fieldName - The name of the field within the certificate to be encrypted.
     * @param serialNumber - (Optional) The serial number of the certificate.
     * @returns An object containing:
     *   - `protocolID` (WalletProtocol): The protocol ID for certificate field encryption.
     *   - `keyID` (string): A unique key identifier. It is the `fieldName` if `serialNumber` is undefined,
     *     otherwise it is a combination of `serialNumber` and `fieldName`.
     */ static getCertificateFieldEncryptionDetails(fieldName, serialNumber) {
        return {
            protocolID: [
                2,
                'certificate field encryption'
            ],
            keyID: serialNumber ? `${serialNumber} ${fieldName}` : fieldName
        };
    }
    /**
     * Creates a Certificate instance from a plain object representation.
     *
     * @param obj - The object containing certificate data.
     * @returns A new Certificate instance.
     */ static fromObject(obj) {
        const cert = new Certificate(obj.type, obj.serialNumber, obj.subject, obj.certifier, obj.revocationOutpoint, obj.fields, obj.signature);
        return cert;
    }
} //# sourceMappingURL=Certificate.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/MasterCertificate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MasterCertificate",
    ()=>MasterCertificate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/Certificate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/SymmetricKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-ssr] (ecmascript)");
;
;
;
;
class MasterCertificate extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    masterKeyring;
    constructor(type, serialNumber, subject, certifier, revocationOutpoint, fields, masterKeyring, signature){
        super(type, serialNumber, subject, certifier, revocationOutpoint, fields, signature);
        // Ensure every field in `fields` is a string and has a corresponding key in `masterKeyring`
        for (const fieldName of Object.keys(fields)){
            if (masterKeyring[fieldName] === undefined || masterKeyring[fieldName] === '') {
                throw new Error(`Master keyring must contain a value for every field. Missing or empty key for field: "${fieldName}".`);
            }
        }
        this.masterKeyring = masterKeyring;
    }
    /**
     * Encrypts certificate fields for a subject and generates a master keyring.
     * This method returns a master keyring tied to a specific certifier or subject who will validate
     * and sign off on the fields, along with the encrypted certificate fields.
     *
     * @param {ProtoWallet} creatorWallet - The wallet of the creator responsible for encrypting the fields.
     * @param {WalletCounterparty} certifierOrSubject - The certifier or subject who will validate the certificate fields.
     * @param {Record<CertificateFieldNameUnder50Bytes, string>} fields - A record of certificate field names (under 50 bytes) mapped to their values.
     * @param {BooleanDefaultFalse} [privileged] - Whether this is a privileged request.
     * @param {DescriptionString5to50Bytes} [privilegedReason] - Reason provided for privileged access, required if this is a privileged operation.   *
     * @returns {Promise<CreateCertificateFieldsResult>} A promise resolving to an object containing:
     *   - `certificateFields` {Record<CertificateFieldNameUnder50Bytes, Base64String>}:
     *     The encrypted certificate fields.
     *   - `masterKeyring` {Record<CertificateFieldNameUnder50Bytes, Base64String>}:
     *     The master keyring containing encrypted revelation keys for each field.
     */ static async createCertificateFields(creatorWallet, certifierOrSubject, fields, privileged, privilegedReason) {
        const certificateFields = {};
        const masterKeyring = {};
        for (const [fieldName, fieldValue] of Object.entries(fields)){
            const fieldSymmetricKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromRandom();
            const encryptedFieldValue = fieldSymmetricKey.encrypt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](fieldValue, 'utf8'));
            certificateFields[fieldName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](encryptedFieldValue);
            const { ciphertext: encryptedFieldRevelationKey } = await creatorWallet.encrypt({
                plaintext: fieldSymmetricKey.toArray(),
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getCertificateFieldEncryptionDetails(fieldName),
                counterparty: certifierOrSubject,
                privileged,
                privilegedReason
            });
            masterKeyring[fieldName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](encryptedFieldRevelationKey);
        }
        return {
            certificateFields,
            masterKeyring
        };
    }
    /**
     * Creates a keyring for a verifier, enabling them to decrypt specific certificate fields.
     * This method decrypts the master field keys for the specified fields and re-encrypts them
     * for the verifier's identity key. The result is a keyring containing the keys necessary
     * for the verifier to access the designated fields.
     *
     * @param {ProtoWallet} subjectWallet - The wallet instance of the subject, used to decrypt and re-encrypt field keys.
     * @param {WalletCounterparty} verifier - The verifier who will receive access to the selectively revealed fields. Can be an identity key as hex, 'anyone', or 'self'.
     * @param {string[]} fieldsToReveal - An array of field names to be revealed to the verifier. Must be a subset of the certificate's fields.
     * @param {string} [originator] - Optional originator identifier, used if additional context is needed for decryption and encryption operations.
     * @returns {Promise<Record<CertificateFieldNameUnder50Bytes, string>>} - A keyring mapping field names to encrypted field revelation keys, allowing the verifier to decrypt specified fields.
     * @param {BooleanDefaultFalse} [privileged] - Whether this is a privileged request.
     * @param {DescriptionString5to50Bytes} [privilegedReason] - Reason provided for privileged access, required if this is a privileged operation.   *
     * @throws {Error} Throws an error if:
     *   - fieldsToReveal is not an array of strings.
     *   - A field in `fieldsToReveal` does not exist in the certificate.
     *   - The decrypted master field key fails to decrypt the corresponding field (indicating an invalid key).
     */ static async createKeyringForVerifier(subjectWallet, certifier, verifier, fields, fieldsToReveal, masterKeyring, serialNumber, privileged, privilegedReason) {
        if (!Array.isArray(fieldsToReveal)) {
            throw new Error('fieldsToReveal must be an array of strings');
        }
        const fieldRevelationKeyring = {};
        for (const fieldName of fieldsToReveal){
            // Make sure that fields to reveal is a subset of the certificate fields
            if (fields[fieldName] === undefined || fields[fieldName] === null || fields[fieldName] === '') {
                throw new Error(`Fields to reveal must be a subset of the certificate fields. Missing the "${fieldName}" field.`);
            }
            // Decrypt the master field key and verify that derived key actually decrypts requested field
            const masterFieldKey = (await this.decryptField(subjectWallet, masterKeyring, fieldName, fields[fieldName], certifier, privileged, privilegedReason)).fieldRevelationKey;
            // Encrypt derived fieldRevelationKey for verifier
            const { ciphertext: encryptedFieldRevelationKey } = await subjectWallet.encrypt({
                plaintext: masterFieldKey,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getCertificateFieldEncryptionDetails(fieldName, serialNumber),
                counterparty: verifier,
                privileged,
                privilegedReason
            });
            // Add encryptedFieldRevelationKey to fieldRevelationKeyring
            fieldRevelationKeyring[fieldName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](encryptedFieldRevelationKey);
        }
        // Return the field revelation keyring which can be used to create a verifiable certificate for a verifier.
        return fieldRevelationKeyring;
    }
    /**
     * Issues a new MasterCertificate for a specified subject.
     *
     * This method generates a certificate containing encrypted fields and a keyring
     * for the subject to decrypt all fields. Each field is encrypted with a randomly
     * generated symmetric key, which is then encrypted for the subject. The certificate
     * can also includes a revocation outpoint to manage potential revocation.
     *
     * @param {ProtoWallet} certifierWallet - The wallet of the certifier, used to sign the certificate and encrypt field keys.
     * @param {WalletCounterparty} subject - The subject for whom the certificate is issued.
     * @param {Record<CertificateFieldNameUnder50Bytes, string>} fields - Unencrypted certificate fields to include, with their names and values.
     * @param {string} certificateType - The type of certificate being issued.
     * @param {function(string, Record<CertificateFieldNameUnder50Bytes, string>?): Promise<string>} getRevocationOutpoint -
     *   Optional function to obtain a revocation outpoint for the certificate. Defaults to a placeholder.
     * @param {function(string): Promise<void>} updateProgress - Optional callback for reporting progress updates during the operation. Defaults to a no-op.
     * @returns {Promise<MasterCertificate>} - A signed MasterCertificate instance containing the encrypted fields and subject specific keyring.
     *
     * @throws {Error} Throws an error if any operation (e.g., encryption, signing) fails during certificate issuance.
     */ static async issueCertificateForSubject(certifierWallet, subject, fields, certificateType, getRevocationOutpoint = async (_serial)=>{
        void _serial; // Explicitly acknowledge unused parameter
        return '00'.repeat(32);
    }, serialNumber) {
        // 1. Generate a random serialNumber if not provided
        const finalSerialNumber = serialNumber ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(32));
        // 2. Create encrypted certificate fields and associated master keyring
        const { certificateFields, masterKeyring } = await this.createCertificateFields(certifierWallet, subject, fields);
        // 3. Obtain a revocation outpoint
        const revocationOutpoint = await getRevocationOutpoint(finalSerialNumber);
        let subjectIdentityKey;
        if (subject === 'self') {
            subjectIdentityKey = (await certifierWallet.getPublicKey({
                identityKey: true
            })).publicKey;
        } else {
            subjectIdentityKey = subject;
        }
        // 4. Create new MasterCertificate instance
        const certificate = new MasterCertificate(certificateType, finalSerialNumber, subjectIdentityKey, (await certifierWallet.getPublicKey({
            identityKey: true
        })).publicKey, revocationOutpoint, certificateFields, masterKeyring);
        // 5. Sign and return the new MasterCertificate certifying the subject.
        await certificate.sign(certifierWallet);
        return certificate;
    }
    /**
     * Decrypts all fields in the MasterCertificate using the subject's or certifier's wallet.
     *
     * This method allows the subject or certifier to decrypt the `masterKeyring` and retrieve
     * the encryption keys for each field, which are then used to decrypt the corresponding field values.
     * The counterparty used for decryption depends on how the certificate fields were created:
     * - If the certificate is self-signed, the counterparty should be set to 'self'.
     * - Otherwise, the counterparty should always be the other party involved in the certificate issuance process (the subject or certifier).
     *
     * @param {ProtoWallet} subjectOrCertifierWallet - The wallet of the subject or certifier, used to decrypt the master keyring and field values.
     * @param {Record<CertificateFieldNameUnder50Bytes, Base64String>} masterKeyring - A record containing encrypted keys for each field.
     * @param {Record<CertificateFieldNameUnder50Bytes, Base64String>} fields - A record of encrypted field names and their values.
     * @param {WalletCounterparty} counterparty - The counterparty responsible for creating or signing the certificate. For self-signed certificates, use 'self'.
     * @param {BooleanDefaultFalse} [privileged] - Whether this is a privileged request.
     * @param {DescriptionString5to50Bytes} [privilegedReason] - Reason provided for privileged access, required if this is a privileged operation.
     * @returns {Promise<Record<CertificateFieldNameUnder50Bytes, string>>} A promise resolving to a record of field names and their decrypted values in plaintext.
     *
     * @throws {Error} Throws an error if the `masterKeyring` is invalid or if decryption fails for any field.
     */ static async decryptFields(subjectOrCertifierWallet, masterKeyring, fields, counterparty, privileged, privilegedReason) {
        if (masterKeyring == null || Object.keys(masterKeyring).length === 0) {
            throw new Error('A MasterCertificate must have a valid masterKeyring!');
        }
        try {
            const decryptedFields = {};
            // Note: we want to iterate through all fields, not just masterKeyring keys/value pairs.
            for (const fieldName of Object.keys(fields)){
                decryptedFields[fieldName] = (await this.decryptField(subjectOrCertifierWallet, masterKeyring, fieldName, fields[fieldName], counterparty, privileged, privilegedReason)).decryptedFieldValue;
            }
            return decryptedFields;
        } catch  {
            throw new Error('Failed to decrypt all master certificate fields.');
        }
    }
    static async decryptField(subjectOrCertifierWallet, masterKeyring, fieldName, fieldValue, counterparty, privileged, privilegedReason) {
        if (masterKeyring == null || Object.keys(masterKeyring).length === 0) {
            throw new Error('A MasterCertificate must have a valid masterKeyring!');
        }
        try {
            const { plaintext: fieldRevelationKey } = await subjectOrCertifierWallet.decrypt({
                ciphertext: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](masterKeyring[fieldName], 'base64'),
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getCertificateFieldEncryptionDetails(fieldName),
                counterparty,
                privileged,
                privilegedReason
            });
            const decryptedFieldValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](fieldRevelationKey).decrypt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](fieldValue, 'base64'));
            return {
                fieldRevelationKey,
                decryptedFieldValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](decryptedFieldValue)
            };
        } catch  {
            throw new Error('Failed to decrypt certificate field!');
        }
    }
} //# sourceMappingURL=MasterCertificate.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/VerifiableCertificate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VerifiableCertificate",
    ()=>VerifiableCertificate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/SymmetricKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/Certificate.js [app-ssr] (ecmascript)");
;
;
;
class VerifiableCertificate extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    keyring;
    decryptedFields;
    constructor(type, serialNumber, subject, certifier, revocationOutpoint, fields, keyring, signature, decryptedFields){
        super(type, serialNumber, subject, certifier, revocationOutpoint, fields, signature);
        this.keyring = keyring;
        this.decryptedFields = decryptedFields;
    }
    /**
     *
     * @param {WalletCertificate} certificate – The source certificate that was issued and signed by the certifier.
     * @param {Record<CertificateFieldNameUnder50Bytes, string>} keyring – A allows the verifier to decrypt selected certificate fields.
     * @returns {VerifiableCertificate} – A fully-formed instance containing the
     *   original certificate data plus the supplied keyring.
     */ static fromCertificate(certificate, keyring) {
        return new VerifiableCertificate(certificate.type, certificate.serialNumber, certificate.subject, certificate.certifier, certificate.revocationOutpoint, certificate.fields, keyring, certificate.signature);
    }
    /**
     * Decrypts selectively revealed certificate fields using the provided keyring and verifier wallet
     * @param {ProtoWallet} verifierWallet - The wallet instance of the certificate's verifier, used to decrypt field keys.
     * @returns {Promise<Record<CertificateFieldNameUnder50Bytes, string>>} - A promise that resolves to an object where each key is a field name and each value is the decrypted field value as a string.
     * @param {BooleanDefaultFalse} [privileged] - Whether this is a privileged request.
     * @param {DescriptionString5to50Bytes} [privilegedReason] - Reason provided for privileged access, required if this is a privileged operation.
     * @throws {Error} Throws an error if any of the decryption operations fail, with a message indicating the failure context.
     */ async decryptFields(verifierWallet, privileged, privilegedReason, originator) {
        if (this.keyring == null || Object.keys(this.keyring).length === 0) {
            throw new Error('A keyring is required to decrypt certificate fields for the verifier.');
        }
        try {
            const decryptedFields = {};
            for(const fieldName in this.keyring){
                const { plaintext: fieldRevelationKey } = await verifierWallet.decrypt({
                    ciphertext: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](this.keyring[fieldName], 'base64'),
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getCertificateFieldEncryptionDetails(fieldName, this.serialNumber),
                    counterparty: this.subject,
                    privileged,
                    privilegedReason
                }, originator);
                const fieldValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](fieldRevelationKey).decrypt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](this.fields[fieldName], 'base64'));
                decryptedFields[fieldName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](fieldValue);
            }
            return decryptedFields;
        } catch (error) {
            throw new Error(`Failed to decrypt selectively revealed certificate fields using keyring: ${String(error instanceof Error ? error.message : error)}`);
        }
    }
} //# sourceMappingURL=VerifiableCertificate.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/__tests/CompletedProtoWallet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompletedProtoWallet",
    ()=>CompletedProtoWallet
]);
//@ts-nocheck
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$ProtoWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ProtoWallet$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/ProtoWallet.js [app-ssr] (ecmascript) <export default as ProtoWallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$KeyDeriver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/KeyDeriver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$CachedKeyDeriver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CachedKeyDeriver$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/CachedKeyDeriver.js [app-ssr] (ecmascript) <export default as CachedKeyDeriver>");
;
;
class CompletedProtoWallet extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$ProtoWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ProtoWallet$3e$__["ProtoWallet"] {
    keyDeriver;
    constructor(rootKeyOrKeyDeriver){
        super(rootKeyOrKeyDeriver);
        if (rootKeyOrKeyDeriver instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$KeyDeriver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyDeriver"]) {
            this.keyDeriver = rootKeyOrKeyDeriver;
        } else if (typeof rootKeyOrKeyDeriver === 'string' || rootKeyOrKeyDeriver instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) {
            this.keyDeriver = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$CachedKeyDeriver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CachedKeyDeriver$3e$__["CachedKeyDeriver"](rootKeyOrKeyDeriver);
        } else {
            throw new Error('Invalid key deriver provided');
        }
    }
    async isAuthenticated() {
        throw new Error('not implemented');
    }
    async waitForAuthentication() {
        throw new Error('not implemented');
    }
    async getNetwork() {
        throw new Error('not implemented');
    }
    async getVersion() {
        throw new Error('not implemented');
    }
    async getPublicKey(args) {
        if (args.privileged === true) {
            throw new Error('no privilege support');
        }
        if (args.identityKey === true) {
            if (this.keyDeriver === null || this.keyDeriver === undefined) {
                throw new Error('keyDeriver is not initialized');
            }
            return {
                publicKey: this.keyDeriver.rootKey.toPublicKey().toString()
            };
        } else {
            if (args.protocolID == null || typeof args.keyID !== 'string' || args.keyID.trim() === '') {
                throw new Error('protocolID and keyID are required if identityKey is false or undefined.');
            }
            if (this.keyDeriver === null || this.keyDeriver === undefined) {
                throw new Error('keyDeriver is not initialized');
            }
            return {
                publicKey: this.keyDeriver.derivePublicKey(args.protocolID, args.keyID, typeof args.counterparty === 'string' && args.counterparty.trim() !== '' ? args.counterparty : 'self', Boolean(args.forSelf)).toString()
            };
        }
    }
    async createAction() {
        throw new Error('not implemented');
    }
    async signAction() {
        throw new Error('not implemented');
    }
    async abortAction() {
        throw new Error('not implemented');
    }
    async listActions() {
        throw new Error('not implemented');
    }
    async internalizeAction() {
        throw new Error('not implemented');
    }
    async listOutputs() {
        throw new Error('not implemented');
    }
    async relinquishOutput() {
        throw new Error('not implemented');
    }
    async acquireCertificate() {
        throw new Error('not implemented');
    }
    async listCertificates() {
        throw new Error('not implemented');
    }
    async proveCertificate() {
        throw new Error('not implemented');
    }
    async relinquishCertificate() {
        throw new Error('not implemented');
    }
    async discoverByIdentityKey() {
        throw new Error('not implemented');
    }
    async discoverByAttributes() {
        throw new Error('not implemented');
    }
    async getHeight() {
        throw new Error('not implemented');
    }
    async getHeaderForHeight() {
        throw new Error('not implemented');
    }
} //# sourceMappingURL=CompletedProtoWallet.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/Certificate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$MasterCertificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/MasterCertificate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$VerifiableCertificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/VerifiableCertificate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$_$5f$tests$2f$CompletedProtoWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/__tests/CompletedProtoWallet.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/SessionManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Manages sessions for peers, allowing multiple concurrent sessions
 * per identity key. Primary lookup is always by `sessionNonce`.
 */ __turbopack_context__.s([
    "SessionManager",
    ()=>SessionManager
]);
class SessionManager {
    /**
     * Maps sessionNonce -> PeerSession
     */ sessionNonceToSession;
    /**
     * Maps identityKey -> Set of sessionNonces
     */ identityKeyToNonces;
    constructor(){
        this.sessionNonceToSession = new Map();
        this.identityKeyToNonces = new Map();
    }
    /**
     * Adds a session to the manager, associating it with its sessionNonce,
     * and also with its peerIdentityKey (if any).
     *
     * This does NOT overwrite existing sessions for the same peerIdentityKey,
     * allowing multiple concurrent sessions for the same peer.
     *
     * @param {PeerSession} session - The peer session to add.
     */ addSession(session) {
        if (typeof session.sessionNonce !== 'string') {
            throw new Error('Invalid session: sessionNonce is required to add a session.');
        }
        // Use the sessionNonce as the primary key
        this.sessionNonceToSession.set(session.sessionNonce, session);
        // Also track it by identity key if present
        if (typeof session.peerIdentityKey === 'string') {
            let nonces = this.identityKeyToNonces.get(session.peerIdentityKey);
            if (nonces == null) {
                nonces = new Set();
                this.identityKeyToNonces.set(session.peerIdentityKey, nonces);
            }
            nonces.add(session.sessionNonce);
        }
    }
    /**
     * Updates a session in the manager (primarily by re-adding it),
     * ensuring we record the latest data (e.g., isAuthenticated, lastUpdate, etc.).
     *
     * @param {PeerSession} session - The peer session to update.
     */ updateSession(session) {
        // Remove the old references (if any) and re-add
        this.removeSession(session);
        this.addSession(session);
    }
    /**
     * Retrieves a session based on a given identifier, which can be:
     *  - A sessionNonce, or
     *  - A peerIdentityKey.
     *
     * If it is a `sessionNonce`, returns that exact session.
     * If it is a `peerIdentityKey`, returns the "best" (e.g. most recently updated,
     * authenticated) session associated with that peer, if any.
     *
     * @param {string} identifier - The identifier for the session (sessionNonce or peerIdentityKey).
     * @returns {PeerSession | undefined} - The matching peer session, or undefined if not found.
     */ getSession(identifier) {
        // Check if this identifier is directly a sessionNonce
        const direct = this.sessionNonceToSession.get(identifier);
        if (direct != null) {
            return direct;
        }
        // Otherwise, interpret the identifier as an identity key
        const nonces = this.identityKeyToNonces.get(identifier);
        if (nonces == null || nonces.size === 0) {
            return undefined;
        }
        // Pick the "best" session. One sensible approach:
        // - Choose an authenticated session if available
        // - Among them, pick the most recently updated
        let best;
        for (const nonce of nonces){
            const s = this.sessionNonceToSession.get(nonce);
            if (s == null) continue;
            // We can prefer authenticated sessions
            if (best == null) {
                best = s;
            } else {
                // If we want the "most recently updated" AND isAuthenticated
                if ((s.lastUpdate ?? 0) > (best.lastUpdate ?? 0)) {
                    best = s;
                }
            }
        }
        // Optionally, you could also filter out isAuthenticated===false if you only want
        // an authenticated session. But for our usage, let's return the latest any session.
        return best;
    }
    /**
     * Removes a session from the manager by clearing all associated identifiers.
     *
     * @param {PeerSession} session - The peer session to remove.
     */ removeSession(session) {
        if (typeof session.sessionNonce === 'string') {
            this.sessionNonceToSession.delete(session.sessionNonce);
        }
        if (typeof session.peerIdentityKey === 'string') {
            const nonces = this.identityKeyToNonces.get(session.peerIdentityKey);
            if (nonces != null) {
                nonces.delete(session.sessionNonce ?? '');
                if (nonces.size === 0) {
                    this.identityKeyToNonces.delete(session.peerIdentityKey);
                }
            }
        }
    }
    /**
     * Checks if a session exists for a given identifier (either sessionNonce or identityKey).
     *
     * @param {string} identifier - The identifier to check.
     * @returns {boolean} - True if the session exists, false otherwise.
     */ hasSession(identifier) {
        const direct = this.sessionNonceToSession.has(identifier);
        if (direct) return true;
        // if not directly a nonce, interpret as identityKey
        const nonces = this.identityKeyToNonces.get(identifier);
        return !(nonces == null) && nonces.size > 0;
    }
} //# sourceMappingURL=SessionManager.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/verifyNonce.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyNonce",
    ()=>verifyNonce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
;
async function verifyNonce(nonce, wallet, counterparty = 'self', originator) {
    // Convert nonce from base64 string to Uint8Array
    const buffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](nonce, 'base64');
    // Split the nonce buffer
    const data = buffer.slice(0, 16);
    const hmac = buffer.slice(16);
    // Calculate the HMAC
    const { valid } = await wallet.verifyHmac({
        data,
        hmac,
        protocolID: [
            2,
            'server hmac'
        ],
        keyID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](data),
        counterparty
    }, originator);
    return valid;
} //# sourceMappingURL=verifyNonce.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/createNonce.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNonce",
    ()=>createNonce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-ssr] (ecmascript)");
;
;
async function createNonce(wallet, counterparty = 'self', originator) {
    // Generate 16 random bytes for the first half of the data
    const firstHalf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(16);
    // Create an sha256 HMAC
    const { hmac } = await wallet.createHmac({
        protocolID: [
            2,
            'server hmac'
        ],
        keyID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](firstHalf),
        data: firstHalf,
        counterparty
    }, originator);
    // Concatenate firstHalf and secondHalf as the nonce bytes
    const nonceBytes = [
        ...firstHalf,
        ...hmac
    ];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](nonceBytes);
} //# sourceMappingURL=createNonce.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/getVerifiableCertificates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getVerifiableCertificates",
    ()=>getVerifiableCertificates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$VerifiableCertificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/VerifiableCertificate.js [app-ssr] (ecmascript)");
;
const getVerifiableCertificates = async (wallet, requestedCertificates, verifierIdentityKey, originator)=>{
    // Find matching certificates we have
    // Note: This may return multiple certificates that match the correct type.
    const matchingCertificates = await wallet.listCertificates({
        certifiers: requestedCertificates.certifiers,
        types: Object.keys(requestedCertificates.types)
    }, originator);
    // For each certificate requested, create a verifiable cert with selectively revealed fields
    return await Promise.all(matchingCertificates.certificates.map(async (certificate)=>{
        const { keyringForVerifier } = await wallet.proveCertificate({
            certificate,
            fieldsToReveal: requestedCertificates.types[certificate.type],
            verifier: verifierIdentityKey
        }, originator);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$VerifiableCertificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VerifiableCertificate"](certificate.type, certificate.serialNumber, certificate.subject, certificate.certifier, certificate.revocationOutpoint, certificate.fields, keyringForVerifier, certificate.signature);
    }));
}; //# sourceMappingURL=getVerifiableCertificates.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/validateCertificates.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateCertificates",
    ()=>validateCertificates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$VerifiableCertificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/VerifiableCertificate.js [app-ssr] (ecmascript)");
;
const validateCertificates = async (verifierWallet, message, certificatesRequested, originator)=>{
    if (message.certificates == null || message.certificates.length === 0) {
        throw new Error('No certificates were provided in the AuthMessage.');
    }
    await Promise.all(message.certificates.map(async (incomingCert)=>{
        if (incomingCert.subject !== message.identityKey) {
            throw new Error(`The subject of one of your certificates ("${incomingCert.subject}") is not the same as the request sender ("${message.identityKey}").`);
        }
        // Verify Certificate structure and signature
        const certToVerify = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$VerifiableCertificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VerifiableCertificate"](incomingCert.type, incomingCert.serialNumber, incomingCert.subject, incomingCert.certifier, incomingCert.revocationOutpoint, incomingCert.fields, incomingCert.keyring, incomingCert.signature);
        const isValidCert = await certToVerify.verify();
        if (!isValidCert) {
            throw new Error(`The signature for the certificate with serial number ${certToVerify.serialNumber} is invalid!`);
        }
        // Check if the certificate matches requested certifiers, types, and fields
        if (certificatesRequested != null) {
            const { certifiers, types } = certificatesRequested;
            // Check certifier matches
            if (!certifiers.includes(certToVerify.certifier)) {
                throw new Error(`Certificate with serial number ${certToVerify.serialNumber} has an unrequested certifier: ${certToVerify.certifier}`);
            }
            // Check type and fields match requested
            const requestedFields = types[certToVerify.type];
            if (requestedFields == null) {
                throw new Error(`Certificate with type ${certToVerify.type} was not requested`);
            }
        }
        // Attempt to decrypt fields
        await certToVerify.decryptFields(verifierWallet, undefined, undefined, originator);
    }));
}; //# sourceMappingURL=validateCertificates.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$verifyNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/verifyNonce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$createNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/createNonce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$getVerifiableCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/getVerifiableCertificates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$validateCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/validateCertificates.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/Peer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Peer",
    ()=>Peer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$SessionManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/SessionManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$createNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/createNonce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$verifyNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/verifyNonce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$getVerifiableCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/getVerifiableCertificates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$validateCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/validateCertificates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
;
;
;
;
const AUTH_VERSION = '0.1';
const BufferCtor = typeof globalThis !== 'undefined' ? globalThis.Buffer : undefined;
class Peer {
    sessionManager;
    transport;
    wallet;
    certificatesToRequest;
    onGeneralMessageReceivedCallbacks = new Map();
    onCertificatesReceivedCallbacks = new Map();
    onCertificateRequestReceivedCallbacks = new Map();
    onInitialResponseReceivedCallbacks = new Map();
    // Single shared counter for all callback types
    callbackIdCounter = 0;
    // Whether to auto-persist the session with the last-interacted-with peer
    autoPersistLastSession = true;
    // Last-interacted-with peer identity key (if the user calls toPeer with no identityKey)
    lastInteractedWithPeer;
    originator;
    identityPublicKey;
    /**
     * Creates a new Peer instance
     *
     * @param {WalletInterface} wallet - The wallet instance used for cryptographic operations.
     * @param {Transport} transport - The transport mechanism used for sending and receiving messages.
     * @param {RequestedCertificateSet} [certificatesToRequest] - Optional set of certificates to request from a peer during the initial handshake.
     * @param {SessionManager} [sessionManager] - Optional SessionManager to be used for managing peer sessions.
     * @param {boolean} [autoPersistLastSession] - Whether to auto-persist the session with the last-interacted-with peer. Defaults to true.
     */ constructor(wallet, transport, certificatesToRequest, sessionManager, autoPersistLastSession, originator){
        this.wallet = wallet;
        this.originator = originator;
        this.transport = transport;
        this.certificatesToRequest = certificatesToRequest ?? {
            certifiers: [],
            types: {}
        };
        this.transport.onData(this.handleIncomingMessage.bind(this)).catch((e)=>{
            throw e;
        });
        this.sessionManager = sessionManager != null ? sessionManager : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$SessionManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionManager"]();
        if (autoPersistLastSession === false) {
            this.autoPersistLastSession = false;
        } else {
            this.autoPersistLastSession = true;
        }
    }
    /**
     * Sends a general message to a peer, and initiates a handshake if necessary.
     *
     * @param {number[]} message - The message payload to send.
     * @param {string} [identityKey] - The identity public key of the peer. If not provided, uses lastInteractedWithPeer (if any).
     * @param {number} [maxWaitTime] - optional max wait time in ms
     * @returns {Promise<void>}
     * @throws Will throw an error if the message fails to send.
     */ async toPeer(message, identityKey, maxWaitTime) {
        if (this.autoPersistLastSession && typeof this.lastInteractedWithPeer === 'string' && typeof identityKey !== 'string') {
            identityKey = this.lastInteractedWithPeer;
        }
        const peerSession = await this.getAuthenticatedSession(identityKey, maxWaitTime);
        // Prepare the general message
        const requestNonce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(32));
        const { signature } = await this.wallet.createSignature({
            data: message,
            protocolID: [
                2,
                'auth message signature'
            ],
            keyID: `${requestNonce} ${peerSession.peerNonce ?? ''}`,
            counterparty: peerSession.peerIdentityKey
        }, this.originator);
        const generalMessage = {
            version: AUTH_VERSION,
            messageType: 'general',
            identityKey: await this.getIdentityPublicKey(),
            nonce: requestNonce,
            yourNonce: peerSession.peerNonce,
            payload: message,
            signature
        };
        peerSession.lastUpdate = Date.now();
        this.sessionManager.updateSession(peerSession);
        try {
            await this.transport.send(generalMessage);
        } catch (error) {
            this.propagateTransportError(peerSession.peerIdentityKey, error);
        }
    }
    /**
     * Sends a request for certificates to a peer.
     * This method allows a peer to dynamically request specific certificates after
     * an initial handshake or message has been exchanged.
     *
     * @param {RequestedCertificateSet} certificatesToRequest - Specifies the certifiers and types of certificates required from the peer.
     * @param {string} [identityKey] - The identity public key of the peer. If not provided, the current or last session identity is used.
     * @param {number} [maxWaitTime=10000] - Maximum time in milliseconds to wait for the peer session to be authenticated.
     * @returns {Promise<void>} Resolves if the certificate request message is successfully sent.
     * @throws Will throw an error if the peer session is not authenticated or if sending the request fails.
     */ async requestCertificates(certificatesToRequest, identityKey, maxWaitTime = 10000) {
        if (this.autoPersistLastSession && typeof this.lastInteractedWithPeer === 'string' && typeof identityKey !== 'string') {
            identityKey = this.lastInteractedWithPeer;
        }
        const peerSession = await this.getAuthenticatedSession(identityKey, maxWaitTime);
        // Prepare the message
        const requestNonce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(32));
        const { signature } = await this.wallet.createSignature({
            data: Peer.utf8ToBytes(JSON.stringify(certificatesToRequest)),
            protocolID: [
                2,
                'auth message signature'
            ],
            keyID: `${requestNonce} ${peerSession.peerNonce ?? ''}`,
            counterparty: peerSession.peerIdentityKey
        }, this.originator);
        const certRequestMessage = {
            version: AUTH_VERSION,
            messageType: 'certificateRequest',
            identityKey: await this.getIdentityPublicKey(),
            nonce: requestNonce,
            initialNonce: peerSession.sessionNonce,
            yourNonce: peerSession.peerNonce,
            requestedCertificates: certificatesToRequest,
            signature
        };
        // Update last-used timestamp
        peerSession.lastUpdate = Date.now();
        this.sessionManager.updateSession(peerSession);
        try {
            await this.transport.send(certRequestMessage);
        } catch (error) {
            this.propagateTransportError(peerSession.peerIdentityKey, error);
        }
    }
    /**
     * Retrieves an authenticated session for a given peer identity. If no session exists
     * or the session is not authenticated, initiates a handshake to create or authenticate the session.
     *
     * - If `identityKey` is provided, we look up any existing session for that identity key.
     * - If none is found or not authenticated, we do a new handshake.
     * - If `identityKey` is not provided, but we have a `lastInteractedWithPeer`, we try that key.
     *
     * @param {string} [identityKey] - The identity public key of the peer.
     * @param {number} [maxWaitTime] - The maximum time in milliseconds to wait for the handshake.
     * @returns {Promise<PeerSession>} - A promise that resolves with an authenticated `PeerSession`.
     */ async getAuthenticatedSession(identityKey, maxWaitTime) {
        if (this.transport === undefined) {
            throw new Error('Peer transport is not connected!');
        }
        let peerSession;
        if (typeof identityKey === 'string') {
            peerSession = this.sessionManager.getSession(identityKey);
        }
        // If that session doesn't exist or isn't authenticated, initiate handshake
        if (peerSession == null || !peerSession.isAuthenticated) {
            // This will create a brand-new session
            const sessionNonce = await this.initiateHandshake(identityKey, maxWaitTime);
            // Now retrieve it by the sessionNonce
            peerSession = this.sessionManager.getSession(sessionNonce);
            if (peerSession == null || !peerSession.isAuthenticated) {
                throw new Error('Unable to establish mutual authentication with peer!');
            }
        }
        return peerSession;
    }
    /**
     * Registers a callback to listen for general messages from peers.
     *
     * @param {(senderPublicKey: string, payload: number[]) => void} callback - The function to call when a general message is received.
     * @returns {number} The ID of the callback listener.
     */ listenForGeneralMessages(callback) {
        const callbackID = this.callbackIdCounter++;
        this.onGeneralMessageReceivedCallbacks.set(callbackID, callback);
        return callbackID;
    }
    /**
     * Removes a general message listener.
     *
     * @param {number} callbackID - The ID of the callback to remove.
     */ stopListeningForGeneralMessages(callbackID) {
        this.onGeneralMessageReceivedCallbacks.delete(callbackID);
    }
    /**
     * Registers a callback to listen for certificates received from peers.
     *
     * @param {(senderPublicKey: string, certs: VerifiableCertificate[]) => void} callback - The function to call when certificates are received.
     * @returns {number} The ID of the callback listener.
     */ listenForCertificatesReceived(callback) {
        const callbackID = this.callbackIdCounter++;
        this.onCertificatesReceivedCallbacks.set(callbackID, callback);
        return callbackID;
    }
    /**
     * Cancels and unsubscribes a certificatesReceived listener.
     *
     * @param {number} callbackID - The ID of the certificates received callback to cancel.
     */ stopListeningForCertificatesReceived(callbackID) {
        this.onCertificatesReceivedCallbacks.delete(callbackID);
    }
    /**
     * Registers a callback to listen for certificates requested from peers.
     *
     * @param {(requestedCertificates: RequestedCertificateSet) => void} callback - The function to call when a certificate request is received
     * @returns {number} The ID of the callback listener.
     */ listenForCertificatesRequested(callback) {
        const callbackID = this.callbackIdCounter++;
        this.onCertificateRequestReceivedCallbacks.set(callbackID, callback);
        return callbackID;
    }
    /**
     * Cancels and unsubscribes a certificatesRequested listener.
     *
     * @param {number} callbackID - The ID of the requested certificates callback to cancel.
     */ stopListeningForCertificatesRequested(callbackID) {
        this.onCertificateRequestReceivedCallbacks.delete(callbackID);
    }
    /**
     * Initiates the mutual authentication handshake with a peer.
     *
     * @private
     * @param {string} [identityKey] - The identity public key of the peer.
     * @param {number} [maxWaitTime=10000] - how long to wait for handshake
     * @returns {Promise<string>} A promise that resolves to the session nonce.
     */ async initiateHandshake(identityKey, maxWaitTime = 10000) {
        const sessionNonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$createNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNonce"])(this.wallet, undefined, this.originator); // Initial request nonce
        // Create the preliminary session (not yet authenticated)
        const now = Date.now();
        this.sessionManager.addSession({
            isAuthenticated: false,
            sessionNonce,
            peerIdentityKey: identityKey,
            lastUpdate: now
        });
        const initialRequest = {
            version: AUTH_VERSION,
            messageType: 'initialRequest',
            identityKey: await this.getIdentityPublicKey(),
            initialNonce: sessionNonce,
            requestedCertificates: this.certificatesToRequest
        };
        await this.transport.send(initialRequest);
        return await this.waitForInitialResponse(sessionNonce, maxWaitTime);
    }
    /**
     * Waits for the initial response from the peer after sending an initial handshake request message.
     *
     * @param {string} sessionNonce - The session nonce created in the initial request.
     * @returns {Promise<string>} A promise that resolves with the session nonce when the initial response is received.
     */ async waitForInitialResponse(sessionNonce, maxWaitTime = 10000) {
        return await new Promise((resolve, reject)=>{
            const callbackID = this.listenForInitialResponse(sessionNonce, (nonce)=>{
                clearTimeout(timeoutHandle);
                this.stopListeningForInitialResponses(callbackID);
                resolve(nonce);
            });
            const timeoutHandle = setTimeout(()=>{
                this.stopListeningForInitialResponses(callbackID);
                reject(new Error('Initial response timed out.'));
            }, maxWaitTime);
        });
    }
    /**
     * Adds a listener for an initial response message matching a specific initial nonce.
     *
     * @private
     * @param {string} sessionNonce - The session nonce to match.
     * @param {(sessionNonce: string) => void} callback - The callback to invoke when the initial response is received.
     * @returns {number} The ID of the callback listener.
     */ listenForInitialResponse(sessionNonce, callback) {
        const callbackID = this.callbackIdCounter++;
        this.onInitialResponseReceivedCallbacks.set(callbackID, {
            callback,
            sessionNonce
        });
        return callbackID;
    }
    /**
     * Removes a listener for initial responses.
     *
     * @private
     * @param {number} callbackID - The ID of the callback to remove.
     */ stopListeningForInitialResponses(callbackID) {
        this.onInitialResponseReceivedCallbacks.delete(callbackID);
    }
    propagateTransportError(peerIdentityKey, error) {
        if (error instanceof Error) {
            if (peerIdentityKey != null) {
                const existingDetails = error.details;
                if (existingDetails != null && typeof existingDetails === 'object') {
                    if (existingDetails.peerIdentityKey == null) {
                        existingDetails.peerIdentityKey = peerIdentityKey;
                    }
                } else {
                    error.details = {
                        peerIdentityKey
                    };
                }
            }
            throw error;
        }
        const message = `Failed to send message to peer ${peerIdentityKey ?? 'unknown'}: ${String(error)}`;
        throw new Error(message);
    }
    /**
     * Handles incoming messages from the transport.
     *
     * @param {AuthMessage} message - The incoming message to process.
     * @returns {Promise<void>}
     */ async handleIncomingMessage(message) {
        if (typeof message.version !== 'string' || message.version !== AUTH_VERSION) {
            throw new Error(`Invalid or unsupported message auth version! Received: ${message.version}, expected: ${AUTH_VERSION}`);
        }
        switch(message.messageType){
            case 'initialRequest':
                await this.processInitialRequest(message);
                break;
            case 'initialResponse':
                await this.processInitialResponse(message);
                break;
            case 'certificateRequest':
                await this.processCertificateRequest(message);
                break;
            case 'certificateResponse':
                await this.processCertificateResponse(message);
                break;
            case 'general':
                await this.processGeneralMessage(message);
                break;
            default:
                throw new Error(`Unknown message type of ${String(message.messageType)} from ${String(message.identityKey)}`);
        }
    }
    /**
     * Processes an initial request message from a peer.
     *
     * @param {AuthMessage} message - The incoming initial request message.
     */ async processInitialRequest(message) {
        if (typeof message.identityKey !== 'string' || typeof message.initialNonce !== 'string' || message.initialNonce === '') {
            throw new Error('Missing required fields in initialRequest message.');
        }
        // Create a new sessionNonce for our side
        const sessionNonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$createNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNonce"])(this.wallet, undefined, this.originator);
        const now = Date.now();
        // We'll treat this as fully authenticated from *our* perspective (the responding side).
        this.sessionManager.addSession({
            isAuthenticated: true,
            sessionNonce,
            peerNonce: message.initialNonce,
            peerIdentityKey: message.identityKey,
            lastUpdate: now
        });
        // Possibly handle the peer's requested certs
        let certificatesToInclude;
        if (message.requestedCertificates != null && Array.isArray(message.requestedCertificates.certifiers) && message.requestedCertificates.certifiers.length > 0) {
            if (this.onCertificateRequestReceivedCallbacks.size > 0) {
                // Let the application handle it
                this.onCertificateRequestReceivedCallbacks.forEach((cb)=>{
                    cb(message.identityKey, message.requestedCertificates);
                });
            } else {
                // Attempt to find automatically
                certificatesToInclude = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$getVerifiableCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVerifiableCertificates"])(this.wallet, message.requestedCertificates, message.identityKey, this.originator);
            }
        }
        // Create signature
        const { signature } = await this.wallet.createSignature({
            data: Peer.base64ToBytes(message.initialNonce + sessionNonce),
            protocolID: [
                2,
                'auth message signature'
            ],
            keyID: `${message.initialNonce} ${sessionNonce}`,
            counterparty: message.identityKey
        }, this.originator);
        const initialResponseMessage = {
            version: AUTH_VERSION,
            messageType: 'initialResponse',
            identityKey: await this.getIdentityPublicKey(),
            initialNonce: sessionNonce,
            yourNonce: message.initialNonce,
            certificates: certificatesToInclude,
            requestedCertificates: this.certificatesToRequest,
            signature
        };
        // If we haven't interacted with a peer yet, store this identity as "lastInteracted"
        if (this.lastInteractedWithPeer === undefined) {
            this.lastInteractedWithPeer = message.identityKey;
        }
        // Send the response
        await this.transport.send(initialResponseMessage);
    }
    /**
     * Processes an initial response message from a peer.
     *
     * @private
     * @param {AuthMessage} message - The incoming initial response message.
     * @throws Will throw an error if nonce or signature verification fails.
     */ async processInitialResponse(message) {
        const validNonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$verifyNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyNonce"])(message.yourNonce, this.wallet, undefined, this.originator);
        if (!validNonce) {
            throw new Error(`Initial response nonce verification failed from peer: ${message.identityKey}`);
        }
        // This is the session we previously created by calling initiateHandshake
        const peerSession = this.sessionManager.getSession(message.yourNonce);
        if (peerSession == null) {
            throw new Error(`Peer session not found for peer: ${message.identityKey}`);
        }
        // Validate message signature
        const dataToVerify = Peer.base64ToBytes((peerSession.sessionNonce ?? '') + (message.initialNonce ?? ''));
        const { valid } = await this.wallet.verifySignature({
            data: dataToVerify,
            signature: message.signature,
            protocolID: [
                2,
                'auth message signature'
            ],
            keyID: `${peerSession.sessionNonce ?? ''} ${message.initialNonce ?? ''}`,
            counterparty: message.identityKey
        }, this.originator);
        if (!valid) {
            throw new Error(`Unable to verify initial response signature for peer: ${message.identityKey}`);
        }
        // Now mark the session as authenticated
        peerSession.peerNonce = message.initialNonce;
        peerSession.peerIdentityKey = message.identityKey;
        peerSession.isAuthenticated = true;
        peerSession.lastUpdate = Date.now();
        this.sessionManager.updateSession(peerSession);
        // If the handshake had requested certificates, validate them
        if (this.certificatesToRequest?.certifiers?.length > 0 && message.certificates?.length > 0) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$validateCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCertificates"])(this.wallet, message, this.certificatesToRequest, this.originator);
            // Notify listeners
            this.onCertificatesReceivedCallbacks.forEach((cb)=>cb(message.identityKey, message.certificates));
        }
        // Update lastInteractedWithPeer
        this.lastInteractedWithPeer = message.identityKey;
        // Let the handshake wait-latch know we got our response
        this.onInitialResponseReceivedCallbacks.forEach((entry)=>{
            if (entry.sessionNonce === peerSession.sessionNonce) {
                entry.callback(peerSession.sessionNonce);
            }
        });
        // The peer might also request certificates from us
        if (message.requestedCertificates != null && Array.isArray(message.requestedCertificates.certifiers) && message.requestedCertificates.certifiers.length > 0) {
            if (this.onCertificateRequestReceivedCallbacks.size > 0) {
                // Let the application handle it
                this.onCertificateRequestReceivedCallbacks.forEach((cb)=>{
                    cb(message.identityKey, message.requestedCertificates);
                });
            } else {
                // Attempt auto
                const verifiableCertificates = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$getVerifiableCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVerifiableCertificates"])(this.wallet, message.requestedCertificates, message.identityKey, this.originator);
                await this.sendCertificateResponse(message.identityKey, verifiableCertificates);
            }
        }
    }
    /**
     * Processes an incoming certificate request message from a peer.
     * Verifies nonce/signature and then possibly sends a certificateResponse.
     *
     * @param {AuthMessage} message - The certificate request message received from the peer.
     * @throws {Error} if nonce or signature is invalid.
     */ async processCertificateRequest(message) {
        const validNonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$verifyNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyNonce"])(message.yourNonce, this.wallet, undefined, this.originator);
        if (!validNonce) {
            throw new Error(`Unable to verify nonce for certificate request message from: ${message.identityKey}`);
        }
        const peerSession = this.sessionManager.getSession(message.yourNonce);
        if (peerSession == null) {
            throw new Error(`Session not found for nonce: ${message.yourNonce}`);
        }
        const { valid } = await this.wallet.verifySignature({
            data: Peer.utf8ToBytes(JSON.stringify(message.requestedCertificates)),
            signature: message.signature,
            protocolID: [
                2,
                'auth message signature'
            ],
            keyID: `${message.nonce ?? ''} ${peerSession.sessionNonce ?? ''}`,
            counterparty: peerSession.peerIdentityKey
        }, this.originator);
        if (!valid) {
            throw new Error(`Invalid signature in certificate request message from ${peerSession.peerIdentityKey}`);
        }
        // Update usage
        peerSession.lastUpdate = Date.now();
        this.sessionManager.updateSession(peerSession);
        if (message.requestedCertificates != null && Array.isArray(message.requestedCertificates.certifiers) && message.requestedCertificates.certifiers.length > 0) {
            if (this.onCertificateRequestReceivedCallbacks.size > 0) {
                // Let the application handle it
                this.onCertificateRequestReceivedCallbacks.forEach((cb)=>{
                    cb(message.identityKey, message.requestedCertificates);
                });
            } else {
                // Attempt auto
                const verifiableCertificates = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$getVerifiableCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVerifiableCertificates"])(this.wallet, message.requestedCertificates, message.identityKey, this.originator);
                await this.sendCertificateResponse(message.identityKey, verifiableCertificates);
            }
        }
    }
    /**
     * Sends a certificate response message containing the specified certificates to a peer.
     *
     * @param {string} verifierIdentityKey - The identity key of the peer requesting the certificates.
     * @param {VerifiableCertificate[]} certificates - The list of certificates to include in the response.
     * @throws Will throw an error if the transport fails to send the message.
     */ async sendCertificateResponse(verifierIdentityKey, certificates) {
        const peerSession = await this.getAuthenticatedSession(verifierIdentityKey);
        const requestNonce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(32));
        const { signature } = await this.wallet.createSignature({
            data: Peer.utf8ToBytes(JSON.stringify(certificates)),
            protocolID: [
                2,
                'auth message signature'
            ],
            keyID: `${requestNonce} ${peerSession.peerNonce ?? ''}`,
            counterparty: peerSession.peerIdentityKey
        }, this.originator);
        const certificateResponse = {
            version: AUTH_VERSION,
            messageType: 'certificateResponse',
            identityKey: await this.getIdentityPublicKey(),
            nonce: requestNonce,
            initialNonce: peerSession.sessionNonce,
            yourNonce: peerSession.peerNonce,
            certificates,
            signature
        };
        // Update usage
        peerSession.lastUpdate = Date.now();
        this.sessionManager.updateSession(peerSession);
        try {
            await this.transport.send(certificateResponse);
        } catch (error) {
            this.propagateTransportError(peerSession.peerIdentityKey, error);
        }
    }
    /**
     * Processes a certificate response message from a peer.
     *
     * @private
     * @param {AuthMessage} message - The incoming certificate response message.
     * @throws Will throw an error if nonce verification or signature verification fails.
     */ async processCertificateResponse(message) {
        const validNonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$verifyNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyNonce"])(message.yourNonce, this.wallet, undefined, this.originator);
        if (!validNonce) {
            throw new Error(`Unable to verify nonce for certificate response from: ${message.identityKey}`);
        }
        const peerSession = this.sessionManager.getSession(message.yourNonce);
        if (peerSession == null) {
            throw new Error(`Session not found for nonce: ${message.yourNonce}`);
        }
        // Validate message signature
        const { valid } = await this.wallet.verifySignature({
            data: Peer.utf8ToBytes(JSON.stringify(message.certificates)),
            signature: message.signature,
            protocolID: [
                2,
                'auth message signature'
            ],
            keyID: `${message.nonce ?? ''} ${peerSession.sessionNonce ?? ''}`,
            counterparty: message.identityKey
        }, this.originator);
        if (!valid) {
            throw new Error(`Unable to verify certificate response signature for peer: ${message.identityKey}`);
        }
        // We also handle optional validation if there's a requestedCertificates field
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$validateCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCertificates"])(this.wallet, message, message.requestedCertificates, this.originator);
        // Notify any listeners
        this.onCertificatesReceivedCallbacks.forEach((cb)=>{
            cb(message.identityKey, message.certificates ?? []);
        });
        peerSession.lastUpdate = Date.now();
        this.sessionManager.updateSession(peerSession);
    }
    /**
     * Processes a general message from a peer.
     *
     * @private
     * @param {AuthMessage} message - The incoming general message.
     * @throws Will throw an error if nonce or signature verification fails.
     */ async processGeneralMessage(message) {
        const validNonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$verifyNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyNonce"])(message.yourNonce, this.wallet, undefined, this.originator);
        if (!validNonce) {
            throw new Error(`Unable to verify nonce for general message from: ${message.identityKey}`);
        }
        const peerSession = this.sessionManager.getSession(message.yourNonce);
        if (peerSession == null) {
            throw new Error(`Session not found for nonce: ${message.yourNonce}`);
        }
        const { valid } = await this.wallet.verifySignature({
            data: message.payload,
            signature: message.signature,
            protocolID: [
                2,
                'auth message signature'
            ],
            keyID: `${message.nonce ?? ''} ${peerSession.sessionNonce ?? ''}`,
            counterparty: peerSession.peerIdentityKey
        }, this.originator);
        if (!valid) {
            throw new Error(`Invalid signature in generalMessage from ${peerSession.peerIdentityKey}`);
        }
        // Mark last usage
        peerSession.lastUpdate = Date.now();
        this.sessionManager.updateSession(peerSession);
        // Update lastInteractedWithPeer
        this.lastInteractedWithPeer = message.identityKey;
        // Dispatch callbacks
        this.onGeneralMessageReceivedCallbacks.forEach((cb)=>{
            cb(message.identityKey, message.payload ?? []);
        });
    }
    async getIdentityPublicKey() {
        if (this.identityPublicKey != null) {
            return this.identityPublicKey;
        }
        const { publicKey } = await this.wallet.getPublicKey({
            identityKey: true
        }, this.originator);
        this.identityPublicKey = publicKey;
        return publicKey;
    }
    static utf8ToBytes(data) {
        if (BufferCtor != null) {
            return Array.from(BufferCtor.from(data, 'utf8'));
        }
        if (typeof TextEncoder !== 'undefined') {
            return Array.from(new TextEncoder().encode(data));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](data, 'utf8');
    }
    static base64ToBytes(data) {
        if (BufferCtor != null) {
            return Array.from(BufferCtor.from(data, 'base64'));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](data, 'base64');
    }
} //# sourceMappingURL=Peer.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=types.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/transports/SimplifiedFetchTransport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimplifiedFetchTransport",
    ()=>SimplifiedFetchTransport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
;
const defaultFetch = typeof globalThis !== 'undefined' && typeof globalThis.fetch === 'function' ? globalThis.fetch.bind(globalThis) : fetch;
class SimplifiedFetchTransport {
    onDataCallback;
    fetchClient;
    baseUrl;
    /**
     * Constructs a new instance of SimplifiedFetchTransport.
     * @param baseUrl - The base URL for all HTTP requests made by this transport.
     * @param fetchClient - A fetch implementation to use for HTTP requests (default: global fetch).
     */ constructor(baseUrl, fetchClient = defaultFetch){
        if (typeof fetchClient !== 'function') {
            throw new Error('SimplifiedFetchTransport requires a fetch implementation. ' + 'In environments without fetch, provide a polyfill or custom implementation.');
        }
        this.fetchClient = fetchClient;
        this.baseUrl = baseUrl;
    }
    /**
     * Sends a message to an HTTP server using the transport mechanism.
     * Handles both general and authenticated message types. For general messages,
     * the payload is deserialized and sent as an HTTP request. For other message types,
     * the message is sent as a POST request to the `/auth` endpoint.
     *
     * @param message - The AuthMessage to send.
     * @returns A promise that resolves when the message is successfully sent.
     *
     * @throws Will throw an error if no listener has been registered via `onData`.
     */ async send(message) {
        if (this.onDataCallback == null) {
            throw new Error('Listen before you start speaking. God gave you two ears and one mouth for a reason.');
        }
        if (message.messageType !== 'general') {
            return await new Promise((resolve, reject)=>{
                void (async ()=>{
                    try {
                        const authUrl = `${this.baseUrl}/.well-known/auth`;
                        const responsePromise = (async ()=>{
                            try {
                                return await this.fetchClient(authUrl, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(message)
                                });
                            } catch (error) {
                                throw this.createNetworkError(authUrl, error);
                            }
                        })();
                        // For initialRequest message, mark connection as established and start pool.
                        if (message.messageType !== 'initialRequest') {
                            resolve();
                        }
                        const response = await responsePromise;
                        if (!response.ok) {
                            const responseBodyArray = Array.from(new Uint8Array(await response.arrayBuffer()));
                            throw this.createUnauthenticatedResponseError(authUrl, response, responseBodyArray);
                        }
                        if (this.onDataCallback != null) {
                            const responseMessage = await response.json();
                            this.onDataCallback(responseMessage);
                        }
                        if (message.messageType === 'initialRequest') {
                            resolve();
                        }
                    } catch (e) {
                        reject(e);
                    }
                })();
            });
        } else {
            // Parse message payload
            const httpRequest = this.deserializeRequestPayload(message.payload);
            // Send the byte array as the HTTP payload
            const url = `${this.baseUrl}${httpRequest.urlPostfix}`;
            const httpRequestWithAuthHeaders = httpRequest;
            if (typeof httpRequest.headers !== 'object') {
                httpRequestWithAuthHeaders.headers = {};
            }
            // Append auth headers in request to server
            httpRequestWithAuthHeaders.headers['x-bsv-auth-version'] = message.version;
            httpRequestWithAuthHeaders.headers['x-bsv-auth-identity-key'] = message.identityKey;
            httpRequestWithAuthHeaders.headers['x-bsv-auth-nonce'] = message.nonce;
            httpRequestWithAuthHeaders.headers['x-bsv-auth-your-nonce'] = message.yourNonce;
            httpRequestWithAuthHeaders.headers['x-bsv-auth-signature'] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](message.signature);
            httpRequestWithAuthHeaders.headers['x-bsv-auth-request-id'] = httpRequest.requestId;
            // Ensure Content-Type is set for requests with a body
            if (httpRequestWithAuthHeaders.body != null) {
                const headers = httpRequestWithAuthHeaders.headers;
                if (headers['content-type'] == null) {
                    throw new Error('Content-Type header is required for requests with a body.');
                }
                const contentType = String(headers['content-type'] ?? '');
                // Transform body based on Content-Type
                if (contentType.includes('application/json')) {
                    // Convert byte array to JSON string
                    httpRequestWithAuthHeaders.body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](httpRequestWithAuthHeaders.body);
                } else if (contentType.includes('application/x-www-form-urlencoded')) {
                    // Convert byte array to URL-encoded string
                    httpRequestWithAuthHeaders.body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](httpRequestWithAuthHeaders.body);
                } else if (contentType.includes('text/plain')) {
                    // Convert byte array to plain UTF-8 string
                    httpRequestWithAuthHeaders.body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](httpRequestWithAuthHeaders.body);
                } else {
                    // For all other content types, treat as binary data
                    httpRequestWithAuthHeaders.body = new Uint8Array(httpRequestWithAuthHeaders.body);
                }
            }
            // Send the actual fetch request to the server
            let response;
            try {
                response = await this.fetchClient(url, {
                    method: httpRequestWithAuthHeaders.method,
                    headers: httpRequestWithAuthHeaders.headers,
                    body: httpRequestWithAuthHeaders.body
                });
            } catch (error) {
                throw this.createNetworkError(url, error);
            }
            const responseBodyBuffer = await response.arrayBuffer();
            const responseBodyArray = Array.from(new Uint8Array(responseBodyBuffer));
            const missingAuthHeaders = [
                'x-bsv-auth-version',
                'x-bsv-auth-identity-key',
                'x-bsv-auth-signature'
            ].filter((headerName)=>{
                const headerValue = response.headers.get(headerName);
                return headerValue == null || headerValue.trim().length === 0;
            });
            if (missingAuthHeaders.length > 0) {
                throw this.createUnauthenticatedResponseError(url, response, responseBodyArray, missingAuthHeaders);
            }
            const requestedCertificatesHeader = response.headers.get('x-bsv-auth-requested-certificates');
            let requestedCertificates;
            if (requestedCertificatesHeader != null) {
                try {
                    requestedCertificates = JSON.parse(requestedCertificatesHeader);
                } catch (error) {
                    throw this.createMalformedHeaderError(url, 'x-bsv-auth-requested-certificates', requestedCertificatesHeader, error);
                }
            }
            const payloadWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
            if (response.headers.get('x-bsv-auth-request-id') != null) {
                payloadWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](response.headers.get('x-bsv-auth-request-id'), 'base64'));
            }
            payloadWriter.writeVarIntNum(response.status);
            // PARSE RESPONSE HEADERS FROM SERVER --------------------------------
            // Parse response headers from the server and include only the signed headers:
            // - Include custom headers prefixed with x-bsv (excluding those starting with x-bsv-auth)
            // - Include the authorization header
            const includedHeaders = [];
            response.headers.forEach((value, key)=>{
                const lowerKey = key.toLowerCase();
                if ((lowerKey.startsWith('x-bsv-') || lowerKey === 'authorization') && !lowerKey.startsWith('x-bsv-auth')) {
                    includedHeaders.push([
                        lowerKey,
                        value
                    ]);
                }
            });
            // Sort the headers by key to ensure a consistent order for signing and verification.
            includedHeaders.sort(([keyA], [keyB])=>keyA.localeCompare(keyB));
            // nHeaders
            payloadWriter.writeVarIntNum(includedHeaders.length);
            for(let i = 0; i < includedHeaders.length; i++){
                // headerKeyLength
                const headerKeyAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](includedHeaders[i][0], 'utf8');
                payloadWriter.writeVarIntNum(headerKeyAsArray.length);
                // headerKey
                payloadWriter.write(headerKeyAsArray);
                // headerValueLength
                const headerValueAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](includedHeaders[i][1], 'utf8');
                payloadWriter.writeVarIntNum(headerValueAsArray.length);
                // headerValue
                payloadWriter.write(headerValueAsArray);
            }
            // Handle body
            payloadWriter.writeVarIntNum(responseBodyArray.length);
            if (responseBodyArray.length > 0) {
                payloadWriter.write(responseBodyArray);
            }
            // Build the correct AuthMessage for the response
            const responseMessage = {
                version: response.headers.get('x-bsv-auth-version'),
                messageType: response.headers.get('x-bsv-auth-message-type') === 'certificateRequest' ? 'certificateRequest' : 'general',
                identityKey: response.headers.get('x-bsv-auth-identity-key'),
                nonce: response.headers.get('x-bsv-auth-nonce') ?? undefined,
                yourNonce: response.headers.get('x-bsv-auth-your-nonce') ?? undefined,
                requestedCertificates,
                payload: payloadWriter.toArray(),
                signature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](response.headers.get('x-bsv-auth-signature'), 'hex')
            };
            // If the server didn't provide the correct authentication headers, throw an error
            if (responseMessage.version == null) {
                throw this.createUnauthenticatedResponseError(url, response, responseBodyArray);
            }
            // Handle the response if data is received and callback is set
            this.onDataCallback(responseMessage);
        }
    }
    /**
     * Registers a callback to handle incoming messages.
     * This must be called before sending any messages to ensure responses can be processed.
     *
     * @param callback - A function to invoke when an incoming AuthMessage is received.
     * @returns A promise that resolves once the callback is set.
     */ async onData(callback) {
        this.onDataCallback = (m)=>{
            void callback(m);
        };
    }
    createNetworkError(url, originalError) {
        const baseMessage = `Network error while sending authenticated request to ${url}`;
        if (originalError instanceof Error) {
            const error = new Error(`${baseMessage}: ${originalError.message}`);
            error.stack = originalError.stack;
            error.cause = originalError;
            return error;
        }
        return new Error(`${baseMessage}: ${String(originalError)}`);
    }
    createUnauthenticatedResponseError(url, response, bodyBytes, missingHeaders = []) {
        const statusText = (response.statusText ?? '').trim();
        const statusDescription = statusText.length > 0 ? `${response.status} ${statusText}` : `${response.status}`;
        const headerMessage = missingHeaders.length > 0 ? `missing headers: ${missingHeaders.join(', ')}` : 'response lacked required BSV auth headers';
        const bodyPreview = this.getBodyPreview(bodyBytes, response.headers.get('content-type'));
        const parts = [
            `Received HTTP ${statusDescription} from ${url} without valid BSV authentication (${headerMessage})`
        ];
        if (bodyPreview != null) {
            parts.push(`body preview: ${bodyPreview}`);
        }
        const error = new Error(parts.join(' - '));
        error.details = {
            url,
            status: response.status,
            statusText: response.statusText,
            missingHeaders,
            bodyPreview
        };
        return error;
    }
    createMalformedHeaderError(url, headerName, headerValue, cause) {
        const errorMessage = `Failed to parse ${headerName} returned by ${url}: ${headerValue}`;
        if (cause instanceof Error) {
            const error = new Error(`${errorMessage}. ${cause.message}`);
            error.stack = cause.stack;
            error.cause = cause;
            return error;
        }
        return new Error(`${errorMessage}. ${String(cause)}`);
    }
    getBodyPreview(bodyBytes, contentType) {
        if (bodyBytes.length === 0) {
            return undefined;
        }
        const maxBytesForPreview = 1024;
        const truncated = bodyBytes.length > maxBytesForPreview;
        const slice = truncated ? bodyBytes.slice(0, maxBytesForPreview) : bodyBytes;
        const isText = this.isTextualContent(contentType, slice);
        let preview;
        if (isText) {
            try {
                preview = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](slice);
            } catch  {
                preview = this.formatBinaryPreview(slice, truncated);
            }
        } else {
            preview = this.formatBinaryPreview(slice, truncated);
        }
        if (preview.length > 512) {
            preview = `${preview.slice(0, 512)}…`;
        }
        if (truncated) {
            preview = `${preview} (truncated)`;
        }
        return preview;
    }
    isTextualContent(contentType, sample) {
        if (sample.length === 0) {
            return false;
        }
        if (contentType != null) {
            const lowered = contentType.toLowerCase();
            const textualTokens = [
                'application/json',
                'application/problem+json',
                'application/xml',
                'application/xhtml+xml',
                'application/javascript',
                'application/ecmascript',
                'application/x-www-form-urlencoded',
                'text/'
            ];
            if (textualTokens.some((token)=>lowered.includes(token)) || lowered.includes('charset=')) {
                return true;
            }
        }
        const printableCount = sample.reduce((count, byte)=>{
            if (byte === 9 || byte === 10 || byte === 13) {
                return count + 1;
            }
            if (byte >= 32 && byte <= 126) {
                return count + 1;
            }
            return count;
        }, 0);
        return printableCount / sample.length > 0.8;
    }
    formatBinaryPreview(bytes, truncated) {
        const hex = bytes.map((byte)=>byte.toString(16).padStart(2, '0')).join('');
        return `0x${hex}${truncated ? '…' : ''}`;
    }
    /**
     * Deserializes a request payload from a byte array into an HTTP request-like structure.
     *
     * @param payload - The serialized payload to deserialize.
     * @returns An object representing the deserialized request, including the method,
     *          URL postfix (path and query string), headers, body, and request ID.
     */ deserializeRequestPayload(payload) {
        // Create a reader
        const requestReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](payload);
        // The first 32 bytes is the requestId
        const requestId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](requestReader.read(32));
        // Method
        const methodLength = requestReader.readVarIntNum();
        let method = 'GET';
        if (methodLength > 0) {
            method = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](requestReader.read(methodLength));
        }
        // Path
        const pathLength = requestReader.readVarIntNum();
        let path = '';
        if (pathLength > 0) {
            path = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](requestReader.read(pathLength));
        }
        // Search
        const searchLength = requestReader.readVarIntNum();
        let search = '';
        if (searchLength > 0) {
            search = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](requestReader.read(searchLength));
        }
        // Read headers
        const requestHeaders = {};
        const nHeaders = requestReader.readVarIntNum();
        if (nHeaders > 0) {
            for(let i = 0; i < nHeaders; i++){
                const nHeaderKeyBytes = requestReader.readVarIntNum();
                const headerKeyBytes = requestReader.read(nHeaderKeyBytes);
                const headerKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](headerKeyBytes);
                const nHeaderValueBytes = requestReader.readVarIntNum();
                const headerValueBytes = requestReader.read(nHeaderValueBytes);
                const headerValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](headerValueBytes);
                requestHeaders[headerKey] = headerValue;
            }
        }
        // Read body
        let requestBody;
        const requestBodyBytes = requestReader.readVarIntNum();
        if (requestBodyBytes > 0) {
            requestBody = requestReader.read(requestBodyBytes);
        }
        // Return the deserialized RequestInit
        return {
            urlPostfix: path + search,
            method,
            headers: requestHeaders,
            body: requestBody,
            requestId
        };
    }
} //# sourceMappingURL=SimplifiedFetchTransport.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/clients/AuthFetch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthFetch",
    ()=>AuthFetch
]);
// @ts-nocheck
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$P2PKH$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/P2PKH.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$createNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/createNonce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$Peer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/Peer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$transports$2f$SimplifiedFetchTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/transports/SimplifiedFetchTransport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$SessionManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/SessionManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$getVerifiableCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/getVerifiableCertificates.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const PAYMENT_VERSION = '1.0';
class AuthFetch {
    sessionManager;
    wallet;
    callbacks = {};
    certificatesReceived = [];
    requestedCertificates;
    originator;
    peers = {};
    /**
    * Constructs a new AuthFetch instance.
    * @param wallet - The wallet instance for signing and authentication.
    * @param requestedCertificates - Optional set of certificates to request from peers.
    */ constructor(wallet, requestedCertificates, sessionManager, originator){
        this.wallet = wallet;
        this.requestedCertificates = requestedCertificates;
        this.sessionManager = sessionManager ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$SessionManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionManager"]();
        this.originator = originator;
    }
    /**
     * Mutually authenticates and sends a HTTP request to a server.
     *
     * 1) Attempt the request.
     * 2) If 402 Payment Required, automatically create and send payment.
     * 3) Return the final response.
     *
     * @param url - The URL to send the request to.
     * @param config - Configuration options for the request, including method, headers, and body.
     * @returns A promise that resolves with the server's response, structured as a Response-like object.
     *
     * @throws Will throw an error if unsupported headers are used or other validation fails.
     */ async fetch(url, config = {}) {
        if (typeof config.retryCounter === 'number') {
            if (config.retryCounter <= 0) {
                throw new Error('Request failed after maximum number of retries.');
            }
            config.retryCounter--;
        }
        const response = await new Promise(async (resolve, reject)=>{
            try {
                // Apply defaults
                const { method = 'GET', headers = {}, body } = config;
                // Extract a base url
                const parsedUrl = new URL(url);
                const baseURL = parsedUrl.origin;
                // Create a new transport for this base url if needed
                let peerToUse;
                if (typeof this.peers[baseURL] === 'undefined') {
                    // Create a peer for the request
                    const newTransport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$transports$2f$SimplifiedFetchTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimplifiedFetchTransport"](baseURL);
                    peerToUse = {
                        peer: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$Peer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Peer"](this.wallet, newTransport, this.requestedCertificates, this.sessionManager, undefined, this.originator),
                        pendingCertificateRequests: []
                    };
                    this.peers[baseURL] = peerToUse;
                    this.peers[baseURL].peer.listenForCertificatesReceived((senderPublicKey, certs)=>{
                        this.certificatesReceived.push(...certs);
                    });
                    this.peers[baseURL].peer.listenForCertificatesRequested(async (verifier, requestedCertificates)=>{
                        try {
                            this.peers[baseURL].pendingCertificateRequests.push(true);
                            const certificatesToInclude = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$getVerifiableCertificates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVerifiableCertificates"])(this.wallet, requestedCertificates, verifier, this.originator);
                            await this.peers[baseURL].peer.sendCertificateResponse(verifier, certificatesToInclude);
                        } finally{
                            // Give the backend 500 ms to process the certificates we just sent, before releasing the queue entry
                            await new Promise((resolve)=>setTimeout(resolve, 500));
                            this.peers[baseURL].pendingCertificateRequests.shift();
                        }
                    });
                } else {
                    // Check if there's a session associated with this baseURL
                    if (this.peers[baseURL].supportsMutualAuth === false) {
                        // Use standard fetch if mutual authentication is not supported
                        try {
                            const response = await this.handleFetchAndValidate(url, config, this.peers[baseURL]);
                            resolve(response);
                        } catch (error) {
                            reject(error);
                        }
                        return;
                    }
                    peerToUse = this.peers[baseURL];
                }
                // Serialize the simplified fetch request.
                const requestNonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(32);
                const requestNonceAsBase64 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](requestNonce);
                const writer = await this.serializeRequest(method, headers, body, parsedUrl, requestNonce);
                // Setup general message listener to resolve requests once a response is received
                this.callbacks[requestNonceAsBase64] = {
                    resolve,
                    reject
                };
                const listenerId = peerToUse.peer.listenForGeneralMessages((senderPublicKey, payload)=>{
                    // Create a reader
                    const responseReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](payload);
                    // Deserialize first 32 bytes of payload
                    const responseNonceAsBase64 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](responseReader.read(32));
                    if (responseNonceAsBase64 !== requestNonceAsBase64) {
                        return;
                    }
                    peerToUse.peer.stopListeningForGeneralMessages(listenerId);
                    // Save the identity key for the peer for future requests, since we have it here.
                    this.peers[baseURL].identityKey = senderPublicKey;
                    this.peers[baseURL].supportsMutualAuth = true;
                    // Status code
                    const statusCode = responseReader.readVarIntNum();
                    // Headers
                    const responseHeaders = {};
                    const nHeaders = responseReader.readVarIntNum();
                    if (nHeaders > 0) {
                        for(let i = 0; i < nHeaders; i++){
                            const nHeaderKeyBytes = responseReader.readVarIntNum();
                            const headerKeyBytes = responseReader.read(nHeaderKeyBytes);
                            const headerKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](headerKeyBytes);
                            const nHeaderValueBytes = responseReader.readVarIntNum();
                            const headerValueBytes = responseReader.read(nHeaderValueBytes);
                            const headerValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](headerValueBytes);
                            responseHeaders[headerKey] = headerValue;
                        }
                    }
                    // Add back the server identity key header
                    responseHeaders['x-bsv-auth-identity-key'] = senderPublicKey;
                    // Body
                    let responseBody;
                    const responseBodyBytes = responseReader.readVarIntNum();
                    if (responseBodyBytes > 0) {
                        responseBody = responseReader.read(responseBodyBytes);
                    }
                    // Create the Response object
                    const responseValue = new Response(responseBody ? new Uint8Array(responseBody) : null, {
                        status: statusCode,
                        statusText: `${statusCode}`,
                        headers: new Headers(responseHeaders)
                    });
                    // Resolve or reject the correct request with the response data
                    this.callbacks[requestNonceAsBase64].resolve(responseValue);
                    // Clean up
                    delete this.callbacks[requestNonceAsBase64];
                });
                // Before sending general messages to the peer, ensure that no certificate requests are pending.
                // This way, the user would need to choose to either allow or reject the certificate request first.
                // If the server has a resource that requires certificates to be sent before access would be granted,
                // this makes sure the user has a chance to send the certificates before the resource is requested.
                if (peerToUse.pendingCertificateRequests.length > 0) {
                    await new Promise((resolve)=>{
                        setInterval(()=>{
                            if (peerToUse.pendingCertificateRequests.length === 0) {
                                resolve();
                            }
                        }, 100); // Check every 100 ms for the user to finish responding
                    });
                }
                // Send the request, now that all listeners are set up
                await peerToUse.peer.toPeer(writer.toArray(), peerToUse.identityKey).catch(async (error)=>{
                    if (error.message.includes('Session not found for nonce')) {
                        delete this.peers[baseURL];
                        config.retryCounter ??= 3;
                        const response = await this.fetch(url, config);
                        resolve(response);
                        return;
                    }
                    if (error.message.includes('HTTP server failed to authenticate')) {
                        try {
                            const response = await this.handleFetchAndValidate(url, config, peerToUse);
                            resolve(response);
                            return;
                        } catch (fetchError) {
                            reject(fetchError);
                        }
                    } else {
                        reject(error);
                    }
                });
            } catch (e) {
                reject(e);
            }
        });
        // Check if server requires payment to access the requested route
        if (response.status === 402) {
            // Create and attach a payment, then retry
            return await this.handlePaymentAndRetry(url, config, response);
        }
        return response;
    }
    /**
     * Request Certificates from a Peer
     * @param baseUrl
     * @param certificatesToRequest
     */ async sendCertificateRequest(baseUrl, certificatesToRequest) {
        const parsedUrl = new URL(baseUrl);
        const baseURL = parsedUrl.origin;
        let peerToUse;
        if (typeof this.peers[baseURL] !== 'undefined') {
            peerToUse = {
                peer: this.peers[baseURL].peer
            };
        } else {
            const newTransport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$transports$2f$SimplifiedFetchTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SimplifiedFetchTransport"](baseURL);
            peerToUse = {
                peer: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$Peer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Peer"](this.wallet, newTransport, this.requestedCertificates, this.sessionManager, this.originator)
            };
            this.peers[baseURL] = peerToUse;
        }
        // Return a promise that resolves when certificates are received
        return await new Promise(async (resolve, reject)=>{
            // Set up the listener before making the request
            const callbackId = peerToUse.peer.listenForCertificatesReceived((_senderPublicKey, certs)=>{
                peerToUse.peer.stopListeningForCertificatesReceived(callbackId);
                this.certificatesReceived.push(...certs);
                resolve(certs);
            });
            try {
                // Initiate the certificate request
                await peerToUse.peer.requestCertificates(certificatesToRequest, peerToUse.identityKey);
            } catch (err) {
                peerToUse.peer.stopListeningForCertificatesReceived(callbackId);
                reject(err);
            }
        });
    }
    /**
     * Return any certificates we've collected thus far, then clear them out.
     */ consumeReceivedCertificates() {
        return this.certificatesReceived.splice(0);
    }
    /**
     * Serializes the HTTP request to be sent over the Transport.
     *
     * @param method - The HTTP method (e.g., 'GET', 'POST') for the request.
     * @param headers - A record of HTTP headers to include in the request.
     * @param body - The body of the request, if applicable (e.g., for POST/PUT requests).
     * @param parsedUrl - The parsed URL object containing the full request URL.
     * @param requestNonce - A unique random nonce to ensure request integrity.
     * @returns A promise that resolves to a `Writer` containing the serialized request.
     *
     * @throws Will throw an error if unsupported headers are used or serialization fails.
     */ async serializeRequest(method, headers, body, parsedUrl, requestNonce) {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        // Write request nonce
        writer.write(requestNonce);
        // Method length
        writer.writeVarIntNum(method.length);
        // Method
        writer.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](method));
        // Handle pathname (e.g. /path/to/resource)
        if (parsedUrl.pathname.length > 0) {
            // Pathname length
            const pathnameAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](parsedUrl.pathname);
            writer.writeVarIntNum(pathnameAsArray.length);
            // Pathname
            writer.write(pathnameAsArray);
        } else {
            writer.writeVarIntNum(-1);
        }
        // Handle search params (e.g. ?q=hello)
        if (parsedUrl.search.length > 0) {
            // search length
            const searchAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](parsedUrl.search);
            writer.writeVarIntNum(searchAsArray.length);
            // search
            writer.write(searchAsArray);
        } else {
            writer.writeVarIntNum(-1);
        }
        // Construct headers to send / sign:
        // Ensures clients only provided supported HTTP request headers
        // - Include custom headers prefixed with x-bsv (excluding those starting with x-bsv-auth)
        // - Include a normalized version of the content-type header
        // - Include the authorization header
        const includedHeaders = [];
        for (let [k, v] of Object.entries(headers)){
            k = k.toLowerCase(); // We will always sign lower-case header keys
            if (k.startsWith('x-bsv-') || k === 'authorization') {
                if (k.startsWith('x-bsv-auth')) {
                    throw new Error('No BSV auth headers allowed here!');
                }
                includedHeaders.push([
                    k,
                    v
                ]);
            } else if (k.startsWith('content-type')) {
                // Normalize the Content-Type header by removing any parameters (e.g., "; charset=utf-8")
                v = v.split(';')[0].trim();
                includedHeaders.push([
                    k,
                    v
                ]);
            } else {
                throw new Error('Unsupported header in the simplified fetch implementation. Only content-type, authorization, and x-bsv-* headers are supported.');
            }
        }
        // Sort the headers by key to ensure a consistent order for signing and verification.
        includedHeaders.sort(([keyA], [keyB])=>keyA.localeCompare(keyB));
        // nHeaders
        writer.writeVarIntNum(includedHeaders.length);
        for(let i = 0; i < includedHeaders.length; i++){
            // headerKeyLength
            const headerKeyAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](includedHeaders[i][0], 'utf8');
            writer.writeVarIntNum(headerKeyAsArray.length);
            // headerKey
            writer.write(headerKeyAsArray);
            // headerValueLength
            const headerValueAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](includedHeaders[i][1], 'utf8');
            writer.writeVarIntNum(headerValueAsArray.length);
            // headerValue
            writer.write(headerValueAsArray);
        }
        // If method typically carries a body and body is undefined, default it
        // This prevents signature verification errors due to mismatch default body types with express
        const methodsThatTypicallyHaveBody = [
            'POST',
            'PUT',
            'PATCH',
            'DELETE'
        ];
        if (methodsThatTypicallyHaveBody.includes(method.toUpperCase()) && body === undefined) {
            // Check if content-type is application/json
            const contentTypeHeader = includedHeaders.find(([k])=>k === 'content-type');
            if (contentTypeHeader && contentTypeHeader[1].includes('application/json')) {
                body = '{}';
            } else {
                body = '';
            }
        }
        // Handle body
        if (body) {
            const reqBody = await this.normalizeBodyToNumberArray(body); // Use the utility function
            writer.writeVarIntNum(reqBody.length);
            writer.write(reqBody);
        } else {
            writer.writeVarIntNum(-1); // No body
        }
        return writer;
    }
    /**
     * Handles a non-authenticated fetch requests and validates that the server is not claiming to be authenticated.
     */ async handleFetchAndValidate(url, config, peerToUse) {
        const response = await fetch(url, config);
        response.headers.forEach((header)=>{
            if (header.toLocaleLowerCase().startsWith('x-bsv')) {
                throw new Error('The server is trying to claim it has been authenticated when it has not!');
            }
        });
        if (response.ok) {
            peerToUse.supportsMutualAuth = false;
            return response;
        } else {
            throw new Error(`Request failed with status: ${response.status}`);
        }
    }
    /**
     * If we get 402 Payment Required, we build a transaction via wallet.createAction()
     * and re-attempt the request with an x-bsv-payment header.
     */ async handlePaymentAndRetry(url, config = {}, originalResponse) {
        const paymentVersion = originalResponse.headers.get('x-bsv-payment-version');
        if (!paymentVersion || paymentVersion !== PAYMENT_VERSION) {
            throw new Error(`Unsupported x-bsv-payment-version response header. Client version: ${PAYMENT_VERSION}, Server version: ${paymentVersion}`);
        }
        const satoshisRequiredHeader = originalResponse.headers.get('x-bsv-payment-satoshis-required');
        if (!satoshisRequiredHeader) {
            throw new Error('Missing x-bsv-payment-satoshis-required response header.');
        }
        const satoshisRequired = parseInt(satoshisRequiredHeader);
        if (isNaN(satoshisRequired) || satoshisRequired <= 0) {
            throw new Error('Invalid x-bsv-payment-satoshis-required response header value.');
        }
        const serverIdentityKey = originalResponse.headers.get('x-bsv-auth-identity-key');
        if (typeof serverIdentityKey !== 'string') {
            throw new Error('Missing x-bsv-auth-identity-key response header.');
        }
        const derivationPrefix = originalResponse.headers.get('x-bsv-payment-derivation-prefix');
        if (typeof derivationPrefix !== 'string' || derivationPrefix.length < 1) {
            throw new Error('Missing x-bsv-payment-derivation-prefix response header.');
        }
        let paymentContext = config.paymentContext;
        if (paymentContext != null) {
            const requirementsChanged = !this.isPaymentContextCompatible(paymentContext, satoshisRequired, serverIdentityKey, derivationPrefix);
            if (requirementsChanged) {
                this.logPaymentAttempt('warn', 'Server adjusted payment requirements; regenerating transaction', this.composePaymentLogDetails(url, paymentContext));
                paymentContext = await this.createPaymentContext(url, config, satoshisRequired, serverIdentityKey, derivationPrefix);
            }
        } else {
            paymentContext = await this.createPaymentContext(url, config, satoshisRequired, serverIdentityKey, derivationPrefix);
        }
        if (paymentContext.attempts >= paymentContext.maxAttempts) {
            throw this.buildPaymentFailureError(url, paymentContext, new Error('Maximum payment attempts exceeded before retrying'));
        }
        const headersWithPayment = {
            ...config.headers ?? {}
        };
        headersWithPayment['x-bsv-payment'] = JSON.stringify({
            derivationPrefix: paymentContext.derivationPrefix,
            derivationSuffix: paymentContext.derivationSuffix,
            transaction: paymentContext.transactionBase64
        });
        const nextConfig = {
            ...config,
            headers: headersWithPayment,
            paymentContext
        };
        if (typeof nextConfig.retryCounter !== 'number') {
            nextConfig.retryCounter = 3;
        }
        const attemptNumber = paymentContext.attempts + 1;
        const maxAttempts = paymentContext.maxAttempts;
        paymentContext.attempts = attemptNumber;
        const attemptDetails = this.composePaymentLogDetails(url, paymentContext);
        this.logPaymentAttempt('warn', `Attempting paid request (${attemptNumber}/${maxAttempts})`, attemptDetails);
        try {
            const response = await this.fetch(url, nextConfig);
            this.logPaymentAttempt('info', `Paid request attempt ${attemptNumber} succeeded`, attemptDetails);
            return response;
        } catch (error) {
            const errorEntry = this.createPaymentErrorEntry(paymentContext.attempts, error);
            paymentContext.errors.push(errorEntry);
            this.logPaymentAttempt('error', `Paid request attempt ${attemptNumber} failed`, {
                ...attemptDetails,
                error: {
                    message: errorEntry.message,
                    stack: errorEntry.stack
                }
            });
            if (paymentContext.attempts >= paymentContext.maxAttempts) {
                throw this.buildPaymentFailureError(url, paymentContext, error);
            }
            const delayMs = this.getPaymentRetryDelay(paymentContext.attempts);
            await this.wait(delayMs);
            return this.handlePaymentAndRetry(url, nextConfig, originalResponse);
        }
    }
    isPaymentContextCompatible(context, satoshisRequired, serverIdentityKey, derivationPrefix) {
        return context.satoshisRequired === satoshisRequired && context.serverIdentityKey === serverIdentityKey && context.derivationPrefix === derivationPrefix;
    }
    async createPaymentContext(url, config, satoshisRequired, serverIdentityKey, derivationPrefix) {
        const derivationSuffix = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$createNonce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNonce"])(this.wallet, undefined, this.originator);
        const { publicKey: derivedPublicKey } = await this.wallet.getPublicKey({
            protocolID: [
                2,
                '3241645161d8'
            ],
            keyID: `${derivationPrefix} ${derivationSuffix}`,
            counterparty: serverIdentityKey
        }, this.originator);
        const lockingScript = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$P2PKH$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]().lock(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromString(derivedPublicKey).toAddress()).toHex();
        const { tx } = await this.wallet.createAction({
            description: `Payment for request to ${new URL(url).origin}`,
            outputs: [
                {
                    satoshis: satoshisRequired,
                    lockingScript,
                    customInstructions: JSON.stringify({
                        derivationPrefix,
                        derivationSuffix,
                        payee: serverIdentityKey
                    }),
                    outputDescription: 'HTTP request payment'
                }
            ],
            options: {
                randomizeOutputs: false
            }
        }, this.originator);
        const { publicKey: clientIdentityKey } = await this.wallet.getPublicKey({
            identityKey: true
        }, this.originator);
        return {
            satoshisRequired,
            transactionBase64: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](tx),
            derivationPrefix,
            derivationSuffix,
            serverIdentityKey,
            clientIdentityKey,
            attempts: 0,
            maxAttempts: this.getMaxPaymentAttempts(config),
            errors: [],
            requestSummary: this.buildPaymentRequestSummary(url, config)
        };
    }
    getMaxPaymentAttempts(config) {
        const attempts = typeof config.paymentRetryAttempts === 'number' ? config.paymentRetryAttempts : undefined;
        if (typeof attempts === 'number' && attempts > 0) {
            return Math.floor(attempts);
        }
        return 3;
    }
    buildPaymentRequestSummary(url, config) {
        const headers = {
            ...config.headers ?? {}
        };
        const method = typeof config.method === 'string' ? config.method.toUpperCase() : 'GET';
        const bodySummary = this.describeRequestBodyForLogging(config.body);
        return {
            url,
            method,
            headers,
            bodyType: bodySummary.type,
            bodyByteLength: bodySummary.byteLength
        };
    }
    describeRequestBodyForLogging(body) {
        if (body == null) {
            return {
                type: 'none',
                byteLength: 0
            };
        }
        if (typeof body === 'string') {
            return {
                type: 'string',
                byteLength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](body, 'utf8').length
            };
        }
        if (Array.isArray(body)) {
            if (body.every((item)=>typeof item === 'number')) {
                return {
                    type: 'number[]',
                    byteLength: body.length
                };
            }
            return {
                type: 'array',
                byteLength: body.length
            };
        }
        if (typeof ArrayBuffer !== 'undefined' && body instanceof ArrayBuffer) {
            return {
                type: 'ArrayBuffer',
                byteLength: body.byteLength
            };
        }
        if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView(body)) {
            return {
                type: body.constructor != null ? body.constructor.name : 'TypedArray',
                byteLength: body.byteLength
            };
        }
        if (typeof Blob !== 'undefined' && body instanceof Blob) {
            return {
                type: 'Blob',
                byteLength: body.size
            };
        }
        if (typeof FormData !== 'undefined' && body instanceof FormData) {
            return {
                type: 'FormData',
                byteLength: 0
            };
        }
        if (typeof URLSearchParams !== 'undefined' && body instanceof URLSearchParams) {
            const serialized = body.toString();
            return {
                type: 'URLSearchParams',
                byteLength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](serialized, 'utf8').length
            };
        }
        if (typeof ReadableStream !== 'undefined' && body instanceof ReadableStream) {
            return {
                type: 'ReadableStream',
                byteLength: 0
            };
        }
        try {
            const serialized = JSON.stringify(body);
            if (typeof serialized === 'string') {
                return {
                    type: 'object',
                    byteLength: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](serialized, 'utf8').length
                };
            }
        } catch (_) {
        // Ignore JSON serialization issues for logging purposes.
        }
        return {
            type: typeof body,
            byteLength: 0
        };
    }
    composePaymentLogDetails(url, context) {
        return {
            url,
            request: context.requestSummary,
            payment: {
                satoshis: context.satoshisRequired,
                transactionBase64: context.transactionBase64,
                derivationPrefix: context.derivationPrefix,
                derivationSuffix: context.derivationSuffix,
                serverIdentityKey: context.serverIdentityKey,
                clientIdentityKey: context.clientIdentityKey
            },
            attempts: {
                used: context.attempts,
                max: context.maxAttempts
            },
            errors: context.errors
        };
    }
    logPaymentAttempt(level, message, details) {
        const prefix = '[AuthFetch][Payment]';
        if (level === 'error') {
            console.error(`${prefix} ${message}`, details);
        } else if (level === 'warn') {
            console.warn(`${prefix} ${message}`, details);
        } else {
            if (typeof console.info === 'function') {
                console.info(`${prefix} ${message}`, details);
            } else {
                console.log(`${prefix} ${message}`, details);
            }
        }
    }
    createPaymentErrorEntry(attempt, error) {
        const entry = {
            attempt,
            timestamp: new Date().toISOString(),
            message: '',
            stack: undefined
        };
        if (error instanceof Error) {
            entry.message = error.message;
            entry.stack = error.stack ?? undefined;
        } else {
            entry.message = String(error);
        }
        return entry;
    }
    getPaymentRetryDelay(attempt) {
        const baseDelay = 250;
        const multiplier = Math.min(attempt, 5);
        return baseDelay * multiplier;
    }
    async wait(ms) {
        if (ms <= 0) {
            return;
        }
        await new Promise((resolve)=>setTimeout(resolve, ms));
    }
    buildPaymentFailureError(url, context, lastError) {
        const message = `Paid request to ${url} failed after ${context.attempts}/${context.maxAttempts} attempts. Sent ${context.satoshisRequired} satoshis to ${context.serverIdentityKey}.`;
        const error = new Error(message);
        const failureDetails = {
            request: context.requestSummary,
            payment: {
                satoshis: context.satoshisRequired,
                transactionBase64: context.transactionBase64,
                derivationPrefix: context.derivationPrefix,
                derivationSuffix: context.derivationSuffix,
                serverIdentityKey: context.serverIdentityKey,
                clientIdentityKey: context.clientIdentityKey
            },
            attempts: {
                used: context.attempts,
                max: context.maxAttempts
            },
            errors: context.errors
        };
        error.details = failureDetails;
        if (lastError instanceof Error) {
            ;
            error.cause = lastError;
        }
        return error;
    }
    async normalizeBodyToNumberArray(body) {
        // 0. Null / undefined
        if (body == null) {
            return [];
        }
        // 1. object
        if (typeof body === 'object') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](JSON.stringify(body, 'utf8'));
        }
        // 2. number[]
        if (Array.isArray(body) && body.every((item)=>typeof item === 'number')) {
            return body; // Return the array as is
        }
        // 3. string
        if (typeof body === 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](body, 'utf8');
        }
        // 4. ArrayBuffer / TypedArrays
        if (body instanceof ArrayBuffer || ArrayBuffer.isView(body)) {
            const typedArray = body instanceof ArrayBuffer ? new Uint8Array(body) : new Uint8Array(body.buffer);
            return Array.from(typedArray);
        }
        // 5. Blob
        if (body instanceof Blob) {
            const arrayBuffer = await body.arrayBuffer();
            return Array.from(new Uint8Array(arrayBuffer));
        }
        // 6. FormData
        if (body instanceof FormData) {
            const entries = [];
            body.forEach((value, key)=>{
                entries.push([
                    key,
                    value.toString()
                ]);
            });
            const urlEncoded = new URLSearchParams(entries).toString();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](urlEncoded, 'utf8');
        }
        // 7. URLSearchParams
        if (body instanceof URLSearchParams) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](body.toString(), 'utf8');
        }
        // 8. ReadableStream
        if (body instanceof ReadableStream) {
            throw new Error('ReadableStream cannot be directly converted to number[].');
        }
        // 9. Fallback
        throw new Error('Unsupported body type in this SimplifiedFetch implementation.');
    }
} //# sourceMappingURL=AuthFetch.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/clients/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$clients$2f$AuthFetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/clients/AuthFetch.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/transports/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$transports$2f$SimplifiedFetchTransport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/transports/SimplifiedFetchTransport.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$Peer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/Peer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$SessionManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/SessionManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/utils/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$clients$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/clients/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$transports$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/transports/index.js [app-ssr] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
}),
];

//# sourceMappingURL=ef5fd_%40bsv_sdk_dist_esm_src_auth_c5afe3e0._.js.map