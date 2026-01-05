(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BigNumber
]);
const BufferCtor = typeof globalThis !== 'undefined' ? globalThis.Buffer : undefined;
const CAN_USE_BUFFER = BufferCtor != null && typeof BufferCtor.from === 'function';
const HEX_CHAR_TO_VALUE = new Int8Array(256).fill(-1);
for(let i = 0; i < 10; i++){
    HEX_CHAR_TO_VALUE[48 + i] = i; // '0'-'9'
}
for(let i = 0; i < 6; i++){
    HEX_CHAR_TO_VALUE[65 + i] = 10 + i; // 'A'-'F'
    HEX_CHAR_TO_VALUE[97 + i] = 10 + i; // 'a'-'f'
}
class BigNumber {
    /**
     * @privateinitializer
     */ static zeros = [
        '',
        '0',
        '00',
        '000',
        '0000',
        '00000',
        '000000',
        '0000000',
        '00000000',
        '000000000',
        '0000000000',
        '00000000000',
        '000000000000',
        '0000000000000',
        '00000000000000',
        '000000000000000',
        '0000000000000000',
        '00000000000000000',
        '000000000000000000',
        '0000000000000000000',
        '00000000000000000000',
        '000000000000000000000',
        '0000000000000000000000',
        '00000000000000000000000',
        '000000000000000000000000',
        '0000000000000000000000000'
    ];
    /**
     * @privateinitializer
     */ static groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ];
    /**
     * @privateinitializer
     */ static groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        10000000,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64000000,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        24300000,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
    ];
    /**
     * The word size of big number chunks.
     *
     * @property wordSize
     *
     * @example
     * console.log(BigNumber.wordSize);  // output: 26
     */ static wordSize = 26;
    static WORD_SIZE_BIGINT = BigInt(BigNumber.wordSize);
    static WORD_MASK = (1n << BigNumber.WORD_SIZE_BIGINT) - 1n;
    static MAX_SAFE_INTEGER_BIGINT = BigInt(Number.MAX_SAFE_INTEGER);
    static MIN_SAFE_INTEGER_BIGINT = BigInt(Number.MIN_SAFE_INTEGER);
    static MAX_IMULN_ARG = 0x4000000 - 1;
    static MAX_NUMBER_CONSTRUCTOR_MAG_BIGINT = (1n << 53n) - 1n;
    _magnitude;
    _sign;
    _nominalWordLength;
    /**
     * Reduction context of the big number.
     *
     * @property red
     */ red;
    /**
     * Negative flag. Indicates whether the big number is a negative number.
     * - If 0, the number is positive.
     * - If 1, the number is negative.
     *
     * @property negative
     */ get negative() {
        return this._sign;
    }
    /**
     * Sets the negative flag. Only 0 (positive) or 1 (negative) are allowed.
     */ set negative(val) {
        this.assert(val === 0 || val === 1, 'Negative property must be 0 or 1');
        const newSign = val === 1 ? 1 : 0;
        if (this._magnitude === 0n) {
            this._sign = 0;
        } else {
            this._sign = newSign;
        }
    }
    get _computedWordsArray() {
        if (this._magnitude === 0n) return [
            0
        ];
        const arr = [];
        let temp = this._magnitude;
        while(temp > 0n){
            arr.push(Number(temp & BigNumber.WORD_MASK));
            temp >>= BigNumber.WORD_SIZE_BIGINT;
        }
        return arr.length > 0 ? arr : [
            0
        ];
    }
    /**
     * Array of numbers, where each number represents a part of the value of the big number.
     *
     * @property words
     */ get words() {
        const computed = this._computedWordsArray;
        if (this._nominalWordLength <= computed.length) {
            return computed;
        }
        const paddedWords = new Array(this._nominalWordLength).fill(0);
        for(let i = 0; i < computed.length; i++){
            paddedWords[i] = computed[i];
        }
        return paddedWords;
    }
    /**
     * Sets the words array representing the value of the big number.
     */ set words(newWords) {
        const oldSign = this._sign;
        let newMagnitude = 0n;
        const len = newWords.length > 0 ? newWords.length : 1;
        for(let i = len - 1; i >= 0; i--){
            const wordVal = newWords[i] === undefined ? 0 : newWords[i];
            newMagnitude = newMagnitude << BigNumber.WORD_SIZE_BIGINT | BigInt(wordVal & Number(BigNumber.WORD_MASK));
        }
        this._magnitude = newMagnitude;
        this._sign = oldSign;
        this._nominalWordLength = len;
        this.normSign();
    }
    /**
     * Length of the words array.
     *
     * @property length
     */ get length() {
        return Math.max(1, this._nominalWordLength);
    }
    /**
     * Checks whether a value is an instance of BigNumber. Regular JS numbers fail this check.
     *
     * @method isBN
     * @param num - The value to be checked.
     * @returns - Returns a boolean value determining whether or not the checked num parameter is a BigNumber.
     */ static isBN(num) {
        if (num instanceof BigNumber) return true;
        return num !== null && typeof num === 'object' && num.constructor?.wordSize === BigNumber.wordSize && Array.isArray(num.words);
    }
    /**
     * Returns the bigger value between two BigNumbers
     *
     * @method max
     * @param left - The first BigNumber to be compared.
     * @param right - The second BigNumber to be compared.
     * @returns - Returns the bigger BigNumber between left and right.
     */ static max(left, right) {
        return left.cmp(right) > 0 ? left : right;
    }
    /**
     * Returns the smaller value between two BigNumbers
     *
     * @method min
     * @param left - The first BigNumber to be compared.
     * @param right - The second BigNumber to be compared.
     * @returns - Returns the smaller value between left and right.
     */ static min(left, right) {
        return left.cmp(right) < 0 ? left : right;
    }
    /**
     * @constructor
     *
     * @param number - The number (various types accepted) to construct a BigNumber from. Default is 0.
     * @param base - The base of number provided. By default is 10.
     * @param endian - The endianness provided. By default is 'big endian'.
     */ constructor(number = 0, base = 10, endian = 'be'){
        this._magnitude = 0n;
        this._sign = 0;
        this._nominalWordLength = 1;
        this.red = null;
        if (number === undefined) number = 0;
        if (number === null) {
            this._initializeState(0n, 0);
            return;
        }
        if (typeof number === 'bigint') {
            this._initializeState(number < 0n ? -number : number, number < 0n ? 1 : 0);
            this.normSign();
            return;
        }
        let effectiveBase = base;
        let effectiveEndian = endian;
        if (base === 'le' || base === 'be') {
            effectiveEndian = base;
            effectiveBase = 10;
        }
        if (typeof number === 'number') {
            this.initNumber(number, effectiveEndian);
            return;
        }
        if (Array.isArray(number)) {
            this.initArray(number, effectiveEndian);
            return;
        }
        if (typeof number === 'string') {
            if (effectiveBase === 'hex') effectiveBase = 16;
            this.assert(typeof effectiveBase === 'number' && effectiveBase === (effectiveBase | 0) && effectiveBase >= 2 && effectiveBase <= 36, 'Base must be an integer between 2 and 36');
            const originalNumberStr = number.toString().replace(/\s+/g, '');
            let start = 0;
            let sign = 0;
            if (originalNumberStr.startsWith('-')) {
                start++;
                sign = 1;
            } else if (originalNumberStr.startsWith('+')) {
                start++;
            }
            const numStr = originalNumberStr.substring(start);
            if (numStr.length === 0) {
                this._initializeState(0n, sign === 1 && originalNumberStr.startsWith('-') ? 1 : 0);
                this.normSign();
                return;
            }
            if (effectiveBase === 16) {
                let tempMagnitude;
                if (effectiveEndian === 'le') {
                    const bytes = [];
                    let hexStr = numStr;
                    if (hexStr.length % 2 !== 0) hexStr = '0' + hexStr;
                    for(let i = 0; i < hexStr.length; i += 2){
                        const byteHex = hexStr.substring(i, i + 2);
                        const byteVal = parseInt(byteHex, 16);
                        if (isNaN(byteVal)) throw new Error('Invalid character in ' + hexStr);
                        bytes.push(byteVal);
                    }
                    this.initArray(bytes, 'le');
                    this._sign = sign;
                    this.normSign();
                    return;
                } else {
                    try {
                        tempMagnitude = BigInt('0x' + numStr);
                    } catch (e) {
                        throw new Error('Invalid character in ' + numStr);
                    }
                }
                this._initializeState(tempMagnitude, sign);
                this.normSign();
            } else {
                try {
                    this._parseBaseString(numStr, effectiveBase);
                    this._sign = sign;
                    this.normSign();
                    if (effectiveEndian === 'le') {
                        const currentSign = this._sign;
                        this.initArray(this.toArray('be'), 'le');
                        this._sign = currentSign;
                        this.normSign();
                    }
                } catch (err) {
                    const error = err;
                    if (error.message.includes('Invalid character in string') || error.message.includes('Invalid digit for base') || error.message.startsWith('Invalid character:')) {
                        throw new Error('Invalid character');
                    }
                    throw error;
                }
            }
        } else if (number !== 0) {
            this.assert(false, 'Unsupported input type for BigNumber constructor');
        } else {
            this._initializeState(0n, 0);
        }
    }
    _bigIntToStringInBase(num, base) {
        if (num === 0n) return '0';
        if (base < 2 || base > 36) throw new Error('Base must be between 2 and 36');
        const digits = '0123456789abcdefghijklmnopqrstuvwxyz';
        let result = '';
        let currentNum = num > 0n ? num : -num;
        const bigBase = BigInt(base);
        while(currentNum > 0n){
            result = digits[Number(currentNum % bigBase)] + result;
            currentNum /= bigBase;
        }
        return result;
    }
    _parseBaseString(numberStr, base) {
        if (numberStr.length === 0) {
            this._magnitude = 0n;
            this._finishInitialization();
            return;
        }
        this._magnitude = 0n;
        const bigBase = BigInt(base);
        let groupSize = BigNumber.groupSizes[base];
        let groupBaseBigInt = BigInt(BigNumber.groupBases[base]);
        if (groupSize === 0 || groupBaseBigInt === 0n) {
            groupSize = Math.floor(Math.log(0x3ffffff) / Math.log(base));
            if (groupSize === 0) groupSize = 1;
            groupBaseBigInt = bigBase ** BigInt(groupSize);
        }
        let currentPos = 0;
        const totalLen = numberStr.length;
        let firstChunkLen = totalLen % groupSize;
        if (firstChunkLen === 0 && totalLen > 0) firstChunkLen = groupSize;
        if (firstChunkLen > 0) {
            const chunkStr = numberStr.substring(currentPos, currentPos + firstChunkLen);
            this._magnitude = BigInt(this._parseBaseWord(chunkStr, base));
            currentPos += firstChunkLen;
        }
        while(currentPos < totalLen){
            const chunkStr = numberStr.substring(currentPos, currentPos + groupSize);
            const wordVal = BigInt(this._parseBaseWord(chunkStr, base));
            this._magnitude = this._magnitude * groupBaseBigInt + wordVal;
            currentPos += groupSize;
        }
        this._finishInitialization();
    }
    _parseBaseWord(str, base) {
        let r = 0;
        for(let i = 0; i < str.length; i++){
            const charCode = str.charCodeAt(i);
            let digitVal;
            if (charCode >= 48 && charCode <= 57) digitVal = charCode - 48;
            else if (charCode >= 65 && charCode <= 90) digitVal = charCode - 65 + 10;
            else if (charCode >= 97 && charCode <= 122) digitVal = charCode - 97 + 10;
            else throw new Error('Invalid character: ' + str[i]);
            if (digitVal >= base) throw new Error('Invalid character');
            r = r * base + digitVal;
        }
        return r;
    }
    _initializeState(magnitude, sign) {
        this._magnitude = magnitude;
        this._sign = magnitude === 0n ? 0 : sign;
        this._finishInitialization();
    }
    _finishInitialization() {
        if (this._magnitude === 0n) {
            this._nominalWordLength = 1;
            this._sign = 0;
        } else {
            const bitLen = this._magnitude.toString(2).length;
            this._nominalWordLength = Math.max(1, Math.ceil(bitLen / BigNumber.wordSize));
        }
    }
    assert(val, msg = 'Assertion failed') {
        if (!val) throw new Error(msg);
    }
    initNumber(number, endian = 'be') {
        this.assert(BigInt(Math.abs(number)) <= BigNumber.MAX_NUMBER_CONSTRUCTOR_MAG_BIGINT, 'The number is larger than 2 ^ 53 (unsafe)');
        this.assert(number % 1 === 0, 'Number must be an integer for BigNumber conversion');
        this._initializeState(BigInt(Math.abs(number)), number < 0 ? 1 : 0);
        if (endian === 'le') {
            const currentSign = this._sign;
            const beBytes = this.toArray('be');
            this.initArray(beBytes, 'le');
            this._sign = currentSign;
            this.normSign();
        }
        return this;
    }
    initArray(bytes, endian) {
        if (bytes.length === 0) {
            this._initializeState(0n, 0);
            return this;
        }
        let magnitude = 0n;
        if (endian === 'be') {
            for(let i = 0; i < bytes.length; i++)magnitude = magnitude << 8n | BigInt(bytes[i] & 0xff);
        } else {
            for(let i = bytes.length - 1; i >= 0; i--)magnitude = magnitude << 8n | BigInt(bytes[i] & 0xff);
        }
        this._initializeState(magnitude, 0);
        return this;
    }
    copy(dest) {
        dest._magnitude = this._magnitude;
        dest._sign = this._sign;
        dest._nominalWordLength = this._nominalWordLength;
        dest.red = this.red;
    }
    static move(dest, src) {
        dest._magnitude = src._magnitude;
        dest._sign = src._sign;
        dest._nominalWordLength = src._nominalWordLength;
        dest.red = src.red;
    }
    clone() {
        const r = new BigNumber(0n);
        this.copy(r);
        return r;
    }
    expand(size) {
        this.assert(size >= 0, 'Expand size must be non-negative');
        this._nominalWordLength = Math.max(this._nominalWordLength, size, 1);
        return this;
    }
    strip() {
        this._finishInitialization();
        return this.normSign();
    }
    normSign() {
        if (this._magnitude === 0n) this._sign = 0;
        return this;
    }
    inspect() {
        return (this.red !== null ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    }
    _getMinimalHex() {
        if (this._magnitude === 0n) return '0';
        return this._magnitude.toString(16);
    }
    /**
     * Converts the BigNumber instance to a string representation.
     *
     * @method toString
     * @param base - The base for representing number. Default is 10. Other accepted values are 16 and 'hex'.
     * @param padding - Represents the minimum number of digits to represent the BigNumber as a string. Default is 1.
     * @returns The string representation of the BigNumber instance
     */ toString(base = 10, padding = 1) {
        if (base === 16 || base === 'hex') {
            // For toString('hex', N), N is the 'multiple-of-N characters' rule from bn.js tests
            // For toString(16, P) where P=1 (default) or P=0, it means minimal hex.
            let hexStr = this._getMinimalHex(); // e.g., "f", "123", "0"
            if (padding > 1) {
                // Ensure hexStr is even length if not "0" to represent full bytes before applying multiple rule
                if (hexStr !== '0' && hexStr.length % 2 !== 0) {
                    hexStr = '0' + hexStr;
                }
                while(hexStr.length % padding !== 0){
                    hexStr = '0' + hexStr;
                }
            }
            // If padding is 0 or 1, hexStr (minimal) is used as is.
            // "0" is always "0" unless toHex("") specific case.
            // Single digit hex like "f" is not "0f" by default from toString(16).
            return (this.isNeg() ? '-' : '') + hexStr;
        }
        if (typeof base !== 'number' || base < 2 || base > 36 || base % 1 !== 0) throw new Error('Base should be an integer between 2 and 36');
        return this.toBaseString(base, padding);
    }
    toBaseString(base, padding) {
        if (this._magnitude === 0n) {
            let out = '0';
            if (padding > 1) {
                while(out.length < padding)out = '0' + out;
            }
            return out;
        }
        let groupSize = BigNumber.groupSizes[base];
        let groupBaseBigInt = BigInt(BigNumber.groupBases[base]);
        if (groupSize === 0 || groupBaseBigInt === 0n) {
            groupSize = Math.floor(Math.log(Number.MAX_SAFE_INTEGER) / Math.log(base));
            if (groupSize === 0) groupSize = 1;
            groupBaseBigInt = BigInt(base) ** BigInt(groupSize);
        }
        let out = '';
        let tempMag = this._magnitude;
        while(tempMag > 0n){
            const remainder = tempMag % groupBaseBigInt;
            tempMag /= groupBaseBigInt;
            const chunkStr = this._bigIntToStringInBase(remainder, base);
            if (tempMag > 0n) {
                const zerosToPrepend = groupSize - chunkStr.length;
                if (zerosToPrepend > 0 && zerosToPrepend < BigNumber.zeros.length) {
                    out = BigNumber.zeros[zerosToPrepend] + chunkStr + out;
                } else if (zerosToPrepend > 0) {
                    out = '0'.repeat(zerosToPrepend) + chunkStr + out;
                } else {
                    out = chunkStr + out;
                }
            } else {
                out = chunkStr + out;
            }
        }
        if (padding > 0) {
            while(out.length < padding)out = '0' + out;
        }
        return (this._sign === 1 ? '-' : '') + out;
    }
    /**
     * Converts the BigNumber instance to a JavaScript number.
     * Please note that JavaScript numbers are only precise up to 53 bits.
     *
     * @method toNumber
     * @throws If the BigNumber instance cannot be safely stored in a JavaScript number
     * @returns The JavaScript number representation of the BigNumber instance.
     */ toNumber() {
        const val = this._getSignedValue();
        if (val > BigNumber.MAX_SAFE_INTEGER_BIGINT || val < BigNumber.MIN_SAFE_INTEGER_BIGINT) throw new Error('Number can only safely store up to 53 bits');
        return Number(val);
    }
    /**
     * Returns the signed BigInt representation of this BigNumber without any safety checks.
     *
     * @method toBigInt
     * @returns bigint value for this BigNumber.
     */ toBigInt() {
        return this._getSignedValue();
    }
    /**
     * Converts the BigNumber instance to a JSON-formatted string.
     *
     * @method toJSON
     * @returns The JSON string representation of the BigNumber instance.
     */ toJSON() {
        const hex = this._getMinimalHex();
        return (this.isNeg() ? '-' : '') + hex;
    }
    toArrayLikeGeneric(res, isLE) {
        let tempMag = this._magnitude;
        let position = isLE ? 0 : res.length - 1;
        const increment = isLE ? 1 : -1;
        for(let k = 0; k < res.length; ++k){
            if (tempMag === 0n && position >= 0 && position < res.length) {
                res[position] = 0;
            } else if (position >= 0 && position < res.length) {
                res[position] = Number(tempMag & 0xffn);
            } else {
                break;
            }
            tempMag >>= 8n;
            position += increment;
        }
    }
    /**
     * Converts the BigNumber instance to an array of bytes.
     *
     * @method toArray
     * @param endian - Endianness of the output array, defaults to 'be'.
     * @param length - Optional length of the output array.
     * @returns Array of bytes representing the BigNumber.
     */ toArray(endian = 'be', length) {
        this.strip();
        const actualByteLength = this.byteLength();
        const reqLength = length ?? Math.max(1, actualByteLength);
        this.assert(actualByteLength <= reqLength, 'byte array longer than desired length');
        this.assert(reqLength > 0, 'Requested array length <= 0');
        const res = new Array(reqLength).fill(0);
        if (this._magnitude === 0n && reqLength > 0) return res;
        if (this._magnitude === 0n && reqLength === 0) return [];
        this.toArrayLikeGeneric(res, endian === 'le');
        return res;
    }
    /**
     * Calculates the number of bits required to represent the BigNumber.
     *
     * @method bitLength
     * @returns The bit length of the BigNumber.
     */ bitLength() {
        if (this._magnitude === 0n) return 0;
        return this._magnitude.toString(2).length;
    }
    /**
     * Converts a BigNumber to an array of bits.
     *
     * @method toBitArray
     * @param num - The BigNumber to convert.
     * @returns An array of bits.
     */ static toBitArray(num) {
        const len = num.bitLength();
        if (len === 0) return [];
        const w = new Array(len);
        const mag = num._magnitude;
        for(let bit = 0; bit < len; bit++){
            w[bit] = (mag >> BigInt(bit) & 1n) !== 0n ? 1 : 0;
        }
        return w;
    }
    /**
     * Instance version of {@link toBitArray}.
     */ toBitArray() {
        return BigNumber.toBitArray(this);
    }
    /**
     * Returns the number of trailing zero bits in the big number.
     *
     * @method zeroBits
     * @returns Returns the number of trailing zero bits
     * in the binary representation of the big number.
     *
     * @example
     * const bn = new BigNumber('8'); // binary: 1000
     * const zeroBits = bn.zeroBits(); // 3
     */ zeroBits() {
        if (this._magnitude === 0n) return 0;
        let c = 0;
        let t = this._magnitude;
        while((t & 1n) === 0n && t !== 0n){
            c++;
            t >>= 1n;
        }
        return c;
    }
    /**
     * Calculates the number of bytes required to represent the BigNumber.
     *
     * @method byteLength
     * @returns The byte length of the BigNumber.
     */ byteLength() {
        if (this._magnitude === 0n) return 0;
        return Math.ceil(this.bitLength() / 8);
    }
    _getSignedValue() {
        return this._sign === 1 ? -this._magnitude : this._magnitude;
    }
    _setValueFromSigned(sVal) {
        if (sVal < 0n) {
            this._magnitude = -sVal;
            this._sign = 1;
        } else {
            this._magnitude = sVal;
            this._sign = 0;
        }
        this._finishInitialization();
        this.normSign();
    }
    toTwos(width) {
        this.assert(width >= 0);
        const Bw = BigInt(width);
        let v = this._getSignedValue();
        if (this._sign === 1 && this._magnitude !== 0n) v = (1n << Bw) + v;
        const m = (1n << Bw) - 1n;
        v &= m;
        const r = new BigNumber(0n);
        r._initializeState(v, 0);
        return r;
    }
    fromTwos(width) {
        this.assert(width >= 0);
        const Bw = BigInt(width);
        const m = this._magnitude;
        if (width > 0 && (m >> Bw - 1n & 1n) !== 0n && this._sign === 0) {
            const sVal = m - (1n << Bw);
            const r = new BigNumber(0n);
            r._setValueFromSigned(sVal);
            return r;
        }
        return this.clone();
    }
    isNeg() {
        return this._sign === 1 && this._magnitude !== 0n;
    }
    neg() {
        return this.clone().ineg();
    }
    ineg() {
        if (this._magnitude !== 0n) this._sign = this._sign === 1 ? 0 : 1;
        return this;
    }
    _iuop(num, op) {
        const newMag = op(this._magnitude, num._magnitude);
        const isXor = op === ((a, b)=>a ^ b);
        let targetNominalLength = this._nominalWordLength;
        if (isXor) targetNominalLength = Math.max(this.length, num.length);
        this._magnitude = newMag;
        this._finishInitialization();
        if (isXor) this._nominalWordLength = Math.max(this._nominalWordLength, targetNominalLength);
        return this.strip();
    }
    iuor(num) {
        return this._iuop(num, (a, b)=>a | b);
    }
    iuand(num) {
        return this._iuop(num, (a, b)=>a & b);
    }
    iuxor(num) {
        return this._iuop(num, (a, b)=>a ^ b);
    }
    _iop(num, op) {
        this.assert(this._sign === 0 && num._sign === 0);
        return this._iuop(num, op);
    }
    ior(num) {
        return this._iop(num, (a, b)=>a | b);
    }
    iand(num) {
        return this._iop(num, (a, b)=>a & b);
    }
    ixor(num) {
        return this._iop(num, (a, b)=>a ^ b);
    }
    _uop_new(num, opName) {
        if (this.length >= num.length) return this.clone()[opName](num);
        return num.clone()[opName](this);
    }
    or(num) {
        this.assert(this._sign === 0 && num._sign === 0);
        return this._uop_new(num, 'iuor');
    }
    uor(num) {
        return this._uop_new(num, 'iuor');
    }
    and(num) {
        this.assert(this._sign === 0 && num._sign === 0);
        return this._uop_new(num, 'iuand');
    }
    uand(num) {
        return this._uop_new(num, 'iuand');
    }
    xor(num) {
        this.assert(this._sign === 0 && num._sign === 0);
        return this._uop_new(num, 'iuxor');
    }
    uxor(num) {
        return this._uop_new(num, 'iuxor');
    }
    inotn(width) {
        this.assert(typeof width === 'number' && width >= 0);
        const Bw = BigInt(width);
        const m = (1n << Bw) - 1n;
        this._magnitude = ~this._magnitude & m;
        const wfw = width === 0 ? 1 : Math.ceil(width / BigNumber.wordSize);
        this._nominalWordLength = Math.max(1, wfw);
        this.strip();
        this._nominalWordLength = Math.max(this._nominalWordLength, Math.max(1, wfw));
        return this;
    }
    notn(width) {
        return this.clone().inotn(width);
    }
    setn(bit, val) {
        this.assert(typeof bit === 'number' && bit >= 0);
        const Bb = BigInt(bit);
        if (val === 1 || val === true) this._magnitude |= 1n << Bb;
        else this._magnitude &= ~(1n << Bb);
        const wnb = Math.floor(bit / BigNumber.wordSize) + 1;
        this._nominalWordLength = Math.max(this._nominalWordLength, wnb);
        this._finishInitialization();
        return this.strip();
    }
    iadd(num) {
        this._setValueFromSigned(this._getSignedValue() + num._getSignedValue());
        return this;
    }
    add(num) {
        const r = new BigNumber(0n);
        r._setValueFromSigned(this._getSignedValue() + num._getSignedValue());
        return r;
    }
    isub(num) {
        this._setValueFromSigned(this._getSignedValue() - num._getSignedValue());
        return this;
    }
    sub(num) {
        const r = new BigNumber(0n);
        r._setValueFromSigned(this._getSignedValue() - num._getSignedValue());
        return r;
    }
    mul(num) {
        const r = new BigNumber(0n);
        r._magnitude = this._magnitude * num._magnitude;
        r._sign = r._magnitude === 0n ? 0 : this._sign ^ num._sign;
        r._nominalWordLength = this.length + num.length;
        r.red = null;
        return r.normSign();
    }
    imul(num) {
        this._magnitude *= num._magnitude;
        this._sign = this._magnitude === 0n ? 0 : this._sign ^ num._sign;
        this._nominalWordLength = this.length + num.length;
        this.red = null;
        return this.normSign();
    }
    imuln(num) {
        this.assert(typeof num === 'number', 'Assertion failed');
        this.assert(Math.abs(num) <= BigNumber.MAX_IMULN_ARG, 'Assertion failed');
        this._setValueFromSigned(this._getSignedValue() * BigInt(num));
        return this;
    }
    muln(num) {
        return this.clone().imuln(num);
    }
    sqr() {
        const r = new BigNumber(0n);
        r._magnitude = this._magnitude * this._magnitude;
        r._sign = 0;
        r._nominalWordLength = this.length * 2;
        r.red = null;
        return r;
    }
    isqr() {
        this._magnitude *= this._magnitude;
        this._sign = 0;
        this._nominalWordLength = this.length * 2;
        this.red = null;
        return this;
    }
    pow(num) {
        this.assert(num._sign === 0, 'Exponent for pow must be non-negative');
        if (num.isZero()) return new BigNumber(1n);
        const res = new BigNumber(1n);
        const currentBase = this.clone();
        const exp = num.clone();
        const baseIsNegative = currentBase.isNeg();
        const expIsOdd = exp.isOdd();
        if (baseIsNegative) currentBase.ineg();
        while(!exp.isZero()){
            if (exp.isOdd()) {
                res.imul(currentBase);
            }
            currentBase.isqr();
            exp.iushrn(1);
        }
        if (baseIsNegative && expIsOdd) {
            res.ineg();
        }
        return res;
    }
    static normalizeNonNegativeBigInt(value, label) {
        if (typeof value === 'number') {
            if (!Number.isFinite(value) || !Number.isInteger(value) || value < 0) throw new Error(`${label} must be a non-negative integer`);
            return BigInt(value);
        }
        if (value < 0n) throw new Error(`${label} must be a non-negative integer`);
        return value;
    }
    iushln(bits) {
        const normalizedBits = BigNumber.normalizeNonNegativeBigInt(bits, 'Shift bits');
        if (normalizedBits === 0n) return this;
        this._magnitude <<= normalizedBits;
        this._finishInitialization();
        return this.strip();
    }
    ishln(bits) {
        this.assert(this._sign === 0, 'ishln requires positive number');
        return this.iushln(bits);
    }
    iushrn(bits, hint, extended) {
        const normalizedBits = BigNumber.normalizeNonNegativeBigInt(bits, 'Shift bits');
        if (normalizedBits === 0n) {
            if (extended != null) extended._initializeState(0n, 0);
            return this;
        }
        if (extended != null) {
            const m = (1n << normalizedBits) - 1n;
            const sOut = this._magnitude & m;
            extended._initializeState(sOut, 0);
        }
        this._magnitude >>= normalizedBits;
        this._finishInitialization();
        return this.strip();
    }
    ishrn(bits, hint, extended) {
        this.assert(this._sign === 0, 'ishrn requires positive number');
        return this.iushrn(bits, hint, extended);
    }
    shln(bits) {
        return this.clone().ishln(bits);
    }
    ushln(bits) {
        return this.clone().iushln(bits);
    }
    shrn(bits) {
        return this.clone().ishrn(bits);
    }
    ushrn(bits) {
        return this.clone().iushrn(bits);
    }
    testn(bit) {
        this.assert(typeof bit === 'number' && bit >= 0);
        return (this._magnitude >> BigInt(bit) & 1n) !== 0n;
    }
    imaskn(bits) {
        this.assert(typeof bits === 'number' && bits >= 0);
        this.assert(this._sign === 0, 'imaskn works only with positive numbers');
        const Bb = BigInt(bits);
        const m = Bb === 0n ? 0n : (1n << Bb) - 1n;
        this._magnitude &= m;
        const wfm = bits === 0 ? 1 : Math.max(1, Math.ceil(bits / BigNumber.wordSize));
        this._nominalWordLength = wfm;
        this._finishInitialization();
        this._nominalWordLength = Math.max(this._nominalWordLength, wfm);
        return this.strip();
    }
    maskn(bits) {
        return this.clone().imaskn(bits);
    }
    iaddn(num) {
        this.assert(typeof num === 'number');
        this.assert(Math.abs(num) <= BigNumber.MAX_IMULN_ARG, 'num is too large');
        this._setValueFromSigned(this._getSignedValue() + BigInt(num));
        return this;
    }
    _iaddn(num) {
        return this.iaddn(num);
    }
    isubn(num) {
        this.assert(typeof num === 'number');
        this.assert(Math.abs(num) <= BigNumber.MAX_IMULN_ARG, 'Assertion failed');
        this._setValueFromSigned(this._getSignedValue() - BigInt(num));
        return this;
    }
    addn(num) {
        return this.clone().iaddn(num);
    }
    subn(num) {
        return this.clone().isubn(num);
    }
    iabs() {
        this._sign = 0;
        return this;
    }
    abs() {
        return this.clone().iabs();
    }
    divmod(num, mode, positive) {
        this.assert(!num.isZero(), 'Division by zero');
        if (this.isZero()) {
            const z = new BigNumber(0n);
            return {
                div: mode !== 'mod' ? z : null,
                mod: mode !== 'div' ? z : null
            };
        }
        const tV = this._getSignedValue();
        const nV = num._getSignedValue();
        let dV = null;
        let mV = null;
        if (mode !== 'mod') dV = tV / nV;
        if (mode !== 'div') {
            mV = tV % nV;
            if (positive === true && mV < 0n) mV += nV < 0n ? -nV : nV;
        }
        const rd = dV !== null ? new BigNumber(0n) : null;
        if (rd !== null && dV !== null) rd._setValueFromSigned(dV);
        const rm = mV !== null ? new BigNumber(0n) : null;
        if (rm !== null && mV !== null) rm._setValueFromSigned(mV);
        return {
            div: rd,
            mod: rm
        };
    }
    div(num) {
        return this.divmod(num, 'div', false).div;
    }
    mod(num) {
        return this.divmod(num, 'mod', false).mod;
    }
    umod(num) {
        return this.divmod(num, 'mod', true).mod;
    }
    divRound(num) {
        this.assert(!num.isZero());
        const tV = this._getSignedValue();
        const nV = num._getSignedValue();
        let d = tV / nV;
        const m = tV % nV;
        if (m === 0n) {
            const r = new BigNumber(0n);
            r._setValueFromSigned(d);
            return r;
        }
        const absM = m < 0n ? -m : m;
        const absNV = nV < 0n ? -nV : nV;
        if (absM * 2n >= absNV) {
            if (tV > 0n && nV > 0n || tV < 0n && nV < 0n) {
                d += 1n;
            } else {
                d -= 1n;
            }
        }
        const r = new BigNumber(0n);
        r._setValueFromSigned(d);
        return r;
    }
    modrn(numArg) {
        this.assert(numArg !== 0, 'Division by zero in modrn');
        const absDivisor = BigInt(Math.abs(numArg));
        if (absDivisor === 0n) throw new Error('Division by zero in modrn');
        const remainderMag = this._magnitude % absDivisor;
        return numArg < 0 ? Number(-remainderMag) : Number(remainderMag);
    }
    idivn(num) {
        this.assert(num !== 0);
        this.assert(Math.abs(num) <= BigNumber.MAX_IMULN_ARG, 'num is too large');
        this._setValueFromSigned(this._getSignedValue() / BigInt(num));
        return this;
    }
    divn(num) {
        return this.clone().idivn(num);
    }
    egcd(p) {
        this.assert(p._sign === 0, 'p must not be negative');
        this.assert(!p.isZero(), 'p must not be zero');
        let uV = this._getSignedValue();
        let vV = p._magnitude;
        let a = 1n;
        let pa = 0n;
        let b = 0n;
        let pb = 1n;
        while(vV !== 0n){
            const q = uV / vV;
            let t = vV;
            vV = uV % vV;
            uV = t;
            t = pa;
            pa = a - q * pa;
            a = t;
            t = pb;
            pb = b - q * pb;
            b = t;
        }
        const ra = new BigNumber(0n);
        ra._setValueFromSigned(a);
        const rb = new BigNumber(0n);
        rb._setValueFromSigned(b);
        const rg = new BigNumber(0n);
        rg._initializeState(uV < 0n ? -uV : uV, 0);
        return {
            a: ra,
            b: rb,
            gcd: rg
        };
    }
    gcd(num) {
        let u = this._magnitude;
        let v = num._magnitude;
        if (u === 0n) {
            const r = new BigNumber(0n);
            r._setValueFromSigned(v);
            return r.iabs();
        }
        if (v === 0n) {
            const r = new BigNumber(0n);
            r._setValueFromSigned(u);
            return r.iabs();
        }
        while(v !== 0n){
            const t = u % v;
            u = v;
            v = t;
        }
        const res = new BigNumber(0n);
        res._initializeState(u, 0);
        return res;
    }
    invm(num) {
        this.assert(!num.isZero() && num._sign === 0, 'Modulus for invm must be positive and non-zero');
        const eg = this.egcd(num);
        if (!eg.gcd.eqn(1)) {
            throw new Error('Inverse does not exist (numbers are not coprime).');
        }
        return eg.a.umod(num);
    }
    isEven() {
        return this._magnitude % 2n === 0n;
    }
    isOdd() {
        return this._magnitude % 2n === 1n;
    }
    andln(num) {
        this.assert(num >= 0);
        return Number(this._magnitude & BigInt(num));
    }
    bincn(bit) {
        this.assert(typeof bit === 'number' && bit >= 0);
        const BVal = 1n << BigInt(bit);
        this._setValueFromSigned(this._getSignedValue() + BVal);
        return this;
    }
    isZero() {
        return this._magnitude === 0n;
    }
    cmpn(num) {
        this.assert(Math.abs(num) <= BigNumber.MAX_IMULN_ARG, 'Number is too big');
        const tV = this._getSignedValue();
        const nV = BigInt(num);
        if (tV < nV) return -1;
        if (tV > nV) return 1;
        return 0;
    }
    cmp(num) {
        const tV = this._getSignedValue();
        const nV = num._getSignedValue();
        if (tV < nV) return -1;
        if (tV > nV) return 1;
        return 0;
    }
    ucmp(num) {
        if (this._magnitude < num._magnitude) return -1;
        if (this._magnitude > num._magnitude) return 1;
        return 0;
    }
    gtn(num) {
        return this.cmpn(num) === 1;
    }
    gt(num) {
        return this.cmp(num) === 1;
    }
    gten(num) {
        return this.cmpn(num) >= 0;
    }
    gte(num) {
        return this.cmp(num) >= 0;
    }
    ltn(num) {
        return this.cmpn(num) === -1;
    }
    lt(num) {
        return this.cmp(num) === -1;
    }
    lten(num) {
        return this.cmpn(num) <= 0;
    }
    lte(num) {
        return this.cmp(num) <= 0;
    }
    eqn(num) {
        return this.cmpn(num) === 0;
    }
    eq(num) {
        return this.cmp(num) === 0;
    }
    toRed(ctx) {
        this.assert(this.red == null, 'Already a number in reduction context');
        this.assert(this._sign === 0, 'toRed works only with positives');
        return ctx.convertTo(this).forceRed(ctx);
    }
    fromRed() {
        this.assert(this.red, 'fromRed works only with numbers in reduction context');
        return this.red.convertFrom(this);
    }
    forceRed(ctx) {
        this.red = ctx;
        return this;
    }
    redAdd(num) {
        this.assert(this.red, 'redAdd works only with red numbers');
        return this.red.add(this, num);
    }
    redIAdd(num) {
        this.assert(this.red, 'redIAdd works only with red numbers');
        return this.red.iadd(this, num);
    }
    redSub(num) {
        this.assert(this.red, 'redSub works only with red numbers');
        return this.red.sub(this, num);
    }
    redISub(num) {
        this.assert(this.red, 'redISub works only with red numbers');
        return this.red.isub(this, num);
    }
    redShl(num) {
        this.assert(this.red, 'redShl works only with red numbers');
        return this.red.shl(this, num);
    }
    redMul(num) {
        this.assert(this.red, 'redMul works only with red numbers');
        this.red.verify2(this, num);
        return this.red.mul(this, num);
    }
    redIMul(num) {
        this.assert(this.red, 'redIMul works only with red numbers');
        this.red.verify2(this, num);
        return this.red.imul(this, num);
    }
    redSqr() {
        this.assert(this.red, 'redSqr works only with red numbers');
        this.red.verify1(this);
        return this.red.sqr(this);
    }
    redISqr() {
        this.assert(this.red, 'redISqr works only with red numbers');
        this.red.verify1(this);
        return this.red.isqr(this);
    }
    redSqrt() {
        this.assert(this.red, 'redSqrt works only with red numbers');
        this.red.verify1(this);
        return this.red.sqrt(this);
    }
    redInvm() {
        this.assert(this.red, 'redInvm works only with red numbers');
        this.red.verify1(this);
        return this.red.invm(this);
    }
    redNeg() {
        this.assert(this.red, 'redNeg works only with red numbers');
        this.red.verify1(this);
        return this.red.neg(this);
    }
    redPow(num) {
        this.assert(this.red != null && num.red == null, 'redPow(normalNum)');
        this.red.verify1(this);
        return this.red.pow(this, num);
    }
    /**
     * Creates a BigNumber from a hexadecimal string.
     *
     * @static
     * @method fromHex
     * @param hex - The hexadecimal string to create a BigNumber from.
     * @param endian - Optional endianness for parsing the hex string.
     * @returns Returns a BigNumber created from the hexadecimal input string.
     *
     * @example
     * const exampleHex = 'a1b2c3';
     * const bigNumber = BigNumber.fromHex(exampleHex);
     */ static fromHex(hex, endian) {
        let eE = 'be';
        if (endian === 'little' || endian === 'le') eE = 'le';
        return new BigNumber(hex, 16, eE);
    }
    /**
     * Converts this BigNumber to a hexadecimal string.
     *
     * @method toHex
     * @param length - The minimum length of the hex string
     * @returns Returns a string representing the hexadecimal value of this BigNumber.
     *
     * @example
     * const bigNumber = new BigNumber(255)
     * const hex = bigNumber.toHex()
     */ toHex(byteLength = 0) {
        if (this.isZero() && byteLength === 0) return '';
        let hexStr = this._getMinimalHex(); // Raw hex: "0", "f", "10", "123"
        // Ensure even length for non-zero values (byte alignment)
        if (hexStr !== '0' && hexStr.length % 2 !== 0) {
            hexStr = '0' + hexStr;
        }
        // Pad to minimum character length (byteLength * 2)
        const minChars = byteLength * 2;
        while(hexStr.length < minChars){
            hexStr = '0' + hexStr;
        }
        return (this.isNeg() ? '-' : '') + hexStr;
    }
    /**
     * Creates a BigNumber from a JSON-serialized string.
     *
     * @static
     * @method fromJSON
     * @param str - The JSON-serialized string to create a BigNumber from.
     * @returns Returns a BigNumber created from the JSON input string.
     */ static fromJSON(str) {
        return new BigNumber(str, 16);
    }
    /**
     * Creates a BigNumber from a number.
     *
     * @static
     * @method fromNumber
     * @param n - The number to create a BigNumber from.
     * @returns Returns a BigNumber equivalent to the input number.
     */ static fromNumber(n) {
        return new BigNumber(n);
    }
    /**
     * Creates a BigNumber from a string, considering an optional base.
     *
     * @static
     * @method fromString
     * @param str - The string to create a BigNumber from.
     * @param base - The base used for conversion. If not provided, base 10 is assumed.
     * @returns Returns a BigNumber equivalent to the string after conversion from the specified base.
     */ static fromString(str, base) {
        return new BigNumber(str, base);
    }
    /**
     * Creates a BigNumber from a signed magnitude number.
     *
     * @static
     * @method fromSm
     * @param bytes - The signed magnitude number to convert to a BigNumber.
     * @param endian - Defines endianess. If not provided, big endian is assumed.
     * @returns Returns a BigNumber equivalent to the signed magnitude number interpreted with specified endianess.
     */ static fromSm(bytes, endian = 'big') {
        if (bytes.length === 0) return new BigNumber(0n);
        const beBytes = bytes.slice();
        if (endian === 'little') {
            beBytes.reverse();
        }
        let sign = 0;
        if (beBytes.length > 0 && (beBytes[0] & 0x80) !== 0) {
            sign = 1;
            beBytes[0] &= 0x7f;
        }
        let magnitude = 0n;
        if (CAN_USE_BUFFER) {
            const hex = BufferCtor.from(beBytes).toString('hex');
            magnitude = hex.length === 0 ? 0n : BigInt('0x' + hex);
        } else {
            let hex = '';
            for (const byte of beBytes){
                hex += byte < 16 ? '0' + byte.toString(16) : byte.toString(16);
            }
            magnitude = hex.length === 0 ? 0n : BigInt('0x' + hex);
        }
        const r = new BigNumber(0n);
        r._initializeState(magnitude, sign);
        return r;
    }
    /**
     * Converts this BigNumber to a signed magnitude number.
     *
     * @method toSm
     * @param endian - Defines endianess. If not provided, big endian is assumed.
     * @returns Returns an array equivalent to this BigNumber interpreted as a signed magnitude with specified endianess.
     */ toSm(endian = 'big') {
        if (this._magnitude === 0n) {
            return this._sign === 1 ? [
                0x80
            ] : [];
        }
        let hex = this._getMinimalHex();
        if (hex.length % 2 !== 0) hex = '0' + hex;
        const byteLen = hex.length / 2;
        const bytes = new Array(byteLen);
        for(let i = 0, j = 0; i < hex.length; i += 2){
            const high = HEX_CHAR_TO_VALUE[hex.charCodeAt(i)];
            const low = HEX_CHAR_TO_VALUE[hex.charCodeAt(i + 1)];
            bytes[j++] = (high & 0xf) << 4 | low & 0xf;
        }
        let result;
        if (this._sign === 1) {
            if ((bytes[0] & 0x80) !== 0) {
                result = [
                    0x80,
                    ...bytes
                ];
            } else {
                result = bytes.slice();
                result[0] |= 0x80;
            }
        } else if ((bytes[0] & 0x80) !== 0) {
            result = [
                0x00,
                ...bytes
            ];
        } else {
            result = bytes.slice();
        }
        return endian === 'little' ? result.reverse() : result;
    }
    /**
     * Creates a BigNumber from a number representing the "bits" value in a block header.
     *
     * @static
     * @method fromBits
     * @param bits - The number representing the bits value in a block header.
     * @param strict - If true, an error is thrown if the number has negative bit set.
     * @returns Returns a BigNumber equivalent to the "bits" value in a block header.
     * @throws Will throw an error if `strict` is `true` and the number has negative bit set.
     */ static fromBits(bits, strict = false) {
        const nSize = bits >>> 24;
        const nWordCompact = bits & 0x007fffff;
        const isNegativeFromBit = (bits & 0x00800000) !== 0;
        if (strict && isNegativeFromBit) {
            throw new Error('negative bit set');
        }
        if (nSize === 0 && nWordCompact === 0) {
            if (isNegativeFromBit && strict) throw new Error('negative bit set for zero value');
            return new BigNumber(0n);
        }
        const bn = new BigNumber(nWordCompact);
        // This logic comes from original bn.js `fromCompact`
        if (nSize <= 3) {
            bn.iushrn((3 - nSize) * 8);
        } else {
            bn.iushln((nSize - 3) * 8);
        }
        if (isNegativeFromBit) {
            bn.ineg();
        }
        return bn;
    }
    /**
     * Converts this BigNumber to a number representing the "bits" value in a block header.
     *
     * @method toBits
     * @returns Returns a number equivalent to the "bits" value in a block header.
     */ toBits() {
        this.strip();
        if (this.isZero() && !this.isNeg()) return 0;
        const isActualNegative = this.isNeg();
        const bnAbs = this.abs(); // Work with absolute value for magnitude
        // Get byte array of absolute value
        let mB = bnAbs.toArray('be'); // Minimal byte array
        // Remove leading zeros from byte array, if any (toArray('be') might already do this if no length specified)
        let firstNonZeroIdx = 0;
        while(firstNonZeroIdx < mB.length - 1 && mB[firstNonZeroIdx] === 0){
            firstNonZeroIdx++;
        }
        mB = mB.slice(firstNonZeroIdx);
        let nSize = mB.length;
        if (nSize === 0 && !bnAbs.isZero()) {
            mB = [
                0
            ]; // Should not be needed if toArray works for small numbers
            nSize = 1;
        }
        if (bnAbs.isZero()) {
            nSize = 0; // Size for 0 is 0, unless it's negative 0 to be encoded
            mB = [];
        }
        let nWordNum;
        if (nSize === 0) {
            nWordNum = 0;
        } else if (nSize <= 3) {
            nWordNum = 0;
            for(let i = 0; i < nSize; i++){
                nWordNum = nWordNum << 8 | mB[i];
            }
        } else {
            nWordNum = mB[0] << 16 | mB[1] << 8 | mB[2];
        }
        if ((nWordNum & 0x00800000) !== 0 && nSize <= 0xff) {
            nWordNum >>>= 8; // Shift mantissa over by one byte
            nSize++; // Increase size component by one
        }
        let b = nSize << 24 | nWordNum;
        if (isActualNegative) b |= 0x00800000;
        return b >>> 0;
    }
    /**
     * Creates a BigNumber from the format used in Bitcoin scripts.
     *
     * @static
     * @method fromScriptNum
     * @param num - The number in the format used in Bitcoin scripts.
     * @param requireMinimal - If true, non-minimally encoded values will throw an error.
     * @param maxNumSize - The maximum allowed size for the number.
     * @returns Returns a BigNumber equivalent to the number used in a Bitcoin script.
     */ static fromScriptNum(num, requireMinimal = false, maxNumSize) {
        if (maxNumSize !== undefined && num.length > maxNumSize) throw new Error('script number overflow');
        if (num.length === 0) return new BigNumber(0n);
        if (requireMinimal) {
            if ((num[num.length - 1] & 0x7f) === 0) {
                if (num.length <= 1 || (num[num.length - 2] & 0x80) === 0) {
                    throw new Error('non-minimally encoded script number');
                }
            }
        }
        return BigNumber.fromSm(num, 'little');
    }
    /**
     * Converts this BigNumber to a number in the format used in Bitcoin scripts.
     *
     * @method toScriptNum
     * @returns Returns the equivalent to this BigNumber as a Bitcoin script number.
     */ toScriptNum() {
        return this.toSm('little');
    }
    /**
     * Compute the multiplicative inverse of the current BigNumber in the modulus field specified by `p`.
     * The multiplicative inverse is a number which when multiplied with the current BigNumber gives '1' in the modulus field.
     *
     * @method _invmp
     * @param p - The `BigNumber` specifying the modulus field.
     * @returns The multiplicative inverse `BigNumber` in the modulus field specified by `p`.
     */ _invmp(p) {
        this.assert(p._sign === 0, 'p must not be negative for _invmp');
        this.assert(!p.isZero(), 'p must not be zero for _invmp');
        const aBN = this.umod(p);
        let aVal = aBN._magnitude;
        let bVal = p._magnitude;
        let x1Val = 1n;
        let x2Val = 0n;
        const modulus = p._magnitude;
        while(aVal > 1n && bVal > 1n){
            let i = 0;
            while((aVal >> BigInt(i) & 1n) === 0n)i++;
            if (i > 0) {
                aVal >>= BigInt(i);
                for(let k = 0; k < i; ++k){
                    if ((x1Val & 1n) !== 0n) x1Val += modulus;
                    x1Val >>= 1n;
                }
            }
            let j = 0;
            while((bVal >> BigInt(j) & 1n) === 0n)j++;
            if (j > 0) {
                bVal >>= BigInt(j);
                for(let k = 0; k < j; ++k){
                    if ((x2Val & 1n) !== 0n) x2Val += modulus;
                    x2Val >>= 1n;
                }
            }
            if (aVal >= bVal) {
                aVal -= bVal;
                x1Val -= x2Val;
            } else {
                bVal -= aVal;
                x2Val -= x1Val;
            }
        }
        let resultVal;
        if (aVal === 1n) resultVal = x1Val;
        else if (bVal === 1n) resultVal = x2Val;
        else if (aVal === 0n && bVal === 1n) resultVal = x2Val;
        else if (bVal === 0n && aVal === 1n) resultVal = x1Val;
        else throw new Error('_invmp: GCD is not 1, inverse does not exist. aVal=' + aVal + ', bVal=' + bVal);
        resultVal %= modulus;
        if (resultVal < 0n) resultVal += modulus;
        const resultBN = new BigNumber(0n);
        resultBN._initializeState(resultVal, 0);
        return resultBN;
    }
    /**
     * Performs multiplication between the BigNumber instance and a given BigNumber.
     * It chooses the multiplication method based on the lengths of the numbers to optimize execution time.
     *
     * @method mulTo
     * @param num - The BigNumber multiply with.
     * @param out - The BigNumber where to store the result.
     * @returns The BigNumber resulting from the multiplication operation.
     */ mulTo(num, out) {
        out._magnitude = this._magnitude * num._magnitude;
        out._sign = out._magnitude === 0n ? 0 : this._sign ^ num._sign;
        out._nominalWordLength = this.length + num.length;
        out.red = null;
        out.normSign();
        return out;
    }
} //# sourceMappingURL=BigNumber.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Mersenne.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mersenne
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
;
class Mersenne {
    name;
    p;
    k;
    n;
    tmp;
    /**
     * @constructor
     * @param name - An identifier for the Mersenne instance.
     * @param p - A string representation of the pseudo-Mersenne prime, expressed in hexadecimal.
     *
     * @example
     * const mersenne = new Mersenne('M31', '7FFFFFFF');
     */ constructor(name, p){
        // P = 2 ^ N - K
        this.name = name;
        this.p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](p, 16);
        this.n = this.p.bitLength();
        this.k = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](BigInt(1)).iushln(this.n).isub(this.p); // Use 1n for BigInt compatibility
        this.tmp = this._tmp();
    }
    /**
     * Creates a temporary BigNumber structure for computations,
     * ensuring the appropriate number of words are initially allocated.
     *
     * @method _tmp
     * @returns A BigNumber with scaled size depending on prime magnitude.
     */ _tmp() {
        const tmp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](BigInt(0)); // Initialize with BigInt 0
        const requiredWords = Math.ceil(this.n / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].wordSize);
        tmp.expand(Math.max(1, requiredWords)); // Expand sets _nominalWordLength
        return tmp;
    }
    /**
     * Reduces an input BigNumber in place, under the assumption that
     * it is less than the square of the pseudo-Mersenne prime.
     *
     * @method ireduce
     * @param num - The BigNumber to be reduced.
     * @returns The reduced BigNumber.
     *
     * @example
     * const reduced = mersenne.ireduce(new BigNumber('2345', 16));
     */ ireduce(num) {
        // Assumes that `num` is less than `P^2`
        // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
        const r = num; // num is directly modified
        let rlen;
        do {
            this.split(r, this.tmp); // r is modified (becomes HI), this.tmp becomes LO
            this.imulK(r); // r becomes HI * K
            r.iadd(this.tmp); // r becomes HI * K + LO
            rlen = r.bitLength();
        }while (rlen > this.n)
        const cmp = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp === 0) {
            r.words = [
                0
            ]; // Set to zero using the words setter
        } else if (cmp > 0) {
            r.isub(this.p);
        }
        // No explicit strip needed here if operations maintain correctness and setter handles it.
        // However, ensuring it's stripped to minimal form after reduction is good.
        r.strip();
        return r;
    }
    /**
     * Shifts bits of the input BigNumber to the right, in place,
     * to meet the magnitude of the pseudo-Mersenne prime.
     *
     * @method split
     * @param input - The BigNumber to be shifted (will contain HI part).
     * @param out - The BigNumber to hold the shifted result (LO part).
     *
     * @example
     * mersenne.split(new BigNumber('2345', 16), new BigNumber());
     */ split(input, out) {
        // out gets the LO bits (shifted out part)
        // input gets modified to be the HI bits (remaining part after shift)
        input.iushrn(this.n, 0, out);
    }
    /**
     * Performs an in-place multiplication of the parameter by constant k.
     *
     * @method imulK
     * @param num - The BigNumber to multiply with k.
     * @returns The result of the multiplication, in BigNumber format.
     *
     * @example
     * const multiplied = mersenne.imulK(new BigNumber('2345', 16));
     */ imulK(num) {
        return num.imul(this.k);
    }
} //# sourceMappingURL=Mersenne.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/K256.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>K256
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Mersenne$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Mersenne.js [app-client] (ecmascript)");
;
class K256 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Mersenne$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    /**
     * Constructor for the K256 class.
     * Creates an instance of K256 using the super constructor from Mersenne.
     *
     * @constructor
     *
     * @example
     * const k256 = new K256();
     */ constructor(){
        super('k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }
    /**
     * Splits a BigNumber into a new BigNumber based on specific computation
     * rules. This method modifies the input and output big numbers.
     *
     * @method split
     * @param input - The BigNumber to be split.
     * @param output - The BigNumber that results from the split.
     *
     * @example
     * const input = new BigNumber(3456);
     * const output = new BigNumber(0);
     * k256.split(input, output);
     */ split(input, output) {
        const mask = 0x3fffff; // 22 bits
        const inputWords = input.words; // Access via getter
        const inputNominalLength = input.length; // Access via getter, respects _nominalWordLength
        const outLen = Math.min(inputNominalLength, 9);
        const tempOutputWords = new Array(outLen + (inputNominalLength > 9 ? 1 : 0)).fill(0);
        for(let i = 0; i < outLen; i++){
            tempOutputWords[i] = inputWords[i];
        }
        let currentOutputWordCount = outLen;
        if (inputNominalLength <= 9) {
            const finalOutputWords = new Array(currentOutputWordCount);
            for(let i = 0; i < currentOutputWordCount; ++i)finalOutputWords[i] = tempOutputWords[i];
            output.words = finalOutputWords; // Use setter
            input.words = [
                0
            ]; // Use setter to set to 0
            return;
        }
        // Shift by 9 limbs
        let prev = inputWords[9];
        tempOutputWords[currentOutputWordCount++] = prev & mask;
        const finalOutputWords = new Array(currentOutputWordCount);
        for(let i = 0; i < currentOutputWordCount; ++i)finalOutputWords[i] = tempOutputWords[i];
        output.words = finalOutputWords; // Use setter for output
        // For input modification
        const tempInputNewWords = new Array(Math.max(1, inputNominalLength - 9)).fill(0);
        let currentInputNewWordCount = 0;
        for(let i = 10; i < inputNominalLength; i++){
            const next = inputWords[i] | 0;
            if (currentInputNewWordCount < tempInputNewWords.length) {
                tempInputNewWords[currentInputNewWordCount++] = (next & mask) << 4 | prev >>> 22;
            }
            prev = next;
        }
        prev >>>= 22;
        if (currentInputNewWordCount < tempInputNewWords.length) {
            tempInputNewWords[currentInputNewWordCount++] = prev;
        } else if (prev !== 0 && tempInputNewWords.length > 0) {
        // This case implies original logic might have relied on array auto-expansion or specific length handling
        // For safety, if there's still a carry and no space, the array should have been bigger.
        // However, the original logic `input.length -= 9` suggests truncation.
        }
        const finalInputNewWords = new Array(currentInputNewWordCount);
        for(let i = 0; i < currentInputNewWordCount; ++i)finalInputNewWords[i] = tempInputNewWords[i];
        input.words = finalInputNewWords; // Use setter, which will strip and set magnitude
    }
    /**
     * Multiplies a BigNumber ('num') with the constant 'K' in-place and returns the result.
     * 'K' is equal to 0x1000003d1 or in decimal representation: [ 64, 977 ].
     *
     * @method imulK
     * @param num - The BigNumber to multiply with K.
     * @returns Returns the mutated BigNumber after multiplication.
     *
     * @example
     * const number = new BigNumber(12345);
     * const result = k256.imulK(number);
     */ imulK(num) {
        const currentWords = num.words; // Get current words based on _magnitude and _nominalWordLength
        const originalNominalLength = num.length; // Getter
        const newNominalLength = originalNominalLength + 2;
        const tempWords = new Array(newNominalLength).fill(0);
        for(let i = 0; i < originalNominalLength; i++){
            tempWords[i] = currentWords[i];
        }
        // tempWords is now effectively num.words expanded with zeroes
        let lo = 0;
        for(let i = 0; i < newNominalLength; i++){
            const w = tempWords[i] | 0;
            lo += w * 0x3d1; // 0x3d1 = 977
            tempWords[i] = lo & 0x3ffffff; // 26-bit mask
            lo = w * 0x40 + (lo / 0x4000000 | 0); // 0x40 = 64. 0x4000000 = 2^26
        }
        num.words = tempWords; // Use setter to re-initialize from tempWords
        // The setter will handle _magnitude, _sign, _nominalWordLength, and strip.
        return num;
    }
} //# sourceMappingURL=K256.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ReductionContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReductionContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$K256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/K256.js [app-client] (ecmascript)");
;
;
class ReductionContext {
    prime;
    m;
    /**
     * Constructs a new ReductionContext.
     *
     * @constructor
     * @param m - A BigNumber representing the modulus, or 'k256' to create a context for Koblitz curve.
     *
     * @example
     * new ReductionContext(new BigNumber(11));
     * new ReductionContext('k256');
     */ constructor(m){
        if (m === 'k256') {
            const prime = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$K256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
            this.m = prime.p;
            this.prime = prime;
        } else {
            this.assert(m.gtn(1), 'modulus must be greater than 1');
            this.m = m;
            this.prime = null;
        }
    }
    /**
     * Asserts that given value is truthy. Throws an Error with a provided message
     * if the value is falsy.
     *
     * @private
     * @param val - The value to be checked.
     * @param msg - The error message to be thrown if the value is falsy.
     *
     * @example
     * this.assert(1 < 2, '1 is not less than 2');
     * this.assert(2 < 1, '2 is less than 1'); // throws an Error with message '2 is less than 1'
     */ assert(val, msg = 'Assertion failed') {
        if (!val) throw new Error(msg);
    }
    /**
     * Verifies that a BigNumber is positive and red. Throws an error if these
     * conditions are not met.
     *
     * @param a - The BigNumber to be verified.
     *
     * @example
     * this.verify1(new BigNumber(10).toRed());
     * this.verify1(new BigNumber(-10).toRed()); //throws an Error
     * this.verify1(new BigNumber(10)); //throws an Error
     */ verify1(a) {
        this.assert(a.negative === 0, 'red works only with positives');
        this.assert(a.red, 'red works only with red numbers');
    }
    /**
     * Verifies that two BigNumbers are both positive and red. Also checks
     * that they have the same reduction context. Throws an error if these
     * conditions are not met.
     *
     * @param a - The first BigNumber to be verified.
     * @param b - The second BigNumber to be verified.
     *
     * @example
     * this.verify2(new BigNumber(10).toRed(this), new BigNumber(20).toRed(this));
     * this.verify2(new BigNumber(-10).toRed(this), new BigNumber(20).toRed(this)); //throws an Error
     * this.verify2(new BigNumber(10).toRed(this), new BigNumber(20)); //throws an Error
     */ verify2(a, b) {
        this.assert((a.negative | b.negative) === 0, 'red works only with positives');
        this.assert(a.red != null && a.red === b.red, 'red works only with red numbers');
    }
    /**
     * Performs an in-place reduction of the given BigNumber by the modulus of the reduction context, 'm'.
     *
     * @method imod
     *
     * @param a - BigNumber to be reduced.
     *
     * @returns Returns the reduced result.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(7));
     * context.imod(new BigNumber(19)); // Returns 5
     */ imod(a) {
        if (this.prime != null) return this.prime.ireduce(a).forceRed(this);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].move(a, a.umod(this.m).forceRed(this));
        return a;
    }
    /**
     * Negates a BigNumber in the context of the modulus.
     *
     * @method neg
     *
     * @param a - BigNumber to negate.
     *
     * @returns Returns the negation of 'a' in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(7));
     * context.neg(new BigNumber(3)); // Returns 4
     */ neg(a) {
        if (a.isZero()) {
            return a.clone();
        }
        return this.m.sub(a).forceRed(this);
    }
    /**
     * Performs the addition operation on two BigNumbers in the reduction context.
     *
     * @method add
     *
     * @param a - First BigNumber to add.
     * @param b - Second BigNumber to add.
     *
     * @returns Returns the result of 'a + b' in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(5));
     * context.add(new BigNumber(2), new BigNumber(4)); // Returns 1
     */ add(a, b) {
        this.verify2(a, b);
        const res = a.add(b);
        if (res.cmp(this.m) >= 0) {
            res.isub(this.m);
        }
        return res.forceRed(this);
    }
    /**
     * Performs an in-place addition operation on two BigNumbers in the reduction context
     * in order to avoid creating a new BigNumber, it modifies the first one with the result.
     *
     * @method iadd
     *
     * @param a - First BigNumber to add.
     * @param b - Second BigNumber to add.
     *
     * @returns Returns the modified 'a' after addition with 'b' in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(5));
     * const a = new BigNumber(2);
     * context.iadd(a, new BigNumber(4)); // Modifies 'a' to be 1
     */ iadd(a, b) {
        this.verify2(a, b);
        const res = a.iadd(b);
        if (res.cmp(this.m) >= 0) {
            res.isub(this.m);
        }
        return res;
    }
    /**
     * Subtracts one BigNumber from another BigNumber in the reduction context.
     *
     * @method sub
     *
     * @param a - BigNumber to be subtracted from.
     * @param b - BigNumber to subtract.
     *
     * @returns Returns the result of 'a - b' in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(7));
     * context.sub(new BigNumber(3), new BigNumber(2)); // Returns 1
     */ sub(a, b) {
        this.verify2(a, b);
        const res = a.sub(b);
        if (res.cmpn(0) < 0) {
            res.iadd(this.m);
        }
        return res.forceRed(this);
    }
    /**
     * Performs in-place subtraction of one BigNumber from another in the reduction context,
     * it modifies the first BigNumber with the result.
     *
     * @method isub
     *
     * @param a - BigNumber to be subtracted from.
     * @param b - BigNumber to subtract.
     *
     * @returns Returns the modified 'a' after subtraction of 'b' in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(5));
     * const a = new BigNumber(4);
     * context.isub(a, new BigNumber(2)); // Modifies 'a' to be 2
     */ isub(a, b) {
        this.verify2(a, b);
        const res = a.isub(b);
        if (res.cmpn(0) < 0) {
            res.iadd(this.m);
        }
        return res;
    }
    /**
     * Performs bitwise shift left operation on a BigNumber in the reduction context.
     *
     * @method shl
     *
     * @param a - BigNumber to perform shift on.
     * @param num - The number of positions to shift.
     *
     * @returns Returns the result of shifting 'a' left by 'num' positions in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(32));
     * context.shl(new BigNumber(4), 2); // Returns 16
     */ shl(a, num) {
        this.verify1(a);
        return this.imod(a.ushln(num));
    }
    /**
     * Performs in-place multiplication of two BigNumbers in the reduction context,
     * modifying the first BigNumber with the result.
     *
     * @method imul
     *
     * @param a - First BigNumber to multiply.
     * @param b - Second BigNumber to multiply.
     *
     * @returns Returns the modified 'a' after multiplication with 'b' in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(7));
     * const a = new BigNumber(3);
     * context.imul(a, new BigNumber(2)); // Modifies 'a' to be 6
     */ imul(a, b) {
        this.verify2(a, b);
        return this.imod(a.imul(b));
    }
    /**
     * Multiplies two BigNumbers in the reduction context.
     *
     * @method mul
     *
     * @param a - First BigNumber to multiply.
     * @param b - Second BigNumber to multiply.
     *
     * @returns Returns the result of 'a * b' in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(7));
     * context.mul(new BigNumber(3), new BigNumber(2)); // Returns 6
     */ mul(a, b) {
        this.verify2(a, b);
        return this.imod(a.mul(b));
    }
    /**
     * Calculates the square of a BigNumber in the reduction context,
     * modifying the original BigNumber with the result.
     *
     * @method isqr
     *
     * @param a - BigNumber to be squared.
     *
     * @returns Returns the squared 'a' in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(7));
     * const a = new BigNumber(3);
     * context.isqr(a); // Modifies 'a' to be 2 (9 % 7 = 2)
     */ isqr(a) {
        return this.imul(a, a.clone());
    }
    /**
     * Calculates the square of a BigNumber in the reduction context.
     *
     * @method sqr
     *
     * @param a - BigNumber to be squared.
     *
     * @returns Returns the result of 'a^2' in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(7));
     * context.sqr(new BigNumber(3)); // Returns 2 (9 % 7 = 2)
     */ sqr(a) {
        return this.mul(a, a);
    }
    /**
     * Calculates the square root of a BigNumber in the reduction context.
     *
     * @method sqrt
     *
     * @param a - The BigNumber to calculate the square root of.
     *
     * @returns Returns the square root of 'a' in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(9));
     * context.sqrt(new BigNumber(4)); // Returns 2
     */ sqrt(a) {
        if (a.isZero()) return a.clone();
        const mod3 = this.m.andln(3);
        this.assert(mod3 % 2 === 1);
        // Fast case
        if (mod3 === 3) {
            const pow = this.m.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1)).iushrn(2);
            return this.pow(a, pow);
        }
        // Tonelli-Shanks algorithm (Totally unoptimized and slow)
        //
        // Find Q and S, that Q * 2 ^ S = (P - 1)
        const q = this.m.subn(1);
        let s = 0;
        while(!q.isZero() && q.andln(1) === 0){
            s++;
            q.iushrn(1);
        }
        this.assert(!q.isZero());
        const one = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1).toRed(this);
        const nOne = one.redNeg();
        // Find quadratic non-residue
        // NOTE: Max is such because of generalized Riemann hypothesis.
        const lpow = this.m.subn(1).iushrn(1);
        const zl = this.m.bitLength();
        const z = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](2 * zl * zl).toRed(this);
        while(this.pow(z, lpow).cmp(nOne) !== 0){
            z.redIAdd(nOne);
        }
        let c = this.pow(z, q);
        let r = this.pow(a, q.addn(1).iushrn(1));
        let t = this.pow(a, q);
        let m = s;
        while(t.cmp(one) !== 0){
            let tmp = t;
            let i = 0;
            for(; tmp.cmp(one) !== 0; i++){
                tmp = tmp.redSqr();
            }
            this.assert(i < m);
            const b = this.pow(c, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1).iushln(m - i - 1));
            r = r.redMul(b);
            c = b.redSqr();
            t = t.redMul(c);
            m = i;
        }
        return r;
    }
    /**
     * Calculates the multiplicative inverse of a BigNumber in the reduction context.
     *
     * @method invm
     *
     * @param a - The BigNumber to find the multiplicative inverse of.
     *
     * @returns Returns the multiplicative inverse of 'a' in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(11));
     * context.invm(new BigNumber(3)); // Returns 4 (3*4 mod 11 = 1)
     */ invm(a) {
        const inv = a._invmp(this.m);
        if (inv.negative !== 0) {
            inv.negative = 0;
            return this.imod(inv).redNeg();
        } else {
            return this.imod(inv);
        }
    }
    /**
     * Raises a BigNumber to a power in the reduction context.
     *
     * @method pow
     *
     * @param a - The BigNumber to be raised to a power.
     * @param num - The power to raise the BigNumber to.
     *
     * @returns Returns the result of 'a' raised to the power of 'num' in the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(7));
     * context.pow(new BigNumber(3), new BigNumber(2)); // Returns 2 (3^2 % 7)
     */ pow(a, num) {
        if (num.isZero()) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1).toRed(this);
        if (num.cmpn(1) === 0) return a.clone();
        const windowSize = 4;
        const wnd = new Array(1 << windowSize);
        wnd[0] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1).toRed(this);
        wnd[1] = a;
        let i = 2;
        for(; i < wnd.length; i++){
            wnd[i] = this.mul(wnd[i - 1], a);
        }
        let res = wnd[0];
        let current = 0;
        let currentLen = 0;
        let start = num.bitLength() % 26;
        if (start === 0) {
            start = 26;
        }
        for(i = num.length - 1; i >= 0; i--){
            const word = num.words[i];
            for(let j = start - 1; j >= 0; j--){
                const bit = word >> j & 1;
                if (res !== wnd[0]) {
                    res = this.sqr(res);
                }
                if (bit === 0 && current === 0) {
                    currentLen = 0;
                    continue;
                }
                current <<= 1;
                current |= bit;
                currentLen++;
                if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
                res = this.mul(res, wnd[current]);
                currentLen = 0;
                current = 0;
            }
            start = 26;
        }
        return res;
    }
    /**
     * Converts a BigNumber to its equivalent in the reduction context.
     *
     * @method convertTo
     *
     * @param num - The BigNumber to convert to the reduction context.
     *
     * @returns Returns the converted BigNumber compatible with the reduction context.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(7));
     * context.convertTo(new BigNumber(8)); // Returns 1 (8 % 7)
     */ convertTo(num) {
        const r = num.umod(this.m);
        return r === num ? r.clone() : r;
    }
    /**
     * Converts a BigNumber from reduction context to its regular form.
     *
     * @method convertFrom
     *
     * @param num - The BigNumber to convert from the reduction context.
     *
     * @returns Returns the converted BigNumber in its regular form.
     *
     * @example
     * const context = new ReductionContext(new BigNumber(7));
     * const a = context.convertTo(new BigNumber(8)); // 'a' is now 1 in the reduction context
     * context.convertFrom(a); // Returns 1
     */ convertFrom(num) {
        const res = num.clone();
        res.red = null;
        return res;
    }
} //# sourceMappingURL=ReductionContext.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/MontgomoryMethod.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MontgomoryMethod
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ReductionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ReductionContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
;
;
class MontgomoryMethod extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ReductionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    shift;
    r;
    r2;
    rinv;
    minv;
    /**
     * @constructor
     * @param m - The modulus to be used for the Montgomery method reductions.
     */ constructor(m){
        super(m);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) {
            this.shift += 26 - this.shift % 26;
        }
        this.r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
    }
    /**
     * Converts a number into the Montgomery domain.
     *
     * @method convertTo
     * @param num - The number to be converted into the Montgomery domain.
     * @returns The result of the conversion into the Montgomery domain.
     *
     * @example
     * const montMethod = new MontgomoryMethod(m);
     * const convertedNum = montMethod.convertTo(num);
     */ convertTo(num) {
        return this.imod(num.ushln(this.shift));
    }
    /**
     * Converts a number from the Montgomery domain back to the original domain.
     *
     * @method convertFrom
     * @param num - The number to be converted from the Montgomery domain.
     * @returns The result of the conversion from the Montgomery domain.
     *
     * @example
     * const montMethod = new MontgomoryMethod(m);
     * const convertedNum = montMethod.convertFrom(num);
     */ convertFrom(num) {
        const r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
    }
    /**
     * Performs an in-place multiplication of two numbers in the Montgomery domain.
     *
     * @method imul
     * @param a - The first number to multiply.
     * @param b - The second number to multiply.
     * @returns The result of the in-place multiplication.
     *
     * @example
     * const montMethod = new MontgomoryMethod(m);
     * const product = montMethod.imul(a, b);
     */ imul(a, b) {
        if (a.isZero() || b.isZero()) {
            a.words[0] = 0;
            a.length = 1;
            return a;
        }
        const t = a.imul(b);
        const c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        const u = t.isub(c).iushrn(this.shift);
        let res = u;
        if (u.cmp(this.m) >= 0) {
            res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
            res = u.iadd(this.m);
        }
        return res.forceRed(this);
    }
    /**
     * Performs the multiplication of two numbers in the Montgomery domain.
     *
     * @method mul
     * @param a - The first number to multiply.
     * @param b - The second number to multiply.
     * @returns The result of the multiplication.
     *
     * @example
     * const montMethod = new MontgomoryMethod(m);
     * const product = montMethod.mul(a, b);
     */ mul(a, b) {
        if (a.isZero() || b.isZero()) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0).forceRed(this);
        const t = a.mul(b);
        const c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        const u = t.isub(c).iushrn(this.shift);
        let res = u;
        if (u.cmp(this.m) >= 0) {
            res = u.isub(this.m);
        } else if (u.cmpn(0) < 0) {
            res = u.iadd(this.m);
        }
        return res.forceRed(this);
    }
    /**
     * Calculates the modular multiplicative inverse of a number in the Montgomery domain.
     *
     * @method invm
     * @param a - The number to compute the modular multiplicative inverse of.
     * @returns The modular multiplicative inverse of 'a'.
     *
     * @example
     * const montMethod = new MontgomoryMethod(m);
     * const inverse = montMethod.invm(a);
     */ invm(a) {
        // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
        const res = this.imod(a._invmp(this.m).mul(this.r2));
        return res.forceRed(this);
    }
} //# sourceMappingURL=MontgomoryMethod.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BasePoint.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BasePoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Curve.js [app-client] (ecmascript)");
;
class BasePoint {
    curve;
    type;
    precomputed;
    constructor(type){
        this.curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](); // Always initialized, so never null
        this.type = type;
        this.precomputed = null;
    }
} //# sourceMappingURL=BasePoint.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/JacobianPoint.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JacobianPoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BasePoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BasePoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Point.js [app-client] (ecmascript)");
;
;
;
class JacobianPoint extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BasePoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    x;
    y;
    z;
    zOne;
    /**
     * Constructs a new `JacobianPoint` instance.
     *
     * @param x - If `null`, the x-coordinate will default to the curve's defined 'one' constant.
     * If `x` is not a BigNumber, `x` will be converted to a `BigNumber` assuming it is a hex string.
     *
     * @param y - If `null`, the y-coordinate will default to the curve's defined 'one' constant.
     * If `y` is not a BigNumber, `y` will be converted to a `BigNumber` assuming it is a hex string.
     *
     * @param z - If `null`, the z-coordinate will default to 0.
     * If `z` is not a BigNumber, `z` will be converted to a `BigNumber` assuming it is a hex string.
     *
     * @example
     * const pointJ1 = new JacobianPoint(null, null, null); // creates point at infinity
     * const pointJ2 = new JacobianPoint('3', '4', '1'); // creates point (3, 4, 1)
     */ constructor(x, y, z){
        super('jacobian');
        if (x === null && y === null && z === null) {
            this.x = this.curve.one;
            this.y = this.curve.one;
            this.z = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
        } else {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(x)) {
                x = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](x, 16);
            }
            this.x = x;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(y)) {
                y = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](y, 16);
            }
            this.y = y;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(z)) {
                z = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](z, 16);
            }
            this.z = z;
        }
        if (this.x.red == null) {
            this.x = this.x.toRed(this.curve.red);
        }
        if (this.y.red == null) {
            this.y = this.y.toRed(this.curve.red);
        }
        if (this.z.red == null) {
            this.z = this.z.toRed(this.curve.red);
        }
        this.zOne = this.z === this.curve.one;
        // --- Canonicalize point at infinity ---
        if (this.isInfinity()) {
            this.x = this.curve.one;
            this.y = this.curve.one;
            this.z = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0).toRed(this.curve.red);
            this.zOne = false;
        }
    }
    /**
     * Converts the `JacobianPoint` object instance to standard affine `Point` format and returns `Point` type.
     *
     * @returns The `Point`(affine) object representing the same point as the original `JacobianPoint`.
     *
     * If the initial `JacobianPoint` represents point at infinity, an instance of `Point` at infinity is returned.
     *
     * @example
     * const pointJ = new JacobianPoint('3', '4', '1');
     * const pointP = pointJ.toP();  // The point in affine coordinates.
     */ toP() {
        if (this.isInfinity()) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](null, null);
        }
        const zinv = this.z.redInvm();
        const zinv2 = zinv.redSqr();
        const ax = this.x.redMul(zinv2);
        const ay = this.y.redMul(zinv2).redMul(zinv);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](ax, ay);
    }
    /**
     * Negation operation. It returns the additive inverse of the Jacobian point.
     *
     * @method neg
     * @returns Returns a new Jacobian point as the result of the negation.
     *
     * @example
     * const jp = new JacobianPoint(x, y, z)
     * const result = jp.neg()
     */ neg() {
        return new JacobianPoint(this.x, this.y.redNeg(), this.z);
    }
    /**
     * Addition operation in the Jacobian coordinates. It takes a Jacobian point as an argument
     * and returns a new Jacobian point as a result of the addition. In the special cases,
     * when either one of the points is the point at infinity, it will return the other point.
     *
     * @method add
     * @param p - The Jacobian point to be added.
     * @returns Returns a new Jacobian point as the result of the addition.
     *
     * @example
     * const p1 = new JacobianPoint(x1, y1, z1)
     * const p2 = new JacobianPoint(x2, y2, z2)
     * const result = p1.add(p2)
     */ add(p) {
        // O + P = P
        if (this.isInfinity()) {
            return p;
        }
        // P + O = P
        if (p.isInfinity()) {
            return this;
        }
        // 12M + 4S + 7A
        const pz2 = p.z.redSqr();
        const z2 = this.z.redSqr();
        const u1 = this.x.redMul(pz2);
        const u2 = p.x.redMul(z2);
        const s1 = this.y.redMul(pz2.redMul(p.z));
        const s2 = p.y.redMul(z2.redMul(this.z));
        const h = u1.redSub(u2);
        const r = s1.redSub(s2);
        if (h.cmpn(0) === 0) {
            if (r.cmpn(0) !== 0) {
                return new JacobianPoint(null, null, null);
            } else {
                return this.dbl();
            }
        }
        const h2 = h.redSqr();
        const h3 = h2.redMul(h);
        const v = u1.redMul(h2);
        const nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
        const ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
        const nz = this.z.redMul(p.z).redMul(h);
        return new JacobianPoint(nx, ny, nz);
    }
    /**
     * Mixed addition operation. This function combines the standard point addition with
     * the transformation from the affine to Jacobian coordinates. It first converts
     * the affine point to Jacobian, and then preforms the addition.
     *
     * @method mixedAdd
     * @param p - The affine point to be added.
     * @returns Returns the result of the mixed addition as a new Jacobian point.
     *
     * @example
     * const jp = new JacobianPoint(x1, y1, z1)
     * const ap = new Point(x2, y2)
     * const result = jp.mixedAdd(ap)
     */ mixedAdd(p) {
        // O + P = P
        if (this.isInfinity()) {
            return p.toJ();
        }
        // P + O = P
        if (p.isInfinity()) {
            return this;
        }
        // Ensure x and y are not null
        if (p.x === null || p.y === null) {
            throw new Error('Point coordinates cannot be null');
        }
        // 8M + 3S + 7A
        const z2 = this.z.redSqr();
        const u1 = this.x;
        const u2 = p.x.redMul(z2);
        const s1 = this.y;
        const s2 = p.y.redMul(z2).redMul(this.z);
        const h = u1.redSub(u2);
        const r = s1.redSub(s2);
        if (h.cmpn(0) === 0) {
            if (r.cmpn(0) !== 0) {
                return new JacobianPoint(null, null, null);
            } else {
                return this.dbl();
            }
        }
        const h2 = h.redSqr();
        const h3 = h2.redMul(h);
        const v = u1.redMul(h2);
        const nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
        const ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
        const nz = this.z.redMul(h);
        return new JacobianPoint(nx, ny, nz);
    }
    /**
     * Multiple doubling operation. It doubles the Jacobian point as many times as the pow parameter specifies. If pow is 0 or the point is the point at infinity, it will return the point itself.
     *
     * @method dblp
     * @param pow - The number of times the point should be doubled.
     * @returns Returns a new Jacobian point as the result of multiple doublings.
     *
     * @example
     * const jp = new JacobianPoint(x, y, z)
     * const result = jp.dblp(3)
     */ dblp(pow) {
        if (pow === 0) {
            return this;
        }
        if (this.isInfinity()) {
            return this;
        }
        if (typeof pow === 'undefined') {
            return this.dbl();
        }
        /* eslint-disable @typescript-eslint/no-this-alias */ let r = this;
        for(let i = 0; i < pow; i++){
            r = r.dbl();
        }
        return r;
    }
    /**
     * Point doubling operation in the Jacobian coordinates. A special case is when the point is the point at infinity, in this case, this function will return the point itself.
     *
     * @method dbl
     * @returns Returns a new Jacobian point as the result of the doubling.
     *
     * @example
     * const jp = new JacobianPoint(x, y, z)
     * const result = jp.dbl()
     */ dbl() {
        if (this.isInfinity()) {
            return this;
        }
        let nx;
        let ny;
        let nz;
        // Z = 1
        if (this.zOne) {
            // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
            //     #doubling-mdbl-2007-bl
            // 1M + 5S + 14A
            // XX = X1^2
            const xx = this.x.redSqr();
            // YY = Y1^2
            const yy = this.y.redSqr();
            // YYYY = YY^2
            const yyyy = yy.redSqr();
            // S = 2 * ((X1 + YY)^2 - XX - YYYY)
            let s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
            s = s.redIAdd(s);
            // M = 3 * XX + a; a = 0
            const m = xx.redAdd(xx).redIAdd(xx);
            // T = M ^ 2 - 2*S
            const t = m.redSqr().redISub(s).redISub(s);
            // 8 * YYYY
            let yyyy8 = yyyy.redIAdd(yyyy);
            yyyy8 = yyyy8.redIAdd(yyyy8);
            yyyy8 = yyyy8.redIAdd(yyyy8);
            // X3 = T
            nx = t;
            // Y3 = M * (S - T) - 8 * YYYY
            ny = m.redMul(s.redISub(t)).redISub(yyyy8);
            // Z3 = 2*Y1
            nz = this.y.redAdd(this.y);
        } else {
            // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
            //     #doubling-dbl-2009-l
            // 2M + 5S + 13A
            // A = X1^2
            const a = this.x.redSqr();
            // B = Y1^2
            const b = this.y.redSqr();
            // C = B^2
            const c = b.redSqr();
            // D = 2 * ((X1 + B)^2 - A - C)
            let d = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
            d = d.redIAdd(d);
            // E = 3 * A
            const e = a.redAdd(a).redIAdd(a);
            // F = E^2
            const f = e.redSqr();
            // 8 * C
            let c8 = c.redIAdd(c);
            c8 = c8.redIAdd(c8);
            c8 = c8.redIAdd(c8);
            // X3 = F - 2 * D
            nx = f.redISub(d).redISub(d);
            // Y3 = E * (D - X3) - 8 * C
            ny = e.redMul(d.redISub(nx)).redISub(c8);
            // Z3 = 2 * Y1 * Z1
            nz = this.y.redMul(this.z);
            nz = nz.redIAdd(nz);
        }
        return new JacobianPoint(nx, ny, nz);
    }
    /**
     * Equality check operation. It checks whether the affine or Jacobian point is equal to this Jacobian point.
     *
     * @method eq
     * @param p - The affine or Jacobian point to compare with.
     * @returns Returns true if the points are equal, otherwise returns false.
     *
     * @example
     * const jp1 = new JacobianPoint(x1, y1, z1)
     * const jp2 = new JacobianPoint(x2, y2, z2)
     * const areEqual = jp1.eq(jp2)
     */ eq(p) {
        if (p.type === 'affine') {
            return this.eq(p.toJ());
        }
        if (this === p) {
            return true;
        }
        p = p;
        // --- Infinity handling ---
        if (this.isInfinity() && p.isInfinity()) {
            return true;
        }
        if (this.isInfinity() !== p.isInfinity()) {
            return false;
        }
        // x1 * z2^2 == x2 * z1^2
        const z2 = this.z.redSqr();
        const pz2 = p.z.redSqr();
        if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0) {
            return false;
        }
        // y1 * z2^3 == y2 * z1^3
        const z3 = z2.redMul(this.z);
        const pz3 = pz2.redMul(p.z);
        return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
    }
    /**
     * Equality check operation in relation to an x coordinate of a point in projective coordinates.
     * It checks whether the x coordinate of the Jacobian point is equal to the provided x coordinate
     * of a point in projective coordinates.
     *
     * @method eqXToP
     * @param x - The x coordinate of a point in projective coordinates.
     * @returns Returns true if the x coordinates are equal, otherwise returns false.
     *
     * @example
     * const jp = new JacobianPoint(x1, y1, z1)
     * const isXEqual = jp.eqXToP(x2)
     */ eqXToP(x) {
        const zs = this.z.redSqr();
        const rx = x.toRed(this.curve?.red).redMul(zs);
        if (this.x.cmp(rx) === 0) {
            return true;
        }
        const xc = x.clone();
        if (this.curve === null || this.curve.redN == null) {
            throw new Error('Curve or redN is not initialized.');
        }
        const t = this.curve.redN.redMul(zs);
        while(xc.cmp(this.curve.p) < 0){
            xc.iadd(this.curve.n);
            if (xc.cmp(this.curve.p) >= 0) {
                return false;
            }
            rx.redIAdd(t);
            if (this.x.cmp(rx) === 0) {
                return true;
            }
        }
        // ✅ Ensure function always returns a boolean
        return false;
    }
    /**
     * Returns the string representation of the JacobianPoint instance.
     * @method inspect
     * @returns Returns the string description of the JacobianPoint. If the JacobianPoint represents a point at infinity, the return value of this function is '<EC JPoint Infinity>'. For a normal point, it returns the string description format as '<EC JPoint x: x-coordinate y: y-coordinate z: z-coordinate>'.
     *
     * @example
     * const point = new JacobianPoint('5', '6', '1');
     * console.log(point.inspect()); // Output: '<EC JPoint x: 5 y: 6 z: 1>'
     */ inspect() {
        if (this.isInfinity()) {
            return '<EC JPoint Infinity>';
        }
        return '<EC JPoint x: ' + this.x.toString(16, 2) + ' y: ' + this.y.toString(16, 2) + ' z: ' + this.z.toString(16, 2) + '>';
    }
    /**
     * Checks whether the JacobianPoint instance represents a point at infinity.
     * @method isInfinity
     * @returns Returns true if the JacobianPoint's z-coordinate equals to zero (which represents the point at infinity in Jacobian coordinates). Returns false otherwise.
     *
     * @example
     * const point = new JacobianPoint('5', '6', '0');
     * console.log(point.isInfinity()); // Output: true
     */ isInfinity() {
        return this.z.cmpn(0) === 0;
    }
} //# sourceMappingURL=JacobianPoint.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/hex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidHex",
    ()=>assertValidHex,
    "normalizeHex",
    ()=>normalizeHex
]);
// src/primitives/hex.ts
// Accepts empty string because empty byte arrays are valid in Bitcoin.
const PURE_HEX_REGEX = /^[0-9a-fA-F]*$/;
function assertValidHex(msg) {
    if (typeof msg !== 'string') {
        throw new TypeError('Invalid hex string');
    }
    // allow empty
    if (msg.length === 0) return;
    if (!PURE_HEX_REGEX.test(msg)) {
        throw new Error('Invalid hex string');
    }
}
function normalizeHex(msg) {
    assertValidHex(msg);
    // If empty, return empty — never force to "00"
    if (msg.length === 0) return '';
    let normalized = msg.toLowerCase();
    // Pad odd-length hex
    if (normalized.length % 2 !== 0) {
        normalized = '0' + normalized;
    }
    return normalized;
} //# sourceMappingURL=hex.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RIPEMD160",
    ()=>RIPEMD160,
    "SHA1",
    ()=>SHA1,
    "SHA1HMAC",
    ()=>SHA1HMAC,
    "SHA256",
    ()=>SHA256,
    "SHA256HMAC",
    ()=>SHA256HMAC,
    "SHA512",
    ()=>SHA512,
    "SHA512HMAC",
    ()=>SHA512HMAC,
    "hash160",
    ()=>hash160,
    "hash256",
    ()=>hash256,
    "htonl",
    ()=>htonl,
    "pbkdf2",
    ()=>pbkdf2,
    "realHtonl",
    ()=>realHtonl,
    "ripemd160",
    ()=>ripemd160,
    "sha1",
    ()=>sha1,
    "sha256",
    ()=>sha256,
    "sha256hmac",
    ()=>sha256hmac,
    "sha512",
    ()=>sha512,
    "sha512hmac",
    ()=>sha512hmac,
    "swapBytes32",
    ()=>swapBytes32,
    "toArray",
    ()=>toArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
// @ts-nocheck
/* eslint-disable @typescript-eslint/naming-convention */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/hex.js [app-client] (ecmascript)");
;
const assert = (expression, message = 'Hash assertion failed')=>{
    if (!expression) {
        throw new Error(message);
    }
};
/**
 * The BaseHash class is an abstract base class for cryptographic hash functions.
 * It provides a common structure and functionality for hash function classes.
 *
 * @class BaseHash
 *
 * @property pending - Stores partially processed message segments.
 * @property pendingTotal - The total number of characters that are being stored in `pending`
 * @property blockSize - The size of each block to processed.
 * @property outSize - The size of the final hash output.
 * @property endian - The endianness used during processing, can either be 'big' or 'little'.
 * @property _delta8 - The block size divided by 8, useful in various computations.
 * @property _delta32 - The block size divided by 32, useful in various computations.
 * @property padLength - The length of padding to be added to finalize the computation.
 * @property hmacStrength - The HMAC strength value.
 *
 * @param blockSize - The size of the block to be hashed.
 * @param outSize - The size of the resulting hash.
 * @param hmacStrength - The strength of the HMAC.
 * @param padLength - The length of the padding to be added.
 *
 * @example
 * Sub-classes would extend this base BaseHash class like:
 * class RIPEMD160 extends BaseHash {
 *   constructor () {
 *     super(512, 160, 192, 64);
 *     // ...
 *   }
 *   // ...
 * }
 */ class BaseHash {
    pending;
    pendingTotal;
    blockSize;
    outSize;
    endian;
    _delta8;
    _delta32;
    padLength;
    hmacStrength;
    constructor(blockSize, outSize, hmacStrength, padLength){
        this.pending = null;
        this.pendingTotal = 0;
        this.blockSize = blockSize;
        this.outSize = outSize;
        this.hmacStrength = hmacStrength;
        this.padLength = padLength / 8;
        this.endian = 'big';
        this._delta8 = this.blockSize / 8;
        this._delta32 = this.blockSize / 32;
    }
    _update(msg, start) {
        throw new Error('Not implemented');
    }
    _digest() {
        throw new Error('Not implemented');
    }
    _digestHex() {
        throw new Error('Not implemented');
    }
    /**
     * Converts the input message into an array, pads it, and joins into 32bit blocks.
     * If there is enough data, it tries updating the hash computation.
     *
     * @method update
     * @param msg - The message segment to include in the hashing computation.
     * @param enc - The encoding of the message. If 'hex', the string will be treated as such, 'utf8' otherwise.
     *
     * @returns Returns the instance of the object for chaining.
     *
     * @example
     * sha256.update('Hello World', 'utf8');
     */ update(msg, enc) {
        // Convert message to array, pad it, and join into 32bit blocks
        msg = toArray(msg, enc);
        if (this.pending == null) {
            this.pending = msg;
        } else {
            this.pending = this.pending.concat(msg);
        }
        this.pendingTotal += msg.length;
        // Enough data, try updating
        if (this.pending.length >= this._delta8) {
            msg = this.pending;
            // Process pending data in blocks
            const r = msg.length % this._delta8;
            this.pending = msg.slice(msg.length - r, msg.length);
            if (this.pending.length === 0) {
                this.pending = null;
            }
            msg = join32(msg, 0, msg.length - r, this.endian);
            for(let i = 0; i < msg.length; i += this._delta32){
                this._update(msg, i);
            }
        }
        return this;
    }
    /**
     * Finalizes the hash computation and returns the hash value/result.
     *
     * @method digest
     *
     * @returns Returns the final hash value.
     *
     * @example
     * const hash = sha256.digest();
     */ digest() {
        this.update(this._pad());
        assert(this.pending === null);
        return this._digest();
    }
    /**
     * Finalizes the hash computation and returns the hash value/result as a hex string.
     *
     * @method digest
     *
     * @returns Returns the final hash value as a hex string.
     *
     * @example
     * const hash = sha256.digestHex();
     */ digestHex() {
        this.update(this._pad());
        assert(this.pending === null);
        return this._digestHex();
    }
    /**
     * [Private Method] Used internally to prepare the padding for the final stage of the hash computation.
     *
     * @method _pad
     * @private
     *
     * @returns Returns an array denoting the padding.
     */ _pad() {
        const len = this.pendingTotal;
        if (!Number.isSafeInteger(len) || len < 0) {
            throw new Error('Message too long for this hash function');
        }
        const bytes = this._delta8;
        const k = bytes - (len + this.padLength) % bytes;
        const res = new Array(k + this.padLength);
        res[0] = 0x80;
        let i;
        for(i = 1; i < k; i++){
            res[i] = 0;
        }
        const lengthBytes = this.padLength;
        const maxBits = 1n << BigInt(lengthBytes * 8);
        let totalBits = BigInt(len) * 8n;
        if (totalBits >= maxBits) {
            throw new Error('Message too long for this hash function');
        }
        if (this.endian === 'big') {
            const lenArray = new Array(lengthBytes);
            for(let b = lengthBytes - 1; b >= 0; b--){
                lenArray[b] = Number(totalBits & 0xffn);
                totalBits >>= 8n;
            }
            for(let b = 0; b < lengthBytes; b++){
                res[i++] = lenArray[b];
            }
        } else {
            for(let b = 0; b < lengthBytes; b++){
                res[i++] = Number(totalBits & 0xffn);
                totalBits >>= 8n;
            }
        }
        return res;
    }
}
function isSurrogatePair(msg, i) {
    if ((msg.charCodeAt(i) & 0xfc00) !== 0xd800) {
        return false;
    }
    if (i < 0 || i + 1 >= msg.length) {
        return false;
    }
    return (msg.charCodeAt(i + 1) & 0xfc00) === 0xdc00;
}
function toArray(msg, enc) {
    if (Array.isArray(msg)) {
        return msg.slice();
    }
    if (!msg) {
        return [];
    }
    const res = [];
    if (typeof msg === 'string') {
        if (enc !== 'hex') {
            // Inspired by stringToUtf8ByteArray() in closure-library by Google
            // https://github.com/google/closure-library/blob/8598d87242af59aac233270742c8984e2b2bdbe0/closure/goog/crypt/crypt#L117-L143
            // Apache License 2.0
            // https://github.com/google/closure-library/blob/master/LICENSE
            let p = 0;
            for(let i = 0; i < msg.length; i++){
                let c = msg.charCodeAt(i);
                if (c < 128) {
                    res[p++] = c;
                } else if (c < 2048) {
                    res[p++] = c >> 6 | 192;
                    res[p++] = c & 63 | 128;
                } else if (isSurrogatePair(msg, i)) {
                    c = 0x10000 + ((c & 0x03ff) << 10) + (msg.charCodeAt(++i) & 0x03ff);
                    res[p++] = c >> 18 | 240;
                    res[p++] = c >> 12 & 63 | 128;
                    res[p++] = c >> 6 & 63 | 128;
                    res[p++] = c & 63 | 128;
                } else {
                    res[p++] = c >> 12 | 224;
                    res[p++] = c >> 6 & 63 | 128;
                    res[p++] = c & 63 | 128;
                }
            }
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertValidHex"])(msg);
            msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeHex"])(msg);
            for(let i = 0; i < msg.length; i += 2){
                res.push(parseInt(msg[i] + msg[i + 1], 16));
            }
        }
    } else {
        msg = msg;
        for(let i = 0; i < msg.length; i++){
            res[i] = msg[i] | 0;
        }
    }
    return res;
}
function htonl(w) {
    return swapBytes32(w);
}
function toHex32(msg, endian) {
    let res = '';
    for(let i = 0; i < msg.length; i++){
        let w = msg[i];
        if (endian === 'little') {
            w = htonl(w);
        }
        res += zero8(w.toString(16));
    }
    return res;
}
function zero8(word) {
    if (word.length === 7) {
        return '0' + word;
    } else if (word.length === 6) {
        return '00' + word;
    } else if (word.length === 5) {
        return '000' + word;
    } else if (word.length === 4) {
        return '0000' + word;
    } else if (word.length === 3) {
        return '00000' + word;
    } else if (word.length === 2) {
        return '000000' + word;
    } else if (word.length === 1) {
        return '0000000' + word;
    } else {
        return word;
    }
}
function bytesToHex(data) {
    let res = '';
    for (const b of data)res += b.toString(16).padStart(2, '0');
    return res;
}
function join32(msg, start, end, endian) {
    const len = end - start;
    assert(len % 4 === 0);
    const res = new Array(len / 4);
    for(let i = 0, k = start; i < res.length; i++, k += 4){
        let w;
        if (endian === 'big') {
            w = msg[k] << 24 | msg[k + 1] << 16 | msg[k + 2] << 8 | msg[k + 3];
        } else {
            w = msg[k + 3] << 24 | msg[k + 2] << 16 | msg[k + 1] << 8 | msg[k];
        }
        res[i] = w >>> 0;
    }
    return res;
}
function split32(msg, endian) {
    const res = new Array(msg.length * 4);
    for(let i = 0, k = 0; i < msg.length; i++, k += 4){
        const m = msg[i];
        if (endian === 'big') {
            res[k] = m >>> 24;
            res[k + 1] = m >>> 16 & 0xff;
            res[k + 2] = m >>> 8 & 0xff;
            res[k + 3] = m & 0xff;
        } else {
            res[k + 3] = m >>> 24;
            res[k + 2] = m >>> 16 & 0xff;
            res[k + 1] = m >>> 8 & 0xff;
            res[k] = m & 0xff;
        }
    }
    return res;
}
function rotr32(w, b) {
    return w >>> b | w << 32 - b;
}
function rotl32(w, b) {
    return w << b | w >>> 32 - b;
}
function sum32(a, b) {
    return a + b >>> 0;
}
function SUM32_3(a, b, c) {
    return a + b + c >>> 0;
}
_c = SUM32_3;
function SUM32_4(a, b, c, d) {
    return a + b + c + d >>> 0;
}
_c1 = SUM32_4;
function SUM32_5(a, b, c, d, e) {
    return a + b + c + d + e >>> 0;
}
_c2 = SUM32_5;
function FT_1(s, x, y, z) {
    if (s === 0) {
        return ch32(x, y, z);
    }
    if (s === 1 || s === 3) {
        return p32(x, y, z);
    }
    if (s === 2) {
        return maj32(x, y, z);
    }
    return 0;
}
_c3 = FT_1;
function ch32(x, y, z) {
    return x & y ^ ~x & z;
}
function maj32(x, y, z) {
    return x & y ^ x & z ^ y & z;
}
function p32(x, y, z) {
    return x ^ y ^ z;
}
function S0_256(x) {
    return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
}
_c4 = S0_256;
function S1_256(x) {
    return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
}
_c5 = S1_256;
function G0_256(x) {
    return rotr32(x, 7) ^ rotr32(x, 18) ^ x >>> 3;
}
_c6 = G0_256;
function G1_256(x) {
    return rotr32(x, 17) ^ rotr32(x, 19) ^ x >>> 10;
}
_c7 = G1_256;
const r = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8,
    3,
    10,
    14,
    4,
    9,
    15,
    8,
    1,
    2,
    7,
    0,
    6,
    13,
    11,
    5,
    12,
    1,
    9,
    11,
    10,
    0,
    8,
    12,
    4,
    13,
    3,
    7,
    15,
    14,
    5,
    6,
    2,
    4,
    0,
    5,
    9,
    7,
    12,
    2,
    10,
    14,
    1,
    3,
    8,
    11,
    6,
    15,
    13
];
const rh = [
    5,
    14,
    7,
    0,
    9,
    2,
    11,
    4,
    13,
    6,
    15,
    8,
    1,
    10,
    3,
    12,
    6,
    11,
    3,
    7,
    0,
    13,
    5,
    10,
    14,
    15,
    8,
    12,
    4,
    9,
    1,
    2,
    15,
    5,
    1,
    3,
    7,
    14,
    6,
    9,
    11,
    8,
    12,
    2,
    10,
    0,
    4,
    13,
    8,
    6,
    4,
    1,
    3,
    11,
    15,
    0,
    5,
    12,
    2,
    13,
    9,
    7,
    10,
    14,
    12,
    15,
    10,
    4,
    1,
    5,
    8,
    7,
    6,
    2,
    13,
    14,
    0,
    3,
    9,
    11
];
const s = [
    11,
    14,
    15,
    12,
    5,
    8,
    7,
    9,
    11,
    13,
    14,
    15,
    6,
    7,
    9,
    8,
    7,
    6,
    8,
    13,
    11,
    9,
    7,
    15,
    7,
    12,
    15,
    9,
    11,
    7,
    13,
    12,
    11,
    13,
    6,
    7,
    14,
    9,
    13,
    15,
    14,
    8,
    13,
    6,
    5,
    12,
    7,
    5,
    11,
    12,
    14,
    15,
    14,
    15,
    9,
    8,
    9,
    14,
    5,
    6,
    8,
    6,
    5,
    12,
    9,
    15,
    5,
    11,
    6,
    8,
    13,
    12,
    5,
    12,
    13,
    14,
    11,
    8,
    5,
    6
];
const sh = [
    8,
    9,
    9,
    11,
    13,
    15,
    15,
    5,
    7,
    7,
    8,
    11,
    14,
    14,
    12,
    6,
    9,
    13,
    15,
    7,
    12,
    8,
    9,
    11,
    7,
    7,
    12,
    7,
    6,
    15,
    13,
    11,
    9,
    7,
    15,
    11,
    8,
    6,
    6,
    14,
    12,
    13,
    5,
    14,
    13,
    13,
    7,
    5,
    15,
    5,
    8,
    11,
    14,
    14,
    6,
    14,
    6,
    9,
    12,
    9,
    12,
    5,
    15,
    8,
    8,
    5,
    12,
    9,
    12,
    5,
    14,
    6,
    8,
    13,
    6,
    5,
    15,
    13,
    11,
    11
];
function f(j, x, y, z) {
    if (j <= 15) {
        return x ^ y ^ z;
    } else if (j <= 31) {
        return x & y | ~x & z;
    } else if (j <= 47) {
        return (x | ~y) ^ z;
    } else if (j <= 63) {
        return x & z | y & ~z;
    } else {
        return x ^ (y | ~z);
    }
}
function K(j) {
    if (j <= 15) {
        return 0x00000000;
    } else if (j <= 31) {
        return 0x5a827999;
    } else if (j <= 47) {
        return 0x6ed9eba1;
    } else if (j <= 63) {
        return 0x8f1bbcdc;
    } else {
        return 0xa953fd4e;
    }
}
_c8 = K;
function Kh(j) {
    if (j <= 15) {
        return 0x50a28be6;
    } else if (j <= 31) {
        return 0x5c4dd124;
    } else if (j <= 47) {
        return 0x6d703ef3;
    } else if (j <= 63) {
        return 0x7a6d76e9;
    } else {
        return 0x00000000;
    }
}
_c9 = Kh;
class RIPEMD160 extends BaseHash {
    h;
    constructor(){
        super(512, 160, 192, 64);
        this.endian = 'little';
        this.h = [
            0x67452301,
            0xefcdab89,
            0x98badcfe,
            0x10325476,
            0xc3d2e1f0
        ];
        this.endian = 'little';
    }
    _update(msg, start) {
        let A = this.h[0];
        let B = this.h[1];
        let C = this.h[2];
        let D = this.h[3];
        let E = this.h[4];
        let Ah = A;
        let Bh = B;
        let Ch = C;
        let Dh = D;
        let Eh = E;
        let T;
        for(let j = 0; j < 80; j++){
            T = sum32(rotl32(SUM32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)), s[j]), E);
            A = E;
            E = D;
            D = rotl32(C, 10);
            C = B;
            B = T;
            T = sum32(rotl32(SUM32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)), sh[j]), Eh);
            Ah = Eh;
            Eh = Dh;
            Dh = rotl32(Ch, 10);
            Ch = Bh;
            Bh = T;
        }
        T = SUM32_3(this.h[1], C, Dh);
        this.h[1] = SUM32_3(this.h[2], D, Eh);
        this.h[2] = SUM32_3(this.h[3], E, Ah);
        this.h[3] = SUM32_3(this.h[4], A, Bh);
        this.h[4] = SUM32_3(this.h[0], B, Ch);
        this.h[0] = T;
    }
    _digest() {
        return split32(this.h, 'little');
    }
    _digestHex() {
        return toHex32(this.h, 'little');
    }
}
class SHA256 {
    h;
    constructor(){
        this.h = new FastSHA256();
    }
    update(msg, enc) {
        const data = msg instanceof Uint8Array ? msg : Uint8Array.from(toArray(msg, enc));
        this.h.update(data);
        return this;
    }
    digest() {
        return Array.from(this.h.digest());
    }
    digestHex() {
        return bytesToHex(this.h.digest());
    }
}
class SHA1 extends BaseHash {
    h;
    W;
    k;
    constructor(){
        super(512, 160, 80, 64);
        this.k = [
            0x5a827999,
            0x6ed9eba1,
            0x8f1bbcdc,
            0xca62c1d6
        ];
        this.h = [
            0x67452301,
            0xefcdab89,
            0x98badcfe,
            0x10325476,
            0xc3d2e1f0
        ];
        this.W = new Array(80);
    }
    _update(msg, start) {
        const W = this.W;
        // Default start to 0
        if (start === undefined) {
            start = 0;
        }
        let i;
        for(i = 0; i < 16; i++){
            W[i] = msg[start + i];
        }
        for(; i < W.length; i++){
            W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
        }
        let a = this.h[0];
        let b = this.h[1];
        let c = this.h[2];
        let d = this.h[3];
        let e = this.h[4];
        for(i = 0; i < W.length; i++){
            const s = ~~(i / 20);
            const t = SUM32_5(rotl32(a, 5), FT_1(s, b, c, d), e, W[i], this.k[s]);
            e = d;
            d = c;
            c = rotl32(b, 30);
            b = a;
            a = t;
        }
        this.h[0] = sum32(this.h[0], a);
        this.h[1] = sum32(this.h[1], b);
        this.h[2] = sum32(this.h[2], c);
        this.h[3] = sum32(this.h[3], d);
        this.h[4] = sum32(this.h[4], e);
    }
    _digest() {
        return split32(this.h, 'big');
    }
    _digestHex() {
        return toHex32(this.h, 'big');
    }
}
class SHA512 {
    h;
    constructor(){
        this.h = new FastSHA512();
    }
    update(msg, enc) {
        const data = Uint8Array.from(toArray(msg, enc));
        this.h.update(data);
        return this;
    }
    digest() {
        return Array.from(this.h.digest());
    }
    digestHex() {
        return bytesToHex(this.h.digest());
    }
}
class SHA256HMAC {
    h;
    blockSize = 64;
    outSize = 32;
    /**
     * The constructor for the `SHA256HMAC` class.
     *
     * It initializes the `SHA256HMAC` object and sets up the inner and outer padded keys.
     * If the key size is larger than the blockSize, it is digested using SHA-256.
     * If the key size is less than the blockSize, it is padded with zeroes.
     *
     * @constructor
     * @param key - The key to use to create the HMAC. Can be a number array or a string in hexadecimal format.
     *
     * @example
     * const myHMAC = new SHA256HMAC('deadbeef');
     */ constructor(key){
        const k = key instanceof Uint8Array ? key : Uint8Array.from(toArray(key, typeof key === 'string' ? 'hex' : undefined));
        this.h = new HMAC(sha256Fast, k);
    }
    /**
     * Updates the `SHA256HMAC` object with part of the message to be hashed.
     *
     * @method update
     * @param msg - Part of the message to hash. Can be a number array or a string.
     * @param enc - If 'hex', then the input is encoded as hexadecimal. If undefined or not 'hex', then no encoding is performed.
     * @returns Returns the instance of `SHA256HMAC` for chaining calls.
     *
     * @example
     * myHMAC.update('deadbeef', 'hex');
     */ update(msg, enc) {
        const data = msg instanceof Uint8Array ? msg : Uint8Array.from(toArray(msg, enc));
        this.h.update(data);
        return this;
    }
    /**
     * Finalizes the HMAC computation and returns the resultant hash.
     *
     * @method digest
     * @returns Returns the digest of the hashed data. Can be a number array or a string.
     *
     * @example
     * let hashedMessage = myHMAC.digest();
     */ digest() {
        return Array.from(this.h.digest());
    }
    /**
     * Finalizes the HMAC computation and returns the resultant hash as a hex string.
     *
     * @method digest
     * @returns Returns the digest of the hashed data as a hex string
     *
     * @example
     * let hashedMessage = myHMAC.digestHex();
     */ digestHex() {
        return bytesToHex(this.h.digest());
    }
}
class SHA1HMAC {
    inner;
    outer;
    blockSize = 64;
    constructor(key){
        key = toArray(key, 'hex');
        // Shorten key, if needed
        if (key.length > this.blockSize) {
            key = new SHA1().update(key).digest();
        }
        // Keys shorter than block size are padded with zeros on the right
        let i;
        for(i = key.length; i < this.blockSize; i++){
            key.push(0);
        }
        for(i = 0; i < key.length; i++){
            key[i] ^= 0x36;
        }
        this.inner = new SHA1().update(key);
        // 0x36 ^ 0x5c = 0x6a
        for(i = 0; i < key.length; i++){
            key[i] ^= 0x6a;
        }
        this.outer = new SHA1().update(key);
    }
    update(msg, enc) {
        this.inner.update(msg, enc);
        return this;
    }
    digest() {
        this.outer.update(this.inner.digest());
        return this.outer.digest();
    }
    digestHex() {
        this.outer.update(this.inner.digest());
        return this.outer.digestHex();
    }
}
class SHA512HMAC {
    h;
    blockSize = 128;
    outSize = 32;
    /**
     * The constructor for the `SHA512HMAC` class.
     *
     * It initializes the `SHA512HMAC` object and sets up the inner and outer padded keys.
     * If the key size is larger than the blockSize, it is digested using SHA-512.
     * If the key size is less than the blockSize, it is padded with zeroes.
     *
     * @constructor
     * @param key - The key to use to create the HMAC. Can be a number array or a string in hexadecimal format.
     *
     * @example
     * const myHMAC = new SHA512HMAC('deadbeef');
     */ constructor(key){
        const k = key instanceof Uint8Array ? key : Uint8Array.from(toArray(key, typeof key === 'string' ? 'hex' : undefined));
        this.h = new HMAC(sha512Fast, k);
    }
    /**
     * Updates the `SHA512HMAC` object with part of the message to be hashed.
     *
     * @method update
     * @param msg - Part of the message to hash. Can be a number array or a string.
     * @param enc - If 'hex', then the input is encoded as hexadecimal. If undefined or not 'hex', then no encoding is performed.
     * @returns Returns the instance of `SHA512HMAC` for chaining calls.
     *
     * @example
     * myHMAC.update('deadbeef', 'hex');
     */ update(msg, enc) {
        const data = msg instanceof Uint8Array ? msg : Uint8Array.from(toArray(msg, enc));
        this.h.update(data);
        return this;
    }
    /**
     * Finalizes the HMAC computation and returns the resultant hash.
     *
     * @method digest
     * @returns Returns the digest of the hashed data as a number array.
     *
     * @example
     * let hashedMessage = myHMAC.digest();
     */ digest() {
        return Array.from(this.h.digest());
    }
    /**
     * Finalizes the HMAC computation and returns the resultant hash as a hex string.
     *
     * @method digest
     * @returns Returns the digest of the hashed data as a hex string
     *
     * @example
     * let hashedMessage = myHMAC.digestHex();
     */ digestHex() {
        return bytesToHex(this.h.digest());
    }
}
const ripemd160 = (msg, enc)=>{
    return new RIPEMD160().update(msg, enc).digest();
};
const sha1 = (msg, enc)=>{
    return new SHA1().update(msg, enc).digest();
};
const sha256 = (msg, enc)=>{
    return new SHA256().update(msg, enc).digest();
};
const sha512 = (msg, enc)=>{
    return new SHA512().update(msg, enc).digest();
};
const hash256 = (msg, enc)=>{
    const first = new SHA256().update(msg, enc).digest();
    return new SHA256().update(first).digest();
};
const hash160 = (msg, enc)=>{
    const first = new SHA256().update(msg, enc).digest();
    return new RIPEMD160().update(first).digest();
};
const sha256hmac = (key, msg, enc)=>{
    return new SHA256HMAC(key).update(msg, enc).digest();
};
const sha512hmac = (key, msg, enc)=>{
    return new SHA512HMAC(key).update(msg, enc).digest();
};
// BEGIN fast-pbkdf2 helpers
// Utils
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) {
        throw new Error(`positive integer expected, got ${n}`);
    }
}
function abytes(b, ...lengths) {
    if (!isBytes(b)) throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length)) {
        const lens = lengths.join(',');
        throw new Error(`Uint8Array expected of length ${lens}, got length=${b.length}`);
    }
}
function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') {
        throw new Error('Hash should be wrapped by utils.createHasher');
    }
    anumber(h.outputLen);
    anumber(h.blockLen);
}
function aexists(instance, checkFinished = true) {
    if (instance.destroyed === true) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished === true) {
        throw new Error('Hash#digest() has already been called');
    }
}
function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
}
function clean(...arrays) {
    for(let i = 0; i < arrays.length; i++)arrays[i].fill(0);
}
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    abytes(data);
    return data;
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('string expected');
    return new Uint8Array(new TextEncoder().encode(str));
}
function kdfInputToBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    abytes(data);
    return data;
}
class Hash {
}
function createHasher(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
// u64 helpers
const U32_MASK64 = BigInt(2 ** 32 - 1);
const _32n = BigInt(32);
function fromBig(n, le = false) {
    if (le) return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
    };
    return {
        h: Number(n >> _32n & U32_MASK64) | 0,
        l: Number(n & U32_MASK64) | 0
    };
}
function split(lst, le = false) {
    const len = lst.length;
    const Ah = new Uint32Array(len);
    const Al = new Uint32Array(len);
    for(let i = 0; i < len; i++){
        const { h, l } = fromBig(lst[i], le);
        Ah[i] = h;
        Al[i] = l;
    }
    return [
        Ah,
        Al
    ];
}
const shrSH = (h, _l, s)=>h >>> s;
const shrSL = (h, l, s)=>h << 32 - s | l >>> s;
const rotrSH = (h, l, s)=>h >>> s | l << 32 - s;
const rotrSL = (h, l, s)=>h << 32 - s | l >>> s;
const rotrBH = (h, l, s)=>h << 64 - s | l >>> s - 32;
const rotrBL = (h, l, s)=>h >>> s - 32 | l << 64 - s;
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return {
        h: Ah + Bh + (l / 2 ** 32 | 0) | 0,
        l: l | 0
    };
}
const add3L = (Al, Bl, Cl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch)=>Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh)=>Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El)=>(Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh)=>Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
// _md helpers
class HashMD extends Hash {
    blockLen;
    outputLen;
    padOffset;
    isLE;
    buffer;
    view;
    finished = false;
    length = 0;
    pos = 0;
    destroyed = false;
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.buffer = new Uint8Array(blockLen);
        this.view = createView(this.buffer);
    }
    update(data) {
        aexists(this);
        data = toBytes(data);
        abytes(data);
        const { view, buffer, blockLen } = this;
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            if (take === blockLen) {
                const dataView = createView(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        aexists(this);
        aoutput(out, this);
        this.finished = true;
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        buffer[pos++] = 0b10000000;
        clean(this.buffer.subarray(pos));
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = createView(out);
        const len = this.outputLen;
        if (len % 4 !== 0) throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to ||= new this.constructor();
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.destroyed = destroyed;
        to.finished = finished;
        to.length = length;
        to.pos = pos;
        if (length % blockLen !== 0) to.buffer.set(buffer);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
}
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// sha256 fast constants
const SHA256_IV = Uint32Array.from([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
const K256 = Uint32Array.from([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
const SHA256_W = new Uint32Array(64);
class FastSHA256 extends HashMD {
    A = SHA256_IV[0] | 0;
    B = SHA256_IV[1] | 0;
    C = SHA256_IV[2] | 0;
    D = SHA256_IV[3] | 0;
    E = SHA256_IV[4] | 0;
    F = SHA256_IV[5] | 0;
    G = SHA256_IV[6] | 0;
    H = SHA256_IV[7] | 0;
    constructor(outputLen = 32){
        super(64, outputLen, 8, false);
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4){
            SHA256_W[i] = view.getUint32(offset);
        }
        for(let i = 16; i < 64; i++){
            const w15 = SHA256_W[i - 15];
            const w2 = SHA256_W[i - 2];
            const s0 = G0_256(w15);
            const s1 = G1_256(w2);
            SHA256_W[i] = sum32(sum32(s0, SHA256_W[i - 7]), sum32(s1, SHA256_W[i - 16]));
        }
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const T1 = SUM32_5(H, S1_256(E), ch32(E, F, G), K256[i], SHA256_W[i]);
            const T2 = sum32(S0_256(A), maj32(A, B, C));
            H = G;
            G = F;
            F = E;
            E = sum32(D, T1);
            D = C;
            C = B;
            B = A;
            A = sum32(T1, T2);
        }
        this.A = sum32(this.A, A);
        this.B = sum32(this.B, B);
        this.C = sum32(this.C, C);
        this.D = sum32(this.D, D);
        this.E = sum32(this.E, E);
        this.F = sum32(this.F, F);
        this.G = sum32(this.G, G);
        this.H = sum32(this.H, H);
    }
    roundClean() {
        clean(SHA256_W);
    }
    destroy() {
        clean(this.buffer);
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
    }
}
const sha256Fast = createHasher(()=>new FastSHA256());
// sha512
const SHA512_IV = Uint32Array.from([
    0x6a09e667,
    0xf3bcc908,
    0xbb67ae85,
    0x84caa73b,
    0x3c6ef372,
    0xfe94f82b,
    0xa54ff53a,
    0x5f1d36f1,
    0x510e527f,
    0xade682d1,
    0x9b05688c,
    0x2b3e6c1f,
    0x1f83d9ab,
    0xfb41bd6b,
    0x5be0cd19,
    0x137e2179
]);
const K512 = (()=>split([
        '0x428a2f98d728ae22',
        '0x7137449123ef65cd',
        '0xb5c0fbcfec4d3b2f',
        '0xe9b5dba58189dbbc',
        '0x3956c25bf348b538',
        '0x59f111f1b605d019',
        '0x923f82a4af194f9b',
        '0xab1c5ed5da6d8118',
        '0xd807aa98a3030242',
        '0x12835b0145706fbe',
        '0x243185be4ee4b28c',
        '0x550c7dc3d5ffb4e2',
        '0x72be5d74f27b896f',
        '0x80deb1fe3b1696b1',
        '0x9bdc06a725c71235',
        '0xc19bf174cf692694',
        '0xe49b69c19ef14ad2',
        '0xefbe4786384f25e3',
        '0x0fc19dc68b8cd5b5',
        '0x240ca1cc77ac9c65',
        '0x2de92c6f592b0275',
        '0x4a7484aa6ea6e483',
        '0x5cb0a9dcbd41fbd4',
        '0x76f988da831153b5',
        '0x983e5152ee66dfab',
        '0xa831c66d2db43210',
        '0xb00327c898fb213f',
        '0xbf597fc7beef0ee4',
        '0xc6e00bf33da88fc2',
        '0xd5a79147930aa725',
        '0x06ca6351e003826f',
        '0x142929670a0e6e70',
        '0x27b70a8546d22ffc',
        '0x2e1b21385c26c926',
        '0x4d2c6dfc5ac42aed',
        '0x53380d139d95b3df',
        '0x650a73548baf63de',
        '0x766a0abb3c77b2a8',
        '0x81c2c92e47edaee6',
        '0x92722c851482353b',
        '0xa2bfe8a14cf10364',
        '0xa81a664bbc423001',
        '0xc24b8b70d0f89791',
        '0xc76c51a30654be30',
        '0xd192e819d6ef5218',
        '0xd69906245565a910',
        '0xf40e35855771202a',
        '0x106aa07032bbd1b8',
        '0x19a4c116b8d2d0c8',
        '0x1e376c085141ab53',
        '0x2748774cdf8eeb99',
        '0x34b0bcb5e19b48a8',
        '0x391c0cb3c5c95a63',
        '0x4ed8aa4ae3418acb',
        '0x5b9cca4f7763e373',
        '0x682e6ff3d6b2b8a3',
        '0x748f82ee5defb2fc',
        '0x78a5636f43172f60',
        '0x84c87814a1f0ab72',
        '0x8cc702081a6439ec',
        '0x90befffa23631e28',
        '0xa4506cebde82bde9',
        '0xbef9a3f7b2c67915',
        '0xc67178f2e372532b',
        '0xca273eceea26619c',
        '0xd186b8c721c0c207',
        '0xeada7dd6cde0eb1e',
        '0xf57d4f7fee6ed178',
        '0x06f067aa72176fba',
        '0x0a637dc5a2c898a6',
        '0x113f9804bef90dae',
        '0x1b710b35131c471b',
        '0x28db77f523047d84',
        '0x32caab7b40c72493',
        '0x3c9ebe0a15c9bebc',
        '0x431d67c49c100d4c',
        '0x4cc5d4becb3e42b6',
        '0x597f299cfc657e2a',
        '0x5fcb6fab3ad6faec',
        '0x6c44198c4a475817'
    ].map((n)=>BigInt(n))))();
const SHA512_Kh = (()=>K512[0])();
const SHA512_Kl = (()=>K512[1])();
const SHA512_W_H = new Uint32Array(80);
const SHA512_W_L = new Uint32Array(80);
class FastSHA512 extends HashMD {
    Ah = SHA512_IV[0] | 0;
    Al = SHA512_IV[1] | 0;
    Bh = SHA512_IV[2] | 0;
    Bl = SHA512_IV[3] | 0;
    Ch = SHA512_IV[4] | 0;
    Cl = SHA512_IV[5] | 0;
    Dh = SHA512_IV[6] | 0;
    Dl = SHA512_IV[7] | 0;
    Eh = SHA512_IV[8] | 0;
    El = SHA512_IV[9] | 0;
    Fh = SHA512_IV[10] | 0;
    Fl = SHA512_IV[11] | 0;
    Gh = SHA512_IV[12] | 0;
    Gl = SHA512_IV[13] | 0;
    Hh = SHA512_IV[14] | 0;
    Hl = SHA512_IV[15] | 0;
    constructor(outputLen = 64){
        super(128, outputLen, 16, false);
    }
    get() {
        const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        return [
            Ah,
            Al,
            Bh,
            Bl,
            Ch,
            Cl,
            Dh,
            Dl,
            Eh,
            El,
            Fh,
            Fl,
            Gh,
            Gl,
            Hh,
            Hl
        ];
    }
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
        this.Ah = Ah | 0;
        this.Al = Al | 0;
        this.Bh = Bh | 0;
        this.Bl = Bl | 0;
        this.Ch = Ch | 0;
        this.Cl = Cl | 0;
        this.Dh = Dh | 0;
        this.Dl = Dl | 0;
        this.Eh = Eh | 0;
        this.El = El | 0;
        this.Fh = Fh | 0;
        this.Fl = Fl | 0;
        this.Gh = Gh | 0;
        this.Gl = Gl | 0;
        this.Hh = Hh | 0;
        this.Hl = Hl | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4){
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32(offset += 4);
        }
        for(let i = 16; i < 80; i++){
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = rotrSH(W15h, W15l, 1) ^ rotrSH(W15h, W15l, 8) ^ shrSH(W15h, W15l, 7);
            const s0l = rotrSL(W15h, W15l, 1) ^ rotrSL(W15h, W15l, 8) ^ shrSL(W15h, W15l, 7);
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = rotrSH(W2h, W2l, 19) ^ rotrBH(W2h, W2l, 61) ^ shrSH(W2h, W2l, 6);
            const s1l = rotrSL(W2h, W2l, 19) ^ rotrBL(W2h, W2l, 61) ^ shrSL(W2h, W2l, 6);
            const SUMl = add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        for(let i = 0; i < 80; i++){
            const sigma1h = rotrSH(Eh, El, 14) ^ rotrSH(Eh, El, 18) ^ rotrBH(Eh, El, 41);
            const sigma1l = rotrSL(Eh, El, 14) ^ rotrSL(Eh, El, 18) ^ rotrBL(Eh, El, 41);
            const CHIh = Eh & Fh ^ ~Eh & Gh;
            const CHIl = El & Fl ^ ~El & Gl;
            const T1ll = add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            const sigma0h = rotrSH(Ah, Al, 28) ^ rotrBH(Ah, Al, 34) ^ rotrBH(Ah, Al, 39);
            const sigma0l = rotrSL(Ah, Al, 28) ^ rotrBL(Ah, Al, 34) ^ rotrBL(Ah, Al, 39);
            const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
            const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
            Hh = Gh | 0;
            Hl = Gl | 0;
            Gh = Fh | 0;
            Gl = Fl | 0;
            Fh = Eh | 0;
            Fl = El | 0;
            ({ h: Eh, l: El } = add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
            Dh = Ch | 0;
            Dl = Cl | 0;
            Ch = Bh | 0;
            Cl = Bl | 0;
            Bh = Ah | 0;
            Bl = Al | 0;
            const T2l = add3L(sigma0l, MAJl, T1l);
            Ah = add3H(T2l, sigma0h, MAJh, T1h);
            Al = T2l | 0;
        }
        ;
        ({ h: Ah, l: Al } = add(Ah, Al, this.Ah, this.Al));
        ({ h: Bh, l: Bl } = add(Bh, Bl, this.Bh, this.Bl));
        ({ h: Ch, l: Cl } = add(Ch, Cl, this.Ch, this.Cl));
        ({ h: Dh, l: Dl } = add(Dh, Dl, this.Dh, this.Dl));
        ({ h: Eh, l: El } = add(Eh, El, this.Eh, this.El));
        ({ h: Fh, l: Fl } = add(Fh, Fl, this.Fh, this.Fl));
        ({ h: Gh, l: Gl } = add(Gh, Gl, this.Gh, this.Gl));
        ({ h: Hh, l: Hl } = add(Hh, Hl, this.Hh, this.Hl));
        this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
        clean(SHA512_W_H, SHA512_W_L);
    }
    destroy() {
        clean(this.buffer);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
const sha512Fast = createHasher(()=>new FastSHA512());
class HMAC extends Hash {
    oHash;
    iHash;
    blockLen;
    outputLen;
    finished = false;
    destroyed = false;
    constructor(hash, _key){
        super();
        ahash(hash);
        const key = toBytes(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function') {
            throw new Error('Expected instance of class which extends utils.Hash');
        }
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        this.oHash = hash.create();
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36 ^ 0x5c;
        this.oHash.update(pad);
        clean(pad);
    }
    update(buf) {
        aexists(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        aexists(this);
        abytes(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        to ||= Object.create(Object.getPrototypeOf(this), {});
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to = to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash ?? undefined);
        to.iHash = iHash._cloneInto(to.iHash ?? undefined);
        return to;
    }
    clone() {
        return this._cloneInto();
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
function pbkdf2Core(hash, password, salt, opts) {
    ahash(hash);
    const { c, dkLen } = Object.assign({
        dkLen: 32
    }, opts);
    anumber(c);
    anumber(dkLen);
    if (c < 1) throw new Error('iterations (c) should be >= 1');
    const pwd = kdfInputToBytes(password);
    const slt = kdfInputToBytes(salt);
    const DK = new Uint8Array(dkLen);
    const PRF = hmac.create(hash, pwd);
    const PRFSalt = PRF._cloneInto().update(slt);
    let prfW;
    const arr = new Uint8Array(4);
    const view = createView(arr);
    const u = new Uint8Array(PRF.outputLen);
    for(let ti = 1, pos = 0; pos < dkLen; ti++, pos += PRF.outputLen){
        const Ti = DK.subarray(pos, pos + PRF.outputLen);
        view.setInt32(0, ti, false);
        (prfW = PRFSalt._cloneInto(prfW)).update(arr).digestInto(u);
        Ti.set(u.subarray(0, Ti.length));
        for(let ui = 1; ui < c; ui++){
            PRF._cloneInto(prfW).update(u).digestInto(u);
            for(let i = 0; i < Ti.length; i++)Ti[i] ^= u[i];
        }
    }
    PRF.destroy();
    PRFSalt.destroy();
    if (prfW != null) prfW.destroy();
    clean(u);
    return DK;
}
const hmac = (hash, key, message)=>new HMAC(hash, key).update(message).digest();
hmac.create = (hash, key)=>new HMAC(hash, key);
function pbkdf2Fast(password, salt, iterations, keylen) {
    return pbkdf2Core(sha512Fast, password, salt, {
        c: iterations,
        dkLen: keylen
    });
}
function pbkdf2(password, salt, iterations, keylen, digest = 'sha512') {
    if (digest !== 'sha512') {
        throw new Error('Only sha512 is supported in this PBKDF2 implementation');
    }
    // Attempt to use the native Node.js implementation if available as it is
    // considerably faster than the pure TypeScript fallback below. If the crypto
    // module isn't present (for example in a browser build) we'll silently fall
    // back to the original implementation.
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const nodeCrypto = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)");
        if (typeof nodeCrypto.pbkdf2Sync === 'function') {
            const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(password);
            const s = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(salt);
            return [
                ...nodeCrypto.pbkdf2Sync(p, s, iterations, keylen, digest)
            ];
        }
    } catch  {
    // ignore
    }
    const p = Uint8Array.from(password);
    const s = Uint8Array.from(salt);
    const out = pbkdf2Fast(p, s, iterations, keylen);
    return Array.from(out);
}
function swapBytes32(w) {
    const res = w >>> 24 | w >>> 8 & 0xff00 | w << 8 & 0xff0000 | (w & 0xff) << 24;
    return res >>> 0;
}
// Detect the host machine's endianness at runtime.
//
// This is used by `realHtonl()` to determine whether the value must be
// byte-swapped or returned unchanged. JavaScript engines on common platforms
// are almost always little-endian, but this check is included for correctness.
const isLittleEndian = (()=>{
    const b = new ArrayBuffer(4);
    const a = new Uint32Array(b);
    const c = new Uint8Array(b);
    a[0] = 0x01020304;
    return c[0] === 0x04;
})();
function realHtonl(w) {
    return isLittleEndian ? swapBytes32(w) : w >>> 0;
} //# sourceMappingURL=Hash.js.map
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "SUM32_3");
__turbopack_context__.k.register(_c1, "SUM32_4");
__turbopack_context__.k.register(_c2, "SUM32_5");
__turbopack_context__.k.register(_c3, "FT_1");
__turbopack_context__.k.register(_c4, "S0_256");
__turbopack_context__.k.register(_c5, "S1_256");
__turbopack_context__.k.register(_c6, "G0_256");
__turbopack_context__.k.register(_c7, "G1_256");
__turbopack_context__.k.register(_c8, "K");
__turbopack_context__.k.register(_c9, "Kh");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reader",
    ()=>Reader,
    "Writer",
    ()=>Writer,
    "base64ToArray",
    ()=>base64ToArray,
    "constantTimeEquals",
    ()=>constantTimeEquals,
    "encode",
    ()=>encode,
    "fromBase58",
    ()=>fromBase58,
    "fromBase58Check",
    ()=>fromBase58Check,
    "minimallyEncode",
    ()=>minimallyEncode,
    "toArray",
    ()=>toArray,
    "toBase58",
    ()=>toBase58,
    "toBase58Check",
    ()=>toBase58Check,
    "toBase64",
    ()=>toBase64,
    "toHex",
    ()=>toHex,
    "toUTF8",
    ()=>toUTF8,
    "verifyNotNull",
    ()=>verifyNotNull,
    "zero2",
    ()=>zero2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/hex.js [app-client] (ecmascript)");
;
;
;
const BufferCtor = typeof globalThis !== 'undefined' ? globalThis.Buffer : undefined;
const CAN_USE_BUFFER = BufferCtor != null && typeof BufferCtor.from === 'function';
const zero2 = (word)=>{
    if (word.length % 2 === 1) {
        return '0' + word;
    } else {
        return word;
    }
};
/**
 * Converts an array of numbers to a hexadecimal string representation.
 * @param {number[]} msg - The input array of numbers.
 * @returns {string} - The hexadecimal string representation of the input array.
 */ const HEX_DIGITS = '0123456789abcdef';
const HEX_BYTE_STRINGS = new Array(256);
for(let i = 0; i < 256; i++){
    HEX_BYTE_STRINGS[i] = HEX_DIGITS[i >> 4 & 0xf] + HEX_DIGITS[i & 0xf];
}
const toHex = (msg)=>{
    if (CAN_USE_BUFFER) {
        return BufferCtor.from(msg).toString('hex');
    }
    if (msg.length === 0) return '';
    const out = new Array(msg.length);
    for(let i = 0; i < msg.length; i++){
        out[i] = HEX_BYTE_STRINGS[msg[i] & 0xff];
    }
    return out.join('');
};
const toArray = (msg, enc)=>{
    if (Array.isArray(msg)) return msg.slice();
    if (msg === undefined) return [];
    if (typeof msg !== 'string') {
        return Array.from(msg, (item)=>item | 0);
    }
    switch(enc){
        case 'hex':
            return hexToArray(msg);
        case 'base64':
            return base64ToArray(msg);
        default:
            return utf8ToArray(msg);
    }
};
const HEX_CHAR_TO_VALUE = new Int8Array(256).fill(-1);
for(let i = 0; i < 10; i++){
    HEX_CHAR_TO_VALUE[48 + i] = i; // '0'-'9'
}
for(let i = 0; i < 6; i++){
    HEX_CHAR_TO_VALUE[65 + i] = 10 + i; // 'A'-'F'
    HEX_CHAR_TO_VALUE[97 + i] = 10 + i; // 'a'-'f'
}
const hexToArray = (msg)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$hex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertValidHex"])(msg);
    const normalized = msg.length % 2 === 0 ? msg : '0' + msg;
    if (CAN_USE_BUFFER) {
        return Array.from(BufferCtor.from(normalized, 'hex'));
    }
    const out = new Array(normalized.length / 2);
    let o = 0;
    for(let i = 0; i < normalized.length; i += 2){
        const hi = HEX_CHAR_TO_VALUE[normalized.charCodeAt(i)];
        const lo = HEX_CHAR_TO_VALUE[normalized.charCodeAt(i + 1)];
        out[o++] = hi << 4 | lo;
    }
    return out;
};
function base64ToArray(msg) {
    if (typeof msg !== 'string') {
        throw new TypeError('msg must be a string');
    }
    // cleanse string
    let s = msg.trim().replace(/[\r\n\t\f\v ]+/g, '');
    s = s.replace(/-/g, '+').replace(/_/g, '/');
    // ensure padding is correct
    const padIndex = s.indexOf('=');
    if (padIndex !== -1) {
        const pad = s.slice(padIndex);
        if (!/^={1,2}$/.test(pad)) {
            throw new Error('Invalid base64 padding');
        }
        if (s.slice(0, padIndex).includes('=')) {
            throw new Error('Invalid base64 padding');
        }
        s = s.slice(0, padIndex);
    }
    // if (s.length % 4 === 1)
    // {
    //   throw new Error("Invalid base64 length")
    // }
    const result = [];
    let bitBuffer = 0;
    let bitCount = 0;
    for(let i = 0; i < s.length; i++){
        const c = s.charCodeAt(i);
        // using ascii map values rather than indexOf
        let v = -1;
        if (c >= 65 && c <= 90) {
            v = c - 65; // A-Z
        } else if (c >= 97 && c <= 122) {
            v = c - 97 + 26; // a-z
        } else if (c >= 48 && c <= 57) {
            v = c - 48 + 52; // 0-9
        } else if (c === 43) {
            v = 62; // +
        } else if (c === 47) {
            v = 63; // /
        } else {
            throw new Error(`Invalid base64 character at index ${i}`);
        }
        bitBuffer = bitBuffer << 6 | v;
        bitCount += 6;
        while(bitCount >= 8){
            bitCount -= 8;
            result.push(bitBuffer >> bitCount & 0xff);
            bitBuffer &= (1 << bitCount) - 1;
        }
    }
    // check for valid padding bits
    // if (bitCount !== 0 && bitBuffer !== 0) {
    //   throw new Error("Invalid base64: non-zero padding bits")
    // }
    return result;
}
/**
 * Encodes a string into an array of bytes representing its UTF-8 encoding.
 * Any lone surrogates are replaced with the Unicode replacement character (U+FFFD).
 *
 * @param str - The string to encode.
 * @returns An array of numbers, each representing a byte in the UTF-8 encoded string.
 */ function utf8ToArray(str) {
    const result = [];
    for(let i = 0; i < str.length; i++){
        const cp = str.codePointAt(i);
        if (cp === undefined) {
            // Should never be out of range.
            throw new Error(`Index out of range: ${i}`);
        }
        let codePoint = cp;
        if (codePoint > 0xFFFF) {
            // Valid surrogate pair => skip the next code unit because codePointAt
            // has already combined them into a single code point.
            i++;
        } else {
            // Check if codePoint is a lone (unpaired) high surrogate or low surrogate.
            if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
                // Replace with the replacement character (U+FFFD).
                codePoint = 0xFFFD;
            }
        }
        // Encode according to the UTF-8 standard
        if (codePoint <= 0x7F) {
            result.push(codePoint);
        } else if (codePoint <= 0x7FF) {
            result.push(0xC0 | codePoint >> 6, 0x80 | codePoint & 0x3F);
        } else if (codePoint <= 0xFFFF) {
            result.push(0xE0 | codePoint >> 12, 0x80 | codePoint >> 6 & 0x3F, 0x80 | codePoint & 0x3F);
        } else {
            result.push(0xF0 | codePoint >> 18, 0x80 | codePoint >> 12 & 0x3F, 0x80 | codePoint >> 6 & 0x3F, 0x80 | codePoint & 0x3F);
        }
    }
    return result;
}
const toUTF8 = (arr)=>{
    let result = '';
    const replacementChar = '\uFFFD';
    for(let i = 0; i < arr.length; i++){
        const byte1 = arr[i];
        if (byte1 <= 0x7f) {
            result += String.fromCharCode(byte1);
            continue;
        }
        const emitReplacement = ()=>{
            result += replacementChar;
        };
        if (byte1 >= 0xc0 && byte1 <= 0xdf) {
            if (i + 1 >= arr.length) {
                emitReplacement();
                continue;
            }
            const byte2 = arr[i + 1];
            if ((byte2 & 0xc0) !== 0x80) {
                emitReplacement();
                i += 1;
                continue;
            }
            const codePoint = (byte1 & 0x1f) << 6 | byte2 & 0x3f;
            result += String.fromCharCode(codePoint);
            i += 1;
            continue;
        }
        if (byte1 >= 0xe0 && byte1 <= 0xef) {
            if (i + 2 >= arr.length) {
                emitReplacement();
                continue;
            }
            const byte2 = arr[i + 1];
            const byte3 = arr[i + 2];
            if ((byte2 & 0xc0) !== 0x80 || (byte3 & 0xc0) !== 0x80) {
                emitReplacement();
                i += 2;
                continue;
            }
            const codePoint = (byte1 & 0x0f) << 12 | (byte2 & 0x3f) << 6 | byte3 & 0x3f;
            result += String.fromCharCode(codePoint);
            i += 2;
            continue;
        }
        if (byte1 >= 0xf0 && byte1 <= 0xf7) {
            if (i + 3 >= arr.length) {
                emitReplacement();
                continue;
            }
            const byte2 = arr[i + 1];
            const byte3 = arr[i + 2];
            const byte4 = arr[i + 3];
            if ((byte2 & 0xc0) !== 0x80 || (byte3 & 0xc0) !== 0x80 || (byte4 & 0xc0) !== 0x80) {
                emitReplacement();
                i += 3;
                continue;
            }
            const codePoint = (byte1 & 0x07) << 18 | (byte2 & 0x3f) << 12 | (byte3 & 0x3f) << 6 | byte4 & 0x3f;
            const offset = codePoint - 0x10000;
            const highSurrogate = 0xd800 + (offset >> 10);
            const lowSurrogate = 0xdc00 + (offset & 0x3ff);
            result += String.fromCharCode(highSurrogate, lowSurrogate);
            i += 3;
            continue;
        }
        emitReplacement();
    }
    return result;
};
const encode = (arr, enc)=>{
    switch(enc){
        case 'hex':
            return toHex(arr);
        case 'utf8':
            return toUTF8(arr);
        // If no encoding is provided, return the original array
        default:
            return arr;
    }
};
function toBase64(byteArray) {
    const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let result = '';
    let i;
    for(i = 0; i < byteArray.length; i += 3){
        const byte1 = byteArray[i];
        const byte2 = i + 1 < byteArray.length ? byteArray[i + 1] : 0;
        const byte3 = i + 2 < byteArray.length ? byteArray[i + 2] : 0;
        const encoded1 = byte1 >> 2;
        const encoded2 = (byte1 & 0x03) << 4 | byte2 >> 4;
        const encoded3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
        const encoded4 = byte3 & 0x3f;
        result += base64Chars.charAt(encoded1) + base64Chars.charAt(encoded2);
        result += i + 1 < byteArray.length ? base64Chars.charAt(encoded3) : '=';
        result += i + 2 < byteArray.length ? base64Chars.charAt(encoded4) : '=';
    }
    return result;
}
const base58chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const fromBase58 = (str)=>{
    if (str === '' || typeof str !== 'string') {
        throw new Error(`Expected base58 string but got “${str}”`);
    }
    const match = str.match(/[IOl0]/gmu);
    if (match !== null) {
        throw new Error(`Invalid base58 character “${match.join('')}”`);
    }
    const lz = str.match(/^1+/gmu);
    const psz = lz !== null ? lz[0].length : 0;
    const size = (str.length - psz) * (Math.log(58) / Math.log(256)) + 1 >>> 0;
    const uint8 = new Uint8Array([
        ...new Uint8Array(psz),
        ...(str.match(/./gmu) ?? [] // ✅ Safe Fix: If null, use []
        ).map((i)=>base58chars.indexOf(i)).reduce((acc, i)=>{
            acc = acc.map((j)=>{
                const x = j * 58 + i;
                i = x >> 8;
                return x;
            });
            return acc;
        }, new Uint8Array(size)).reverse().filter(((lastValue)=>(value)=>lastValue = lastValue || value)(false))
    ]);
    return [
        ...uint8
    ];
};
const toBase58 = (bin)=>{
    const base58Map = Array(256).fill(-1);
    for(let i = 0; i < base58chars.length; ++i){
        base58Map[base58chars.charCodeAt(i)] = i;
    }
    const result = [];
    for (const byte of bin){
        let carry = byte;
        for(let j = 0; j < result.length; ++j){
            const x = (base58Map[result[j]] << 8) + carry;
            result[j] = base58chars.charCodeAt(x % 58);
            carry = x / 58 | 0;
        }
        while(carry !== 0){
            result.push(base58chars.charCodeAt(carry % 58));
            carry = carry / 58 | 0;
        }
    }
    for (const byte of bin){
        if (byte !== 0) break;
        else result.push('1'.charCodeAt(0));
    }
    result.reverse();
    return String.fromCharCode(...result);
};
const toBase58Check = (bin, prefix = [
    0
])=>{
    let hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash256"])([
        ...prefix,
        ...bin
    ]);
    hash = [
        ...prefix,
        ...bin,
        ...hash.slice(0, 4)
    ];
    return toBase58(hash);
};
const fromBase58Check = (str, enc, prefixLength = 1)=>{
    const bin = fromBase58(str);
    let prefix = bin.slice(0, prefixLength);
    let data = bin.slice(prefixLength, -4);
    let hash = [
        ...prefix,
        ...data
    ];
    hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash256"])(hash);
    bin.slice(-4).forEach((check, index)=>{
        if (check !== hash[index]) {
            throw new Error('Invalid checksum');
        }
    });
    if (enc === 'hex') {
        prefix = toHex(prefix);
        data = toHex(data);
    }
    return {
        prefix,
        data
    };
};
class Writer {
    bufs;
    length;
    constructor(bufs){
        this.bufs = bufs !== undefined ? bufs : [];
        this.length = 0;
        for (const b of this.bufs)this.length += b.length;
    }
    getLength() {
        return this.length;
    }
    toUint8Array() {
        const out = new Uint8Array(this.length);
        let offset = 0;
        for (const buf of this.bufs){
            out.set(buf, offset);
            offset += buf.length;
        }
        return out;
    }
    toArray() {
        const totalLength = this.length;
        const ret = new Array(totalLength);
        let offset = 0;
        for (const buf of this.bufs){
            if (buf instanceof Uint8Array) {
                for(let i = 0; i < buf.length; i++){
                    ret[offset++] = buf[i];
                }
            } else {
                const arr = buf;
                for(let i = 0; i < arr.length; i++){
                    ret[offset++] = arr[i];
                }
            }
        }
        return ret;
    }
    write(buf) {
        this.bufs.push(buf);
        this.length += buf.length;
        return this;
    }
    writeReverse(buf) {
        const buf2 = new Array(buf.length);
        for(let i = 0; i < buf2.length; i++){
            buf2[i] = buf[buf.length - 1 - i];
        }
        return this.write(buf2);
    }
    writeUInt8(n) {
        const buf = new Array(1);
        buf[0] = n & 0xff;
        this.write(buf);
        return this;
    }
    writeInt8(n) {
        const buf = new Array(1);
        buf[0] = n & 0xff;
        this.write(buf);
        return this;
    }
    writeUInt16BE(n) {
        const buf = [
            n >> 8 & 0xff,
            n & 0xff // low byte is just the last 8 bits
        ];
        return this.write(buf);
    }
    writeInt16BE(n) {
        return this.writeUInt16BE(n & 0xffff); // Mask with 0xFFFF to get the lower 16 bits
    }
    writeUInt16LE(n) {
        const buf = [
            n & 0xff,
            n >> 8 & 0xff // shift right 8 bits to get the high byte
        ];
        return this.write(buf);
    }
    writeInt16LE(n) {
        return this.writeUInt16LE(n & 0xffff); // Mask with 0xFFFF to get the lower 16 bits
    }
    writeUInt32BE(n) {
        const buf = [
            n >> 24 & 0xff,
            n >> 16 & 0xff,
            n >> 8 & 0xff,
            n & 0xff // lowest byte
        ];
        return this.write(buf);
    }
    writeInt32BE(n) {
        return this.writeUInt32BE(n >>> 0); // Using unsigned right shift to handle negative numbers
    }
    writeUInt32LE(n) {
        const buf = [
            n & 0xff,
            n >> 8 & 0xff,
            n >> 16 & 0xff,
            n >> 24 & 0xff // highest byte
        ];
        return this.write(buf);
    }
    writeInt32LE(n) {
        return this.writeUInt32LE(n >>> 0); // Using unsigned right shift to handle negative numbers
    }
    writeUInt64BEBn(bn) {
        const buf = bn.toArray('be', 8);
        this.write(buf);
        return this;
    }
    writeUInt64LEBn(bn) {
        const buf = bn.toArray('be', 8);
        this.writeReverse(buf);
        return this;
    }
    writeUInt64LE(n) {
        const buf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](n).toArray('be', 8);
        this.writeReverse(buf);
        return this;
    }
    writeVarIntNum(n) {
        const buf = Writer.varIntNum(n);
        this.write(buf);
        return this;
    }
    writeVarIntBn(bn) {
        const buf = Writer.varIntBn(bn);
        this.write(buf);
        return this;
    }
    static varIntNum(n) {
        let buf;
        if (n < 0) {
            return this.varIntBn(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](n));
        }
        if (n < 253) {
            buf = [
                n
            ]; // 1 byte
        } else if (n < 0x10000) {
            // 253 followed by the number in little-endian format
            buf = [
                253,
                n & 0xff,
                n >> 8 & 0xff // high byte
            ];
        } else if (n < 0x100000000) {
            // 254 followed by the number in little-endian format
            buf = [
                254,
                n & 0xff,
                n >> 8 & 0xff,
                n >> 16 & 0xff,
                n >> 24 & 0xff
            ];
        } else {
            // 255 followed by the number in little-endian format
            // Since JavaScript bitwise operations work on 32 bits, we need to handle 64-bit numbers in two parts
            const low = n & 0xffffffff;
            const high = Math.floor(n / 0x100000000) & 0xffffffff;
            buf = [
                255,
                low & 0xff,
                low >> 8 & 0xff,
                low >> 16 & 0xff,
                low >> 24 & 0xff,
                high & 0xff,
                high >> 8 & 0xff,
                high >> 16 & 0xff,
                high >> 24 & 0xff
            ];
        }
        return buf;
    }
    static varIntBn(bn) {
        let buf;
        if (bn.isNeg()) {
            bn = bn.add(OverflowUint64); // Adjust for negative numbers
        }
        if (bn.ltn(253)) {
            const n = bn.toNumber();
            // No need for bitwise operation as the value is within a byte's range
            buf = [
                n
            ];
        } else if (bn.ltn(0x10000)) {
            const n = bn.toNumber();
            // Value fits in a uint16
            buf = [
                253,
                n & 0xff,
                n >> 8 & 0xff
            ];
        } else if (bn.lt(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0x100000000))) {
            const n = bn.toNumber();
            // Value fits in a uint32
            buf = [
                254,
                n & 0xff,
                n >> 8 & 0xff,
                n >> 16 & 0xff,
                n >> 24 & 0xff
            ];
        } else {
            const bw = new Writer();
            bw.writeUInt8(255);
            bw.writeUInt64LEBn(bn);
            buf = bw.toArray();
        }
        return buf;
    }
}
class Reader {
    bin;
    pos;
    length;
    constructor(bin = [], pos = 0){
        this.bin = bin;
        this.pos = pos;
        this.length = bin.length;
    }
    eof() {
        return this.pos >= this.length;
    }
    read(len = this.length) {
        const start = this.pos;
        const end = this.pos + len;
        this.pos = end;
        return this.bin.slice(start, end);
    }
    readReverse(len = this.length) {
        const buf2 = new Array(len);
        for(let i = 0; i < len; i++){
            buf2[i] = this.bin[this.pos + len - 1 - i];
        }
        this.pos += len;
        return buf2;
    }
    readUInt8() {
        const val = this.bin[this.pos];
        this.pos += 1;
        return val;
    }
    readInt8() {
        const val = this.bin[this.pos];
        this.pos += 1;
        // If the sign bit is set, convert to negative value
        return (val & 0x80) !== 0 ? val - 0x100 : val;
    }
    readUInt16BE() {
        const val = this.bin[this.pos] << 8 | this.bin[this.pos + 1];
        this.pos += 2;
        return val;
    }
    readInt16BE() {
        const val = this.readUInt16BE();
        // If the sign bit is set, convert to negative value
        return (val & 0x8000) !== 0 ? val - 0x10000 : val;
    }
    readUInt16LE() {
        const val = this.bin[this.pos] | this.bin[this.pos + 1] << 8;
        this.pos += 2;
        return val;
    }
    readInt16LE() {
        const val = this.readUInt16LE();
        // If the sign bit is set, convert to negative value
        const x = (val & 0x8000) !== 0 ? val - 0x10000 : val;
        return x;
    }
    readUInt32BE() {
        const val = this.bin[this.pos] * 0x1000000 + // Shift the first byte by 24 bits
        (this.bin[this.pos + 1] << 16 | this.bin[this.pos + 2] << 8 | // Shift the third byte by 8 bits
        this.bin[this.pos + 3]); // The fourth byte
        this.pos += 4;
        return val;
    }
    readInt32BE() {
        const val = this.readUInt32BE();
        // If the sign bit is set, convert to negative value
        return (val & 0x80000000) !== 0 ? val - 0x100000000 : val;
    }
    readUInt32LE() {
        const val = (this.bin[this.pos] | this.bin[this.pos + 1] << 8 | this.bin[this.pos + 2] << 16 | this.bin[this.pos + 3] << 24) >>> 0;
        this.pos += 4;
        return val;
    }
    readInt32LE() {
        const val = this.readUInt32LE();
        // Explicitly check if the sign bit is set and then convert to a negative value
        return (val & 0x80000000) !== 0 ? val - 0x100000000 : val;
    }
    readUInt64BEBn() {
        const bin = this.bin.slice(this.pos, this.pos + 8);
        const bn = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bin);
        this.pos = this.pos + 8;
        return bn;
    }
    readUInt64LEBn() {
        const bin = this.readReverse(8);
        const bn = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bin);
        return bn;
    }
    readInt64LEBn() {
        const bin = this.readReverse(8);
        let bn = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bin);
        if (bn.gte(OverflowInt64)) {
            bn = bn.sub(OverflowUint64); // Adjust for negative numbers
        }
        return bn;
    }
    readVarIntNum(signed = true) {
        const first = this.readUInt8();
        let bn;
        switch(first){
            case 0xfd:
                return this.readUInt16LE();
            case 0xfe:
                return this.readUInt32LE();
            case 0xff:
                bn = signed ? this.readInt64LEBn() : this.readUInt64LEBn();
                if (bn.lte(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](2).pow(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](53)))) {
                    return bn.toNumber();
                } else {
                    throw new Error('number too large to retain precision - use readVarIntBn');
                }
            default:
                return first;
        }
    }
    readVarInt() {
        const first = this.bin[this.pos];
        switch(first){
            case 0xfd:
                return this.read(1 + 2);
            case 0xfe:
                return this.read(1 + 4);
            case 0xff:
                return this.read(1 + 8);
            default:
                return this.read(1);
        }
    }
    readVarIntBn() {
        const first = this.readUInt8();
        switch(first){
            case 0xfd:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this.readUInt16LE());
            case 0xfe:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this.readUInt32LE());
            case 0xff:
                return this.readUInt64LEBn();
            default:
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](first);
        }
    }
}
const minimallyEncode = (buf)=>{
    if (buf.length === 0) {
        return buf;
    }
    // If the last byte is not 0x00 or 0x80, we are minimally encoded.
    const last = buf[buf.length - 1];
    if ((last & 0x7f) !== 0) {
        return buf;
    }
    // If the script is one byte long, then we have a zero, which encodes as an
    // empty array.
    if (buf.length === 1) {
        return [];
    }
    // If the next byte has it sign bit set, then we are minimaly encoded.
    if ((buf[buf.length - 2] & 0x80) !== 0) {
        return buf;
    }
    // We are not minimally encoded, we need to figure out how much to trim.
    for(let i = buf.length - 1; i > 0; i--){
        // We found a non zero byte, time to encode.
        if (buf[i - 1] !== 0) {
            if ((buf[i - 1] & 0x80) !== 0) {
                // We found a byte with it sign bit set so we need one more
                // byte.
                buf[i] = last;
                return buf.slice(0, i + 1);
            } else {
                // the sign bit is clear, we can use it.
                buf[i - 1] |= last;
                return buf.slice(0, i);
            }
        }
    }
    // If we found the whole thing is zeros, then we have a zero.
    return [];
};
const OverflowInt64 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](2).pow(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](63));
const OverflowUint64 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](2).pow(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](64));
function verifyNotNull(value, errorMessage = 'Expected a valid value, but got undefined or null.') {
    if (value == null) throw new Error(errorMessage);
    return value;
}
function constantTimeEquals(a, b) {
    if (a.length !== b.length) return false;
    let diff = 0;
    for(let i = 0; i < a.length; i++){
        diff |= a[i] ^ b[i];
    }
    return diff === 0;
} //# sourceMappingURL=utils.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Point.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BI_EIGHT",
    ()=>BI_EIGHT,
    "BI_FOUR",
    ()=>BI_FOUR,
    "BI_ONE",
    ()=>BI_ONE,
    "BI_THREE",
    ()=>BI_THREE,
    "BI_TWO",
    ()=>BI_TWO,
    "BI_ZERO",
    ()=>BI_ZERO,
    "GX_BIGINT",
    ()=>GX_BIGINT,
    "GY_BIGINT",
    ()=>GY_BIGINT,
    "MASK_256",
    ()=>MASK_256,
    "N_BIGINT",
    ()=>N_BIGINT,
    "P_BIGINT",
    ()=>P_BIGINT,
    "P_PLUS1_DIV4",
    ()=>P_PLUS1_DIV4,
    "biMod",
    ()=>biMod,
    "biModAdd",
    ()=>biModAdd,
    "biModInv",
    ()=>biModInv,
    "biModMul",
    ()=>biModMul,
    "biModPow",
    ()=>biModPow,
    "biModSqr",
    ()=>biModSqr,
    "biModSqrt",
    ()=>biModSqrt,
    "biModSub",
    ()=>biModSub,
    "default",
    ()=>Point,
    "jpAdd",
    ()=>jpAdd,
    "jpDouble",
    ()=>jpDouble,
    "jpNeg",
    ()=>jpNeg,
    "modInvN",
    ()=>modInvN,
    "modMulN",
    ()=>modMulN,
    "modN",
    ()=>modN,
    "red",
    ()=>red,
    "scalarMultiplyWNAF",
    ()=>scalarMultiplyWNAF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BasePoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BasePoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$JacobianPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/JacobianPoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
;
;
;
;
function ctSwap(swap, a, b) {
    const mask = -swap;
    const swapX = (a.X ^ b.X) & mask;
    const swapY = (a.Y ^ b.Y) & mask;
    const swapZ = (a.Z ^ b.Z) & mask;
    a.X ^= swapX;
    b.X ^= swapX;
    a.Y ^= swapY;
    b.Y ^= swapY;
    a.Z ^= swapZ;
    b.Z ^= swapZ;
}
const BI_ZERO = 0n;
const BI_ONE = 1n;
const BI_TWO = 2n;
const BI_THREE = 3n;
const BI_FOUR = 4n;
const BI_EIGHT = 8n;
const P_BIGINT = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn;
const N_BIGINT = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n;
const MASK_256 = (1n << 256n) - 1n; // 0xffff…ffff (256 sones)
function red(x) {
    // first fold
    let hi = x >> 256n;
    x = (x & MASK_256) + (hi << 32n) + hi * 977n;
    // second fold  (hi ≤ 2³² + 977 here, so one more pass is enough)
    hi = x >> 256n;
    x = (x & MASK_256) + (hi << 32n) + hi * 977n;
    // final conditional subtraction
    if (x >= P_BIGINT) x -= P_BIGINT;
    return x;
}
const biMod = (a)=>red((a % P_BIGINT + P_BIGINT) % P_BIGINT);
const biModSub = (a, b)=>a >= b ? a - b : P_BIGINT - (b - a);
const biModMul = (a, b)=>red(a * b);
const biModAdd = (a, b)=>red(a + b);
const biModInv = (a)=>{
    let lm = BI_ONE;
    let hm = BI_ZERO;
    let low = biMod(a);
    let high = P_BIGINT;
    while(low > BI_ONE){
        const r = high / low;
        [lm, hm] = [
            hm - lm * r,
            lm
        ];
        [low, high] = [
            high - low * r,
            low
        ];
    }
    return biMod(lm);
};
const biModSqr = (a)=>biModMul(a, a);
const biModPow = (base, exp)=>{
    let result = 1n;
    base = biMod(base);
    while(exp > 0n){
        if ((exp & 1n) !== 0n) {
            result = biModMul(result, base);
        }
        base = biModMul(base, base);
        exp >>= 1n;
    }
    return result;
};
const P_PLUS1_DIV4 = P_BIGINT + 1n >> 2n;
const biModSqrt = (a)=>{
    const r = biModPow(a, P_PLUS1_DIV4);
    if (biModMul(r, r) !== biMod(a)) {
        return null;
    }
    return r;
};
const toBigInt = (x)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(x)) return BigInt('0x' + x.toString(16));
    if (typeof x === 'string') return BigInt('0x' + x);
    if (Array.isArray(x)) return BigInt('0x' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(x));
    return BigInt(x);
};
const GX_BIGINT = BigInt('0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798');
const GY_BIGINT = BigInt('0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8');
// Cache for precomputed windowed tables keyed by 'window:x:y'
const WNAF_TABLE_CACHE = new Map();
const jpDouble = (P)=>{
    const { X: X1, Y: Y1, Z: Z1 } = P;
    if (Y1 === BI_ZERO) return {
        X: BI_ZERO,
        Y: BI_ONE,
        Z: BI_ZERO
    };
    const Y1sq = biModMul(Y1, Y1);
    const S = biModMul(BI_FOUR, biModMul(X1, Y1sq));
    const M = biModMul(BI_THREE, biModMul(X1, X1));
    const X3 = biModSub(biModMul(M, M), biModMul(BI_TWO, S));
    const Y3 = biModSub(biModMul(M, biModSub(S, X3)), biModMul(BI_EIGHT, biModMul(Y1sq, Y1sq)));
    const Z3 = biModMul(BI_TWO, biModMul(Y1, Z1));
    return {
        X: X3,
        Y: Y3,
        Z: Z3
    };
};
const jpAdd = (P, Q)=>{
    if (P.Z === BI_ZERO) return Q;
    if (Q.Z === BI_ZERO) return P;
    const Z1Z1 = biModMul(P.Z, P.Z);
    const Z2Z2 = biModMul(Q.Z, Q.Z);
    const U1 = biModMul(P.X, Z2Z2);
    const U2 = biModMul(Q.X, Z1Z1);
    const S1 = biModMul(P.Y, biModMul(Z2Z2, Q.Z));
    const S2 = biModMul(Q.Y, biModMul(Z1Z1, P.Z));
    const H = biModSub(U2, U1);
    const r = biModSub(S2, S1);
    if (H === BI_ZERO) {
        if (r === BI_ZERO) return jpDouble(P);
        return {
            X: BI_ZERO,
            Y: BI_ONE,
            Z: BI_ZERO
        }; // Infinity
    }
    const HH = biModMul(H, H);
    const HHH = biModMul(H, HH);
    const V = biModMul(U1, HH);
    const X3 = biModSub(biModSub(biModMul(r, r), HHH), biModMul(BI_TWO, V));
    const Y3 = biModSub(biModMul(r, biModSub(V, X3)), biModMul(S1, HHH));
    const Z3 = biModMul(H, biModMul(P.Z, Q.Z));
    return {
        X: X3,
        Y: Y3,
        Z: Z3
    };
};
const jpNeg = (P)=>{
    if (P.Z === BI_ZERO) return P;
    return {
        X: P.X,
        Y: P_BIGINT - P.Y,
        Z: P.Z
    };
};
const scalarMultiplyWNAF = (k, P0, window = 5)=>{
    const key = `${window}:${P0.x.toString(16)}:${P0.y.toString(16)}`;
    let tbl = WNAF_TABLE_CACHE.get(key);
    let P;
    if (tbl === undefined) {
        // Convert affine to Jacobian and pre-compute odd multiples
        const tblSize = 1 << window - 1; // e.g. w=5 → 16 entries
        tbl = new Array(tblSize);
        P = {
            X: P0.x,
            Y: P0.y,
            Z: BI_ONE
        };
        tbl[0] = P;
        const twoP = jpDouble(P);
        for(let i = 1; i < tblSize; i++){
            tbl[i] = jpAdd(tbl[i - 1], twoP);
        }
        WNAF_TABLE_CACHE.set(key, tbl);
    } else {
        P = tbl[0];
    }
    // Build wNAF representation of k
    const wnaf = [];
    const wBig = 1n << BigInt(window);
    const wHalf = wBig >> 1n;
    let kTmp = k;
    while(kTmp > 0n){
        if ((kTmp & BI_ONE) === BI_ZERO) {
            wnaf.push(0);
            kTmp >>= BI_ONE;
        } else {
            let z = kTmp & wBig - 1n; // kTmp mod 2^w
            if (z > wHalf) z -= wBig; // make it odd & within (-2^{w-1}, 2^{w-1})
            wnaf.push(Number(z));
            kTmp -= z;
            kTmp >>= BI_ONE;
        }
    }
    // Accumulate from MSB to LSB
    let Q = {
        X: BI_ZERO,
        Y: BI_ONE,
        Z: BI_ZERO
    }; // infinity
    for(let i = wnaf.length - 1; i >= 0; i--){
        Q = jpDouble(Q);
        const di = wnaf[i];
        if (di !== 0) {
            const idx = Math.abs(di) >> 1; // (|di|-1)/2  because di is odd
            const addend = di > 0 ? tbl[idx] : jpNeg(tbl[idx]);
            Q = jpAdd(Q, addend);
        }
    }
    return Q;
};
const modN = (a)=>{
    let r = a % N_BIGINT;
    if (r < 0n) r += N_BIGINT;
    return r;
};
const modMulN = (a, b)=>modN(a * b);
const modInvN = (a)=>{
    let lm = 1n;
    let hm = 0n;
    let low = modN(a);
    let high = N_BIGINT;
    while(low > 1n){
        const q = high / low;
        [lm, hm] = [
            hm - lm * q,
            lm
        ];
        [low, high] = [
            high - low * q,
            low
        ];
    }
    return modN(lm);
};
class Point extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BasePoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    x;
    y;
    inf;
    static _assertOnCurve(p) {
        if (!p.validate()) {
            throw new Error('Invalid point');
        }
        return p;
    }
    /**
     * Creates a point object from a given Array. These numbers can represent coordinates in hex format, or points
     * in multiple established formats.
     * The function verifies the integrity of the provided data and throws errors if inconsistencies are found.
     *
     * @method fromDER
     * @static
     * @param bytes - The point representation number array.
     * @returns Returns a new point representing the given string.
     * @throws `Error` If the point number[] value has a wrong length.
     * @throws `Error` If the point format is unknown.
     *
     * @example
     * const derPoint = [ 2, 18, 123, 108, 125, 83, 1, 251, 164, 214, 16, 119, 200, 216, 210, 193, 251, 193, 129, 67, 97, 146, 210, 216, 77, 254, 18, 6, 150, 190, 99, 198, 128 ];
     * const point = Point.fromDER(derPoint);
     */ static fromDER(bytes) {
        const len = 32;
        if ((bytes[0] === 0x04 || bytes[0] === 0x06 || bytes[0] === 0x07) && bytes.length - 1 === 2 * len) {
            if (bytes[0] === 0x06) {
                if (bytes[bytes.length - 1] % 2 !== 0) {
                    throw new Error('Point string value is wrong length');
                }
            } else if (bytes[0] === 0x07) {
                if (bytes[bytes.length - 1] % 2 !== 1) {
                    throw new Error('Point string value is wrong length');
                }
            }
            const res = new Point(bytes.slice(1, 1 + len), bytes.slice(1 + len, 1 + 2 * len));
            return Point._assertOnCurve(res);
        } else if ((bytes[0] === 0x02 || bytes[0] === 0x03) && bytes.length - 1 === len) {
            return Point._assertOnCurve(Point.fromX(bytes.slice(1, 1 + len), bytes[0] === 0x03));
        }
        throw new Error('Unknown point format');
    }
    /**
     * Creates a point object from a given string. This string can represent coordinates in hex format, or points
     * in multiple established formats.
     * The function verifies the integrity of the provided data and throws errors if inconsistencies are found.
     *
     * @method fromString
     * @static
     *
     * @param str The point representation string.
     * @returns Returns a new point representing the given string.
     * @throws `Error` If the point string value has a wrong length.
     * @throws `Error` If the point format is unknown.
     *
     * @example
     * const pointStr = 'abcdef';
     * const point = Point.fromString(pointStr);
     */ static fromString(str) {
        const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(str, 'hex');
        return Point._assertOnCurve(Point.fromDER(bytes));
    }
    /**
     * Generates a point from an x coordinate and a boolean indicating whether the corresponding
     * y coordinate is odd.
     *
     * @method fromX
     * @static
     * @param x - The x coordinate of the point.
     * @param odd - Boolean indicating whether the corresponding y coordinate is odd or not.
     * @returns Returns the new point.
     * @throws `Error` If the point is invalid.
     *
     * @example
     * const xCoordinate = new BigNumber('10');
     * const point = Point.fromX(xCoordinate, true);
     */ static fromX(x, odd) {
        let xBigInt = toBigInt(x);
        xBigInt = biMod(xBigInt);
        const y2 = biModAdd(biModMul(biModSqr(xBigInt), xBigInt), 7n);
        const y = biModSqrt(y2);
        if (y === null) {
            throw new Error('Invalid point');
        }
        let yBig = y;
        if ((yBig & BI_ONE) !== (odd ? BI_ONE : BI_ZERO)) {
            yBig = biModSub(P_BIGINT, yBig);
        }
        const xBN = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](xBigInt.toString(16), 16);
        const yBN = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](yBig.toString(16), 16);
        return Point._assertOnCurve(new Point(xBN, yBN));
    }
    /**
     * Generates a point from a serialized JSON object. The function accounts for different options in the JSON object,
     * including precomputed values for optimization of EC operations, and calls another helper function to turn nested
     * JSON points into proper Point objects.
     *
     * @method fromJSON
     * @static
     * @param obj - An object or array that holds the data for the point.
     * @param isRed - A boolean to direct how the Point is constructed from the JSON object.
     * @returns Returns a new point based on the deserialized JSON object.
     *
     * @example
     * const serializedPoint = '{"x":52,"y":15}';
     * const point = Point.fromJSON(serializedPoint, true);
     */ static fromJSON(obj, isRed) {
        if (typeof obj === 'string') {
            obj = JSON.parse(obj);
        }
        let res = new Point(obj[0], obj[1], isRed);
        res = Point._assertOnCurve(res);
        if (typeof obj[2] !== 'object' || obj[2] === null) {
            return res;
        }
        const pre = obj[2];
        const obj2point = (p)=>{
            const pt = new Point(p[0], p[1], isRed);
            return Point._assertOnCurve(pt);
        };
        res.precomputed = {
            beta: null,
            doubles: typeof pre.doubles === 'object' && pre.doubles !== null ? {
                step: pre.doubles.step,
                points: [
                    res
                ].concat(pre.doubles.points.map(obj2point))
            } : undefined,
            naf: typeof pre.naf === 'object' && pre.naf !== null ? {
                wnd: pre.naf.wnd,
                points: [
                    res
                ].concat(pre.naf.points.map(obj2point))
            } : undefined
        };
        return res;
    }
    /**
     * @constructor
     * @param x - The x-coordinate of the point. May be a number, a BigNumber, a string (which will be interpreted as hex), a number array, or null. If null, an "Infinity" point is constructed.
     * @param y - The y-coordinate of the point, similar to x.
     * @param isRed - A boolean indicating if the point is a member of the field of integers modulo the k256 prime. Default is true.
     *
     * @example
     * new Point('abc123', 'def456');
     * new Point(null, null); // Generates Infinity point.
     */ constructor(x, y, isRed = true){
        super('affine');
        this.precomputed = null;
        if (x === null && y === null) {
            this.x = null;
            this.y = null;
            this.inf = true;
        } else {
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(x)) {
                x = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](x, 16);
            }
            this.x = x;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(y)) {
                y = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](y, 16);
            }
            this.y = y;
            // Force redgomery representation when loading from JSON
            if (isRed) {
                this.x.forceRed(this.curve.red);
                this.y.forceRed(this.curve.red);
            }
            if (this.x.red === null) {
                this.x = this.x.toRed(this.curve.red);
            }
            if (this.y.red === null) {
                this.y = this.y.toRed(this.curve.red);
            }
            this.inf = false;
        }
    }
    /**
     * Validates if a point belongs to the curve. Follows the short Weierstrass
     * equation for elliptic curves: y^2 = x^3 + ax + b.
     *
     * @method validate
     * @returns {boolean} true if the point is on the curve, false otherwise.
     *
     * @example
     * const aPoint = new Point(x, y);
     * const isValid = aPoint.validate();
     */ validate() {
        if (this.inf || this.x == null || this.y == null) return false;
        try {
            const xBig = BigInt('0x' + this.x.fromRed().toString(16));
            const yBig = BigInt('0x' + this.y.fromRed().toString(16));
            // compute y² and x³ + 7 using bigint-secure field ops
            const lhs = biModMul(yBig, yBig);
            const rhs = biModAdd(biModMul(biModMul(xBig, xBig), xBig), 7n);
            return lhs === rhs;
        } catch  {
            return false;
        }
    }
    /**
     * Encodes the coordinates of a point into an array or a hexadecimal string.
     * The details of encoding are determined by the optional compact and enc parameters.
     *
     * @method encode
     * @param compact - If true, an additional prefix byte 0x02 or 0x03 based on the 'y' coordinate being even or odd respectively is used. If false, byte 0x04 is used.
     * @param enc - Expects the string 'hex' if hexadecimal string encoding is required instead of an array of numbers.
     * @throws Will throw an error if the specified encoding method is not recognized. Expects 'hex'.
     * @returns If enc is undefined, a byte array representation of the point will be returned. if enc is 'hex', a hexadecimal string representation of the point will be returned.
     *
     * @example
     * const aPoint = new Point(x, y);
     * const encodedPointArray = aPoint.encode();
     * const encodedPointHex = aPoint.encode(true, 'hex');
     */ encode(compact = true, enc) {
        if (this.inf) {
            if (enc === 'hex') return '00';
            return [
                0x00
            ];
        }
        const len = this.curve.p.byteLength();
        const x = this.getX().toArray('be', len);
        let res;
        if (compact) {
            res = [
                this.getY().isEven() ? 0x02 : 0x03
            ].concat(x);
        } else {
            res = [
                0x04
            ].concat(x, this.getY().toArray('be', len));
        }
        if (enc !== 'hex') {
            return res;
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(res);
        }
    }
    /**
     * Converts the point coordinates to a hexadecimal string. A wrapper method
     * for encode. Byte 0x02 or 0x03 is used as prefix based on the 'y' coordinate being even or odd respectively.
     *
     * @method toString
     * @returns {string} A hexadecimal string representation of the point coordinates.
     *
     * @example
     * const aPoint = new Point(x, y);
     * const stringPoint = aPoint.toString();
     */ toString() {
        return this.encode(true, 'hex');
    }
    /**
     * Exports the x and y coordinates of the point, and the precomputed doubles and non-adjacent form (NAF) for optimization. The output is an array.
     *
     * @method toJSON
     * @returns An Array where first two elements are the coordinates of the point and optional third element is an object with doubles and NAF points.
     *
     * @example
     * const aPoint = new Point(x, y);
     * const jsonPoint = aPoint.toJSON();
     */ toJSON() {
        if (this.precomputed == null) {
            return [
                this.x,
                this.y
            ];
        }
        return [
            this.x,
            this.y,
            typeof this.precomputed === 'object' && this.precomputed !== null ? {
                doubles: this.precomputed.doubles != null ? {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                } : undefined,
                naf: this.precomputed.naf != null ? {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                } : undefined
            } : undefined
        ];
    }
    /**
     * Provides the point coordinates in a human-readable string format for debugging purposes.
     *
     * @method inspect
     * @returns String of the format '<EC Point x: x-coordinate y: y-coordinate>', or '<EC Point Infinity>' if the point is at infinity.
     *
     * @example
     * const aPoint = new Point(x, y);
     * console.log(aPoint.inspect());
     */ inspect() {
        if (this.isInfinity()) {
            return '<EC Point Infinity>';
        }
        return '<EC Point x: ' + (this.x?.fromRed()?.toString(16, 2) ?? 'undefined') + ' y: ' + (this.y?.fromRed()?.toString(16, 2) ?? 'undefined') + '>';
    }
    /**
     * Checks if the point is at infinity.
     * @method isInfinity
     * @returns Returns whether or not the point is at infinity.
     *
     * @example
     * const p = new Point(null, null);
     * console.log(p.isInfinity()); // outputs: true
     */ isInfinity() {
        return this.inf;
    }
    /**
     * Adds another Point to this Point, returning a new Point.
     *
     * @method add
     * @param p - The Point to add to this one.
     * @returns A new Point that results from the addition.
     *
     * @example
     * const p1 = new Point(1, 2);
     * const p2 = new Point(2, 3);
     * const result = p1.add(p2);
     */ add(p) {
        // O + P = P
        if (this.inf) {
            return p;
        }
        // P + O = P
        if (p.inf) {
            return this;
        }
        // P + P = 2P
        if (this.eq(p)) {
            return this.dbl();
        }
        // P + (-P) = O
        if (this.neg().eq(p)) {
            return new Point(null, null);
        }
        // P + Q = O
        if (this.x?.cmp(p.x ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)) === 0) {
            return new Point(null, null);
        }
        const P1 = {
            X: BigInt('0x' + this.x.fromRed().toString(16)),
            Y: BigInt('0x' + this.y.fromRed().toString(16)),
            Z: BI_ONE
        };
        const Q1 = {
            X: BigInt('0x' + p.x.fromRed().toString(16)),
            Y: BigInt('0x' + p.y.fromRed().toString(16)),
            Z: BI_ONE
        };
        const R = jpAdd(P1, Q1);
        if (R.Z === BI_ZERO) return new Point(null, null);
        const zInv = biModInv(R.Z);
        const zInv2 = biModMul(zInv, zInv);
        const xRes = biModMul(R.X, zInv2);
        const yRes = biModMul(R.Y, biModMul(zInv2, zInv));
        return new Point(xRes.toString(16), yRes.toString(16));
    }
    /**
     * Doubles the current point.
     *
     * @method dbl
     *
     * @example
     * const P = new Point('123', '456');
     * const result = P.dbl();
     * */ dbl() {
        if (this.inf) return this;
        if (this.x === null || this.y === null) {
            throw new Error('Point coordinates cannot be null');
        }
        const X = BigInt('0x' + this.x.fromRed().toString(16));
        const Y = BigInt('0x' + this.y.fromRed().toString(16));
        if (Y === BI_ZERO) return new Point(null, null);
        const R = jpDouble({
            X,
            Y,
            Z: BI_ONE
        });
        const zInv = biModInv(R.Z);
        const zInv2 = biModMul(zInv, zInv);
        const xRes = biModMul(R.X, zInv2);
        const yRes = biModMul(R.Y, biModMul(zInv2, zInv));
        return new Point(xRes.toString(16), yRes.toString(16));
    }
    /**
     * Returns X coordinate of point
     *
     * @example
     * const P = new Point('123', '456');
     * const x = P.getX();
     */ getX() {
        return (this.x ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)).fromRed();
    }
    /**
     * Returns X coordinate of point
     *
     * @example
     * const P = new Point('123', '456');
     * const x = P.getX();
     */ getY() {
        return (this.y ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)).fromRed();
    }
    /**
     * Multiplies this Point by a scalar value, returning a new Point.
     *
     * @method mul
     * @param k - The scalar value to multiply this Point by.
     * @returns  A new Point that results from the multiplication.
     *
     * @example
     * const p = new Point(1, 2);
     * const result = p.mul(2); // this doubles the Point
     */ mul(k) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(k)) {
            k = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](k, 16);
        }
        k = k;
        if (this.inf) {
            return this;
        }
        const isNeg = k.isNeg();
        const kAbs = isNeg ? k.neg() : k;
        let kBig = BigInt('0x' + kAbs.toString(16));
        kBig = biMod(kBig);
        if (kBig === BI_ZERO) {
            return new Point(null, null);
        }
        if (kBig === BI_ZERO) {
            return new Point(null, null);
        }
        if (this.x === null || this.y === null) {
            throw new Error('Point coordinates cannot be null');
        }
        let Px;
        let Py;
        if (this === this.curve.g) {
            Px = GX_BIGINT;
            Py = GY_BIGINT;
        } else {
            Px = BigInt('0x' + this.x.fromRed().toString(16));
            Py = BigInt('0x' + this.y.fromRed().toString(16));
        }
        const R = scalarMultiplyWNAF(kBig, {
            x: Px,
            y: Py
        });
        if (R.Z === BI_ZERO) {
            return new Point(null, null);
        }
        const zInv = biModInv(R.Z);
        const zInv2 = biModMul(zInv, zInv);
        const xRes = biModMul(R.X, zInv2);
        const yRes = biModMul(R.Y, biModMul(zInv2, zInv));
        const xBN = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](xRes.toString(16), 16);
        const yBN = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](yRes.toString(16), 16);
        const result = new Point(xBN, yBN);
        if (isNeg) {
            return result.neg();
        }
        return result;
    }
    mulCT(k) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(k)) {
            k = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](k, 16);
        }
        k = k;
        if (this.inf) return new Point(null, null);
        // ✅ SAFE sign handling (this is the fix)
        const isNeg = k.isNeg();
        const kAbs = isNeg ? k.neg() : k;
        let kBig = BigInt('0x' + kAbs.toString(16));
        kBig = biMod(kBig);
        if (kBig === 0n) return new Point(null, null);
        const Px = this === this.curve.g ? GX_BIGINT : BigInt('0x' + this.getX().toString(16));
        const Py = this === this.curve.g ? GY_BIGINT : BigInt('0x' + this.getY().toString(16));
        let R0 = {
            X: 0n,
            Y: 1n,
            Z: 0n
        };
        let R1 = {
            X: Px,
            Y: Py,
            Z: 1n
        };
        const bits = kBig.toString(2);
        for(let i = 0; i < bits.length; i++){
            const bit = bits[i] === '1' ? 1n : 0n;
            ctSwap(bit, R0, R1);
            R1 = jpAdd(R0, R1);
            R0 = jpDouble(R0);
            ctSwap(bit, R0, R1);
        }
        if (R0.Z === 0n) return new Point(null, null);
        const zInv = biModInv(R0.Z);
        const zInv2 = biModMul(zInv, zInv);
        const x = biModMul(R0.X, zInv2);
        const y = biModMul(R0.Y, biModMul(zInv2, zInv));
        const result = new Point(x.toString(16), y.toString(16));
        return isNeg ? result.neg() : result;
    }
    /**
     * Performs a multiplication and addition operation in a single step.
     * Multiplies this Point by k1, adds the resulting Point to the result of p2 multiplied by k2.
     *
     * @method mulAdd
     * @param k1 - The scalar value to multiply this Point by.
     * @param p2 - The other Point to be involved in the operation.
     * @param k2 - The scalar value to multiply the Point p2 by.
     * @returns A Point that results from the combined multiplication and addition operations.
     *
     * @example
     * const p1 = new Point(1, 2);
     * const p2 = new Point(2, 3);
     * const result = p1.mulAdd(2, p2, 3);
     */ mulAdd(k1, p2, k2) {
        const points = [
            this,
            p2
        ];
        const coeffs = [
            k1,
            k2
        ];
        return this._endoWnafMulAdd(points, coeffs);
    }
    /**
     * Performs the Jacobian multiplication and addition operation in a single
     * step. Instead of returning a regular Point, the result is a JacobianPoint.
     *
     * @method jmulAdd
     * @param k1 - The scalar value to multiply this Point by.
     * @param p2 - The other Point to be involved in the operation
     * @param k2 - The scalar value to multiply the Point p2 by.
     * @returns A JacobianPoint that results from the combined multiplication and addition operation.
     *
     * @example
     * const p1 = new Point(1, 2);
     * const p2 = new Point(2, 3);
     * const result = p1.jmulAdd(2, p2, 3);
     */ jmulAdd(k1, p2, k2) {
        const points = [
            this,
            p2
        ];
        const coeffs = [
            k1,
            k2
        ];
        return this._endoWnafMulAdd(points, coeffs, true);
    }
    /**
     * Checks if the Point instance is equal to another given Point.
     *
     * @method eq
     * @param p - The Point to be checked if equal to the current instance.
     *
     * @returns Whether the two Point instances are equal. Both the 'x' and 'y' coordinates have to match, and both points have to either be valid or at infinity for equality. If both conditions are true, it returns true, else it returns false.
     *
     * @example
     * const p1 = new Point(5, 20);
     * const p2 = new Point(5, 20);
     * const areEqual = p1.eq(p2); // returns true
     */ eq(p) {
        return this === p || this.inf === p.inf && (this.inf || (this.x ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)).cmp(p.x ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)) === 0 && (this.y ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)).cmp(p.y ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)) === 0);
    }
    /**
     * Negate a point. The negation of a point P is the mirror of P about x-axis.
     *
     * @method neg
     *
     * @example
     * const P = new Point('123', '456');
     * const result = P.neg();
     */ neg(_precompute) {
        if (this.inf) {
            return this;
        }
        const res = new Point(this.x, (this.y ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)).redNeg());
        if (_precompute === true && this.precomputed != null) {
            const pre = this.precomputed;
            const negate = (p)=>p.neg();
            res.precomputed = {
                naf: pre.naf != null ? {
                    wnd: pre.naf.wnd,
                    points: pre.naf.points.map(negate)
                } : undefined,
                doubles: pre.doubles != null ? {
                    step: pre.doubles.step,
                    points: pre.doubles.points.map((p)=>p.neg())
                } : undefined,
                beta: undefined
            };
        }
        return res;
    }
    /**
     * Performs the "doubling" operation on the Point a given number of times.
     * This is used in elliptic curve operations to perform multiplication by 2, multiple times.
     * If the point is at infinity, it simply returns the point because doubling
     * a point at infinity is still infinity.
     *
     * @method dblp
     * @param k - The number of times the "doubling" operation is to be performed on the Point.
     * @returns The Point after 'k' "doubling" operations have been performed.
     *
     * @example
     * const p = new Point(5, 20);
     * const doubledPoint = p.dblp(10); // returns the point after "doubled" 10 times
     */ dblp(k) {
        /* eslint-disable @typescript-eslint/no-this-alias */ let r = this;
        for(let i = 0; i < k; i++){
            r = r.dbl();
        }
        return r;
    }
    /**
     * Converts the point to a Jacobian point. If the point is at infinity, the corresponding Jacobian point
     * will also be at infinity.
     *
     * @method toJ
     * @returns Returns a new Jacobian point based on the current point.
     *
     * @example
     * const point = new Point(xCoordinate, yCoordinate);
     * const jacobianPoint = point.toJ();
     */ toJ() {
        if (this.inf) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$JacobianPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](null, null, null);
        }
        const res = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$JacobianPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this.x, this.y, this.curve.one);
        return res;
    }
    _getBeta() {
        if (typeof this.curve.endo !== 'object') {
            return;
        }
        const pre = this.precomputed;
        if (typeof pre === 'object' && pre !== null && typeof pre.beta === 'object' && pre.beta !== null) {
            return pre.beta;
        }
        const beta = new Point((this.x ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)).redMul(this.curve.endo.beta), this.y);
        if (pre != null) {
            const curve = this.curve;
            const endoMul = (p)=>{
                if (p.x === null) {
                    throw new Error('p.x is null');
                }
                if (curve.endo === undefined || curve.endo === null) {
                    throw new Error('curve.endo is undefined');
                }
                return new Point(p.x.redMul(curve.endo.beta), p.y);
            };
            pre.beta = beta;
            beta.precomputed = {
                beta: null,
                naf: pre.naf != null ? {
                    wnd: pre.naf.wnd,
                    points: pre.naf.points.map(endoMul)
                } : undefined,
                doubles: pre.doubles != null ? {
                    step: pre.doubles.step,
                    points: pre.doubles.points.map(endoMul)
                } : undefined
            };
        }
        return beta;
    }
    _fixedNafMul(k) {
        if (typeof this.precomputed !== 'object' || this.precomputed === null) {
            throw new Error('_fixedNafMul requires precomputed values for the point');
        }
        const doubles = this._getDoubles();
        const naf = this.curve.getNAF(k, 1, this.curve._bitLength);
        let I = (1 << doubles.step + 1) - (doubles.step % 2 === 0 ? 2 : 1);
        I /= 3;
        // Translate into more windowed form
        const repr = [];
        for(let j = 0; j < naf.length; j += doubles.step){
            let nafW = 0;
            for(let k = j + doubles.step - 1; k >= j; k--){
                nafW = (nafW << 1) + naf[k];
            }
            repr.push(nafW);
        }
        let a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$JacobianPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](null, null, null);
        let b = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$JacobianPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](null, null, null);
        for(let i = I; i > 0; i--){
            for(let j = 0; j < repr.length; j++){
                const nafW = repr[j];
                if (nafW === i) {
                    b = b.mixedAdd(doubles.points[j]);
                } else if (nafW === -i) {
                    b = b.mixedAdd(doubles.points[j].neg());
                }
            }
            a = a.add(b);
        }
        return a.toP();
    }
    _wnafMulAdd(defW, points, coeffs, len, jacobianResult) {
        const wndWidth = this.curve._wnafT1.map((num)=>num.toNumber()); // Convert BigNumber to number
        const wnd = this.curve._wnafT2.map(()=>[]); // Initialize as empty Point[][] array
        const naf = this.curve._wnafT3.map(()=>[]); // Initialize as empty number[][] array
        // Fill all arrays
        let max = 0;
        for(let i = 0; i < len; i++){
            const p = points[i];
            const nafPoints = p._getNAFPoints(defW);
            wndWidth[i] = nafPoints.wnd; // Ensure correct type
            wnd[i] = nafPoints.points; // Ensure correct type
        }
        // Comb small window NAFs
        for(let i = len - 1; i >= 1; i -= 2){
            const a = i - 1;
            const b = i;
            if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
                naf[a] = this.curve.getNAF(coeffs[a], wndWidth[a], this.curve._bitLength);
                naf[b] = this.curve.getNAF(coeffs[b], wndWidth[b], this.curve._bitLength);
                max = Math.max(naf[a].length, max);
                max = Math.max(naf[b].length, max);
                continue;
            }
            const comb = [
                points[a],
                null,
                null,
                points[b]
            ];
            // Try to avoid Projective points, if possible
            if ((points[a].y ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)).cmp(points[b].y ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)) === 0) {
                comb[1] = points[a].add(points[b]);
                comb[2] = points[a].toJ().mixedAdd(points[b].neg());
            } else if ((points[a].y ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)).cmp((points[b].y ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)).redNeg()) === 0) {
                comb[1] = points[a].toJ().mixedAdd(points[b]);
                comb[2] = points[a].add(points[b].neg());
            } else {
                comb[1] = points[a].toJ().mixedAdd(points[b]);
                comb[2] = points[a].toJ().mixedAdd(points[b].neg());
            }
            const index = [
                -3 /* -1 -1 */ ,
                -1 /* -1 0 */ ,
                -5 /* -1 1 */ ,
                -7 /* 0 -1 */ ,
                0 /* 0 0 */ ,
                7 /* 0 1 */ ,
                5 /* 1 -1 */ ,
                1 /* 1 0 */ ,
                3 /* 1 1 */ 
            ];
            const jsf = this.curve.getJSF(coeffs[a], coeffs[b]);
            max = Math.max(jsf[0].length, max);
            naf[a] = new Array(max);
            naf[b] = new Array(max);
            for(let j = 0; j < max; j++){
                const ja = jsf[0][j] | 0;
                const jb = jsf[1][j] | 0;
                naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
                naf[b][j] = 0;
                wnd[a] = comb;
            }
        }
        let acc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$JacobianPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](null, null, null);
        const tmp = this.curve._wnafT4;
        for(let i = max; i >= 0; i--){
            let k = 0;
            while(i >= 0){
                let zero = true;
                for(let j = 0; j < len; j++){
                    tmp[j] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](typeof naf[j][i] === 'number' ? naf[j][i] : 0); // Ensure type consistency
                    if (!tmp[j].isZero()) {
                        zero = false;
                    }
                }
                if (!zero) {
                    break;
                }
                k++;
                i--;
            }
            if (i >= 0) {
                k++;
            }
            acc = acc.dblp(k);
            if (i < 0) {
                break;
            }
            const one = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1);
            const two = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](2);
            for(let j = 0; j < len; j++){
                const z = tmp[j];
                let p;
                if (z.cmpn(0) === 0) {
                    continue;
                } else if (!z.isNeg()) {
                    p = wnd[j][z.sub(one).div(two).toNumber()];
                } else {
                    p = wnd[j][z.neg().sub(one).div(two).toNumber()].neg();
                }
                if (p.type === 'affine') {
                    acc = acc.mixedAdd(p);
                } else {
                    acc = acc.add(p);
                }
            }
        }
        // Zeroify references
        for(let i = 0; i < len; i++){
            wnd[i] = [];
        }
        if (jacobianResult === true) {
            return acc;
        } else {
            return acc.toP();
        }
    }
    _endoWnafMulAdd(points, coeffs, jacobianResult) {
        const npoints = new Array(points.length * 2);
        const ncoeffs = new Array(points.length * 2);
        let i;
        for(i = 0; i < points.length; i++){
            const split = this.curve._endoSplit(coeffs[i]);
            let p = points[i];
            let beta = p._getBeta() ?? new Point(null, null);
            if (split.k1.negative !== 0) {
                split.k1.ineg();
                p = p.neg(true);
            }
            if (split.k2.negative !== 0) {
                split.k2.ineg();
                beta = beta.neg(true);
            }
            npoints[i * 2] = p;
            npoints[i * 2 + 1] = beta;
            ncoeffs[i * 2] = split.k1;
            ncoeffs[i * 2 + 1] = split.k2;
        }
        const res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2, jacobianResult);
        // Clean-up references to points and coefficients
        for(let j = 0; j < i * 2; j++){
            npoints[j] = null;
            ncoeffs[j] = null;
        }
        return res;
    }
    _hasDoubles(k) {
        if (this.precomputed == null) {
            return false;
        }
        const doubles = this.precomputed.doubles;
        if (typeof doubles !== 'object') {
            return false;
        }
        return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
    }
    _getDoubles(step, power) {
        if (typeof this.precomputed === 'object' && this.precomputed !== null && typeof this.precomputed.doubles === 'object' && this.precomputed.doubles !== null) {
            return this.precomputed.doubles;
        }
        const doubles = [
            this
        ];
        /* eslint-disable @typescript-eslint/no-this-alias */ let acc = this;
        for(let i = 0; i < (power ?? 0); i += step ?? 1){
            for(let j = 0; j < (step ?? 1); j++){
                acc = acc.dbl();
            }
            doubles.push(acc);
        }
        return {
            step: step ?? 1,
            points: doubles
        };
    }
    _getNAFPoints(wnd) {
        if (typeof this.precomputed === 'object' && this.precomputed !== null && typeof this.precomputed.naf === 'object' && this.precomputed.naf !== null) {
            return this.precomputed.naf;
        }
        const res = [
            this
        ];
        const max = (1 << wnd) - 1;
        const dbl = max === 1 ? null : this.dbl();
        for(let i = 1; i < max; i++){
            if (dbl !== null) {
                res[i] = res[i - 1].add(dbl);
            }
        }
        return {
            wnd,
            points: res
        };
    }
} //# sourceMappingURL=Point.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Curve.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Curve
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ReductionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ReductionContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$MontgomoryMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/MontgomoryMethod.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
;
;
;
;
;
// This ensures that only one curve is ever created, enhancing performance.
// This assumes there is never a need to have multiple distinct Curve instances.
// So far, this assumption has proven to be valid.
let globalCurve;
class Curve {
    p;
    red;
    redN;
    zero;
    one;
    two;
    g;
    n;
    a;
    b;
    tinv;
    zeroA;
    threeA;
    endo;
    _endoWnafT1;
    _endoWnafT2;
    _wnafT1;
    _wnafT2;
    _wnafT3;
    _wnafT4;
    _bitLength;
    // Represent num in a w-NAF form
    static assert(expression, message = 'Elliptic curve assertion failed') {
        if (!expression) {
            throw new Error(message);
        }
    }
    getNAF(num, w, bits) {
        const naf = new Array(Math.max(num.bitLength(), bits) + 1);
        naf.fill(0);
        const ws = 1 << w + 1;
        const k = num.clone();
        for(let i = 0; i < naf.length; i++){
            let z;
            const mod = k.andln(ws - 1);
            if (k.isOdd()) {
                if (mod > (ws >> 1) - 1) {
                    z = (ws >> 1) - mod;
                } else {
                    z = mod;
                }
                k.isubn(z);
            } else {
                z = 0;
            }
            naf[i] = z;
            k.iushrn(1);
        }
        return naf;
    }
    // Represent k1, k2 in a Joint Sparse Form
    getJSF(k1, k2) {
        const jsf = [
            [],
            []
        ];
        k1 = k1.clone();
        k2 = k2.clone();
        let d1 = 0;
        let d2 = 0;
        while(k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0){
            // First phase
            let m14 = k1.andln(3) + d1 & 3;
            let m24 = k2.andln(3) + d2 & 3;
            if (m14 === 3) {
                m14 = -1;
            }
            if (m24 === 3) {
                m24 = -1;
            }
            let u1;
            if ((m14 & 1) === 0) {
                u1 = 0;
            } else {
                const m8 = k1.andln(7) + d1 & 7;
                if ((m8 === 3 || m8 === 5) && m24 === 2) {
                    u1 = -m14;
                } else {
                    u1 = m14;
                }
            }
            jsf[0].push(u1);
            let u2;
            if ((m24 & 1) === 0) {
                u2 = 0;
            } else {
                const m8 = k2.andln(7) + d2 & 7;
                if ((m8 === 3 || m8 === 5) && m14 === 2) {
                    u2 = -m24;
                } else {
                    u2 = m24;
                }
            }
            jsf[1].push(u2);
            // Second phase
            if (2 * d1 === u1 + 1) {
                d1 = 1 - d1;
            }
            if (2 * d2 === u2 + 1) {
                d2 = 1 - d2;
            }
            k1.iushrn(1);
            k2.iushrn(1);
        }
        return jsf;
    }
    static cachedProperty(obj, name, computer) {
        const key = '_' + name;
        obj.prototype[name] = function cachedProperty() {
            const r = this[key] !== undefined ? this[key] : this[key] = computer.call(this);
            return r;
        };
    }
    static parseBytes(bytes) {
        return typeof bytes === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(bytes, 'hex') : bytes;
    }
    static intFromLE(bytes) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bytes, 'hex', 'le');
    }
    constructor(){
        if (typeof globalCurve !== 'undefined') {
            return globalCurve;
        } else {
            /* eslint-disable @typescript-eslint/no-this-alias */ globalCurve = this;
        }
        const precomputed = {
            doubles: {
                step: 4,
                points: [
                    [
                        'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
                        'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821'
                    ],
                    [
                        '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
                        '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf'
                    ],
                    [
                        '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
                        'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695'
                    ],
                    [
                        '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
                        '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9'
                    ],
                    [
                        '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
                        '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36'
                    ],
                    [
                        '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
                        '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f'
                    ],
                    [
                        'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
                        '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999'
                    ],
                    [
                        '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
                        'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09'
                    ],
                    [
                        'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
                        '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d'
                    ],
                    [
                        'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
                        'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088'
                    ],
                    [
                        'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
                        '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d'
                    ],
                    [
                        '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
                        '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8'
                    ],
                    [
                        '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
                        '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a'
                    ],
                    [
                        '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
                        '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453'
                    ],
                    [
                        '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
                        '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160'
                    ],
                    [
                        '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
                        '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0'
                    ],
                    [
                        '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
                        '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6'
                    ],
                    [
                        '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
                        '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589'
                    ],
                    [
                        '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
                        'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17'
                    ],
                    [
                        'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
                        '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda'
                    ],
                    [
                        'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
                        '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd'
                    ],
                    [
                        '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
                        '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2'
                    ],
                    [
                        '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
                        '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6'
                    ],
                    [
                        'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
                        '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f'
                    ],
                    [
                        '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
                        'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01'
                    ],
                    [
                        'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
                        '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3'
                    ],
                    [
                        'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
                        'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f'
                    ],
                    [
                        'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
                        '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7'
                    ],
                    [
                        'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
                        'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78'
                    ],
                    [
                        'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
                        '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1'
                    ],
                    [
                        '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
                        'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150'
                    ],
                    [
                        '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
                        '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82'
                    ],
                    [
                        'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
                        '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc'
                    ],
                    [
                        '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
                        'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b'
                    ],
                    [
                        'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
                        '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51'
                    ],
                    [
                        'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
                        '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45'
                    ],
                    [
                        'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
                        'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120'
                    ],
                    [
                        '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
                        '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84'
                    ],
                    [
                        '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
                        '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d'
                    ],
                    [
                        '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
                        'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d'
                    ],
                    [
                        '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
                        '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8'
                    ],
                    [
                        'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
                        '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8'
                    ],
                    [
                        '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
                        '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac'
                    ],
                    [
                        '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
                        'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f'
                    ],
                    [
                        '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
                        '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962'
                    ],
                    [
                        'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
                        '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907'
                    ],
                    [
                        '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
                        'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec'
                    ],
                    [
                        'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
                        'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d'
                    ],
                    [
                        'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
                        '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414'
                    ],
                    [
                        '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
                        'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd'
                    ],
                    [
                        '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
                        'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0'
                    ],
                    [
                        'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
                        '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811'
                    ],
                    [
                        'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
                        '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1'
                    ],
                    [
                        'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
                        '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c'
                    ],
                    [
                        '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
                        'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73'
                    ],
                    [
                        '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
                        '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd'
                    ],
                    [
                        'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
                        'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405'
                    ],
                    [
                        '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
                        'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589'
                    ],
                    [
                        '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
                        '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e'
                    ],
                    [
                        '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
                        '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27'
                    ],
                    [
                        'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
                        'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1'
                    ],
                    [
                        '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
                        '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482'
                    ],
                    [
                        '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
                        '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945'
                    ],
                    [
                        'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
                        '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573'
                    ],
                    [
                        'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
                        'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82'
                    ]
                ]
            },
            naf: {
                wnd: 7,
                points: [
                    [
                        'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
                        '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672'
                    ],
                    [
                        '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
                        'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6'
                    ],
                    [
                        '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
                        '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da'
                    ],
                    [
                        'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
                        'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37'
                    ],
                    [
                        '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
                        'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b'
                    ],
                    [
                        'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
                        'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81'
                    ],
                    [
                        'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
                        '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58'
                    ],
                    [
                        'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
                        '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77'
                    ],
                    [
                        '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
                        '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a'
                    ],
                    [
                        '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
                        '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c'
                    ],
                    [
                        '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
                        '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67'
                    ],
                    [
                        '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
                        '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402'
                    ],
                    [
                        'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
                        'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55'
                    ],
                    [
                        'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
                        '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482'
                    ],
                    [
                        '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
                        'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82'
                    ],
                    [
                        '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
                        'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396'
                    ],
                    [
                        '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
                        '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49'
                    ],
                    [
                        '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
                        '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf'
                    ],
                    [
                        '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
                        '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a'
                    ],
                    [
                        '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
                        'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7'
                    ],
                    [
                        'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
                        'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933'
                    ],
                    [
                        '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
                        '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a'
                    ],
                    [
                        '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
                        '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6'
                    ],
                    [
                        'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
                        'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37'
                    ],
                    [
                        '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
                        '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e'
                    ],
                    [
                        'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
                        'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6'
                    ],
                    [
                        'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
                        'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476'
                    ],
                    [
                        '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
                        '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40'
                    ],
                    [
                        '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
                        '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61'
                    ],
                    [
                        '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
                        '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683'
                    ],
                    [
                        'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
                        '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5'
                    ],
                    [
                        '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
                        '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b'
                    ],
                    [
                        'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
                        '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417'
                    ],
                    [
                        '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
                        'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868'
                    ],
                    [
                        '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
                        'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a'
                    ],
                    [
                        'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
                        'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6'
                    ],
                    [
                        '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
                        '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996'
                    ],
                    [
                        '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
                        'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e'
                    ],
                    [
                        'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
                        'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d'
                    ],
                    [
                        '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
                        '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2'
                    ],
                    [
                        '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
                        'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e'
                    ],
                    [
                        '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
                        '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437'
                    ],
                    [
                        '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
                        'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311'
                    ],
                    [
                        'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
                        '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4'
                    ],
                    [
                        '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
                        '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575'
                    ],
                    [
                        '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
                        'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d'
                    ],
                    [
                        '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
                        'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d'
                    ],
                    [
                        'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
                        'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629'
                    ],
                    [
                        'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
                        'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06'
                    ],
                    [
                        '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
                        '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374'
                    ],
                    [
                        '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
                        '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee'
                    ],
                    [
                        'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
                        '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1'
                    ],
                    [
                        'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
                        'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b'
                    ],
                    [
                        '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
                        '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661'
                    ],
                    [
                        '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
                        '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6'
                    ],
                    [
                        'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
                        '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e'
                    ],
                    [
                        '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
                        '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d'
                    ],
                    [
                        'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
                        'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc'
                    ],
                    [
                        '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
                        'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4'
                    ],
                    [
                        '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
                        '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c'
                    ],
                    [
                        'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
                        '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b'
                    ],
                    [
                        'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
                        '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913'
                    ],
                    [
                        '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
                        '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154'
                    ],
                    [
                        '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
                        '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865'
                    ],
                    [
                        '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
                        'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc'
                    ],
                    [
                        '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
                        'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224'
                    ],
                    [
                        '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
                        '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e'
                    ],
                    [
                        '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
                        '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6'
                    ],
                    [
                        '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
                        '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511'
                    ],
                    [
                        '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
                        'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b'
                    ],
                    [
                        'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
                        'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2'
                    ],
                    [
                        '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
                        'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c'
                    ],
                    [
                        'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
                        '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3'
                    ],
                    [
                        'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
                        '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d'
                    ],
                    [
                        'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
                        '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700'
                    ],
                    [
                        'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
                        '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4'
                    ],
                    [
                        '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
                        'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196'
                    ],
                    [
                        '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
                        '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4'
                    ],
                    [
                        '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
                        'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257'
                    ],
                    [
                        'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
                        'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13'
                    ],
                    [
                        'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
                        '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096'
                    ],
                    [
                        'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
                        'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38'
                    ],
                    [
                        'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
                        '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f'
                    ],
                    [
                        '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
                        '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448'
                    ],
                    [
                        'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
                        '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a'
                    ],
                    [
                        'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
                        '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4'
                    ],
                    [
                        '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
                        '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437'
                    ],
                    [
                        '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
                        'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7'
                    ],
                    [
                        'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
                        '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d'
                    ],
                    [
                        'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
                        '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a'
                    ],
                    [
                        'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
                        '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54'
                    ],
                    [
                        '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
                        '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77'
                    ],
                    [
                        'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
                        'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517'
                    ],
                    [
                        '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
                        'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10'
                    ],
                    [
                        'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
                        'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125'
                    ],
                    [
                        'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
                        '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e'
                    ],
                    [
                        '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
                        'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1'
                    ],
                    [
                        'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
                        '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2'
                    ],
                    [
                        'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
                        '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423'
                    ],
                    [
                        'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
                        '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8'
                    ],
                    [
                        '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
                        'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758'
                    ],
                    [
                        '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
                        'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375'
                    ],
                    [
                        'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
                        '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d'
                    ],
                    [
                        '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
                        'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec'
                    ],
                    [
                        '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
                        '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0'
                    ],
                    [
                        '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
                        'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c'
                    ],
                    [
                        'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
                        'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4'
                    ],
                    [
                        '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
                        'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f'
                    ],
                    [
                        '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
                        '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649'
                    ],
                    [
                        '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
                        'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826'
                    ],
                    [
                        '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
                        '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5'
                    ],
                    [
                        'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
                        'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87'
                    ],
                    [
                        '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
                        '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b'
                    ],
                    [
                        'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
                        '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc'
                    ],
                    [
                        '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
                        '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c'
                    ],
                    [
                        'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
                        'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f'
                    ],
                    [
                        'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
                        '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a'
                    ],
                    [
                        'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
                        'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46'
                    ],
                    [
                        '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
                        'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f'
                    ],
                    [
                        '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
                        '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03'
                    ],
                    [
                        '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
                        'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08'
                    ],
                    [
                        '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
                        '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8'
                    ],
                    [
                        '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
                        '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373'
                    ],
                    [
                        '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
                        'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3'
                    ],
                    [
                        '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
                        '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8'
                    ],
                    [
                        '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
                        '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1'
                    ],
                    [
                        '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
                        '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9'
                    ]
                ]
            }
        };
        const conf = {
            prime: 'k256',
            p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
            a: '0',
            b: '7',
            n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
            h: '1',
            // Precomputed endomorphism
            beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
            lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
            basis: [
                {
                    a: '3086d221a7d46bcde86c90e49284eb15',
                    b: '-e4437ed6010e88286f547fa90abfe4c3'
                },
                {
                    a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
                    b: '3086d221a7d46bcde86c90e49284eb15'
                }
            ],
            gRed: false,
            g: [
                '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
                '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
                precomputed
            ]
        };
        this.p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](conf.p, 16);
        // Use Montgomery, when there is no fast reduction for the prime
        this.red = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ReductionContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](conf.prime);
        // Useful for many curves
        this.zero = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0).toRed(this.red);
        this.one = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1).toRed(this.red);
        this.two = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](2).toRed(this.red);
        // Curve configuration, optional
        this.n = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](conf.n, 16);
        this.g = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromJSON(conf.g, conf.gRed);
        // Temporary arrays
        this._wnafT1 = new Array(4);
        this._wnafT2 = new Array(4);
        this._wnafT3 = new Array(4);
        this._wnafT4 = new Array(4);
        this._bitLength = this.n.bitLength();
        this.redN = this.n.toRed(this.red);
        this.a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](conf.a, 16).toRed(this.red);
        this.b = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](conf.b, 16).toRed(this.red);
        this.tinv = this.two.redInvm();
        this.zeroA = this.a.fromRed().cmpn(0) === 0;
        this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
        // If the curve is endomorphic, precalculate beta and lambda
        this.endo = this._getEndomorphism(conf);
        this._endoWnafT1 = new Array(4);
        this._endoWnafT2 = new Array(4);
    }
    _getEndomorphism(conf) {
        // No efficient endomorphism
        if (!this.zeroA || this.p.modrn(3) !== 1) {
            return;
        }
        // Compute beta and lambda, that lambda * P = (beta * Px; Py)
        let beta;
        let lambda;
        if (conf.beta !== undefined) {
            beta = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](conf.beta, 16).toRed(this.red);
        } else {
            const betas = this._getEndoRoots(this.p);
            if (betas === null) {
                throw new Error('Failed to get endomorphism roots for beta.');
            }
            // Choose the smallest beta
            beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
            beta = beta.toRed(this.red);
        }
        if (conf.lambda !== undefined) {
            lambda = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](conf.lambda, 16);
        } else {
            // Choose the lambda that matches selected beta
            const lambdas = this._getEndoRoots(this.n);
            if (lambdas === null) {
                throw new Error('Failed to get endomorphism roots for lambda.');
            }
            if (this.g == null) {
                throw new Error('Curve generator point (g) is not defined.');
            }
            const gMulX = this.g.mul(lambdas[0])?.x;
            const gXRedMulBeta = this.g.x != null ? this.g.x.redMul(beta) : undefined;
            if (gMulX != null && gXRedMulBeta != null && gMulX.cmp(gXRedMulBeta) === 0) {
                lambda = lambdas[0];
            } else {
                lambda = lambdas[1];
                if (this.g == null) {
                    throw new Error('Curve generator point (g) is not defined.');
                }
                const gMulX = this.g.mul(lambda)?.x;
                const gXRedMulBeta = this.g.x != null ? this.g.x.redMul(beta) : undefined;
                if (gMulX == null || gXRedMulBeta == null) {
                    throw new Error('Lambda computation failed: g.mul(lambda).x or g.x.redMul(beta) is undefined.');
                }
                Curve.assert(gMulX.cmp(gXRedMulBeta) === 0, 'Lambda selection does not match computed beta.');
            }
        }
        // Get basis vectors, used for balanced length-two representation
        let basis;
        if (typeof conf.basis === 'object' && conf.basis !== null) {
            basis = conf.basis.map(function(vec) {
                return {
                    a: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](vec.a, 16),
                    b: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](vec.b, 16)
                };
            });
        } else {
            basis = this._getEndoBasis(lambda);
        }
        return {
            beta,
            lambda,
            basis
        };
    }
    _getEndoRoots(num) {
        // Find roots of for x^2 + x + 1 in F
        // Root = (-1 +- Sqrt(-3)) / 2
        //
        const red = num === this.p ? this.red : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$MontgomoryMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](num);
        const tinv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](2).toRed(red).redInvm();
        const ntinv = tinv.redNeg();
        const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](3).toRed(red).redNeg().redSqrt().redMul(tinv);
        const l1 = ntinv.redAdd(s).fromRed();
        const l2 = ntinv.redSub(s).fromRed();
        return [
            l1,
            l2
        ];
    }
    _getEndoBasis(lambda) {
        // aprxSqrt >= sqrt(this.n)
        const aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
        // 3.74
        // Run EGCD, until r(L + 1) < aprxSqrt
        let u = lambda;
        let v = this.n.clone();
        let x1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1);
        let y1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
        let x2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
        let y2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1);
        // NOTE: all vectors are roots of: a + b * lambda = 0 (mod n)
        let a0;
        let b0;
        // First vector
        let a1;
        let b1;
        // Second vector
        let a2;
        let b2;
        let prevR = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
        let i = 0;
        let r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
        let x = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0); // Ensure x is initialized
        while(u.cmpn(0) !== 0){
            const q = v.div(u);
            r = v.sub(q.mul(u));
            x = x2.sub(q.mul(x1)); // Now TypeScript knows x is always assigned
            const y = y2.sub(q.mul(y1));
            if (a1 === undefined && r.cmp(aprxSqrt) < 0) {
                a0 = prevR.neg();
                b0 = x1;
                a1 = r.neg();
                b1 = x;
            } else if (a1 !== undefined && ++i === 2) {
                break;
            }
            prevR = r;
            v = u;
            u = r;
            x2 = x1;
            x1 = x;
            y2 = y1;
            y1 = y;
        }
        // Ensure a0 and b0 have been assigned
        if (a0 === undefined || b0 === undefined || a1 === undefined || b1 === undefined) {
            throw new Error('Failed to compute Endo Basis values');
        }
        a2 = r.neg();
        b2 = x;
        const len1 = a1.sqr().add(b1.sqr());
        const len2 = a2.sqr().add(b2.sqr());
        if (len2.cmp(len1) >= 0) {
            a2 = a0;
            b2 = b0;
        }
        // Normalize signs
        if (a1.negative !== 0) {
            a1 = a1.neg();
            b1 = b1.neg();
        }
        if (a2.negative !== 0) {
            a2 = a2.neg();
            b2 = b2.neg();
        }
        return [
            {
                a: a1,
                b: b1
            },
            {
                a: a2,
                b: b2
            }
        ];
    }
    _endoSplit(k) {
        if (this.endo == null) {
            throw new Error('Endomorphism is not defined.');
        }
        const basis = this.endo.basis;
        const v1 = basis[0];
        const v2 = basis[1];
        const c1 = v2.b.mul(k).divRound(this.n);
        const c2 = v1.b.neg().mul(k).divRound(this.n);
        const p1 = c1.mul(v1.a);
        const p2 = c2.mul(v2.a);
        const q1 = c1.mul(v1.b);
        const q2 = c2.mul(v2.b);
        // Calculate answer
        const k1 = k.sub(p1).sub(p2);
        const k2 = q1.add(q2).neg();
        return {
            k1,
            k2
        };
    }
    validate(point) {
        if (point.inf) {
            return true;
        }
        const x = point.x;
        const y = point.y;
        // Ensure x and y are not null before proceeding
        if (x === null || y === null) {
            throw new Error('Point coordinates cannot be null');
        }
        const ax = this.a.redMul(x);
        const rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);
        return y.redSqr().redISub(rhs).cmpn(0) === 0;
    }
} //# sourceMappingURL=Curve.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Signature.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Signature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ECDSA.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Curve.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class Signature {
    /**
     * @property Represents the "r" component of the digital signature
     */ r;
    /**
     * @property Represents the "s" component of the digital signature
     */ s;
    /**
     * Takes an array of numbers or a string and returns a new Signature instance.
     * This method will throw an error if the DER encoding is invalid.
     * If a string is provided, it is assumed to represent a hexadecimal sequence.
     *
     * @static
     * @method fromDER
     * @param data - The sequence to decode from DER encoding.
     * @param enc - The encoding of the data string.
     * @returns The decoded data in the form of Signature instance.
     *
     * @example
     * const signature = Signature.fromDER('30440220018c1f5502f8...', 'hex');
     */ static fromDER(data, enc) {
        const getLength = (buf, p)=>{
            const initial = buf[p.place++];
            if ((initial & 0x80) === 0) {
                return initial;
            } else {
                throw new Error('Invalid DER entity length');
            }
        };
        class Position {
            place;
            constructor(){
                this.place = 0;
            }
        }
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(data, enc);
        const p = new Position();
        if (data[p.place++] !== 0x30) {
            throw new Error('Signature DER must start with 0x30');
        }
        const len = getLength(data, p);
        if (len + p.place !== data.length) {
            throw new Error('Signature DER invalid');
        }
        if (data[p.place++] !== 0x02) {
            throw new Error('Signature DER invalid');
        }
        const rlen = getLength(data, p);
        let r = data.slice(p.place, rlen + p.place);
        p.place += rlen;
        if (data[p.place++] !== 0x02) {
            throw new Error('Signature DER invalid');
        }
        const slen = getLength(data, p);
        if (data.length !== slen + p.place) {
            throw new Error('Invalid R-length in signature DER');
        }
        let s = data.slice(p.place, slen + p.place);
        if (r[0] === 0) {
            if ((r[1] & 0x80) !== 0) {
                r = r.slice(1);
            } else {
                throw new Error('Invalid R-value in signature DER');
            }
        }
        if (s[0] === 0) {
            if ((s[1] & 0x80) !== 0) {
                s = s.slice(1);
            } else {
                throw new Error('Invalid S-value in signature DER');
            }
        }
        return new Signature(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](r), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](s));
    }
    /**
     * Takes an array of numbers or a string and returns a new Signature instance.
     * This method will throw an error if the Compact encoding is invalid.
     * If a string is provided, it is assumed to represent a hexadecimal sequence.
     * compactByte value 27-30 means uncompressed public key.
     * 31-34 means compressed public key.
     * The range represents the recovery param which can be 0,1,2,3.
     * We could support recovery functions in future if there's demand.
     *
     * @static
     * @method fromCompact
     * @param data - The sequence to decode from Compact encoding.
     * @param enc - The encoding of the data string.
     * @returns The decoded data in the form of Signature instance.
     *
     * @example
     * const signature = Signature.fromCompact('1b18c1f5502f8...', 'hex');
     */ static fromCompact(data, enc) {
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(data, enc);
        if (data.length !== 65) {
            throw new Error('Invalid Compact Signature');
        }
        const compactByte = data[0];
        if (compactByte < 27 || compactByte >= 35) {
            throw new Error('Invalid Compact Byte');
        }
        return new Signature(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](data.slice(1, 33)), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](data.slice(33, 65)));
    }
    /**
     * Creates an instance of the Signature class.
     *
     * @constructor
     * @param r - The R component of the signature.
     * @param s - The S component of the signature.
     *
     * @example
     * const r = new BigNumber('208755674028...');
     * const s = new BigNumber('564745627577...');
     * const signature = new Signature(r, s);
     */ constructor(r, s){
        this.r = r;
        this.s = s;
    }
    /**
     * Verifies a digital signature.
     *
     * This method will return true if the signature, key, and message hash match.
     * If the data or key do not match the signature, the function returns false.
     *
     * @method verify
     * @param msg - The message to verify.
     * @param key - The public key used to sign the original message.
     * @param enc - The encoding of the msg string.
     * @returns A boolean representing whether the signature is valid.
     *
     * @example
     * const msg = 'The quick brown fox jumps over the lazy dog';
     * const publicKey = PublicKey.fromString('04188ca1050...');
     * const isVerified = signature.verify(msg, publicKey);
     */ verify(msg, key, enc) {
        const msgHash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(msg, enc), 16);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verify"])(msgHash, this, key);
    }
    /**
     * Converts an instance of Signature into DER encoding.
     * An alias for the toDER method.
     *
     * If the encoding parameter is set to 'hex', the function will return a hex string.
     * If 'base64', it will return a base64 string.
     * Otherwise, it will return an array of numbers.
     *
     * @method toDER
     * @param enc - The encoding to use for the output.
     * @returns The current instance in DER encoding.
     *
     * @example
     * const der = signature.toString('base64');
     */ toString(enc) {
        return this.toDER(enc);
    }
    /**
     * Converts an instance of Signature into DER encoding.
     *
     * If the encoding parameter is set to 'hex', the function will return a hex string.
     * If 'base64', it will return a base64 string.
     * Otherwise, it will return an array of numbers.
     *
     * @method toDER
     * @param enc - The encoding to use for the output.
     * @returns The current instance in DER encoding.
     *
     * @example
     * const der = signature.toDER('hex');
     */ toDER(enc) {
        const constructLength = (arr, len)=>{
            if (len < 0x80) {
                arr.push(len);
            } else {
                throw new Error('len must be < 0x80');
            }
        };
        const rmPadding = (buf)=>{
            let i = 0;
            const len = buf.length - 1;
            while(buf[i] === 0 && (buf[i + 1] & 0x80) === 0 && i < len){
                i++;
            }
            if (i === 0) {
                return buf;
            }
            return buf.slice(i);
        };
        let r = this.r.toArray();
        let s = this.s.toArray();
        // Pad values
        if ((r[0] & 0x80) !== 0) {
            r = [
                0
            ].concat(r);
        }
        // Pad values
        if ((s[0] & 0x80) !== 0) {
            s = [
                0
            ].concat(s);
        }
        r = rmPadding(r);
        s = rmPadding(s);
        while(s[0] === 0 && (s[1] & 0x80) === 0){
            s = s.slice(1);
        }
        let arr = [
            0x02
        ];
        constructLength(arr, r.length);
        arr = arr.concat(r);
        arr.push(0x02);
        constructLength(arr, s.length);
        const backHalf = arr.concat(s);
        let res = [
            0x30
        ];
        constructLength(res, backHalf.length);
        res = res.concat(backHalf);
        if (enc === 'hex') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(res);
        } else if (enc === 'base64') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(res);
        } else {
            return res;
        }
    }
    /**
     * Converts an instance of Signature into Compact encoding.
     *
     * If the encoding parameter is set to 'hex', the function will return a hex string.
     * If 'base64', it will return a base64 string.
     * Otherwise, it will return an array of numbers.
     *
     * @method toCompact
     * @param enc - The encoding to use for the output.
     * @returns The current instance in DER encoding.
     *
     * @example
     * const compact = signature.toCompact(3, true, 'base64');
     */ toCompact(recovery, compressed, enc) {
        if (recovery < 0 || recovery > 3) throw new Error('Invalid recovery param');
        if (typeof compressed !== 'boolean') {
            throw new Error('Invalid compressed param');
        }
        let compactByte = 27 + recovery;
        if (compressed) {
            compactByte += 4;
        }
        let arr = [
            compactByte
        ];
        arr = arr.concat(this.r.toArray('be', 32));
        arr = arr.concat(this.s.toArray('be', 32));
        if (enc === 'hex') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(arr);
        } else if (enc === 'base64') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase64"])(arr);
        } else {
            return arr;
        }
    }
    /**
     * Recovers the public key from a signature.
     * This method will return the public key if it finds a valid public key.
     * If it does not find a valid public key, it will throw an error.
     * The recovery factor is a number between 0 and 3.
     * @method RecoverPublicKey
     * @param recovery - The recovery factor.
     * @param e - The message hash.
     * @returns The public key associated with the signature.
     *
     * @example
     * const publicKey = signature.RecoverPublicKey(0, msgHash);
     */ RecoverPublicKey(recovery, e) {
        const r = this.r;
        const s = this.s;
        // A set LSB signifies that the y-coordinate is odd
        const isYOdd = (recovery & 1) !== 0;
        // The more significant bit specifies whether we should use the
        // first or second candidate key.
        const isSecondKey = recovery >> 1;
        const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const n = curve.n;
        const G = curve.g;
        // 1.1 LEt x = r + jn
        const x = isSecondKey !== 0 ? r.add(n) : r;
        const R = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromX(x, isYOdd);
        // 1.4 Check that nR is at infinity
        const nR = R.mul(n);
        if (!nR.isInfinity()) {
            throw new Error('nR is not at infinity');
        }
        // Compute -e from e
        const eNeg = e.neg().umod(n);
        // 1.6.1 Compute Q = r^-1 (sR - eG)
        // Q = r^-1 (sR + -eG)
        const rInv = r.invm(n);
        // const Q = R.multiplyTwo(s, G, eNeg).mul(rInv)
        const srInv = rInv.mul(s).umod(n);
        const eInvrInv = rInv.mul(eNeg).umod(n);
        const Q = G.mul(eInvrInv).add(R.mul(srInv));
        const pubKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](Q);
        pubKey.validate();
        return pubKey;
    }
    /**
     * Calculates the recovery factor which will work for a particular public key and message hash.
     * This method will return the recovery factor if it finds a valid recovery factor.
     * If it does not find a valid recovery factor, it will throw an error.
     * The recovery factor is a number between 0 and 3.
     *
     * @method CalculateRecoveryFactor
     * @param msgHash - The message hash.
     * @returns the recovery factor: number
     * /
     * @example
     * const recovery = signature.CalculateRecoveryFactor(publicKey, msgHash);
     */ CalculateRecoveryFactor(pubkey, msgHash) {
        for(let recovery = 0; recovery < 4; recovery++){
            let Qprime;
            try {
                Qprime = this.RecoverPublicKey(recovery, msgHash);
            } catch  {
                continue;
            }
            if (pubkey.eq(Qprime)) {
                return recovery;
            }
        }
        throw new Error('Unable to find valid recovery factor');
    }
} //# sourceMappingURL=Signature.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/DRBG.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DRBG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
;
;
class DRBG {
    K;
    V;
    constructor(entropy, nonce){
        const entropyBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(entropy, 'hex');
        const nonceBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(nonce, 'hex');
        // RFC 6979 for secp256k1 assumes 256-bit x and h1.
        if (entropyBytes.length !== 32) {
            throw new Error('Entropy must be exactly 32 bytes (256 bits)');
        }
        if (nonceBytes.length !== 32) {
            throw new Error('Nonce must be exactly 32 bytes (256 bits)');
        }
        const seedMaterial = entropyBytes.concat(nonceBytes);
        this.K = new Array(32);
        this.V = new Array(32);
        for(let i = 0; i < 32; i++){
            this.K[i] = 0x00;
            this.V[i] = 0x01;
        }
        this.update(seedMaterial);
    }
    /**
     * Generates HMAC using the K value of the instance. This method is used internally for operations.
     *
     * @method hmac
     * @returns The SHA256HMAC object created with K value.
     *
     * @example
     * const hmac = drbg.hmac();
     */ hmac() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256HMAC"](this.K);
    }
    /**
     * Updates the `K` and `V` values of the instance based on the seed.
     * The seed if not provided uses `V` as seed.
     *
     * @method update
     * @param seed - an optional value that used to update `K` and `V`. Default is `undefined`.
     * @returns Nothing, but updates the internal state `K` and `V` value.
     *
     * @example
     * drbg.update('e13af...');
     */ update(seed) {
        let kmac = this.hmac().update(this.V).update([
            0x00
        ]);
        if (seed !== undefined) {
            kmac = kmac.update(seed);
        }
        this.K = kmac.digest();
        this.V = this.hmac().update(this.V).digest();
        if (seed === undefined) {
            return;
        }
        this.K = this.hmac().update(this.V).update([
            0x01
        ]).update(seed).digest();
        this.V = this.hmac().update(this.V).digest();
    }
    /**
     * Generates deterministic random hexadecimal string of given length.
     * In every generation process, it also updates the internal state `K` and `V`.
     *
     * @method generate
     * @param len - The length of required random number.
     * @returns The required deterministic random hexadecimal string.
     *
     * @example
     * const randomHex = drbg.generate(256);
     */ generate(len) {
        let temp = [];
        while(temp.length < len){
            this.V = this.hmac().update(this.V).digest();
            temp = temp.concat(this.V);
        }
        const res = temp.slice(0, len);
        this.update();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(res);
    }
} //# sourceMappingURL=DRBG.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ECDSA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sign",
    ()=>sign,
    "verify",
    ()=>verify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Curve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$DRBG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/DRBG.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Truncates a BigNumber message to the length of the curve order n, in the context of the Elliptic Curve Digital Signature Algorithm (ECDSA).
 * This method is used as part of ECDSA signing and verification.
 *
 * The method calculates `delta`, which is a difference obtained by subtracting the bit length of the curve order `n` from the byte length of the message in bits.
 * If `delta` is greater than zero, logical shifts msg to the right by `delta`, retaining the sign.
 *
 * Another condition is tested, but only if `truncOnly` is false. This condition compares the value of msg to curve order `n`.
 * If msg is greater or equal to `n`, it is decreased by `n` and returned.
 *
 * @method truncateToN
 * @param msg - The BigNumber message to be truncated.
 * @param truncOnly - An optional boolean parameter that if set to true, the method will only perform truncation of the BigNumber without doing the additional subtraction from the curve order.
 * @returns Returns the truncated BigNumber value, potentially subtracted by the curve order n.
 *
 * @example
 * let msg = new BigNumber('1234567890abcdef', 16);
 * let truncatedMsg = truncateToN(msg);
 */ function truncateToN(msg, truncOnly, curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]()) {
    const delta = msg.byteLength() * 8 - curve.n.bitLength();
    if (delta > 0) {
        msg.iushrn(delta);
    }
    if (truncOnly === null && msg.cmp(curve.n) >= 0) {
        return msg.sub(curve.n);
    } else {
        return msg;
    }
}
function bnToBigInt(bn) {
    const bytes = bn.toArray('be');
    let x = 0n;
    for(let i = 0; i < bytes.length; i++){
        x = x << 8n | BigInt(bytes[i]);
    }
    return x;
}
const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
const bytes = curve.n.byteLength();
const ns1 = curve.n.subn(1);
const halfN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N_BIGINT"] >> 1n;
const sign = (msg, key, forceLowS = false, customK)=>{
    msg = truncateToN(msg);
    const msgBig = bnToBigInt(msg);
    const keyBig = bnToBigInt(key);
    const bkey = key.toArray('be', bytes);
    const nonce = msg.toArray('be', bytes);
    const drbg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$DRBG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](bkey, nonce);
    for(let iter = 0;; iter++){
        let kBN = typeof customK === 'function' ? customK(iter) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(customK) ? customK : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](drbg.generate(bytes), 16);
        if (kBN == null) {
            throw new Error('k is undefined');
        }
        kBN = truncateToN(kBN, true);
        if (kBN.cmpn(1) < 0 || kBN.cmp(ns1) > 0) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(customK)) {
                throw new Error('Invalid fixed custom K value (must be >1 and <N-1)');
            }
            continue;
        }
        const R = curve.g.mulCT(kBN);
        if (R.isInfinity()) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(customK)) {
                throw new Error('Invalid fixed custom K value (k·G at infinity)');
            }
            continue;
        }
        const xAff = BigInt('0x' + R.getX().toString(16));
        const rBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modN"])(xAff);
        if (rBig === 0n) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(customK)) {
                throw new Error('Invalid fixed custom K value (r == 0)');
            }
            continue;
        }
        const kBig = BigInt('0x' + kBN.toString(16));
        const kInv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modInvN"])(kBig);
        const rTimesKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modMulN"])(rBig, keyBig);
        const sum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modN"])(msgBig + rTimesKey);
        let sBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modMulN"])(kInv, sum);
        if (sBig === 0n) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBN(customK)) {
                throw new Error('Invalid fixed custom K value (s == 0)');
            }
            continue;
        }
        if (forceLowS && sBig > halfN) {
            sBig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N_BIGINT"] - sBig;
        }
        const r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](rBig.toString(16), 16);
        const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](sBig.toString(16), 16);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](r, s);
    }
};
const verify = (msg, sig, key)=>{
    // Convert inputs to BigInt
    const hash = bnToBigInt(msg);
    if (key.x == null || key.y == null) {
        throw new Error('Invalid public key: missing coordinates.');
    }
    const publicKey = {
        x: bnToBigInt(key.x),
        y: bnToBigInt(key.y)
    };
    const signature = {
        r: bnToBigInt(sig.r),
        s: bnToBigInt(sig.s)
    };
    const { r, s } = signature;
    const z = hash;
    // Check r and s are in [1, n - 1]
    if (r <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BI_ZERO"] || r >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N_BIGINT"] || s <= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BI_ZERO"] || s >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["N_BIGINT"]) {
        return false;
    }
    // ── compute u₁ = z·s⁻¹ mod n  and  u₂ = r·s⁻¹ mod n ───────────────────────
    const w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modInvN"])(s); // s⁻¹ mod n
    if (w === 0n) return false; // should never happen
    const u1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modMulN"])(z, w);
    const u2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modMulN"])(r, w);
    // ── R = u₁·G + u₂·Q  (Jacobian, window‑NAF) ──────────────────────────────
    const RG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalarMultiplyWNAF"])(u1, {
        x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GX_BIGINT"],
        y: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GY_BIGINT"]
    });
    const RQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalarMultiplyWNAF"])(u2, publicKey);
    const R = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jpAdd"])(RG, RQ);
    if (R.Z === 0n) return false; // point at infinity
    // ── affine x‑coordinate of R  (mod p) ─────────────────────────────────────
    const zInv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["biModInv"])(R.Z); // (Z⁻¹ mod p)
    const zInv2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["biModMul"])(zInv, zInv); // Z⁻²
    const xAff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["biModMul"])(R.X, zInv2); // X / Z²  mod p
    // ── v = xAff mod n  and final check ───────────────────────────────────────
    const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modN"])(xAff);
    return v === r;
}; //# sourceMappingURL=ECDSA.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PublicKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Curve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ECDSA.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class PublicKey extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    /**
     * Static factory method to derive a public key from a private key.
     * It multiplies the generator point 'g' on the elliptic curve by the private key.
     *
     * @static
     * @method fromPrivateKey
     *
     * @param key - The private key from which to derive the public key.
     *
     * @returns Returns the PublicKey derived from the given PrivateKey.
     *
     * @example
     * const myPrivKey = new PrivateKey(...)
     * const myPubKey = PublicKey.fromPrivateKey(myPrivKey)
     */ static fromPrivateKey(key) {
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const p = c.g.mul(key);
        return new PublicKey(p.x, p.y);
    }
    /**
     * Static factory method to create a PublicKey instance from a string.
     *
     * @param str - A string representing a public key.
     *
     * @returns Returns the PublicKey created from the string.
     *
     * @example
     * const myPubKey = PublicKey.fromString("03....")
     */ static fromString(str) {
        const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromString(str);
        return new PublicKey(p.x, p.y);
    }
    /**
     * Static factory method to create a PublicKey instance from a number array.
     *
     * @param bytes - A number array representing a public key.
     *
     * @returns Returns the PublicKey created from the number array.
     *
     * @example
     * const myPubKey = PublicKey.fromString("03....")
     */ static fromDER(bytes) {
        const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDER(bytes);
        return new PublicKey(p.x, p.y);
    }
    /**
     * @constructor
     * @param x - A point or the x-coordinate of the point. May be a number, a BigNumber, a string (which will be interpreted as hex), a number array, or null. If null, an "Infinity" point is constructed.
     * @param y - If x is not a point, the y-coordinate of the point, similar to x.
     * @param isRed - A boolean indicating if the point is a member of the field of integers modulo the k256 prime. Default is true.
     *
     * @example
     * new PublicKey(point1);
     * new PublicKey('abc123', 'def456');
     */ constructor(x, y = null, isRed = true){
        if (x instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            super(x.getX(), x.getY());
        } else {
            // Common gotcha: constructing PublicKey with a DER value when you should use .fromString()
            if (y === null && isRed && typeof x === 'string') {
                if (x.length === 66 || x.length === 130) {
                    throw new Error('You are using the "new PublicKey()" constructor with a DER hex string. You need to use "PublicKey.fromString()" instead.');
                }
            }
            super(x, y, isRed);
        }
    }
    /**
     * Derive a shared secret from a public key and a private key for use in symmetric encryption.
     * This method multiplies the public key (an instance of Point) with a private key.
     *
     * @param priv - The private key to use in deriving the shared secret.
     *
     * @returns Returns the Point representing the shared secret.
     *
     * @throws Will throw an error if the public key is not valid for ECDH secret derivation.
     *
     * @example
     * const myPrivKey = new PrivateKey(...)
     * const sharedSecret = myPubKey.deriveSharedSecret(myPrivKey)
     */ deriveSharedSecret(priv) {
        if (!this.validate()) {
            throw new Error('Public key not valid for ECDH secret derivation');
        }
        return this.mulCT(priv);
    }
    /**
     * Verify a signature of a message using this public key.
     *
     * @param msg - The message to verify. It can be a string or an array of numbers.
     * @param sig - The Signature of the message that needs verification.
     * @param enc - The encoding of the message. It defaults to 'utf8'.
     *
     * @returns Returns true if the signature is verified successfully, otherwise false.
     *
     * @example
     * const myMessage = "Hello, world!"
     * const mySignature = new Signature(...)
     * const isVerified = myPubKey.verify(myMessage, mySignature)
     */ verify(msg, sig, enc) {
        const msgHash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(msg, enc), 16);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verify"])(msgHash, sig, this);
    }
    /**
     * Encode the public key to DER (Distinguished Encoding Rules) format.
     *
     * @returns Returns the DER-encoded public key in number array or string.
     *
     * @param enc - The encoding of the DER string. undefined = number array, 'hex' = hex string.
     *
     * @example
     * const derPublicKey = myPubKey.toDER()
     */ toDER(enc) {
        if (enc === 'hex') return this.encode(true, enc);
        return this.encode(true);
    }
    /**
     * Hash sha256 and ripemd160 of the public key.
     *
     * @returns Returns the hash of the public key.
     *
     * @example
     * const publicKeyHash = pubkey.toHash()
     */ toHash(enc) {
        const pkh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash160"])(this.encode(true));
        if (enc === 'hex') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(pkh);
        }
        return pkh;
    }
    /**
     * Base58Check encodes the hash of the public key with a prefix to indicate locking script type.
     * Defaults to P2PKH for mainnet, otherwise known as a "Bitcoin Address".
     *
     * @param prefix defaults to [0x00] for mainnet, set to [0x6f] for testnet or use the strings 'mainnet' or 'testnet'
     *
     * @returns Returns the address encoding associated with the hash of the public key.
     *
     * @example
     * const address = pubkey.toAddress()
     * const address = pubkey.toAddress('mainnet')
     * const testnetAddress = pubkey.toAddress([0x6f])
     * const testnetAddress = pubkey.toAddress('testnet')
     */ toAddress(prefix = [
        0x00
    ]) {
        if (typeof prefix === 'string') {
            if (prefix === 'testnet' || prefix === 'test') {
                prefix = [
                    0x6f
                ];
            } else if (prefix === 'mainnet' || prefix === 'main') {
                prefix = [
                    0x00
                ];
            } else {
                throw new Error(`Invalid prefix ${prefix}`);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase58Check"])(this.toHash(), prefix);
    }
    /**
     * Derives a child key with BRC-42.
     * @param privateKey The private key of the other party
     * @param invoiceNumber The invoice number used to derive the child key
     * @param cacheSharedSecret Optional function to cache shared secrets
     * @param retrieveCachedSharedSecret Optional function to retrieve shared secrets from the cache
     * @returns The derived child key.
     */ deriveChild(privateKey, invoiceNumber, cacheSharedSecret, retrieveCachedSharedSecret) {
        let sharedSecret;
        if (typeof retrieveCachedSharedSecret === 'function') {
            const retrieved = retrieveCachedSharedSecret(privateKey, this);
            if (typeof retrieved !== 'undefined') {
                sharedSecret = retrieved;
            } else {
                sharedSecret = this.deriveSharedSecret(privateKey);
                if (typeof cacheSharedSecret === 'function') {
                    cacheSharedSecret(privateKey, this, sharedSecret);
                }
            }
        } else {
            sharedSecret = this.deriveSharedSecret(privateKey);
        }
        const invoiceNumberBin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(invoiceNumber, 'utf8');
        const hmac = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256hmac"])(sharedSecret.encode(true), invoiceNumberBin);
        const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const point = curve.g.mul(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](hmac));
        const finalPoint = this.add(point);
        return new PublicKey(finalPoint.x, finalPoint.y);
    }
    /**
     * Takes an array of numbers or a string and returns a new PublicKey instance.
     * This method will throw an error if the Compact encoding is invalid.
     * If a string is provided, it is assumed to represent a hexadecimal sequence.
     * compactByte value 27-30 means uncompressed public key.
     * 31-34 means compressed public key.
     * The range represents the recovery param which can be 0,1,2,3.
     *
     * @static
     * @method fromMsgHashAndCompactSignature
     * @param msgHash - The message hash which was signed.
     * @param signature - The signature in compact format.
     * @param enc - The encoding of the signature string.
     * @returns A PublicKey instance derived from the message hash and compact signature.
     * @example
     * const publicKey = Signature.fromMsgHashAndCompactSignature(msgHash, 'IMOl2mVKfDgsSsHT4uIYBNN4e...', 'base64');
     */ static fromMsgHashAndCompactSignature(msgHash, signature, enc) {
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(signature, enc);
        if (data.length !== 65) {
            throw new Error('Invalid Compact Signature');
        }
        const compactByte = data[0];
        if (compactByte < 27 || compactByte >= 35) {
            throw new Error('Invalid Compact Byte');
        }
        let r = data[0] - 27;
        // NOTE: We don't use uncompressed pubkeys in this library,
        // but whether the key is compressed is captured in the recovery param.
        // Code below is commented out for reference of how you could capture this.
        // let compressed = false
        if (r > 3) {
            // compressed = true
            r -= 4;
        }
        const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](data.slice(1, 33)), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](data.slice(33, 65)));
        return s.RecoverPublicKey(r, msgHash);
    }
} //# sourceMappingURL=PublicKey.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Random number generator that works across modern JavaScript environments.
 *
 * This implementation uses the Web Crypto API which is available in:
 * - Node.js 6+ via require('crypto').randomBytes()
 * - Node.js 18+ via globalThis.crypto
 * - Modern browsers via globalThis.crypto, self.crypto, or window.crypto
 * - Web Workers and Service Workers via self.crypto
 * - Deno and Bun via globalThis.crypto
 *
 * @throws {Error} If no secure random number generator is available
 */ class Rand {
    _rand;
    getRandomValues(obj, n) {
        const arr = new Uint8Array(n);
        obj.crypto.getRandomValues(arr);
        return Array.from(arr);
    }
    constructor(){
        const noRand = ()=>{
            throw new Error('No secure random number generator is available in this environment.');
        };
        this._rand = noRand; // Assign the function
        // Try globalThis.crypto (works in Node.js 18+, modern browsers, and Deno)
        if (typeof globalThis !== 'undefined' && typeof globalThis.crypto?.getRandomValues === 'function') {
            this._rand = (n)=>{
                /* eslint-disable-next-line */ return this.getRandomValues(globalThis, n);
            };
            return;
        }
        // Node.js fallback for versions < 18
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$1_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].release?.name === 'node') {
            try {
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                const crypto = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)");
                if (typeof crypto.randomBytes === 'function') {
                    this._rand = (n)=>{
                        return Array.from(crypto.randomBytes(n));
                    };
                    return;
                }
            } catch (e) {
            // crypto module not available, continue to other checks
            }
        }
        // Try self.crypto (Web Workers and Service Workers)
        if (typeof self !== 'undefined' && typeof self.crypto?.getRandomValues === 'function') {
            this._rand = (n)=>{
                /* eslint-disable-next-line */ return this.getRandomValues(self, n);
            };
            return;
        }
        // Try window.crypto (browsers)
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && typeof window.crypto?.getRandomValues === 'function') {
            this._rand = (n)=>{
                /* eslint-disable-next-line */ return this.getRandomValues(window, n);
            };
            return;
        }
        // No crypto available
        this._rand = noRand;
    }
    generate(len) {
        return this._rand(len);
    }
}
let ayn = null;
const __TURBOPACK__default__export__ = (len)=>{
    if (ayn == null) {
        ayn = new Rand();
    }
    return ayn.generate(len);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=Random.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Polynomial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PointInFiniteField",
    ()=>PointInFiniteField,
    "default",
    ()=>Polynomial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Curve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
;
;
;
;
class PointInFiniteField {
    x;
    y;
    constructor(x, y){
        const P = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]().p; // arithmetic is mod P
        this.x = x.umod(P);
        this.y = y.umod(P);
    }
    toString() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase58"])(this.x.toArray()) + '.' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase58"])(this.y.toArray());
    }
    static fromString(str) {
        const [x, y] = str.split('.');
        return new PointInFiniteField(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase58"])(x)), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase58"])(y)));
    }
}
class Polynomial {
    points;
    threshold;
    constructor(points, threshold){
        this.points = points;
        this.threshold = threshold ?? points.length; // ✅ Handles undefined safely
    }
    static fromPrivateKey(key, threshold) {
        const P = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]().p; // arithmetic is mod P
        // The key is the y-intercept of the polynomial where x=0.
        const points = [
            new PointInFiniteField(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](key.toArray()))
        ];
        // The other values are random
        for(let i = 1; i < threshold; i++){
            const randomX = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(32)).umod(P);
            const randomY = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(32)).umod(P);
            points.push(new PointInFiniteField(randomX, randomY));
        }
        return new Polynomial(points);
    }
    // Evaluate the polynomial at x by using Lagrange interpolation
    valueAt(x) {
        const P = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]().p; // arithmetic is mod P
        let y = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
        for(let i = 0; i < this.threshold; i++){
            let term = this.points[i].y;
            for(let j = 0; j < this.threshold; j++){
                if (i !== j) {
                    const xj = this.points[j].x;
                    const xi = this.points[i].x;
                    const numerator = x.sub(xj).umod(P);
                    const denominator = xi.sub(xj).umod(P);
                    const denominatorInverse = denominator.invm(P);
                    const fraction = numerator.mul(denominatorInverse).umod(P);
                    term = term.mul(fraction).umod(P);
                }
            }
            y = y.add(term).umod(P);
        }
        return y;
    }
} //# sourceMappingURL=Polynomial.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KeyShares",
    ()=>KeyShares,
    "default",
    ()=>PrivateKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Curve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ECDSA.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Polynomial.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class KeyShares {
    points;
    threshold;
    integrity;
    constructor(points, threshold, integrity){
        this.points = points;
        this.threshold = threshold;
        this.integrity = integrity;
    }
    static fromBackupFormat(shares) {
        let threshold = 0;
        let integrity = '';
        const points = shares.map((share, idx)=>{
            const shareParts = share.split('.');
            if (shareParts.length !== 4) {
                throw new Error('Invalid share format in share ' + idx.toString() + '. Expected format: "x.y.t.i" - received ' + share);
            }
            const [x, y, t, i] = shareParts;
            if (t === undefined) throw new Error('Threshold not found in share ' + idx.toString());
            if (i === undefined) throw new Error('Integrity not found in share ' + idx.toString());
            const tInt = parseInt(t);
            if (idx !== 0 && threshold !== tInt) {
                throw new Error('Threshold mismatch in share ' + idx.toString());
            }
            if (idx !== 0 && integrity !== i) {
                throw new Error('Integrity mismatch in share ' + idx.toString());
            }
            threshold = tInt;
            integrity = i;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointInFiniteField"].fromString([
                x,
                y
            ].join('.'));
        });
        return new KeyShares(points, threshold, integrity);
    }
    toBackupFormat() {
        return this.points.map((share)=>share.toString() + '.' + this.threshold.toString() + '.' + this.integrity);
    }
}
class PrivateKey extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    /**
     * Generates a private key randomly.
     *
     * @method fromRandom
     * @static
     * @returns The newly generated Private Key.
     *
     * @example
     * const privateKey = PrivateKey.fromRandom();
     */ static fromRandom() {
        return new PrivateKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(32));
    }
    /**
     * Generates a private key from a string.
     *
     * @method fromString
     * @static
     * @param str - The string to generate the private key from.
     * @param base - The base of the string.
     * @returns The generated Private Key.
     * @throws Will throw an error if the string is not valid.
     **/ static fromString(str, base = 'hex') {
        return new PrivateKey(super.fromString(str, base).toArray());
    }
    /**
     * Generates a private key from a hexadecimal string.
     *
     * @method fromHex
     * @static
     * @param {string} str - The hexadecimal string representing the private key. The string must represent a valid private key in big-endian format.
     * @returns {PrivateKey} The generated Private Key instance.
     * @throws {Error} If the string is not a valid hexadecimal or represents an invalid private key.
     **/ static fromHex(str) {
        return new PrivateKey(super.fromHex(str, 'big'));
    }
    /**
     * Generates a private key from a WIF (Wallet Import Format) string.
     *
     * @method fromWif
     * @static
     * @param wif - The WIF string to generate the private key from.
     * @param base - The base of the string.
     * @returns The generated Private Key.
     * @throws Will throw an error if the string is not a valid WIF.
     **/ static fromWif(wif, prefixLength = 1) {
        const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromBase58Check"])(wif, undefined, prefixLength);
        if (decoded.data.length !== 33) {
            throw new Error('Invalid WIF length');
        }
        if (decoded.data[32] !== 1) {
            throw new Error('Invalid WIF padding');
        }
        return new PrivateKey(decoded.data.slice(0, 32));
    }
    /**
     * @constructor
     *
     * @param number - The number (various types accepted) to construct a BigNumber from. Default is 0.
     *
     * @param base - The base of number provided. By default is 10. Ignored if number is BigNumber.
     *
     * @param endian - The endianness provided. By default is 'big endian'. Ignored if number is BigNumber.
     *
     * @param modN - Optional. Default 'apply. If 'apply', apply modN to input to guarantee a valid PrivateKey. If 'error', if input is out of field throw new Error('Input is out of field'). If 'nocheck', assumes input is in field.
     *
     * @example
     * import PrivateKey from './PrivateKey';
     * import BigNumber from './BigNumber';
     * const privKey = new PrivateKey(new BigNumber('123456', 10, 'be'));
     */ constructor(number = 0, base = 10, endian = 'be', modN = 'apply'){
        if (number instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
            super();
            number.copy(this);
        } else {
            super(number, base, endian);
        }
        if (modN !== 'nocheck') {
            const check = this.checkInField();
            if (!check.inField) {
                if (modN === 'error') {
                    throw new Error('Input is out of field');
                }
                // Force the PrivateKey BigNumber value to lie in the field limited by curve.n
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].move(this, check.modN);
            }
        }
    }
    /**
     * A utility function to check that the value of this PrivateKey lies in the field limited by curve.n
     * @returns { inField, modN } where modN is this PrivateKey's current BigNumber value mod curve.n, and inField is true only if modN equals current BigNumber value.
     */ checkInField() {
        const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const modN = this.mod(curve.n);
        const inField = this.cmp(modN) === 0;
        return {
            inField,
            modN
        };
    }
    /**
     * @returns true if the PrivateKey's current BigNumber value lies in the field limited by curve.n
     */ isValid() {
        return this.checkInField().inField;
    }
    /**
     * Signs a message using the private key.
     *
     * @method sign
     * @param msg - The message (array of numbers or string) to be signed.
     * @param enc - If 'hex' the string will be treated as hex, utf8 otherwise.
     * @param forceLowS - If true (the default), the signature will be forced to have a low S value.
     * @param customK — If provided, uses a custom K-value for the signature. Provie a function that returns a BigNumber, or the BigNumber itself.
     * @returns A digital signature generated from the hash of the message and the private key.
     *
     * @example
     * const privateKey = PrivateKey.fromRandom();
     * const signature = privateKey.sign('Hello, World!');
     */ sign(msg, enc, forceLowS = true, customK) {
        const msgHash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(msg, enc), 16);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sign"])(msgHash, this, forceLowS, customK);
    }
    /**
     * Verifies a message's signature using the public key associated with this private key.
     *
     * @method verify
     * @param msg - The original message which has been signed.
     * @param sig - The signature to be verified.
     * @param enc - The data encoding method.
     * @returns Whether or not the signature is valid.
     *
     * @example
     * const privateKey = PrivateKey.fromRandom();
     * const signature = privateKey.sign('Hello, World!');
     * const isSignatureValid = privateKey.verify('Hello, World!', signature);
     */ verify(msg, sig, enc) {
        const msgHash = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(msg, enc), 16);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verify"])(msgHash, sig, this.toPublicKey());
    }
    /**
     * Converts the private key to its corresponding public key.
     *
     * The public key is generated by multiplying the base point G of the curve and the private key.
     *
     * @method toPublicKey
     * @returns The generated PublicKey.
     *
     * @example
     * const privateKey = PrivateKey.fromRandom();
     * const publicKey = privateKey.toPublicKey();
     */ toPublicKey() {
        const c = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const p = c.g.mulCT(this);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](p.x, p.y);
    }
    /**
     * Converts the private key to a Wallet Import Format (WIF) string.
     *
     * Base58Check encoding is used for encoding the private key.
     * The prefix
     *
     * @method toWif
     * @returns The WIF string.
     *
     * @param prefix defaults to [0x80] for mainnet, set it to [0xef] for testnet.
     *
     * @throws Error('Value is out of field') if current BigNumber value is out of field limited by curve.n
     *
     * @example
     * const privateKey = PrivateKey.fromRandom();
     * const wif = privateKey.toWif();
     * const testnetWif = privateKey.toWif([0xef]);
     */ toWif(prefix = [
        0x80
    ]) {
        if (!this.isValid()) {
            throw new Error('Value is out of field');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBase58Check"])([
            ...this.toArray('be', 32),
            1
        ], prefix);
    }
    /**
     * Base58Check encodes the hash of the public key associated with this private key with a prefix to indicate locking script type.
     * Defaults to P2PKH for mainnet, otherwise known as a "Bitcoin Address".
     *
     * @param prefix defaults to [0x00] for mainnet, set to [0x6f] for testnet or use the strings 'testnet' or 'mainnet'
     *
     * @returns Returns the address encoding associated with the hash of the public key associated with this private key.
     *
     * @example
     * const address = privkey.toAddress()
     * const address = privkey.toAddress('mainnet')
     * const testnetAddress = privkey.toAddress([0x6f])
     * const testnetAddress = privkey.toAddress('testnet')
     */ toAddress(prefix = [
        0x00
    ]) {
        return this.toPublicKey().toAddress(prefix);
    }
    /**
     * Converts this PrivateKey to a hexadecimal string.
     *
     * @method toHex
     * @param length - The minimum length of the hex string
     * @returns Returns a string representing the hexadecimal value of this BigNumber.
     *
     * @example
     * const bigNumber = new BigNumber(255);
     * const hex = bigNumber.toHex();
     */ toHex() {
        return super.toHex(32);
    }
    /**
     * Converts this PrivateKey to a string representation.
     *
     * @method toString
     * @param {number | 'hex'} [base='hex'] - The base for representing the number. Default is hexadecimal ('hex').
     * @param {number} [padding=64] - The minimum number of digits for the output string. Default is 64, ensuring a 256-bit representation in hexadecimal.
     * @returns {string} A string representation of the PrivateKey in the specified base, padded to the specified length.
     *
     **/ toString(base = 'hex', padding = 64) {
        return super.toString(base, padding);
    }
    /**
     * Derives a shared secret from the public key.
     *
     * @method deriveSharedSecret
     * @param key - The public key to derive the shared secret from.
     * @returns The derived shared secret (a point on the curve).
     * @throws Will throw an error if the public key is not valid.
     *
     * @example
     * const privateKey = PrivateKey.fromRandom();
     * const publicKey = privateKey.toPublicKey();
     * const sharedSecret = privateKey.deriveSharedSecret(publicKey);
     */ deriveSharedSecret(key) {
        if (!key.validate()) {
            throw new Error('Public key not valid for ECDH secret derivation');
        }
        return key.mulCT(this);
    }
    /**
     * SECURITY NOTE – DETERMINISTIC CHILD KEY DERIVATION
     *
     * This method derives child private keys deterministically from the caller’s
     * long-term private key, the counterparty’s public key, and a caller-supplied
     * invoice number using HMAC over an ECDH shared secret (BRC-42 style derivation).
     *
     * This construction does NOT implement a formally authenticated key exchange
     * (AKE) and does NOT provide the following security properties:
     *
     *  - Forward secrecy: Compromise of a long-term private key compromises all
     *    past and future child keys derived from it.
     *  - Replay protection: Child keys are deterministic for a given invoice
     *    number and key pair; previously observed messages can be replayed.
     *  - Explicit authentication / identity binding: Possession of a public key
     *    alone does not guarantee the intended peer identity, enabling potential
     *    identity misbinding attacks if higher-level identity verification is absent.
     *
     * This derivation is intended for lightweight, deterministic key hierarchies
     * where both parties already possess and trust each other’s long-term public
     * keys. It SHOULD NOT be used as a drop-in replacement for a standard
     * authenticated key exchange (e.g. X3DH, Noise, or SIGMA) in high-security or
     * high-value contexts.
     *
     * Any future protocol providing forward secrecy, replay protection, or strong
     * peer authentication will require a versioned, breaking change.
     */ /**
     * Derives a child key with BRC-42.
     * @param publicKey The public key of the other party
     * @param invoiceNumber The invoice number used to derive the child key
     * @param cacheSharedSecret Optional function to cache shared secrets
     * @param retrieveCachedSharedSecret Optional function to retrieve shared secrets from the cache
     * @returns The derived child key.
     */ deriveChild(publicKey, invoiceNumber, cacheSharedSecret, retrieveCachedSharedSecret) {
        let sharedSecret;
        if (typeof retrieveCachedSharedSecret === 'function') {
            const retrieved = retrieveCachedSharedSecret(this, publicKey);
            if (typeof retrieved !== 'undefined') {
                sharedSecret = retrieved;
            } else {
                sharedSecret = this.deriveSharedSecret(publicKey);
                if (typeof cacheSharedSecret === 'function') {
                    cacheSharedSecret(this, publicKey, sharedSecret);
                }
            }
        } else {
            sharedSecret = this.deriveSharedSecret(publicKey);
        }
        const invoiceNumberBin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(invoiceNumber, 'utf8');
        const hmac = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256hmac"])(sharedSecret.encode(true), invoiceNumberBin);
        const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        return new PrivateKey(this.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](hmac)).mod(curve.n).toArray());
    }
    /**
     * Splits the private key into shares using Shamir's Secret Sharing Scheme.
     *
     * @param threshold The minimum number of shares required to reconstruct the private key.
     * @param totalShares The total number of shares to generate.
     * @param prime The prime number to be used in Shamir's Secret Sharing Scheme.
     * @returns An array of shares.
     *
     * @example
     * const key = PrivateKey.fromRandom()
     * const shares = key.toKeyShares(2, 5)
     */ toKeyShares(threshold, totalShares) {
        if (typeof threshold !== 'number' || typeof totalShares !== 'number') {
            throw new Error('threshold and totalShares must be numbers');
        }
        if (threshold < 2) throw new Error('threshold must be at least 2');
        if (totalShares < 2) throw new Error('totalShares must be at least 2');
        if (threshold > totalShares) {
            throw new Error('threshold should be less than or equal to totalShares');
        }
        const poly = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromPrivateKey(this, threshold);
        const points = [];
        const usedXCoordinates = new Set();
        const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        /**
         * Cryptographically secure x-coordinate generation for Shamir's Secret Sharing (toKeyShares)
         *
         * - Each x-coordinate is derived using a master seed (Random(64)) as the HMAC key and a per-attempt counter array as the message.
         * - The counter array includes the share index, the attempt number (to handle rare collisions), and 32 bytes of fresh randomness for each attempt.
         * - This ensures:
         *   1. **Non-determinism**: Each split is unique, even for the same key and parameters, due to the per-attempt randomness.
         *   2. **Uniqueness**: x-coordinates are checked for zero and duplication; retry logic ensures no repeats or invalid values.
         *   3. **Cryptographic strength**: HMAC-SHA-512 is robust, and combining deterministic and random values protects against RNG compromise or bias.
         *   4. **Defensive programming**: Attempts are capped (5 per share) to prevent infinite loops in pathological cases.
         *
         * This approach is robust against all practical attacks and is suitable for high-security environments where deterministic splits are not desired.
         */ const seed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(64);
        for(let i = 0; i < totalShares; i++){
            let x;
            let attempts = 0;
            do {
                // To ensure no two points are ever the same, even if the system RNG is compromised,
                // we'll use a different counter value for each point and use SHA-512 HMAC.
                const counter = [
                    i,
                    attempts,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(32)
                ];
                const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha512hmac"])(seed, counter);
                x = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](h).umod(curve.p);
                // repeat generation if x is zero or has already been used (insanely unlikely)
                attempts++;
                if (attempts > 5) {
                    throw new Error('Failed to generate unique x coordinate after 5 attempts');
                }
            }while (x.isZero() || usedXCoordinates.has(x.toString()))
            usedXCoordinates.add(x.toString());
            const y = poly.valueAt(x);
            points.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointInFiniteField"](x, y));
        }
        const integrity = this.toPublicKey().toHash('hex').slice(0, 8);
        return new KeyShares(points, threshold, integrity);
    }
    /**
     * @method toBackupShares
     *
     * Creates a backup of the private key by splitting it into shares.
     *
     *
     * @param threshold The number of shares which will be required to reconstruct the private key.
     * @param totalShares The number of shares to generate for distribution.
     * @returns
     */ toBackupShares(threshold, totalShares) {
        return this.toKeyShares(threshold, totalShares).toBackupFormat();
    }
    /**
     *
     * @method fromBackupShares
     *
     * Creates a private key from backup shares.
     *
     * @param shares
     * @returns PrivateKey
     *
     * @example
     *
     * const share1 = '3znuzt7DZp8HzZTfTh5MF9YQKNX3oSxTbSYmSRGrH2ev.2Nm17qoocmoAhBTCs8TEBxNXCskV9N41rB2PckcgYeqV.2.35449bb9'
     * const share2 = 'Cm5fuUc39X5xgdedao8Pr1kvCSm8Gk7Cfenc7xUKcfLX.2juyK9BxCWn2DiY5JUAgj9NsQ77cc9bWksFyW45haXZm.2.35449bb9'
     *
     * const recoveredKey = PrivateKey.fromBackupShares([share1, share2])
     */ static fromBackupShares(shares) {
        return PrivateKey.fromKeyShares(KeyShares.fromBackupFormat(shares));
    }
    /**
     * Combines shares to reconstruct the private key.
     *
     * @param shares An array of points (shares) to be used to reconstruct the private key.
     * @param threshold The minimum number of shares required to reconstruct the private key.
     *
     * @returns The reconstructed private key.
     *
     **/ static fromKeyShares(keyShares) {
        const { points, threshold, integrity } = keyShares;
        if (threshold < 2) throw new Error('threshold must be at least 2');
        if (points.length < threshold) {
            throw new Error(`At least ${threshold} shares are required to reconstruct the private key`);
        }
        // check to see if two points have the same x value
        for(let i = 0; i < threshold; i++){
            for(let j = i + 1; j < threshold; j++){
                if (points[i].x.eq(points[j].x)) {
                    throw new Error('Duplicate share detected, each must be unique.');
                }
            }
        }
        const poly = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](points, threshold);
        const privateKey = new PrivateKey(poly.valueAt(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0)).toArray());
        const integrityHash = privateKey.toPublicKey().toHash('hex').slice(0, 8);
        if (integrityHash !== integrity) {
            throw new Error('Integrity hash mismatch');
        }
        return privateKey;
    }
} //# sourceMappingURL=PrivateKey.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/AESGCM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AES",
    ()=>AES,
    "AESGCM",
    ()=>AESGCM,
    "AESGCMDecrypt",
    ()=>AESGCMDecrypt,
    "checkBit",
    ()=>checkBit,
    "exclusiveOR",
    ()=>exclusiveOR,
    "getBytes",
    ()=>getBytes,
    "getBytes64",
    ()=>getBytes64,
    "ghash",
    ()=>ghash,
    "incrementLeastSignificantThirtyTwoBits",
    ()=>incrementLeastSignificantThirtyTwoBits,
    "multiply",
    ()=>multiply,
    "rightShift",
    ()=>rightShift
]);
// @ts-nocheck
// NOTE:
// Table-based AES is intentionally retained for performance.
// JavaScript runtimes (JIT, GC, speculative execution) cannot provide
// strong constant-time guarantees, and arithmetic-only AES implementations
// cause catastrophic performance degradation in practice.
//
// This implementation therefore prioritizes correctness, performance,
// and compatibility over attempting misleading "constant-time" behavior.
//
// Applications requiring strict side-channel resistance SHOULD use
// platform-native crypto APIs (e.g. WebCrypto) or audited native libraries.
/**
 * SECURITY DISCLAIMER – AES-GCM IMPLEMENTATION
 *
 * This module provides a self-contained AES-GCM implementation intended for
 * functional correctness and portability with minimal dependencies.
 *
 * While efforts are made to reduce timing side-channel leakage (e.g. avoiding
 * secret-dependent branches in GHASH), JavaScript does not guarantee
 * constant-time execution. As such, this implementation should not be used in
 * environments where attackers can reliably measure fine-grained execution
 * timing (e.g. shared hosts, co-resident VMs, or untrusted browser contexts).
 *
 * For high-assurance cryptographic use cases, prefer platform-provided
 * WebCrypto APIs or well-audited constant-time libraries.
 */ const SBox = new Uint8Array([
    0x63,
    0x7c,
    0x77,
    0x7b,
    0xf2,
    0x6b,
    0x6f,
    0xc5,
    0x30,
    0x01,
    0x67,
    0x2b,
    0xfe,
    0xd7,
    0xab,
    0x76,
    0xca,
    0x82,
    0xc9,
    0x7d,
    0xfa,
    0x59,
    0x47,
    0xf0,
    0xad,
    0xd4,
    0xa2,
    0xaf,
    0x9c,
    0xa4,
    0x72,
    0xc0,
    0xb7,
    0xfd,
    0x93,
    0x26,
    0x36,
    0x3f,
    0xf7,
    0xcc,
    0x34,
    0xa5,
    0xe5,
    0xf1,
    0x71,
    0xd8,
    0x31,
    0x15,
    0x04,
    0xc7,
    0x23,
    0xc3,
    0x18,
    0x96,
    0x05,
    0x9a,
    0x07,
    0x12,
    0x80,
    0xe2,
    0xeb,
    0x27,
    0xb2,
    0x75,
    0x09,
    0x83,
    0x2c,
    0x1a,
    0x1b,
    0x6e,
    0x5a,
    0xa0,
    0x52,
    0x3b,
    0xd6,
    0xb3,
    0x29,
    0xe3,
    0x2f,
    0x84,
    0x53,
    0xd1,
    0x00,
    0xed,
    0x20,
    0xfc,
    0xb1,
    0x5b,
    0x6a,
    0xcb,
    0xbe,
    0x39,
    0x4a,
    0x4c,
    0x58,
    0xcf,
    0xd0,
    0xef,
    0xaa,
    0xfb,
    0x43,
    0x4d,
    0x33,
    0x85,
    0x45,
    0xf9,
    0x02,
    0x7f,
    0x50,
    0x3c,
    0x9f,
    0xa8,
    0x51,
    0xa3,
    0x40,
    0x8f,
    0x92,
    0x9d,
    0x38,
    0xf5,
    0xbc,
    0xb6,
    0xda,
    0x21,
    0x10,
    0xff,
    0xf3,
    0xd2,
    0xcd,
    0x0c,
    0x13,
    0xec,
    0x5f,
    0x97,
    0x44,
    0x17,
    0xc4,
    0xa7,
    0x7e,
    0x3d,
    0x64,
    0x5d,
    0x19,
    0x73,
    0x60,
    0x81,
    0x4f,
    0xdc,
    0x22,
    0x2a,
    0x90,
    0x88,
    0x46,
    0xee,
    0xb8,
    0x14,
    0xde,
    0x5e,
    0x0b,
    0xdb,
    0xe0,
    0x32,
    0x3a,
    0x0a,
    0x49,
    0x06,
    0x24,
    0x5c,
    0xc2,
    0xd3,
    0xac,
    0x62,
    0x91,
    0x95,
    0xe4,
    0x79,
    0xe7,
    0xc8,
    0x37,
    0x6d,
    0x8d,
    0xd5,
    0x4e,
    0xa9,
    0x6c,
    0x56,
    0xf4,
    0xea,
    0x65,
    0x7a,
    0xae,
    0x08,
    0xba,
    0x78,
    0x25,
    0x2e,
    0x1c,
    0xa6,
    0xb4,
    0xc6,
    0xe8,
    0xdd,
    0x74,
    0x1f,
    0x4b,
    0xbd,
    0x8b,
    0x8a,
    0x70,
    0x3e,
    0xb5,
    0x66,
    0x48,
    0x03,
    0xf6,
    0x0e,
    0x61,
    0x35,
    0x57,
    0xb9,
    0x86,
    0xc1,
    0x1d,
    0x9e,
    0xe1,
    0xf8,
    0x98,
    0x11,
    0x69,
    0xd9,
    0x8e,
    0x94,
    0x9b,
    0x1e,
    0x87,
    0xe9,
    0xce,
    0x55,
    0x28,
    0xdf,
    0x8c,
    0xa1,
    0x89,
    0x0d,
    0xbf,
    0xe6,
    0x42,
    0x68,
    0x41,
    0x99,
    0x2d,
    0x0f,
    0xb0,
    0x54,
    0xbb,
    0x16
]);
const Rcon = [
    [
        0x00,
        0x00,
        0x00,
        0x00
    ],
    [
        0x01,
        0x00,
        0x00,
        0x00
    ],
    [
        0x02,
        0x00,
        0x00,
        0x00
    ],
    [
        0x04,
        0x00,
        0x00,
        0x00
    ],
    [
        0x08,
        0x00,
        0x00,
        0x00
    ],
    [
        0x10,
        0x00,
        0x00,
        0x00
    ],
    [
        0x20,
        0x00,
        0x00,
        0x00
    ],
    [
        0x40,
        0x00,
        0x00,
        0x00
    ],
    [
        0x80,
        0x00,
        0x00,
        0x00
    ],
    [
        0x1b,
        0x00,
        0x00,
        0x00
    ],
    [
        0x36,
        0x00,
        0x00,
        0x00
    ]
].map(_c = (v)=>new Uint8Array(v));
_c1 = Rcon;
const mul2 = new Uint8Array(256);
const mul3 = new Uint8Array(256);
for(let i = 0; i < 256; i++){
    const m2 = (i << 1 ^ ((i & 0x80) !== 0 ? 0x1b : 0)) & 0xff;
    mul2[i] = m2;
    mul3[i] = m2 ^ i;
}
function mixColumnsFast(state) {
    for(let c = 0; c < 4; c++){
        const s0 = state[0][c];
        const s1 = state[1][c];
        const s2 = state[2][c];
        const s3 = state[3][c];
        state[0][c] = mul2[s0] ^ mul3[s1] ^ s2 ^ s3;
        state[1][c] = s0 ^ mul2[s1] ^ mul3[s2] ^ s3;
        state[2][c] = s0 ^ s1 ^ mul2[s2] ^ mul3[s3];
        state[3][c] = mul3[s0] ^ s1 ^ s2 ^ mul2[s3];
    }
}
function addRoundKey(state, roundKeyArray, offset) {
    for(let c = 0; c < 4; c++){
        const keyCol = roundKeyArray[offset + c];
        for(let r = 0; r < 4; r++){
            state[r][c] ^= keyCol[r];
        }
    }
}
function subBytes(state) {
    for(let r = 0; r < 4; r++){
        for(let c = 0; c < 4; c++){
            state[r][c] = SBox[state[r][c]];
        }
    }
}
function subWord(value) {
    for(let i = 0; i < 4; i++){
        value[i] = SBox[value[i]];
    }
}
function rotWord(value) {
    const temp = value[0];
    value[0] = value[1];
    value[1] = value[2];
    value[2] = value[3];
    value[3] = temp;
}
function shiftRows(state) {
    let tmp = state[1][0];
    state[1][0] = state[1][1];
    state[1][1] = state[1][2];
    state[1][2] = state[1][3];
    state[1][3] = tmp;
    tmp = state[2][0];
    const tmp2 = state[2][1];
    state[2][0] = state[2][2];
    state[2][1] = state[2][3];
    state[2][2] = tmp;
    state[2][3] = tmp2;
    tmp = state[3][3];
    state[3][3] = state[3][2];
    state[3][2] = state[3][1];
    state[3][1] = state[3][0];
    state[3][0] = tmp;
}
function keyExpansion(roundLimit, key) {
    const nK = key.length / 4;
    const result = [];
    for(let i = 0; i < key.length; i++){
        if (i % 4 === 0) result.push([]);
        result[i >> 2].push(key[i]);
    }
    for(let i = nK; i < 4 * roundLimit; i++){
        result[i] = [];
        const temp = result[i - 1].slice();
        if (i % nK === 0) {
            rotWord(temp);
            subWord(temp);
            const r = Rcon[i / nK];
            for(let j = 0; j < 4; j++){
                temp[j] ^= r[j];
            }
        } else if (nK > 6 && i % nK === 4) {
            subWord(temp);
        }
        for(let j = 0; j < 4; j++){
            result[i][j] = result[i - nK][j] ^ temp[j];
        }
    }
    return result;
}
function AES(input, key) {
    let i;
    let j;
    let round;
    let roundLimit;
    const state = [
        [],
        [],
        [],
        []
    ];
    const output = [];
    const ekey = Array.from(key);
    if (ekey.length === 16) {
        roundLimit = 11;
    } else if (ekey.length === 24) {
        roundLimit = 13;
    } else if (ekey.length === 32) {
        roundLimit = 15;
    } else {
        throw new Error('Illegal key length: ' + String(ekey.length));
    }
    const w = keyExpansion(roundLimit, ekey);
    for(let c = 0; c < 4; c++){
        state[0][c] = input[c * 4];
        state[1][c] = input[c * 4 + 1];
        state[2][c] = input[c * 4 + 2];
        state[3][c] = input[c * 4 + 3];
    }
    addRoundKey(state, w, 0);
    for(round = 1; round < roundLimit; round++){
        subBytes(state);
        shiftRows(state);
        if (round + 1 < roundLimit) {
            mixColumnsFast(state);
        }
        addRoundKey(state, w, round * 4);
    }
    for(i = 0; i < 4; i++){
        for(j = 0; j < 4; j++){
            output.push(state[j][i]);
        }
    }
    return output;
}
_c2 = AES;
const checkBit = function(byteArray, byteIndex, bitIndex) {
    return (byteArray[byteIndex] & 0x01 << bitIndex) !== 0 ? 1 : 0;
};
const getBytes = function(numericValue) {
    return [
        (numericValue & 0xFF000000) >>> 24,
        (numericValue & 0x00FF0000) >> 16,
        (numericValue & 0x0000FF00) >> 8,
        numericValue & 0x000000FF
    ];
};
const getBytes64 = function(numericValue) {
    if (numericValue < 0 || numericValue > Number.MAX_SAFE_INTEGER) {
        throw new Error('getBytes64: value out of range');
    }
    const hi = Math.floor(numericValue / 0x100000000);
    const lo = numericValue >>> 0;
    return [
        hi >>> 24 & 0xFF,
        hi >>> 16 & 0xFF,
        hi >>> 8 & 0xFF,
        hi & 0xFF,
        lo >>> 24 & 0xFF,
        lo >>> 16 & 0xFF,
        lo >>> 8 & 0xFF,
        lo & 0xFF
    ];
};
const createZeroBlock = function(length) {
    // Uint8Array is already zero-filled
    return new Uint8Array(length);
};
// R = 0xe1 || 15 zero bytes
const R = (()=>{
    const r = new Uint8Array(16);
    r[0] = 0xe1;
    return r;
})();
const concatBytes = (...arrays)=>{
    let total = 0;
    for (const a of arrays)total += a.length;
    const out = new Uint8Array(total);
    let offset = 0;
    for (const a of arrays){
        out.set(a, offset);
        offset += a.length;
    }
    return out;
};
const exclusiveOR = function(block0, block1) {
    const len = block0.length;
    const result = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        result[i] = block0[i] ^ (block1[i] ?? 0);
    }
    return result;
};
const rightShift = function(block) {
    let carry = 0;
    let oldCarry = 0;
    for(let i = 0; i < block.length; i++){
        oldCarry = carry;
        carry = block[i] & 0x01;
        block[i] = block[i] >> 1;
        if (oldCarry !== 0) {
            block[i] = block[i] | 0x80;
        }
    }
    return block;
};
const multiply = function(block0, block1) {
    const v = block1.slice();
    const z = createZeroBlock(16);
    for(let i = 0; i < 16; i++){
        const b = block0[i];
        for(let j = 7; j >= 0; j--){
            // mask = 0xff if bit is set, 0x00 otherwise
            const bit = b >> j & 1;
            const mask = -bit & 0xff;
            // z ^= v & mask
            for(let k = 0; k < 16; k++){
                z[k] ^= v[k] & mask;
            }
            // compute reduction mask
            const lsb = v[15] & 1;
            const rmask = -lsb & 0xff;
            rightShift(v);
            // v ^= R & rmask
            for(let k = 0; k < 16; k++){
                v[k] ^= R[k] & rmask;
            }
        }
    }
    return z;
};
const incrementLeastSignificantThirtyTwoBits = function(block) {
    const result = block.slice();
    for(let i = 15; i > 11; i--){
        result[i] = result[i] + 1 & 0xff; // wrap explicitly
        if (result[i] !== 0) {
            break;
        }
    }
    return result;
};
function ghash(input, hashSubKey) {
    let result = createZeroBlock(16);
    const block = new Uint8Array(16);
    for(let i = 0; i < input.length; i += 16){
        block.set(result);
        for(let j = 0; j < 16; j++){
            block[j] ^= input[i + j] ?? 0;
        }
        result = multiply(block, hashSubKey);
    }
    return result;
}
function gctr(input, initialCounterBlock, key) {
    if (input.length === 0) return new Uint8Array(0);
    const output = new Uint8Array(input.length);
    let counterBlock = initialCounterBlock.slice();
    let pos = 0;
    const n = Math.ceil(input.length / 16);
    for(let i = 0; i < n; i++){
        const counter = AES(counterBlock, key);
        const chunk = Math.min(16, input.length - pos);
        for(let j = 0; j < chunk; j++){
            output[pos] = input[pos] ^ counter[j];
            pos++;
        }
        if (i + 1 < n) {
            counterBlock = incrementLeastSignificantThirtyTwoBits(counterBlock);
        }
    }
    return output;
}
function buildAuthInput(cipherText) {
    const aadLenBits = 0;
    const ctLenBits = cipherText.length * 8;
    let padLen;
    if (cipherText.length === 0) {
        padLen = 16;
    } else if (cipherText.length % 16 === 0) {
        padLen = 0;
    } else {
        padLen = 16 - cipherText.length % 16;
    }
    const total = 16 + cipherText.length + padLen + 16;
    const out = new Uint8Array(total);
    let offset = 0;
    offset += 16;
    out.set(cipherText, offset);
    offset += cipherText.length;
    offset += padLen;
    const aadLen = getBytes64(aadLenBits);
    out.set(aadLen, offset);
    offset += 8;
    const ctLen = getBytes64(ctLenBits);
    out.set(ctLen, offset);
    return out;
}
function AESGCM(plainText, initializationVector, key) {
    if (initializationVector.length === 0) {
        throw new Error('Initialization vector must not be empty');
    }
    if (key.length === 0) {
        throw new Error('Key must not be empty');
    }
    const hashSubKey = new Uint8Array(AES(createZeroBlock(16), key));
    let preCounterBlock;
    if (initializationVector.length === 12) {
        preCounterBlock = concatBytes(initializationVector, createZeroBlock(3), new Uint8Array([
            0x01
        ]));
    } else {
        let ivPadded = initializationVector;
        if (ivPadded.length % 16 !== 0) {
            ivPadded = concatBytes(ivPadded, createZeroBlock(16 - ivPadded.length % 16));
        }
        const lenBlock = getBytes64(initializationVector.length * 8);
        const s = concatBytes(ivPadded, createZeroBlock(8), new Uint8Array(lenBlock));
        preCounterBlock = ghash(s, hashSubKey);
    }
    const cipherText = gctr(plainText, incrementLeastSignificantThirtyTwoBits(preCounterBlock), key);
    const authInput = buildAuthInput(cipherText);
    const s = ghash(authInput, hashSubKey);
    const authenticationTag = gctr(s, preCounterBlock, key);
    return {
        result: cipherText,
        authenticationTag
    };
}
_c3 = AESGCM;
function AESGCMDecrypt(cipherText, initializationVector, authenticationTag, key) {
    if (cipherText.length === 0) {
        throw new Error('Cipher text must not be empty');
    }
    if (initializationVector.length === 0) {
        throw new Error('Initialization vector must not be empty');
    }
    if (key.length === 0) {
        throw new Error('Key must not be empty');
    }
    // Generate the hash subkey
    const hashSubKey = new Uint8Array(AES(createZeroBlock(16), key));
    let preCounterBlock;
    if (initializationVector.length === 12) {
        preCounterBlock = concatBytes(initializationVector, createZeroBlock(3), new Uint8Array([
            0x01
        ]));
    } else {
        let ivPadded = initializationVector;
        if (ivPadded.length % 16 !== 0) {
            ivPadded = concatBytes(ivPadded, createZeroBlock(16 - ivPadded.length % 16));
        }
        const lenBlock = getBytes64(initializationVector.length * 8);
        const s = concatBytes(ivPadded, createZeroBlock(8), new Uint8Array(lenBlock));
        preCounterBlock = ghash(s, hashSubKey);
    }
    // Decrypt to obtain the plain text
    const plainText = gctr(cipherText, incrementLeastSignificantThirtyTwoBits(preCounterBlock), key);
    const authInput = buildAuthInput(cipherText);
    const s = ghash(authInput, hashSubKey);
    const calculatedTag = gctr(s, preCounterBlock, key);
    if (calculatedTag.length !== authenticationTag.length) {
        return null;
    }
    let diff = 0;
    for(let i = 0; i < calculatedTag.length; i++){
        diff |= calculatedTag[i] ^ authenticationTag[i];
    }
    if (diff !== 0) {
        return null;
    }
    return plainText;
} //# sourceMappingURL=AESGCM.js.map
_c4 = AESGCMDecrypt;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Rcon$[\n    [0x00, 0x00, 0x00, 0x00], [0x01, 0x00, 0x00, 0x00], [0x02, 0x00, 0x00, 0x00], [0x04, 0x00, 0x00, 0x00],\n    [0x08, 0x00, 0x00, 0x00], [0x10, 0x00, 0x00, 0x00], [0x20, 0x00, 0x00, 0x00], [0x40, 0x00, 0x00, 0x00],\n    [0x80, 0x00, 0x00, 0x00], [0x1b, 0x00, 0x00, 0x00], [0x36, 0x00, 0x00, 0x00]\n].map");
__turbopack_context__.k.register(_c1, "Rcon");
__turbopack_context__.k.register(_c2, "AES");
__turbopack_context__.k.register(_c3, "AESGCM");
__turbopack_context__.k.register(_c4, "AESGCMDecrypt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/SymmetricKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SymmetricKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$AESGCM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/AESGCM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
;
;
;
;
class SymmetricKey extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    /**
     * Generates a symmetric key randomly.
     *
     * @method fromRandom
     * @static
     * @returns The newly generated Symmetric Key.
     *
     * @example
     * const symmetricKey = SymmetricKey.fromRandom();
     */ static fromRandom() {
        return new SymmetricKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(32));
    }
    /**
     * Encrypts a given message using AES-GCM encryption.
     * The generated Initialization Vector (IV) is attached to the encrypted message for decryption purposes.
     * The OpenSSL format of |IV|encryptedContent|authTag| is used.
     *
     * @method encrypt
     * @param msg - The message to be encrypted. It can be a string or an array of numbers.
     * @param enc - optional. The encoding of the message. If hex, the string is assumed to be hex, UTF-8 otherwise.
     * @returns Returns the encrypted message as a string or an array of numbers, depending on `enc` argument.
     *
     * @example
     * const key = new SymmetricKey(1234);
     * const encryptedMessage = key.encrypt('plainText', 'utf8');
     */ encrypt(msg, enc) {
        const iv = new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(32));
        const msgBytes = new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(msg, enc));
        const keyBytes = new Uint8Array(this.toArray('be', 32));
        const { result, authenticationTag } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$AESGCM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AESGCM"])(msgBytes, iv, keyBytes);
        const totalLength = iv.length + result.length + authenticationTag.length;
        const combined = new Uint8Array(totalLength);
        let offset = 0;
        combined.set(iv, offset);
        offset += iv.length;
        combined.set(result, offset);
        offset += result.length;
        combined.set(authenticationTag, offset);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(Array.from(combined), enc);
    }
    /**
     * Decrypts a given AES-GCM encrypted message using the same key that was used for encryption.
     * The method extracts the IV and the authentication tag from the encrypted message, then attempts to decrypt it.
     * If the decryption fails (e.g., due to message tampering), an error is thrown.
     *
     * @method decrypt
     * @param msg - The encrypted message to be decrypted. It can be a string or an array of numbers.
     * @param enc - optional. The encoding of the message (if no encoding is provided, uses utf8 for strings, unless specified as hex).
     * @returns Returns the decrypted message as a string or an array of numbers, depending on `enc` argument. If absent, an array of numbers is returned.
     *
     * @example
     * const key = new SymmetricKey(1234);
     * const decryptedMessage = key.decrypt(encryptedMessage, 'utf8');
     *
     * @throws {Error} Will throw an error if the decryption fails, likely due to message tampering or incorrect decryption key.
     */ decrypt(msg, enc) {
        const msgBytes = new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(msg, enc));
        const ivLength = 32;
        const tagLength = 16;
        if (msgBytes.length < ivLength + tagLength) {
            throw new Error('Ciphertext too short');
        }
        const iv = msgBytes.slice(0, ivLength);
        const tagStart = msgBytes.length - tagLength;
        const ciphertext = msgBytes.slice(ivLength, tagStart);
        const messageTag = msgBytes.slice(tagStart);
        const keyBytes = new Uint8Array(this.toArray('be', 32));
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$AESGCM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AESGCMDecrypt"])(ciphertext, iv, messageTag, keyBytes);
        if (result === null) {
            throw new Error('Decryption failed!');
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(Array.from(result), enc);
    }
} //# sourceMappingURL=SymmetricKey.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/TransactionSignature.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionSignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
;
;
;
;
const EMPTY_SCRIPT = new Uint8Array(0);
class TransactionSignature extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    static SIGHASH_ALL = 0x00000001;
    static SIGHASH_NONE = 0x00000002;
    static SIGHASH_SINGLE = 0x00000003;
    static SIGHASH_FORKID = 0x00000040;
    static SIGHASH_ANYONECANPAY = 0x00000080;
    scope;
    /**
     * Formats the SIGHASH preimage for the targeted input, optionally using a cache to skip recomputing shared hash prefixes.
     * @param params - Context for the signing input plus transaction metadata.
     * @param params.cache - Optional cache storing previously computed `hashPrevouts`, `hashSequence`, or `hashOutputs*` values; it will be populated if present.
     */ static format(params) {
        return Array.from(this.formatBytes(params));
    }
    /**
     * Formats the same SIGHASH preimage bytes as `format`, supporting the optional cache for hash reuse.
     * @param params - Context for the signing operation.
     * @param params.cache - Optional `SignatureHashCache` that may already contain hashed prefixes and is populated during formatting.
     * @returns Bytes for signing.
     */ static formatBytes(params) {
        const cache = params.cache;
        const currentInput = {
            sourceTXID: params.sourceTXID,
            sourceOutputIndex: params.sourceOutputIndex,
            sequence: params.inputSequence
        };
        const inputs = [
            ...params.otherInputs
        ];
        inputs.splice(params.inputIndex, 0, currentInput);
        const getPrevoutHash = ()=>{
            const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Writer"]();
            for (const input of inputs){
                if (typeof input.sourceTXID === 'undefined') {
                    if (input.sourceTransaction == null) {
                        throw new Error('Missing sourceTransaction for input');
                    }
                    writer.write(input.sourceTransaction.hash());
                } else {
                    writer.writeReverse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(input.sourceTXID, 'hex'));
                }
                writer.writeUInt32LE(input.sourceOutputIndex);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash256"](writer.toUint8Array());
        };
        const getSequenceHash = ()=>{
            const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Writer"]();
            for (const input of inputs){
                const sequence = input.sequence ?? 0xffffffff; // Default to max sequence number
                writer.writeUInt32LE(sequence);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash256"](writer.toUint8Array());
        };
        function getOutputsHash(outputIndex) {
            const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Writer"]();
            if (typeof outputIndex === 'undefined') {
                for (const output of params.outputs){
                    const satoshis = output.satoshis ?? 0; // Default to 0 if undefined
                    writer.writeUInt64LE(satoshis);
                    const script = output.lockingScript?.toUint8Array() ?? EMPTY_SCRIPT;
                    writer.writeVarIntNum(script.length);
                    writer.write(script);
                }
            } else {
                const output = params.outputs[outputIndex];
                if (output === undefined) {
                    throw new Error(`Output at index ${outputIndex} does not exist`);
                }
                const satoshis = output.satoshis ?? 0; // Default to 0 if undefined
                writer.writeUInt64LE(satoshis);
                const script = output.lockingScript?.toUint8Array() ?? EMPTY_SCRIPT;
                writer.writeVarIntNum(script.length);
                writer.write(script);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash256"](writer.toUint8Array());
        }
        let hashPrevouts = new Array(32).fill(0);
        let hashSequence = new Array(32).fill(0);
        let hashOutputs = new Array(32).fill(0);
        if ((params.scope & TransactionSignature.SIGHASH_ANYONECANPAY) === 0) {
            if (cache?.hashPrevouts != null) {
                hashPrevouts = cache.hashPrevouts;
            } else {
                hashPrevouts = getPrevoutHash();
                if (cache != null) cache.hashPrevouts = hashPrevouts;
            }
        }
        if ((params.scope & TransactionSignature.SIGHASH_ANYONECANPAY) === 0 && (params.scope & 31) !== TransactionSignature.SIGHASH_SINGLE && (params.scope & 31) !== TransactionSignature.SIGHASH_NONE) {
            if (cache?.hashSequence != null) {
                hashSequence = cache.hashSequence;
            } else {
                hashSequence = getSequenceHash();
                if (cache != null) cache.hashSequence = hashSequence;
            }
        }
        if ((params.scope & 31) !== TransactionSignature.SIGHASH_SINGLE && (params.scope & 31) !== TransactionSignature.SIGHASH_NONE) {
            if (cache?.hashOutputsAll != null) {
                hashOutputs = cache.hashOutputsAll;
            } else {
                hashOutputs = getOutputsHash();
                if (cache != null) cache.hashOutputsAll = hashOutputs;
            }
        } else if ((params.scope & 31) === TransactionSignature.SIGHASH_SINGLE && params.inputIndex < params.outputs.length) {
            const key = params.inputIndex;
            const cachedSingle = cache?.hashOutputsSingle?.get(key);
            if (cachedSingle != null) {
                hashOutputs = cachedSingle;
            } else {
                hashOutputs = getOutputsHash(key);
                if (cache != null) {
                    if (cache.hashOutputsSingle == null) cache.hashOutputsSingle = new Map();
                    cache.hashOutputsSingle.set(key, hashOutputs);
                }
            }
        }
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Writer"]();
        // Version
        writer.writeInt32LE(params.transactionVersion);
        // Input prevouts/nSequence (none/all, depending on flags)
        writer.write(hashPrevouts);
        writer.write(hashSequence);
        //  outpoint (32-byte hash + 4-byte little endian)
        writer.writeReverse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(params.sourceTXID, 'hex'));
        writer.writeUInt32LE(params.sourceOutputIndex);
        // scriptCode of the input (serialized as scripts inside CTxOuts)
        const subscriptBin = params.subscript.toUint8Array();
        writer.writeVarIntNum(subscriptBin.length);
        writer.write(subscriptBin);
        // value of the output spent by this input (8-byte little endian)
        writer.writeUInt64LE(params.sourceSatoshis);
        // nSequence of the input (4-byte little endian)
        const sequenceNumber = currentInput.sequence;
        writer.writeUInt32LE(sequenceNumber);
        // Outputs (none/one/all, depending on flags)
        writer.write(hashOutputs);
        // Locktime
        writer.writeUInt32LE(params.lockTime);
        // sighashType
        writer.writeUInt32LE(params.scope >>> 0);
        return writer.toUint8Array();
    }
    // The format used in a tx
    static fromChecksigFormat(buf) {
        if (buf.length === 0) {
            // allow setting a "blank" signature
            const r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1);
            const s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](1);
            const scope = 1;
            return new TransactionSignature(r, s, scope);
        }
        const scope = buf[buf.length - 1];
        const derbuf = buf.slice(0, buf.length - 1);
        const tempSig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fromDER(derbuf);
        return new TransactionSignature(tempSig.r, tempSig.s, scope);
    }
    constructor(r, s, scope){
        super(r, s);
        this.scope = scope;
    }
    /**
     * Compares to bitcoind's IsLowDERSignature
     * See also Ecdsa signature algorithm which enforces this.
     * See also Bip 62, "low S values in signatures"
     */ hasLowS() {
        if (this.s.ltn(1) || this.s.gt(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0', 'hex'))) {
            return false;
        }
        return true;
    }
    toChecksigFormat() {
        const derbuf = this.toDER();
        return [
            ...derbuf,
            this.scope
        ];
    }
} //# sourceMappingURL=TransactionSignature.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-client] (ecmascript) <export default as PrivateKey>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrivateKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Schnorr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Schnorr
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Curve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PrivateKey$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-client] (ecmascript) <export default as PrivateKey>");
;
;
;
;
class Schnorr {
    curve;
    constructor(){
        this.curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    }
    /**
     * Generates a proof that demonstrates the link between public key A and shared secret S
     * @param a Private key corresponding to public key A
     * @param A Public key
     * @param B Other party's public key
     * @param S Shared secret
     * @returns Proof (R, S', z)
     */ generateProof(aArg, AArg, BArg, S) {
        const r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PrivateKey$3e$__["PrivateKey"].fromRandom();
        const R = r.toPublicKey();
        const SPrime = BArg.mul(r);
        const e = this.computeChallenge(AArg, BArg, S, SPrime, R);
        const z = r.add(e.mul(aArg)).umod(this.curve.n);
        return {
            R,
            SPrime,
            z
        };
    }
    /**
     * Verifies the proof of the link between public key A and shared secret S
     * @param A Public key
     * @param B Other party's public key
     * @param S Shared secret
     * @param proof Proof (R, S', z)
     * @returns True if the proof is valid, false otherwise
     */ verifyProof(A, B, S, proof) {
        const { R, SPrime, z } = proof;
        const e = this.computeChallenge(A, B, S, SPrime, R);
        // Check zG = R + eA
        const zG = this.curve.g.mul(z);
        const RpluseA = R.add(A.mul(e));
        if (!zG.eq(RpluseA)) {
            return false;
        }
        // Check zB = S' + eS
        const zB = B.mul(z);
        const SprimeeS = SPrime.add(S.mul(e));
        if (!zB.eq(SprimeeS)) {
            return false;
        }
        return true;
    }
    computeChallenge(A, B, S, SPrime, R) {
        const message = [
            ...A.encode(true),
            ...B.encode(true),
            ...S.encode(true),
            ...SPrime.encode(true),
            ...R.encode(true)
        ];
        const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(message);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](hash).umod(this.curve.n);
    }
} //# sourceMappingURL=Schnorr.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Secp256r1.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Secp256r1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
;
;
;
const HEX_REGEX = /^[0-9a-fA-F]+$/;
const P = BigInt('0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff');
const N = BigInt('0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551');
const A = P - 3n; // a = -3 mod p
const B = BigInt('0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b');
const GX = BigInt('0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296');
const GY = BigInt('0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5');
const G = {
    x: GX,
    y: GY
};
const HALF_N = N >> 1n;
const COMPRESSED_EVEN = '02';
const COMPRESSED_ODD = '03';
const UNCOMPRESSED = '04';
class Secp256r1 {
    p = P;
    n = N;
    a = A;
    b = B;
    g = G;
    mod(x, m = this.p) {
        const v = x % m;
        return v >= 0n ? v : v + m;
    }
    modInv(x, m) {
        if (x === 0n || m <= 0n) throw new Error('Invalid mod inverse input');
        let [a, b] = [
            this.mod(x, m),
            m
        ];
        let [u, v] = [
            1n,
            0n
        ];
        while(b !== 0n){
            const q = a / b;
            [a, b] = [
                b,
                a - q * b
            ];
            [u, v] = [
                v,
                u - q * v
            ];
        }
        if (a !== 1n) throw new Error('Inverse does not exist');
        return this.mod(u, m);
    }
    modPow(base, exponent, modulus) {
        if (modulus === 1n) return 0n;
        let result = 1n;
        let b = this.mod(base, modulus);
        let e = exponent;
        while(e > 0n){
            if ((e & 1n) === 1n) result = this.mod(result * b, modulus);
            e >>= 1n;
            b = this.mod(b * b, modulus);
        }
        return result;
    }
    isInfinity(p) {
        return p === null;
    }
    assertOnCurve(p) {
        if (this.isInfinity(p)) return;
        const { x, y } = p;
        const left = this.mod(y * y);
        const right = this.mod(this.mod(x * x * x + this.a * x) + this.b);
        if (left !== right) {
            throw new Error('Point is not on secp256r1');
        }
    }
    pointFromAffine(x, y) {
        const point = {
            x: this.mod(x),
            y: this.mod(y)
        };
        this.assertOnCurve(point);
        return point;
    }
    /**
     * Decode a point from compressed or uncompressed hex.
     */ pointFromHex(hex) {
        if (hex.startsWith(UNCOMPRESSED)) {
            const x = BigInt('0x' + hex.slice(2, 66));
            const y = BigInt('0x' + hex.slice(66));
            return this.pointFromAffine(x, y);
        }
        if (hex.startsWith(COMPRESSED_EVEN) || hex.startsWith(COMPRESSED_ODD)) {
            const x = BigInt('0x' + hex.slice(2));
            const ySq = this.mod(this.mod(x * x * x + this.a * x) + this.b);
            const y = this.modPow(ySq, this.p + 1n >> 2n, this.p);
            const isOdd = (y & 1n) === 1n;
            const shouldBeOdd = hex.startsWith(COMPRESSED_ODD);
            const yFinal = isOdd === shouldBeOdd ? y : this.p - y;
            return this.pointFromAffine(x, yFinal);
        }
        throw new Error('Invalid point encoding');
    }
    /**
     * Encode a point to compressed or uncompressed hex. Infinity is encoded as `00`.
     */ pointToHex(p, compressed = false) {
        if (this.isInfinity(p)) return '00';
        const xHex = this.to32BytesHex(p.x);
        const yHex = this.to32BytesHex(p.y);
        if (!compressed) return UNCOMPRESSED + xHex + yHex;
        const prefix = (p.y & 1n) === 0n ? COMPRESSED_EVEN : COMPRESSED_ODD;
        return prefix + xHex;
    }
    /**
     * Add two affine points (handles infinity).
     */ addPoints(p1, p2) {
        if (this.isInfinity(p1)) return p2;
        if (this.isInfinity(p2)) return p1;
        const { x: x1, y: y1 } = p1;
        const { x: x2, y: y2 } = p2;
        if (x1 === x2) {
            if (y1 === y2) {
                return this.doublePoint(p1);
            }
            return null;
        }
        const m = this.mod((y2 - y1) * this.modInv(x2 - x1, this.p));
        const x3 = this.mod(m * m - x1 - x2);
        const y3 = this.mod(m * (x1 - x3) - y1);
        return {
            x: x3,
            y: y3
        };
    }
    doublePoint(p) {
        if (this.isInfinity(p)) return p;
        if (p.y === 0n) return null;
        const m = this.mod((3n * p.x * p.x + this.a) * this.modInv(2n * p.y, this.p));
        const x3 = this.mod(m * m - 2n * p.x);
        const y3 = this.mod(m * (p.x - x3) - p.y);
        return {
            x: x3,
            y: y3
        };
    }
    /**
     * Add two points (handles infinity).
     */ add(p1, p2) {
        return this.addPoints(p1, p2);
    }
    /**
     * Scalar multiply an arbitrary point using double-and-add.
     */ multiply(point, scalar) {
        if (scalar === 0n || this.isInfinity(point)) return null;
        let k = this.mod(scalar, this.n);
        let result = null;
        let addend = point;
        while(k > 0n){
            if ((k & 1n) === 1n) {
                result = this.addPoints(result, addend);
            }
            addend = this.doublePoint(addend);
            k >>= 1n;
        }
        return result;
    }
    /**
     * Scalar multiply the base point.
     */ multiplyBase(scalar) {
        return this.multiply(this.g, scalar);
    }
    /**
     * Check if a point lies on the curve (including infinity).
     */ isOnCurve(p) {
        try {
            this.assertOnCurve(p);
            return true;
        } catch (err) {
            return false;
        }
    }
    /**
     * Generate a new random private key as 32-byte hex.
     */ generatePrivateKeyHex() {
        return this.to32BytesHex(this.randomScalar());
    }
    randomScalar() {
        while(true){
            const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(32);
            const k = BigInt('0x' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(bytes));
            if (k > 0n && k < this.n) return k;
        }
    }
    normalizePrivateKey(d) {
        const key = this.mod(d, this.n);
        if (key === 0n) throw new Error('Invalid private key');
        return key;
    }
    toScalar(input) {
        if (typeof input === 'bigint') return this.normalizePrivateKey(input);
        const hex = input.startsWith('0x') ? input.slice(2) : input;
        if (!HEX_REGEX.test(hex) || hex.length === 0 || hex.length > 64) {
            throw new Error('Private key must be a hex string <= 32 bytes');
        }
        const value = BigInt('0x' + hex.padStart(64, '0'));
        return this.normalizePrivateKey(value);
    }
    publicKeyFromPrivate(privateKey) {
        const d = this.toScalar(privateKey);
        return this.multiplyBase(d);
    }
    /**
     * Create an ECDSA signature over a message. Uses SHA-256 unless `prehashed` is true.
     * Returns low-s normalized signature hex parts.
     */ sign(message, privateKey, opts = {}) {
        const { prehashed = false, nonce } = opts;
        const d = this.toScalar(privateKey);
        const digest = this.normalizeMessage(message, prehashed);
        const z = this.bytesToScalar(digest);
        let k = nonce ?? this.deterministicNonce(d, digest);
        while(true){
            const p = this.multiplyBase(k);
            if (this.isInfinity(p)) {
                k = nonce ?? this.deterministicNonce(d, digest);
                continue;
            }
            const r = this.mod(p.x, this.n);
            if (r === 0n) {
                k = nonce ?? this.deterministicNonce(d, digest);
                continue;
            }
            const kinv = this.modInv(k, this.n);
            let s = this.mod(kinv * (z + r * d), this.n);
            if (s === 0n) {
                k = nonce ?? this.deterministicNonce(d, digest);
                continue;
            }
            if (s > HALF_N) s = this.n - s; // enforce low-s
            return {
                r: this.to32BytesHex(r),
                s: this.to32BytesHex(s)
            };
        }
    }
    /**
     * Verify an ECDSA signature against a message and public key.
     */ verify(message, signature, publicKey, opts = {}) {
        const { prehashed = false } = opts;
        let q;
        try {
            q = typeof publicKey === 'string' ? this.pointFromHex(publicKey) : publicKey;
        } catch  {
            return false;
        }
        if (q == null || !this.isOnCurve(q)) return false;
        const r = typeof signature.r === 'bigint' ? signature.r : BigInt('0x' + signature.r);
        const s = typeof signature.s === 'bigint' ? signature.s : BigInt('0x' + signature.s);
        if (r <= 0n || r >= this.n || s <= 0n || s >= this.n) return false;
        const z = this.bytesToScalar(this.normalizeMessage(message, prehashed));
        const w = this.modInv(s, this.n);
        const u1 = this.mod(z * w, this.n);
        const u2 = this.mod(r * w, this.n);
        const p = this.addPoints(this.multiplyBase(u1), this.multiply(q, u2));
        if (this.isInfinity(p)) return false;
        const v = this.mod(p.x, this.n);
        return v === r;
    }
    normalizeMessage(message, prehashed) {
        const bytes = this.toBytes(message);
        if (prehashed) return bytes;
        return new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(bytes));
    }
    bytesToScalar(bytes) {
        const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(Array.from(bytes));
        return BigInt('0x' + hex) % this.n;
    }
    deterministicNonce(priv, msgDigest) {
        const keyBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(this.to32BytesHex(priv), 'hex');
        let counter = 0;
        while(counter < 1024){
            const data = counter === 0 ? Array.from(msgDigest) : Array.from(msgDigest).concat([
                counter & 0xff
            ]);
            const hmac = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256hmac"])(keyBytes, data);
            const k = BigInt('0x' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(hmac)) % this.n;
            if (k > 0n) return k;
            counter++;
        }
        throw new Error('Failed to derive deterministic nonce');
    }
    toBytes(data) {
        if (typeof data === 'string') {
            const isHex = HEX_REGEX.test(data) && data.length % 2 === 0;
            return Uint8Array.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toArray"])(data, isHex ? 'hex' : 'utf8'));
        }
        if (data instanceof Uint8Array) return data;
        if (ArrayBuffer.isView(data)) {
            return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        }
        throw new Error('Unsupported message format');
    }
    to32BytesHex(num) {
        return num.toString(16).padStart(64, '0');
    }
} //# sourceMappingURL=Secp256r1.js.map
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Curve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/SymmetricKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ECDSA.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/TransactionSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Polynomial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Schnorr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Schnorr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Secp256r1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Secp256r1.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript) <export * as Utils>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Utils",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript) <export * as Hash>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hash",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/TransactionSignature.js [app-client] (ecmascript) <export default as TransactionSignature>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionSignature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/TransactionSignature.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Signature.js [app-client] (ecmascript) <export default as Signature>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Signature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Signature.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-client] (ecmascript) <export default as PublicKey>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PublicKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/SymmetricKey.js [app-client] (ecmascript) <export default as SymmetricKey>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SymmetricKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/SymmetricKey.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ECDSA.js [app-client] (ecmascript) <export * as ECDSA>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ECDSA",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ECDSA.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript) <export default as BigNumber>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BigNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Schnorr.js [app-client] (ecmascript) <export default as Schnorr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Schnorr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Schnorr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Schnorr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Schnorr.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Point.js [app-client] (ecmascript) <export default as Point>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Point",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Point.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-client] (ecmascript) <export default as Random>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Random",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BigNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Curve",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "ECDSA",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "Hash",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    "KeyShares",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyShares"],
    "Point",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PointInFiniteField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointInFiniteField"],
    "Polynomial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PrivateKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "PublicKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Random",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Schnorr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Schnorr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Secp256r1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Secp256r1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Signature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "SymmetricKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "TransactionSignature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "Utils",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Curve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Signature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/SymmetricKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ECDSA.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$TransactionSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/TransactionSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Polynomial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Schnorr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Schnorr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Secp256r1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Secp256r1.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=ef5fd_%40bsv_sdk_dist_esm_src_primitives_cb482e50._.js.map