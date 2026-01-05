(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/fee-models/SatoshisPerKilobyte.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Represents the "satoshis per kilobyte" transaction fee model.
 */ __turbopack_context__.s([
    "default",
    ()=>SatoshisPerKilobyte
]);
class SatoshisPerKilobyte {
    /**
     * @property
     * Denotes the number of satoshis paid per kilobyte of transaction size.
     */ value;
    /**
     * Constructs an instance of the sat/kb fee model.
     *
     * @param {number} value - The number of satoshis per kilobyte to charge as a fee.
     */ constructor(value){
        this.value = value;
    }
    /**
     * Computes the fee for a given transaction.
     *
     * @param tx The transaction for which a fee is to be computed.
     * @returns The fee in satoshis for the transaction, as a BigNumber.
     */ async computeFee(tx) {
        const getVarIntSize = (i)=>{
            if (i > 2 ** 32) {
                return 9;
            } else if (i > 2 ** 16) {
                return 5;
            } else if (i > 253) {
                return 3;
            } else {
                return 1;
            }
        };
        // Compute the (potentially estimated) size of the transaction
        let size = 4; // version
        size += getVarIntSize(tx.inputs.length); // number of inputs
        for(let i = 0; i < tx.inputs.length; i++){
            const input = tx.inputs[i];
            size += 40; // txid, output index, sequence number
            let scriptLength;
            if (typeof input.unlockingScript === 'object') {
                scriptLength = input.unlockingScript.toBinary().length;
            } else if (typeof input.unlockingScriptTemplate === 'object') {
                scriptLength = await input.unlockingScriptTemplate.estimateLength(tx, i);
            } else {
                throw new Error('All inputs must have an unlocking script or an unlocking script template for sat/kb fee computation.');
            }
            size += getVarIntSize(scriptLength); // unlocking script length
            size += scriptLength; // unlocking script
        }
        size += getVarIntSize(tx.outputs.length); // number of outputs
        for (const out of tx.outputs){
            size += 8; // satoshis
            const length = out.lockingScript.toBinary().length;
            size += getVarIntSize(length); // script length
            size += length; // script
        }
        size += 4; // lock time
        // We'll use Math.ceil to ensure the miners get the extra satoshi.
        const fee = Math.ceil(size / 1000 * this.value);
        return fee;
    }
} //# sourceMappingURL=SatoshisPerKilobyte.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/fee-models/LivePolicy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LivePolicy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$fee$2d$models$2f$SatoshisPerKilobyte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/fee-models/SatoshisPerKilobyte.js [app-client] (ecmascript)");
;
class LivePolicy extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$fee$2d$models$2f$SatoshisPerKilobyte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    static ARC_POLICY_URL = 'https://arc.gorillapool.io/v1/policy';
    static instance = null;
    cachedRate = null;
    cacheTimestamp = 0;
    cacheValidityMs;
    /**
     * Constructs an instance of the live policy fee model.
     *
     * @param {number} cacheValidityMs - How long to cache the fee rate in milliseconds (default: 5 minutes)
     */ constructor(cacheValidityMs = 5 * 60 * 1000){
        super(100); // Initialize with dummy value, will be overridden by fetchFeeRate
        this.cacheValidityMs = cacheValidityMs;
    }
    /**
     * Gets the singleton instance of LivePolicy to ensure cache sharing across the application.
     *
     * @param {number} cacheValidityMs - How long to cache the fee rate in milliseconds (default: 5 minutes)
     * @returns The singleton LivePolicy instance
     */ static getInstance(cacheValidityMs = 5 * 60 * 1000) {
        if (!LivePolicy.instance) {
            LivePolicy.instance = new LivePolicy(cacheValidityMs);
        }
        return LivePolicy.instance;
    }
    /**
     * Fetches the current fee rate from ARC GorillaPool API.
     *
     * @returns The current satoshis per kilobyte rate
     */ async fetchFeeRate() {
        const now = Date.now();
        // Return cached rate if still valid
        if (this.cachedRate !== null && now - this.cacheTimestamp < this.cacheValidityMs) {
            return this.cachedRate;
        }
        try {
            const response = await fetch(LivePolicy.ARC_POLICY_URL);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            const response_data = await response.json();
            if (!response_data.policy?.miningFee || typeof response_data.policy.miningFee.satoshis !== 'number' || typeof response_data.policy.miningFee.bytes !== 'number') {
                throw new Error('Invalid policy response format');
            }
            // Convert to satoshis per kilobyte
            const rate = response_data.policy.miningFee.satoshis / response_data.policy.miningFee.bytes * 1000;
            // Cache the result
            this.cachedRate = rate;
            this.cacheTimestamp = now;
            return rate;
        } catch (error) {
            // If we have a cached rate, use it as fallback
            if (this.cachedRate !== null) {
                console.warn('Failed to fetch live fee rate, using cached value:', error);
                return this.cachedRate;
            }
            // Otherwise, use a reasonable default (100 sat/kb)
            console.warn('Failed to fetch live fee rate, using default 100 sat/kb:', error);
            return 100;
        }
    }
    /**
     * Computes the fee for a given transaction using the current live rate.
     * Overrides the parent method to use dynamic rate fetching.
     *
     * @param tx The transaction for which a fee is to be computed.
     * @returns The fee in satoshis for the transaction.
     */ async computeFee(tx) {
        const rate = await this.fetchFeeRate();
        // Update the value property so parent's computeFee uses the live rate
        this.value = rate;
        return super.computeFee(tx);
    }
} //# sourceMappingURL=LivePolicy.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/NodejsHttpClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Adapter for Node Https module to be used as HttpClient
 */ __turbopack_context__.s([
    "NodejsHttpClient",
    ()=>NodejsHttpClient
]);
class NodejsHttpClient {
    https;
    constructor(https){
        this.https = https;
    }
    async request(url, requestOptions) {
        return await new Promise((resolve, reject)=>{
            const req = this.https.request(url, requestOptions, (res)=>{
                let body = '';
                res.on('data', (chunk)=>{
                    body += chunk;
                });
                res.on('end', ()=>{
                    const ok = res.statusCode >= 200 && res.statusCode <= 299;
                    const mediaType = res.headers['content-type'];
                    const data = body !== '' && typeof mediaType === 'string' && mediaType.startsWith('application/json') ? JSON.parse(body) : body;
                    resolve({
                        status: res.statusCode,
                        statusText: res.statusMessage,
                        ok,
                        data
                    });
                });
            });
            req.on('error', (error)=>{
                reject(error);
            });
            if (requestOptions.data !== null && requestOptions.data !== undefined) {
                req.write(JSON.stringify(requestOptions.data));
            }
            req.end();
        });
    }
} //# sourceMappingURL=NodejsHttpClient.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/FetchHttpClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Adapter for Node Https module to be used as HttpClient
 */ __turbopack_context__.s([
    "FetchHttpClient",
    ()=>FetchHttpClient
]);
class FetchHttpClient {
    fetch;
    constructor(fetch){
        this.fetch = fetch;
    }
    async request(url, options) {
        const fetchOptions = {
            method: options.method,
            headers: options.headers,
            body: JSON.stringify(options.data)
        };
        const res = await this.fetch(url, fetchOptions);
        const mediaType = res.headers.get('Content-Type');
        const data = mediaType?.startsWith('application/json') ?? false ? await res.json() : await res.text();
        return {
            ok: res.ok,
            status: res.status,
            statusText: res.statusText,
            data: data
        };
    }
} //# sourceMappingURL=FetchHttpClient.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/DefaultHttpClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultHttpClient",
    ()=>defaultHttpClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$NodejsHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/NodejsHttpClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$FetchHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/FetchHttpClient.js [app-client] (ecmascript)");
;
;
function defaultHttpClient() {
    const noHttpClient = {
        async request (..._) {
            throw new Error('No method available to perform HTTP request');
        }
    };
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && typeof window.fetch === 'function') {
        // Use fetch in a browser environment
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$FetchHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchHttpClient"](window.fetch.bind(window));
    } else if ("TURBOPACK compile-time truthy", 1) {
        // Use Node https module
        // eslint-disable-next-line
        try {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const https = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/https-browserify/index.js [app-client] (ecmascript)");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$NodejsHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodejsHttpClient"](https);
        } catch (e) {
            return noHttpClient;
        }
    } else //TURBOPACK unreachable
    ;
} //# sourceMappingURL=DefaultHttpClient.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/broadcasters/ARC.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ARC
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$DefaultHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/DefaultHttpClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
;
;
;
function defaultDeploymentId() {
    return `ts-sdk-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(16))}`;
}
class ARC {
    URL;
    apiKey;
    deploymentId;
    callbackUrl;
    callbackToken;
    headers;
    httpClient;
    constructor(URL, config){
        this.URL = URL;
        if (typeof config === 'string') {
            this.apiKey = config;
            this.httpClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$DefaultHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultHttpClient"])();
            this.deploymentId = defaultDeploymentId();
            this.callbackToken = undefined;
            this.callbackUrl = undefined;
        } else {
            const configObj = config ?? {};
            const { apiKey, deploymentId, httpClient, callbackToken, callbackUrl, headers } = configObj;
            this.apiKey = apiKey;
            this.httpClient = httpClient ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$DefaultHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultHttpClient"])();
            this.deploymentId = deploymentId ?? defaultDeploymentId();
            this.callbackToken = callbackToken;
            this.callbackUrl = callbackUrl;
            this.headers = headers;
        }
    }
    /**
     * Constructs a dictionary of the default & supplied request headers.
     */ requestHeaders() {
        const headers = {
            'Content-Type': 'application/json',
            'XDeployment-ID': this.deploymentId
        };
        if (this.apiKey != null && this.apiKey !== '') {
            headers.Authorization = `Bearer ${this.apiKey}`;
        }
        if (this.callbackUrl != null && this.callbackUrl !== '') {
            headers['X-CallbackUrl'] = this.callbackUrl;
        }
        if (this.callbackToken != null && this.callbackToken !== '') {
            headers['X-CallbackToken'] = this.callbackToken;
        }
        if (this.headers != null) {
            for(const key in this.headers){
                headers[key] = this.headers[key];
            }
        }
        return headers;
    }
    /**
     * Broadcasts a transaction via ARC.
     *
     * @param {Transaction} tx - The transaction to be broadcasted.
     * @returns {Promise<BroadcastResponse | BroadcastFailure>} A promise that resolves to either a success or failure response.
     */ async broadcast(tx) {
        let rawTx;
        try {
            rawTx = tx.toHexEF();
        } catch (error) {
            if (error.message === 'All inputs must have source transactions when serializing to EF format') {
                rawTx = tx.toHex();
            } else {
                throw error;
            }
        }
        const requestOptions = {
            method: 'POST',
            headers: this.requestHeaders(),
            data: {
                rawTx
            }
        };
        try {
            const response = await this.httpClient.request(`${this.URL}/v1/tx`, requestOptions);
            if (response.ok) {
                const { txid, extraInfo, txStatus, competingTxs } = response.data;
                const broadcastRes = {
                    status: 'success',
                    txid,
                    message: `${txStatus} ${extraInfo}`
                };
                if (competingTxs != null) {
                    broadcastRes.competingTxs = competingTxs;
                }
                return broadcastRes;
            } else {
                const st = typeof response.status;
                const r = {
                    status: 'error',
                    code: st === 'number' || st === 'string' ? response.status.toString() : 'ERR_UNKNOWN',
                    description: 'Unknown error'
                };
                let d = response.data;
                if (typeof d === 'string') {
                    try {
                        d = JSON.parse(response.data);
                    } catch  {
                    // Intentionally left empty
                    }
                }
                if (typeof d === 'object') {
                    if (d !== null) {
                        r.more = d;
                    }
                    if (d != null && typeof d.txid === 'string') {
                        r.txid = d.txid;
                    }
                    if (d != null && 'detail' in d && typeof d.detail === 'string') {
                        r.description = d.detail;
                    }
                }
                return r;
            }
        } catch (error) {
            return {
                status: 'error',
                code: '500',
                description: typeof error.message === 'string' ? error.message : 'Internal Server Error'
            };
        }
    }
    /**
     * Broadcasts multiple transactions via ARC.
     * Handles mixed responses where some transactions succeed and others fail.
     *
     * @param {Transaction[]} txs - Array of transactions to be broadcasted.
     * @returns {Promise<Array<object>>} A promise that resolves to an array of objects.
     */ async broadcastMany(txs) {
        const rawTxs = txs.map((tx)=>{
            try {
                return {
                    rawTx: tx.toHexEF()
                };
            } catch (error) {
                if (error.message === 'All inputs must have source transactions when serializing to EF format') {
                    return {
                        rawTx: tx.toHex()
                    };
                }
                throw error;
            }
        });
        const requestOptions = {
            method: 'POST',
            headers: this.requestHeaders(),
            data: rawTxs
        };
        try {
            const response = await this.httpClient.request(`${this.URL}/v1/txs`, requestOptions);
            return response.data;
        } catch (error) {
            const errorResponse = {
                status: 'error',
                code: '500',
                description: typeof error.message === 'string' ? error.message : 'Internal Server Error'
            };
            return txs.map(()=>errorResponse);
        }
    }
} //# sourceMappingURL=ARC.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/broadcasters/DefaultBroadcaster.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultBroadcaster",
    ()=>defaultBroadcaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$broadcasters$2f$ARC$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/broadcasters/ARC.js [app-client] (ecmascript)");
;
function defaultBroadcaster(isTestnet = false, config = {}) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$broadcasters$2f$ARC$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](isTestnet ? 'https://testnet.arc.gorillapool.io' : 'https://arc.gorillapool.io', config);
} //# sourceMappingURL=DefaultBroadcaster.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/chaintrackers/WhatsOnChain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsOnChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$DefaultHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/DefaultHttpClient.js [app-client] (ecmascript)");
;
class WhatsOnChain {
    network;
    apiKey;
    URL;
    httpClient;
    /**
     * Constructs an instance of the WhatsOnChain ChainTracker.
     *
     * @param {'main' | 'test' | 'stn'} network - The BSV network to use when calling the WhatsOnChain API.
     * @param {WhatsOnChainConfig} config - Configuration options for the WhatsOnChain ChainTracker.
     */ constructor(network = 'main', config = {}){
        const { apiKey, httpClient } = config;
        this.network = network;
        this.URL = `https://api.whatsonchain.com/v1/bsv/${network}`;
        this.httpClient = httpClient ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$DefaultHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultHttpClient"])();
        this.apiKey = apiKey ?? '';
    }
    async isValidRootForHeight(root, height) {
        const requestOptions = {
            method: 'GET',
            headers: this.getHttpHeaders()
        };
        const response = await this.httpClient.request(`${this.URL}/block/${height}/header`, requestOptions);
        if (response.ok) {
            const { merkleroot } = response.data;
            return merkleroot === root;
        } else if (response.status === 404) {
            return false;
        } else {
            throw new Error(`Failed to verify merkleroot for height ${height} because of an error: ${JSON.stringify(response.data)} `);
        }
    }
    async currentHeight() {
        try {
            const requestOptions = {
                method: 'GET',
                headers: this.getHttpHeaders()
            };
            const response = await this.httpClient.request(`${this.URL}/block/headers`, requestOptions);
            if (response.ok) {
                return response.data[0].height;
            } else {
                throw new Error(`Failed to get current height because of an error: ${JSON.stringify(response.data)} `);
            }
        } catch (error) {
            throw new Error(`Failed to get current height because of an error: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
    getHttpHeaders() {
        const headers = {
            Accept: 'application/json'
        };
        if (typeof this.apiKey === 'string' && this.apiKey.trim() !== '') {
            headers.Authorization = this.apiKey;
        }
        return headers;
    }
} //# sourceMappingURL=WhatsOnChain.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/chaintrackers/DefaultChainTracker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultChainTracker",
    ()=>defaultChainTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$chaintrackers$2f$WhatsOnChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/chaintrackers/WhatsOnChain.js [app-client] (ecmascript)");
;
function defaultChainTracker() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$chaintrackers$2f$WhatsOnChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
} //# sourceMappingURL=DefaultChainTracker.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/MerklePath.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MerklePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
;
;
class MerklePath {
    blockHeight;
    path;
    /**
     * Creates a MerklePath instance from a hexadecimal string.
     *
     * @static
     * @param {string} hex - The hexadecimal string representation of the Merkle Path.
     * @returns {MerklePath} - A new MerklePath instance.
     */ static fromHex(hex) {
        return MerklePath.fromBinary((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(hex, 'hex'));
    }
    static fromReader(reader, legalOffsetsOnly = true) {
        const blockHeight = reader.readVarIntNum();
        const treeHeight = reader.readUInt8();
        // Explicitly define the type of path as an array of arrays of leaf objects
        const path = Array(treeHeight).fill(null).map(()=>[]);
        let flags, offset, nLeavesAtThisHeight;
        for(let level = 0; level < treeHeight; level++){
            nLeavesAtThisHeight = reader.readVarIntNum();
            while(nLeavesAtThisHeight > 0){
                offset = reader.readVarIntNum();
                flags = reader.readUInt8();
                const leaf = {
                    offset
                };
                if ((flags & 1) !== 0) {
                    leaf.duplicate = true;
                } else {
                    if ((flags & 2) !== 0) {
                        leaf.txid = true;
                    }
                    leaf.hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(reader.read(32).reverse());
                }
                // Ensure path[level] exists before pushing
                if (!Array.isArray(path[level]) || path[level].length === 0) {
                    path[level] = [];
                }
                path[level].push(leaf);
                nLeavesAtThisHeight--;
            }
            // Sort the array based on the offset property
            path[level].sort((a, b)=>a.offset - b.offset);
        }
        return new MerklePath(blockHeight, path, legalOffsetsOnly);
    }
    /**
     * Creates a MerklePath instance from a binary array.
     *
     * @static
     * @param {number[]} bump - The binary array representation of the Merkle Path.
     * @returns {MerklePath} - A new MerklePath instance.
     */ static fromBinary(bump) {
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reader"](bump);
        return MerklePath.fromReader(reader);
    }
    /**
     *
     * @static fromCoinbaseTxid
     *
     * Creates a MerklePath instance for a coinbase transaction in an empty block.
     * This edge case is difficult to retrieve from standard APIs.
     *
     * @param {string} txid - The coinbase txid.
     * @param {number} height - The height of the block.
     * @returns {MerklePath} - A new MerklePath instance which assumes the tx is in a block with no other transactions.
     */ static fromCoinbaseTxidAndHeight(txid, height) {
        return new MerklePath(height, [
            [
                {
                    offset: 0,
                    hash: txid,
                    txid: true
                }
            ]
        ]);
    }
    constructor(blockHeight, path, legalOffsetsOnly = true){
        this.blockHeight = blockHeight;
        this.path = path;
        // store all of the legal offsets which we expect given the txid indices.
        const legalOffsets = Array(this.path.length).fill(0).map(()=>new Set());
        this.path.forEach((leaves, height)=>{
            if (leaves.length === 0 && height === 0) {
                throw new Error(`Empty level at height: ${height}`);
            }
            const offsetsAtThisHeight = new Set();
            leaves.forEach((leaf)=>{
                if (offsetsAtThisHeight.has(leaf.offset)) {
                    throw new Error(`Duplicate offset: ${leaf.offset}, at height: ${height}`);
                }
                offsetsAtThisHeight.add(leaf.offset);
                if (height === 0) {
                    if (leaf.duplicate !== true) {
                        for(let h = 1; h < this.path.length; h++){
                            legalOffsets[h].add(leaf.offset >> h ^ 1);
                        }
                    }
                } else {
                    if (legalOffsetsOnly && !legalOffsets[height].has(leaf.offset)) {
                        throw new Error(`Invalid offset: ${leaf.offset}, at height: ${height}, with legal offsets: ${Array.from(legalOffsets[height]).join(', ')}`);
                    }
                }
            });
        });
        // every txid must calculate to the same root.
        let root;
        this.path[0].forEach((leaf, idx)=>{
            if (idx === 0) root = this.computeRoot(leaf.hash);
            if (root !== this.computeRoot(leaf.hash)) {
                throw new Error('Mismatched roots');
            }
        });
    }
    /**
     * Converts the MerklePath to a binary array format.
     *
     * @returns {number[]} - The binary array representation of the Merkle Path.
     */ toBinary() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Writer"]();
        writer.writeVarIntNum(this.blockHeight);
        const treeHeight = this.path.length;
        writer.writeUInt8(treeHeight);
        for(let level = 0; level < treeHeight; level++){
            const nLeaves = Object.keys(this.path[level]).length;
            writer.writeVarIntNum(nLeaves);
            for (const leaf of this.path[level]){
                writer.writeVarIntNum(leaf.offset);
                let flags = 0;
                if (leaf?.duplicate === true) {
                    flags |= 1;
                }
                if (leaf?.txid !== undefined && leaf.txid !== null) {
                    flags |= 2;
                }
                writer.writeUInt8(flags);
                if ((flags & 1) === 0) {
                    writer.write((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(leaf.hash, 'hex').reverse());
                }
            }
        }
        return writer.toArray();
    }
    /**
     * Converts the MerklePath to a hexadecimal string format.
     *
     * @returns {string} - The hexadecimal string representation of the Merkle Path.
     */ toHex() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(this.toBinary());
    }
    //
    indexOf(txid) {
        const leaf = this.path[0].find((l)=>l.hash === txid);
        if (leaf === null || leaf === undefined) {
            throw new Error(`Transaction ID ${txid} not found in the Merkle Path`);
        }
        return leaf.offset;
    }
    /**
     * Computes the Merkle root from the provided transaction ID.
     *
     * @param {string} txid - The transaction ID to compute the Merkle root for. If not provided, the root will be computed from an unspecified branch, and not all branches will be validated!
     * @returns {string} - The computed Merkle root as a hexadecimal string.
     * @throws {Error} - If the transaction ID is not part of the Merkle Path.
     */ computeRoot(txid) {
        if (typeof txid !== 'string') {
            const foundLeaf = this.path[0].find((leaf)=>Boolean(leaf?.hash));
            if (foundLeaf === null || foundLeaf === undefined) {
                throw new Error('No valid leaf found in the Merkle Path');
            }
            txid = foundLeaf.hash;
        }
        // Find the index of the txid at the lowest level of the Merkle tree
        if (typeof txid !== 'string') {
            throw new Error('Transaction ID is undefined');
        }
        const index = this.indexOf(txid);
        if (typeof index !== 'number') {
            throw new Error(`This proof does not contain the txid: ${txid ?? 'undefined'}`);
        }
        // Calculate the root using the index as a way to determine which direction to concatenate.
        const hash = (m)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(m, 'hex').reverse()).reverse());
        let workingHash = txid;
        // special case for blocks with only one transaction
        if (this.path.length === 1 && this.path[0].length === 1) return workingHash;
        for(let height = 0; height < this.path.length; height++){
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const leaves = this.path[height];
            const offset = index >> height ^ 1;
            const leaf = this.findOrComputeLeaf(height, offset);
            if (typeof leaf !== 'object') {
                throw new Error(`Missing hash for index ${index} at height ${height}`);
            }
            if (leaf.duplicate === true) {
                workingHash = hash((workingHash ?? '') + (workingHash ?? ''));
            } else if (offset % 2 !== 0) {
                workingHash = hash((leaf.hash ?? '') + (workingHash ?? ''));
            } else {
                workingHash = hash((workingHash ?? '') + (leaf.hash ?? ''));
            }
        }
        return workingHash;
    }
    /**
     * Find leaf with `offset` at `height` or compute from level below, recursively.
     *
     * Does not add computed leaves to path.
     *
     * @param height
     * @param offset
     */ findOrComputeLeaf(height, offset) {
        const hash = (m)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(m, 'hex').reverse()).reverse());
        let leaf = this.path[height].find((l)=>l.offset === offset);
        if (leaf != null) return leaf;
        if (height === 0) return undefined;
        const h = height - 1;
        const l = offset << 1;
        const leaf0 = this.findOrComputeLeaf(h, l);
        if (leaf0 == null || leaf0.hash == null || leaf0.hash === '') return undefined;
        const leaf1 = this.findOrComputeLeaf(h, l + 1);
        if (leaf1 == null) return undefined;
        let workinghash;
        if (leaf1.duplicate === true) {
            workinghash = hash(leaf0.hash + leaf0.hash);
        } else {
            workinghash = hash((leaf1.hash ?? '') + (leaf0.hash ?? ''));
        }
        leaf = {
            offset,
            hash: workinghash
        };
        return leaf;
    }
    /**
     * Verifies if the given transaction ID is part of the Merkle tree at the specified block height.
     *
     * @param {string} txid - The transaction ID to verify.
     * @param {ChainTracker} chainTracker - The ChainTracker instance used to verify the Merkle root.
     * @returns {boolean} - True if the transaction ID is valid within the Merkle Path at the specified block height.
     */ async verify(txid, chainTracker) {
        const root = this.computeRoot(txid);
        if (this.indexOf(txid) === 0) {
            // Coinbase transaction outputs can only be spent once they're 100 blocks deep.
            const height = await chainTracker.currentHeight();
            if (this.blockHeight + 100 < height) {
                return false;
            }
        }
        // Use the chain tracker to determine whether this is a valid merkle root at the given block height
        return await chainTracker.isValidRootForHeight(root, this.blockHeight);
    }
    /**
     * Combines this MerklePath with another to create a compound proof.
     *
     * @param {MerklePath} other - Another MerklePath to combine with this path.
     * @throws {Error} - If the paths have different block heights or roots.
     */ combine(other) {
        if (this.blockHeight !== other.blockHeight) {
            throw new Error('You cannot combine paths which do not have the same block height.');
        }
        const root1 = this.computeRoot();
        const root2 = other.computeRoot();
        if (root1 !== root2) {
            throw new Error('You cannot combine paths which do not have the same root.');
        }
        const combinedPath = [];
        for(let h = 0; h < this.path.length; h++){
            combinedPath.push([]);
            for(let l = 0; l < this.path[h].length; l++){
                combinedPath[h].push(this.path[h][l]);
            }
            for(let l = 0; l < other.path[h].length; l++){
                if (combinedPath[h].find((leaf)=>leaf.offset === other.path[h][l].offset) === undefined) {
                    combinedPath[h].push(other.path[h][l]);
                } else {
                    // Ensure that any elements which appear in both are not downgraded to a non txid.
                    if (other.path[h][l]?.txid !== undefined && other.path[h][l]?.txid !== null) {
                        const target = combinedPath[h].find((leaf)=>leaf.offset === other.path[h][l].offset);
                        if (target !== null && target !== undefined) {
                            target.txid = true;
                        }
                    }
                }
            }
        }
        this.path = combinedPath;
        this.trim();
    }
    /**
     * Remove all internal nodes that are not required by level zero txid nodes.
     * Assumes that at least all required nodes are present.
     * Leaves all levels sorted by increasing offset.
     */ trim() {
        const pushIfNew = (v, a)=>{
            if (a.length === 0 || a.slice(-1)[0] !== v) {
                a.push(v);
            }
        };
        const dropOffsetsFromLevel = (dropOffsets, level)=>{
            for(let i = dropOffsets.length; i >= 0; i--){
                const l = this.path[level].findIndex((n)=>n.offset === dropOffsets[i]);
                if (l >= 0) {
                    this.path[level].splice(l, 1);
                }
            }
        };
        const nextComputedOffsets = (cos)=>{
            const ncos = [];
            for (const o of cos){
                pushIfNew(o >> 1, ncos);
            }
            return ncos;
        };
        let computedOffsets = []; // in next level
        let dropOffsets = [];
        for(let h = 0; h < this.path.length; h++){
            // Sort each level by increasing offset order
            this.path[h].sort((a, b)=>a.offset - b.offset);
        }
        for(let l = 0; l < this.path[0].length; l++){
            const n = this.path[0][l];
            if (n.txid === true) {
                // level 0 must enable computing level 1 for txid nodes
                pushIfNew(n.offset >> 1, computedOffsets);
            } else {
                const isOdd = n.offset % 2 === 1;
                const peer = this.path[0][l + (isOdd ? -1 : 1)];
                if (peer.txid === undefined || peer.txid === null || !peer.txid) {
                    // drop non-txid level 0 nodes without a txid peer
                    pushIfNew(peer.offset, dropOffsets);
                }
            }
        }
        dropOffsetsFromLevel(dropOffsets, 0);
        for(let h = 1; h < this.path.length; h++){
            dropOffsets = computedOffsets;
            computedOffsets = nextComputedOffsets(computedOffsets);
            dropOffsetsFromLevel(dropOffsets, h);
        }
    }
} //# sourceMappingURL=MerklePath.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/BeefTx.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BeefTx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Beef.js [app-client] (ecmascript)");
;
;
;
;
class BeefTx {
    _bumpIndex;
    _tx;
    _rawTx;
    _txid;
    inputTxids = [];
    /**
     * true if `hasProof` or all inputs chain to `hasProof`.
     *
     * Typically set by sorting transactions by proven dependency chains.
     */ isValid = undefined;
    get bumpIndex() {
        return this._bumpIndex;
    }
    set bumpIndex(v) {
        this._bumpIndex = v;
        this.updateInputTxids();
    }
    get hasProof() {
        return this._bumpIndex !== undefined;
    }
    get isTxidOnly() {
        return this._txid !== undefined && this._txid !== null && this._rawTx == null && this._tx == null;
    }
    get txid() {
        if (this._txid !== undefined && this._txid !== null && this._txid !== '') return this._txid;
        if (this._tx != null) {
            this._txid = this._tx.id('hex');
            return this._txid;
        }
        if (this._rawTx != null) {
            this._txid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash256"])(this._rawTx));
            return this._txid;
        }
        throw new Error('Internal');
    }
    get tx() {
        if (this._tx != null) return this._tx;
        if (this._rawTx != null) {
            this._tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromBinary(this._rawTx);
            return this._tx;
        }
        return undefined;
    }
    get rawTx() {
        if (this._rawTx != null) return this._rawTx;
        if (this._tx != null) {
            this._rawTx = this._tx.toBinary();
            return this._rawTx;
        }
        return undefined;
    }
    /**
     * @param tx If string, must be a valid txid. If `number[]` must be a valid serialized transaction.
     * @param bumpIndex If transaction already has a proof in the beef to which it will be added.
     */ constructor(tx, bumpIndex){
        if (typeof tx === 'string') {
            this._txid = tx;
        } else if (Array.isArray(tx)) {
            this._rawTx = tx;
        } else {
            this._tx = tx;
        }
        this.bumpIndex = bumpIndex;
        this.updateInputTxids();
    }
    static fromTx(tx, bumpIndex) {
        return new BeefTx(tx, bumpIndex);
    }
    static fromRawTx(rawTx, bumpIndex) {
        return new BeefTx(rawTx, bumpIndex);
    }
    static fromTxid(txid, bumpIndex) {
        return new BeefTx(txid, bumpIndex);
    }
    updateInputTxids() {
        if (this.hasProof || this.tx == null) {
            // If we have a proof, or don't have a parsed transaction
            this.inputTxids = [];
        } else {
            const inputTxids = {}; // ✅ Explicit object type
            for (const input of this.tx.inputs){
                if (input.sourceTXID !== undefined && input.sourceTXID !== null && input.sourceTXID !== '') {
                    // ✅ Ensure sourceTXID is defined
                    inputTxids[input.sourceTXID] = true;
                }
            }
            this.inputTxids = Object.keys(inputTxids);
        }
    }
    toWriter(writer, version) {
        const writeByte = (bb)=>{
            writer.writeUInt8(bb);
        };
        const writeTxid = ()=>{
            if (this._txid == null) {
                throw new Error('Transaction ID (_txid) is undefined');
            }
            writer.writeReverse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(this._txid, 'hex'));
        };
        const writeTx = ()=>{
            if (this._rawTx != null) {
                writer.write(this._rawTx);
            } else if (this._tx != null) {
                writer.write(this._tx.toUint8Array());
            } else {
                throw new Error('a valid serialized Transaction is expected');
            }
        };
        const writeBumpIndex = ()=>{
            if (this.bumpIndex === undefined) {
                writeByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TX_DATA_FORMAT"].RAWTX); // 0
            } else {
                writeByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TX_DATA_FORMAT"].RAWTX_AND_BUMP_INDEX); // 1
                writer.writeVarIntNum(this.bumpIndex); // the index of the associated bump
            }
        };
        if (version === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEEF_V2"]) {
            if (this.isTxidOnly) {
                writeByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TX_DATA_FORMAT"].TXID_ONLY);
                writeTxid();
            } else if (this.bumpIndex !== undefined) {
                writeByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TX_DATA_FORMAT"].RAWTX_AND_BUMP_INDEX);
                writer.writeVarIntNum(this.bumpIndex);
                writeTx();
            } else {
                writeByte(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TX_DATA_FORMAT"].RAWTX);
                writeTx();
            }
        } else {
            writeTx();
            writeBumpIndex();
        }
    }
    static fromReader(br, version) {
        let data;
        let bumpIndex;
        let beefTx;
        if (version === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEEF_V2"]) {
            // V2
            const format = br.readUInt8();
            if (format === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TX_DATA_FORMAT"].TXID_ONLY) {
                beefTx = BeefTx.fromTxid((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(br.readReverse(32)));
            } else {
                if (format === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TX_DATA_FORMAT"].RAWTX_AND_BUMP_INDEX) {
                    bumpIndex = br.readVarIntNum();
                }
                data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromReader(br);
                beefTx = BeefTx.fromTx(data, bumpIndex);
            }
        } else {
            // V1
            data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromReader(br);
            bumpIndex = br.readUInt8() !== 0 ? br.readVarIntNum() : undefined;
            beefTx = BeefTx.fromTx(data, bumpIndex);
        }
        return beefTx;
    }
} //# sourceMappingURL=BeefTx.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Beef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATOMIC_BEEF",
    ()=>ATOMIC_BEEF,
    "BEEF_V1",
    ()=>BEEF_V1,
    "BEEF_V2",
    ()=>BEEF_V2,
    "Beef",
    ()=>Beef,
    "TX_DATA_FORMAT",
    ()=>TX_DATA_FORMAT,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$MerklePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/MerklePath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$BeefTx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/BeefTx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
;
;
;
;
const BufferCtor = typeof globalThis !== 'undefined' ? globalThis.Buffer : undefined;
const BEEF_V1 = 4022206465; // 0100BEEF in LE order
const BEEF_V2 = 4022206466; // 0200BEEF in LE order
const ATOMIC_BEEF = 0x01010101; // 01010101
var TX_DATA_FORMAT;
(function(TX_DATA_FORMAT) {
    TX_DATA_FORMAT[TX_DATA_FORMAT["RAWTX"] = 0] = "RAWTX";
    TX_DATA_FORMAT[TX_DATA_FORMAT["RAWTX_AND_BUMP_INDEX"] = 1] = "RAWTX_AND_BUMP_INDEX";
    TX_DATA_FORMAT[TX_DATA_FORMAT["TXID_ONLY"] = 2] = "TXID_ONLY";
})(TX_DATA_FORMAT || (TX_DATA_FORMAT = {}));
class Beef {
    bumps = [];
    txs = [];
    version = BEEF_V2;
    atomicTxid = undefined;
    txidIndex = undefined;
    rawBytesCache;
    hexCache;
    needsSort = true;
    constructor(version = BEEF_V2){
        this.version = version;
    }
    invalidateSerializationCaches() {
        this.rawBytesCache = undefined;
        this.hexCache = undefined;
    }
    markMutated(requiresSort = true) {
        this.invalidateSerializationCaches();
        if (requiresSort) {
            this.needsSort = true;
        }
    }
    ensureSerializableState() {
        for (const tx of this.txs){
            void tx.txid;
        }
    }
    ensureSortedForSerialization() {
        if (this.needsSort) {
            this.sortTxs();
        }
    }
    getSerializedBytes() {
        this.ensureSerializableState();
        if (this.rawBytesCache == null) {
            this.ensureSortedForSerialization();
            const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Writer"]();
            this.toWriter(writer);
            this.rawBytesCache = writer.toUint8Array();
        }
        return this.rawBytesCache;
    }
    /**
     * @param txid of `beefTx` to find
     * @returns `BeefTx` in `txs` with `txid`.
     */ findTxid(txid) {
        return this.ensureTxidIndex().get(txid);
    }
    ensureTxidIndex() {
        if (this.txidIndex == null) {
            this.txidIndex = new Map();
            for (const tx of this.txs){
                this.txidIndex.set(tx.txid, tx);
            }
        }
        return this.txidIndex;
    }
    deleteFromIndex(txid) {
        this.txidIndex?.delete(txid);
    }
    addToIndex(tx) {
        this.txidIndex?.set(tx.txid, tx);
    }
    /**
     * Replaces `BeefTx` for this txid with txidOnly.
     *
     * Replacement is done so that a `clone()` can be
     * updated by this method without affecting the
     * original.
     *
     * @param txid
     * @returns undefined if txid is unknown.
     */ makeTxidOnly(txid) {
        const i = this.txs.findIndex((tx)=>tx.txid === txid);
        if (i === -1) return undefined;
        let btx = this.txs[i];
        if (btx.isTxidOnly) {
            return btx;
        }
        this.deleteFromIndex(txid);
        this.txs.splice(i, 1);
        this.markMutated(true);
        btx = this.mergeTxidOnly(txid);
        return btx;
    }
    /**
     * @returns `MerklePath` with level zero hash equal to txid or undefined.
     */ findBump(txid) {
        return this.bumps.find((b)=>b.path[0].some((leaf)=>leaf.hash === txid) // ✅ Ensure boolean return with `.some()`
        );
    }
    /**
     * Finds a Transaction in this `Beef`
     * and adds any missing input SourceTransactions from this `Beef`.
     *
     * The result is suitable for signing.
     *
     * @param txid The id of the target transaction.
     * @returns Transaction with all available input `SourceTransaction`s from this Beef.
     */ findTransactionForSigning(txid) {
        const beefTx = this.findTxid(txid);
        if (beefTx == null || beefTx.tx == null) return undefined; // Ensure beefTx.tx exists before using it
        for (const i of beefTx.tx.inputs){
            if (i.sourceTransaction == null) {
                const itx = this.findTxid((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyNotNull"])(i.sourceTXID, 'sourceTXID must be valid'));
                if (itx != null) {
                    i.sourceTransaction = itx.tx;
                }
            }
        }
        return beefTx.tx;
    }
    /**
     * Builds the proof tree rooted at a specific `Transaction`.
     *
     * To succeed, the Beef must contain all the required transaction and merkle path data.
     *
     * @param txid The id of the target transaction.
     * @returns Transaction with input `SourceTransaction` and `MerklePath` populated from this Beef.
     */ findAtomicTransaction(txid) {
        const beefTx = this.findTxid(txid);
        if (beefTx == null || beefTx.tx == null) return undefined; // Ensure beefTx.tx exists before using it
        const addInputProof = (beef, tx)=>{
            const mp = beef.findBump(tx.id('hex'));
            if (mp != null) {
                tx.merklePath = mp;
            } else {
                for (const i of tx.inputs){
                    if (i.sourceTransaction == null) {
                        const itx = beef.findTxid((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyNotNull"])(i.sourceTXID, 'sourceTXID must be valid'));
                        if (itx != null) {
                            i.sourceTransaction = itx.tx;
                        }
                    }
                    if (i.sourceTransaction != null) {
                        const mp = beef.findBump(i.sourceTransaction.id('hex'));
                        if (mp != null) {
                            i.sourceTransaction.merklePath = mp;
                        } else {
                            addInputProof(beef, i.sourceTransaction);
                        }
                    }
                }
            }
        };
        addInputProof(this, beefTx.tx); // Safe because we checked that beefTx.tx exists
        return beefTx.tx;
    }
    /**
     * Merge a MerklePath that is assumed to be fully valid.
     * @param bump
     * @returns index of merged bump
     */ mergeBump(bump) {
        this.markMutated(false);
        let bumpIndex;
        // If this proof is identical to another one previously added, we use that first. Otherwise, we try to merge it with proofs from the same block.
        for(let i = 0; i < this.bumps.length; i++){
            const b = this.bumps[i];
            if (b === bump) {
                // Literally the same
                return i;
            }
            if (b.blockHeight === bump.blockHeight) {
                // Probably the same...
                const rootA = b.computeRoot();
                const rootB = bump.computeRoot();
                if (rootA === rootB) {
                    // Definitely the same... combine them to save space
                    b.combine(bump);
                    bumpIndex = i;
                    break;
                }
            }
        }
        // if the proof is not yet added, add a new path.
        if (bumpIndex === undefined) {
            bumpIndex = this.bumps.length;
            this.bumps.push(bump);
        }
        // Review if any transactions are proven by this bump
        const b = this.bumps[bumpIndex];
        for (const tx of this.txs){
            const txid = tx.txid;
            if (tx.bumpIndex == null) {
                for (const n of b.path[0]){
                    if (n.hash === txid) {
                        tx.bumpIndex = bumpIndex;
                        n.txid = true;
                        break;
                    }
                }
            }
        }
        return bumpIndex;
    }
    /**
     * Merge a serialized transaction.
     *
     * Checks that a transaction with the same txid hasn't already been merged.
     *
     * Replaces existing transaction with same txid.
     *
     * @param rawTx
     * @param bumpIndex Optional. If a number, must be valid index into bumps array.
     * @returns txid of rawTx
     */ mergeRawTx(rawTx, bumpIndex) {
        this.markMutated(true);
        const newTx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$BeefTx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](rawTx, bumpIndex);
        this.removeExistingTxid(newTx.txid);
        this.txs.push(newTx);
        this.addToIndex(newTx);
        this.tryToValidateBumpIndex(newTx);
        return newTx;
    }
    /**
     * Merge a `Transaction` and any referenced `merklePath` and `sourceTransaction`, recursifely.
     *
     * Replaces existing transaction with same txid.
     *
     * Attempts to match an existing bump to the new transaction.
     *
     * @param tx
     * @returns txid of tx
     */ mergeTransaction(tx) {
        this.markMutated(true);
        const txid = tx.id('hex');
        this.removeExistingTxid(txid);
        let bumpIndex;
        if (tx.merklePath != null) {
            bumpIndex = this.mergeBump(tx.merklePath);
        }
        const newTx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$BeefTx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](tx, bumpIndex);
        this.txs.push(newTx);
        this.addToIndex(newTx);
        this.tryToValidateBumpIndex(newTx);
        bumpIndex = newTx.bumpIndex;
        if (bumpIndex === undefined) {
            for (const input of tx.inputs){
                if (input.sourceTransaction != null) {
                    this.mergeTransaction(input.sourceTransaction);
                }
            }
        }
        return newTx;
    }
    /**
     * Removes an existing transaction from the BEEF, given its TXID
     * @param txid TXID of the transaction to remove
     */ removeExistingTxid(txid) {
        const existingTxIndex = this.txs.findIndex((t)=>t.txid === txid);
        if (existingTxIndex >= 0) {
            this.deleteFromIndex(txid);
            this.txs.splice(existingTxIndex, 1);
            this.markMutated(true);
        }
    }
    mergeTxidOnly(txid) {
        let tx = this.findTxid(txid);
        if (tx == null) {
            tx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$BeefTx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](txid);
            this.txs.push(tx);
            this.addToIndex(tx);
            this.tryToValidateBumpIndex(tx);
            this.markMutated(true);
        }
        return tx;
    }
    mergeBeefTx(btx) {
        let beefTx = this.findTxid(btx.txid);
        if (btx.isTxidOnly && beefTx == null) {
            beefTx = this.mergeTxidOnly(btx.txid);
        } else if (btx._tx != null && (beefTx == null || beefTx.isTxidOnly)) {
            beefTx = this.mergeTransaction(btx._tx);
        } else if (btx._rawTx != null && (beefTx == null || beefTx.isTxidOnly)) {
            beefTx = this.mergeRawTx(btx._rawTx);
        }
        if (beefTx == null) {
            throw new Error(`Failed to merge BeefTx for txid: ${btx.txid}`);
        }
        return beefTx;
    }
    mergeBeef(beef) {
        const b = Array.isArray(beef) ? Beef.fromBinary(beef) : beef;
        for (const bump of b.bumps){
            this.mergeBump(bump);
        }
        for (const tx of b.txs){
            this.mergeBeefTx(tx);
        }
    }
    /**
     * Sorts `txs` and checks structural validity of beef.
     *
     * Does NOT verify merkle roots.
     *
     * Validity requirements:
     * 1. No 'known' txids, unless `allowTxidOnly` is true.
     * 2. All transactions have bumps or their inputs chain back to bumps (or are known).
     * 3. Order of transactions satisfies dependencies before dependents.
     * 4. No transactions with duplicate txids.
     *
     * @param allowTxidOnly optional. If true, transaction txid only is assumed valid
     */ isValid(allowTxidOnly) {
        return this.verifyValid(allowTxidOnly).valid;
    }
    /**
     * Sorts `txs` and confirms validity of transaction data contained in beef
     * by validating structure of this beef and confirming computed merkle roots
     * using `chainTracker`.
     *
     * Validity requirements:
     * 1. No 'known' txids, unless `allowTxidOnly` is true.
     * 2. All transactions have bumps or their inputs chain back to bumps (or are known).
     * 3. Order of transactions satisfies dependencies before dependents.
     * 4. No transactions with duplicate txids.
     *
     * @param chainTracker Used to verify computed merkle path roots for all bump txids.
     * @param allowTxidOnly optional. If true, transaction txid is assumed valid
     */ async verify(chainTracker, allowTxidOnly) {
        const r = this.verifyValid(allowTxidOnly);
        if (!r.valid) return false;
        for (const height of Object.keys(r.roots)){
            const isValid = await chainTracker.isValidRootForHeight(r.roots[height], Number(height));
            if (!isValid) {
                return false;
            }
        }
        return true;
    }
    /**
     * Sorts `txs` and confirms validity of transaction data contained in beef
     * by validating structure of this beef.
     *
     * Returns block heights and merkle root values to be confirmed by a chaintracker.
     *
     * Validity requirements:
     * 1. No 'known' txids, unless `allowTxidOnly` is true.
     * 2. All transactions have bumps or their inputs chain back to bumps (or are known).
     * 3. Order of transactions satisfies dependencies before dependents.
     * 4. No transactions with duplicate txids.
     *
     * @param allowTxidOnly optional. If true, transaction txid is assumed valid
     * @returns {{valid: boolean, roots: Record<number, string>}}
     * `valid` is true iff this Beef is structuraly valid.
     * `roots` is a record where keys are block heights and values are the corresponding merkle roots to be validated.
     */ verifyValid(allowTxidOnly) {
        const r = {
            valid: false,
            roots: {}
        };
        const sr = this.sortTxs();
        if (sr.missingInputs.length > 0 || sr.notValid.length > 0 || sr.txidOnly.length > 0 && allowTxidOnly !== true || sr.withMissingInputs.length > 0) {
            return r;
        }
        // valid txids: only txids if allowed, bump txids, then txids with input's in txids
        const txids = {};
        for (const tx of this.txs){
            if (tx.isTxidOnly) {
                if (allowTxidOnly !== true) return r; // ✅ Explicit check for `true`
                txids[tx.txid] = true;
            }
        }
        const confirmComputedRoot = (b, txid)=>{
            const root = b.computeRoot(txid);
            if (r.roots[b.blockHeight] === undefined || r.roots[b.blockHeight] === '') {
                // accept the root as valid for this block and reuse for subsequent txids
                r.roots[b.blockHeight] = root;
            }
            if (r.roots[b.blockHeight] !== root) {
                return false;
            }
            return true;
        };
        for (const b of this.bumps){
            for (const n of b.path[0]){
                if (n.txid === true && typeof n.hash === 'string' && n.hash.length > 0) {
                    txids[n.hash] = true;
                    // All txid hashes in all bumps must agree on computed merkle path roots
                    if (!confirmComputedRoot(b, n.hash)) {
                        return r;
                    }
                }
            }
        }
        // All txs with a bumpIndex have matching txid leaf at level zero of BUMP.
        for (const t of this.txs){
            if (t.bumpIndex !== undefined) {
                const leaf = this.bumps[t.bumpIndex].path[0].find((l)=>l.hash === t.txid);
                if (leaf == null) {
                    return r;
                }
            }
        }
        for (const t of this.txs){
            // all input txids must be included before they are referenced
            for (const i of t.inputTxids){
                if (!txids[i]) return r;
            }
            txids[t.txid] = true;
        }
        r.valid = true;
        return r;
    }
    /**
     * Serializes this data to `writer`
     * @param writer
     */ toWriter(writer) {
        writer.writeUInt32LE(this.version);
        writer.writeVarIntNum(this.bumps.length);
        for (const b of this.bumps){
            writer.write(b.toBinary());
        }
        writer.writeVarIntNum(this.txs.length);
        for (const tx of this.txs){
            tx.toWriter(writer, this.version);
        }
    }
    /**
     * Returns a binary array representing the serialized BEEF
     * @returns A binary array representing the BEEF
     */ toBinary() {
        return Array.from(this.getSerializedBytes());
    }
    toUint8Array() {
        return this.getSerializedBytes();
    }
    /**
     * Serialize this Beef as AtomicBEEF.
     *
     * `txid` must exist
     *
     * after sorting, if txid is not last txid, creates a clone and removes newer txs
     *
     * @param txid
     * @returns serialized contents of this Beef with AtomicBEEF prefix.
     */ toBinaryAtomic(txid) {
        if (this.needsSort) {
            this.sortTxs();
        }
        const tx = this.findTxid(txid);
        if (tx == null) {
            throw new Error(`${txid} does not exist in this Beef`);
        }
        // If the transaction is not the last one, clone and modify
        const beef = this.txs[this.txs.length - 1] === tx ? this : this.clone();
        if (beef !== this) {
            const i = this.txs.findIndex((t)=>t.txid === txid);
            beef.txs.splice(i + 1);
        }
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Writer"]();
        writer.writeUInt32LE(ATOMIC_BEEF);
        writer.writeReverse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(txid, 'hex'));
        beef.toWriter(writer);
        return writer.toArray();
    }
    /**
     * Returns a hex string representing the serialized BEEF
     * @returns A hex string representing the BEEF
     */ toHex() {
        if (this.hexCache != null) {
            return this.hexCache;
        }
        const bytes = this.getSerializedBytes();
        const hex = BufferCtor != null ? BufferCtor.from(bytes).toString('hex') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(Array.from(bytes));
        this.hexCache = hex;
        return hex;
    }
    static fromReader(br) {
        let version = br.readUInt32LE();
        let atomicTxid;
        if (version === ATOMIC_BEEF) {
            // Skip the txid and re-read the BEEF version
            atomicTxid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(br.readReverse(32));
            version = br.readUInt32LE();
        }
        if (version !== BEEF_V1 && version !== BEEF_V2) {
            throw new Error(`Serialized BEEF must start with ${BEEF_V1} or ${BEEF_V2} but starts with ${version}`);
        }
        const beef = new Beef(version);
        const bumpsLength = br.readVarIntNum();
        for(let i = 0; i < bumpsLength; i++){
            const bump = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$MerklePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromReader(br, false);
            beef.bumps.push(bump);
        }
        const txsLength = br.readVarIntNum();
        for(let i = 0; i < txsLength; i++){
            const beefTx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$BeefTx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromReader(br, version);
            beef.txs.push(beefTx);
        }
        beef.atomicTxid = atomicTxid;
        return beef;
    }
    /**
     * Constructs an instance of the Beef class based on the provided binary array
     * @param bin The binary array from which to construct BEEF
     * @returns An instance of the Beef class constructed from the binary data
     */ static fromBinary(bin) {
        const br = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reader"](bin);
        return Beef.fromReader(br);
    }
    /**
     * Constructs an instance of the Beef class based on the provided string
     * @param s The string value from which to construct BEEF
     * @param enc The encoding of the string value from which BEEF should be constructed
     * @returns An instance of the Beef class constructed from the string
     */ static fromString(s, enc = 'hex') {
        const bin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(s, enc);
        const br = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reader"](bin);
        return Beef.fromReader(br);
    }
    /**
     * Try to validate newTx.bumpIndex by looking for an existing bump
     * that proves newTx.txid
     *
     * @param newTx A new `BeefTx` that has been added to this.txs
     * @returns true if a bump was found, false otherwise
     */ tryToValidateBumpIndex(newTx) {
        if (newTx.bumpIndex !== undefined) {
            return true;
        }
        const txid = newTx.txid;
        for(let i = 0; i < this.bumps.length; i++){
            const j = this.bumps[i].path[0].findIndex((b)=>b.hash === txid);
            if (j >= 0) {
                newTx.bumpIndex = i;
                this.bumps[i].path[0][j].txid = true;
                return true;
            }
        }
        return false;
    }
    /**
     * Sort the `txs` by input txid dependency order:
     * - Oldest Tx Anchored by Path or txid only
     * - Newer Txs depending on Older parents
     * - Newest Tx
     *
     * with proof (MerklePath) last, longest chain of dependencies first
     *
     * @returns `{ missingInputs, notValid, valid, withMissingInputs }`
     */ sortTxs() {
        // Hashtable of valid txids (with proof or all inputs chain to proof)
        const validTxids = {};
        // Hashtable of all transaction txids to transaction
        const txidToTx = {};
        // queue of unsorted transactions ...
        let queue = [];
        // sorted transactions: hasProof to with longest dependency chain
        const result = [];
        const txidOnly = [];
        for (const tx of this.txs){
            txidToTx[tx.txid] = tx;
            tx.isValid = tx.hasProof;
            if (tx.isValid) {
                validTxids[tx.txid] = true;
                result.push(tx);
            } else if (tx.isTxidOnly && tx.inputTxids.length === 0) {
                validTxids[tx.txid] = true;
                txidOnly.push(tx);
            } else {
                queue.push(tx);
            }
        }
        // Hashtable of unknown input txids used to fund transactions without their own proof.
        const missingInputs = {};
        // transactions with one or more missing inputs
        const txsMissingInputs = [];
        const possiblyMissingInputs = queue;
        queue = [];
        // all tx are isValid false, hasProof false.
        // if isTxidOnly then has inputTxids
        for (const tx of possiblyMissingInputs){
            let hasMissingInput = false;
            // For all the unproven transactions,
            // link their inputs that exist in this beef,
            // make a note of missing inputs.
            for (const inputTxid of tx.inputTxids){
                if (txidToTx[inputTxid] === undefined) {
                    missingInputs[inputTxid] = true;
                    hasMissingInput = true;
                }
            }
            if (hasMissingInput) {
                txsMissingInputs.push(tx);
            } else {
                queue.push(tx);
            }
        }
        // As long as we have unsorted transactions...
        while(queue.length > 0){
            const oldQueue = queue;
            queue = [];
            // all tx are isValid false, hasProof false.
            // if isTxidOnly then has inputTxids
            for (const tx of oldQueue){
                if (tx.inputTxids.every((txid)=>validTxids[txid])) {
                    validTxids[tx.txid] = true;
                    result.push(tx);
                } else {
                    queue.push(tx);
                }
            }
            if (oldQueue.length === queue.length) {
                break;
            }
        }
        // transactions that don't have proofs and don't chain to proofs
        const txsNotValid = queue;
        // New order of txs is unsortable (missing inputs or depends on missing inputs), txidOnly, sorted (so newest sorted is last)
        this.txs = txsMissingInputs.concat(txsNotValid).concat(txidOnly).concat(result);
        this.needsSort = false;
        this.invalidateSerializationCaches();
        return {
            missingInputs: Object.keys(missingInputs),
            notValid: txsNotValid.map((tx)=>tx.txid),
            valid: Object.keys(validTxids),
            withMissingInputs: txsMissingInputs.map((tx)=>tx.txid),
            txidOnly: txidOnly.map((tx)=>tx.txid)
        };
    }
    /**
     * @returns a shallow copy of this beef
     */ clone() {
        const c = new Beef();
        c.version = this.version;
        c.bumps = Array.from(this.bumps);
        c.txs = Array.from(this.txs);
        c.txidIndex = undefined;
        c.needsSort = this.needsSort;
        return c;
    }
    /**
     * Ensure that all the txids in `knownTxids` are txidOnly
     * @param knownTxids
     */ trimKnownTxids(knownTxids) {
        let mutated = false;
        for(let i = 0; i < this.txs.length;){
            const tx = this.txs[i];
            if (tx.isTxidOnly && knownTxids.includes(tx.txid)) {
                this.deleteFromIndex(tx.txid);
                this.txs.splice(i, 1);
                mutated = true;
            } else {
                i++;
            }
        }
        // TODO: bumps could be trimmed to eliminate unreferenced proofs.
        if (mutated) {
            this.markMutated(true);
        }
    }
    /**
     * @returns array of transaction txids that either have a proof or whose inputs chain back to a proven transaction.
     */ getValidTxids() {
        const r = this.sortTxs();
        return r.valid;
    }
    /**
     * @returns Summary of `Beef` contents as multi-line string.
     */ toLogString() {
        let log = '';
        log += `BEEF with ${this.bumps.length} BUMPS and ${this.txs.length} Transactions, isValid ${this.isValid().toString()}\n`;
        let i = -1;
        for (const b of this.bumps){
            i++;
            log += `  BUMP ${i}\n    block: ${b.blockHeight}\n    txids: [\n${b.path[0].filter((n)=>n.txid === true) // ✅ Explicitly check if txid is `true`
            .map((n)=>`      '${n.hash ?? ''}'`).join(',\n')}\n    ]\n`;
        }
        i = -1;
        for (const t of this.txs){
            i++;
            log += `  TX ${i}\n    txid: ${t.txid}\n`;
            if (t.bumpIndex !== undefined) {
                log += `    bumpIndex: ${t.bumpIndex}\n`;
            }
            if (t.isTxidOnly) {
                log += '    txidOnly\n';
            } else {
                log += `    rawTx length=${t.rawTx?.length ?? 0}\n`; // ✅ Fix applied here
            }
            if (t.inputTxids.length > 0) {
                log += `    inputs: [\n${t.inputTxids.map((it)=>`      '${it}'`).join(',\n')}\n    ]\n`;
            }
        }
        return log;
    }
    /**
   * In some circumstances it may be helpful for the BUMP MerklePaths to include
   * leaves that can be computed from row zero.
   */ addComputedLeaves() {
        const hash = (m)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(m, 'hex').reverse()).reverse());
        for (const bump of this.bumps){
            for(let row = 1; row < bump.path.length; row++){
                for (const leafL of bump.path[row - 1]){
                    if (typeof leafL.hash === 'string' && (leafL.offset & 1) === 0) {
                        const leafR = bump.path[row - 1].find((l)=>l.offset === leafL.offset + 1);
                        const offsetOnRow = leafL.offset >> 1;
                        if (leafR !== undefined && typeof leafR.hash === 'string' && bump.path[row].every((l)=>l.offset !== offsetOnRow)) {
                            // Computable leaf is missing... add it.
                            bump.path[row].push({
                                offset: offsetOnRow,
                                // String concatenation puts the right leaf on the left of the left leaf hash
                                hash: hash(leafR.hash + leafL.hash)
                            });
                        }
                    }
                }
            }
        }
    }
}
const __TURBOPACK__default__export__ = Beef;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=Beef.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Transaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/UnlockingScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/LockingScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$fee$2d$models$2f$LivePolicy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/fee-models/LivePolicy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Spend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/Spend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$broadcasters$2f$DefaultBroadcaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/broadcasters/DefaultBroadcaster.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$chaintrackers$2f$DefaultChainTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/chaintrackers/DefaultChainTracker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Beef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$P2PKH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/P2PKH.js [app-client] (ecmascript)");
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
const BufferCtor = typeof globalThis !== 'undefined' ? globalThis.Buffer : undefined;
class Transaction {
    version;
    inputs;
    outputs;
    lockTime;
    metadata;
    merklePath;
    cachedHash;
    rawBytesCache;
    hexCache;
    // Recursive function for adding merkle proofs or input transactions
    static addPathOrInputs(obj, transactions, BUMPs) {
        if (typeof obj.pathIndex === 'number') {
            const path = BUMPs[obj.pathIndex];
            if (typeof path !== 'object') {
                throw new Error('Invalid merkle path index found in BEEF!');
            }
            obj.tx.merklePath = path;
        } else {
            for (const input of obj.tx.inputs){
                if (input.sourceTXID === undefined) {
                    throw new Error('Input sourceTXID is undefined');
                }
                const sourceObj = transactions[input.sourceTXID];
                if (typeof sourceObj !== 'object') {
                    throw new Error(`Reference to unknown TXID in BEEF: ${input.sourceTXID ?? 'undefined'}`);
                }
                input.sourceTransaction = sourceObj.tx;
                this.addPathOrInputs(sourceObj, transactions, BUMPs);
            }
        }
    }
    /**
     * Creates a new transaction, linked to its inputs and their associated merkle paths, from a BEEF V1, V2 or Atomic.
     * Optionally, you can provide a specific TXID to retrieve a particular transaction from the BEEF data.
     * If the TXID is provided but not found in the BEEF data, an error will be thrown.
     * If no TXID is provided, the last transaction in the BEEF data is returned, or the atomic txid.
     * @param beef A binary representation of transactions in BEEF format.
     * @param txid Optional TXID of the transaction to retrieve from the BEEF data.
     * @returns An anchored transaction, linked to its associated inputs populated with merkle paths.
     */ static fromBEEF(beef, txid) {
        const { tx } = Transaction.fromAnyBeef(beef, txid);
        return tx;
    }
    /**
     * Creates a new transaction from an Atomic BEEF (BRC-95) structure.
     * Extracts the subject transaction and supporting merkle path and source transactions contained in the BEEF data
     *
     * @param beef A binary representation of an Atomic BEEF structure.
     * @returns The subject transaction, linked to its associated inputs populated with merkle paths.
     */ static fromAtomicBEEF(beef) {
        const { tx, txid, beef: b } = Transaction.fromAnyBeef(beef);
        if (txid !== b.atomicTxid) {
            if (b.atomicTxid != null) {
                throw new Error(`Transaction with TXID ${b.atomicTxid} not found in BEEF data.`);
            } else {
                throw new Error('beef must conform to BRC-95 and must contain the subject txid.');
            }
        }
        return tx;
    }
    static fromAnyBeef(beef, txid) {
        const b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Beef"].fromBinary(beef);
        if (b.txs.length < 1) {
            throw new Error('beef must include at least one transaction.');
        }
        const target = txid ?? b.atomicTxid ?? b.txs.slice(-1)[0].txid;
        const tx = b.findAtomicTransaction(target);
        if (tx == null) {
            if (txid != null) {
                throw new Error(`Transaction with TXID ${target} not found in BEEF data.`);
            } else {
                throw new Error('beef does not contain transaction for atomic txid.');
            }
        }
        return {
            tx,
            beef: b,
            txid: target
        };
    }
    /**
     * Creates a new transaction, linked to its inputs and their associated merkle paths, from a EF (BRC-30) structure.
     * @param ef A binary representation of a transaction in EF format.
     * @returns An extended transaction, linked to its associated inputs by locking script and satoshis amounts only.
     */ static fromEF(ef) {
        const br = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reader"](ef);
        const version = br.readUInt32LE();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(br.read(6)) !== '0000000000ef') {
            throw new Error('Invalid EF marker');
        }
        const inputsLength = br.readVarIntNum();
        const inputs = [];
        for(let i = 0; i < inputsLength; i++){
            const sourceTXID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(br.readReverse(32));
            const sourceOutputIndex = br.readUInt32LE();
            const scriptLength = br.readVarIntNum();
            const scriptBin = br.read(scriptLength);
            const unlockingScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromBinary(scriptBin);
            const sequence = br.readUInt32LE();
            const satoshis = br.readUInt64LEBn().toNumber();
            const lockingScriptLength = br.readVarIntNum();
            const lockingScriptBin = br.read(lockingScriptLength);
            const lockingScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromBinary(lockingScriptBin);
            const sourceTransaction = new Transaction(undefined, [], [], undefined);
            sourceTransaction.outputs = Array(sourceOutputIndex + 1).fill(null);
            sourceTransaction.outputs[sourceOutputIndex] = {
                satoshis,
                lockingScript
            };
            inputs.push({
                sourceTransaction,
                sourceTXID,
                sourceOutputIndex,
                unlockingScript,
                sequence
            });
        }
        const outputsLength = br.readVarIntNum();
        const outputs = [];
        for(let i = 0; i < outputsLength; i++){
            const satoshis = br.readUInt64LEBn().toNumber();
            const scriptLength = br.readVarIntNum();
            const scriptBin = br.read(scriptLength);
            const lockingScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromBinary(scriptBin);
            outputs.push({
                satoshis,
                lockingScript
            });
        }
        const lockTime = br.readUInt32LE();
        return new Transaction(version, inputs, outputs, lockTime);
    }
    /**
     * Since the validation of blockchain data is atomically transaction data validation,
     * any application seeking to validate data in output scripts must store the entire transaction as well.
     * Since the transaction data includes the output script data, saving a second copy of potentially
     * large scripts can bloat application storage requirements.
     *
     * This function efficiently parses binary transaction data to determine the offsets and lengths of each script.
     * This supports the efficient retreival of script data from transaction data.
     *
     * @param bin binary transaction data
     * @returns {
     *   inputs: { vin: number, offset: number, length: number }[]
     *   outputs: { vout: number, offset: number, length: number }[]
     * }
     */ static parseScriptOffsets(bin) {
        const br = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reader"](bin);
        const inputs = [];
        const outputs = [];
        br.pos += 4; // version
        const inputsLength = br.readVarIntNum();
        for(let i = 0; i < inputsLength; i++){
            br.pos += 36; // txid and vout
            const scriptLength = br.readVarIntNum();
            inputs.push({
                vin: i,
                offset: br.pos,
                length: scriptLength
            });
            br.pos += scriptLength + 4; // script and sequence
        }
        const outputsLength = br.readVarIntNum();
        for(let i = 0; i < outputsLength; i++){
            br.pos += 8; // satoshis
            const scriptLength = br.readVarIntNum();
            outputs.push({
                vout: i,
                offset: br.pos,
                length: scriptLength
            });
            br.pos += scriptLength;
        }
        return {
            inputs,
            outputs
        };
    }
    static fromReader(br) {
        const version = br.readUInt32LE();
        const inputsLength = br.readVarIntNum();
        const inputs = [];
        for(let i = 0; i < inputsLength; i++){
            const sourceTXID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(br.readReverse(32));
            const sourceOutputIndex = br.readUInt32LE();
            const scriptLength = br.readVarIntNum();
            const scriptBin = br.read(scriptLength);
            const unlockingScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromBinary(scriptBin);
            const sequence = br.readUInt32LE();
            inputs.push({
                sourceTXID,
                sourceOutputIndex,
                unlockingScript,
                sequence
            });
        }
        const outputsLength = br.readVarIntNum();
        const outputs = [];
        for(let i = 0; i < outputsLength; i++){
            const satoshis = br.readUInt64LEBn().toNumber();
            const scriptLength = br.readVarIntNum();
            const scriptBin = br.read(scriptLength);
            const lockingScript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromBinary(scriptBin);
            outputs.push({
                satoshis,
                lockingScript
            });
        }
        const lockTime = br.readUInt32LE();
        return new Transaction(version, inputs, outputs, lockTime);
    }
    /**
     * Creates a Transaction instance from a binary array.
     *
     * @static
     * @param {number[]} bin - The binary array representation of the transaction.
     * @returns {Transaction} - A new Transaction instance.
     */ static fromBinary(bin) {
        const copy = bin.slice();
        const rawBytes = Uint8Array.from(copy);
        const br = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reader"](copy);
        const tx = Transaction.fromReader(br);
        tx.rawBytesCache = rawBytes;
        return tx;
    }
    /**
     * Creates a Transaction instance from a hexadecimal string.
     *
     * @static
     * @param {string} hex - The hexadecimal string representation of the transaction.
     * @returns {Transaction} - A new Transaction instance.
     */ static fromHex(hex) {
        const bin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(hex, 'hex');
        const rawBytes = Uint8Array.from(bin);
        const br = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reader"](bin);
        const tx = Transaction.fromReader(br);
        tx.rawBytesCache = rawBytes;
        tx.hexCache = BufferCtor != null ? BufferCtor.from(rawBytes).toString('hex') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(bin);
        return tx;
    }
    /**
     * Creates a Transaction instance from a hexadecimal string encoded EF.
     *
     * @static
     * @param {string} hex - The hexadecimal string representation of the transaction EF.
     * @returns {Transaction} - A new Transaction instance.
     */ static fromHexEF(hex) {
        return Transaction.fromEF((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(hex, 'hex'));
    }
    /**
     * Creates a Transaction instance from a hexadecimal string encoded BEEF.
     * Optionally, you can provide a specific TXID to retrieve a particular transaction from the BEEF data.
     * If the TXID is provided but not found in the BEEF data, an error will be thrown.
     * If no TXID is provided, the last transaction in the BEEF data is returned.
     *
     * @static
     * @param {string} hex - The hexadecimal string representation of the transaction BEEF.
     * @param {string} [txid] - Optional TXID of the transaction to retrieve from the BEEF data.
     * @returns {Transaction} - A new Transaction instance.
     */ static fromHexBEEF(hex, txid) {
        return Transaction.fromBEEF((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(hex, 'hex'), txid);
    }
    constructor(version = 1, inputs = [], outputs = [], lockTime = 0, metadata = new Map(), merklePath){
        this.version = version;
        this.inputs = inputs;
        this.outputs = outputs;
        this.lockTime = lockTime;
        this.metadata = metadata;
        this.merklePath = merklePath;
    }
    invalidateSerializationCaches() {
        this.cachedHash = undefined;
        this.rawBytesCache = undefined;
        this.hexCache = undefined;
    }
    /**
     * Adds a new input to the transaction.
     *
     * @param {TransactionInput} input - The TransactionInput object to add to the transaction.
     * @throws {Error} - If the input does not have a sourceTXID or sourceTransaction defined.
     */ addInput(input) {
        if (typeof input.sourceTXID === 'undefined' && typeof input.sourceTransaction === 'undefined') {
            throw new Error('A reference to an an input transaction is required. If the input transaction itself cannot be referenced, its TXID must still be provided.');
        }
        // If the input sequence number hasn't been set, the expectation is that it is final.
        if (typeof input.sequence === 'undefined') {
            input.sequence = 0xffffffff;
        }
        this.invalidateSerializationCaches();
        this.inputs.push(input);
    }
    /**
     * Adds a new output to the transaction.
     *
     * @param {TransactionOutput} output - The TransactionOutput object to add to the transaction.
     */ addOutput(output) {
        this.cachedHash = undefined;
        if (output.change !== true) {
            if (typeof output.satoshis === 'undefined') {
                throw new Error('either satoshis must be defined or change must be set to true');
            }
            if (output.satoshis < 0) {
                throw new Error('satoshis must be a positive integer or zero');
            }
        }
        if (output.lockingScript == null) throw new Error('lockingScript must be defined');
        this.outputs.push(output);
    }
    /**
     * Adds a new P2PKH output to the transaction.
     *
     * @param {number[] | string} address - The P2PKH address of the output.
     * @param {number} [satoshis] - The number of satoshis to send to the address - if not provided, the output is considered a change output.
     *
     */ addP2PKHOutput(address, satoshis) {
        const lockingScript = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$P2PKH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]().lock(address);
        if (typeof satoshis === 'undefined') {
            return this.addOutput({
                lockingScript,
                change: true
            });
        }
        this.addOutput({
            lockingScript,
            satoshis
        });
    }
    /**
     * Updates the transaction's metadata.
     *
     * @param {Record<string, any>} metadata - The metadata object to merge into the existing metadata.
     */ updateMetadata(metadata) {
        this.metadata = {
            ...this.metadata,
            ...metadata
        };
    }
    /**
     * Computes fees prior to signing.
     * If no fee model is provided, uses a LivePolicy fee model that fetches current rates from ARC.
     * If fee is a number, the transaction uses that value as fee.
     *
     * @param modelOrFee - The initialized fee model to use or fixed fee for the transaction
     * @param changeDistribution - Specifies how the change should be distributed
     * amongst the change outputs
     *
     */ async fee(modelOrFee = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$fee$2d$models$2f$LivePolicy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getInstance(), changeDistribution = 'equal') {
        this.invalidateSerializationCaches();
        if (typeof modelOrFee === 'number') {
            const sats = modelOrFee;
            modelOrFee = {
                computeFee: async ()=>sats
            };
        }
        const fee = await modelOrFee.computeFee(this);
        const change = this.calculateChange(fee);
        if (change <= 0) {
            this.outputs = this.outputs.filter((output)=>output.change !== true);
            return;
        }
        this.distributeChange(change, changeDistribution);
    }
    calculateChange(fee) {
        let change = 0;
        for (const input of this.inputs){
            if (typeof input.sourceTransaction !== 'object') {
                throw new Error('Source transactions are required for all inputs during fee computation');
            }
            change += input.sourceTransaction.outputs[input.sourceOutputIndex].satoshis ?? 0;
        }
        change -= fee;
        for (const out of this.outputs){
            if (out.change !== true) {
                if (out.satoshis !== undefined) {
                    change -= out.satoshis;
                }
            }
        }
        return change;
    }
    distributeChange(change, changeDistribution) {
        let distributedChange = 0;
        const changeOutputs = this.outputs.filter((out)=>out.change);
        if (changeDistribution === 'random') {
            distributedChange = this.distributeRandomChange(change, changeOutputs);
        } else if (changeDistribution === 'equal') {
            distributedChange = this.distributeEqualChange(change, changeOutputs);
        }
        if (distributedChange < change) {
            const lastOutput = this.outputs[this.outputs.length - 1];
            if (lastOutput.satoshis !== undefined) {
                lastOutput.satoshis += change - distributedChange;
            } else {
                lastOutput.satoshis = change - distributedChange;
            }
        }
    }
    distributeRandomChange(change, changeOutputs) {
        let distributedChange = 0;
        let changeToUse = change;
        const benfordNumbers = Array(changeOutputs.length).fill(1);
        changeToUse -= changeOutputs.length;
        distributedChange += changeOutputs.length;
        for(let i = 0; i < changeOutputs.length - 1; i++){
            const portion = this.benfordNumber(0, changeToUse);
            benfordNumbers[i] = benfordNumbers[i] + portion;
            distributedChange += portion;
            changeToUse -= portion;
        }
        for (const output of this.outputs){
            if (output.change === true) output.satoshis = benfordNumbers.shift();
        }
        return distributedChange;
    }
    distributeEqualChange(change, changeOutputs) {
        let distributedChange = 0;
        const perOutput = Math.floor(change / changeOutputs.length);
        for (const out of changeOutputs){
            distributedChange += perOutput;
            out.satoshis = perOutput;
        }
        return distributedChange;
    }
    benfordNumber(min, max) {
        const d = Math.floor(Math.random() * 9) + 1;
        return Math.floor(min + (max - min) * Math.log10(1 + 1 / d) / Math.log10(10));
    }
    /**
     * Utility method that returns the current fee based on inputs and outputs
     *
     * @returns The current transaction fee
     */ getFee() {
        let totalIn = 0;
        for (const input of this.inputs){
            if (typeof input.sourceTransaction !== 'object') {
                throw new Error('Source transactions or sourceSatoshis are required for all inputs to calculate fee');
            }
            totalIn += input.sourceTransaction.outputs[input.sourceOutputIndex].satoshis ?? 0;
        }
        let totalOut = 0;
        for (const output of this.outputs){
            totalOut += output.satoshis ?? 0;
        }
        return totalIn - totalOut;
    }
    /**
     * Signs a transaction, hydrating all its unlocking scripts based on the provided script templates where they are available.
     */ async sign() {
        this.invalidateSerializationCaches();
        for (const out of this.outputs){
            if (typeof out.satoshis === 'undefined') {
                if (out.change === true) {
                    throw new Error('There are still change outputs with uncomputed amounts. Use the fee() method to compute the change amounts and transaction fees prior to signing.');
                } else {
                    throw new Error('One or more transaction outputs is missing an amount. Ensure all output amounts are provided before signing.');
                }
            }
        }
        const unlockingScripts = await Promise.all(this.inputs.map(async (x, i)=>{
            if (typeof this.inputs[i].unlockingScriptTemplate === 'object') {
                return await this.inputs[i]?.unlockingScriptTemplate?.sign(this, i);
            } else {
                return await Promise.resolve(undefined);
            }
        }));
        for(let i = 0, l = this.inputs.length; i < l; i++){
            if (typeof this.inputs[i].unlockingScriptTemplate === 'object') {
                this.inputs[i].unlockingScript = unlockingScripts[i];
            }
        }
    }
    /**
     * Broadcasts a transaction.
     *
     * @param broadcaster The Broadcaster instance wwhere the transaction will be sent
     * @returns A BroadcastResponse or BroadcastFailure from the Broadcaster
     */ async broadcast(broadcaster = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$broadcasters$2f$DefaultBroadcaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultBroadcaster"])()) {
        return await broadcaster.broadcast(this);
    }
    writeTransactionBody(writer) {
        writer.writeUInt32LE(this.version);
        writer.writeVarIntNum(this.inputs.length);
        for (const i of this.inputs){
            if (typeof i.sourceTXID === 'undefined') {
                if (i.sourceTransaction != null) {
                    writer.write(i.sourceTransaction.hash());
                } else {
                    throw new Error('sourceTransaction is undefined');
                }
            } else {
                writer.writeReverse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(i.sourceTXID, 'hex'));
            }
            writer.writeUInt32LE(i.sourceOutputIndex);
            if (i.unlockingScript == null) {
                throw new Error('unlockingScript is undefined');
            }
            const scriptBin = i.unlockingScript.toUint8Array();
            writer.writeVarIntNum(scriptBin.length);
            writer.write(scriptBin);
            writer.writeUInt32LE(i.sequence ?? 0xffffffff);
        }
        writer.writeVarIntNum(this.outputs.length);
        for (const o of this.outputs){
            writer.writeUInt64LE(o.satoshis ?? 0);
            const scriptBin = o.lockingScript.toUint8Array();
            writer.writeVarIntNum(scriptBin.length);
            writer.write(scriptBin);
        }
        writer.writeUInt32LE(this.lockTime);
    }
    buildSerializedBytes() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Writer"]();
        this.writeTransactionBody(writer);
        return writer.toUint8Array();
    }
    getSerializedBytes() {
        if (this.rawBytesCache == null) {
            this.rawBytesCache = this.buildSerializedBytes();
        }
        return this.rawBytesCache;
    }
    /**
     * Converts the transaction to a binary array format.
     *
     * @returns {number[]} - The binary array representation of the transaction.
     */ toBinary() {
        return Array.from(this.getSerializedBytes());
    }
    toUint8Array() {
        return this.getSerializedBytes();
    }
    /**
     * Converts the transaction to a BRC-30 EF format.
     *
     * @returns {number[]} - The BRC-30 EF representation of the transaction.
     */ toEF() {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Writer"]();
        writer.writeUInt32LE(this.version);
        writer.write([
            0,
            0,
            0,
            0,
            0,
            0xef
        ]);
        writer.writeVarIntNum(this.inputs.length);
        for (const i of this.inputs){
            if (typeof i.sourceTransaction === 'undefined') {
                throw new Error('All inputs must have source transactions when serializing to EF format');
            }
            if (typeof i.sourceTXID === 'undefined') {
                writer.write(i.sourceTransaction.hash());
            } else {
                writer.write((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(i.sourceTXID, 'hex').reverse());
            }
            writer.writeUInt32LE(i.sourceOutputIndex);
            if (i.unlockingScript == null) {
                throw new Error('unlockingScript is undefined');
            }
            const scriptBin = i.unlockingScript.toBinary();
            writer.writeVarIntNum(scriptBin.length);
            writer.write(scriptBin);
            writer.writeUInt32LE(i.sequence ?? 0xffffffff); // default to max sequence
            writer.writeUInt64LE(i.sourceTransaction.outputs[i.sourceOutputIndex].satoshis ?? 0);
            const lockingScriptBin = i.sourceTransaction.outputs[i.sourceOutputIndex].lockingScript.toBinary();
            writer.writeVarIntNum(lockingScriptBin.length);
            writer.write(lockingScriptBin);
        }
        writer.writeVarIntNum(this.outputs.length);
        for (const o of this.outputs){
            writer.writeUInt64LE(o.satoshis ?? 0);
            const scriptBin = o.lockingScript.toBinary();
            writer.writeVarIntNum(scriptBin.length);
            writer.write(scriptBin);
        }
        writer.writeUInt32LE(this.lockTime);
        return writer.toArray();
    }
    /**
     * Converts the transaction to a hexadecimal string EF.
     *
     * @returns {string} - The hexadecimal string representation of the transaction EF.
     */ toHexEF() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(this.toEF());
    }
    /**
     * Converts the transaction to a hexadecimal string format.
     *
     * @returns {string} - The hexadecimal string representation of the transaction.
     */ toHex() {
        if (this.hexCache != null) {
            return this.hexCache;
        }
        const bytes = this.getSerializedBytes();
        const hex = BufferCtor != null ? BufferCtor.from(bytes).toString('hex') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(Array.from(bytes));
        this.hexCache = hex;
        return hex;
    }
    /**
     * Converts the transaction to a hexadecimal string BEEF.
     *
     * @returns {string} - The hexadecimal string representation of the transaction BEEF.
     */ toHexBEEF() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(this.toBEEF());
    }
    /**
     * Converts the transaction to a hexadecimal string Atomic BEEF.
     *
     * @returns {string} - The hexadecimal string representation of the transaction Atomic BEEF.
     */ toHexAtomicBEEF() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(this.toAtomicBEEF());
    }
    /**
     * Calculates the transaction's hash.
     *
     * @param {'hex' | undefined} enc - The encoding to use for the hash. If 'hex', returns a hexadecimal string; otherwise returns a binary array.
     * @returns {string | number[]} - The hash of the transaction in the specified format.
     */ hash(enc) {
        if (this.cachedHash == null) {
            this.cachedHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash256"])(this.getSerializedBytes());
        }
        if (enc === 'hex') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(this.cachedHash);
        }
        return this.cachedHash;
    }
    /**
     * Calculates the transaction's ID.
     *
     * @param {'hex' | undefined} enc - The encoding to use for the ID. If 'hex', returns a hexadecimal string; otherwise returns a binary array.
     * @returns {string | number[]} - The ID of the transaction in the specified format.
     */ id(enc) {
        const id = [
            ...this.hash()
        ];
        id.reverse();
        if (enc === 'hex') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(id);
        }
        return id;
    }
    /**
     * Verifies the legitimacy of the Bitcoin transaction according to the rules of SPV by ensuring all the input transactions link back to valid block headers, the chain of spends for all inputs are valid, and the sum of inputs is not less than the sum of outputs.
     *
     * @param chainTracker - An instance of ChainTracker, a Bitcoin block header tracker. If the value is set to 'scripts only', headers will not be verified. If not provided then the default chain tracker will be used.
     * @param feeModel - An instance of FeeModel, a fee model to use for fee calculation. If not provided then the default fee model will be used.
     * @param memoryLimit - The maximum memory in bytes usage allowed for script evaluation. If not provided then the default memory limit will be used.
     *
     * @returns Whether the transaction is valid according to the rules of SPV.
     *
     * @example tx.verify(new WhatsOnChain(), LivePolicy.getInstance())
     */ async verify(chainTracker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$chaintrackers$2f$DefaultChainTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultChainTracker"])(), feeModel, memoryLimit) {
        const verifiedTxids = new Set();
        const txQueue = [
            this
        ];
        while(txQueue.length > 0){
            const tx = txQueue.shift();
            const txid = tx?.id('hex') ?? '';
            if (txid != null && txid !== '' && verifiedTxids.has(txid)) {
                continue;
            }
            // If the transaction has a valid merkle path, verification is complete.
            if (typeof tx?.merklePath === 'object') {
                if (chainTracker === 'scripts only') {
                    if (txid != null) {
                        verifiedTxids.add(txid);
                    }
                    continue;
                } else {
                    const proofValid = await tx.merklePath.verify(txid, chainTracker);
                    // If the proof is valid, no need to verify inputs.
                    if (proofValid) {
                        verifiedTxids.add(txid);
                        continue;
                    } else {
                        throw new Error(`Invalid merkle path for transaction ${txid}`);
                    }
                }
            }
            // Verify fee if feeModel is provided
            if (typeof feeModel !== 'undefined') {
                if (tx === undefined) {
                    throw new Error('Transaction is undefined');
                }
                const cpTx = Transaction.fromEF(tx.toEF());
                delete cpTx.outputs[0].satoshis;
                cpTx.outputs[0].change = true;
                await cpTx.fee(feeModel);
                if (tx.getFee() < cpTx.getFee()) {
                    throw new Error(`Verification failed because the transaction ${txid} has an insufficient fee and has not been mined.`);
                }
            }
            // Verify each input transaction and evaluate the spend events.
            // Also, keep a total of the input amounts for later.
            let inputTotal = 0;
            if (tx === undefined) {
                throw new Error('Transaction is undefined');
            }
            for(let i = 0; i < tx.inputs.length; i++){
                const input = tx.inputs[i];
                if (typeof input.sourceTransaction !== 'object') {
                    throw new Error(`Verification failed because the input at index ${i} of transaction ${txid} is missing an associated source transaction. This source transaction is required for transaction verification because there is no merkle proof for the transaction spending a UTXO it contains.`);
                }
                if (typeof input.unlockingScript !== 'object') {
                    throw new Error(`Verification failed because the input at index ${i} of transaction ${txid} is missing an associated unlocking script. This script is required for transaction verification because there is no merkle proof for the transaction spending the UTXO.`);
                }
                const sourceOutput = input.sourceTransaction.outputs[input.sourceOutputIndex];
                inputTotal += sourceOutput.satoshis ?? 0;
                const sourceTxid = input.sourceTransaction.id('hex');
                if (!verifiedTxids.has(sourceTxid)) {
                    txQueue.push(input.sourceTransaction);
                }
                const otherInputs = tx.inputs.filter((_, idx)=>idx !== i);
                if (typeof input.sourceTXID === 'undefined') {
                    input.sourceTXID = sourceTxid;
                }
                const spend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Spend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                    sourceTXID: input.sourceTXID,
                    sourceOutputIndex: input.sourceOutputIndex,
                    lockingScript: sourceOutput.lockingScript,
                    sourceSatoshis: sourceOutput.satoshis ?? 0,
                    transactionVersion: tx.version,
                    otherInputs,
                    unlockingScript: input.unlockingScript,
                    inputSequence: input.sequence ?? 0xffffffff,
                    inputIndex: i,
                    outputs: tx.outputs,
                    lockTime: tx.lockTime,
                    memoryLimit
                });
                const spendValid = spend.validate();
                if (!spendValid) {
                    return false;
                }
            }
            // Total the outputs to ensure they don't amount to more than the inputs
            let outputTotal = 0;
            for (const out of tx.outputs){
                if (typeof out.satoshis !== 'number') {
                    throw new Error('Every output must have a defined amount during transaction verification.');
                }
                outputTotal += out.satoshis;
            }
            if (outputTotal > inputTotal) {
                return false;
            }
            verifiedTxids.add(txid);
        }
        return true;
    }
    /**
     * Serializes this transaction, together with its inputs and the respective merkle proofs, into the BEEF (BRC-62) format. This enables efficient verification of its compliance with the rules of SPV.
     *
     * @param allowPartial If true, error will not be thrown if there are any missing sourceTransactions.
     *
     * @returns The serialized BEEF structure
     * @throws Error if there are any missing sourceTransactions unless `allowPartial` is true.
     */ toBEEF(allowPartial) {
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Writer"]();
        writer.writeUInt32LE(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEEF_V1"]);
        const BUMPs = [];
        const bumpIndexByInstance = new Map();
        const bumpIndexByRoot = new Map();
        const txs = [];
        const seenTxids = new Set();
        const getBumpIndex = (merklePath)=>{
            const existingByInstance = bumpIndexByInstance.get(merklePath);
            if (existingByInstance !== undefined) {
                return existingByInstance;
            }
            const key = `${merklePath.blockHeight}:${merklePath.computeRoot()}`;
            const existingByRoot = bumpIndexByRoot.get(key);
            if (existingByRoot !== undefined) {
                BUMPs[existingByRoot].combine(merklePath);
                bumpIndexByInstance.set(merklePath, existingByRoot);
                return existingByRoot;
            }
            const newIndex = BUMPs.length;
            BUMPs.push(merklePath);
            bumpIndexByInstance.set(merklePath, newIndex);
            bumpIndexByRoot.set(key, newIndex);
            return newIndex;
        };
        // Recursive function to add paths and input transactions for a TX
        const addPathsAndInputs = (tx)=>{
            const txid = tx.id('hex');
            if (seenTxids.has(txid)) {
                return;
            }
            const obj = {
                tx
            };
            const merklePath = tx.merklePath;
            const hasProof = typeof merklePath === 'object';
            if (hasProof && merklePath != null) {
                obj.pathIndex = getBumpIndex(merklePath);
            }
            if (!hasProof) {
                for(let i = tx.inputs.length - 1; i >= 0; i--){
                    const input = tx.inputs[i];
                    if (typeof input.sourceTransaction === 'object') {
                        addPathsAndInputs(input.sourceTransaction);
                    } else if (allowPartial === false) {
                        throw new Error('A required source transaction is missing!');
                    }
                }
            }
            seenTxids.add(txid);
            txs.push(obj);
        };
        addPathsAndInputs(this);
        writer.writeVarIntNum(BUMPs.length);
        for (const b of BUMPs){
            writer.write(b.toBinary());
        }
        writer.writeVarIntNum(txs.length);
        for (const t of txs){
            writer.write(t.tx.toBinary());
            if (typeof t.pathIndex === 'number') {
                writer.writeUInt8(1);
                writer.writeVarIntNum(t.pathIndex);
            } else {
                writer.writeUInt8(0);
            }
        }
        return writer.toArray();
    }
    /**
     * Serializes this transaction and its inputs into the Atomic BEEF (BRC-95) format.
     * The Atomic BEEF format starts with a 4-byte prefix `0x01010101`, followed by the TXID of the subject transaction,
     * and then the BEEF data containing only the subject transaction and its dependencies.
     * This format ensures that the BEEF structure is atomic and contains no unrelated transactions.
     *
     * @param allowPartial If true, error will not be thrown if there are any missing sourceTransactions.
     *
     * @returns {number[]} - The serialized Atomic BEEF structure.
     * @throws Error if there are any missing sourceTransactions unless `allowPartial` is true.
     */ toAtomicBEEF(allowPartial) {
        const prefix = [
            1,
            1,
            1,
            1
        ];
        const txHash = this.hash();
        const beefData = this.toBEEF(allowPartial);
        return prefix.concat(txHash, beefData);
    }
} //# sourceMappingURL=Transaction.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Broadcaster.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Convenience type guard for response from `Broadcaster.broadcast`
 */ __turbopack_context__.s([
    "isBroadcastFailure",
    ()=>isBroadcastFailure,
    "isBroadcastResponse",
    ()=>isBroadcastResponse
]);
function isBroadcastResponse(r) {
    return r.status === 'success';
}
function isBroadcastFailure(r) {
    return r.status === 'error';
} //# sourceMappingURL=Broadcaster.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/BeefParty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BeefParty",
    ()=>BeefParty,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Beef.js [app-client] (ecmascript)");
;
class BeefParty extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Beef"] {
    /**
     * keys are party identifiers.
     * values are records of txids with truthy value for which the party already has validity proof.
     */ knownTo = {};
    /**
     *
     * @param parties Optional array of initial unique party identifiers.
     */ constructor(parties){
        super();
        if (parties != null) {
            for (const party of parties){
                this.addParty(party);
            }
        }
    }
    /**
     * @param party
     * @returns `true` if `party` has already been added to this `BeefParty`.
     */ isParty(party) {
        const r = Object.keys(this.knownTo).includes(party);
        return r;
    }
    /**
     * Adds a new unique party identifier to this `BeefParty`.
     * @param party
     */ addParty(party) {
        if (this.isParty(party)) {
            throw new Error(`Party ${party} already exists.`);
        }
        this.knownTo[party] = {};
    }
    /**
     * @param party
     * @returns Array of txids "known" to `party`.
     */ getKnownTxidsForParty(party) {
        const knownTxids = this.knownTo[party];
        if (knownTxids === undefined) {
            throw new Error(`Party ${party} is unknown.`);
        }
        return Object.keys(knownTxids);
    }
    /**
     * @param party
     * @returns trimmed beef of unknown transactions and proofs for `party`
     */ getTrimmedBeefForParty(party) {
        const knownTxids = this.getKnownTxidsForParty(party);
        const prunedBeef = this.clone();
        prunedBeef.trimKnownTxids(knownTxids);
        return prunedBeef;
    }
    /**
     * Make note of additional txids "known" to `party`.
     * @param party unique identifier, added if new.
     * @param knownTxids
     */ addKnownTxidsForParty(party, knownTxids) {
        if (!this.isParty(party)) {
            this.addParty(party);
        }
        const kts = this.knownTo[party];
        for (const txid of knownTxids){
            kts[txid] = true;
            this.mergeTxidOnly(txid);
        }
    }
    /**
     * Merge a `beef` received from a specific `party`.
     *
     * Updates this `BeefParty` to track all the txids
     * corresponding to transactions for which `party`
     * has raw transaction and validity proof data.
     *
     * @param party
     * @param beef
     */ mergeBeefFromParty(party, beef) {
        const b = Array.isArray(beef) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Beef"].fromBinary(beef) : beef;
        const knownTxids = b.getValidTxids();
        this.mergeBeef(b);
        this.addKnownTxidsForParty(party, knownTxids);
    }
}
const __TURBOPACK__default__export__ = BeefParty;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=BeefParty.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$MerklePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/MerklePath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Broadcaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Broadcaster.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$BeefTx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/BeefTx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Beef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$BeefParty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/BeefParty.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/fee-models/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$fee$2d$models$2f$SatoshisPerKilobyte$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/fee-models/SatoshisPerKilobyte.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$fee$2d$models$2f$LivePolicy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/fee-models/LivePolicy.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/broadcasters/WhatsOnChainBroadcaster.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsOnChainBroadcaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$DefaultHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/DefaultHttpClient.js [app-client] (ecmascript)");
;
class WhatsOnChainBroadcaster {
    network;
    URL;
    httpClient;
    /**
     * Constructs an instance of the WhatsOnChain broadcaster.
     *
     * @param {'main' | 'test' | 'stn'} network - The BSV network to use when calling the WhatsOnChain API.
     * @param {HttpClient} httpClient - The HTTP client used to make requests to the API.
     */ constructor(network = 'main', httpClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$DefaultHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultHttpClient"])()){
        this.network = network;
        this.URL = `https://api.whatsonchain.com/v1/bsv/${network}/tx/raw`;
        this.httpClient = httpClient;
    }
    /**
     * Broadcasts a transaction via WhatsOnChain.
     *
     * @param {Transaction} tx - The transaction to be broadcasted.
     * @returns {Promise<BroadcastResponse | BroadcastFailure>} A promise that resolves to either a success or failure response.
     */ async broadcast(tx) {
        const rawTx = tx.toHex();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'text/plain'
            },
            data: {
                txhex: rawTx
            }
        };
        try {
            const response = await this.httpClient.request(this.URL, requestOptions);
            if (response.ok) {
                const txid = response.data;
                return {
                    status: 'success',
                    txid,
                    message: 'broadcast successful'
                };
            } else {
                return {
                    status: 'error',
                    code: response.status.toString() ?? 'ERR_UNKNOWN',
                    description: response.data ?? 'Unknown error'
                };
            }
        } catch (error) {
            return {
                status: 'error',
                code: '500',
                description: typeof error.message === 'string' ? error.message : 'Internal Server Error'
            };
        }
    }
} //# sourceMappingURL=WhatsOnChainBroadcaster.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/BinaryFetchClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Adapter for Node Https module to be used as HttpClient
 */ __turbopack_context__.s([
    "BinaryFetchClient",
    ()=>BinaryFetchClient,
    "BinaryNodejsHttpClient",
    ()=>BinaryNodejsHttpClient,
    "binaryHttpClient",
    ()=>binaryHttpClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
class BinaryNodejsHttpClient {
    https;
    constructor(https){
        this.https = https;
    }
    async request(url, requestOptions) {
        return await new Promise((resolve, reject)=>{
            const req = this.https.request(url, requestOptions, (res)=>{
                let body = '';
                res.on('data', (chunk)=>{
                    body += chunk;
                });
                res.on('end', ()=>{
                    const ok = res.statusCode >= 200 && res.statusCode <= 299;
                    const mediaType = res.headers['content-type'];
                    const data = body !== '' && typeof mediaType === 'string' && mediaType.startsWith('application/json') ? JSON.parse(body) : body;
                    resolve({
                        status: res.statusCode,
                        statusText: res.statusMessage,
                        ok,
                        data
                    });
                });
            });
            req.on('error', (error)=>{
                reject(error);
            });
            if (requestOptions.data !== null && requestOptions.data !== undefined) {
                req.write(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(requestOptions.data));
            }
            req.end();
        });
    }
}
class BinaryFetchClient {
    fetch;
    constructor(fetch){
        this.fetch = fetch;
    }
    async request(url, options) {
        const fetchOptions = {
            method: options.method,
            headers: options.headers,
            body: options.data
        };
        const res = await this.fetch(url, fetchOptions);
        const data = await res.text();
        return {
            ok: res.ok,
            status: res.status,
            statusText: res.statusText,
            data: data
        };
    }
}
function binaryHttpClient() {
    const noHttpClient = {
        async request (..._) {
            throw new Error('No method available to perform HTTP request');
        }
    };
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && typeof window.fetch === 'function') {
        // Use fetch in a browser environment
        return new BinaryFetchClient(window.fetch.bind(window));
    } else if ("TURBOPACK compile-time truthy", 1) {
        // Use Node https module
        // eslint-disable-next-line
        try {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const https = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/https-browserify/index.js [app-client] (ecmascript)");
            return new BinaryNodejsHttpClient(https);
        } catch (e) {
            return noHttpClient;
        }
    } else //TURBOPACK unreachable
    ;
} //# sourceMappingURL=BinaryFetchClient.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$DefaultHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/DefaultHttpClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$BinaryFetchClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/BinaryFetchClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$NodejsHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/NodejsHttpClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$FetchHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/FetchHttpClient.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/broadcasters/Teranode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Teranode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$BinaryFetchClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/BinaryFetchClient.js [app-client] (ecmascript)");
;
class Teranode {
    URL;
    httpClient;
    /**
     * Constructs an instance of the Teranode broadcaster.
     *
     * @param {string} URL - The URL endpoint for the Teranode API.
     * @param {HttpClient} httpClient - The HTTP client used to make requests to the API, binaryHttpClient by default.
     */ constructor(URL, httpClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$BinaryFetchClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binaryHttpClient"])()){
        this.URL = URL;
        this.httpClient = httpClient;
    }
    /**
     * Broadcasts a transaction via Teranode.
     *
     * @param {Transaction} tx - The transaction to be broadcasted.
     * @returns {Promise<BroadcastResponse | BroadcastFailure>} A promise that resolves to either a success or failure response.
     */ async broadcast(tx) {
        const rawTx = tx.toEF();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream'
            },
            data: new Blob([
                new Uint8Array(rawTx)
            ])
        };
        try {
            const response = await this.httpClient.request(this.URL, requestOptions);
            if (response.ok) {
                const txid = tx.id('hex');
                return {
                    status: 'success',
                    txid,
                    message: 'broadcast successful'
                };
            } else {
                return {
                    status: 'error',
                    code: response.status.toString() ?? 'ERR_UNKNOWN',
                    description: response.data ?? 'Unknown error'
                };
            }
        } catch (error) {
            return {
                status: 'error',
                code: '500',
                description: typeof error.message === 'string' ? error.message : 'Internal Server Error'
            };
        }
    }
} //# sourceMappingURL=Teranode.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/broadcasters/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$broadcasters$2f$ARC$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/broadcasters/ARC.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$broadcasters$2f$WhatsOnChainBroadcaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/broadcasters/WhatsOnChainBroadcaster.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$broadcasters$2f$Teranode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/broadcasters/Teranode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$broadcasters$2f$DefaultBroadcaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/broadcasters/DefaultBroadcaster.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/chaintrackers/BlockHeadersService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlockHeadersService",
    ()=>BlockHeadersService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$DefaultHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/http/DefaultHttpClient.js [app-client] (ecmascript)");
;
class BlockHeadersService {
    baseUrl;
    httpClient;
    apiKey;
    /**
     * Constructs an instance of the BlockHeadersService ChainTracker.
     *
     * @param {string} baseUrl - The base URL for the BlockHeadersService API (e.g. https://headers.spv.money)
     * @param {BlockHeadersServiceConfig} config - Configuration options for the BlockHeadersService ChainTracker.
     */ constructor(baseUrl, config = {}){
        const { httpClient, apiKey } = config;
        this.baseUrl = baseUrl;
        this.httpClient = httpClient ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$http$2f$DefaultHttpClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultHttpClient"])();
        this.apiKey = apiKey ?? '';
    }
    /**
     * Verifies if a given merkle root is valid for a specific block height.
     *
     * @param {string} root - The merkle root to verify.
     * @param {number} height - The block height to check against.
     * @returns {Promise<boolean>} - A promise that resolves to true if the merkle root is valid for the specified block height, false otherwise.
     */ async isValidRootForHeight(root, height) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            data: [
                {
                    blockHeight: height,
                    merkleRoot: root
                }
            ]
        };
        try {
            const response = await this.httpClient.request(`${this.baseUrl}/api/v1/chain/merkleroot/verify`, requestOptions);
            if (response.ok) {
                return response.data.confirmationState === 'CONFIRMED';
            } else {
                throw new Error(`Failed to verify merkleroot for height ${height} because of an error: ${JSON.stringify(response.data)}`);
            }
        } catch (error) {
            throw new Error(`Failed to verify merkleroot for height ${height} because of an error: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
    /**
     * Gets the current block height from the BlockHeadersService API.
     *
     * @returns {Promise<number>} - A promise that resolves to the current block height.
     */ async currentHeight() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            }
        };
        try {
            const response = await this.httpClient.request(`${this.baseUrl}/api/v1/chain/tip/longest`, requestOptions);
            if (response.ok && response.data && typeof response.data.height === 'number') {
                return response.data.height;
            } else {
                throw new Error(`Failed to get current height because of an error: ${JSON.stringify(response.data)}`);
            }
        } catch (error) {
            throw new Error(`Failed to get current height because of an error: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
} //# sourceMappingURL=BlockHeadersService.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/chaintrackers/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$chaintrackers$2f$WhatsOnChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/chaintrackers/WhatsOnChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$chaintrackers$2f$BlockHeadersService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/chaintrackers/BlockHeadersService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$chaintrackers$2f$DefaultChainTracker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/chaintrackers/DefaultChainTracker.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-client] (ecmascript) <export default as Transaction>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transaction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATOMIC_BEEF",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATOMIC_BEEF"],
    "BEEF_V1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEEF_V1"],
    "BEEF_V2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEEF_V2"],
    "Beef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Beef"],
    "BeefParty",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$BeefParty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "BeefTx",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$BeefTx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "MerklePath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$MerklePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "TX_DATA_FORMAT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TX_DATA_FORMAT"],
    "Transaction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "isBroadcastFailure",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Broadcaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBroadcastFailure"],
    "isBroadcastResponse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Broadcaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBroadcastResponse"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$MerklePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/MerklePath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Broadcaster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Broadcaster.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$BeefTx$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/BeefTx.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Beef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$BeefParty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/BeefParty.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=ef5fd_%40bsv_sdk_dist_esm_src_transaction_aea3599a._.js.map