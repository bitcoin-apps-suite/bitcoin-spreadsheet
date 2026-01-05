(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/OP.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * An object mapping opcode names (such as OP_DUP) to their corresponding numbers (such as 0x76), and vice versa.
 */ const OP = {
    // push value
    OP_FALSE: 0x00,
    OP_0: 0x00,
    OP_PUSHDATA1: 0x4c,
    OP_PUSHDATA2: 0x4d,
    OP_PUSHDATA4: 0x4e,
    OP_1NEGATE: 0x4f,
    OP_RESERVED: 0x50,
    OP_TRUE: 0x51,
    OP_1: 0x51,
    OP_2: 0x52,
    OP_3: 0x53,
    OP_4: 0x54,
    OP_5: 0x55,
    OP_6: 0x56,
    OP_7: 0x57,
    OP_8: 0x58,
    OP_9: 0x59,
    OP_10: 0x5a,
    OP_11: 0x5b,
    OP_12: 0x5c,
    OP_13: 0x5d,
    OP_14: 0x5e,
    OP_15: 0x5f,
    OP_16: 0x60,
    // control
    OP_NOP: 0x61,
    OP_VER: 0x62,
    OP_IF: 0x63,
    OP_NOTIF: 0x64,
    OP_VERIF: 0x65,
    OP_VERNOTIF: 0x66,
    OP_ELSE: 0x67,
    OP_ENDIF: 0x68,
    OP_VERIFY: 0x69,
    OP_RETURN: 0x6a,
    // stack ops
    OP_TOALTSTACK: 0x6b,
    OP_FROMALTSTACK: 0x6c,
    OP_2DROP: 0x6d,
    OP_2DUP: 0x6e,
    OP_3DUP: 0x6f,
    OP_2OVER: 0x70,
    OP_2ROT: 0x71,
    OP_2SWAP: 0x72,
    OP_IFDUP: 0x73,
    OP_DEPTH: 0x74,
    OP_DROP: 0x75,
    OP_DUP: 0x76,
    OP_NIP: 0x77,
    OP_OVER: 0x78,
    OP_PICK: 0x79,
    OP_ROLL: 0x7a,
    OP_ROT: 0x7b,
    OP_SWAP: 0x7c,
    OP_TUCK: 0x7d,
    // data manipulation ops
    OP_CAT: 0x7e,
    OP_SUBSTR: 0x7f,
    OP_SPLIT: 0x7f,
    OP_LEFT: 0x80,
    OP_NUM2BIN: 0x80,
    OP_RIGHT: 0x81,
    OP_BIN2NUM: 0x81,
    OP_SIZE: 0x82,
    // bit logic
    OP_INVERT: 0x83,
    OP_AND: 0x84,
    OP_OR: 0x85,
    OP_XOR: 0x86,
    OP_EQUAL: 0x87,
    OP_EQUALVERIFY: 0x88,
    OP_RESERVED1: 0x89,
    OP_RESERVED2: 0x8a,
    // numeric
    OP_1ADD: 0x8b,
    OP_1SUB: 0x8c,
    OP_2MUL: 0x8d,
    OP_2DIV: 0x8e,
    OP_NEGATE: 0x8f,
    OP_ABS: 0x90,
    OP_NOT: 0x91,
    OP_0NOTEQUAL: 0x92,
    OP_ADD: 0x93,
    OP_SUB: 0x94,
    OP_MUL: 0x95,
    OP_DIV: 0x96,
    OP_MOD: 0x97,
    OP_LSHIFT: 0x98,
    OP_RSHIFT: 0x99,
    OP_BOOLAND: 0x9a,
    OP_BOOLOR: 0x9b,
    OP_NUMEQUAL: 0x9c,
    OP_NUMEQUALVERIFY: 0x9d,
    OP_NUMNOTEQUAL: 0x9e,
    OP_LESSTHAN: 0x9f,
    OP_GREATERTHAN: 0xa0,
    OP_LESSTHANOREQUAL: 0xa1,
    OP_GREATERTHANOREQUAL: 0xa2,
    OP_MIN: 0xa3,
    OP_MAX: 0xa4,
    OP_WITHIN: 0xa5,
    // crypto
    OP_RIPEMD160: 0xa6,
    OP_SHA1: 0xa7,
    OP_SHA256: 0xa8,
    OP_HASH160: 0xa9,
    OP_HASH256: 0xaa,
    OP_CODESEPARATOR: 0xab,
    OP_CHECKSIG: 0xac,
    OP_CHECKSIGVERIFY: 0xad,
    OP_CHECKMULTISIG: 0xae,
    OP_CHECKMULTISIGVERIFY: 0xaf,
    // expansion
    OP_NOP1: 0xb0,
    OP_NOP2: 0xb1,
    OP_NOP3: 0xb2,
    OP_NOP4: 0xb3,
    OP_NOP5: 0xb4,
    OP_NOP6: 0xb5,
    OP_NOP7: 0xb6,
    OP_NOP8: 0xb7,
    OP_NOP9: 0xb8,
    OP_NOP10: 0xb9,
    OP_NOP11: 0xba,
    OP_NOP12: 0xbb,
    OP_NOP13: 0xbc,
    OP_NOP14: 0xbd,
    OP_NOP15: 0xbe,
    OP_NOP16: 0xbf,
    OP_NOP17: 0xc0,
    OP_NOP18: 0xc1,
    OP_NOP19: 0xc2,
    OP_NOP20: 0xc3,
    OP_NOP21: 0xc4,
    OP_NOP22: 0xc5,
    OP_NOP23: 0xc6,
    OP_NOP24: 0xc7,
    OP_NOP25: 0xc8,
    OP_NOP26: 0xc9,
    OP_NOP27: 0xca,
    OP_NOP28: 0xcb,
    OP_NOP29: 0xcc,
    OP_NOP30: 0xcd,
    OP_NOP31: 0xce,
    OP_NOP32: 0xcf,
    OP_NOP33: 0xd0,
    OP_NOP34: 0xd1,
    OP_NOP35: 0xd2,
    OP_NOP36: 0xd3,
    OP_NOP37: 0xd4,
    OP_NOP38: 0xd5,
    OP_NOP39: 0xd6,
    OP_NOP40: 0xd7,
    OP_NOP41: 0xd8,
    OP_NOP42: 0xd9,
    OP_NOP43: 0xda,
    OP_NOP44: 0xdb,
    OP_NOP45: 0xdc,
    OP_NOP46: 0xdd,
    OP_NOP47: 0xde,
    OP_NOP48: 0xdf,
    OP_NOP49: 0xe0,
    OP_NOP50: 0xe1,
    OP_NOP51: 0xe2,
    OP_NOP52: 0xe3,
    OP_NOP53: 0xe4,
    OP_NOP54: 0xe5,
    OP_NOP55: 0xe6,
    OP_NOP56: 0xe7,
    OP_NOP57: 0xe8,
    OP_NOP58: 0xe9,
    OP_NOP59: 0xea,
    OP_NOP60: 0xeb,
    OP_NOP61: 0xec,
    OP_NOP62: 0xed,
    OP_NOP63: 0xee,
    OP_NOP64: 0xef,
    OP_NOP65: 0xf0,
    OP_NOP66: 0xf1,
    OP_NOP67: 0xf2,
    OP_NOP68: 0xf3,
    OP_NOP69: 0xf4,
    OP_NOP70: 0xf5,
    OP_NOP71: 0xf6,
    OP_NOP72: 0xf7,
    OP_NOP73: 0xf8,
    OP_NOP77: 0xfc,
    // template matching params
    OP_SMALLDATA: 0xf9,
    OP_SMALLINTEGER: 0xfa,
    OP_PUBKEYS: 0xfb,
    OP_PUBKEYHASH: 0xfd,
    OP_PUBKEY: 0xfe,
    OP_INVALIDOPCODE: 0xff
};
for(const name in OP){
    OP[OP[name]] = name;
}
const __TURBOPACK__default__export__ = OP;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=OP.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/Script.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Script
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/OP.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
;
;
;
/**
 * The Script class represents a script in a Bitcoin SV transaction,
 * encapsulating the functionality to construct, parse, and serialize
 * scripts used in both locking (output) and unlocking (input) scripts.
 *
 * @property {ScriptChunk[]} chunks - An array of script chunks that make up the script.
 */ const BufferCtor = typeof globalThis !== 'undefined' ? globalThis.Buffer : undefined;
class Script {
    _chunks;
    parsed;
    rawBytesCache;
    hexCache;
    /**
     * @method fromASM
     * Static method to construct a Script instance from an ASM (Assembly) formatted string.
     * @param asm - The script in ASM string format.
     * @returns A new Script instance.
     * @example
     * const script = Script.fromASM("OP_DUP OP_HASH160 abcd... OP_EQUALVERIFY OP_CHECKSIG")
     */ static fromASM(asm) {
        const chunks = [];
        const tokens = asm.split(' ');
        let i = 0;
        while(i < tokens.length){
            const token = tokens[i];
            let opCode;
            let opCodeNum = 0;
            if (token.startsWith('OP_') && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][token] !== 'undefined') {
                opCode = token;
                opCodeNum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][token];
            }
            // we start with two special cases, 0 and -1, which are handled specially in
            // toASM. see _chunkToString.
            if (token === '0') {
                opCodeNum = 0;
                chunks.push({
                    op: opCodeNum
                });
                i = i + 1;
            } else if (token === '-1') {
                opCodeNum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1NEGATE;
                chunks.push({
                    op: opCodeNum
                });
                i = i + 1;
            } else if (opCode === undefined) {
                let hex = tokens[i];
                if (hex.length % 2 !== 0) {
                    hex = '0' + hex;
                }
                const arr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(hex, 'hex');
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(arr, 'hex') !== hex) {
                    throw new Error('invalid hex string in script');
                }
                const len = arr.length;
                if (len >= 0 && len < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA1) {
                    opCodeNum = len;
                } else if (len < Math.pow(2, 8)) {
                    opCodeNum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA1;
                } else if (len < Math.pow(2, 16)) {
                    opCodeNum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA2;
                } else if (len < Math.pow(2, 32)) {
                    opCodeNum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA4;
                }
                chunks.push({
                    data: arr,
                    op: opCodeNum
                });
                i = i + 1;
            } else if (opCodeNum === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA1 || opCodeNum === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA2 || opCodeNum === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA4) {
                chunks.push({
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(tokens[i + 2], 'hex'),
                    op: opCodeNum
                });
                i = i + 3;
            } else {
                chunks.push({
                    op: opCodeNum
                });
                i = i + 1;
            }
        }
        return new Script(chunks);
    }
    /**
     * @method fromHex
     * Static method to construct a Script instance from a hexadecimal string.
     * @param hex - The script in hexadecimal format.
     * @returns A new Script instance.
     * @example
     * const script = Script.fromHex("76a9...");
     */ static fromHex(hex) {
        if (hex.length === 0) return Script.fromBinary([]);
        if (hex.length % 2 !== 0) {
            throw new Error('There is an uneven number of characters in the string which suggests it is not hex encoded.');
        }
        if (!/^[0-9a-fA-F]+$/.test(hex)) {
            throw new Error('Some elements in this string are not hex encoded.');
        }
        const bin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(hex, 'hex');
        const rawBytes = Uint8Array.from(bin);
        return new Script([], rawBytes, hex.toLowerCase(), false);
    }
    /**
     * @method fromBinary
     * Static method to construct a Script instance from a binary array.
     * @param bin - The script in binary array format.
     * @returns A new Script instance.
     * @example
     * const script = Script.fromBinary([0x76, 0xa9, ...])
     */ static fromBinary(bin) {
        const rawBytes = Uint8Array.from(bin);
        return new Script([], rawBytes, undefined, false);
    }
    /**
     * @constructor
     * Constructs a new Script object.
     * @param chunks=[] - An array of script chunks to directly initialize the script.
     * @param rawBytesCache - Optional serialized bytes that can be reused instead of reserializing `chunks`.
     * @param hexCache - Optional lowercase hex string that matches the serialized bytes, used to satisfy `toHex` quickly.
     * @param parsed - When false the script defers parsing `rawBytesCache` until `chunks` is accessed; defaults to true.
     */ constructor(chunks = [], rawBytesCache, hexCache, parsed = true){
        this._chunks = chunks;
        this.parsed = parsed;
        this.rawBytesCache = rawBytesCache;
        this.hexCache = hexCache;
    }
    get chunks() {
        this.ensureParsed();
        return this._chunks;
    }
    set chunks(value) {
        this._chunks = value;
        this.parsed = true;
        this.invalidateSerializationCaches();
    }
    ensureParsed() {
        if (this.parsed) return;
        if (this.rawBytesCache != null) {
            this._chunks = Script.parseChunks(this.rawBytesCache);
        } else {
            this._chunks = [];
        }
        this.parsed = true;
    }
    /**
     * @method toASM
     * Serializes the script to an ASM formatted string.
     * @returns The script in ASM string format.
     */ toASM() {
        let str = '';
        for(let i = 0; i < this.chunks.length; i++){
            const chunk = this.chunks[i];
            str += this._chunkToString(chunk);
        }
        return str.slice(1);
    }
    /**
     * @method toHex
     * Serializes the script to a hexadecimal string.
     * @returns The script in hexadecimal format.
     */ toHex() {
        if (this.hexCache != null) {
            return this.hexCache;
        }
        if (this.rawBytesCache == null) {
            this.rawBytesCache = this.serializeChunksToBytes();
        }
        const hex = BufferCtor != null ? BufferCtor.from(this.rawBytesCache).toString('hex') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(Array.from(this.rawBytesCache), 'hex');
        this.hexCache = hex;
        return hex;
    }
    /**
     * @method toBinary
     * Serializes the script to a binary array.
     * @returns The script in binary array format.
     */ toBinary() {
        return Array.from(this.toUint8Array());
    }
    toUint8Array() {
        if (this.rawBytesCache == null) {
            this.rawBytesCache = this.serializeChunksToBytes();
        }
        return this.rawBytesCache;
    }
    /**
     * @method writeScript
     * Appends another script to this script.
     * @param script - The script to append.
     * @returns This script instance for chaining.
     */ writeScript(script) {
        this.invalidateSerializationCaches();
        this.chunks = this.chunks.concat(script.chunks);
        return this;
    }
    /**
     * @method writeOpCode
     * Appends an opcode to the script.
     * @param op - The opcode to append.
     * @returns This script instance for chaining.
     */ writeOpCode(op) {
        this.invalidateSerializationCaches();
        this.chunks.push({
            op
        });
        return this;
    }
    /**
     * @method setChunkOpCode
     * Sets the opcode of a specific chunk in the script.
     * @param i - The index of the chunk.
     * @param op - The opcode to set.
     * @returns This script instance for chaining.
     */ setChunkOpCode(i, op) {
        this.invalidateSerializationCaches();
        this.chunks[i] = {
            op
        };
        return this;
    }
    /**
     * @method writeBn
     * Appends a BigNumber to the script as an opcode.
     * @param bn - The BigNumber to append.
     * @returns This script instance for chaining.
     */ writeBn(bn) {
        this.invalidateSerializationCaches();
        if (bn.cmpn(0) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_0) {
            this.chunks.push({
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_0
            });
        } else if (bn.cmpn(-1) === 0) {
            this.chunks.push({
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1NEGATE
            });
        } else if (bn.cmpn(1) >= 0 && bn.cmpn(16) <= 0) {
            // see OP_1 - OP_16
            this.chunks.push({
                op: bn.toNumber() + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1 - 1
            });
        } else {
            const buf = bn.toSm('little');
            this.writeBin(buf);
        }
        return this;
    }
    /**
     * @method writeBin
     * Appends binary data to the script, determining the appropriate opcode based on length.
     * @param bin - The binary data to append.
     * @returns This script instance for chaining.
     * @throws {Error} Throws an error if the data is too large to be pushed.
     */ writeBin(bin) {
        this.invalidateSerializationCaches();
        let op;
        const data = bin.length > 0 ? bin : undefined;
        if (bin.length > 0 && bin.length < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA1) {
            op = bin.length;
        } else if (bin.length === 0) {
            op = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_0;
        } else if (bin.length < Math.pow(2, 8)) {
            op = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA1;
        } else if (bin.length < Math.pow(2, 16)) {
            op = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA2;
        } else if (bin.length < Math.pow(2, 32)) {
            op = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA4;
        } else {
            throw new Error("You can't push that much data");
        }
        this.chunks.push({
            data,
            op
        });
        return this;
    }
    /**
     * @method writeNumber
     * Appends a number to the script.
     * @param num - The number to append.
     * @returns This script instance for chaining.
     */ writeNumber(num) {
        this.invalidateSerializationCaches();
        this.writeBn(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](num));
        return this;
    }
    /**
     * @method removeCodeseparators
     * Removes all OP_CODESEPARATOR opcodes from the script.
     * @returns This script instance for chaining.
     */ removeCodeseparators() {
        this.invalidateSerializationCaches();
        const chunks = [];
        for(let i = 0; i < this.chunks.length; i++){
            if (this.chunks[i].op !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_CODESEPARATOR) {
                chunks.push(this.chunks[i]);
            }
        }
        this.chunks = chunks;
        return this;
    }
    /**
     * Deletes the given item wherever it appears in the current script.
     *
     * @param script - The script containing the item to delete from the current script.
     *
     * @returns This script instance for chaining.
     */ findAndDelete(script) {
        this.invalidateSerializationCaches();
        const buf = script.toHex();
        for(let i = 0; i < this.chunks.length; i++){
            const script2 = new Script([
                this.chunks[i]
            ]);
            const buf2 = script2.toHex();
            if (buf === buf2) {
                this.chunks.splice(i, 1);
            }
        }
        return this;
    }
    /**
     * @method isPushOnly
     * Checks if the script contains only push data operations.
     * @returns True if the script is push-only, otherwise false.
     */ isPushOnly() {
        for(let i = 0; i < this.chunks.length; i++){
            const chunk = this.chunks[i];
            const opCodeNum = chunk.op;
            if (opCodeNum > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_16) {
                return false;
            }
        }
        return true;
    }
    /**
     * @method isLockingScript
     * Determines if the script is a locking script.
     * @returns True if the script is a locking script, otherwise false.
     */ isLockingScript() {
        throw new Error('Not implemented');
    }
    /**
     * @method isUnlockingScript
     * Determines if the script is an unlocking script.
     * @returns True if the script is an unlocking script, otherwise false.
     */ isUnlockingScript() {
        throw new Error('Not implemented');
    }
    /**
     * @private
     * @method _chunkToString
     * Converts a script chunk to its string representation.
     * @param chunk - The script chunk.
     * @returns The string representation of the chunk.
     */ static computeSerializedLength(chunks) {
        let total = 0;
        for (const chunk of chunks){
            total += 1;
            if (chunk.data == null) continue;
            const len = chunk.data.length;
            if (chunk.op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_RETURN) {
                total += len;
                break;
            }
            if (chunk.op < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA1) {
                total += len;
            } else if (chunk.op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA1) {
                total += 1 + len;
            } else if (chunk.op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA2) {
                total += 2 + len;
            } else if (chunk.op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA4) {
                total += 4 + len;
            }
        }
        return total;
    }
    serializeChunksToBytes() {
        const chunks = this.chunks;
        const totalLength = Script.computeSerializedLength(chunks);
        const bytes = new Uint8Array(totalLength);
        let offset = 0;
        for(let i = 0; i < chunks.length; i++){
            const chunk = chunks[i];
            bytes[offset++] = chunk.op;
            if (chunk.data == null) continue;
            if (chunk.op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_RETURN) {
                bytes.set(chunk.data, offset);
                offset += chunk.data.length;
                break;
            }
            offset = Script.writeChunkData(bytes, offset, chunk.op, chunk.data);
        }
        return bytes;
    }
    invalidateSerializationCaches() {
        this.rawBytesCache = undefined;
        this.hexCache = undefined;
    }
    static writeChunkData(target, offset, op, data) {
        const len = data.length;
        if (op < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA1) {
            target.set(data, offset);
            return offset + len;
        } else if (op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA1) {
            target[offset++] = len & 0xff;
            target.set(data, offset);
            return offset + len;
        } else if (op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA2) {
            target[offset++] = len & 0xff;
            target[offset++] = len >> 8 & 0xff;
            target.set(data, offset);
            return offset + len;
        } else if (op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA4) {
            const size = len >>> 0;
            target[offset++] = size & 0xff;
            target[offset++] = size >> 8 & 0xff;
            target[offset++] = size >> 16 & 0xff;
            target[offset++] = size >> 24 & 0xff;
            target.set(data, offset);
            return offset + len;
        }
        return offset;
    }
    static parseChunks(bytes) {
        const chunks = [];
        const length = bytes.length;
        let pos = 0;
        let inConditionalBlock = 0;
        while(pos < length){
            const op = bytes[pos++] ?? 0;
            if (op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_RETURN && inConditionalBlock === 0) {
                chunks.push({
                    op,
                    data: Script.copyRange(bytes, pos, length)
                });
                break;
            }
            if (op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_IF || op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOTIF || op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_VERIF || op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_VERNOTIF) {
                inConditionalBlock++;
            } else if (op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_ENDIF) {
                inConditionalBlock--;
            }
            if (op > 0 && op < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA1) {
                const len = op;
                const end = Math.min(pos + len, length);
                chunks.push({
                    data: Script.copyRange(bytes, pos, end),
                    op
                });
                pos = end;
            } else if (op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA1) {
                const len = pos < length ? bytes[pos++] ?? 0 : 0;
                const end = Math.min(pos + len, length);
                chunks.push({
                    data: Script.copyRange(bytes, pos, end),
                    op
                });
                pos = end;
            } else if (op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA2) {
                const b0 = bytes[pos] ?? 0;
                const b1 = bytes[pos + 1] ?? 0;
                const len = b0 | b1 << 8;
                pos = Math.min(pos + 2, length);
                const end = Math.min(pos + len, length);
                chunks.push({
                    data: Script.copyRange(bytes, pos, end),
                    op
                });
                pos = end;
            } else if (op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA4) {
                const len = ((bytes[pos] ?? 0) | (bytes[pos + 1] ?? 0) << 8 | (bytes[pos + 2] ?? 0) << 16 | (bytes[pos + 3] ?? 0) << 24) >>> 0;
                pos = Math.min(pos + 4, length);
                const end = Math.min(pos + len, length);
                chunks.push({
                    data: Script.copyRange(bytes, pos, end),
                    op
                });
                pos = end;
            } else {
                chunks.push({
                    op
                });
            }
        }
        return chunks;
    }
    static copyRange(bytes, start, end) {
        const size = Math.max(end - start, 0);
        const data = new Array(size);
        for(let i = 0; i < size; i++){
            data[i] = bytes[start + i] ?? 0;
        }
        return data;
    }
    _chunkToString(chunk) {
        const op = chunk.op;
        let str = '';
        if (typeof chunk.data === 'undefined') {
            const val = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][op];
            str = `${str} ${val}`;
        } else {
            str = `${str} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(chunk.data)}`;
        }
        return str;
    }
} //# sourceMappingURL=Script.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/LockingScript.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LockingScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/Script.js [app-client] (ecmascript)");
;
class LockingScript extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    /**
     * @method isLockingScript
     * Determines if the script is a locking script.
     * @returns {boolean} Always returns true for a LockingScript instance.
     */ isLockingScript() {
        return true;
    }
    /**
     * @method isUnlockingScript
     * Determines if the script is an unlocking script.
     * @returns {boolean} Always returns false for a LockingScript instance.
     */ isUnlockingScript() {
        return false;
    }
} //# sourceMappingURL=LockingScript.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/UnlockingScript.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UnlockingScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/Script.js [app-client] (ecmascript)");
;
class UnlockingScript extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    /**
     * @method isLockingScript
     * Determines if the script is a locking script.
     * @returns {boolean} Always returns false for an UnlockingScript instance.
     */ isLockingScript() {
        return false;
    }
    /**
     * @method isUnlockingScript
     * Determines if the script is an unlocking script.
     * @returns {boolean} Always returns true for an UnlockingScript instance.
     */ isUnlockingScript() {
        return true;
    }
} //# sourceMappingURL=UnlockingScript.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/ScriptEvaluationError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScriptEvaluationError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
;
class ScriptEvaluationError extends Error {
    txid;
    outputIndex;
    context;
    programCounter;
    stackState;
    altStackState;
    ifStackState;
    stackMem;
    altStackMem;
    constructor(params){
        const stackHex = params.stackState.map((s)=>s != null && typeof s.length !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(s) : s === null || s === undefined ? 'null/undef' : 'INVALID_STACK_ITEM').join(', ');
        const altStackHex = params.altStackState.map((s)=>s != null && typeof s.length !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(s) : s === null || s === undefined ? 'null/undef' : 'INVALID_STACK_ITEM').join(', ');
        const pcInfo = `Context: ${params.context}, PC: ${params.programCounter}`;
        const stackInfo = `Stack: [${stackHex}] (len: ${params.stackState.length}, mem: ${params.stackMem})`;
        const altStackInfo = `AltStack: [${altStackHex}] (len: ${params.altStackState.length}, mem: ${params.altStackMem})`;
        const ifStackInfo = `IfStack: [${params.ifStackState.join(', ')}]`;
        const fullMessage = `Script evaluation error: ${params.message}\nTXID: ${params.txid}, OutputIdx: ${params.outputIndex}\n${pcInfo}\n${stackInfo}\n${altStackInfo}\n${ifStackInfo}`;
        super(fullMessage);
        this.name = this.constructor.name;
        this.txid = params.txid;
        this.outputIndex = params.outputIndex;
        this.context = params.context;
        this.programCounter = params.programCounter;
        this.stackState = params.stackState.map((s)=>s.slice());
        this.altStackState = params.altStackState.map((s)=>s.slice());
        this.ifStackState = params.ifStackState.slice();
        this.stackMem = params.stackMem;
        this.altStackMem = params.altStackMem;
    }
} //# sourceMappingURL=ScriptEvaluationError.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/Spend.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Spend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/Script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/OP.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$ScriptEvaluationError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/ScriptEvaluationError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/TransactionSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ECDSA.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
// These constants control the current behavior of the interpreter.
const maxScriptElementSize = 1024 * 1024 * 1024;
const maxMultisigKeyCount = Math.pow(2, 31) - 1;
const maxMultisigKeyCountBigInt = BigInt(maxMultisigKeyCount);
const requireMinimalPush = true;
const requirePushOnlyUnlockingScripts = true;
const requireLowSSignatures = true;
const requireCleanStack = true;
// --- Optimization: Pre-computed script numbers ---
const SCRIPTNUM_NEG_1 = Object.freeze(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](-1).toScriptNum());
const SCRIPTNUMS_0_TO_16 = Object.freeze(Array.from({
    length: 17
}, (_, i)=>Object.freeze(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](i).toScriptNum())));
// --- Helper functions ---
function compareNumberArrays(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function isMinimallyEncodedHelper(buf, maxNumSize = Number.MAX_SAFE_INTEGER) {
    if (buf.length > maxNumSize) {
        return false;
    }
    if (buf.length > 0) {
        if ((buf[buf.length - 1] & 0x7f) === 0) {
            if (buf.length <= 1 || (buf[buf.length - 2] & 0x80) === 0) {
                return false;
            }
        }
    }
    return true;
}
function isChecksigFormatHelper(buf) {
    // This is a simplified check. The full DER check is more complex and typically
    // done by TransactionSignature.fromChecksigFormat which can throw.
    // This helper is mostly for early bailout or non-throwing checks if needed.
    if (buf.length < 9 || buf.length > 73) return false;
    if (buf[0] !== 0x30) return false; // DER SEQUENCE
    if (buf[1] !== buf.length - 3) return false; // Total length (excluding type and length byte for sequence, and hash type)
    const rMarker = buf[2];
    const rLen = buf[3];
    if (rMarker !== 0x02) return false; // DER INTEGER
    if (rLen === 0) return false; // R length is zero
    if (5 + rLen >= buf.length) return false; // S length misplaced or R too long
    const sMarkerOffset = 4 + rLen;
    const sMarker = buf[sMarkerOffset];
    const sLen = buf[sMarkerOffset + 1];
    if (sMarker !== 0x02) return false; // DER INTEGER
    if (sLen === 0) return false; // S length is zero
    // Check R value negative or excessively padded
    if ((buf[4] & 0x80) !== 0) return false; // R value negative
    if (rLen > 1 && buf[4] === 0x00 && (buf[5] & 0x80) === 0) return false; // R value excessively padded
    // Check S value negative or excessively padded
    const sValueOffset = sMarkerOffset + 2;
    if ((buf[sValueOffset] & 0x80) !== 0) return false; // S value negative
    if (sLen > 1 && buf[sValueOffset] === 0x00 && (buf[sValueOffset + 1] & 0x80) === 0) return false; // S value excessively padded
    if (rLen + sLen + 7 !== buf.length) return false; // Final length check including hash type
    return true;
}
function isOpcodeDisabledHelper(op) {
    return op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_2MUL || op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_2DIV || op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_VERIF || op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_VERNOTIF || op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_VER;
}
function isChunkMinimalPushHelper(chunk) {
    const data = chunk.data;
    const op = chunk.op;
    if (!Array.isArray(data)) return true;
    if (data.length === 0) return op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_0;
    if (data.length === 1 && data[0] >= 1 && data[0] <= 16) return op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1 + (data[0] - 1);
    if (data.length === 1 && data[0] === 0x81) return op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1NEGATE;
    if (data.length <= 75) return op === data.length;
    if (data.length <= 255) return op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA1;
    if (data.length <= 65535) return op === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA2;
    return true;
}
class Spend {
    sourceTXID;
    sourceOutputIndex;
    sourceSatoshis;
    lockingScript;
    transactionVersion;
    otherInputs;
    outputs;
    inputIndex;
    unlockingScript;
    inputSequence;
    lockTime;
    context;
    programCounter;
    lastCodeSeparator;
    stack;
    altStack;
    ifStack;
    memoryLimit;
    stackMem;
    altStackMem;
    sigHashCache;
    /**
     * @constructor
     * Constructs the Spend object with necessary transaction details.
     * @param {string} params.sourceTXID - The transaction ID of the source UTXO.
     * @param {number} params.sourceOutputIndex - The index of the output in the source transaction.
     * @param {BigNumber} params.sourceSatoshis - The amount of satoshis in the source UTXO.
     * @param {LockingScript} params.lockingScript - The locking script associated with the UTXO.
     * @param {number} params.transactionVersion - The version of the current transaction.
     * @param {Array<{ sourceTXID: string, sourceOutputIndex: number, sequence: number }>} params.otherInputs -
     *        An array of other inputs in the transaction.
     * @param {Array<{ satoshis: BigNumber, lockingScript: LockingScript }>} params.outputs -
     *        The outputs of the current transaction.
     * @param {number} params.inputIndex - The index of this input in the current transaction.
     * @param {UnlockingScript} params.unlockingScript - The unlocking script for this spend.
     * @param {number} params.inputSequence - The sequence number of this input.
     * @param {number} params.lockTime - The lock time of the transaction.
     *
     * @example
     * const spend = new Spend({
     *   sourceTXID: "abcd1234", // sourceTXID
     *   sourceOutputIndex: 0, // sourceOutputIndex
     *   sourceSatoshis: new BigNumber(1000), // sourceSatoshis
     *   lockingScript: LockingScript.fromASM("OP_DUP OP_HASH160 abcd1234... OP_EQUALVERIFY OP_CHECKSIG"),
     *   transactionVersion: 1, // transactionVersion
     *   otherInputs: [{ sourceTXID: "abcd1234", sourceOutputIndex: 1, sequence: 0xffffffff }], // otherInputs
     *   outputs: [{ satoshis: new BigNumber(500), lockingScript: LockingScript.fromASM("OP_DUP...") }], // outputs
     *   inputIndex: 0, // inputIndex
     *   unlockingScript: UnlockingScript.fromASM("3045... 02ab..."),
     *   inputSequence: 0xffffffff // inputSequence
     *   memoryLimit: 100000 // memoryLimit
     * });
     */ constructor(params){
        this.sourceTXID = params.sourceTXID;
        this.sourceOutputIndex = params.sourceOutputIndex;
        this.sourceSatoshis = params.sourceSatoshis;
        this.lockingScript = params.lockingScript;
        this.transactionVersion = params.transactionVersion;
        this.otherInputs = params.otherInputs;
        this.outputs = params.outputs;
        this.inputIndex = params.inputIndex;
        this.unlockingScript = params.unlockingScript;
        this.inputSequence = params.inputSequence;
        this.lockTime = params.lockTime;
        this.memoryLimit = params.memoryLimit ?? 32000000;
        this.stack = [];
        this.altStack = [];
        this.ifStack = [];
        this.stackMem = 0;
        this.altStackMem = 0;
        this.sigHashCache = {
            hashOutputsSingle: new Map()
        };
        this.reset();
    }
    reset() {
        this.context = 'UnlockingScript';
        this.programCounter = 0;
        this.lastCodeSeparator = null;
        this.stack = [];
        this.altStack = [];
        this.ifStack = [];
        this.stackMem = 0;
        this.altStackMem = 0;
        this.sigHashCache = {
            hashOutputsSingle: new Map()
        };
    }
    ensureStackMem(additional) {
        if (this.stackMem + additional > this.memoryLimit) {
            this.scriptEvaluationError('Stack memory usage has exceeded ' + String(this.memoryLimit) + ' bytes');
        }
    }
    ensureAltStackMem(additional) {
        if (this.altStackMem + additional > this.memoryLimit) {
            this.scriptEvaluationError('Alt stack memory usage has exceeded ' + String(this.memoryLimit) + ' bytes');
        }
    }
    pushStack(item) {
        this.ensureStackMem(item.length);
        this.stack.push(item);
        this.stackMem += item.length;
    }
    pushStackCopy(item) {
        this.ensureStackMem(item.length);
        const copy = item.slice();
        this.stack.push(copy);
        this.stackMem += copy.length;
    }
    popStack() {
        if (this.stack.length === 0) {
            this.scriptEvaluationError('Attempted to pop from an empty stack.');
        }
        const item = this.stack.pop();
        this.stackMem -= item.length;
        return item;
    }
    stackTop(index = -1) {
        // index = -1 for top, -2 for second top, etc.
        // stack.length + index provides 0-based index from start
        if (this.stack.length === 0 || this.stack.length < Math.abs(index) || index >= 0 && index >= this.stack.length) {
            this.scriptEvaluationError(`Stack underflow accessing element at index ${index}. Stack length is ${this.stack.length}.`);
        }
        return this.stack[this.stack.length + index];
    }
    pushAltStack(item) {
        this.ensureAltStackMem(item.length);
        this.altStack.push(item);
        this.altStackMem += item.length;
    }
    popAltStack() {
        if (this.altStack.length === 0) {
            this.scriptEvaluationError('Attempted to pop from an empty alt stack.');
        }
        const item = this.altStack.pop();
        this.altStackMem -= item.length;
        return item;
    }
    checkSignatureEncoding(buf) {
        if (buf.length === 0) return true;
        if (!isChecksigFormatHelper(buf)) {
            this.scriptEvaluationError('The signature format is invalid.'); // Generic message like original
            return false;
        }
        try {
            const sig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromChecksigFormat(buf); // This can throw for stricter DER rules
            if (requireLowSSignatures && !sig.hasLowS()) {
                this.scriptEvaluationError('The signature must have a low S value.');
                return false;
            }
            if ((sig.scope & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SIGHASH_FORKID) === 0) {
                this.scriptEvaluationError('The signature must use SIGHASH_FORKID.');
                return false;
            }
        } catch (e) {
            this.scriptEvaluationError('The signature format is invalid.');
            return false;
        }
        return true;
    }
    checkPublicKeyEncoding(buf) {
        if (buf.length === 0) {
            this.scriptEvaluationError('Public key is empty.');
            return false;
        }
        if (buf.length < 33) {
            this.scriptEvaluationError('The public key is too short, it must be at least 33 bytes.');
            return false;
        }
        if (buf[0] === 0x04) {
            if (buf.length !== 65) {
                this.scriptEvaluationError('The non-compressed public key must be 65 bytes.');
                return false;
            }
        } else if (buf[0] === 0x02 || buf[0] === 0x03) {
            if (buf.length !== 33) {
                this.scriptEvaluationError('The compressed public key must be 33 bytes.');
                return false;
            }
        } else {
            this.scriptEvaluationError('The public key is in an unknown format.');
            return false;
        }
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDER(buf); // This can throw for stricter DER rules
        } catch (e) {
            this.scriptEvaluationError('The public key is in an unknown format.');
            return false;
        }
        return true;
    }
    verifySignature(sig, pubkey, subscript) {
        const preimage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].formatBytes({
            sourceTXID: this.sourceTXID,
            sourceOutputIndex: this.sourceOutputIndex,
            sourceSatoshis: this.sourceSatoshis,
            transactionVersion: this.transactionVersion,
            otherInputs: this.otherInputs,
            outputs: this.outputs,
            inputIndex: this.inputIndex,
            subscript,
            inputSequence: this.inputSequence,
            lockTime: this.lockTime,
            scope: sig.scope,
            cache: this.sigHashCache
        });
        const hash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash256"](preimage));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verify"])(hash, sig, pubkey);
    }
    step() {
        if (this.stackMem > this.memoryLimit) {
            this.scriptEvaluationError('Stack memory usage has exceeded ' + String(this.memoryLimit) + ' bytes');
            return false; // Error thrown
        }
        if (this.altStackMem > this.memoryLimit) {
            this.scriptEvaluationError('Alt stack memory usage has exceeded ' + String(this.memoryLimit) + ' bytes');
            return false; // Error thrown
        }
        if (this.context === 'UnlockingScript' && this.programCounter >= this.unlockingScript.chunks.length) {
            this.context = 'LockingScript';
            this.programCounter = 0;
        }
        const currentScript = this.context === 'UnlockingScript' ? this.unlockingScript : this.lockingScript;
        if (this.programCounter >= currentScript.chunks.length) {
            return false;
        }
        const operation = currentScript.chunks[this.programCounter];
        const currentOpcode = operation.op;
        if (typeof currentOpcode === 'undefined') {
            this.scriptEvaluationError(`Missing opcode in ${this.context} at pc=${this.programCounter}.`); // Error thrown
        }
        if (Array.isArray(operation.data) && operation.data.length > maxScriptElementSize) {
            this.scriptEvaluationError(`Data push > ${maxScriptElementSize} bytes (pc=${this.programCounter}).`); // Error thrown
        }
        const isScriptExecuting = !this.ifStack.includes(false);
        if (isScriptExecuting && isOpcodeDisabledHelper(currentOpcode)) {
            this.scriptEvaluationError(`This opcode is currently disabled. (Opcode: ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]}, PC: ${this.programCounter})`); // Error thrown
        }
        if (isScriptExecuting && currentOpcode >= 0 && currentOpcode <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PUSHDATA4) {
            if (requireMinimalPush && !isChunkMinimalPushHelper(operation)) {
                this.scriptEvaluationError(`This data is not minimally-encoded. (PC: ${this.programCounter})`); // Error thrown
            }
            this.pushStack(Array.isArray(operation.data) ? operation.data : []);
        } else if (isScriptExecuting || currentOpcode >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_IF && currentOpcode <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_ENDIF) {
            let buf, buf1, buf2, buf3;
            let x1, x2, x3;
            let bn, bn1, bn2, bn3;
            let n, size, fValue, fSuccess, subscript;
            let bufSig, bufPubkey;
            let sig, pubkey;
            let i, ikey, isig, nKeysCount, nSigsCount, fOk;
            switch(currentOpcode){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1NEGATE:
                    this.pushStackCopy(SCRIPTNUM_NEG_1);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_0:
                    this.pushStackCopy(SCRIPTNUMS_0_TO_16[0]);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_2:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_3:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_4:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_5:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_6:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_7:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_8:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_9:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_10:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_11:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_12:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_13:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_14:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_15:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_16:
                    n = currentOpcode - (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1 - 1);
                    this.pushStackCopy(SCRIPTNUMS_0_TO_16[n]);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP2:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP3:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP1:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP4:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP5:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP6:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP7:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP8:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP9:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP10:
                /* falls through */ // eslint-disable-next-line no-fallthrough
                // eslint-disable-next-line no-fallthrough
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP11:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP12:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP13:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP14:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP15:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP16:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP17:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP18:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP19:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP20:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP21:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP22:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP23:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP24:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP25:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP26:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP27:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP28:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP29:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP30:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP31:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP32:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP33:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP34:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP35:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP36:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP37:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP38:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP39:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP40:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP41:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP42:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP43:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP44:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP45:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP46:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP47:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP48:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP49:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP50:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP51:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP52:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP53:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP54:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP55:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP56:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP57:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP58:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP59:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP60:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP61:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP62:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP63:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP64:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP65:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP66:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP67:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP68:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP69:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP70:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP71:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP72:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP73:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOP77:
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_IF:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOTIF:
                    fValue = false;
                    if (isScriptExecuting) {
                        if (this.stack.length < 1) this.scriptEvaluationError('OP_IF and OP_NOTIF require at least one item on the stack when they are used!');
                        buf = this.popStack();
                        fValue = this.castToBool(buf);
                        if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOTIF) fValue = !fValue;
                    }
                    this.ifStack.push(fValue);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_ELSE:
                    if (this.ifStack.length === 0) this.scriptEvaluationError('OP_ELSE requires a preceeding OP_IF.');
                    this.ifStack[this.ifStack.length - 1] = !this.ifStack[this.ifStack.length - 1];
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_ENDIF:
                    if (this.ifStack.length === 0) this.scriptEvaluationError('OP_ENDIF requires a preceeding OP_IF.');
                    this.ifStack.pop();
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_VERIFY:
                    if (this.stack.length < 1) this.scriptEvaluationError('OP_VERIFY requires at least one item to be on the stack.');
                    buf1 = this.stackTop();
                    fValue = this.castToBool(buf1);
                    if (!fValue) this.scriptEvaluationError('OP_VERIFY requires the top stack value to be truthy.');
                    this.popStack();
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_RETURN:
                    if (this.context === 'UnlockingScript') this.programCounter = this.unlockingScript.chunks.length;
                    else this.programCounter = this.lockingScript.chunks.length;
                    this.ifStack = [];
                    this.programCounter--; // To counteract the final increment and ensure loop termination
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_TOALTSTACK:
                    if (this.stack.length < 1) this.scriptEvaluationError('OP_TOALTSTACK requires at oeast one item to be on the stack.');
                    this.pushAltStack(this.popStack());
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_FROMALTSTACK:
                    if (this.altStack.length < 1) this.scriptEvaluationError('OP_FROMALTSTACK requires at least one item to be on the stack.'); // "stack" here means altstack
                    this.pushStack(this.popAltStack());
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_2DROP:
                    if (this.stack.length < 2) this.scriptEvaluationError('OP_2DROP requires at least two items to be on the stack.');
                    this.popStack();
                    this.popStack();
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_2DUP:
                    if (this.stack.length < 2) this.scriptEvaluationError('OP_2DUP requires at least two items to be on the stack.');
                    buf1 = this.stackTop(-2);
                    buf2 = this.stackTop(-1);
                    this.pushStackCopy(buf1);
                    this.pushStackCopy(buf2);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_3DUP:
                    if (this.stack.length < 3) this.scriptEvaluationError('OP_3DUP requires at least three items to be on the stack.');
                    buf1 = this.stackTop(-3);
                    buf2 = this.stackTop(-2);
                    buf3 = this.stackTop(-1);
                    this.pushStackCopy(buf1);
                    this.pushStackCopy(buf2);
                    this.pushStackCopy(buf3);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_2OVER:
                    if (this.stack.length < 4) this.scriptEvaluationError('OP_2OVER requires at least four items to be on the stack.');
                    buf1 = this.stackTop(-4);
                    buf2 = this.stackTop(-3);
                    this.pushStackCopy(buf1);
                    this.pushStackCopy(buf2);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_2ROT:
                    {
                        if (this.stack.length < 6) this.scriptEvaluationError('OP_2ROT requires at least six items to be on the stack.');
                        const rot6 = this.popStack();
                        const rot5 = this.popStack();
                        const rot4 = this.popStack();
                        const rot3 = this.popStack();
                        const rot2 = this.popStack();
                        const rot1 = this.popStack();
                        this.pushStack(rot3);
                        this.pushStack(rot4);
                        this.pushStack(rot5);
                        this.pushStack(rot6);
                        this.pushStack(rot1);
                        this.pushStack(rot2);
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_2SWAP:
                    {
                        if (this.stack.length < 4) this.scriptEvaluationError('OP_2SWAP requires at least four items to be on the stack.');
                        const swap4 = this.popStack();
                        const swap3 = this.popStack();
                        const swap2 = this.popStack();
                        const swap1 = this.popStack();
                        this.pushStack(swap3);
                        this.pushStack(swap4);
                        this.pushStack(swap1);
                        this.pushStack(swap2);
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_IFDUP:
                    if (this.stack.length < 1) this.scriptEvaluationError('OP_IFDUP requires at least one item to be on the stack.');
                    buf1 = this.stackTop();
                    if (this.castToBool(buf1)) {
                        this.pushStackCopy(buf1);
                    }
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_DEPTH:
                    this.pushStack(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this.stack.length).toScriptNum());
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_DROP:
                    if (this.stack.length < 1) this.scriptEvaluationError('OP_DROP requires at least one item to be on the stack.');
                    this.popStack();
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_DUP:
                    if (this.stack.length < 1) this.scriptEvaluationError('OP_DUP requires at least one item to be on the stack.');
                    this.pushStackCopy(this.stackTop());
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NIP:
                    if (this.stack.length < 2) this.scriptEvaluationError('OP_NIP requires at least two items to be on the stack.');
                    buf2 = this.popStack();
                    this.popStack();
                    this.pushStack(buf2);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_OVER:
                    if (this.stack.length < 2) this.scriptEvaluationError('OP_OVER requires at least two items to be on the stack.');
                    this.pushStackCopy(this.stackTop(-2));
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_PICK:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_ROLL:
                    {
                        if (this.stack.length < 2) this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires at least two items to be on the stack.`);
                        bn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromScriptNum(this.popStack(), requireMinimalPush);
                        const nBigInt = bn.toBigInt();
                        if (nBigInt < 0n || nBigInt >= BigInt(this.stack.length)) {
                            this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires the top stack element to be 0 or a positive number less than the current size of the stack.`);
                        }
                        const nIndex = Number(nBigInt);
                        const itemToMoveOrCopy = this.stack[this.stack.length - 1 - nIndex];
                        if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_ROLL) {
                            this.stack.splice(this.stack.length - 1 - nIndex, 1);
                            this.stackMem -= itemToMoveOrCopy.length;
                            this.pushStack(itemToMoveOrCopy);
                        } else {
                            this.pushStackCopy(itemToMoveOrCopy);
                        }
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_ROT:
                    if (this.stack.length < 3) this.scriptEvaluationError('OP_ROT requires at least three items to be on the stack.');
                    x3 = this.popStack();
                    x2 = this.popStack();
                    x1 = this.popStack();
                    this.pushStack(x2);
                    this.pushStack(x3);
                    this.pushStack(x1);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SWAP:
                    if (this.stack.length < 2) this.scriptEvaluationError('OP_SWAP requires at least two items to be on the stack.');
                    x2 = this.popStack();
                    x1 = this.popStack();
                    this.pushStack(x2);
                    this.pushStack(x1);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_TUCK:
                    if (this.stack.length < 2) this.scriptEvaluationError('OP_TUCK requires at least two items to be on the stack.');
                    buf1 = this.stackTop(-1); // Top element (x2)
                    // stack is [... rest, x1, x2]
                    // We want [... rest, x2_copy, x1, x2]
                    this.ensureStackMem(buf1.length);
                    this.stack.splice(this.stack.length - 2, 0, buf1.slice()); // Insert copy of x2 before x1
                    this.stackMem += buf1.length; // Account for the new copy
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SIZE:
                    if (this.stack.length < 1) this.scriptEvaluationError('OP_SIZE requires at least one item to be on the stack.');
                    this.pushStack(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this.stackTop().length).toScriptNum());
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_AND:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_OR:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_XOR:
                    {
                        if (this.stack.length < 2) this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires at least two items on the stack.`);
                        buf2 = this.popStack();
                        buf1 = this.popStack();
                        if (buf1.length !== buf2.length) this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires the top two stack items to be the same size.`);
                        const resultBufBitwiseOp = new Array(buf1.length);
                        for(let k = 0; k < buf1.length; k++){
                            if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_AND) resultBufBitwiseOp[k] = buf1[k] & buf2[k];
                            else if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_OR) resultBufBitwiseOp[k] = buf1[k] | buf2[k];
                            else resultBufBitwiseOp[k] = buf1[k] ^ buf2[k];
                        }
                        this.pushStack(resultBufBitwiseOp);
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_INVERT:
                    {
                        if (this.stack.length < 1) this.scriptEvaluationError('OP_INVERT requires at least one item to be on the stack.');
                        buf = this.popStack();
                        const invertedBufOp = new Array(buf.length);
                        for(let k = 0; k < buf.length; k++){
                            invertedBufOp[k] = ~buf[k] & 0xff;
                        }
                        this.pushStack(invertedBufOp);
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_LSHIFT:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_RSHIFT:
                    {
                        if (this.stack.length < 2) this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires at least two items to be on the stack.`);
                        bn2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromScriptNum(this.popStack(), requireMinimalPush); // n (shift amount)
                        buf1 = this.popStack(); // value to shift
                        const shiftBits = bn2.toBigInt();
                        if (shiftBits < 0n) this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires the top item on the stack not to be negative.`);
                        if (buf1.length === 0) {
                            this.pushStack([]);
                            break;
                        }
                        bn1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](buf1);
                        let shiftedBn;
                        if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_LSHIFT) shiftedBn = bn1.ushln(shiftBits);
                        else shiftedBn = bn1.ushrn(shiftBits);
                        const shiftedArr = shiftedBn.toArray('be', buf1.length);
                        this.pushStack(shiftedArr);
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_EQUAL:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_EQUALVERIFY:
                    if (this.stack.length < 2) this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires at least two items to be on the stack.`);
                    buf2 = this.popStack();
                    buf1 = this.popStack();
                    fValue = compareNumberArrays(buf1, buf2);
                    this.pushStack(fValue ? [
                        1
                    ] : []);
                    if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_EQUALVERIFY) {
                        if (!fValue) this.scriptEvaluationError('OP_EQUALVERIFY requires the top two stack items to be equal.');
                        this.popStack();
                    }
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1ADD:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1SUB:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NEGATE:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_ABS:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOT:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_0NOTEQUAL:
                    if (this.stack.length < 1) this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires at least one item to be on the stack.`);
                    bn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromScriptNum(this.popStack(), requireMinimalPush);
                    switch(currentOpcode){
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1ADD:
                            bn = bn.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1));
                            break;
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1SUB:
                            bn = bn.sub(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1));
                            break;
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NEGATE:
                            bn = bn.neg();
                            break;
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_ABS:
                            if (bn.isNeg()) bn = bn.neg();
                            break;
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NOT:
                            bn = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bn.cmpn(0) === 0 ? 1 : 0);
                            break;
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_0NOTEQUAL:
                            bn = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bn.cmpn(0) !== 0 ? 1 : 0);
                            break;
                    }
                    this.pushStack(bn.toScriptNum());
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_ADD:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SUB:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_MUL:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_DIV:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_MOD:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_BOOLAND:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_BOOLOR:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NUMEQUAL:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NUMEQUALVERIFY:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NUMNOTEQUAL:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_LESSTHAN:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_GREATERTHAN:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_LESSTHANOREQUAL:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_GREATERTHANOREQUAL:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_MIN:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_MAX:
                    {
                        if (this.stack.length < 2) this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires at least two items to be on the stack.`);
                        buf2 = this.popStack();
                        buf1 = this.popStack();
                        bn2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromScriptNum(buf2, requireMinimalPush);
                        bn1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromScriptNum(buf1, requireMinimalPush);
                        let predictedLen = 0;
                        switch(currentOpcode){
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_MUL:
                                predictedLen = bn1.byteLength() + bn2.byteLength();
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_ADD:
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SUB:
                                predictedLen = Math.max(bn1.byteLength(), bn2.byteLength()) + 1;
                                break;
                            default:
                                predictedLen = Math.max(bn1.byteLength(), bn2.byteLength());
                        }
                        this.ensureStackMem(predictedLen);
                        let resultBnArithmetic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
                        switch(currentOpcode){
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_ADD:
                                resultBnArithmetic = bn1.add(bn2);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SUB:
                                resultBnArithmetic = bn1.sub(bn2);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_MUL:
                                resultBnArithmetic = bn1.mul(bn2);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_DIV:
                                if (bn2.cmpn(0) === 0) this.scriptEvaluationError('OP_DIV cannot divide by zero!');
                                resultBnArithmetic = bn1.div(bn2);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_MOD:
                                if (bn2.cmpn(0) === 0) this.scriptEvaluationError('OP_MOD cannot divide by zero!');
                                resultBnArithmetic = bn1.mod(bn2);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_BOOLAND:
                                resultBnArithmetic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bn1.cmpn(0) !== 0 && bn2.cmpn(0) !== 0 ? 1 : 0);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_BOOLOR:
                                resultBnArithmetic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bn1.cmpn(0) !== 0 || bn2.cmpn(0) !== 0 ? 1 : 0);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NUMEQUAL:
                                resultBnArithmetic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bn1.cmp(bn2) === 0 ? 1 : 0);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NUMEQUALVERIFY:
                                resultBnArithmetic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bn1.cmp(bn2) === 0 ? 1 : 0);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NUMNOTEQUAL:
                                resultBnArithmetic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bn1.cmp(bn2) !== 0 ? 1 : 0);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_LESSTHAN:
                                resultBnArithmetic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bn1.cmp(bn2) < 0 ? 1 : 0);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_GREATERTHAN:
                                resultBnArithmetic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bn1.cmp(bn2) > 0 ? 1 : 0);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_LESSTHANOREQUAL:
                                resultBnArithmetic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bn1.cmp(bn2) <= 0 ? 1 : 0);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_GREATERTHANOREQUAL:
                                resultBnArithmetic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bn1.cmp(bn2) >= 0 ? 1 : 0);
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_MIN:
                                resultBnArithmetic = bn1.cmp(bn2) < 0 ? bn1 : bn2;
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_MAX:
                                resultBnArithmetic = bn1.cmp(bn2) > 0 ? bn1 : bn2;
                                break;
                        }
                        this.pushStack(resultBnArithmetic.toScriptNum());
                        if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NUMEQUALVERIFY) {
                            if (!this.castToBool(this.stackTop())) this.scriptEvaluationError('OP_NUMEQUALVERIFY requires the top stack item to be truthy.');
                            this.popStack();
                        }
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_WITHIN:
                    if (this.stack.length < 3) this.scriptEvaluationError('OP_WITHIN requires at least three items to be on the stack.');
                    bn3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromScriptNum(this.popStack(), requireMinimalPush); // max
                    bn2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromScriptNum(this.popStack(), requireMinimalPush); // min
                    bn1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromScriptNum(this.popStack(), requireMinimalPush); // x
                    fValue = bn1.cmp(bn2) >= 0 && bn1.cmp(bn3) < 0;
                    this.pushStack(fValue ? [
                        1
                    ] : []);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_RIPEMD160:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SHA1:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SHA256:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_HASH160:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_HASH256:
                    {
                        if (this.stack.length < 1) this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires at least one item to be on the stack.`);
                        buf = this.popStack();
                        let hashResult = []; // Initialize to empty, to satisfy TS compiler
                        if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_RIPEMD160) hashResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ripemd160"](buf);
                        else if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SHA1) hashResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha1"](buf);
                        else if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SHA256) hashResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"](buf);
                        else if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_HASH160) hashResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash160"](buf);
                        else if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_HASH256) hashResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash256"](buf);
                        this.pushStack(hashResult);
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_CODESEPARATOR:
                    this.lastCodeSeparator = this.programCounter;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_CHECKSIG:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_CHECKSIGVERIFY:
                    {
                        if (this.stack.length < 2) this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires at least two items to be on the stack.`);
                        bufPubkey = this.popStack();
                        bufSig = this.popStack();
                        if (!this.checkSignatureEncoding(bufSig) || !this.checkPublicKeyEncoding(bufPubkey)) {
                            // Error already thrown by helpers
                            this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires correct encoding for the public key and signature.`); // Fallback, should be unreachable
                        }
                        const scriptForChecksig = this.context === 'UnlockingScript' ? this.unlockingScript : this.lockingScript;
                        const scriptCodeChunks = scriptForChecksig.chunks.slice(this.lastCodeSeparator === null ? 0 : this.lastCodeSeparator + 1);
                        subscript = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](scriptCodeChunks);
                        subscript.findAndDelete(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]().writeBin(bufSig));
                        fSuccess = false;
                        if (bufSig.length > 0) {
                            try {
                                sig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromChecksigFormat(bufSig);
                                pubkey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDER(bufPubkey);
                                fSuccess = this.verifySignature(sig, pubkey, subscript);
                            } catch (e) {
                                fSuccess = false;
                            }
                        }
                        this.pushStack(fSuccess ? [
                            1
                        ] : []);
                        if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_CHECKSIGVERIFY) {
                            if (!fSuccess) this.scriptEvaluationError('OP_CHECKSIGVERIFY requires that a valid signature is provided.');
                            this.popStack();
                        }
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_CHECKMULTISIG:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_CHECKMULTISIGVERIFY:
                    {
                        i = 1;
                        if (this.stack.length < i) {
                            this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires at least 1 item for nKeys.`);
                        }
                        const nKeysCountBN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromScriptNum(this.stackTop(-i), requireMinimalPush);
                        const nKeysCountBigInt = nKeysCountBN.toBigInt();
                        if (nKeysCountBigInt < 0n || nKeysCountBigInt > maxMultisigKeyCountBigInt) {
                            this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires a key count between 0 and ${maxMultisigKeyCount}.`);
                        }
                        nKeysCount = Number(nKeysCountBigInt);
                        const declaredKeyCount = nKeysCount;
                        ikey = ++i;
                        i += nKeysCount;
                        if (this.stack.length < i) {
                            this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} stack too small for nKeys and keys. Need ${i}, have ${this.stack.length}.`);
                        }
                        const nSigsCountBN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromScriptNum(this.stackTop(-i), requireMinimalPush);
                        const nSigsCountBigInt = nSigsCountBN.toBigInt();
                        if (nSigsCountBigInt < 0n || nSigsCountBigInt > BigInt(nKeysCount)) {
                            this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires the number of signatures to be no greater than the number of keys.`);
                        }
                        nSigsCount = Number(nSigsCountBigInt);
                        const declaredSigCount = nSigsCount;
                        isig = ++i;
                        i += nSigsCount;
                        if (this.stack.length < i) {
                            this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} stack too small for N, keys, M, sigs, and dummy. Need ${i}, have ${this.stack.length}.`);
                        }
                        const baseScriptCMS = this.context === 'UnlockingScript' ? this.unlockingScript : this.lockingScript;
                        const subscriptChunksCMS = baseScriptCMS.chunks.slice(this.lastCodeSeparator === null ? 0 : this.lastCodeSeparator + 1);
                        subscript = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](subscriptChunksCMS);
                        for(let k = 0; k < nSigsCount; k++){
                            bufSig = this.stackTop(-isig - k); // Sigs are closer to top than keys
                            subscript.findAndDelete(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]().writeBin(bufSig));
                        }
                        fSuccess = true;
                        while(fSuccess && nSigsCount > 0){
                            if (nKeysCount === 0) {
                                fSuccess = false;
                                break;
                            }
                            bufSig = this.stackTop(-isig);
                            bufPubkey = this.stackTop(-ikey);
                            if (!this.checkSignatureEncoding(bufSig) || !this.checkPublicKeyEncoding(bufPubkey)) {
                                this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires correct encoding for the public key and signature.`);
                            }
                            fOk = false;
                            if (bufSig.length > 0) {
                                try {
                                    sig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromChecksigFormat(bufSig);
                                    pubkey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDER(bufPubkey);
                                    fOk = this.verifySignature(sig, pubkey, subscript);
                                } catch (e) {
                                    fOk = false;
                                }
                            }
                            if (fOk) {
                                isig++;
                                nSigsCount--;
                            }
                            ikey++;
                            nKeysCount--;
                            if (nSigsCount > nKeysCount) {
                                fSuccess = false;
                            }
                        }
                        // Correct total items consumed by op (N_val, keys, M_val, sigs, dummy)
                        const itemsConsumedByOp = 1 + // N_val
                        declaredKeyCount + // keys
                        1 + // M_val
                        declaredSigCount + // sigs
                        1; // dummy
                        let popCount = itemsConsumedByOp - 1; // Pop all except dummy
                        while(popCount > 0){
                            this.popStack();
                            popCount--;
                        }
                        // Check and pop dummy
                        if (this.stack.length < 1) {
                            this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires an extra item (dummy) to be on the stack.`);
                        }
                        const dummyBuf = this.popStack();
                        if (dummyBuf.length > 0) {
                            this.scriptEvaluationError(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][currentOpcode]} requires the extra stack item (dummy) to be empty.`);
                        }
                        this.pushStack(fSuccess ? [
                            1
                        ] : []);
                        if (currentOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_CHECKMULTISIGVERIFY) {
                            if (!fSuccess) this.scriptEvaluationError('OP_CHECKMULTISIGVERIFY requires that a sufficient number of valid signatures are provided.');
                            this.popStack();
                        }
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_CAT:
                    {
                        if (this.stack.length < 2) this.scriptEvaluationError('OP_CAT requires at least two items to be on the stack.');
                        buf2 = this.popStack();
                        buf1 = this.popStack();
                        const catResult = buf1.concat(buf2);
                        if (catResult.length > maxScriptElementSize) this.scriptEvaluationError(`It's not currently possible to push data larger than ${maxScriptElementSize} bytes.`);
                        this.pushStack(catResult);
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SPLIT:
                    {
                        if (this.stack.length < 2) this.scriptEvaluationError('OP_SPLIT requires at least two items to be on the stack.');
                        const posBuf = this.popStack();
                        const dataToSplit = this.popStack();
                        const splitIndexBigInt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromScriptNum(posBuf, requireMinimalPush).toBigInt();
                        if (splitIndexBigInt < 0n || splitIndexBigInt > BigInt(dataToSplit.length)) {
                            this.scriptEvaluationError('OP_SPLIT requires the first stack item to be a non-negative number less than or equal to the size of the second-from-top stack item.');
                        }
                        const splitIndex = Number(splitIndexBigInt);
                        this.pushStack(dataToSplit.slice(0, splitIndex));
                        this.pushStack(dataToSplit.slice(splitIndex));
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NUM2BIN:
                    {
                        if (this.stack.length < 2) this.scriptEvaluationError('OP_NUM2BIN requires at least two items to be on the stack.');
                        const sizeBigInt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromScriptNum(this.popStack(), requireMinimalPush).toBigInt();
                        if (sizeBigInt > BigInt(maxScriptElementSize) || sizeBigInt < 0n) {
                            this.scriptEvaluationError(`It's not currently possible to push data larger than ${maxScriptElementSize} bytes or negative size.`);
                        }
                        size = Number(sizeBigInt);
                        let rawnum = this.popStack(); // This is the number to convert
                        rawnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimallyEncode"])(rawnum); // Get its minimal scriptnum form
                        if (rawnum.length > size) {
                            this.scriptEvaluationError('OP_NUM2BIN requires that the size expressed in the top stack item is large enough to hold the value expressed in the second-from-top stack item.');
                        }
                        if (rawnum.length === size) {
                            this.pushStack(rawnum);
                            break;
                        }
                        const resultN2B = new Array(size).fill(0x00);
                        let signbit = 0x00;
                        if (rawnum.length > 0) {
                            signbit = rawnum[rawnum.length - 1] & 0x80; // Store sign bit
                            rawnum[rawnum.length - 1] &= 0x7f; // Remove sign bit for padding
                        }
                        // Copy rawnum (now positive magnitude) into the result
                        for(let k = 0; k < rawnum.length; k++){
                            resultN2B[k] = rawnum[k];
                        }
                        // If the original number was negative, the sign bit must be set on the new MSB
                        if (signbit !== 0) {
                            resultN2B[size - 1] |= 0x80;
                        }
                        this.pushStack(resultN2B);
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_BIN2NUM:
                    {
                        if (this.stack.length < 1) this.scriptEvaluationError('OP_BIN2NUM requires at least one item to be on the stack.');
                        buf1 = this.popStack();
                        const b2nResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minimallyEncode"])(buf1);
                        if (!isMinimallyEncodedHelper(b2nResult)) {
                            this.scriptEvaluationError('OP_BIN2NUM requires that the resulting number is valid.');
                        }
                        this.pushStack(b2nResult);
                        break;
                    }
                default:
                    this.scriptEvaluationError(`Invalid opcode ${currentOpcode} (pc=${this.programCounter}).`);
            }
        }
        this.programCounter++;
        return true;
    }
    /**
     * @method validate
     * Validates the spend action by interpreting the locking and unlocking scripts.
     * @returns {boolean} Returns true if the scripts are valid and the spend is legitimate, otherwise false.
     * @example
     * if (spend.validate()) {
     *   console.log("Spend is valid!");
     * } else {
     *   console.log("Invalid spend!");
     * }
     */ validate() {
        if (requirePushOnlyUnlockingScripts && !this.unlockingScript.isPushOnly()) {
            this.scriptEvaluationError('Unlocking scripts can only contain push operations, and no other opcodes.');
        }
        while(this.step()){
            if (this.context === 'LockingScript' && this.programCounter >= this.lockingScript.chunks.length) {
                break;
            }
        }
        if (this.ifStack.length > 0) {
            this.scriptEvaluationError('Every OP_IF, OP_NOTIF, or OP_ELSE must be terminated with OP_ENDIF prior to the end of the script.');
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (this.stack.length !== 1) {
                this.scriptEvaluationError(`The clean stack rule requires exactly one item to be on the stack after script execution, found ${this.stack.length}.`);
            }
        }
        if (this.stack.length === 0) {
            this.scriptEvaluationError('The top stack element must be truthy after script evaluation (stack is empty).');
        } else if (!this.castToBool(this.stackTop())) {
            this.scriptEvaluationError('The top stack element must be truthy after script evaluation.');
        }
        return true;
    }
    castToBool(val) {
        if (val.length === 0) return false;
        for(let i = 0; i < val.length; i++){
            if (val[i] !== 0) {
                return !(i === val.length - 1 && val[i] === 0x80);
            }
        }
        return false;
    }
    scriptEvaluationError(str) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$ScriptEvaluationError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
            message: str,
            txid: this.sourceTXID,
            outputIndex: this.sourceOutputIndex,
            context: this.context,
            programCounter: this.programCounter,
            stackState: this.stack,
            altStackState: this.altStack,
            ifStackState: this.ifStack,
            stackMem: this.stackMem,
            altStackMem: this.altStackMem
        });
    }
} //# sourceMappingURL=Spend.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/P2PKH.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>P2PKH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/OP.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/LockingScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/UnlockingScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/TransactionSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
;
;
;
;
;
;
class P2PKH {
    /**
     * Creates a P2PKH locking script for a given public key hash or address string
     *
     * @param {number[] | string} pubkeyhash or address - An array or address representing the public key hash.
     * @returns {LockingScript} - A P2PKH locking script.
     */ lock(pubkeyhash) {
        let data;
        if (typeof pubkeyhash === 'string') {
            const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase58Check"])(pubkeyhash);
            if (hash.prefix[0] !== 0x00 && hash.prefix[0] !== 0x6f) {
                throw new Error('only P2PKH is supported');
            }
            data = hash.data;
        } else {
            data = pubkeyhash;
        }
        if (data.length !== 20) {
            throw new Error('P2PKH hash length must be 20 bytes');
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]([
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_DUP
            },
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_HASH160
            },
            {
                op: data.length,
                data
            },
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_EQUALVERIFY
            },
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_CHECKSIG
            }
        ]);
    }
    /**
     * Creates a function that generates a P2PKH unlocking script along with its signature and length estimation.
     *
     * The returned object contains:
     * 1. `sign` - A function that, when invoked with a transaction and an input index,
     *    produces an unlocking script suitable for a P2PKH locked output.
     * 2. `estimateLength` - A function that returns the estimated length of the unlocking script in bytes.
     *
     * @param {PrivateKey} privateKey - The private key used for signing the transaction.
     * @param {'all'|'none'|'single'} signOutputs - The signature scope for outputs.
     * @param {boolean} anyoneCanPay - Flag indicating if the signature allows for other inputs to be added later.
     * @param {number} sourceSatoshis - Optional. The amount being unlocked. Otherwise the input.sourceTransaction is required.
     * @param {Script} lockingScript - Optional. The lockinScript. Otherwise the input.sourceTransaction is required.
     * @returns {Object} - An object containing the `sign` and `estimateLength` functions.
     */ unlock(privateKey, signOutputs = 'all', anyoneCanPay = false, sourceSatoshis, lockingScript) {
        return {
            sign: async (tx, inputIndex)=>{
                let signatureScope = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SIGHASH_FORKID;
                if (signOutputs === 'all') {
                    signatureScope |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SIGHASH_ALL;
                }
                if (signOutputs === 'none') {
                    signatureScope |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SIGHASH_NONE;
                }
                if (signOutputs === 'single') {
                    signatureScope |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SIGHASH_SINGLE;
                }
                if (anyoneCanPay) {
                    signatureScope |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SIGHASH_ANYONECANPAY;
                }
                const input = tx.inputs[inputIndex];
                const otherInputs = tx.inputs.filter((_, index)=>index !== inputIndex);
                const sourceTXID = input.sourceTXID ?? input.sourceTransaction?.id('hex');
                if (sourceTXID == null || sourceTXID === undefined) {
                    throw new Error('The input sourceTXID or sourceTransaction is required for transaction signing.');
                }
                if (sourceTXID === '') {
                    throw new Error('The input sourceTXID or sourceTransaction is required for transaction signing.');
                }
                sourceSatoshis ||= input.sourceTransaction?.outputs[input.sourceOutputIndex].satoshis;
                if (sourceSatoshis == null || sourceSatoshis === undefined) {
                    throw new Error('The sourceSatoshis or input sourceTransaction is required for transaction signing.');
                }
                lockingScript ||= input.sourceTransaction?.outputs[input.sourceOutputIndex].lockingScript;
                if (lockingScript == null) {
                    throw new Error('The lockingScript or input sourceTransaction is required for transaction signing.');
                }
                const preimage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].format({
                    sourceTXID,
                    sourceOutputIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyNotNull"])(input.sourceOutputIndex, 'input.sourceOutputIndex must have value'),
                    sourceSatoshis,
                    transactionVersion: tx.version,
                    otherInputs,
                    inputIndex,
                    outputs: tx.outputs,
                    inputSequence: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyNotNull"])(input.sequence, 'input.sequence must have value'),
                    subscript: lockingScript,
                    lockTime: tx.lockTime,
                    scope: signatureScope
                });
                const rawSignature = privateKey.sign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(preimage));
                const sig = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](rawSignature.r, rawSignature.s, signatureScope);
                const sigForScript = sig.toChecksigFormat();
                const pubkeyForScript = privateKey.toPublicKey().encode(true);
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]([
                    {
                        op: sigForScript.length,
                        data: sigForScript
                    },
                    {
                        op: pubkeyForScript.length,
                        data: pubkeyForScript
                    }
                ]);
            },
            estimateLength: async ()=>{
                // public key (1+33) + signature (1+73)
                // Note: We add 1 to each element's length because of the associated OP_PUSH
                return 108;
            }
        };
    }
} //# sourceMappingURL=P2PKH.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/RPuzzle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RPuzzle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/OP.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/LockingScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/UnlockingScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/TransactionSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/Script.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class RPuzzle {
    type = 'raw';
    /**
     * @constructor
     * Constructs an R Puzzle template instance for a given puzzle type
     *
     * @param {'raw'|'SHA1'|'SHA256'|'HASH256'|'RIPEMD160'|'HASH160'} type Denotes the type of puzzle to create
     */ constructor(type = 'raw'){
        this.type = type;
    }
    /**
     * Creates an R puzzle locking script for a given R value or R value hash.
     *
     * @param {number[]} value - An array representing the R value or its hash.
     * @returns {LockingScript} - An R puzzle locking script.
     */ lock(value) {
        const chunks = [
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_OVER
            },
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_3
            },
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SPLIT
            },
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_NIP
            },
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_1
            },
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SPLIT
            },
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SWAP
            },
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_SPLIT
            },
            {
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_DROP
            }
        ];
        if (this.type !== 'raw') {
            chunks.push({
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['OP_' + this.type]
            });
        }
        chunks.push({
            op: value.length,
            data: value
        });
        chunks.push({
            op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_EQUALVERIFY
        });
        chunks.push({
            op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].OP_CHECKSIG
        });
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](chunks);
    }
    /**
     * Creates a function that generates an R puzzle unlocking script along with its signature and length estimation.
     *
     * The returned object contains:
     * 1. `sign` - A function that, when invoked with a transaction and an input index,
     *    produces an unlocking script suitable for an R puzzle locked output.
     * 2. `estimateLength` - A function that returns the estimated length of the unlocking script in bytes.
     *
     * @param {BigNumber} k — The K-value used to unlock the R-puzzle.
     * @param {PrivateKey} privateKey - The private key used for signing the transaction. If not provided, a random key will be generated.
     * @param {'all'|'none'|'single'} signOutputs - The signature scope for outputs.
     * @param {boolean} anyoneCanPay - Flag indicating if the signature allows for other inputs to be added later.
     * @returns {Object} - An object containing the `sign` and `estimateLength` functions.
     */ unlock(k, privateKey, signOutputs = 'all', anyoneCanPay = false) {
        return {
            sign: async (tx, inputIndex)=>{
                if (typeof privateKey === 'undefined') {
                    privateKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromRandom();
                }
                let signatureScope = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SIGHASH_FORKID;
                if (signOutputs === 'all') {
                    signatureScope |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SIGHASH_ALL;
                }
                if (signOutputs === 'none') {
                    signatureScope |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SIGHASH_NONE;
                }
                if (signOutputs === 'single') {
                    signatureScope |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SIGHASH_SINGLE;
                }
                if (anyoneCanPay) {
                    signatureScope |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SIGHASH_ANYONECANPAY;
                }
                const otherInputs = [
                    ...tx.inputs
                ];
                const [input] = otherInputs.splice(inputIndex, 1);
                if (typeof input.sourceTransaction !== 'object') {
                    throw new Error('The source transaction is needed for transaction signing.');
                }
                const preimage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].format({
                    sourceTXID: input.sourceTransaction?.id('hex') ?? '',
                    sourceOutputIndex: input.sourceOutputIndex ?? 0,
                    sourceSatoshis: input.sourceTransaction?.outputs[input.sourceOutputIndex]?.satoshis ?? 0,
                    transactionVersion: tx.version,
                    otherInputs,
                    inputIndex,
                    outputs: tx.outputs,
                    inputSequence: input.sequence ?? 0xffffffff,
                    subscript: input.sourceTransaction?.outputs[input.sourceOutputIndex]?.lockingScript ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](),
                    lockTime: tx.lockTime,
                    scope: signatureScope
                });
                const rawSignature = privateKey.sign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(preimage), undefined, true, k);
                const sig = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](rawSignature.r, rawSignature.s, signatureScope);
                const sigForScript = sig.toChecksigFormat();
                const pubkeyForScript = privateKey.toPublicKey().encode(true);
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]([
                    {
                        op: sigForScript.length,
                        data: sigForScript
                    },
                    {
                        op: pubkeyForScript.length,
                        data: pubkeyForScript
                    }
                ]);
            },
            estimateLength: async ()=>{
                // public key (1+33) + signature (1+73)
                // Note: We add 1 to each element's length because of the associated OP_PUSH
                return 108;
            }
        };
    }
} //# sourceMappingURL=RPuzzle.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/LockingScript.js [app-client] (ecmascript) <export default as LockingScript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LockingScript",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/LockingScript.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/UnlockingScript.js [app-client] (ecmascript) <export default as UnlockingScript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnlockingScript",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/UnlockingScript.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/OP.js [app-client] (ecmascript) <export default as OP>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OP",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/OP.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/PushDrop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PushDrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockingScript$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/LockingScript.js [app-client] (ecmascript) <export default as LockingScript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UnlockingScript$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/UnlockingScript.js [app-client] (ecmascript) <export default as UnlockingScript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OP$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/OP.js [app-client] (ecmascript) <export default as OP>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript) <export * as Utils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript) <export * as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TransactionSignature$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/TransactionSignature.js [app-client] (ecmascript) <export default as TransactionSignature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Signature$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Signature.js [app-client] (ecmascript) <export default as Signature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PublicKey$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-client] (ecmascript) <export default as PublicKey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
;
;
;
/**
 * For a given piece of data to push onto the stack in script, creates the correct minimally-encoded script chunk,
 * including the correct push operation.
 *
 * TODO: This should be made into a TS-SDK util (distinct from the `minimallyEncode` util)
 */ const createMinimallyEncodedScriptChunk = (data)=>{
    if (data.length === 0) {
        // Could have used OP_0.
        return {
            op: 0
        };
    }
    if (data.length === 1 && data[0] === 0) {
        // Could have used OP_0.
        return {
            op: 0
        };
    }
    if (data.length === 1 && data[0] > 0 && data[0] <= 16) {
        // Could have used OP_0 .. OP_16.
        return {
            op: 0x50 + data[0]
        };
    }
    if (data.length === 1 && data[0] === 0x81) {
        // Could have used OP_1NEGATE.
        return {
            op: 0x4f
        };
    }
    if (data.length <= 75) {
        // Could have used a direct push (opcode indicating number of bytes
        // pushed + those bytes).
        return {
            op: data.length,
            data
        };
    }
    if (data.length <= 255) {
        // Could have used OP_PUSHDATA.
        return {
            op: 0x4c,
            data
        };
    }
    if (data.length <= 65535) {
        // Could have used OP_PUSHDATA2.
        return {
            op: 0x4d,
            data
        };
    }
    return {
        op: 0x4e,
        data
    };
};
class PushDrop {
    wallet;
    originator;
    /**
     * Decodes a PushDrop script back into its token fields and the locking public key. If a signature was present, it will be the last field returned.
     * Warning: Only works with a P2PK lock at the beginning of the script.
     * @param script PushDrop script to decode back into token fields
     * @returns An object containing PushDrop token fields and the locking public key. If a signature was included, it will be the last field.
     */ static decode(script) {
        const lockingPublicKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PublicKey$3e$__["PublicKey"].fromString(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toHex((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyNotNull"])(script.chunks[0].data, 'script.chunks[0].data must have value')));
        const fields = [];
        for(let i = 2; i < script.chunks.length; i++){
            const nextOpcode = script.chunks[i + 1]?.op; // ✅ Prevent accessing `op` from `undefined`
            let chunk = script.chunks[i].data ?? []; // ✅ Ensure `chunk` is always `number[]`
            if (chunk.length === 0) {
                // ✅ Only modify `chunk` if it was empty
                if (script.chunks[i].op >= 80 && script.chunks[i].op <= 95) {
                    chunk = [
                        script.chunks[i].op - 80
                    ];
                } else if (script.chunks[i].op === 0) {
                    chunk = [
                        0
                    ];
                } else if (script.chunks[i].op === 0x4f) {
                    chunk = [
                        0x81
                    ];
                }
            }
            fields.push(chunk);
            // If the next value is DROP or 2DROP then this is the final field
            if (nextOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OP$3e$__["OP"].OP_DROP || nextOpcode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OP$3e$__["OP"].OP_2DROP) {
                break;
            }
        }
        return {
            fields,
            lockingPublicKey
        };
    }
    /**
     * Constructs a new instance of the PushDrop class.
     *
     * @param {WalletInterface} wallet - The wallet interface used for creating signatures and accessing public keys.
     * @param {string} originator — The originator to use with Wallet requests
     */ constructor(wallet, originator){
        this.wallet = wallet;
        this.originator = originator;
    }
    /**
     * Creates a PushDrop locking script with arbitrary data fields and a public key lock.
     *
     * @param {number[][]} fields - The token fields to include in the locking script.
     * @param {WalletProtocol} protocolID - The protocol ID to use.
     * @param {string} keyID - The key ID to use.
     * @param {string} counterparty - The counterparty involved in the transaction, "self" or "anyone".
     * @param {boolean} [forSelf=false] - Flag indicating if the lock is for the creator (default no).
     * @param {boolean} [includeSignature=true] - Flag indicating if a signature should be included in the script (default yes).
     * @returns {Promise<LockingScript>} The generated PushDrop locking script.
     */ async lock(fields, protocolID, keyID, counterparty, forSelf = false, includeSignature = true, lockPosition = 'before') {
        const { publicKey } = await this.wallet.getPublicKey({
            protocolID,
            keyID,
            counterparty,
            forSelf
        }, this.originator);
        const lockChunks = [];
        const pushDropChunks = [];
        lockChunks.push({
            op: publicKey.length / 2,
            data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toArray(publicKey, 'hex')
        });
        lockChunks.push({
            op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OP$3e$__["OP"].OP_CHECKSIG
        });
        if (includeSignature) {
            const dataToSign = fields.reduce((a, e)=>[
                    ...a,
                    ...e
                ], []);
            const { signature } = await this.wallet.createSignature({
                data: dataToSign,
                protocolID,
                keyID,
                counterparty
            }, this.originator);
            fields.push(signature);
        }
        for (const field of fields){
            pushDropChunks.push(createMinimallyEncodedScriptChunk(field));
        }
        let notYetDropped = fields.length;
        while(notYetDropped > 1){
            pushDropChunks.push({
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OP$3e$__["OP"].OP_2DROP
            });
            notYetDropped -= 2;
        }
        if (notYetDropped !== 0) {
            pushDropChunks.push({
                op: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OP$3e$__["OP"].OP_DROP
            });
        }
        if (lockPosition === 'before') {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockingScript$3e$__["LockingScript"]([
                ...lockChunks,
                ...pushDropChunks
            ]);
        } else {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LockingScript$3e$__["LockingScript"]([
                ...pushDropChunks,
                ...lockChunks
            ]);
        }
    }
    /**
     * Creates an unlocking script for spending a PushDrop token output.
     *
     * @param {WalletProtocol} protocolID - The protocol ID to use.
     * @param {string} keyID - The key ID to use.
     * @param {string} counterparty - The counterparty involved in the transaction, "self" or "anyone".
     * @param {string} [sourceTXID] - The TXID of the source transaction.
     * @param {number} [sourceSatoshis] - The number of satoshis in the source output.
     * @param {LockingScript} [lockingScript] - The locking script of the source output.
     * @param {'all' | 'none' | 'single'} [signOutputs='all'] - Specifies which outputs to sign.
     * @param {boolean} [anyoneCanPay=false] - Specifies if the anyone-can-pay flag is set.
     * @returns {Object} An object containing functions to sign the transaction and estimate the script length.
     */ unlock(protocolID, keyID, counterparty, signOutputs = 'all', anyoneCanPay = false, sourceSatoshis, lockingScript) {
        return {
            sign: async (tx, inputIndex)=>{
                let signatureScope = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TransactionSignature$3e$__["TransactionSignature"].SIGHASH_FORKID;
                if (signOutputs === 'all') {
                    signatureScope |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TransactionSignature$3e$__["TransactionSignature"].SIGHASH_ALL;
                }
                if (signOutputs === 'none') {
                    signatureScope |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TransactionSignature$3e$__["TransactionSignature"].SIGHASH_NONE;
                }
                if (signOutputs === 'single') {
                    signatureScope |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TransactionSignature$3e$__["TransactionSignature"].SIGHASH_SINGLE;
                }
                if (anyoneCanPay) {
                    signatureScope |= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TransactionSignature$3e$__["TransactionSignature"].SIGHASH_ANYONECANPAY;
                }
                const input = tx.inputs[inputIndex];
                const otherInputs = tx.inputs.filter((_, index)=>index !== inputIndex);
                const sourceTXID = input.sourceTXID ?? input.sourceTransaction?.id('hex');
                if (sourceTXID == null || sourceTXID === undefined) {
                    throw new Error('The input sourceTXID or sourceTransaction is required for transaction signing.');
                }
                sourceSatoshis ||= input.sourceTransaction?.outputs[input.sourceOutputIndex].satoshis;
                if (sourceSatoshis == null || sourceSatoshis === undefined) {
                    throw new Error('The sourceSatoshis or input sourceTransaction is required for transaction signing.');
                }
                lockingScript ||= input.sourceTransaction?.outputs[input.sourceOutputIndex].lockingScript;
                if (lockingScript == null) {
                    throw new Error('The lockingScript or input sourceTransaction is required for transaction signing.');
                }
                const preimage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TransactionSignature$3e$__["TransactionSignature"].format({
                    sourceTXID,
                    sourceOutputIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyNotNull"])(input.sourceOutputIndex, 'input.sourceOutputIndex must have value'),
                    sourceSatoshis,
                    transactionVersion: tx.version,
                    otherInputs,
                    inputIndex,
                    outputs: tx.outputs,
                    inputSequence: input.sequence ?? 0xffffffff,
                    subscript: lockingScript,
                    lockTime: tx.lockTime,
                    scope: signatureScope
                });
                const preimageHash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__["Hash"].sha256(preimage);
                const { signature: bareSignature } = await this.wallet.createSignature({
                    data: preimageHash,
                    protocolID,
                    keyID,
                    counterparty
                }, this.originator);
                const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Signature$3e$__["Signature"].fromDER([
                    ...bareSignature
                ]);
                const txSignature = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TransactionSignature$3e$__["TransactionSignature"](signature.r, signature.s, signatureScope);
                const sigForScript = txSignature.toChecksigFormat();
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UnlockingScript$3e$__["UnlockingScript"]([
                    {
                        op: sigForScript.length,
                        data: sigForScript
                    }
                ]);
            },
            estimateLength: async ()=>73
        };
    }
} //# sourceMappingURL=PushDrop.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$P2PKH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/P2PKH.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$RPuzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/RPuzzle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$PushDrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/PushDrop.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/OP.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/Script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/LockingScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/UnlockingScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Spend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/Spend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$ScriptEvaluationError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/ScriptEvaluationError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/index.js [app-client] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
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
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "P2PKH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$P2PKH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PushDrop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$PushDrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "RPuzzle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$RPuzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$P2PKH$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/P2PKH.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$RPuzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/RPuzzle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$PushDrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/PushDrop.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LockingScript",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "OP",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "P2PKH",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P2PKH"],
    "PushDrop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PushDrop"],
    "RPuzzle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPuzzle"],
    "Script",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ScriptEvaluationError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$ScriptEvaluationError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Spend",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Spend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "UnlockingScript",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$OP$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/OP.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/Script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/LockingScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$UnlockingScript$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/UnlockingScript.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$Spend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/Spend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$ScriptEvaluationError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/ScriptEvaluationError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/index.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=ef5fd_%40bsv_sdk_dist_esm_src_script_7fd6c028._.js.map