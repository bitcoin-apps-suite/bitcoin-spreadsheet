module.exports = [
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/Wallet.interfaces.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @enum {number} SecurityLevels
 *
 * Silent = 0 Silently grants the request with no user interation.
 * App = 1 Requires user approval for every application.
 * Counterparty = 2 Requires user approval per counterparty per application.
 */ __turbopack_context__.s([
    "SecurityLevels",
    ()=>SecurityLevels
]);
var SecurityLevels;
(function(SecurityLevels) {
    SecurityLevels[SecurityLevels["Silent"] = 0] = "Silent";
    SecurityLevels[SecurityLevels["App"] = 1] = "App";
    SecurityLevels[SecurityLevels["Counterparty"] = 2] = "Counterparty";
})(SecurityLevels || (SecurityLevels = {})); //# sourceMappingURL=Wallet.interfaces.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/KeyDeriver.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KeyDeriver",
    ()=>KeyDeriver,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PrivateKey$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-ssr] (ecmascript) <export default as PrivateKey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PublicKey$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-ssr] (ecmascript) <export default as PublicKey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SymmetricKey$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/SymmetricKey.js [app-ssr] (ecmascript) <export default as SymmetricKey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-ssr] (ecmascript) <export * as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript) <export * as Utils>");
;
class KeyDeriver {
    cacheSharedSecret;
    retrieveCachedSharedSecret;
    rootKey;
    identityKey;
    anyone;
    /**
     * Initializes the KeyDeriver instance with a root private key.
     * @param {PrivateKey | 'anyone'} rootKey - The root private key or the string 'anyone'.
     */ constructor(rootKey, cacheSharedSecret, retrieveCachedSharedSecret){
        this.cacheSharedSecret = cacheSharedSecret;
        this.retrieveCachedSharedSecret = retrieveCachedSharedSecret;
        this.anyone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PrivateKey$3e$__["PrivateKey"](1).toPublicKey();
        if (rootKey === 'anyone') {
            this.rootKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PrivateKey$3e$__["PrivateKey"](1);
        } else {
            this.rootKey = rootKey;
        }
        this.identityKey = this.rootKey.toPublicKey().toString();
    }
    /**
     * Derives a public key based on protocol ID, key ID, and counterparty.
     * @param {WalletProtocol} protocolID - The protocol ID including a security level and protocol name.
     * @param {string} keyID - The key identifier.
     * @param {Counterparty} counterparty - The counterparty's public key or a predefined value ('self' or 'anyone').
     * @param {boolean} [forSelf=false] - Whether deriving for self.
     * @returns {PublicKey} - The derived public key.
     */ derivePublicKey(protocolID, keyID, counterparty, forSelf = false) {
        counterparty = this.normalizeCounterparty(counterparty);
        if (forSelf) {
            return this.rootKey.deriveChild(counterparty, this.computeInvoiceNumber(protocolID, keyID), this.cacheSharedSecret, this.retrieveCachedSharedSecret).toPublicKey();
        } else {
            return counterparty.deriveChild(this.rootKey, this.computeInvoiceNumber(protocolID, keyID), this.cacheSharedSecret, this.retrieveCachedSharedSecret);
        }
    }
    /**
     * Derives a private key based on protocol ID, key ID, and counterparty.
     * @param {WalletProtocol} protocolID - The protocol ID including a security level and protocol name.
     * @param {string} keyID - The key identifier.
     * @param {Counterparty} counterparty - The counterparty's public key or a predefined value ('self' or 'anyone').
     * @returns {PrivateKey} - The derived private key.
     */ derivePrivateKey(protocolID, keyID, counterparty) {
        counterparty = this.normalizeCounterparty(counterparty);
        return this.rootKey.deriveChild(counterparty, this.computeInvoiceNumber(protocolID, keyID), this.cacheSharedSecret, this.retrieveCachedSharedSecret);
    }
    /**
     * Derives a symmetric key based on protocol ID, key ID, and counterparty.
     * Note: Symmetric keys should not be derivable by everyone due to security risks.
     * @param {WalletProtocol} protocolID - The protocol ID including a security level and protocol name.
     * @param {string} keyID - The key identifier.
     * @param {Counterparty} counterparty - The counterparty's public key or a predefined value ('self' or 'anyone').
     * @returns {SymmetricKey} - The derived symmetric key.
     */ deriveSymmetricKey(protocolID, keyID, counterparty) {
        // If counterparty is 'anyone', we use 1*G as the public key.
        // This is a publicly derivable key and should only be used in scenarios where public disclosure is intended.
        if (counterparty === 'anyone') {
            counterparty = this.anyone;
        } else {
            counterparty = this.normalizeCounterparty(counterparty);
        }
        const derivedPublicKey = this.derivePublicKey(protocolID, keyID, counterparty);
        const derivedPrivateKey = this.derivePrivateKey(protocolID, keyID, counterparty);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SymmetricKey$3e$__["SymmetricKey"](derivedPrivateKey.deriveSharedSecret(derivedPublicKey)?.x?.toArray() ?? []);
    }
    /**
     * Reveals the shared secret between the root key and the counterparty.
     * Note: This should not be used for 'self'.
     * @param {Counterparty} counterparty - The counterparty's public key or a predefined value ('self' or 'anyone').
     * @returns {number[]} - The shared secret as a number array.
     * @throws {Error} - Throws an error if attempting to reveal a shared secret for 'self'.
     */ revealCounterpartySecret(counterparty) {
        if (counterparty === 'self') {
            throw new Error('Counterparty secrets cannot be revealed for counterparty=self.');
        }
        counterparty = this.normalizeCounterparty(counterparty);
        // Double-check to ensure not revealing the secret for 'self'
        const self = this.rootKey.toPublicKey();
        const keyDerivedBySelf = this.rootKey.deriveChild(self, 'test').toHex();
        const keyDerivedByCounterparty = this.rootKey.deriveChild(counterparty, 'test').toHex();
        if (keyDerivedBySelf === keyDerivedByCounterparty) {
            throw new Error('Counterparty secrets cannot be revealed for counterparty=self.');
        }
        return this.rootKey.deriveSharedSecret(counterparty).encode(true);
    }
    /**
     * Reveals the specific key association for a given protocol ID, key ID, and counterparty.
     * @param {Counterparty} counterparty - The counterparty's public key or a predefined value ('self' or 'anyone').
     * @param {WalletProtocol} protocolID - The protocol ID including a security level and protocol name.
     * @param {string} keyID - The key identifier.
     * @returns {number[]} - The specific key association as a number array.
     */ revealSpecificSecret(counterparty, protocolID, keyID) {
        counterparty = this.normalizeCounterparty(counterparty);
        const sharedSecret = this.rootKey.deriveSharedSecret(counterparty);
        const invoiceNumberBin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toArray(this.computeInvoiceNumber(protocolID, keyID), 'utf8');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__["Hash"].sha256hmac(sharedSecret.encode(true), invoiceNumberBin);
    }
    /**
     * Normalizes the counterparty to a public key.
     * @param {Counterparty} counterparty - The counterparty's public key or a predefined value ('self' or 'anyone').
     * @returns {PublicKey} - The normalized counterparty public key.
     * @throws {Error} - Throws an error if the counterparty is invalid.
     */ normalizeCounterparty(counterparty) {
        if (counterparty === null || counterparty === undefined) {
            throw new Error('counterparty must be self, anyone or a public key!');
        } else if (counterparty === 'self') {
            return this.rootKey.toPublicKey();
        } else if (counterparty === 'anyone') {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PrivateKey$3e$__["PrivateKey"](1).toPublicKey();
        } else if (typeof counterparty === 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PublicKey$3e$__["PublicKey"].fromString(counterparty);
        } else {
            return counterparty;
        }
    }
    /**
     * Computes the invoice number based on the protocol ID and key ID.
     * @param {WalletProtocol} protocolID - The protocol ID including a security level and protocol name.
     * @param {string} keyID - The key identifier.
     * @returns {string} - The computed invoice number.
     * @throws {Error} - Throws an error if protocol ID or key ID are invalid.
     */ computeInvoiceNumber(protocolID, keyID) {
        const securityLevel = protocolID[0];
        if (!Number.isInteger(securityLevel) || securityLevel < 0 || securityLevel > 2) {
            throw new Error('Protocol security level must be 0, 1, or 2');
        }
        const protocolName = protocolID[1].toLowerCase().trim();
        if (keyID.length > 800) {
            throw new Error('Key IDs must be 800 characters or less');
        }
        if (keyID.length < 1) {
            throw new Error('Key IDs must be 1 character or more');
        }
        if (protocolName.length > 400) {
            // Specific linkage revelation is the only protocol ID that can contain another protocol ID.
            // Therefore, we allow it to be long enough to encapsulate the target protocol
            if (protocolName.startsWith('specific linkage revelation ')) {
                // The format is: 'specific linkage revelation x YYYYY'
                // Where: x is the security level and YYYYY is the target protocol
                // Thus, the max acceptable length is 30 + 400 = 430 bytes
                if (protocolName.length > 430) {
                    throw new Error('Specific linkage revelation protocol names must be 430 characters or less');
                }
            } else {
                throw new Error('Protocol names must be 400 characters or less');
            }
        }
        if (protocolName.length < 5) {
            throw new Error('Protocol names must be 5 characters or more');
        }
        if (protocolName.includes('  ')) {
            throw new Error('Protocol names cannot contain multiple consecutive spaces ("  ")');
        }
        if (!/^[a-z0-9 ]+$/g.test(protocolName)) {
            throw new Error('Protocol names can only contain letters, numbers and spaces');
        }
        if (protocolName.endsWith(' protocol')) {
            throw new Error('No need to end your protocol name with " protocol"');
        }
        return `${securityLevel}-${protocolName}-${keyID}`;
    }
}
const __TURBOPACK__default__export__ = KeyDeriver;
 //# sourceMappingURL=KeyDeriver.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/CachedKeyDeriver.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CachedKeyDeriver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PrivateKey$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-ssr] (ecmascript) <export default as PrivateKey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PublicKey$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-ssr] (ecmascript) <export default as PublicKey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$KeyDeriver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/KeyDeriver.js [app-ssr] (ecmascript)");
;
;
class CachedKeyDeriver {
    keyDeriver;
    cache;
    maxCacheSize;
    /**
     * The root key from which all other keys are derived.
     */ rootKey;
    /**
     * The identity of this key deriver which is normally the public key associated with the `rootKey`
     */ identityKey;
    /**
     * Initializes the CachedKeyDeriver instance with a root private key and optional cache settings.
     * @param {PrivateKey | 'anyone'} rootKey - The root private key or the string 'anyone'.
     * @param {Object} [options] - Optional settings for the cache.
     * @param {number} [options.maxCacheSize=1000] - The maximum number of entries to store in the cache.
     */ constructor(rootKey, options){
        if (rootKey === 'anyone') {
            this.rootKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PrivateKey$3e$__["PrivateKey"](1);
        } else {
            this.rootKey = rootKey;
        }
        this.keyDeriver = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$KeyDeriver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KeyDeriver"](this.rootKey, (priv, pub, point)=>{
            this.cacheSet(`${priv.toString()}-${pub.toString()}`, point);
        }, (priv, pub)=>{
            return this.cacheGet(`${priv.toString()}-${pub.toString()}`);
        });
        this.identityKey = this.rootKey.toPublicKey().toString();
        this.cache = new Map();
        const maxCacheSize = options?.maxCacheSize;
        this.maxCacheSize = maxCacheSize != null && !isNaN(maxCacheSize) && maxCacheSize > 0 ? maxCacheSize : 1000;
    }
    /**
     * Derives a public key based on protocol ID, key ID, and counterparty.
     * Caches the result for future calls with the same parameters.
     * @param {WalletProtocol} protocolID - The protocol ID including a security level and protocol name.
     * @param {string} keyID - The key identifier.
     * @param {Counterparty} counterparty - The counterparty's public key or a predefined value ('self' or 'anyone').
     * @param {boolean} [forSelf=false] - Whether deriving for self.
     * @returns {PublicKey} - The derived public key.
     */ derivePublicKey(protocolID, keyID, counterparty, forSelf = false) {
        const cacheKey = this.generateCacheKey('derivePublicKey', protocolID, keyID, counterparty, forSelf);
        if (this.cache.has(cacheKey)) {
            const cachedValue = this.cacheGet(cacheKey);
            if (cachedValue === undefined) {
                throw new Error('Cached value is undefined');
            }
            return cachedValue;
        } else {
            const result = this.keyDeriver.derivePublicKey(protocolID, keyID, counterparty, forSelf);
            this.cacheSet(cacheKey, result);
            return result;
        }
    }
    /**
     * Derives a private key based on protocol ID, key ID, and counterparty.
     * Caches the result for future calls with the same parameters.
     * @param {WalletProtocol} protocolID - The protocol ID including a security level and protocol name.
     * @param {string} keyID - The key identifier.
     * @param {Counterparty} counterparty - The counterparty's public key or a predefined value ('self' or 'anyone').
     * @returns {PrivateKey} - The derived private key.
     */ derivePrivateKey(protocolID, keyID, counterparty) {
        const cacheKey = this.generateCacheKey('derivePrivateKey', protocolID, keyID, counterparty);
        if (this.cache.has(cacheKey)) {
            const cachedValue = this.cacheGet(cacheKey);
            if (cachedValue === undefined) {
                throw new Error('Cached value is undefined');
            }
            return cachedValue;
        } else {
            const result = this.keyDeriver.derivePrivateKey(protocolID, keyID, counterparty);
            this.cacheSet(cacheKey, result);
            return result;
        }
    }
    /**
     * Derives a symmetric key based on protocol ID, key ID, and counterparty.
     * Caches the result for future calls with the same parameters.
     * @param {WalletProtocol} protocolID - The protocol ID including a security level and protocol name.
     * @param {string} keyID - The key identifier.
     * @param {Counterparty} counterparty - The counterparty's public key or a predefined value ('self' or 'anyone').
     * @returns {SymmetricKey} - The derived symmetric key.
     * @throws {Error} - Throws an error if attempting to derive a symmetric key for 'anyone'.
     */ deriveSymmetricKey(protocolID, keyID, counterparty) {
        const cacheKey = this.generateCacheKey('deriveSymmetricKey', protocolID, keyID, counterparty);
        if (this.cache.has(cacheKey)) {
            const cachedValue = this.cacheGet(cacheKey);
            if (cachedValue === undefined) {
                throw new Error('Cached value is undefined');
            }
            return cachedValue;
        } else {
            const result = this.keyDeriver.deriveSymmetricKey(protocolID, keyID, counterparty);
            this.cacheSet(cacheKey, result);
            return result;
        }
    }
    /**
     * Reveals the shared secret between the root key and the counterparty.
     * Caches the result for future calls with the same parameters.
     * @param {Counterparty} counterparty - The counterparty's public key or a predefined value ('self' or 'anyone').
     * @returns {number[]} - The shared secret as a number array.
     * @throws {Error} - Throws an error if attempting to reveal a shared secret for 'self'.
     */ revealCounterpartySecret(counterparty) {
        const cacheKey = this.generateCacheKey('revealCounterpartySecret', counterparty);
        if (this.cache.has(cacheKey)) {
            const cachedValue = this.cacheGet(cacheKey);
            if (cachedValue === undefined) {
                throw new Error('Cached value is undefined');
            }
            return cachedValue;
        } else {
            const result = this.keyDeriver.revealCounterpartySecret(counterparty);
            this.cacheSet(cacheKey, result);
            return result;
        }
    }
    /**
     * Reveals the specific key association for a given protocol ID, key ID, and counterparty.
     * Caches the result for future calls with the same parameters.
     * @param {Counterparty} counterparty - The counterparty's public key or a predefined value ('self' or 'anyone').
     * @param {WalletProtocol} protocolID - The protocol ID including a security level and protocol name.
     * @param {string} keyID - The key identifier.
     * @returns {number[]} - The specific key association as a number array.
     */ revealSpecificSecret(counterparty, protocolID, keyID) {
        const cacheKey = this.generateCacheKey('revealSpecificSecret', counterparty, protocolID, keyID);
        if (this.cache.has(cacheKey)) {
            const cachedValue = this.cacheGet(cacheKey);
            if (cachedValue === undefined) {
                throw new Error('Cached value is undefined');
            }
            return cachedValue;
        } else {
            const result = this.keyDeriver.revealSpecificSecret(counterparty, protocolID, keyID);
            this.cacheSet(cacheKey, result);
            return result;
        }
    }
    /**
     * Generates a unique cache key based on the method name and input parameters.
     * @param {string} methodName - The name of the method.
     * @param {...any} args - The arguments passed to the method.
     * @returns {string} - The generated cache key.
     */ generateCacheKey(methodName, ...args) {
        const serializedArgs = args.map((arg)=>this.serializeArgument(arg)).join('|');
        return `${methodName}|${serializedArgs}`;
    }
    /**
     * Serializes an argument to a string for use in a cache key.
     * @param {any} arg - The argument to serialize.
     * @returns {string} - The serialized argument.
     */ serializeArgument(arg) {
        if (arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PublicKey$3e$__["PublicKey"] || arg instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PrivateKey$3e$__["PrivateKey"]) {
            return arg.toString();
        } else if (Array.isArray(arg)) {
            return arg.map((item)=>this.serializeArgument(item)).join(',');
        } else if (typeof arg === 'object' && arg !== null) {
            return JSON.stringify(arg);
        } else {
            return String(arg);
        }
    }
    /**
     * Retrieves an item from the cache and updates its position to reflect recent use.
     * @param {string} cacheKey - The key of the cached item.
     * @returns {any} - The cached value.
     */ cacheGet(cacheKey) {
        const value = this.cache.get(cacheKey);
        // Update the entry to reflect recent use
        this.cache.delete(cacheKey);
        if (value !== undefined) {
            this.cache.set(cacheKey, value);
        }
        return value;
    }
    /**
     * Adds an item to the cache and evicts the least recently used item if necessary.
     * @param {string} cacheKey - The key of the item to cache.
     * @param {any} value - The value to cache.
     */ cacheSet(cacheKey, value) {
        if (this.cache.size >= this.maxCacheSize) {
            // Evict the least recently used item (first item in Map)
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(cacheKey, value);
    }
} //# sourceMappingURL=CachedKeyDeriver.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/ProtoWallet.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProtoWallet",
    ()=>ProtoWallet,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$CachedKeyDeriver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/CachedKeyDeriver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-ssr] (ecmascript) <export * as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ECDSA$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ECDSA.js [app-ssr] (ecmascript) <export * as ECDSA>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BigNumber$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-ssr] (ecmascript) <export default as BigNumber>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Signature$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Signature.js [app-ssr] (ecmascript) <export default as Signature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Schnorr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Schnorr$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Schnorr.js [app-ssr] (ecmascript) <export default as Schnorr>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PublicKey$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-ssr] (ecmascript) <export default as PublicKey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Point.js [app-ssr] (ecmascript) <export default as Point>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
;
;
;
class ProtoWallet {
    keyDeriver;
    constructor(rootKeyOrKeyDeriver){
        if (typeof rootKeyOrKeyDeriver.identityKey !== 'string') {
            rootKeyOrKeyDeriver = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$CachedKeyDeriver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](rootKeyOrKeyDeriver);
        }
        this.keyDeriver = rootKeyOrKeyDeriver;
    }
    async getPublicKey(args) {
        if (args.identityKey) {
            if (this.keyDeriver == null) {
                throw new Error('keyDeriver is undefined');
            }
            return {
                publicKey: this.keyDeriver.rootKey.toPublicKey().toString()
            };
        } else {
            if (args.protocolID == null || args.keyID == null || args.keyID === '') {
                throw new Error('protocolID and keyID are required if identityKey is false or undefined.');
            }
            const keyDeriver = this.keyDeriver ?? (()=>{
                throw new Error('keyDeriver is undefined');
            })();
            return {
                publicKey: keyDeriver.derivePublicKey(args.protocolID, args.keyID, args.counterparty ?? 'self', args.forSelf).toString()
            };
        }
    }
    async revealCounterpartyKeyLinkage(args) {
        const { publicKey: identityKey } = await this.getPublicKey({
            identityKey: true
        });
        if (this.keyDeriver == null) {
            throw new Error('keyDeriver is undefined');
        }
        const linkage = this.keyDeriver.revealCounterpartySecret(args.counterparty);
        const linkageProof = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Schnorr$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Schnorr$3e$__["Schnorr"]().generateProof(this.keyDeriver.rootKey, this.keyDeriver.rootKey.toPublicKey(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PublicKey$3e$__["PublicKey"].fromString(args.counterparty), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"].fromDER(linkage));
        const linkageProofBin = [
            ...linkageProof.R.encode(true),
            ...linkageProof.SPrime.encode(true),
            ...linkageProof.z.toArray()
        ];
        const revelationTime = new Date().toISOString();
        const { ciphertext: encryptedLinkage } = await this.encrypt({
            plaintext: linkage,
            protocolID: [
                2,
                'counterparty linkage revelation'
            ],
            keyID: revelationTime,
            counterparty: args.verifier
        });
        const { ciphertext: encryptedLinkageProof } = await this.encrypt({
            plaintext: linkageProofBin,
            protocolID: [
                2,
                'counterparty linkage revelation'
            ],
            keyID: revelationTime,
            counterparty: args.verifier
        });
        return {
            prover: identityKey,
            verifier: args.verifier,
            counterparty: args.counterparty,
            revelationTime,
            encryptedLinkage,
            encryptedLinkageProof
        };
    }
    async revealSpecificKeyLinkage(args) {
        const { publicKey: identityKey } = await this.getPublicKey({
            identityKey: true
        });
        if (this.keyDeriver == null) {
            throw new Error('keyDeriver is undefined');
        }
        const linkage = this.keyDeriver.revealSpecificSecret(args.counterparty, args.protocolID, args.keyID);
        const { ciphertext: encryptedLinkage } = await this.encrypt({
            plaintext: linkage,
            protocolID: [
                2,
                `specific linkage revelation ${args.protocolID[0]} ${args.protocolID[1]}`
            ],
            keyID: args.keyID,
            counterparty: args.verifier
        });
        const { ciphertext: encryptedLinkageProof } = await this.encrypt({
            plaintext: [
                0
            ],
            protocolID: [
                2,
                `specific linkage revelation ${args.protocolID[0]} ${args.protocolID[1]}`
            ],
            keyID: args.keyID,
            counterparty: args.verifier
        });
        return {
            prover: identityKey,
            verifier: args.verifier,
            counterparty: args.counterparty,
            protocolID: args.protocolID,
            keyID: args.keyID,
            encryptedLinkage,
            encryptedLinkageProof,
            proofType: 0
        };
    }
    async encrypt(args) {
        if (this.keyDeriver == null) {
            throw new Error('keyDeriver is undefined');
        }
        const key = this.keyDeriver.deriveSymmetricKey(args.protocolID, args.keyID, args.counterparty ?? 'self');
        return {
            ciphertext: key.encrypt(args.plaintext)
        };
    }
    async decrypt(args, originator) {
        if (this.keyDeriver == null) {
            throw new Error('keyDeriver is undefined');
        }
        const key = this.keyDeriver.deriveSymmetricKey(args.protocolID, args.keyID, args.counterparty ?? 'self');
        return {
            plaintext: key.decrypt(args.ciphertext)
        };
    }
    async createHmac(args) {
        if (this.keyDeriver == null) {
            throw new Error('keyDeriver is undefined');
        }
        const key = this.keyDeriver.deriveSymmetricKey(args.protocolID, args.keyID, args.counterparty ?? 'self');
        return {
            hmac: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__["Hash"].sha256hmac(key.toArray(), args.data)
        };
    }
    async verifyHmac(args) {
        if (this.keyDeriver == null) {
            throw new Error('keyDeriver is undefined');
        }
        const key = this.keyDeriver.deriveSymmetricKey(args.protocolID, args.keyID, args.counterparty ?? 'self');
        const computed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__["Hash"].sha256hmac(key.toArray(), args.data);
        const provided = args.hmac;
        const valid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constantTimeEquals"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(computed), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(provided));
        if (!valid) {
            const e = new Error('HMAC is not valid');
            e.code = 'ERR_INVALID_HMAC';
            throw e;
        }
        return {
            valid
        };
    }
    async createSignature(args) {
        if (args.hashToDirectlySign == null && args.data == null) {
            throw new Error('args.data or args.hashToDirectlySign must be valid');
        }
        const hash = args.hashToDirectlySign ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__["Hash"].sha256(args.data ?? []);
        const keyDeriver = this.keyDeriver ?? (()=>{
            throw new Error('keyDeriver is undefined');
        })();
        const key = keyDeriver.derivePrivateKey(args.protocolID, args.keyID, args.counterparty ?? 'anyone');
        return {
            signature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ECDSA$3e$__["ECDSA"].sign(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BigNumber$3e$__["BigNumber"](hash), key, true).toDER()
        };
    }
    async verifySignature(args) {
        if (args.hashToDirectlyVerify == null && args.data == null) {
            throw new Error('args.data or args.hashToDirectlyVerify must be valid');
        }
        const hash = args.hashToDirectlyVerify ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__["Hash"].sha256(args.data ?? []);
        const keyDeriver = this.keyDeriver ?? (()=>{
            throw new Error('keyDeriver is undefined');
        })();
        const key = keyDeriver.derivePublicKey(args.protocolID, args.keyID, args.counterparty ?? 'self', args.forSelf);
        const valid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ECDSA$3e$__["ECDSA"].verify(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BigNumber$3e$__["BigNumber"](hash), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Signature$3e$__["Signature"].fromDER(args.signature), key);
        if (!valid) {
            const e = new Error('Signature is not valid');
            e.code = 'ERR_INVALID_SIGNATURE';
            throw e;
        }
        return {
            valid
        };
    }
}
const __TURBOPACK__default__export__ = ProtoWallet;
 //# sourceMappingURL=ProtoWallet.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/window.CWI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Facilitates wallet operations over the window.CWI interface.
 */ __turbopack_context__.s([
    "default",
    ()=>WindowCWISubstrate
]);
class WindowCWISubstrate {
    CWI;
    constructor(){
        if ("TURBOPACK compile-time truthy", 1) {
            throw new Error('The window.CWI substrate requires a global window object.');
        }
        if (typeof window.CWI !== 'object') {
            throw new Error('The window.CWI interface does not appear to be bound to the window object.');
        }
        this.CWI = window.CWI; // Binding CWI to prevent changes
    }
    async createAction(args, originator) {
        return await this.CWI.createAction(args, originator);
    }
    async signAction(args, originator) {
        return await this.CWI.signAction(args, originator);
    }
    async abortAction(args, originator) {
        return await this.CWI.abortAction(args, originator);
    }
    async listActions(args, originator) {
        return await this.CWI.listActions(args, originator);
    }
    async internalizeAction(args, originator) {
        return await this.CWI.internalizeAction(args, originator);
    }
    async listOutputs(args, originator) {
        return await this.CWI.listOutputs(args, originator);
    }
    async relinquishOutput(args, originator) {
        return await this.CWI.relinquishOutput(args, originator);
    }
    async getPublicKey(args, originator) {
        return await this.CWI.getPublicKey(args, originator);
    }
    async revealCounterpartyKeyLinkage(args, originator) {
        return await this.CWI.revealCounterpartyKeyLinkage(args, originator);
    }
    async revealSpecificKeyLinkage(args, originator) {
        return await this.CWI.revealSpecificKeyLinkage(args, originator);
    }
    async encrypt(args, originator) {
        return await this.CWI.encrypt(args, originator);
    }
    async decrypt(args, originator) {
        return await this.CWI.decrypt(args, originator);
    }
    async createHmac(args, originator) {
        return await this.CWI.createHmac(args, originator);
    }
    async verifyHmac(args, originator) {
        return await this.CWI.verifyHmac(args, originator);
    }
    async createSignature(args, originator) {
        return await this.CWI.createSignature(args, originator);
    }
    async verifySignature(args, originator) {
        return await this.CWI.verifySignature(args, originator);
    }
    async acquireCertificate(args, originator) {
        return await this.CWI.acquireCertificate(args, originator);
    }
    async listCertificates(args, originator) {
        return await this.CWI.listCertificates(args, originator);
    }
    async proveCertificate(args, originator) {
        return await this.CWI.proveCertificate(args, originator);
    }
    async relinquishCertificate(args, originator) {
        return await this.CWI.relinquishCertificate(args, originator);
    }
    async discoverByIdentityKey(args, originator) {
        return await this.CWI.discoverByIdentityKey(args, originator);
    }
    async discoverByAttributes(args, originator) {
        return await this.CWI.discoverByAttributes(args, originator);
    }
    async isAuthenticated(args, originator) {
        return await this.CWI.isAuthenticated(args, originator);
    }
    async waitForAuthentication(args, originator) {
        return await this.CWI.waitForAuthentication(args, originator);
    }
    async getHeight(args, originator) {
        return await this.CWI.getHeight(args, originator);
    }
    async getHeaderForHeight(args, originator) {
        return await this.CWI.getHeaderForHeight(args, originator);
    }
    async getNetwork(args, originator) {
        return await this.CWI.getNetwork(args, originator);
    }
    async getVersion(args, originator) {
        return await this.CWI.getVersion(args, originator);
    }
} //# sourceMappingURL=window.CWI.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletError",
    ()=>WalletError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "walletErrors",
    ()=>walletErrors
]);
class WalletError extends Error {
    code;
    isError = true;
    constructor(message, code = 1, stack){
        super(message);
        this.code = code;
        this.name = this.constructor.name;
        if (stack !== undefined && stack !== null && stack !== '') {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
    /**
     * Safely serializes a WalletError (including special cases), Error or unknown error to JSON.
     *
     * Safely means avoiding deep, large, circular issues.
     *
     * Example deserialization can be found in HTTPWalletJSON.ts of bsv ts-sdk.
     *
     * @param error
     * @returns stringified JSON representation of the error such that it can be deserialized to a WalletError.
     */ static unknownToJson(error) {
        let e;
        if (error.isError === true && String(error.name).startsWith('WERR_')) {
            e = {
                name: error.name,
                message: error.message,
                isError: true
            };
            if (e.name === 'WERR_REVIEW_ACTIONS') {
                e.reviewActionResults = error.reviewActionResults;
                e.sendWithResults = error.sendWithResults;
                e.txid = error.txid;
                e.tx = error.tx;
                e.noSendChange = error.noSendChange;
                e.code = 5;
            } else if (e.name === 'WERR_INVALID_PARAMETER') {
                e.parameter = error.parameter;
                e.code = 6;
            } else if (e.name === 'WERR_INSUFFICIENT_FUNDS') {
                e.totalSatoshisNeeded = error.totalSatoshisNeeded;
                e.moreSatoshisNeeded = error.moreSatoshisNeeded;
                e.code = 7;
            }
        } else if (error instanceof Error) {
            e = {
                name: error.constructor.name,
                message: error.message,
                isError: true
            };
        } else {
            e = {
                name: 'WERR_UNKNOWN',
                message: String(error),
                isError: true
            };
        }
        const json = JSON.stringify(e);
        return json;
    }
}
var walletErrors;
(function(walletErrors) {
    walletErrors[walletErrors["unknownError"] = 1] = "unknownError";
    walletErrors[walletErrors["unsupportedAction"] = 2] = "unsupportedAction";
    walletErrors[walletErrors["invalidHmac"] = 3] = "invalidHmac";
    walletErrors[walletErrors["invalidSignature"] = 4] = "invalidSignature";
    walletErrors[walletErrors["reviewActions"] = 5] = "reviewActions";
    walletErrors[walletErrors["invalidParameter"] = 6] = "invalidParameter";
    walletErrors[walletErrors["insufficientFunds"] = 7] = "insufficientFunds";
})(walletErrors || (walletErrors = {}));
const __TURBOPACK__default__export__ = WalletError;
 //# sourceMappingURL=WalletError.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/XDM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>XDMSubstrate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletError.js [app-ssr] (ecmascript)");
;
;
;
class XDMSubstrate {
    domain;
    constructor(domain = '*'){
        if ("TURBOPACK compile-time truthy", 1) {
            throw new Error('The XDM substrate requires a global window object.');
        }
        if (typeof window.postMessage !== 'function') {
            throw new Error('The window object does not seem to support postMessage calls.');
        }
        this.domain = domain;
    }
    async invoke(call, args) {
        return await new Promise((resolve, reject)=>{
            const id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(12));
            const listener = (e)=>{
                if (e.data.type !== 'CWI' || !e.isTrusted || e.data.id !== id || e.data.isInvocation === true) {
                    return;
                }
                if (typeof window.removeEventListener === 'function') {
                    window.removeEventListener('message', listener);
                }
                if (e.data.status === 'error') {
                    const err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletError"](e.data.description, e.data.code);
                    reject(err);
                } else {
                    resolve(e.data.result);
                }
            };
            window.addEventListener('message', listener);
            window.parent.postMessage({
                type: 'CWI',
                isInvocation: true,
                id,
                call,
                args
            }, this.domain);
        });
    }
    async createAction(args) {
        return await this.invoke('createAction', args);
    }
    async signAction(args) {
        return await this.invoke('signAction', args);
    }
    async abortAction(args) {
        return await this.invoke('abortAction', args);
    }
    async listActions(args) {
        return await this.invoke('listActions', args);
    }
    async internalizeAction(args) {
        return await this.invoke('internalizeAction', args);
    }
    async listOutputs(args) {
        return await this.invoke('listOutputs', args);
    }
    async relinquishOutput(args) {
        return await this.invoke('relinquishOutput', args);
    }
    async getPublicKey(args) {
        return await this.invoke('getPublicKey', args);
    }
    async revealCounterpartyKeyLinkage(args) {
        return await this.invoke('revealCounterpartyKeyLinkage', args);
    }
    async revealSpecificKeyLinkage(args) {
        return await this.invoke('revealSpecificKeyLinkage', args);
    }
    async encrypt(args) {
        return await this.invoke('encrypt', args);
    }
    async decrypt(args) {
        return await this.invoke('decrypt', args);
    }
    async createHmac(args) {
        return await this.invoke('createHmac', args);
    }
    async verifyHmac(args) {
        return await this.invoke('verifyHmac', args);
    }
    async createSignature(args) {
        return await this.invoke('createSignature', args);
    }
    async verifySignature(args) {
        return await this.invoke('verifySignature', args);
    }
    async acquireCertificate(args) {
        return await this.invoke('acquireCertificate', args);
    }
    async listCertificates(args) {
        return await this.invoke('listCertificates', args);
    }
    async proveCertificate(args) {
        return await this.invoke('proveCertificate', args);
    }
    async relinquishCertificate(args) {
        return await this.invoke('relinquishCertificate', args);
    }
    async discoverByIdentityKey(args) {
        return await this.invoke('discoverByIdentityKey', args);
    }
    async discoverByAttributes(args) {
        return await this.invoke('discoverByAttributes', args);
    }
    async isAuthenticated(args) {
        return await this.invoke('isAuthenticated', args);
    }
    async waitForAuthentication(args) {
        return await this.invoke('waitForAuthentication', args);
    }
    async getHeight(args) {
        return await this.invoke('getHeight', args);
    }
    async getHeaderForHeight(args) {
        return await this.invoke('getHeaderForHeight', args);
    }
    async getNetwork(args) {
        return await this.invoke('getNetwork', args);
    }
    async getVersion(args) {
        return await this.invoke('getVersion', args);
    }
} //# sourceMappingURL=XDM.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/WalletWireCalls.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// NOTE: Enum values must not exceed the UInt8 range (0–255)
var calls;
(function(calls) {
    calls[calls["createAction"] = 1] = "createAction";
    calls[calls["signAction"] = 2] = "signAction";
    calls[calls["abortAction"] = 3] = "abortAction";
    calls[calls["listActions"] = 4] = "listActions";
    calls[calls["internalizeAction"] = 5] = "internalizeAction";
    calls[calls["listOutputs"] = 6] = "listOutputs";
    calls[calls["relinquishOutput"] = 7] = "relinquishOutput";
    calls[calls["getPublicKey"] = 8] = "getPublicKey";
    calls[calls["revealCounterpartyKeyLinkage"] = 9] = "revealCounterpartyKeyLinkage";
    calls[calls["revealSpecificKeyLinkage"] = 10] = "revealSpecificKeyLinkage";
    calls[calls["encrypt"] = 11] = "encrypt";
    calls[calls["decrypt"] = 12] = "decrypt";
    calls[calls["createHmac"] = 13] = "createHmac";
    calls[calls["verifyHmac"] = 14] = "verifyHmac";
    calls[calls["createSignature"] = 15] = "createSignature";
    calls[calls["verifySignature"] = 16] = "verifySignature";
    calls[calls["acquireCertificate"] = 17] = "acquireCertificate";
    calls[calls["listCertificates"] = 18] = "listCertificates";
    calls[calls["proveCertificate"] = 19] = "proveCertificate";
    calls[calls["relinquishCertificate"] = 20] = "relinquishCertificate";
    calls[calls["discoverByIdentityKey"] = 21] = "discoverByIdentityKey";
    calls[calls["discoverByAttributes"] = 22] = "discoverByAttributes";
    calls[calls["isAuthenticated"] = 23] = "isAuthenticated";
    calls[calls["waitForAuthentication"] = 24] = "waitForAuthentication";
    calls[calls["getHeight"] = 25] = "getHeight";
    calls[calls["getHeaderForHeight"] = 26] = "getHeaderForHeight";
    calls[calls["getNetwork"] = 27] = "getNetwork";
    calls[calls["getVersion"] = 28] = "getVersion";
})(calls || (calls = {}));
const __TURBOPACK__default__export__ = calls;
 //# sourceMappingURL=WalletWireCalls.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/WalletWireTransceiver.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WalletWireTransceiver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$Wallet$2e$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/Wallet.interfaces.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/Certificate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWireCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/WalletWireCalls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletError.js [app-ssr] (ecmascript)");
;
;
;
;
;
class WalletWireTransceiver {
    wire;
    constructor(wire){
        this.wire = wire;
    }
    async transmit(call, originator = '', params = []) {
        const frameWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        frameWriter.writeUInt8(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWireCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][call]);
        const originatorArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](originator, 'utf8');
        frameWriter.writeUInt8(originatorArray.length);
        frameWriter.write(originatorArray);
        if (params.length > 0) {
            frameWriter.write(params);
        }
        const frame = frameWriter.toArray();
        const result = await this.wire.transmitToWallet(frame);
        const resultReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](result);
        const errorByte = resultReader.readUInt8();
        if (errorByte === 0) {
            const resultFrame = resultReader.read();
            return resultFrame;
        } else {
            // Deserialize the error message length
            const errorMessageLength = resultReader.readVarIntNum();
            const errorMessageBytes = resultReader.read(errorMessageLength);
            const errorMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](errorMessageBytes);
            // Deserialize the stack trace length
            const stackTraceLength = resultReader.readVarIntNum();
            const stackTraceBytes = resultReader.read(stackTraceLength);
            const stackTrace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](stackTraceBytes);
            // Construct a custom wallet error
            const e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletError"](errorMessage, errorByte, stackTrace);
            throw e;
        }
    }
    async createAction(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        // Serialize description
        const descriptionBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.description, 'utf8');
        paramWriter.writeVarIntNum(descriptionBytes.length);
        paramWriter.write(descriptionBytes);
        // input BEEF
        if (args.inputBEEF != null) {
            paramWriter.writeVarIntNum(args.inputBEEF.length);
            paramWriter.write(args.inputBEEF);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        // Serialize inputs
        if (args.inputs != null) {
            paramWriter.writeVarIntNum(args.inputs.length);
            for (const input of args.inputs){
                // outpoint
                paramWriter.write(this.encodeOutpoint(input.outpoint));
                // unlockingScript / unlockingScriptLength
                if (input.unlockingScript != null && input.unlockingScript !== '') {
                    const unlockingScriptBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](input.unlockingScript, 'hex');
                    paramWriter.writeVarIntNum(unlockingScriptBytes.length);
                    paramWriter.write(unlockingScriptBytes);
                } else {
                    paramWriter.writeVarIntNum(-1);
                    paramWriter.writeVarIntNum(input.unlockingScriptLength ?? 0);
                }
                // inputDescription
                const inputDescriptionBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](input.inputDescription, 'utf8');
                paramWriter.writeVarIntNum(inputDescriptionBytes.length);
                paramWriter.write(inputDescriptionBytes);
                // sequenceNumber
                if (typeof input.sequenceNumber === 'number') {
                    paramWriter.writeVarIntNum(input.sequenceNumber);
                } else {
                    paramWriter.writeVarIntNum(-1);
                }
            }
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        // Serialize outputs
        if (args.outputs != null) {
            paramWriter.writeVarIntNum(args.outputs.length);
            for (const output of args.outputs){
                // lockingScript
                const lockingScriptBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](output.lockingScript, 'hex');
                paramWriter.writeVarIntNum(lockingScriptBytes.length);
                paramWriter.write(lockingScriptBytes);
                // satoshis
                paramWriter.writeVarIntNum(output.satoshis);
                // outputDescription
                const outputDescriptionBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](output.outputDescription, 'utf8');
                paramWriter.writeVarIntNum(outputDescriptionBytes.length);
                paramWriter.write(outputDescriptionBytes);
                // basket
                if (output.basket != null && output.basket !== '') {
                    const basketBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](output.basket, 'utf8');
                    paramWriter.writeVarIntNum(basketBytes.length);
                    paramWriter.write(basketBytes);
                } else {
                    paramWriter.writeVarIntNum(-1);
                }
                // customInstructions
                if (output.customInstructions != null && output.customInstructions !== '') {
                    const customInstructionsBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](output.customInstructions, 'utf8');
                    paramWriter.writeVarIntNum(customInstructionsBytes.length);
                    paramWriter.write(customInstructionsBytes);
                } else {
                    paramWriter.writeVarIntNum(-1);
                }
                // tags
                if (output.tags != null) {
                    paramWriter.writeVarIntNum(output.tags.length);
                    for (const tag of output.tags){
                        const tagBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](tag, 'utf8');
                        paramWriter.writeVarIntNum(tagBytes.length);
                        paramWriter.write(tagBytes);
                    }
                } else {
                    paramWriter.writeVarIntNum(-1);
                }
            }
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        // Serialize lockTime
        if (typeof args.lockTime === 'number') {
            paramWriter.writeVarIntNum(args.lockTime);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        // Serialize version
        if (typeof args.version === 'number') {
            paramWriter.writeVarIntNum(args.version);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        // Serialize labels
        if (args.labels != null) {
            paramWriter.writeVarIntNum(args.labels.length);
            for (const label of args.labels){
                const labelBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](label, 'utf8');
                paramWriter.writeVarIntNum(labelBytes.length);
                paramWriter.write(labelBytes);
            }
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        // Serialize options
        if (args.options != null) {
            paramWriter.writeInt8(1); // options present
            // signAndProcess
            if (typeof args.options.signAndProcess === 'boolean') {
                paramWriter.writeInt8(args.options.signAndProcess ? 1 : 0);
            } else {
                paramWriter.writeInt8(-1);
            }
            // acceptDelayedBroadcast
            if (typeof args.options.acceptDelayedBroadcast === 'boolean') {
                paramWriter.writeInt8(args.options.acceptDelayedBroadcast ? 1 : 0);
            } else {
                paramWriter.writeInt8(-1);
            }
            // trustSelf
            if (args.options.trustSelf === 'known') {
                paramWriter.writeInt8(1);
            } else {
                paramWriter.writeInt8(-1);
            }
            // knownTxids
            if (args.options.knownTxids != null) {
                paramWriter.writeVarIntNum(args.options.knownTxids.length);
                for (const txid of args.options.knownTxids){
                    const txidBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](txid, 'hex');
                    paramWriter.write(txidBytes);
                }
            } else {
                paramWriter.writeVarIntNum(-1);
            }
            // returnTXIDOnly
            if (typeof args.options.returnTXIDOnly === 'boolean') {
                paramWriter.writeInt8(args.options.returnTXIDOnly ? 1 : 0);
            } else {
                paramWriter.writeInt8(-1);
            }
            // noSend
            if (typeof args.options.noSend === 'boolean') {
                paramWriter.writeInt8(args.options.noSend ? 1 : 0);
            } else {
                paramWriter.writeInt8(-1);
            }
            // noSendChange
            if (args.options.noSendChange != null) {
                paramWriter.writeVarIntNum(args.options.noSendChange.length);
                for (const outpoint of args.options.noSendChange){
                    paramWriter.write(this.encodeOutpoint(outpoint));
                }
            } else {
                paramWriter.writeVarIntNum(-1);
            }
            // sendWith
            if (args.options.sendWith != null) {
                paramWriter.writeVarIntNum(args.options.sendWith.length);
                for (const txid of args.options.sendWith){
                    const txidBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](txid, 'hex');
                    paramWriter.write(txidBytes);
                }
            } else {
                paramWriter.writeVarIntNum(-1);
            }
            // randomizeOutputs
            if (typeof args.options.randomizeOutputs === 'boolean') {
                paramWriter.writeInt8(args.options.randomizeOutputs ? 1 : 0);
            } else {
                paramWriter.writeInt8(-1);
            }
        } else {
            paramWriter.writeInt8(0); // options not present
        }
        // Transmit and parse response
        const result = await this.transmit('createAction', originator, paramWriter.toArray());
        const resultReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](result);
        const response = {};
        // Parse txid
        const txidFlag = resultReader.readInt8();
        if (txidFlag === 1) {
            const txidBytes = resultReader.read(32);
            response.txid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](txidBytes);
        }
        // Parse tx
        const txFlag = resultReader.readInt8();
        if (txFlag === 1) {
            const txLength = resultReader.readVarIntNum();
            response.tx = resultReader.read(txLength);
        }
        // Parse noSendChange
        const noSendChangeLength = resultReader.readVarIntNum();
        if (noSendChangeLength >= 0) {
            response.noSendChange = [];
            for(let i = 0; i < noSendChangeLength; i++){
                const outpoint = this.readOutpoint(resultReader);
                response.noSendChange.push(outpoint);
            }
        }
        // Parse sendWithResults
        const sendWithResultsLength = resultReader.readVarIntNum();
        if (sendWithResultsLength >= 0) {
            response.sendWithResults = [];
            for(let i = 0; i < sendWithResultsLength; i++){
                const txidBytes = resultReader.read(32);
                const txid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](txidBytes);
                const statusCode = resultReader.readInt8();
                let status = 'unproven';
                if (statusCode === 1) status = 'unproven';
                else if (statusCode === 2) status = 'sending';
                else if (statusCode === 3) status = 'failed';
                response.sendWithResults.push({
                    txid,
                    status
                });
            }
        }
        // Parse signableTransaction
        const signableTransactionFlag = resultReader.readInt8();
        if (signableTransactionFlag === 1) {
            const txLength = resultReader.readVarIntNum();
            const tx = resultReader.read(txLength);
            const referenceLength = resultReader.readVarIntNum();
            const referenceBytes = resultReader.read(referenceLength);
            response.signableTransaction = {
                tx,
                reference: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](referenceBytes)
            };
        }
        return response;
    }
    async signAction(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        // Serialize spends
        const spendIndexes = Object.keys(args.spends);
        paramWriter.writeVarIntNum(spendIndexes.length);
        for (const index of spendIndexes){
            paramWriter.writeVarIntNum(Number(index));
            const spend = args.spends[Number(index)];
            // unlockingScript
            const unlockingScriptBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](spend.unlockingScript, 'hex');
            paramWriter.writeVarIntNum(unlockingScriptBytes.length);
            paramWriter.write(unlockingScriptBytes);
            // sequenceNumber
            if (typeof spend.sequenceNumber === 'number') {
                paramWriter.writeVarIntNum(spend.sequenceNumber);
            } else {
                paramWriter.writeVarIntNum(-1);
            }
        }
        // Serialize reference
        const referenceBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.reference, 'base64');
        paramWriter.writeVarIntNum(referenceBytes.length);
        paramWriter.write(referenceBytes);
        // Serialize options
        if (args.options != null) {
            paramWriter.writeInt8(1); // options present
            // acceptDelayedBroadcast
            if (typeof args.options.acceptDelayedBroadcast === 'boolean') {
                paramWriter.writeInt8(args.options.acceptDelayedBroadcast ? 1 : 0);
            } else {
                paramWriter.writeInt8(-1);
            }
            // returnTXIDOnly
            if (typeof args.options.returnTXIDOnly === 'boolean') {
                paramWriter.writeInt8(args.options.returnTXIDOnly ? 1 : 0);
            } else {
                paramWriter.writeInt8(-1);
            }
            // noSend
            if (typeof args.options.noSend === 'boolean') {
                paramWriter.writeInt8(args.options.noSend ? 1 : 0);
            } else {
                paramWriter.writeInt8(-1);
            }
            // sendWith
            if (args.options.sendWith != null) {
                paramWriter.writeVarIntNum(args.options.sendWith.length);
                for (const txid of args.options.sendWith){
                    const txidBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](txid, 'hex');
                    paramWriter.write(txidBytes);
                }
            } else {
                paramWriter.writeVarIntNum(-1);
            }
        } else {
            paramWriter.writeInt8(0); // options not present
        }
        // Transmit and parse response
        const result = await this.transmit('signAction', originator, paramWriter.toArray());
        const resultReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](result);
        const response = {};
        // Parse txid
        const txidFlag = resultReader.readInt8();
        if (txidFlag === 1) {
            const txidBytes = resultReader.read(32);
            response.txid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](txidBytes);
        }
        // Parse tx
        const txFlag = resultReader.readInt8();
        if (txFlag === 1) {
            const txLength = resultReader.readVarIntNum();
            response.tx = resultReader.read(txLength);
        }
        // Parse sendWithResults
        const sendWithResultsLength = resultReader.readVarIntNum();
        if (sendWithResultsLength >= 0) {
            response.sendWithResults = [];
            for(let i = 0; i < sendWithResultsLength; i++){
                const txidBytes = resultReader.read(32);
                const txid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](txidBytes);
                const statusCode = resultReader.readInt8();
                let status = 'unproven';
                if (statusCode === 1) status = 'unproven';
                else if (statusCode === 2) status = 'sending';
                else if (statusCode === 3) status = 'failed';
                response.sendWithResults.push({
                    txid,
                    status
                });
            }
        }
        return response;
    }
    async abortAction(args, originator) {
        await this.transmit('abortAction', originator, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.reference, 'base64'));
        return {
            aborted: true
        };
    }
    async listActions(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        // Serialize labels
        paramWriter.writeVarIntNum(args.labels.length);
        for (const label of args.labels){
            const labelBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](label, 'utf8');
            paramWriter.writeVarIntNum(labelBytes.length);
            paramWriter.write(labelBytes);
        }
        // Serialize labelQueryMode
        if (args.labelQueryMode === 'any') {
            paramWriter.writeInt8(1);
        } else if (args.labelQueryMode === 'all') {
            paramWriter.writeInt8(2);
        } else {
            paramWriter.writeInt8(-1);
        }
        // Serialize include options
        const includeOptions = [
            args.includeLabels,
            args.includeInputs,
            args.includeInputSourceLockingScripts,
            args.includeInputUnlockingScripts,
            args.includeOutputs,
            args.includeOutputLockingScripts
        ];
        for (const option of includeOptions){
            if (typeof option === 'boolean') {
                paramWriter.writeInt8(option ? 1 : 0);
            } else {
                paramWriter.writeInt8(-1);
            }
        }
        // Serialize limit and offset
        if (typeof args.limit === 'number') {
            paramWriter.writeVarIntNum(args.limit);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        if (typeof args.offset === 'number') {
            paramWriter.writeVarIntNum(args.offset);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        // Serialize seekPermission
        paramWriter.writeInt8(typeof args.seekPermission === 'boolean' ? args.seekPermission ? 1 : 0 : -1);
        // Transmit and parse response
        const result = await this.transmit('listActions', originator, paramWriter.toArray());
        const resultReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](result);
        const totalActions = resultReader.readVarIntNum();
        const actions = [];
        for(let i = 0; i < totalActions; i++){
            // Parse action fields
            const txidBytes = resultReader.read(32);
            const txid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](txidBytes);
            const satoshis = resultReader.readVarIntNum();
            const statusCode = resultReader.readInt8();
            let status;
            switch(statusCode){
                case 1:
                    status = 'completed';
                    break;
                case 2:
                    status = 'unprocessed';
                    break;
                case 3:
                    status = 'sending';
                    break;
                case 4:
                    status = 'unproven';
                    break;
                case 5:
                    status = 'unsigned';
                    break;
                case 6:
                    status = 'nosend';
                    break;
                case 7:
                    status = 'nonfinal';
                    break;
                case 8:
                    status = 'failed';
                    break;
                default:
                    throw new Error(`Unknown status code: ${statusCode}`);
            }
            const isOutgoing = resultReader.readInt8() === 1;
            const descriptionLength = resultReader.readVarIntNum();
            const descriptionBytes = resultReader.read(descriptionLength);
            const description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](descriptionBytes);
            const action = {
                txid,
                satoshis,
                status,
                isOutgoing,
                description,
                version: 0,
                lockTime: 0
            };
            // Parse labels
            const labelsLength = resultReader.readVarIntNum();
            if (labelsLength >= 0) {
                action.labels = [];
                for(let j = 0; j < labelsLength; j++){
                    const labelLength = resultReader.readVarIntNum();
                    const labelBytes = resultReader.read(labelLength);
                    action.labels.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](labelBytes));
                }
            }
            // Parse version and lockTime
            action.version = resultReader.readVarIntNum();
            action.lockTime = resultReader.readVarIntNum();
            // Parse inputs
            const inputsLength = resultReader.readVarIntNum();
            if (inputsLength >= 0) {
                action.inputs = [];
                for(let k = 0; k < inputsLength; k++){
                    const sourceOutpoint = this.readOutpoint(resultReader);
                    const sourceSatoshis = resultReader.readVarIntNum();
                    // sourceLockingScript
                    const sourceLockingScriptLength = resultReader.readVarIntNum();
                    let sourceLockingScript;
                    if (sourceLockingScriptLength >= 0) {
                        const sourceLockingScriptBytes = resultReader.read(sourceLockingScriptLength);
                        sourceLockingScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](sourceLockingScriptBytes);
                    }
                    // unlockingScript
                    const unlockingScriptLength = resultReader.readVarIntNum();
                    let unlockingScript;
                    if (unlockingScriptLength >= 0) {
                        const unlockingScriptBytes = resultReader.read(unlockingScriptLength);
                        unlockingScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](unlockingScriptBytes);
                    }
                    // inputDescription
                    const inputDescriptionLength = resultReader.readVarIntNum();
                    const inputDescriptionBytes = resultReader.read(inputDescriptionLength);
                    const inputDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](inputDescriptionBytes);
                    // sequenceNumber
                    const sequenceNumber = resultReader.readVarIntNum();
                    action.inputs.push({
                        sourceOutpoint,
                        sourceSatoshis,
                        sourceLockingScript,
                        unlockingScript,
                        inputDescription,
                        sequenceNumber
                    });
                }
            }
            // Parse outputs
            const outputsLength = resultReader.readVarIntNum();
            if (outputsLength >= 0) {
                action.outputs = [];
                for(let l = 0; l < outputsLength; l++){
                    const outputIndex = resultReader.readVarIntNum();
                    const satoshis = resultReader.readVarIntNum();
                    // lockingScript
                    const lockingScriptLength = resultReader.readVarIntNum();
                    let lockingScript;
                    if (lockingScriptLength >= 0) {
                        const lockingScriptBytes = resultReader.read(lockingScriptLength);
                        lockingScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](lockingScriptBytes);
                    }
                    const spendable = resultReader.readInt8() === 1;
                    // outputDescription
                    const outputDescriptionLength = resultReader.readVarIntNum();
                    const outputDescriptionBytes = resultReader.read(outputDescriptionLength);
                    const outputDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](outputDescriptionBytes);
                    // basket
                    const basketLength = resultReader.readVarIntNum();
                    let basket;
                    if (basketLength >= 0) {
                        const basketBytes = resultReader.read(basketLength);
                        basket = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](basketBytes);
                    }
                    // tags
                    const tagsLength = resultReader.readVarIntNum();
                    const tags = [];
                    if (tagsLength >= 0) {
                        for(let m = 0; m < tagsLength; m++){
                            const tagLength = resultReader.readVarIntNum();
                            const tagBytes = resultReader.read(tagLength);
                            tags.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](tagBytes));
                        }
                    }
                    // customInstructions
                    const customInstructionsLength = resultReader.readVarIntNum();
                    let customInstructions;
                    if (customInstructionsLength >= 0) {
                        const customInstructionsBytes = resultReader.read(customInstructionsLength);
                        customInstructions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](customInstructionsBytes);
                    }
                    action.outputs.push({
                        outputIndex,
                        satoshis,
                        lockingScript,
                        spendable,
                        outputDescription,
                        basket,
                        tags,
                        customInstructions
                    });
                }
            }
            actions.push(action);
        }
        return {
            totalActions,
            actions
        };
    }
    async internalizeAction(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.writeVarIntNum(args.tx.length);
        paramWriter.write(args.tx);
        paramWriter.writeVarIntNum(args.outputs.length);
        for (const out of args.outputs){
            paramWriter.writeVarIntNum(out.outputIndex);
            if (out.protocol === 'wallet payment') {
                if (out.paymentRemittance == null) {
                    throw new Error('Payment remittance is required for wallet payment');
                }
                paramWriter.writeUInt8(1);
                paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](out.paymentRemittance.senderIdentityKey, 'hex'));
                const derivationPrefixAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](out.paymentRemittance.derivationPrefix, 'base64');
                paramWriter.writeVarIntNum(derivationPrefixAsArray.length);
                paramWriter.write(derivationPrefixAsArray);
                const derivationSuffixAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](out.paymentRemittance.derivationSuffix, 'base64');
                paramWriter.writeVarIntNum(derivationSuffixAsArray.length);
                paramWriter.write(derivationSuffixAsArray);
            } else {
                paramWriter.writeUInt8(2);
                const basketAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](out.insertionRemittance?.basket, 'utf8');
                paramWriter.writeVarIntNum(basketAsArray.length);
                paramWriter.write(basketAsArray);
                if (typeof out.insertionRemittance?.customInstructions === 'string' && out.insertionRemittance.customInstructions !== '') {
                    const customInstructionsAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](out.insertionRemittance.customInstructions, 'utf8');
                    paramWriter.writeVarIntNum(customInstructionsAsArray.length);
                    paramWriter.write(customInstructionsAsArray);
                } else {
                    paramWriter.writeVarIntNum(-1);
                }
                if (typeof out.insertionRemittance?.tags === 'object') {
                    paramWriter.writeVarIntNum(out.insertionRemittance.tags.length);
                    for (const tag of out.insertionRemittance.tags){
                        const tagAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](tag, 'utf8');
                        paramWriter.writeVarIntNum(tagAsArray.length);
                        paramWriter.write(tagAsArray);
                    }
                } else {
                    paramWriter.writeVarIntNum(0);
                }
            }
        }
        if (typeof args.labels === 'object') {
            paramWriter.writeVarIntNum(args.labels.length);
            for (const l of args.labels){
                const labelAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](l, 'utf8');
                paramWriter.writeVarIntNum(labelAsArray.length);
                paramWriter.write(labelAsArray);
            }
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        const descriptionAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.description);
        paramWriter.writeVarIntNum(descriptionAsArray.length);
        paramWriter.write(descriptionAsArray);
        // Serialize seekPermission
        paramWriter.writeInt8(typeof args.seekPermission === 'boolean' ? args.seekPermission ? 1 : 0 : -1);
        await this.transmit('internalizeAction', originator, paramWriter.toArray());
        return {
            accepted: true
        };
    }
    async listOutputs(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        const basketAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.basket, 'utf8');
        paramWriter.writeVarIntNum(basketAsArray.length);
        paramWriter.write(basketAsArray);
        if (typeof args.tags === 'object') {
            paramWriter.writeVarIntNum(args.tags.length);
            for (const tag of args.tags){
                const tagAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](tag, 'utf8');
                paramWriter.writeVarIntNum(tagAsArray.length);
                paramWriter.write(tagAsArray);
            }
        } else {
            paramWriter.writeVarIntNum(0);
        }
        if (args.tagQueryMode === 'all') {
            paramWriter.writeInt8(1);
        } else if (args.tagQueryMode === 'any') {
            paramWriter.writeInt8(2);
        } else {
            paramWriter.writeInt8(-1);
        }
        if (args.include === 'locking scripts') {
            paramWriter.writeInt8(1);
        } else if (args.include === 'entire transactions') {
            paramWriter.writeInt8(2);
        } else {
            paramWriter.writeInt8(-1);
        }
        if (typeof args.includeCustomInstructions === 'boolean') {
            paramWriter.writeInt8(args.includeCustomInstructions ? 1 : 0);
        } else {
            paramWriter.writeInt8(-1);
        }
        if (typeof args.includeTags === 'boolean') {
            paramWriter.writeInt8(args.includeTags ? 1 : 0);
        } else {
            paramWriter.writeInt8(-1);
        }
        if (typeof args.includeLabels === 'boolean') {
            paramWriter.writeInt8(args.includeLabels ? 1 : 0);
        } else {
            paramWriter.writeInt8(-1);
        }
        if (typeof args.limit === 'number') {
            paramWriter.writeVarIntNum(args.limit);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        if (typeof args.offset === 'number') {
            paramWriter.writeVarIntNum(args.offset);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        // Serialize seekPermission
        paramWriter.writeInt8(typeof args.seekPermission === 'boolean' ? args.seekPermission ? 1 : 0 : -1);
        const result = await this.transmit('listOutputs', originator, paramWriter.toArray());
        const resultReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](result);
        const totalOutputs = resultReader.readVarIntNum();
        const beefLength = resultReader.readVarIntNum();
        let BEEF;
        if (beefLength >= 0) {
            BEEF = resultReader.read(beefLength);
        }
        const outputs = [];
        for(let i = 0; i < totalOutputs; i++){
            const outpoint = this.readOutpoint(resultReader);
            const satoshis = resultReader.readVarIntNum();
            const output = {
                spendable: true,
                outpoint,
                satoshis
            };
            const scriptLength = resultReader.readVarIntNum();
            if (scriptLength >= 0) {
                output.lockingScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](resultReader.read(scriptLength));
            }
            const customInstructionsLength = resultReader.readVarIntNum();
            if (customInstructionsLength >= 0) {
                output.customInstructions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(customInstructionsLength));
            }
            const tagsLength = resultReader.readVarIntNum();
            if (tagsLength !== -1) {
                const tags = [];
                for(let i = 0; i < tagsLength; i++){
                    const tagLength = resultReader.readVarIntNum();
                    tags.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(tagLength)));
                }
                output.tags = tags;
            }
            const labelsLength = resultReader.readVarIntNum();
            if (labelsLength !== -1) {
                const labels = [];
                for(let i = 0; i < labelsLength; i++){
                    const labelLength = resultReader.readVarIntNum();
                    labels.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(labelLength)));
                }
                output.labels = labels;
            }
            outputs.push(output);
        }
        return {
            totalOutputs,
            BEEF,
            outputs
        };
    }
    async relinquishOutput(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        const basketAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.basket, 'utf8');
        paramWriter.writeVarIntNum(basketAsArray.length);
        paramWriter.write(basketAsArray);
        paramWriter.write(this.encodeOutpoint(args.output));
        await this.transmit('relinquishOutput', originator, paramWriter.toArray());
        return {
            relinquished: true
        };
    }
    encodeOutpoint(outpoint) {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        const [txid, index] = outpoint.split('.');
        writer.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](txid, 'hex'));
        writer.writeVarIntNum(Number(index));
        return writer.toArray();
    }
    readOutpoint(reader) {
        const txid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](reader.read(32));
        const index = reader.readVarIntNum();
        return `${txid}.${index}`;
    }
    async getPublicKey(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.writeUInt8(args.identityKey ? 1 : 0);
        if (!args.identityKey) {
            paramWriter.write(this.encodeKeyRelatedParams(args.protocolID ??= [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$Wallet$2e$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SecurityLevels"].Silent,
                'default'
            ], args.keyID ??= '', args.counterparty, args.privileged, args.privilegedReason));
            if (typeof args.forSelf === 'boolean') {
                paramWriter.writeInt8(args.forSelf ? 1 : 0);
            } else {
                paramWriter.writeInt8(-1);
            }
        } else {
            paramWriter.write(this.encodePrivilegedParams(args.privileged, args.privilegedReason));
        }
        // Serialize seekPermission
        paramWriter.writeInt8(typeof args.seekPermission === 'boolean' ? args.seekPermission ? 1 : 0 : -1);
        const result = await this.transmit('getPublicKey', originator, paramWriter.toArray());
        return {
            publicKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](result)
        };
    }
    async revealCounterpartyKeyLinkage(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.write(this.encodePrivilegedParams(args.privileged, args.privilegedReason));
        paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.counterparty, 'hex'));
        paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.verifier, 'hex'));
        const result = await this.transmit('revealCounterpartyKeyLinkage', originator, paramWriter.toArray());
        const resultReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](result);
        const prover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](resultReader.read(33));
        const verifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](resultReader.read(33));
        const counterparty = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](resultReader.read(33));
        const revelationTimeLength = resultReader.readVarIntNum();
        const revelationTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(revelationTimeLength));
        const encryptedLinkageLength = resultReader.readVarIntNum();
        const encryptedLinkage = resultReader.read(encryptedLinkageLength);
        const encryptedLinkageProofLength = resultReader.readVarIntNum();
        const encryptedLinkageProof = resultReader.read(encryptedLinkageProofLength);
        return {
            prover,
            verifier,
            counterparty,
            revelationTime,
            encryptedLinkage,
            encryptedLinkageProof
        };
    }
    async revealSpecificKeyLinkage(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.write(this.encodeKeyRelatedParams(args.protocolID, args.keyID, args.counterparty, args.privileged, args.privilegedReason));
        paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.verifier, 'hex'));
        const result = await this.transmit('revealSpecificKeyLinkage', originator, paramWriter.toArray());
        const resultReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](result);
        const prover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](resultReader.read(33));
        const verifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](resultReader.read(33));
        const counterparty = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](resultReader.read(33));
        const securityLevel = resultReader.readUInt8();
        const protocolLength = resultReader.readVarIntNum();
        const protocol = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(protocolLength));
        const keyIDLength = resultReader.readVarIntNum();
        const keyID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(keyIDLength));
        const encryptedLinkageLength = resultReader.readVarIntNum();
        const encryptedLinkage = resultReader.read(encryptedLinkageLength);
        const encryptedLinkageProofLength = resultReader.readVarIntNum();
        const encryptedLinkageProof = resultReader.read(encryptedLinkageProofLength);
        const proofType = resultReader.readUInt8();
        return {
            prover,
            verifier,
            counterparty,
            protocolID: [
                securityLevel,
                protocol
            ],
            keyID,
            encryptedLinkage,
            encryptedLinkageProof,
            proofType
        };
    }
    async encrypt(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.write(this.encodeKeyRelatedParams(args.protocolID, args.keyID, args.counterparty, args.privileged, args.privilegedReason));
        paramWriter.writeVarIntNum(args.plaintext.length);
        paramWriter.write(args.plaintext);
        // Serialize seekPermission
        paramWriter.writeInt8(typeof args.seekPermission === 'boolean' ? args.seekPermission ? 1 : 0 : -1);
        return {
            ciphertext: await this.transmit('encrypt', originator, paramWriter.toArray())
        };
    }
    async decrypt(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.write(this.encodeKeyRelatedParams(args.protocolID, args.keyID, args.counterparty, args.privileged, args.privilegedReason));
        paramWriter.writeVarIntNum(args.ciphertext.length);
        paramWriter.write(args.ciphertext);
        // Serialize seekPermission
        paramWriter.writeInt8(typeof args.seekPermission === 'boolean' ? args.seekPermission ? 1 : 0 : -1);
        return {
            plaintext: await this.transmit('decrypt', originator, paramWriter.toArray())
        };
    }
    async createHmac(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.write(this.encodeKeyRelatedParams(args.protocolID, args.keyID, args.counterparty, args.privileged, args.privilegedReason));
        paramWriter.writeVarIntNum(args.data.length);
        paramWriter.write(args.data);
        // Serialize seekPermission
        paramWriter.writeInt8(typeof args.seekPermission === 'boolean' ? args.seekPermission ? 1 : 0 : -1);
        return {
            hmac: await this.transmit('createHmac', originator, paramWriter.toArray())
        };
    }
    async verifyHmac(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.write(this.encodeKeyRelatedParams(args.protocolID, args.keyID, args.counterparty, args.privileged, args.privilegedReason));
        paramWriter.write(args.hmac);
        paramWriter.writeVarIntNum(args.data.length);
        paramWriter.write(args.data);
        // Serialize seekPermission
        paramWriter.writeInt8(typeof args.seekPermission === 'boolean' ? args.seekPermission ? 1 : 0 : -1);
        await this.transmit('verifyHmac', originator, paramWriter.toArray());
        return {
            valid: true
        };
    }
    async createSignature(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.write(this.encodeKeyRelatedParams(args.protocolID, args.keyID, args.counterparty, args.privileged, args.privilegedReason));
        if (typeof args.data === 'object') {
            paramWriter.writeUInt8(1);
            paramWriter.writeVarIntNum(args.data.length);
            paramWriter.write(args.data);
        } else {
            paramWriter.writeUInt8(2);
            paramWriter.write(args.hashToDirectlySign ??= []);
        }
        // Serialize seekPermission
        paramWriter.writeInt8(typeof args.seekPermission === 'boolean' ? args.seekPermission ? 1 : 0 : -1);
        return {
            signature: await this.transmit('createSignature', originator, paramWriter.toArray())
        };
    }
    async verifySignature(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.write(this.encodeKeyRelatedParams(args.protocolID, args.keyID, args.counterparty, args.privileged, args.privilegedReason));
        if (typeof args.forSelf === 'boolean') {
            paramWriter.writeInt8(args.forSelf ? 1 : 0);
        } else {
            paramWriter.writeInt8(-1);
        }
        paramWriter.writeVarIntNum(args.signature.length);
        paramWriter.write(args.signature);
        if (typeof args.data === 'object') {
            paramWriter.writeUInt8(1);
            paramWriter.writeVarIntNum(args.data.length);
            paramWriter.write(args.data);
        } else {
            paramWriter.writeUInt8(2);
            paramWriter.write(args.hashToDirectlyVerify ?? []);
        }
        // Serialize seekPermission
        paramWriter.writeInt8(typeof args.seekPermission === 'boolean' ? args.seekPermission ? 1 : 0 : -1);
        await this.transmit('verifySignature', originator, paramWriter.toArray());
        return {
            valid: true
        };
    }
    encodeKeyRelatedParams(protocolID, keyID, counterparty, privileged, privilegedReason) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.writeUInt8(protocolID[0]);
        const protocolAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](protocolID[1], 'utf8');
        paramWriter.writeVarIntNum(protocolAsArray.length);
        paramWriter.write(protocolAsArray);
        const keyIDAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](keyID, 'utf8');
        paramWriter.writeVarIntNum(keyIDAsArray.length);
        paramWriter.write(keyIDAsArray);
        if (typeof counterparty !== 'string') {
            paramWriter.writeUInt8(0);
        } else if (counterparty === 'self') {
            paramWriter.writeUInt8(11);
        } else if (counterparty === 'anyone') {
            paramWriter.writeUInt8(12);
        } else {
            paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](counterparty, 'hex'));
        }
        paramWriter.write(this.encodePrivilegedParams(privileged, privilegedReason));
        return paramWriter.toArray();
    }
    async acquireCertificate(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.type, 'base64'));
        paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.certifier, 'hex'));
        const fieldEntries = Object.entries(args.fields);
        paramWriter.writeVarIntNum(fieldEntries.length);
        for (const [key, value] of fieldEntries){
            const keyAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](key, 'utf8');
            const valueAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](value, 'utf8');
            paramWriter.writeVarIntNum(keyAsArray.length);
            paramWriter.write(keyAsArray);
            paramWriter.writeVarIntNum(valueAsArray.length);
            paramWriter.write(valueAsArray);
        }
        paramWriter.write(this.encodePrivilegedParams(args.privileged, args.privilegedReason));
        paramWriter.writeUInt8(args.acquisitionProtocol === 'direct' ? 1 : 2);
        if (args.acquisitionProtocol === 'direct') {
            paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.serialNumber, 'base64'));
            paramWriter.write(this.encodeOutpoint(args.revocationOutpoint ?? ''));
            const signatureAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.signature, 'hex');
            paramWriter.writeVarIntNum(signatureAsArray.length);
            paramWriter.write(signatureAsArray);
            const keyringRevealerAsArray = args.keyringRevealer !== 'certifier' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.keyringRevealer, 'hex') : [
                11
            ];
            paramWriter.write(keyringRevealerAsArray);
            const keyringKeys = Object.keys(args.keyringForSubject ?? {});
            paramWriter.writeVarIntNum(keyringKeys.length);
            for(let i = 0; i < keyringKeys.length; i++){
                const keyringKeysAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](keyringKeys[i], 'utf8');
                paramWriter.writeVarIntNum(keyringKeysAsArray.length);
                paramWriter.write(keyringKeysAsArray);
                const keyringForSubjectAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.keyringForSubject?.[keyringKeys[i]], 'base64');
                paramWriter.writeVarIntNum(keyringForSubjectAsArray.length);
                paramWriter.write(keyringForSubjectAsArray);
            }
        } else {
            const certifierUrlAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.certifierUrl, 'utf8');
            paramWriter.writeVarIntNum(certifierUrlAsArray.length);
            paramWriter.write(certifierUrlAsArray);
        }
        const result = await this.transmit('acquireCertificate', originator, paramWriter.toArray());
        const cert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromBinary(result);
        return {
            ...cert,
            signature: cert.signature
        };
    }
    encodePrivilegedParams(privileged, privilegedReason) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        if (typeof privileged === 'boolean') {
            paramWriter.writeInt8(privileged ? 1 : 0);
        } else {
            paramWriter.writeInt8(-1);
        }
        if (typeof privilegedReason === 'string') {
            const privilegedReasonAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](privilegedReason, 'utf8');
            paramWriter.writeInt8(privilegedReasonAsArray.length);
            paramWriter.write(privilegedReasonAsArray);
        } else {
            paramWriter.writeInt8(-1);
        }
        return paramWriter.toArray();
    }
    async listCertificates(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.writeVarIntNum(args.certifiers.length);
        for(let i = 0; i < args.certifiers.length; i++){
            paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.certifiers[i], 'hex'));
        }
        paramWriter.writeVarIntNum(args.types.length);
        for(let i = 0; i < args.types.length; i++){
            paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.types[i], 'base64'));
        }
        if (typeof args.limit === 'number') {
            paramWriter.writeVarIntNum(args.limit);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        if (typeof args.offset === 'number') {
            paramWriter.writeVarIntNum(args.offset);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        paramWriter.write(this.encodePrivilegedParams(args.privileged, args.privilegedReason));
        const result = await this.transmit('listCertificates', originator, paramWriter.toArray());
        const resultReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](result);
        const totalCertificates = resultReader.readVarIntNum();
        const certificates = [];
        for(let i = 0; i < totalCertificates; i++){
            const certificateLength = resultReader.readVarIntNum();
            const certificateBin = resultReader.read(certificateLength);
            const cert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromBinary(certificateBin);
            const keyringForVerifier = {};
            if (resultReader.readInt8() === 1) {
                const numFields = resultReader.readVarIntNum();
                for(let i = 0; i < numFields; i++){
                    const fieldKeyLength = resultReader.readVarIntNum();
                    const fieldKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(fieldKeyLength));
                    const fieldValueLength = resultReader.readVarIntNum();
                    keyringForVerifier[fieldKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](resultReader.read(fieldValueLength));
                }
            }
            const verifierLength = resultReader.readVarIntNum();
            let verifier = undefined;
            if (verifierLength > 0) {
                verifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(verifierLength));
            }
            certificates.push({
                ...cert,
                signature: cert.signature,
                keyring: keyringForVerifier,
                verifier
            });
        }
        return {
            totalCertificates,
            certificates
        };
    }
    async proveCertificate(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        const typeAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.certificate.type, 'base64');
        paramWriter.write(typeAsArray);
        const subjectAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.certificate.subject, 'hex');
        paramWriter.write(subjectAsArray);
        const serialNumberAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.certificate.serialNumber, 'base64');
        paramWriter.write(serialNumberAsArray);
        const certifierAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.certificate.certifier, 'hex');
        paramWriter.write(certifierAsArray);
        const revocationOutpointAsArray = this.encodeOutpoint(args.certificate.revocationOutpoint ?? '');
        paramWriter.write(revocationOutpointAsArray);
        const signatureAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.certificate.signature, 'hex');
        paramWriter.writeVarIntNum(signatureAsArray.length);
        paramWriter.write(signatureAsArray);
        const fieldEntries = Object.entries(args.certificate.fields ?? {});
        paramWriter.writeVarIntNum(fieldEntries.length);
        for (const [key, value] of fieldEntries){
            const keyAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](key, 'utf8');
            const valueAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](value, 'utf8');
            paramWriter.writeVarIntNum(keyAsArray.length);
            paramWriter.write(keyAsArray);
            paramWriter.writeVarIntNum(valueAsArray.length);
            paramWriter.write(valueAsArray);
        }
        paramWriter.writeVarIntNum(args.fieldsToReveal.length);
        for (const field of args.fieldsToReveal){
            const fieldAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](field, 'utf8');
            paramWriter.writeVarIntNum(fieldAsArray.length);
            paramWriter.write(fieldAsArray);
        }
        paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.verifier, 'hex'));
        paramWriter.write(this.encodePrivilegedParams(args.privileged, args.privilegedReason));
        const result = await this.transmit('proveCertificate', originator, paramWriter.toArray());
        const resultReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](result);
        const numFields = resultReader.readVarIntNum();
        const keyringForVerifier = {};
        for(let i = 0; i < numFields; i++){
            const fieldKeyLength = resultReader.readVarIntNum();
            const fieldKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(fieldKeyLength));
            const fieldValueLength = resultReader.readVarIntNum();
            keyringForVerifier[fieldKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](resultReader.read(fieldValueLength));
        }
        return {
            keyringForVerifier
        };
    }
    async relinquishCertificate(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        const typeAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.type, 'base64');
        paramWriter.write(typeAsArray);
        const serialNumberAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.serialNumber, 'base64');
        paramWriter.write(serialNumberAsArray);
        const certifierAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.certifier, 'hex');
        paramWriter.write(certifierAsArray);
        await this.transmit('relinquishCertificate', originator, paramWriter.toArray());
        return {
            relinquished: true
        };
    }
    parseDiscoveryResult(result) {
        const resultReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](result);
        const totalCertificates = resultReader.readVarIntNum();
        const certificates = [];
        for(let i = 0; i < totalCertificates; i++){
            const certBinLen = resultReader.readVarIntNum();
            const certBin = resultReader.read(certBinLen);
            const cert = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromBinary(certBin);
            const nameLength = resultReader.readVarIntNum();
            const name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(nameLength));
            const iconUrlLength = resultReader.readVarIntNum();
            const iconUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(iconUrlLength));
            const descriptionLength = resultReader.readVarIntNum();
            const description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(descriptionLength));
            const trust = resultReader.readUInt8();
            const publiclyRevealedKeyring = {};
            const numPublicKeyringEntries = resultReader.readVarIntNum();
            for(let j = 0; j < numPublicKeyringEntries; j++){
                const fieldKeyLen = resultReader.readVarIntNum();
                const fieldKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(fieldKeyLen));
                const fieldValueLen = resultReader.readVarIntNum();
                publiclyRevealedKeyring[fieldKey] = resultReader.read(fieldValueLen);
            }
            const decryptedFields = {};
            const numDecryptedFields = resultReader.readVarIntNum();
            for(let k = 0; k < numDecryptedFields; k++){
                const fieldKeyLen = resultReader.readVarIntNum();
                const fieldKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(fieldKeyLen));
                const fieldValueLen = resultReader.readVarIntNum();
                decryptedFields[fieldKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](resultReader.read(fieldValueLen));
            }
            certificates.push({
                ...cert,
                signature: cert.signature,
                certifierInfo: {
                    iconUrl,
                    name,
                    description,
                    trust
                },
                publiclyRevealedKeyring,
                decryptedFields
            });
        }
        return {
            totalCertificates,
            certificates
        };
    }
    async discoverByIdentityKey(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.identityKey, 'hex'));
        if (typeof args.limit === 'number') {
            paramWriter.writeVarIntNum(args.limit);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        if (typeof args.offset === 'number') {
            paramWriter.writeVarIntNum(args.offset);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        // Serialize seekPermission
        paramWriter.writeInt8(typeof args.seekPermission === 'boolean' ? args.seekPermission ? 1 : 0 : -1);
        const result = await this.transmit('discoverByIdentityKey', originator, paramWriter.toArray());
        return this.parseDiscoveryResult(result);
    }
    async discoverByAttributes(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        const attributeKeys = Object.keys(args.attributes);
        paramWriter.writeVarIntNum(attributeKeys.length);
        for(let i = 0; i < attributeKeys.length; i++){
            paramWriter.writeVarIntNum(attributeKeys[i].length);
            paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](attributeKeys[i], 'utf8'));
            paramWriter.writeVarIntNum(args.attributes[attributeKeys[i]].length);
            paramWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](args.attributes[attributeKeys[i]], 'utf8'));
        }
        if (typeof args.limit === 'number') {
            paramWriter.writeVarIntNum(args.limit);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        if (typeof args.offset === 'number') {
            paramWriter.writeVarIntNum(args.offset);
        } else {
            paramWriter.writeVarIntNum(-1);
        }
        // Serialize seekPermission
        paramWriter.writeInt8(typeof args.seekPermission === 'boolean' ? args.seekPermission ? 1 : 0 : -1);
        const result = await this.transmit('discoverByAttributes', originator, paramWriter.toArray());
        return this.parseDiscoveryResult(result);
    }
    async isAuthenticated(args, originator) {
        const result = await this.transmit('isAuthenticated', originator);
        // @ts-expect-error
        return {
            authenticated: result[0] === 1
        };
    }
    async waitForAuthentication(args, originator) {
        await this.transmit('waitForAuthentication', originator);
        return {
            authenticated: true
        };
    }
    async getHeight(args, originator) {
        const result = await this.transmit('getHeight', originator);
        const resultReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](result);
        return {
            height: resultReader.readVarIntNum()
        };
    }
    async getHeaderForHeight(args, originator) {
        const paramWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        paramWriter.writeVarIntNum(args.height);
        const header = await this.transmit('getHeaderForHeight', originator, paramWriter.toArray());
        return {
            header: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](header)
        };
    }
    async getNetwork(args, originator) {
        const net = await this.transmit('getNetwork', originator);
        return {
            network: net[0] === 0 ? 'mainnet' : 'testnet'
        };
    }
    async getVersion(args, originator) {
        const version = await this.transmit('getVersion', originator);
        return {
            version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](version)
        };
    }
} //# sourceMappingURL=WalletWireTransceiver.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/HTTPWalletWire.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HTTPWalletWire
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWireCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/WalletWireCalls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
;
;
class HTTPWalletWire {
    baseUrl;
    httpClient;
    originator;
    constructor(originator, baseUrl = 'http://localhost:3301', httpClient = fetch){
        this.baseUrl = baseUrl;
        this.httpClient = httpClient;
        this.originator = originator;
    }
    async transmitToWallet(message) {
        const messageReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](message);
        // Read call code
        const callCode = messageReader.readUInt8();
        // Map call code to call name
        const callName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWireCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][callCode]; // calls is enum
        if (callName === undefined || callName === '') {
            // Invalid call code
            throw new Error(`Invalid call code: ${callCode}`);
        }
        // Read originator length
        const originatorLength = messageReader.readUInt8();
        let originator;
        if (originatorLength > 0) {
            const originatorBytes = messageReader.read(originatorLength);
            originator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](originatorBytes);
        }
        const payload = messageReader.read();
        const response = await fetch(`${this.baseUrl}/${callName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                Origin: originator ?? '' // ✅ Explicitly handle null/undefined cases
            },
            body: new Uint8Array(payload)
        });
        const responseBuffer = await response.arrayBuffer();
        return Array.from(new Uint8Array(responseBuffer));
    }
} //# sourceMappingURL=HTTPWalletWire.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WERR_REVIEW_ACTIONS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * When a `createAction` or `signAction` is completed in undelayed mode (`acceptDelayedBroadcast`: false),
 * any unsucccessful result will return the results by way of this exception to ensure attention is
 * paid to processing errors.
 */ __turbopack_context__.s([
    "WERR_REVIEW_ACTIONS",
    ()=>WERR_REVIEW_ACTIONS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
class WERR_REVIEW_ACTIONS extends Error {
    reviewActionResults;
    sendWithResults;
    txid;
    tx;
    noSendChange;
    code;
    isError = true;
    /**
     * All parameters correspond to their comparable `createAction` or `signSction` results
     * with the exception of `reviewActionResults`;
     * which contains more details, particularly for double spend results.
     */ constructor(reviewActionResults, sendWithResults, txid, tx, noSendChange){
        super('Undelayed createAction or signAction results require review.');
        this.reviewActionResults = reviewActionResults;
        this.sendWithResults = sendWithResults;
        this.txid = txid;
        this.tx = tx;
        this.noSendChange = noSendChange;
        this.code = 5;
        this.name = this.constructor.name;
    }
}
const __TURBOPACK__default__export__ = WERR_REVIEW_ACTIONS;
 //# sourceMappingURL=WERR_REVIEW_ACTIONS.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WERR_INVALID_PARAMETER.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The ${parameter} parameter is invalid.
 *
 * This is an example of an error object with a custom property `parameter` and templated `message`.
 */ __turbopack_context__.s([
    "WERR_INVALID_PARAMETER",
    ()=>WERR_INVALID_PARAMETER,
    "default",
    ()=>__TURBOPACK__default__export__
]);
class WERR_INVALID_PARAMETER extends Error {
    parameter;
    code;
    isError = true;
    constructor(parameter, mustBe){
        super(`The ${parameter} parameter must be ${mustBe ?? 'valid.'}`);
        this.parameter = parameter;
        this.code = 6;
        this.name = this.constructor.name;
    }
}
const __TURBOPACK__default__export__ = WERR_INVALID_PARAMETER;
 //# sourceMappingURL=WERR_INVALID_PARAMETER.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/utils/toOriginHeader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toOriginHeader",
    ()=>toOriginHeader
]);
function toOriginHeader(originator, fallbackScheme = 'http') {
    // If the caller already gave us a scheme, assume it’s fine
    if (/^[a-z][a-z0-9+.-]*:\/\//i.test(originator)) {
        try {
            return new URL(originator).origin; // trims any path/query
        } catch  {}
    }
    // Otherwise, prepend the fallback scheme and validate
    try {
        return new URL(`${fallbackScheme}://${originator}`).origin;
    } catch  {
        throw new Error(`Invalid originator value: ${originator}`);
    }
} //# sourceMappingURL=toOriginHeader.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WERR_INSUFFICIENT_FUNDS.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Insufficient funds in the available inputs to cover the cost of the required outputs
 * and the transaction fee (${moreSatoshisNeeded} more satoshis are needed,
 * for a total of ${totalSatoshisNeeded}), plus whatever would be required in order
 * to pay the fee to unlock and spend the outputs used to provide the additional satoshis.
 */ __turbopack_context__.s([
    "WERR_INSUFFICIENT_FUNDS",
    ()=>WERR_INSUFFICIENT_FUNDS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
class WERR_INSUFFICIENT_FUNDS extends Error {
    totalSatoshisNeeded;
    moreSatoshisNeeded;
    code;
    isError = true;
    /**
     * @param totalSatoshisNeeded Total satoshis required to fund transactions after net of required inputs and outputs.
     * @param moreSatoshisNeeded Shortfall on total satoshis required to fund transactions after net of required inputs and outputs.
     */ constructor(totalSatoshisNeeded, moreSatoshisNeeded){
        super(`Insufficient funds in the available inputs to cover the cost of the required outputs and the transaction fee (${moreSatoshisNeeded} more satoshis are needed, for a total of ${totalSatoshisNeeded}), plus whatever would be required in order to pay the fee to unlock and spend the outputs used to provide the additional satoshis.`);
        this.totalSatoshisNeeded = totalSatoshisNeeded;
        this.moreSatoshisNeeded = moreSatoshisNeeded;
        this.code = 7;
        this.name = this.constructor.name;
    }
}
const __TURBOPACK__default__export__ = WERR_INSUFFICIENT_FUNDS;
 //# sourceMappingURL=WERR_INSUFFICIENT_FUNDS.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/HTTPWalletJSON.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HTTPWalletJSON
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_REVIEW_ACTIONS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WERR_REVIEW_ACTIONS.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WERR_INVALID_PARAMETER.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$utils$2f$toOriginHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/utils/toOriginHeader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INSUFFICIENT_FUNDS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WERR_INSUFFICIENT_FUNDS.js [app-ssr] (ecmascript)");
;
;
;
;
class HTTPWalletJSON {
    baseUrl;
    httpClient;
    originator;
    api;
    constructor(originator, baseUrl = 'http://localhost:3321', httpClient = fetch){
        this.baseUrl = baseUrl;
        this.originator = originator;
        this.httpClient = httpClient;
        // Detect if we're in a browser environment
        const isBrowser = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && typeof document !== 'undefined' && window?.origin !== 'file://';
        this.api = async (call, args)=>{
            // In browser environments, let the browser handle Origin header automatically
            // In Node.js environments, we need to set it manually if originator is provided
            const origin = !isBrowser && this.originator ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$utils$2f$toOriginHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toOriginHeader"])(this.originator, 'http') : undefined;
            if (!isBrowser && origin === undefined) {
                console.error('Originator is required in Node.js environments');
            }
            const res = await await httpClient(`${this.baseUrl}/${call}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    ...origin ? {
                        Origin: origin
                    } : {},
                    ...origin ? {
                        Originator: origin
                    } : {}
                },
                body: JSON.stringify(args)
            });
            const data = await res.json();
            // Check the HTTP status on the original response
            if (!res.ok) {
                if (res.status === 400 && data.isError) {
                    let err;
                    switch(data.code){
                        case 5:
                            err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_REVIEW_ACTIONS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WERR_REVIEW_ACTIONS"](data.reviewActionResults, data.sendWithResults, data.txid, data.tx, data.noSendChange);
                            break;
                        case 6:
                            err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WERR_INVALID_PARAMETER"](data.parameter);
                            err.message = data.message;
                            break;
                        case 7:
                            err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INSUFFICIENT_FUNDS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](data.totalSatoshisNeeded, data.moreSatoshisNeeded);
                            break;
                        default:
                            break;
                    }
                    if (err) throw err;
                }
                const err = {
                    call,
                    args,
                    message: data.message ?? `HTTP Client error ${res.status}`
                };
                throw new Error(JSON.stringify(err));
            }
            return data;
        };
    }
    async createAction(args) {
        return await this.api('createAction', args);
    }
    async signAction(args) {
        return await this.api('signAction', args);
    }
    async abortAction(args) {
        return await this.api('abortAction', args);
    }
    async listActions(args) {
        return await this.api('listActions', args);
    }
    async internalizeAction(args) {
        return await this.api('internalizeAction', args);
    }
    async listOutputs(args) {
        return await this.api('listOutputs', args);
    }
    async relinquishOutput(args) {
        return await this.api('relinquishOutput', args);
    }
    async getPublicKey(args) {
        return await this.api('getPublicKey', args);
    }
    async revealCounterpartyKeyLinkage(args) {
        return await this.api('revealCounterpartyKeyLinkage', args);
    }
    async revealSpecificKeyLinkage(args) {
        return await this.api('revealSpecificKeyLinkage', args);
    }
    async encrypt(args) {
        return await this.api('encrypt', args);
    }
    async decrypt(args) {
        return await this.api('decrypt', args);
    }
    async createHmac(args) {
        return await this.api('createHmac', args);
    }
    async verifyHmac(args) {
        return await this.api('verifyHmac', args);
    }
    async createSignature(args) {
        return await this.api('createSignature', args);
    }
    async verifySignature(args) {
        return await this.api('verifySignature', args);
    }
    async acquireCertificate(args) {
        return await this.api('acquireCertificate', args);
    }
    async listCertificates(args) {
        return await this.api('listCertificates', args);
    }
    async proveCertificate(args) {
        return await this.api('proveCertificate', args);
    }
    async relinquishCertificate(args) {
        return await this.api('relinquishCertificate', args);
    }
    async discoverByIdentityKey(args) {
        return await this.api('discoverByIdentityKey', args);
    }
    async discoverByAttributes(args) {
        return await this.api('discoverByAttributes', args);
    }
    async isAuthenticated(args) {
        return await this.api('isAuthenticated', args);
    }
    async waitForAuthentication(args) {
        return await this.api('waitForAuthentication', args);
    }
    async getHeight(args) {
        return await this.api('getHeight', args);
    }
    async getHeaderForHeight(args) {
        return await this.api('getHeaderForHeight', args);
    }
    async getNetwork(args) {
        return await this.api('getNetwork', args);
    }
    async getVersion(args) {
        return await this.api('getVersion', args);
    }
} //# sourceMappingURL=HTTPWalletJSON.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/ReactNativeWebView.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReactNativeWebView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletError.js [app-ssr] (ecmascript)");
;
;
;
class ReactNativeWebView {
    domain;
    constructor(domain = '*'){
        if ("TURBOPACK compile-time truthy", 1) {
            throw new Error('The XDM substrate requires a global window object.');
        }
        if (!window.hasOwnProperty("ReactNativeWebView")) {
            throw new Error('The window object does not have a ReactNativeWebView property.');
        }
        if (typeof window.ReactNativeWebView.postMessage !== 'function') {
            throw new Error('The window.ReactNativeWebView property does not seem to support postMessage calls.');
        }
        this.domain = domain;
    }
    async invoke(call, args) {
        return await new Promise((resolve, reject)=>{
            const id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(12));
            const listener = (e)=>{
                const data = JSON.parse(e.data);
                if (data.type !== 'CWI' || data.id !== id || data.isInvocation === true) {
                    return;
                }
                if (typeof window.removeEventListener === 'function') {
                    window.removeEventListener('message', listener);
                }
                if (data.status === 'error') {
                    const err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletError"](data.description, data.code);
                    reject(err);
                } else {
                    resolve(data.result);
                }
            };
            window.addEventListener('message', listener);
            window.ReactNativeWebView.postMessage(JSON.stringify({
                type: 'CWI',
                isInvocation: true,
                id,
                call,
                args
            }));
        });
    }
    async createAction(args) {
        return await this.invoke('createAction', args);
    }
    async signAction(args) {
        return await this.invoke('signAction', args);
    }
    async abortAction(args) {
        return await this.invoke('abortAction', args);
    }
    async listActions(args) {
        return await this.invoke('listActions', args);
    }
    async internalizeAction(args) {
        return await this.invoke('internalizeAction', args);
    }
    async listOutputs(args) {
        return await this.invoke('listOutputs', args);
    }
    async relinquishOutput(args) {
        return await this.invoke('relinquishOutput', args);
    }
    async getPublicKey(args) {
        return await this.invoke('getPublicKey', args);
    }
    async revealCounterpartyKeyLinkage(args) {
        return await this.invoke('revealCounterpartyKeyLinkage', args);
    }
    async revealSpecificKeyLinkage(args) {
        return await this.invoke('revealSpecificKeyLinkage', args);
    }
    async encrypt(args) {
        return await this.invoke('encrypt', args);
    }
    async decrypt(args) {
        return await this.invoke('decrypt', args);
    }
    async createHmac(args) {
        return await this.invoke('createHmac', args);
    }
    async verifyHmac(args) {
        return await this.invoke('verifyHmac', args);
    }
    async createSignature(args) {
        return await this.invoke('createSignature', args);
    }
    async verifySignature(args) {
        return await this.invoke('verifySignature', args);
    }
    async acquireCertificate(args) {
        return await this.invoke('acquireCertificate', args);
    }
    async listCertificates(args) {
        return await this.invoke('listCertificates', args);
    }
    async proveCertificate(args) {
        return await this.invoke('proveCertificate', args);
    }
    async relinquishCertificate(args) {
        return await this.invoke('relinquishCertificate', args);
    }
    async discoverByIdentityKey(args) {
        return await this.invoke('discoverByIdentityKey', args);
    }
    async discoverByAttributes(args) {
        return await this.invoke('discoverByAttributes', args);
    }
    async isAuthenticated(args) {
        return await this.invoke('isAuthenticated', args);
    }
    async waitForAuthentication(args) {
        return await this.invoke('waitForAuthentication', args);
    }
    async getHeight(args) {
        return await this.invoke('getHeight', args);
    }
    async getHeaderForHeight(args) {
        return await this.invoke('getHeaderForHeight', args);
    }
    async getNetwork(args) {
        return await this.invoke('getNetwork', args);
    }
    async getVersion(args) {
        return await this.invoke('getVersion', args);
    }
} //# sourceMappingURL=ReactNativeWebView.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/validationHelpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHexString",
    ()=>isHexString,
    "parseWalletOutpoint",
    ()=>parseWalletOutpoint,
    "specOpThrowReviewActions",
    ()=>specOpThrowReviewActions,
    "validateAbortActionArgs",
    ()=>validateAbortActionArgs,
    "validateAcquireDirectCertificateArgs",
    ()=>validateAcquireDirectCertificateArgs,
    "validateAcquireIssuanceCertificateArgs",
    ()=>validateAcquireIssuanceCertificateArgs,
    "validateBase64String",
    ()=>validateBase64String,
    "validateBasketInsertion",
    ()=>validateBasketInsertion,
    "validateCreateActionArgs",
    ()=>validateCreateActionArgs,
    "validateCreateActionInput",
    ()=>validateCreateActionInput,
    "validateCreateActionOptions",
    ()=>validateCreateActionOptions,
    "validateCreateActionOutput",
    ()=>validateCreateActionOutput,
    "validateDiscoverByAttributesArgs",
    ()=>validateDiscoverByAttributesArgs,
    "validateDiscoverByIdentityKeyArgs",
    ()=>validateDiscoverByIdentityKeyArgs,
    "validateInteger",
    ()=>validateInteger,
    "validateInternalizeActionArgs",
    ()=>validateInternalizeActionArgs,
    "validateInternalizeOutput",
    ()=>validateInternalizeOutput,
    "validateListActionsArgs",
    ()=>validateListActionsArgs,
    "validateListCertificatesArgs",
    ()=>validateListCertificatesArgs,
    "validateListOutputsArgs",
    ()=>validateListOutputsArgs,
    "validateOptionalInteger",
    ()=>validateOptionalInteger,
    "validateOptionalOutpointString",
    ()=>validateOptionalOutpointString,
    "validateOriginator",
    ()=>validateOriginator,
    "validateOutpointString",
    ()=>validateOutpointString,
    "validatePositiveIntegerOrZero",
    ()=>validatePositiveIntegerOrZero,
    "validateProveCertificateArgs",
    ()=>validateProveCertificateArgs,
    "validateRelinquishCertificateArgs",
    ()=>validateRelinquishCertificateArgs,
    "validateRelinquishOutputArgs",
    ()=>validateRelinquishOutputArgs,
    "validateSatoshis",
    ()=>validateSatoshis,
    "validateSignActionArgs",
    ()=>validateSignActionArgs,
    "validateSignActionOptions",
    ()=>validateSignActionOptions,
    "validateStringLength",
    ()=>validateStringLength,
    "validateWalletPayment",
    ()=>validateWalletPayment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WERR_INVALID_PARAMETER.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Beef.js [app-ssr] (ecmascript)");
;
;
;
function parseWalletOutpoint(outpoint) {
    const [txid, vout] = outpoint.split('.');
    return {
        txid,
        vout: Number(vout)
    };
}
function defaultTrue(v) {
    return v ?? true;
}
function defaultFalse(v) {
    return v ?? false;
}
function defaultZero(v) {
    return v ?? 0;
}
function default0xffffffff(v) {
    return v ?? 0xffffffff;
}
function defaultOne(v) {
    return v ?? 1;
}
function defaultEmpty(v) {
    return v ?? [];
}
function validateOptionalStringLength(s, name, min, max) {
    if (s === undefined) return undefined;
    return validateStringLength(s, name, min, max);
}
function validateSatoshis(v, name, min) {
    if (v === undefined || !Number.isInteger(v) || v < 0 || v > 21e14) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, 'a valid number of satoshis');
    }
    if (min !== undefined && v < min) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, `at least ${min} satoshis.`);
    return v;
}
function validateOptionalInteger(v, name, min, max) {
    if (v === undefined) return undefined;
    return validateInteger(v, name, undefined, min, max);
}
function validateInteger(v, name, defaultValue, min, max) {
    if (v === undefined) {
        if (defaultValue !== undefined) return defaultValue;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, 'a valid integer');
    }
    if (!Number.isInteger(v)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, 'an integer');
    v = Number(v);
    if (min !== undefined && v < min) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, `at least ${min} length.`);
    if (max !== undefined && v > max) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, `no more than ${max} length.`);
    return v;
}
function validatePositiveIntegerOrZero(v, name) {
    return validateInteger(v, name, 0, 0);
}
function validateStringLength(s, name, min, max) {
    const bytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](s, 'utf8').length;
    if (min !== undefined && bytes < min) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, `at least ${min} length.`);
    if (max !== undefined && bytes > max) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, `no more than ${max} length.`);
    return s;
}
/**
 * Validate an optional basket string (1..300 bytes).
 *
 * @param s - basket string or undefined
 * @returns validated basket string or undefined
 */ function validateOptionalBasket(s) {
    if (s === undefined) return undefined;
    return validateBasket(s);
}
/**
 * Validate basket identifier (1..300 bytes).
 *
 * @param s - basket string
 * @returns validated basket string
 */ function validateBasket(s) {
    return validateIdentifier(s, 'basket', 1, 300);
}
/**
 * Validate label identifier (1..300 bytes).
 *
 * @param s - label string
 * @returns validated label string
 */ function validateLabel(s) {
    return validateIdentifier(s, 'label', 1, 300);
}
/**
 * Validate tag identifier (1..300 bytes).
 *
 * @param s - tag string
 * @returns validated tag string
 */ function validateTag(s) {
    return validateIdentifier(s, 'tag', 1, 300);
}
/**
 * Normalize and validate an identifier (trim, lowercase, byte length).
 *
 * @param s - input string
 * @param name - name used in errors
 * @param min - optional minimum byte length
 * @param max - optional maximum byte length
 * @returns normalized identifier
 * @throws WERR_INVALID_PARAMETER when invalid
 */ function validateIdentifier(s, name, min, max) {
    s = s.trim().toLowerCase();
    const bytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](s, 'utf8').length;
    if (min !== undefined && bytes < min) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, `at least ${min} length.`);
    if (max !== undefined && bytes > max) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, `no more than ${max} length.`);
    return s;
}
/**
 * Validate an optional Base64 encoded string.
 *
 * @param s - base64 string or undefined
 * @param name - parameter name used in error messages
 * @param min - optional minimum decoded byte length
 * @param max - optional maximum decoded byte length
 * @returns validated base64 string or undefined
 */ function validateOptionalBase64String(s, name, min, max) {
    if (s === undefined) return undefined;
    return validateBase64String(s, name, min, max);
}
function validateBase64String(s, name, min, max) {
    s = s.trim();
    if (s.length === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, 'valid base64 string');
    }
    let paddingCount = 0;
    for(let i = 0; i < s.length; i++){
        const char = s.charCodeAt(i);
        if (char >= 65 && char <= 90) continue; // A-Z
        if (char >= 97 && char <= 122) continue; // a-z
        if (char >= 48 && char <= 57) continue; // 0-9
        if (char === 43) continue; // +
        if (char === 47) continue; // /
        if (char === 61) {
            if (i < s.length - 2) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, 'valid base64 string');
            }
            paddingCount++;
            continue;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, 'valid base64 string');
    }
    // Padding rules
    if (paddingCount > 2) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, 'valid base64 string');
    }
    if (paddingCount > 0 && s.length % 4 !== 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, 'valid base64 string');
    }
    // Length must be multiple of 4 if no padding, or valid with padding
    const mod = s.length % 4;
    if (mod !== 0 && mod !== 4 - paddingCount) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, 'valid base64 string');
    }
    // Calculate decoded byte length: (valid chars * 6) / 8
    const encodedLength = s.length - paddingCount;
    const bytes = Math.floor(encodedLength * 3 / 4);
    if (min !== undefined && bytes < min) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, `at least ${min} bytes`);
    }
    if (max !== undefined && bytes > max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, `no more than ${max} bytes`);
    }
    return s;
}
function validateOptionalHexString(s, name, min, max) {
    if (s === undefined) return undefined;
    return validateHexString(s, name, min, max);
}
/**
 * Validate a hex string (even length, hex chars) and optional length bounds (character count).
 *
 * @param s - hex string
 * @param name - parameter name used in error messages
 * @param min if valid, string length minimum (not bytes)
 * @param max if valid, string length maximum (not bytes)
 * @returns
 */ function validateHexString(s, name, min, max) {
    s = s.trim().toLowerCase();
    if (s.length % 2 === 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, `even length, not ${s.length}.`);
    const hexRegex = /^[0-9A-Fa-f]+$/;
    if (!hexRegex.test(s)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, 'hexadecimal string.');
    if (min !== undefined && s.length < min) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, `at least ${min} length.`);
    if (max !== undefined && s.length > max) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, `no more than ${max} length.`);
    return s;
}
function isHexString(s) {
    s = s.trim();
    if (s.length % 2 === 1) return false;
    const hexRegex = /^[0-9A-Fa-f]+$/;
    if (!hexRegex.test(s)) return false;
    return true;
}
function validateCreateActionInput(i) {
    if (i.unlockingScript === undefined && i.unlockingScriptLength === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('unlockingScript, unlockingScriptLength', 'at least one valid value.');
    }
    const unlockingScript = validateOptionalHexString(i.unlockingScript, 'unlockingScript');
    const unlockingScriptLength = i.unlockingScriptLength ?? (unlockingScript != null ? unlockingScript.length / 2 : 0);
    if (unlockingScript && unlockingScriptLength !== unlockingScript.length / 2) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('unlockingScriptLength', 'length unlockingScript if both valid.');
    }
    const vi = {
        outpoint: parseWalletOutpoint(i.outpoint),
        inputDescription: validateStringLength(i.inputDescription, 'inputDescription', 5, 2000),
        unlockingScript,
        unlockingScriptLength,
        sequenceNumber: default0xffffffff(i.sequenceNumber)
    };
    return vi;
}
function validateCreateActionOutput(o) {
    const vo = {
        lockingScript: validateHexString(o.lockingScript, 'lockingScript'),
        satoshis: validateSatoshis(o.satoshis, 'satoshis'),
        outputDescription: validateStringLength(o.outputDescription, 'outputDescription', 5, 2000),
        basket: validateOptionalBasket(o.basket),
        customInstructions: o.customInstructions,
        tags: defaultEmpty(o.tags).map((t)=>validateTag(t))
    };
    return vo;
}
function validateCreateActionOptions(options) {
    const o = options != null ? options : {};
    const vo = {
        signAndProcess: defaultTrue(o.signAndProcess),
        acceptDelayedBroadcast: defaultTrue(o.acceptDelayedBroadcast),
        knownTxids: defaultEmpty(o.knownTxids),
        returnTXIDOnly: defaultFalse(o.returnTXIDOnly),
        noSend: defaultFalse(o.noSend),
        noSendChange: defaultEmpty(o.noSendChange).map((nsc)=>parseWalletOutpoint(nsc)),
        sendWith: defaultEmpty(o.sendWith),
        randomizeOutputs: defaultTrue(o.randomizeOutputs)
    };
    return vo;
}
function validateCreateActionArgs(args, logger) {
    const vargs = {
        description: validateStringLength(args.description, 'description', 5, 2000),
        inputBEEF: args.inputBEEF,
        inputs: defaultEmpty(args.inputs).map((i)=>validateCreateActionInput(i)),
        outputs: defaultEmpty(args.outputs).map((o)=>validateCreateActionOutput(o)),
        lockTime: defaultZero(args.lockTime),
        version: defaultOne(args.version),
        labels: defaultEmpty(args.labels?.map((l)=>validateLabel(l))),
        options: validateCreateActionOptions(args.options),
        logger,
        isSendWith: false,
        isDelayed: false,
        isNoSend: false,
        isNewTx: false,
        isRemixChange: false,
        isSignAction: false,
        randomVals: undefined,
        includeAllSourceTransactions: false,
        isTestWerrReviewActions: false
    };
    vargs.isTestWerrReviewActions = vargs.labels.includes(specOpThrowReviewActions);
    vargs.isSendWith = vargs.options.sendWith.length > 0;
    vargs.isRemixChange = !vargs.isSendWith && vargs.inputs.length === 0 && vargs.outputs.length === 0;
    vargs.isNewTx = vargs.isRemixChange || vargs.inputs.length > 0 || vargs.outputs.length > 0;
    vargs.isSignAction = vargs.isNewTx && (!vargs.options.signAndProcess || vargs.inputs.some((i)=>i.unlockingScript === undefined));
    vargs.isDelayed = vargs.options.acceptDelayedBroadcast;
    vargs.isNoSend = vargs.options.noSend;
    return vargs;
}
function validateSignActionOptions(options) {
    const o = options != null ? options : {};
    const vo = {
        acceptDelayedBroadcast: defaultTrue(o.acceptDelayedBroadcast),
        returnTXIDOnly: defaultFalse(o.returnTXIDOnly),
        noSend: defaultFalse(o.noSend),
        sendWith: defaultEmpty(o.sendWith)
    };
    return vo;
}
function validateSignActionArgs(args) {
    const vargs = {
        spends: args.spends,
        reference: args.reference,
        options: validateSignActionOptions(args.options),
        isSendWith: false,
        isDelayed: false,
        isNoSend: false,
        isNewTx: true,
        isRemixChange: false,
        isTestWerrReviewActions: false
    };
    vargs.isSendWith = vargs.options.sendWith.length > 0;
    vargs.isDelayed = vargs.options.acceptDelayedBroadcast;
    vargs.isNoSend = vargs.options.noSend;
    return vargs;
}
function validateAbortActionArgs(args) {
    const vargs = {
        reference: validateBase64String(args.reference, 'reference')
    };
    return vargs;
}
function validateWalletPayment(args) {
    if (args === undefined) return undefined;
    const v = {
        derivationPrefix: validateBase64String(args.derivationPrefix, 'derivationPrefix'),
        derivationSuffix: validateBase64String(args.derivationSuffix, 'derivationSuffix'),
        senderIdentityKey: validateHexString(args.senderIdentityKey, 'senderIdentityKey')
    };
    return v;
}
function validateBasketInsertion(args) {
    if (args === undefined) return undefined;
    const v = {
        basket: validateBasket(args.basket),
        customInstructions: validateOptionalStringLength(args.customInstructions, 'customInstructions', 0, 1000),
        tags: defaultEmpty(args.tags).map((t)=>validateTag(t))
    };
    return v;
}
function validateInternalizeOutput(args) {
    if (args.protocol !== 'basket insertion' && args.protocol !== 'wallet payment') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('protocol', '\'basket insertion\' or \'wallet payment\'');
    }
    const v = {
        outputIndex: validatePositiveIntegerOrZero(args.outputIndex, 'outputIndex'),
        protocol: args.protocol,
        paymentRemittance: validateWalletPayment(args.paymentRemittance),
        insertionRemittance: validateBasketInsertion(args.insertionRemittance)
    };
    return v;
}
function validateOriginator(s) {
    if (s === undefined) return undefined;
    s = s.trim().toLowerCase();
    validateStringLength(s, 'originator', 1, 250);
    const sps = s.split('.');
    for (const sp of sps){
        validateStringLength(sp, 'originator part', 1, 63);
    }
    return s;
}
function validateInternalizeActionArgs(args) {
    const vargs = {
        tx: args.tx,
        outputs: args.outputs.map((o)=>validateInternalizeOutput(o)),
        description: validateStringLength(args.description, 'description', 5, 2000),
        labels: (args.labels != null ? args.labels : []).map((t)=>validateLabel(t)),
        seekPermission: defaultTrue(args.seekPermission)
    };
    try {
        const beef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromBinary(vargs.tx);
        if (beef.txs.length < 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('tx', 'at least one transaction to internalize an output from');
        }
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('tx', 'valid with at least one transaction to internalize an output from');
    }
    if (vargs.outputs.length < 1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('outputs', 'at least one output to internalize from the transaction');
    }
    return vargs;
}
function validateOptionalOutpointString(outpoint, name) {
    if (outpoint === undefined) return undefined;
    return validateOutpointString(outpoint, name);
}
function validateOutpointString(outpoint, name) {
    const s = outpoint.split('.');
    if (s.length !== 2 || !Number.isInteger(Number(s[1]))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](name, 'txid as hex string and numeric output index joined with \'.\'');
    }
    const txid = validateHexString(s[0], `${name} txid`, undefined, 64);
    const vout = validatePositiveIntegerOrZero(Number(s[1]), `${name} vout`);
    return `${txid}.${vout}`;
}
function validateRelinquishOutputArgs(args) {
    const vargs = {
        basket: validateBasket(args.basket),
        output: validateOutpointString(args.output, 'output')
    };
    return vargs;
}
function validateRelinquishCertificateArgs(args) {
    const vargs = {
        type: validateBase64String(args.type, 'type'),
        serialNumber: validateBase64String(args.serialNumber, 'serialNumber'),
        certifier: validateHexString(args.certifier, 'certifier')
    };
    return vargs;
}
function validateListCertificatesArgs(args) {
    const vargs = {
        certifiers: defaultEmpty(args.certifiers.map((c)=>validateHexString(c.trim(), 'certifiers'))),
        types: defaultEmpty(args.types.map((t)=>validateBase64String(t.trim(), 'types'))),
        limit: validateInteger(args.limit, 'limit', 10, 1, 10000),
        offset: validatePositiveIntegerOrZero(defaultZero(args.offset), 'offset'),
        privileged: defaultFalse(args.privileged),
        privilegedReason: validateOptionalStringLength(args.privilegedReason, 'privilegedReason', 5, 50),
        partial: undefined
    };
    return vargs;
}
function validateCertificateFields(fields) {
    for (const fieldName of Object.keys(fields)){
        validateStringLength(fieldName, 'field name', 1, 50);
    }
    return fields;
}
function validateKeyringRevealer(kr, name) {
    if (kr === 'certifier') return kr;
    return validateHexString(kr, name);
}
function validateKeyringForSubject(kr, name) {
    for (const fn of Object.keys(kr)){
        validateStringLength(fn, `${name} field name`, 1, 50);
        validateBase64String(kr[fn], `${name} field value`);
    }
    return kr;
}
function validateAcquireIssuanceCertificateArgs(args) {
    if (args.acquisitionProtocol !== 'issuance') {
        throw new Error('Only acquire certificate via issuance requests allowed here.');
    }
    if (args.serialNumber) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('serialNumber', 'valid when acquisitionProtocol is "direct"');
    if (args.signature) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('signature', 'valid when acquisitionProtocol is "direct"');
    if (args.revocationOutpoint) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('revocationOutpoint', 'valid when acquisitionProtocol is "direct"');
    }
    if (args.keyringRevealer) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('keyringRevealer', 'valid when acquisitionProtocol is "direct"');
    }
    if (args.keyringForSubject != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('keyringForSubject', 'valid when acquisitionProtocol is "direct"');
    }
    if (!args.certifierUrl) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('certifierUrl', 'valid when acquisitionProtocol is "issuance"');
    }
    if (args.privileged && !args.privilegedReason) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('privilegedReason', 'valid when \'privileged\' is true ');
    }
    const vargs = {
        type: validateBase64String(args.type, 'type'),
        certifier: validateHexString(args.certifier, 'certifier'),
        certifierUrl: args.certifierUrl,
        fields: validateCertificateFields(args.fields),
        privileged: defaultFalse(args.privileged),
        privilegedReason: validateOptionalStringLength(args.privilegedReason, 'privilegedReason', 5, 50),
        subject: ''
    };
    return vargs;
}
function validateAcquireDirectCertificateArgs(args) {
    if (args.acquisitionProtocol !== 'direct') {
        throw new Error('Only acquire direct certificate requests allowed here.');
    }
    if (!args.serialNumber) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('serialNumber', 'valid when acquisitionProtocol is "direct"');
    if (!args.signature) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('signature', 'valid when acquisitionProtocol is "direct"');
    if (!args.revocationOutpoint) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('revocationOutpoint', 'valid when acquisitionProtocol is "direct"');
    }
    if (!args.keyringRevealer) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('keyringRevealer', 'valid when acquisitionProtocol is "direct"');
    }
    if (args.keyringForSubject == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('keyringForSubject', 'valid when acquisitionProtocol is "direct"');
    }
    if (args.privileged && !args.privilegedReason) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('privilegedReason', 'valid when \'privileged\' is true ');
    }
    const vargs = {
        type: validateBase64String(args.type, 'type'),
        serialNumber: validateBase64String(args.serialNumber, 'serialNumber'),
        certifier: validateHexString(args.certifier, 'certifier'),
        revocationOutpoint: validateOutpointString(args.revocationOutpoint, 'revocationOutpoint'),
        fields: validateCertificateFields(args.fields),
        signature: validateHexString(args.signature, 'signature'),
        keyringRevealer: validateKeyringRevealer(args.keyringRevealer, 'keyringRevealer'),
        keyringForSubject: validateKeyringForSubject(args.keyringForSubject, 'keyringForSubject'),
        privileged: defaultFalse(args.privileged),
        privilegedReason: validateOptionalStringLength(args.privilegedReason, 'privilegedReason', 5, 50),
        subject: ''
    };
    return vargs;
}
function validateProveCertificateArgs(args) {
    if (args.privileged && !args.privilegedReason) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('privilegedReason', 'valid when \'privileged\' is true ');
    }
    const vargs = {
        type: validateOptionalBase64String(args.certificate.type, 'certificate.type'),
        serialNumber: validateOptionalBase64String(args.certificate.serialNumber, 'certificate.serialNumber'),
        certifier: validateOptionalHexString(args.certificate.certifier, 'certificate.certifier'),
        subject: validateOptionalHexString(args.certificate.subject, 'certificate.subject'),
        revocationOutpoint: validateOptionalOutpointString(args.certificate.revocationOutpoint, 'certificate.revocationOutpoint'),
        signature: validateOptionalHexString(args.certificate.signature, 'certificate.signature'),
        fieldsToReveal: defaultEmpty(args.fieldsToReveal).map((fieldName)=>validateStringLength(fieldName, `fieldsToReveal ${fieldName}`, 1, 50)),
        verifier: validateHexString(args.verifier, 'verifier'),
        privileged: defaultFalse(args.privileged),
        privilegedReason: validateOptionalStringLength(args.privilegedReason, 'privilegedReason', 5, 50)
    };
    return vargs;
}
function validateDiscoverByIdentityKeyArgs(args) {
    const vargs = {
        identityKey: validateHexString(args.identityKey, 'identityKey', 66, 66),
        limit: validateInteger(args.limit, 'limit', 10, 1, 10000),
        offset: validatePositiveIntegerOrZero(defaultZero(args.offset), 'offset'),
        seekPermission: defaultFalse(args.seekPermission)
    };
    return vargs;
}
function validateAttributes(attributes) {
    for (const fieldName of Object.keys(attributes)){
        validateStringLength(fieldName, `field name ${fieldName}`, 1, 50);
    }
    return attributes;
}
function validateDiscoverByAttributesArgs(args) {
    const vargs = {
        attributes: validateAttributes(args.attributes),
        limit: validateInteger(args.limit, 'limit', 10, 1, 10000),
        offset: validatePositiveIntegerOrZero(defaultZero(args.offset), 'offset'),
        seekPermission: defaultFalse(args.seekPermission)
    };
    return vargs;
}
function validateListOutputsArgs(args) {
    let tagQueryMode;
    if (args.tagQueryMode === undefined || args.tagQueryMode === 'any') tagQueryMode = 'any';
    else if (args.tagQueryMode === 'all') tagQueryMode = 'all';
    else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('tagQueryMode', 'undefined, \'any\', or \'all\'');
    const vargs = {
        basket: validateStringLength(args.basket, 'basket', 1, 300),
        tags: (args.tags != null ? args.tags : []).map((t)=>validateStringLength(t, 'tag', 1, 300)),
        tagQueryMode,
        includeLockingScripts: args.include === 'locking scripts',
        includeTransactions: args.include === 'entire transactions',
        includeCustomInstructions: defaultFalse(args.includeCustomInstructions),
        includeTags: defaultFalse(args.includeTags),
        includeLabels: defaultFalse(args.includeLabels),
        limit: validateInteger(args.limit, 'limit', 10, 1, 10000),
        offset: validateInteger(args.offset, 'offset', 0, undefined, undefined),
        seekPermission: defaultTrue(args.seekPermission),
        knownTxids: []
    };
    return vargs;
}
function validateListActionsArgs(args) {
    let labelQueryMode;
    if (args.labelQueryMode === undefined || args.labelQueryMode === 'any') labelQueryMode = 'any';
    else if (args.labelQueryMode === 'all') labelQueryMode = 'all';
    else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('labelQueryMode', 'undefined, \'any\', or \'all\'');
    const vargs = {
        labels: (args.labels != null ? args.labels : []).map((t)=>validateLabel(t)),
        labelQueryMode,
        includeLabels: defaultFalse(args.includeLabels),
        includeInputs: defaultFalse(args.includeInputs),
        includeInputSourceLockingScripts: defaultFalse(args.includeInputSourceLockingScripts),
        includeInputUnlockingScripts: defaultFalse(args.includeInputUnlockingScripts),
        includeOutputs: defaultFalse(args.includeOutputs),
        includeOutputLockingScripts: defaultFalse(args.includeOutputLockingScripts),
        limit: validateInteger(args.limit, 'limit', 10, 1, 10000),
        offset: validateInteger(args.offset, 'offset', 0, 0),
        seekPermission: defaultTrue(args.seekPermission)
    };
    return vargs;
}
const specOpThrowReviewActions = 'a496e747fc3ad5fabdd4ae8f91184e71f87539bd3d962aa2548942faaaf0047a'; //# sourceMappingURL=validationHelpers.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WalletClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$window$2e$CWI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/window.CWI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$XDM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/XDM.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWireTransceiver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/WalletWireTransceiver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$HTTPWalletWire$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/HTTPWalletWire.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$HTTPWalletJSON$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/HTTPWalletJSON.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$ReactNativeWebView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/ReactNativeWebView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/validationHelpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WERR_INVALID_PARAMETER.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const MAX_XDM_RESPONSE_WAIT = 200;
class WalletClient {
    substrate;
    originator;
    constructor(substrate = 'auto', originator){
        if (substrate === 'Cicada') {
            substrate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWireTransceiver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$HTTPWalletWire$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](originator));
        }
        if (substrate === 'window.CWI') substrate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$window$2e$CWI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        if (substrate === 'XDM') substrate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$XDM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        if (substrate === 'json-api') substrate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$HTTPWalletJSON$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](originator);
        if (substrate === 'react-native') substrate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$ReactNativeWebView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](originator);
        if (substrate === 'secure-json-api') substrate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$HTTPWalletJSON$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](originator, 'https://localhost:2121');
        this.substrate = substrate;
        this.originator = originator;
    }
    async connectToSubstrate() {
        if (typeof this.substrate === 'object') {
            return; // substrate is already connected
        }
        const attemptSubstrate = async (factory, timeout)=>{
            try {
                const sub = factory();
                let result;
                if (typeof timeout === 'number') {
                    result = await Promise.race([
                        sub.getVersion({}),
                        new Promise((_resolve, reject)=>setTimeout(()=>reject(new Error('Timed out.')), timeout))
                    ]);
                } else {
                    result = await sub.getVersion({});
                }
                if (typeof result !== 'object' || typeof result.version !== 'string') {
                    return {
                        success: false
                    };
                }
                return {
                    success: true,
                    sub
                };
            } catch  {
                return {
                    success: false
                };
            }
        };
        // Try fast substrates first
        const fastAttempts = [
            attemptSubstrate(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$window$2e$CWI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]()),
            attemptSubstrate(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$HTTPWalletJSON$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this.originator, 'https://localhost:2121')),
            attemptSubstrate(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$HTTPWalletJSON$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this.originator)),
            attemptSubstrate(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$ReactNativeWebView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this.originator)),
            attemptSubstrate(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWireTransceiver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$HTTPWalletWire$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this.originator)))
        ];
        const fastResults = await Promise.allSettled(fastAttempts);
        const fastSuccessful = fastResults.filter((r)=>r.status === 'fulfilled' && r.value.success && r.value.sub !== undefined).map((r)=>r.value.sub);
        if (fastSuccessful.length > 0) {
            this.substrate = fastSuccessful[0];
            return;
        }
        // Fall back to slower XDM substrate
        const xdmResult = await attemptSubstrate(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$XDM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](), MAX_XDM_RESPONSE_WAIT);
        if (xdmResult.success && xdmResult.sub !== undefined) {
            this.substrate = xdmResult.sub;
        } else {
            throw new Error('No wallet available over any communication substrate. Install a BSV wallet today!');
        }
    }
    async createAction(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCreateActionArgs"])(args);
        await this.connectToSubstrate();
        return await this.substrate.createAction(args, this.originator);
    }
    async signAction(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSignActionArgs"])(args);
        await this.connectToSubstrate();
        return await this.substrate.signAction(args, this.originator);
    }
    async abortAction(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateAbortActionArgs"])(args);
        await this.connectToSubstrate();
        return await this.substrate.abortAction(args, this.originator);
    }
    async listActions(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateListActionsArgs"])(args);
        await this.connectToSubstrate();
        return await this.substrate.listActions(args, this.originator);
    }
    async internalizeAction(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateInternalizeActionArgs"])(args);
        await this.connectToSubstrate();
        return await this.substrate.internalizeAction(args, this.originator);
    }
    async listOutputs(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateListOutputsArgs"])(args);
        await this.connectToSubstrate();
        return await this.substrate.listOutputs(args, this.originator);
    }
    async relinquishOutput(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateRelinquishOutputArgs"])(args);
        await this.connectToSubstrate();
        return await this.substrate.relinquishOutput(args, this.originator);
    }
    async getPublicKey(args) {
        await this.connectToSubstrate();
        return await this.substrate.getPublicKey(args, this.originator);
    }
    async revealCounterpartyKeyLinkage(args) {
        await this.connectToSubstrate();
        return await this.substrate.revealCounterpartyKeyLinkage(args, this.originator);
    }
    async revealSpecificKeyLinkage(args) {
        await this.connectToSubstrate();
        return await this.substrate.revealSpecificKeyLinkage(args, this.originator);
    }
    async encrypt(args) {
        await this.connectToSubstrate();
        return await this.substrate.encrypt(args, this.originator);
    }
    async decrypt(args) {
        await this.connectToSubstrate();
        return await this.substrate.decrypt(args, this.originator);
    }
    async createHmac(args) {
        await this.connectToSubstrate();
        return await this.substrate.createHmac(args, this.originator);
    }
    async verifyHmac(args) {
        await this.connectToSubstrate();
        return await this.substrate.verifyHmac(args, this.originator);
    }
    async createSignature(args) {
        await this.connectToSubstrate();
        return await this.substrate.createSignature(args, this.originator);
    }
    async verifySignature(args) {
        await this.connectToSubstrate();
        return await this.substrate.verifySignature(args, this.originator);
    }
    async acquireCertificate(args) {
        if (args.acquisitionProtocol === 'direct') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateAcquireDirectCertificateArgs"])(args);
        } else if (args.acquisitionProtocol === 'issuance') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateAcquireIssuanceCertificateArgs"])(args);
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WERR_INVALID_PARAMETER"]('acquisitionProtocol', `valid. ${String(args.acquisitionProtocol)} is unrecognized.`);
        }
        await this.connectToSubstrate();
        return await this.substrate.acquireCertificate(args, this.originator);
    }
    async listCertificates(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateListCertificatesArgs"])(args);
        await this.connectToSubstrate();
        return await this.substrate.listCertificates(args, this.originator);
    }
    async proveCertificate(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateProveCertificateArgs"])(args);
        await this.connectToSubstrate();
        return await this.substrate.proveCertificate(args, this.originator);
    }
    async relinquishCertificate(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateRelinquishCertificateArgs"])(args);
        await this.connectToSubstrate();
        return await this.substrate.relinquishCertificate(args, this.originator);
    }
    async discoverByIdentityKey(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDiscoverByIdentityKeyArgs"])(args);
        await this.connectToSubstrate();
        return await this.substrate.discoverByIdentityKey(args, this.originator);
    }
    async discoverByAttributes(args) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDiscoverByAttributesArgs"])(args);
        await this.connectToSubstrate();
        return await this.substrate.discoverByAttributes(args, this.originator);
    }
    async isAuthenticated(args = {}) {
        await this.connectToSubstrate();
        return await this.substrate.isAuthenticated(args, this.originator);
    }
    async waitForAuthentication(args = {}) {
        await this.connectToSubstrate();
        return await this.substrate.waitForAuthentication(args, this.originator);
    }
    async getHeight(args = {}) {
        await this.connectToSubstrate();
        return await this.substrate.getHeight(args, this.originator);
    }
    async getHeaderForHeight(args) {
        await this.connectToSubstrate();
        return await this.substrate.getHeaderForHeight(args, this.originator);
    }
    async getNetwork(args = {}) {
        await this.connectToSubstrate();
        return await this.substrate.getNetwork(args, this.originator);
    }
    async getVersion(args = {}) {
        await this.connectToSubstrate();
        return await this.substrate.getVersion(args, this.originator);
    }
} //# sourceMappingURL=WalletClient.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/WalletWire.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=WalletWire.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/WalletWireProcessor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WalletWireProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWireCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/WalletWireCalls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/Certificate.js [app-ssr] (ecmascript)");
;
;
;
class WalletWireProcessor {
    wallet;
    constructor(wallet){
        this.wallet = wallet;
    }
    decodeOutpoint(reader) {
        const txidBytes = reader.read(32);
        const txid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](txidBytes);
        const index = reader.readVarIntNum();
        return `${txid}.${index}`;
    }
    encodeOutpoint(outpoint) {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        const [txid, index] = outpoint.split('.');
        writer.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](txid, 'hex'));
        writer.writeVarIntNum(Number(index));
        return writer.toArray();
    }
    async transmitToWallet(message) {
        const messageReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](message);
        try {
            // Read call code
            const callCode = messageReader.readUInt8();
            // Map call code to call name
            const callName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWireCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][callCode]; // calls is enum
            if (callName === undefined || callName === '') {
                // Invalid call code
                throw new Error(`Invalid call code: ${callCode}`);
            }
            // Read originator length
            const originatorLength = messageReader.readUInt8();
            const originatorBytes = messageReader.read(originatorLength);
            const originator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](originatorBytes);
            // Read parameters
            const paramsReader = messageReader; // Remaining bytes
            switch(callName){
                case 'createAction':
                    {
                        // Deserialize parameters from paramsReader
                        const args = {};
                        // Read description
                        const descriptionLength = paramsReader.readVarIntNum();
                        const descriptionBytes = paramsReader.read(descriptionLength);
                        args.description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](descriptionBytes);
                        // tx
                        const inputBeefLength = paramsReader.readVarIntNum();
                        if (inputBeefLength >= 0) {
                            args.inputBEEF = paramsReader.read(inputBeefLength); // BEEF (Byte[])
                        } else {
                            args.inputBEEF = undefined;
                        }
                        // Read inputs
                        const inputsLength = paramsReader.readVarIntNum();
                        if (inputsLength >= 0) {
                            args.inputs = [];
                            for(let i = 0; i < inputsLength; i++){
                                const input = {};
                                // outpoint
                                input.outpoint = this.decodeOutpoint(paramsReader);
                                // unlockingScript / unlockingScriptLength
                                const unlockingScriptLength = paramsReader.readVarIntNum();
                                if (unlockingScriptLength >= 0) {
                                    const unlockingScriptBytes = paramsReader.read(unlockingScriptLength);
                                    input.unlockingScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](unlockingScriptBytes);
                                } else {
                                    input.unlockingScript = undefined;
                                    const unlockingScriptLengthValue = paramsReader.readVarIntNum();
                                    input.unlockingScriptLength = unlockingScriptLengthValue;
                                }
                                // inputDescription
                                const inputDescriptionLength = paramsReader.readVarIntNum();
                                const inputDescriptionBytes = paramsReader.read(inputDescriptionLength);
                                input.inputDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](inputDescriptionBytes);
                                // sequenceNumber
                                const sequenceNumber = paramsReader.readVarIntNum();
                                if (sequenceNumber >= 0) {
                                    input.sequenceNumber = sequenceNumber;
                                } else {
                                    input.sequenceNumber = undefined;
                                }
                                args.inputs.push(input);
                            }
                        } else {
                            args.inputs = undefined;
                        }
                        // Read outputs
                        const outputsLength = paramsReader.readVarIntNum();
                        if (outputsLength >= 0) {
                            args.outputs = [];
                            for(let i = 0; i < outputsLength; i++){
                                const output = {};
                                // lockingScript
                                const lockingScriptLength = paramsReader.readVarIntNum();
                                const lockingScriptBytes = paramsReader.read(lockingScriptLength);
                                output.lockingScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](lockingScriptBytes);
                                // satoshis
                                output.satoshis = paramsReader.readVarIntNum();
                                // outputDescription
                                const outputDescriptionLength = paramsReader.readVarIntNum();
                                const outputDescriptionBytes = paramsReader.read(outputDescriptionLength);
                                output.outputDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](outputDescriptionBytes);
                                // basket
                                const basketLength = paramsReader.readVarIntNum();
                                if (basketLength >= 0) {
                                    const basketBytes = paramsReader.read(basketLength);
                                    output.basket = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](basketBytes);
                                } else {
                                    output.basket = undefined;
                                }
                                // customInstructions
                                const customInstructionsLength = paramsReader.readVarIntNum();
                                if (customInstructionsLength >= 0) {
                                    const customInstructionsBytes = paramsReader.read(customInstructionsLength);
                                    output.customInstructions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](customInstructionsBytes);
                                } else {
                                    output.customInstructions = undefined;
                                }
                                // tags
                                const tagsLength = paramsReader.readVarIntNum();
                                if (tagsLength >= 0) {
                                    output.tags = [];
                                    for(let j = 0; j < tagsLength; j++){
                                        const tagLength = paramsReader.readVarIntNum();
                                        const tagBytes = paramsReader.read(tagLength);
                                        const tag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](tagBytes);
                                        output.tags.push(tag);
                                    }
                                } else {
                                    output.tags = undefined;
                                }
                                args.outputs.push(output);
                            }
                        } else {
                            args.outputs = undefined;
                        }
                        // lockTime
                        const lockTime = paramsReader.readVarIntNum();
                        if (lockTime >= 0) {
                            args.lockTime = lockTime;
                        } else {
                            args.lockTime = undefined;
                        }
                        // version
                        const version = paramsReader.readVarIntNum();
                        if (version >= 0) {
                            args.version = version;
                        } else {
                            args.version = undefined;
                        }
                        // labels
                        const labelsLength = paramsReader.readVarIntNum();
                        if (labelsLength >= 0) {
                            args.labels = [];
                            for(let i = 0; i < labelsLength; i++){
                                const labelLength = paramsReader.readVarIntNum();
                                const labelBytes = paramsReader.read(labelLength);
                                const label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](labelBytes);
                                args.labels.push(label);
                            }
                        } else {
                            args.labels = undefined;
                        }
                        // options
                        const optionsPresent = paramsReader.readInt8();
                        if (optionsPresent === 1) {
                            args.options = {};
                            // signAndProcess
                            const signAndProcessFlag = paramsReader.readInt8();
                            if (signAndProcessFlag === -1) {
                                args.options.signAndProcess = undefined;
                            } else {
                                args.options.signAndProcess = signAndProcessFlag === 1;
                            }
                            // acceptDelayedBroadcast
                            const acceptDelayedBroadcastFlag = paramsReader.readInt8();
                            if (acceptDelayedBroadcastFlag === -1) {
                                args.options.acceptDelayedBroadcast = undefined;
                            } else {
                                args.options.acceptDelayedBroadcast = acceptDelayedBroadcastFlag === 1;
                            }
                            // trustSelf
                            const trustSelfFlag = paramsReader.readInt8();
                            if (trustSelfFlag === -1) {
                                args.options.trustSelf = undefined;
                            } else if (trustSelfFlag === 1) {
                                args.options.trustSelf = 'known';
                            }
                            // knownTxids
                            const knownTxidsLength = paramsReader.readVarIntNum();
                            if (knownTxidsLength >= 0) {
                                args.options.knownTxids = [];
                                for(let i = 0; i < knownTxidsLength; i++){
                                    const txidBytes = paramsReader.read(32);
                                    const txid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](txidBytes);
                                    args.options.knownTxids.push(txid);
                                }
                            } else {
                                args.options.knownTxids = undefined;
                            }
                            // returnTXIDOnly
                            const returnTXIDOnlyFlag = paramsReader.readInt8();
                            if (returnTXIDOnlyFlag === -1) {
                                args.options.returnTXIDOnly = undefined;
                            } else {
                                args.options.returnTXIDOnly = returnTXIDOnlyFlag === 1;
                            }
                            // noSend
                            const noSendFlag = paramsReader.readInt8();
                            if (noSendFlag === -1) {
                                args.options.noSend = undefined;
                            } else {
                                args.options.noSend = noSendFlag === 1;
                            }
                            // noSendChange
                            const noSendChangeLength = paramsReader.readVarIntNum();
                            if (noSendChangeLength >= 0) {
                                args.options.noSendChange = [];
                                for(let i = 0; i < noSendChangeLength; i++){
                                    const outpoint = this.decodeOutpoint(paramsReader);
                                    args.options.noSendChange.push(outpoint);
                                }
                            } else {
                                args.options.noSendChange = undefined;
                            }
                            // sendWith
                            const sendWithLength = paramsReader.readVarIntNum();
                            if (sendWithLength >= 0) {
                                args.options.sendWith = [];
                                for(let i = 0; i < sendWithLength; i++){
                                    const txidBytes = paramsReader.read(32);
                                    const txid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](txidBytes);
                                    args.options.sendWith.push(txid);
                                }
                            } else {
                                args.options.sendWith = undefined;
                            }
                            // randomizeOutputs
                            const randomizeOutputsFlag = paramsReader.readInt8();
                            if (randomizeOutputsFlag === -1) {
                                args.options.randomizeOutputs = undefined;
                            } else {
                                args.options.randomizeOutputs = randomizeOutputsFlag === 1;
                            }
                        } else {
                            args.options = undefined;
                        }
                        // Call the method
                        const createActionResult = await this.wallet.createAction(args, originator);
                        // Serialize the result
                        const resultWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        // txid
                        if (createActionResult.txid != null && createActionResult.txid !== '') {
                            resultWriter.writeInt8(1);
                            resultWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](createActionResult.txid, 'hex'));
                        } else {
                            resultWriter.writeInt8(0);
                        }
                        // tx
                        if (createActionResult.tx != null) {
                            resultWriter.writeInt8(1);
                            resultWriter.writeVarIntNum(createActionResult.tx.length);
                            resultWriter.write(createActionResult.tx);
                        } else {
                            resultWriter.writeInt8(0);
                        }
                        // noSendChange
                        if (createActionResult.noSendChange != null) {
                            resultWriter.writeVarIntNum(createActionResult.noSendChange.length);
                            for (const outpoint of createActionResult.noSendChange){
                                resultWriter.write(this.encodeOutpoint(outpoint));
                            }
                        } else {
                            resultWriter.writeVarIntNum(-1);
                        }
                        // sendWithResults
                        if (createActionResult.sendWithResults != null) {
                            resultWriter.writeVarIntNum(createActionResult.sendWithResults.length);
                            for (const result of createActionResult.sendWithResults){
                                resultWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](result.txid, 'hex'));
                                let statusCode;
                                if (result.status === 'unproven') statusCode = 1;
                                else if (result.status === 'sending') statusCode = 2;
                                else if (result.status === 'failed') statusCode = 3;
                                resultWriter.writeInt8(statusCode);
                            }
                        } else {
                            resultWriter.writeVarIntNum(-1);
                        }
                        // signableTransaction
                        if (createActionResult.signableTransaction != null) {
                            resultWriter.writeInt8(1);
                            resultWriter.writeVarIntNum(createActionResult.signableTransaction.tx.length);
                            resultWriter.write(createActionResult.signableTransaction.tx);
                            const referenceBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](createActionResult.signableTransaction.reference, 'base64');
                            resultWriter.writeVarIntNum(referenceBytes.length);
                            resultWriter.write(referenceBytes);
                        } else {
                            resultWriter.writeInt8(0);
                        }
                        // Return success code and result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(resultWriter.toArray());
                        return responseWriter.toArray();
                    }
                case 'signAction':
                    {
                        const args = {};
                        // Deserialize spends
                        const spendCount = paramsReader.readVarIntNum();
                        args.spends = {};
                        for(let i = 0; i < spendCount; i++){
                            const inputIndex = paramsReader.readVarIntNum();
                            const spend = {};
                            // unlockingScript
                            const unlockingScriptLength = paramsReader.readVarIntNum();
                            const unlockingScriptBytes = paramsReader.read(unlockingScriptLength);
                            spend.unlockingScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](unlockingScriptBytes);
                            // sequenceNumber
                            const sequenceNumber = paramsReader.readVarIntNum();
                            if (sequenceNumber >= 0) {
                                spend.sequenceNumber = sequenceNumber;
                            } else {
                                spend.sequenceNumber = undefined;
                            }
                            args.spends[inputIndex] = spend;
                        }
                        // Deserialize reference
                        const referenceLength = paramsReader.readVarIntNum();
                        const referenceBytes = paramsReader.read(referenceLength);
                        args.reference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](referenceBytes);
                        // Deserialize options
                        const optionsPresent = paramsReader.readInt8();
                        if (optionsPresent === 1) {
                            args.options = {};
                            // acceptDelayedBroadcast
                            const acceptDelayedBroadcastFlag = paramsReader.readInt8();
                            if (acceptDelayedBroadcastFlag === -1) {
                                args.options.acceptDelayedBroadcast = undefined;
                            } else {
                                args.options.acceptDelayedBroadcast = acceptDelayedBroadcastFlag === 1;
                            }
                            // returnTXIDOnly
                            const returnTXIDOnlyFlag = paramsReader.readInt8();
                            if (returnTXIDOnlyFlag === -1) {
                                args.options.returnTXIDOnly = undefined;
                            } else {
                                args.options.returnTXIDOnly = returnTXIDOnlyFlag === 1;
                            }
                            // noSend
                            const noSendFlag = paramsReader.readInt8();
                            if (noSendFlag === -1) {
                                args.options.noSend = undefined;
                            } else {
                                args.options.noSend = noSendFlag === 1;
                            }
                            // sendWith
                            const sendWithLength = paramsReader.readVarIntNum();
                            if (sendWithLength >= 0) {
                                args.options.sendWith = [];
                                for(let i = 0; i < sendWithLength; i++){
                                    const txidBytes = paramsReader.read(32);
                                    const txid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](txidBytes);
                                    args.options.sendWith.push(txid);
                                }
                            } else {
                                args.options.sendWith = undefined;
                            }
                        } else {
                            args.options = undefined;
                        }
                        // Call the method
                        const signActionResult = await this.wallet.signAction(args, originator);
                        // Serialize the result
                        const resultWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        // txid
                        if (signActionResult.txid != null && signActionResult.txid !== '') {
                            resultWriter.writeInt8(1);
                            resultWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](signActionResult.txid, 'hex'));
                        } else {
                            resultWriter.writeInt8(0);
                        }
                        // tx
                        if (signActionResult.tx != null) {
                            resultWriter.writeInt8(1);
                            resultWriter.writeVarIntNum(signActionResult.tx.length);
                            resultWriter.write(signActionResult.tx);
                        } else {
                            resultWriter.writeInt8(0);
                        }
                        // sendWithResults
                        if (signActionResult.sendWithResults != null) {
                            resultWriter.writeVarIntNum(signActionResult.sendWithResults.length);
                            for (const result of signActionResult.sendWithResults){
                                resultWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](result.txid, 'hex'));
                                let statusCode;
                                if (result.status === 'unproven') statusCode = 1;
                                else if (result.status === 'sending') statusCode = 2;
                                else if (result.status === 'failed') statusCode = 3;
                                resultWriter.writeInt8(statusCode);
                            }
                        } else {
                            resultWriter.writeVarIntNum(-1);
                        }
                        // Return success code and result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(resultWriter.toArray());
                        return responseWriter.toArray();
                    }
                case 'abortAction':
                    {
                        // Deserialize reference
                        const referenceBytes = paramsReader.read();
                        const reference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](referenceBytes);
                        // Call the method
                        await this.wallet.abortAction({
                            reference
                        }, originator);
                        // Return success code and result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        return responseWriter.toArray();
                    }
                case 'listActions':
                    {
                        const args = {};
                        // Deserialize labels
                        const labelsLength = paramsReader.readVarIntNum();
                        args.labels = [];
                        for(let i = 0; i < labelsLength; i++){
                            const labelLength = paramsReader.readVarIntNum();
                            const labelBytes = paramsReader.read(labelLength);
                            args.labels.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](labelBytes));
                        }
                        // Deserialize labelQueryMode
                        const labelQueryModeFlag = paramsReader.readInt8();
                        if (labelQueryModeFlag === -1) {
                            args.labelQueryMode = undefined;
                        } else if (labelQueryModeFlag === 1) {
                            args.labelQueryMode = 'any';
                        } else if (labelQueryModeFlag === 2) {
                            args.labelQueryMode = 'all';
                        }
                        // Deserialize include options
                        const includeOptionsNames = [
                            'includeLabels',
                            'includeInputs',
                            'includeInputSourceLockingScripts',
                            'includeInputUnlockingScripts',
                            'includeOutputs',
                            'includeOutputLockingScripts'
                        ];
                        for (const optionName of includeOptionsNames){
                            const optionFlag = paramsReader.readInt8();
                            if (optionFlag === -1) {
                                args[optionName] = undefined;
                            } else {
                                args[optionName] = optionFlag === 1;
                            }
                        }
                        // Deserialize limit
                        const limit = paramsReader.readVarIntNum();
                        if (limit >= 0) {
                            args.limit = limit;
                        } else {
                            args.limit = undefined;
                        }
                        // Deserialize offset
                        const offset = paramsReader.readVarIntNum();
                        if (offset >= 0) {
                            args.offset = offset;
                        } else {
                            args.offset = undefined;
                        }
                        // Deserialize seekPermission
                        const seekPermission = paramsReader.readInt8();
                        if (seekPermission >= 0) {
                            args.seekPermission = seekPermission === 1;
                        } else {
                            args.seekPermission = undefined;
                        }
                        // Call the method
                        const listActionsResult = await this.wallet.listActions(args, originator);
                        // Serialize the result
                        const resultWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        // totalActions
                        resultWriter.writeVarIntNum(listActionsResult.totalActions);
                        // actions
                        for (const action of listActionsResult.actions){
                            // txid
                            resultWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](action.txid, 'hex'));
                            // satoshis
                            resultWriter.writeVarIntNum(action.satoshis);
                            // status
                            let statusCode;
                            switch(action.status){
                                case 'completed':
                                    statusCode = 1;
                                    break;
                                case 'unprocessed':
                                    statusCode = 2;
                                    break;
                                case 'sending':
                                    statusCode = 3;
                                    break;
                                case 'unproven':
                                    statusCode = 4;
                                    break;
                                case 'unsigned':
                                    statusCode = 5;
                                    break;
                                case 'nosend':
                                    statusCode = 6;
                                    break;
                                case 'nonfinal':
                                    statusCode = 7;
                                    break;
                                case 'failed':
                                    statusCode = 8;
                                    break;
                                default:
                                    statusCode = -1;
                                    break;
                            }
                            resultWriter.writeInt8(statusCode);
                            // isOutgoing
                            resultWriter.writeInt8(action.isOutgoing ? 1 : 0);
                            // description
                            const descriptionBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](action.description, 'utf8');
                            resultWriter.writeVarIntNum(descriptionBytes.length);
                            resultWriter.write(descriptionBytes);
                            // labels
                            if (action.labels !== undefined) {
                                resultWriter.writeVarIntNum(action.labels.length);
                                for (const label of action.labels){
                                    const labelBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](label, 'utf8');
                                    resultWriter.writeVarIntNum(labelBytes.length);
                                    resultWriter.write(labelBytes);
                                }
                            } else {
                                resultWriter.writeVarIntNum(-1);
                            }
                            // version
                            resultWriter.writeVarIntNum(action.version);
                            // lockTime
                            resultWriter.writeVarIntNum(action.lockTime);
                            // inputs
                            if (action.inputs !== undefined) {
                                resultWriter.writeVarIntNum(action.inputs.length);
                                for (const input of action.inputs){
                                    // sourceOutpoint
                                    resultWriter.write(this.encodeOutpoint(input.sourceOutpoint));
                                    // sourceSatoshis
                                    resultWriter.writeVarIntNum(input.sourceSatoshis);
                                    // sourceLockingScript
                                    if (input.sourceLockingScript !== undefined) {
                                        const sourceLockingScriptBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](input.sourceLockingScript, 'hex');
                                        resultWriter.writeVarIntNum(sourceLockingScriptBytes.length);
                                        resultWriter.write(sourceLockingScriptBytes);
                                    } else {
                                        resultWriter.writeVarIntNum(-1);
                                    }
                                    // unlockingScript
                                    if (input.unlockingScript !== undefined) {
                                        const unlockingScriptBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](input.unlockingScript, 'hex');
                                        resultWriter.writeVarIntNum(unlockingScriptBytes.length);
                                        resultWriter.write(unlockingScriptBytes);
                                    } else {
                                        resultWriter.writeVarIntNum(-1);
                                    }
                                    // inputDescription
                                    const inputDescriptionBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](input.inputDescription, 'utf8');
                                    resultWriter.writeVarIntNum(inputDescriptionBytes.length);
                                    resultWriter.write(inputDescriptionBytes);
                                    // sequenceNumber
                                    resultWriter.writeVarIntNum(input.sequenceNumber);
                                }
                            } else {
                                resultWriter.writeVarIntNum(-1);
                            }
                            // outputs
                            if (action.outputs !== undefined) {
                                resultWriter.writeVarIntNum(action.outputs.length);
                                for (const output of action.outputs){
                                    // outputIndex
                                    resultWriter.writeVarIntNum(output.outputIndex);
                                    // satoshis
                                    resultWriter.writeVarIntNum(output.satoshis);
                                    // lockingScript
                                    if (output.lockingScript !== undefined) {
                                        const lockingScriptBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](output.lockingScript, 'hex');
                                        resultWriter.writeVarIntNum(lockingScriptBytes.length);
                                        resultWriter.write(lockingScriptBytes);
                                    } else {
                                        resultWriter.writeVarIntNum(-1);
                                    }
                                    // spendable
                                    resultWriter.writeInt8(output.spendable ? 1 : 0);
                                    // outputDescription
                                    const outputDescriptionBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](output.outputDescription, 'utf8');
                                    resultWriter.writeVarIntNum(outputDescriptionBytes.length);
                                    resultWriter.write(outputDescriptionBytes);
                                    // basket
                                    if (output.basket !== undefined) {
                                        const basketBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](output.basket, 'utf8');
                                        resultWriter.writeVarIntNum(basketBytes.length);
                                        resultWriter.write(basketBytes);
                                    } else {
                                        resultWriter.writeVarIntNum(-1);
                                    }
                                    // tags
                                    if (output.tags !== undefined) {
                                        resultWriter.writeVarIntNum(output.tags.length);
                                        for (const tag of output.tags){
                                            const tagBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](tag, 'utf8');
                                            resultWriter.writeVarIntNum(tagBytes.length);
                                            resultWriter.write(tagBytes);
                                        }
                                    } else {
                                        resultWriter.writeVarIntNum(-1);
                                    }
                                    // customInstructions
                                    if (output.customInstructions !== undefined) {
                                        const customInstructionsBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](output.customInstructions, 'utf8');
                                        resultWriter.writeVarIntNum(customInstructionsBytes.length);
                                        resultWriter.write(customInstructionsBytes);
                                    } else {
                                        resultWriter.writeVarIntNum(-1);
                                    }
                                }
                            } else {
                                resultWriter.writeVarIntNum(-1);
                            }
                        }
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(resultWriter.toArray());
                        return responseWriter.toArray();
                    }
                case 'internalizeAction':
                    {
                        const args = {};
                        // Read tx
                        const txLength = paramsReader.readVarIntNum();
                        args.tx = paramsReader.read(txLength);
                        // Read outputs
                        const outputsLength = paramsReader.readVarIntNum();
                        args.outputs = [];
                        for(let i = 0; i < outputsLength; i++){
                            const output = {};
                            // outputIndex
                            output.outputIndex = paramsReader.readVarIntNum();
                            // protocol
                            const protocolFlag = paramsReader.readUInt8();
                            if (protocolFlag === 1) {
                                output.protocol = 'wallet payment';
                                output.paymentRemittance = {};
                                // senderIdentityKey
                                const senderIdentityKeyBytes = paramsReader.read(33);
                                output.paymentRemittance.senderIdentityKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](senderIdentityKeyBytes);
                                // derivationPrefix
                                const derivationPrefixLength = paramsReader.readVarIntNum();
                                const derivationPrefixBytes = paramsReader.read(derivationPrefixLength);
                                output.paymentRemittance.derivationPrefix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](derivationPrefixBytes);
                                // derivationSuffix
                                const derivationSuffixLength = paramsReader.readVarIntNum();
                                const derivationSuffixBytes = paramsReader.read(derivationSuffixLength);
                                output.paymentRemittance.derivationSuffix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](derivationSuffixBytes);
                            } else if (protocolFlag === 2) {
                                output.protocol = 'basket insertion';
                                output.insertionRemittance = {};
                                // basket
                                const basketLength = paramsReader.readVarIntNum();
                                const basketBytes = paramsReader.read(basketLength);
                                output.insertionRemittance.basket = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](basketBytes);
                                // customInstructions
                                const customInstructionsLength = paramsReader.readVarIntNum();
                                if (customInstructionsLength >= 0) {
                                    const customInstructionsBytes = paramsReader.read(customInstructionsLength);
                                    output.insertionRemittance.customInstructions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](customInstructionsBytes);
                                }
                                // tags
                                const tagsLength = paramsReader.readVarIntNum();
                                if (tagsLength > 0) {
                                    output.insertionRemittance.tags = [];
                                    for(let j = 0; j < tagsLength; j++){
                                        const tagLength = paramsReader.readVarIntNum();
                                        const tagBytes = paramsReader.read(tagLength);
                                        output.insertionRemittance.tags.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](tagBytes));
                                    }
                                } else {
                                    output.insertionRemittance.tags = [];
                                }
                            }
                            args.outputs.push(output);
                        }
                        const numberOfLabels = paramsReader.readVarIntNum();
                        if (numberOfLabels >= 0) {
                            args.labels = [];
                            for(let i = 0; i < numberOfLabels; i++){
                                const labelLength = paramsReader.readVarIntNum();
                                args.labels.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](paramsReader.read(labelLength)));
                            }
                        }
                        const descriptionLength = paramsReader.readVarIntNum();
                        args.description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](paramsReader.read(descriptionLength));
                        // Deserialize seekPermission
                        const seekPermission = paramsReader.readInt8();
                        if (seekPermission >= 0) {
                            args.seekPermission = seekPermission === 1;
                        } else {
                            args.seekPermission = undefined;
                        }
                        // Call the method
                        await this.wallet.internalizeAction(args, originator);
                        // Return success code and result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        return responseWriter.toArray();
                    }
                case 'listOutputs':
                    {
                        const args = {};
                        // Deserialize basket
                        const basketLength = paramsReader.readVarIntNum();
                        const basketBytes = paramsReader.read(basketLength);
                        args.basket = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](basketBytes);
                        // Deserialize tags
                        const tagsLength = paramsReader.readVarIntNum();
                        if (tagsLength > 0) {
                            args.tags = [];
                            for(let i = 0; i < tagsLength; i++){
                                const tagLength = paramsReader.readVarIntNum();
                                const tagBytes = paramsReader.read(tagLength);
                                args.tags.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](tagBytes));
                            }
                        } else {
                            args.tags = undefined;
                        }
                        // Deserialize tagQueryMode
                        const tagQueryModeFlag = paramsReader.readInt8();
                        if (tagQueryModeFlag === 1) {
                            args.tagQueryMode = 'all';
                        } else if (tagQueryModeFlag === 2) {
                            args.tagQueryMode = 'any';
                        } else {
                            args.tagQueryMode = undefined;
                        }
                        // Deserialize include
                        const includeFlag = paramsReader.readInt8();
                        if (includeFlag === 1) {
                            args.include = 'locking scripts';
                        } else if (includeFlag === 2) {
                            args.include = 'entire transactions';
                        } else {
                            args.include = undefined;
                        }
                        // Deserialize includeCustomInstructions
                        const includeCustomInstructionsFlag = paramsReader.readInt8();
                        if (includeCustomInstructionsFlag === -1) {
                            args.includeCustomInstructions = undefined;
                        } else {
                            args.includeCustomInstructions = includeCustomInstructionsFlag === 1;
                        }
                        // Deserialize includeTags
                        const includeTagsFlag = paramsReader.readInt8();
                        if (includeTagsFlag === -1) {
                            args.includeTags = undefined;
                        } else {
                            args.includeTags = includeTagsFlag === 1;
                        }
                        // Deserialize includeLabels
                        const includeLabelsFlag = paramsReader.readInt8();
                        if (includeLabelsFlag === -1) {
                            args.includeLabels = undefined;
                        } else {
                            args.includeLabels = includeLabelsFlag === 1;
                        }
                        // Deserialize limit
                        const limit = paramsReader.readVarIntNum();
                        if (limit >= 0) {
                            args.limit = limit;
                        } else {
                            args.limit = undefined;
                        }
                        // Deserialize offset
                        const offset = paramsReader.readVarIntNum();
                        if (offset >= 0) {
                            args.offset = offset;
                        } else {
                            args.offset = undefined;
                        }
                        // Deserialize seekPermission
                        const seekPermission = paramsReader.readInt8();
                        if (seekPermission >= 0) {
                            args.seekPermission = seekPermission === 1;
                        } else {
                            args.seekPermission = undefined;
                        }
                        // Call the method
                        const listOutputsResult = await this.wallet.listOutputs(args, originator);
                        // Serialize the result
                        const resultWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        // totalOutputs
                        resultWriter.writeVarIntNum(listOutputsResult.totalOutputs);
                        // BEEF length and BEEF or -1
                        if (listOutputsResult.BEEF != null) {
                            resultWriter.writeVarIntNum(listOutputsResult.BEEF.length);
                            resultWriter.write(listOutputsResult.BEEF);
                        } else {
                            resultWriter.writeVarIntNum(-1);
                        }
                        // outputs
                        for (const output of listOutputsResult.outputs){
                            // outpoint
                            resultWriter.write(this.encodeOutpoint(output.outpoint));
                            // satoshis
                            resultWriter.writeVarIntNum(output.satoshis);
                            // lockingScript
                            if (output.lockingScript !== undefined) {
                                const lockingScriptBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](output.lockingScript, 'hex');
                                resultWriter.writeVarIntNum(lockingScriptBytes.length);
                                resultWriter.write(lockingScriptBytes);
                            } else {
                                resultWriter.writeVarIntNum(-1);
                            }
                            // customInstructions
                            if (output.customInstructions !== undefined) {
                                const customInstructionsBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](output.customInstructions, 'utf8');
                                resultWriter.writeVarIntNum(customInstructionsBytes.length);
                                resultWriter.write(customInstructionsBytes);
                            } else {
                                resultWriter.writeVarIntNum(-1);
                            }
                            // tags
                            if (output.tags !== undefined) {
                                resultWriter.writeVarIntNum(output.tags.length);
                                for (const tag of output.tags){
                                    const tagBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](tag, 'utf8');
                                    resultWriter.writeVarIntNum(tagBytes.length);
                                    resultWriter.write(tagBytes);
                                }
                            } else {
                                resultWriter.writeVarIntNum(-1);
                            }
                            // labels
                            if (output.labels !== undefined) {
                                resultWriter.writeVarIntNum(output.labels.length);
                                for (const label of output.labels){
                                    const labelBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](label, 'utf8');
                                    resultWriter.writeVarIntNum(labelBytes.length);
                                    resultWriter.write(labelBytes);
                                }
                            } else {
                                resultWriter.writeVarIntNum(-1);
                            }
                        }
                        // Return success code and result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(resultWriter.toArray());
                        return responseWriter.toArray();
                    }
                case 'relinquishOutput':
                    {
                        const args = {};
                        // Deserialize basket
                        const basketLength = paramsReader.readVarIntNum();
                        const basketBytes = paramsReader.read(basketLength);
                        args.basket = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](basketBytes);
                        // Deserialize outpoint
                        args.output = this.decodeOutpoint(paramsReader);
                        // Call the method
                        await this.wallet.relinquishOutput(args, originator);
                        // Return success code and result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        return responseWriter.toArray();
                    }
                case 'getPublicKey':
                    {
                        const args = {};
                        // Deserialize identityKey flag
                        const identityKeyFlag = paramsReader.readUInt8();
                        args.identityKey = identityKeyFlag === 1;
                        if (args.identityKey !== true) {
                            // Deserialize protocolID
                            args.protocolID = this.decodeProtocolID(paramsReader);
                            // Deserialize keyID
                            args.keyID = this.decodeString(paramsReader);
                            // Deserialize counterparty
                            args.counterparty = this.decodeCounterparty(paramsReader);
                            // Deserialize privilege parameters
                            const privilegedFlag = paramsReader.readInt8();
                            if (privilegedFlag === -1) {
                                args.privileged = undefined;
                            } else {
                                args.privileged = privilegedFlag === 1;
                            }
                            const privilegedReasonLength = paramsReader.readInt8();
                            if (privilegedReasonLength !== -1) {
                                const privilegedReasonBytes = paramsReader.read(privilegedReasonLength);
                                args.privilegedReason = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](privilegedReasonBytes);
                            } else {
                                args.privilegedReason = undefined;
                            }
                            // Deserialize forSelf
                            const forSelfFlag = paramsReader.readInt8();
                            if (forSelfFlag === -1) {
                                args.forSelf = undefined;
                            } else {
                                args.forSelf = forSelfFlag === 1;
                            }
                        } else {
                            // Deserialize privilege parameters
                            const privilegedFlag = paramsReader.readInt8();
                            if (privilegedFlag === -1) {
                                args.privileged = undefined;
                            } else {
                                args.privileged = privilegedFlag === 1;
                            }
                            const privilegedReasonLength = paramsReader.readInt8();
                            if (privilegedReasonLength !== -1) {
                                const privilegedReasonBytes = paramsReader.read(privilegedReasonLength);
                                args.privilegedReason = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](privilegedReasonBytes);
                            } else {
                                args.privilegedReason = undefined;
                            }
                        }
                        // Deserialize seekPermission
                        const seekPermission = paramsReader.readInt8();
                        if (seekPermission >= 0) {
                            args.seekPermission = seekPermission === 1;
                        } else {
                            args.seekPermission = undefined;
                        }
                        // Call the method
                        const getPublicKeyResult = await this.wallet.getPublicKey(args, originator);
                        // Serialize the result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        const publicKeyBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](getPublicKeyResult.publicKey, 'hex');
                        responseWriter.write(publicKeyBytes);
                        return responseWriter.toArray();
                    }
                case 'encrypt':
                    {
                        const args = this.decodeKeyRelatedParams(paramsReader);
                        // Deserialize plaintext
                        const plaintextLength = paramsReader.readVarIntNum();
                        args.plaintext = paramsReader.read(plaintextLength);
                        // Deserialize seekPermission
                        const seekPermission = paramsReader.readInt8();
                        if (seekPermission >= 0) {
                            args.seekPermission = seekPermission === 1;
                        } else {
                            args.seekPermission = undefined;
                        }
                        // Call the method
                        const encryptResult = await this.wallet.encrypt(args, originator);
                        // Serialize the result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(encryptResult.ciphertext);
                        return responseWriter.toArray();
                    }
                case 'decrypt':
                    {
                        const args = this.decodeKeyRelatedParams(paramsReader);
                        // Deserialize ciphertext
                        const ciphertextLength = paramsReader.readVarIntNum();
                        args.ciphertext = paramsReader.read(ciphertextLength);
                        // Deserialize seekPermission
                        const seekPermission = paramsReader.readInt8();
                        if (seekPermission >= 0) {
                            args.seekPermission = seekPermission === 1;
                        } else {
                            args.seekPermission = undefined;
                        }
                        // Call the method
                        const decryptResult = await this.wallet.decrypt(args, originator);
                        // Serialize the result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(decryptResult.plaintext);
                        return responseWriter.toArray();
                    }
                case 'createHmac':
                    {
                        const args = this.decodeKeyRelatedParams(paramsReader);
                        // Deserialize data
                        const dataLength = paramsReader.readVarIntNum();
                        args.data = paramsReader.read(dataLength);
                        // Deserialize seekPermission
                        const seekPermission = paramsReader.readInt8();
                        if (seekPermission >= 0) {
                            args.seekPermission = seekPermission === 1;
                        } else {
                            args.seekPermission = undefined;
                        }
                        // Call the method
                        const createHmacResult = await this.wallet.createHmac(args, originator);
                        // Serialize the result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(createHmacResult.hmac);
                        return responseWriter.toArray();
                    }
                case 'verifyHmac':
                    {
                        const args = this.decodeKeyRelatedParams(paramsReader);
                        // Deserialize hmac
                        args.hmac = paramsReader.read(32);
                        // Deserialize data
                        const dataLength = paramsReader.readVarIntNum();
                        args.data = paramsReader.read(dataLength);
                        // Deserialize seekPermission
                        const seekPermission = paramsReader.readInt8();
                        if (seekPermission >= 0) {
                            args.seekPermission = seekPermission === 1;
                        } else {
                            args.seekPermission = undefined;
                        }
                        // Call the method
                        await this.wallet.verifyHmac(args, originator);
                        // Serialize the result (no data to return)
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        return responseWriter.toArray();
                    }
                case 'createSignature':
                    {
                        const args = this.decodeKeyRelatedParams(paramsReader);
                        // Deserialize data or hashToDirectlySign
                        const dataTypeFlag = paramsReader.readUInt8();
                        if (dataTypeFlag === 1) {
                            const dataLength = paramsReader.readVarIntNum();
                            args.data = paramsReader.read(dataLength);
                        } else if (dataTypeFlag === 2) {
                            args.hashToDirectlySign = paramsReader.read(32);
                        }
                        // Deserialize seekPermission
                        const seekPermission = paramsReader.readInt8();
                        if (seekPermission >= 0) {
                            args.seekPermission = seekPermission === 1;
                        } else {
                            args.seekPermission = undefined;
                        }
                        // Call the method
                        const createSignatureResult = await this.wallet.createSignature(args, originator);
                        // Serialize the result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(createSignatureResult.signature);
                        return responseWriter.toArray();
                    }
                case 'verifySignature':
                    {
                        const args = this.decodeKeyRelatedParams(paramsReader);
                        // Deserialize forSelf
                        const forSelfFlag = paramsReader.readInt8();
                        if (forSelfFlag === -1) {
                            args.forSelf = undefined;
                        } else {
                            args.forSelf = forSelfFlag === 1;
                        }
                        // Deserialize signature
                        const signatureLength = paramsReader.readVarIntNum();
                        args.signature = paramsReader.read(signatureLength);
                        // Deserialize data or hashToDirectlyVerify
                        const dataTypeFlag = paramsReader.readUInt8();
                        if (dataTypeFlag === 1) {
                            const dataLength = paramsReader.readVarIntNum();
                            args.data = paramsReader.read(dataLength);
                        } else if (dataTypeFlag === 2) {
                            args.hashToDirectlyVerify = paramsReader.read(32);
                        }
                        // Deserialize seekPermission
                        const seekPermission = paramsReader.readInt8();
                        if (seekPermission >= 0) {
                            args.seekPermission = seekPermission === 1;
                        } else {
                            args.seekPermission = undefined;
                        }
                        // Call the method
                        await this.wallet.verifySignature(args, originator);
                        // Serialize the result (no data to return)
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        return responseWriter.toArray();
                    }
                case 'isAuthenticated':
                    {
                        // No parameters to deserialize
                        // Call the method
                        const isAuthenticatedResult = await this.wallet.isAuthenticated({}, originator);
                        // Serialize the result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.writeUInt8(isAuthenticatedResult.authenticated ? 1 : 0);
                        return responseWriter.toArray();
                    }
                case 'waitForAuthentication':
                    {
                        // No parameters to deserialize
                        // Call the method
                        await this.wallet.waitForAuthentication({}, originator);
                        // Serialize the result (authenticated is always true)
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        return responseWriter.toArray();
                    }
                case 'getHeight':
                    {
                        // No parameters to deserialize
                        // Call the method
                        const getHeightResult = await this.wallet.getHeight({}, originator);
                        // Serialize the result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.writeVarIntNum(getHeightResult.height);
                        return responseWriter.toArray();
                    }
                case 'getHeaderForHeight':
                    {
                        const args = {};
                        // Deserialize height
                        args.height = paramsReader.readVarIntNum();
                        // Call the method
                        const getHeaderResult = await this.wallet.getHeaderForHeight(args, originator);
                        // Serialize the result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        const headerBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](getHeaderResult.header, 'hex');
                        responseWriter.write(headerBytes);
                        return responseWriter.toArray();
                    }
                case 'getNetwork':
                    {
                        // No parameters to deserialize
                        // Call the method
                        const getNetworkResult = await this.wallet.getNetwork({}, originator);
                        // Serialize the result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.writeUInt8(getNetworkResult.network === 'mainnet' ? 0 : 1);
                        return responseWriter.toArray();
                    }
                case 'getVersion':
                    {
                        // No parameters to deserialize
                        // Call the method
                        const getVersionResult = await this.wallet.getVersion({}, originator);
                        // Serialize the result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        const versionBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](getVersionResult.version, 'utf8');
                        responseWriter.write(versionBytes);
                        return responseWriter.toArray();
                    }
                case 'revealCounterpartyKeyLinkage':
                    {
                        const args = {};
                        // Read privileged parameters
                        const privilegedFlag = paramsReader.readInt8();
                        if (privilegedFlag === -1) {
                            args.privileged = undefined;
                        } else {
                            args.privileged = privilegedFlag === 1;
                        }
                        const privilegedReasonLength = paramsReader.readInt8();
                        if (privilegedReasonLength === -1) {
                            args.privilegedReason = undefined;
                        } else {
                            const privilegedReasonBytes = paramsReader.read(privilegedReasonLength);
                            args.privilegedReason = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](privilegedReasonBytes);
                        }
                        // Read counterparty public key
                        const counterpartyBytes = paramsReader.read(33);
                        args.counterparty = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](counterpartyBytes);
                        // Read verifier public key
                        const verifierBytes = paramsReader.read(33);
                        args.verifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](verifierBytes);
                        // Call the method
                        const revealResult = await this.wallet.revealCounterpartyKeyLinkage(args, originator);
                        // Serialize the result
                        const resultWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        // Write prover
                        resultWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](revealResult.prover, 'hex'));
                        // Write verifier
                        resultWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](revealResult.verifier, 'hex'));
                        // Write counterparty
                        resultWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](revealResult.counterparty, 'hex'));
                        // Write revelationTime
                        const revelationTimeBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](revealResult.revelationTime, 'utf8');
                        resultWriter.writeVarIntNum(revelationTimeBytes.length);
                        resultWriter.write(revelationTimeBytes);
                        // Write encryptedLinkage
                        resultWriter.writeVarIntNum(revealResult.encryptedLinkage.length);
                        resultWriter.write(revealResult.encryptedLinkage);
                        // Write encryptedLinkageProof
                        resultWriter.writeVarIntNum(revealResult.encryptedLinkageProof.length);
                        resultWriter.write(revealResult.encryptedLinkageProof);
                        // Return success code and result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(resultWriter.toArray());
                        return responseWriter.toArray();
                    }
                case 'revealSpecificKeyLinkage':
                    {
                        // Deserialize key-related parameters and privileged parameters
                        const args = this.decodeKeyRelatedParams(paramsReader);
                        // Read verifier public key
                        const verifierBytes = paramsReader.read(33);
                        args.verifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](verifierBytes);
                        // Call the method
                        const revealResult = await this.wallet.revealSpecificKeyLinkage(args, originator);
                        // Serialize the result
                        const resultWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        // Write prover
                        resultWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](revealResult.prover, 'hex'));
                        // Write verifier
                        resultWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](revealResult.verifier, 'hex'));
                        // Write counterparty
                        resultWriter.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](revealResult.counterparty, 'hex'));
                        // Write securityLevel
                        resultWriter.writeUInt8(revealResult.protocolID[0]);
                        // Write protocol string
                        const protocolBytesOut = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](revealResult.protocolID[1], 'utf8');
                        resultWriter.writeVarIntNum(protocolBytesOut.length);
                        resultWriter.write(protocolBytesOut);
                        // Write keyID
                        const keyIDBytesOut = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](revealResult.keyID, 'utf8');
                        resultWriter.writeVarIntNum(keyIDBytesOut.length);
                        resultWriter.write(keyIDBytesOut);
                        // Write encryptedLinkage
                        resultWriter.writeVarIntNum(revealResult.encryptedLinkage.length);
                        resultWriter.write(revealResult.encryptedLinkage);
                        // Write encryptedLinkageProof
                        resultWriter.writeVarIntNum(revealResult.encryptedLinkageProof.length);
                        resultWriter.write(revealResult.encryptedLinkageProof);
                        // Write proofType
                        resultWriter.writeUInt8(revealResult.proofType);
                        // Return success code and result
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(resultWriter.toArray());
                        return responseWriter.toArray();
                    }
                case 'acquireCertificate':
                    {
                        const args = {};
                        // Read args.type
                        const typeBytes = paramsReader.read(32);
                        args.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](typeBytes);
                        // args.certifier
                        const certifierBytes = paramsReader.read(33);
                        args.certifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](certifierBytes);
                        // Read fields
                        const fieldsLength = paramsReader.readVarIntNum();
                        args.fields = {};
                        for(let i = 0; i < fieldsLength; i++){
                            const fieldNameLength = paramsReader.readVarIntNum();
                            const fieldNameBytes = paramsReader.read(fieldNameLength);
                            const fieldName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](fieldNameBytes);
                            const fieldValueLength = paramsReader.readVarIntNum();
                            const fieldValueBytes = paramsReader.read(fieldValueLength);
                            const fieldValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](fieldValueBytes);
                            args.fields[fieldName] = fieldValue;
                        }
                        // Read privileged parameters
                        const privilegedFlag = paramsReader.readInt8();
                        if (privilegedFlag === -1) {
                            args.privileged = undefined;
                        } else {
                            args.privileged = privilegedFlag === 1;
                        }
                        const privilegedReasonLength = paramsReader.readInt8();
                        if (privilegedReasonLength === -1) {
                            args.privilegedReason = undefined;
                        } else {
                            const privilegedReasonBytes = paramsReader.read(privilegedReasonLength);
                            args.privilegedReason = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](privilegedReasonBytes);
                        }
                        // Read acquisitionProtocol
                        const acquisitionProtocolFlag = paramsReader.readUInt8();
                        args.acquisitionProtocol = acquisitionProtocolFlag === 1 ? 'direct' : 'issuance';
                        if (args.acquisitionProtocol === 'direct') {
                            // args.serialNumber
                            const serialNumberBytes = paramsReader.read(32);
                            args.serialNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](serialNumberBytes);
                            // args.revocationOutpoint
                            args.revocationOutpoint = this.decodeOutpoint(paramsReader);
                            // args.signature
                            const signatureLength = paramsReader.readVarIntNum();
                            const signatureBytes = paramsReader.read(signatureLength);
                            args.signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](signatureBytes);
                            // args.keyringRevealer
                            const keyringRevealerIdentifier = paramsReader.readUInt8();
                            if (keyringRevealerIdentifier === 11) {
                                args.keyringRevealer = 'certifier';
                            } else {
                                const keyringRevealerBytes = [
                                    keyringRevealerIdentifier
                                ].concat(paramsReader.read(32));
                                args.keyringRevealer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](keyringRevealerBytes);
                            }
                            // args.keyringForSubject
                            const keyringEntriesLength = paramsReader.readVarIntNum();
                            args.keyringForSubject = {};
                            for(let i = 0; i < keyringEntriesLength; i++){
                                const fieldKeyLength = paramsReader.readVarIntNum();
                                const fieldKeyBytes = paramsReader.read(fieldKeyLength);
                                const fieldKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](fieldKeyBytes);
                                const fieldValueLength = paramsReader.readVarIntNum();
                                const fieldValueBytes = paramsReader.read(fieldValueLength);
                                const fieldValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](fieldValueBytes);
                                args.keyringForSubject[fieldKey] = fieldValue;
                            }
                        } else {
                            // args.certifierUrl
                            const certifierUrlLength = paramsReader.readVarIntNum();
                            const certifierUrlBytes = paramsReader.read(certifierUrlLength);
                            args.certifierUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](certifierUrlBytes);
                        }
                        // Call the method
                        const acquireResult = await this.wallet.acquireCertificate(args, originator);
                        // Serialize the certificate (assuming Certificate class is available)
                        const cert = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](acquireResult.type, acquireResult.serialNumber, acquireResult.subject, acquireResult.certifier, acquireResult.revocationOutpoint, acquireResult.fields, acquireResult.signature);
                        const certBin = cert.toBinary();
                        // Return success code and certificate binary
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(certBin);
                        return responseWriter.toArray();
                    }
                case 'listCertificates':
                    {
                        const args = {};
                        // Read certifiers
                        const certifiersLength = paramsReader.readVarIntNum();
                        args.certifiers = [];
                        for(let i = 0; i < certifiersLength; i++){
                            const certifierBytes = paramsReader.read(33);
                            args.certifiers.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](certifierBytes));
                        }
                        // Read types
                        const typesLength = paramsReader.readVarIntNum();
                        args.types = [];
                        for(let i = 0; i < typesLength; i++){
                            const typeBytes = paramsReader.read(32);
                            args.types.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](typeBytes));
                        }
                        // Read limit and offset
                        const limit = paramsReader.readVarIntNum();
                        if (limit >= 0) {
                            args.limit = limit;
                        } else {
                            args.limit = undefined;
                        }
                        const offset = paramsReader.readVarIntNum();
                        if (offset >= 0) {
                            args.offset = offset;
                        } else {
                            args.offset = undefined;
                        }
                        // Read privileged parameters
                        const privilegedFlag = paramsReader.readInt8();
                        if (privilegedFlag === -1) {
                            args.privileged = undefined;
                        } else {
                            args.privileged = privilegedFlag === 1;
                        }
                        const privilegedReasonLength = paramsReader.readInt8();
                        if (privilegedReasonLength === -1) {
                            args.privilegedReason = undefined;
                        } else {
                            const privilegedReasonBytes = paramsReader.read(privilegedReasonLength);
                            args.privilegedReason = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](privilegedReasonBytes);
                        }
                        // Call the method
                        const listResult = await this.wallet.listCertificates(args, originator);
                        // Serialize the result
                        const resultWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        // totalCertificates
                        resultWriter.writeVarIntNum(listResult.totalCertificates);
                        // certificates
                        for (const cert of listResult.certificates){
                            const certificate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](cert.type, cert.serialNumber, cert.subject, cert.certifier, cert.revocationOutpoint, cert.fields, cert.signature);
                            const certBin = certificate.toBinary();
                            // Write certificate binary length and data
                            resultWriter.writeVarIntNum(certBin.length);
                            resultWriter.write(certBin);
                            if (cert.keyring && Object.keys(cert.keyring).length > 0) {
                                resultWriter.writeInt8(1); // Flag indicating keyring is present
                                const keyringEntries = Object.entries(cert.keyring);
                                resultWriter.writeVarIntNum(keyringEntries.length);
                                for (const [fieldName, fieldValue] of keyringEntries){
                                    const fieldNameBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](fieldName, 'utf8');
                                    resultWriter.writeVarIntNum(fieldNameBytes.length);
                                    resultWriter.write(fieldNameBytes);
                                    const fieldValueBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](fieldValue, 'base64');
                                    resultWriter.writeVarIntNum(fieldValueBytes.length);
                                    resultWriter.write(fieldValueBytes);
                                }
                            } else {
                                resultWriter.writeInt8(0); // Flag indicating no keyring
                            }
                            const verifierBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](cert.verifier, 'hex');
                            resultWriter.writeVarIntNum(verifierBytes.length);
                            resultWriter.write(verifierBytes);
                        }
                        // Return the response
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(resultWriter.toArray());
                        return responseWriter.toArray();
                    }
                case 'proveCertificate':
                    {
                        const args = {};
                        // Read certificate
                        const cert = {};
                        // Read type
                        const typeBytes = paramsReader.read(32);
                        cert.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](typeBytes);
                        // Read subject
                        const subjectBytes = paramsReader.read(33);
                        cert.subject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](subjectBytes);
                        // Read serialNumber
                        const serialNumberBytes = paramsReader.read(32);
                        cert.serialNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](serialNumberBytes);
                        // Read certifier
                        const certifierBytes = paramsReader.read(33);
                        cert.certifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](certifierBytes);
                        // Read revocationOutpoint
                        cert.revocationOutpoint = this.decodeOutpoint(paramsReader);
                        // Read signature
                        const signatureLength = paramsReader.readVarIntNum();
                        const signatureBytes = paramsReader.read(signatureLength);
                        cert.signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](signatureBytes);
                        // Read fields
                        const fieldsLength = paramsReader.readVarIntNum();
                        cert.fields = {};
                        for(let i = 0; i < fieldsLength; i++){
                            const fieldNameLength = paramsReader.readVarIntNum();
                            const fieldNameBytes = paramsReader.read(fieldNameLength);
                            const fieldName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](fieldNameBytes);
                            const fieldValueLength = paramsReader.readVarIntNum();
                            const fieldValueBytes = paramsReader.read(fieldValueLength);
                            const fieldValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](fieldValueBytes);
                            cert.fields[fieldName] = fieldValue;
                        }
                        args.certificate = cert;
                        // Read fields to reveal
                        const fieldsToRevealLength = paramsReader.readVarIntNum();
                        args.fieldsToReveal = [];
                        for(let i = 0; i < fieldsToRevealLength; i++){
                            const fieldNameLength = paramsReader.readVarIntNum();
                            const fieldNameBytes = paramsReader.read(fieldNameLength);
                            const fieldName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](fieldNameBytes);
                            args.fieldsToReveal.push(fieldName);
                        }
                        // Read verifier
                        const verifierBytes = paramsReader.read(33);
                        args.verifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](verifierBytes);
                        // Read privileged parameters
                        const privilegedFlag = paramsReader.readInt8();
                        if (privilegedFlag === -1) {
                            args.privileged = undefined;
                        } else {
                            args.privileged = privilegedFlag === 1;
                        }
                        const privilegedReasonLength = paramsReader.readInt8();
                        if (privilegedReasonLength === -1) {
                            args.privilegedReason = undefined;
                        } else {
                            const privilegedReasonBytes = paramsReader.read(privilegedReasonLength);
                            args.privilegedReason = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](privilegedReasonBytes);
                        }
                        // Call the method
                        const proveResult = await this.wallet.proveCertificate(args, originator);
                        // Serialize keyringForVerifier
                        const resultWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        const keyringEntries = Object.entries(proveResult.keyringForVerifier);
                        resultWriter.writeVarIntNum(keyringEntries.length);
                        for (const [fieldName, fieldValue] of keyringEntries){
                            const fieldNameBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](fieldName, 'utf8');
                            resultWriter.writeVarIntNum(fieldNameBytes.length);
                            resultWriter.write(fieldNameBytes);
                            const fieldValueBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](fieldValue, 'base64');
                            resultWriter.writeVarIntNum(fieldValueBytes.length);
                            resultWriter.write(fieldValueBytes);
                        }
                        // Return the response
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(resultWriter.toArray());
                        return responseWriter.toArray();
                    }
                case 'relinquishCertificate':
                    {
                        const args = {};
                        // Read type
                        const typeBytes = paramsReader.read(32);
                        args.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](typeBytes);
                        // Read serialNumber
                        const serialNumberBytes = paramsReader.read(32);
                        args.serialNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"](serialNumberBytes);
                        // Read certifier
                        const certifierBytes = paramsReader.read(33);
                        args.certifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](certifierBytes);
                        // Call the method
                        await this.wallet.relinquishCertificate(args, originator);
                        // Return success code
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        return responseWriter.toArray();
                    }
                case 'discoverByIdentityKey':
                    {
                        const args = {};
                        // Read identityKey
                        const identityKeyBytes = paramsReader.read(33);
                        args.identityKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](identityKeyBytes);
                        // Read limit and offset
                        const limit = paramsReader.readVarIntNum();
                        if (limit >= 0) {
                            args.limit = limit;
                        } else {
                            args.limit = undefined;
                        }
                        const offset = paramsReader.readVarIntNum();
                        if (offset >= 0) {
                            args.offset = offset;
                        } else {
                            args.offset = undefined;
                        }
                        // Deserialize seekPermission
                        const seekPermission = paramsReader.readInt8();
                        if (seekPermission >= 0) {
                            args.seekPermission = seekPermission === 1;
                        } else {
                            args.seekPermission = undefined;
                        }
                        // Call the method
                        const discoverResult = await this.wallet.discoverByIdentityKey(args, originator);
                        // Serialize the result
                        const result = this.serializeDiscoveryResult(discoverResult);
                        // Return the response
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(result);
                        return responseWriter.toArray();
                    }
                case 'discoverByAttributes':
                    {
                        const args = {};
                        // Read attributes
                        const attributesLength = paramsReader.readVarIntNum();
                        args.attributes = {};
                        for(let i = 0; i < attributesLength; i++){
                            const fieldKeyLength = paramsReader.readVarIntNum();
                            const fieldKeyBytes = paramsReader.read(fieldKeyLength);
                            const fieldKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](fieldKeyBytes);
                            const fieldValueLength = paramsReader.readVarIntNum();
                            const fieldValueBytes = paramsReader.read(fieldValueLength);
                            const fieldValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](fieldValueBytes);
                            args.attributes[fieldKey] = fieldValue;
                        }
                        // Read limit and offset
                        const limit = paramsReader.readVarIntNum();
                        if (limit >= 0) {
                            args.limit = limit;
                        } else {
                            args.limit = undefined;
                        }
                        const offset = paramsReader.readVarIntNum();
                        if (offset >= 0) {
                            args.offset = offset;
                        } else {
                            args.offset = undefined;
                        }
                        // Deserialize seekPermission
                        const seekPermission = paramsReader.readInt8();
                        if (seekPermission >= 0) {
                            args.seekPermission = seekPermission === 1;
                        } else {
                            args.seekPermission = undefined;
                        }
                        // Call the method
                        const discoverResult = await this.wallet.discoverByAttributes(args, originator);
                        // Serialize the result
                        const result = this.serializeDiscoveryResult(discoverResult);
                        // Return the response
                        const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
                        responseWriter.writeUInt8(0); // errorByte = 0
                        responseWriter.write(result);
                        return responseWriter.toArray();
                    }
                default:
                    throw new Error(`Method ${callName} not implemented`);
            }
        } catch (err) {
            const responseWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
            responseWriter.writeUInt8(typeof err.code === 'number' ? err.code : 1); // errorCode = 1 (generic error)
            // Serialize the error message
            const errorMessage = typeof err.message === 'string' ? err.message : 'Unknown error';
            const errorMessageBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](errorMessage, 'utf8');
            responseWriter.writeVarIntNum(errorMessageBytes.length);
            responseWriter.write(errorMessageBytes);
            // Serialize the stack trace
            const stackTrace = typeof err.stack === 'string' ? err.stack : '';
            const stackTraceBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](stackTrace, 'utf8');
            responseWriter.writeVarIntNum(stackTraceBytes.length);
            responseWriter.write(stackTraceBytes);
            return responseWriter.toArray();
        }
    }
    decodeProtocolID(reader) {
        const securityLevel = reader.readUInt8();
        const protocolLength = reader.readVarIntNum();
        const protocolBytes = reader.read(protocolLength);
        const protocolString = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](protocolBytes);
        return [
            securityLevel,
            protocolString
        ];
    }
    decodeString(reader) {
        const length = reader.readVarIntNum();
        const bytes = reader.read(length);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](bytes);
    }
    decodeCounterparty(reader) {
        const counterpartyFlag = reader.readUInt8();
        if (counterpartyFlag === 11) {
            return 'self';
        } else if (counterpartyFlag === 12) {
            return 'anyone';
        } else if (counterpartyFlag === 0) {
            return undefined;
        } else {
            const counterpartyRemainingBytes = reader.read(32);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"]([
                counterpartyFlag,
                ...counterpartyRemainingBytes
            ]);
        }
    }
    serializeDiscoveryResult(discoverResult) {
        const resultWriter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        // totalCertificates
        resultWriter.writeVarIntNum(discoverResult.totalCertificates);
        // certificates
        for (const cert of discoverResult.certificates){
            // Serialize certificate binary
            const certificate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](cert.type, cert.serialNumber, cert.subject, cert.certifier, cert.revocationOutpoint, cert.fields, cert.signature);
            const certBin = certificate.toBinary();
            // Write certificate binary length and data
            resultWriter.writeVarIntNum(certBin.length);
            resultWriter.write(certBin);
            // Serialize certifierInfo
            const nameBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](cert.certifierInfo.name, 'utf8');
            resultWriter.writeVarIntNum(nameBytes.length);
            resultWriter.write(nameBytes);
            const iconUrlBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](cert.certifierInfo.iconUrl, 'utf8');
            resultWriter.writeVarIntNum(iconUrlBytes.length);
            resultWriter.write(iconUrlBytes);
            const descriptionBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](cert.certifierInfo.description, 'utf8');
            resultWriter.writeVarIntNum(descriptionBytes.length);
            resultWriter.write(descriptionBytes);
            resultWriter.writeUInt8(cert.certifierInfo.trust);
            // Serialize publiclyRevealedKeyring
            const publicKeyringEntries = Object.entries(cert.publiclyRevealedKeyring);
            resultWriter.writeVarIntNum(publicKeyringEntries.length);
            for (const [fieldName, fieldValue] of publicKeyringEntries){
                const fieldNameBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](fieldName, 'utf8');
                resultWriter.writeVarIntNum(fieldNameBytes.length);
                resultWriter.write(fieldNameBytes);
                const fieldValueBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](fieldValue, 'base64');
                resultWriter.writeVarIntNum(fieldValueBytes.length);
                resultWriter.write(fieldValueBytes);
            }
            // Serialize decryptedFields
            const decryptedFieldEntries = Object.entries(cert.decryptedFields);
            resultWriter.writeVarIntNum(decryptedFieldEntries.length);
            for (const [fieldName, fieldValue] of decryptedFieldEntries){
                const fieldNameBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](fieldName, 'utf8');
                resultWriter.writeVarIntNum(fieldNameBytes.length);
                resultWriter.write(fieldNameBytes);
                const fieldValueBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](fieldValue, 'utf8');
                resultWriter.writeVarIntNum(fieldValueBytes.length);
                resultWriter.write(fieldValueBytes);
            }
        }
        return resultWriter.toArray();
    }
    decodeKeyRelatedParams(paramsReader) {
        const args = {};
        // Read protocolID
        args.protocolID = this.decodeProtocolID(paramsReader);
        // Read keyID
        const keyIDLength = paramsReader.readVarIntNum();
        const keyIDBytes = paramsReader.read(keyIDLength);
        args.keyID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](keyIDBytes);
        // Read counterparty
        args.counterparty = this.decodeCounterparty(paramsReader);
        // Read privileged parameters
        const privilegedFlag = paramsReader.readInt8();
        if (privilegedFlag === -1) {
            args.privileged = undefined;
        } else {
            args.privileged = privilegedFlag === 1;
        }
        const privilegedReasonLength = paramsReader.readInt8();
        if (privilegedReasonLength === -1) {
            args.privilegedReason = undefined;
        } else {
            const privilegedReasonBytes = paramsReader.read(privilegedReasonLength);
            args.privilegedReason = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](privilegedReasonBytes);
        }
        return args;
    }
} //# sourceMappingURL=WalletWireProcessor.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$window$2e$CWI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/window.CWI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$XDM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/XDM.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWire$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/WalletWire.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWireCalls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/WalletWireCalls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWireTransceiver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/WalletWireTransceiver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$WalletWireProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/WalletWireProcessor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$HTTPWalletWire$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/HTTPWalletWire.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$HTTPWalletJSON$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/HTTPWalletJSON.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$ReactNativeWebView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/ReactNativeWebView.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletLoggerInterface.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A console-like interface for logging within wallet operations.
 *
 * Intended to reflect a subset of standard `Console` interface methods used by `Wallet`
 */ __turbopack_context__.s([]);
;
 //# sourceMappingURL=WalletLoggerInterface.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$Wallet$2e$interfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/Wallet.interfaces.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$KeyDeriver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/KeyDeriver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$CachedKeyDeriver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/CachedKeyDeriver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$ProtoWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/ProtoWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletClient.js [app-ssr] (ecmascript)");
// Is this an error? should it be 'walletErrors', the enum not the class?
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletError$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletError.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_REVIEW_ACTIONS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WERR_REVIEW_ACTIONS.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INVALID_PARAMETER$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WERR_INVALID_PARAMETER.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WERR_INSUFFICIENT_FUNDS$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WERR_INSUFFICIENT_FUNDS.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$validationHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/validationHelpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$substrates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/substrates/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletLoggerInterface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletLoggerInterface.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/ProtoWallet.js [app-ssr] (ecmascript) <export default as ProtoWallet>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProtoWallet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$ProtoWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$ProtoWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/ProtoWallet.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/CachedKeyDeriver.js [app-ssr] (ecmascript) <export default as CachedKeyDeriver>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CachedKeyDeriver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$CachedKeyDeriver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$CachedKeyDeriver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/CachedKeyDeriver.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletClient.js [app-ssr] (ecmascript) <export default as WalletClient>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletClient.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=ef5fd_%40bsv_sdk_dist_esm_src_wallet_c0b8f088._.js.map