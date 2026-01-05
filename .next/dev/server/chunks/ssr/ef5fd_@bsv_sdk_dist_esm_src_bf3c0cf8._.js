module.exports = [
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/messages/SignedMessage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sign",
    ()=>sign,
    "verify",
    ()=>verify
]);
// @ts-nocheck
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Signature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Curve.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const VERSION = '42423301';
const sign = (message, signer, verifier)=>{
    const recipientAnyone = typeof verifier !== 'object';
    if (recipientAnyone) {
        const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        const anyone = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](1);
        const anyonePoint = curve.g.mul(anyone);
        verifier = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](anyonePoint.x, anyonePoint.y);
    }
    const keyID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(32);
    const keyIDBase64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"])(keyID);
    const invoiceNumber = `2-message signing-${keyIDBase64}`;
    const signingKey = signer.deriveChild(verifier, invoiceNumber);
    const signature = signingKey.sign(message).toDER();
    const senderPublicKey = signer.toPublicKey().encode(true);
    const version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(VERSION, 'hex');
    return [
        ...version,
        ...senderPublicKey,
        ...recipientAnyone ? [
            0
        ] : verifier.encode(true),
        ...keyID,
        ...signature
    ];
};
const verify = (message, sig, recipient)=>{
    const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](sig);
    const messageVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(reader.read(4));
    if (messageVersion !== VERSION) {
        throw new Error(`Message version mismatch: Expected ${VERSION}, received ${messageVersion}`);
    }
    const signer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromString((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(reader.read(33)));
    const [verifierFirst] = reader.read(1);
    if (verifierFirst === 0) {
        recipient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](1);
    } else {
        const verifierRest = reader.read(32);
        const verifierDER = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])([
            verifierFirst,
            ...verifierRest
        ]);
        if (typeof recipient !== 'object') {
            throw new Error(`This signature can only be verified with knowledge of a specific private key. The associated public key is: ${verifierDER}`);
        }
        const recipientDER = recipient.toPublicKey().encode(true, 'hex');
        if (verifierDER !== recipientDER) {
            throw new Error(`The recipient public key is ${recipientDER} but the signature requres the recipient to have public key ${verifierDER}`);
        }
    }
    const keyID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"])(reader.read(32));
    const signatureDER = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(reader.read(reader.bin.length - reader.pos));
    const signature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromDER(signatureDER, 'hex');
    const invoiceNumber = `2-message signing-${keyID}`;
    const signingKey = signer.deriveChild(recipient, invoiceNumber);
    const verified = signingKey.verify(message, signature);
    return verified;
}; //# sourceMappingURL=SignedMessage.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/messages/EncryptedMessage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/SymmetricKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
;
;
;
;
const VERSION = '42421033';
const encrypt = (message, sender, recipient)=>{
    const keyID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(32);
    const keyIDBase64 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"])(keyID);
    const invoiceNumber = `2-message encryption-${keyIDBase64}`;
    const signingPriv = sender.deriveChild(recipient, invoiceNumber);
    const recipientPub = recipient.deriveChild(sender, invoiceNumber);
    const sharedSecret = signingPriv.deriveSharedSecret(recipientPub);
    const symmetricKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](sharedSecret.encode(true).slice(1));
    const encrypted = symmetricKey.encrypt(message);
    const senderPublicKey = sender.toPublicKey().encode(true);
    const version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(VERSION, 'hex');
    return [
        ...version,
        ...senderPublicKey,
        ...recipient.encode(true),
        ...keyID,
        ...encrypted
    ];
};
const decrypt = (message, recipient)=>{
    const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](message);
    const messageVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(reader.read(4));
    if (messageVersion !== VERSION) {
        throw new Error(`Message version mismatch: Expected ${VERSION}, received ${messageVersion}`);
    }
    const sender = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromString((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(reader.read(33)));
    const expectedRecipientDER = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(reader.read(33));
    const actualRecipientDER = recipient.toPublicKey().encode(true, 'hex');
    if (expectedRecipientDER !== actualRecipientDER) {
        throw new Error(`The encrypted message expects a recipient public key of ${expectedRecipientDER}, but the provided key is ${actualRecipientDER}`);
    }
    const keyID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase64"])(reader.read(32));
    const encrypted = reader.read(reader.bin.length - reader.pos);
    const invoiceNumber = `2-message encryption-${keyID}`;
    const signingPriv = sender.deriveChild(recipient, invoiceNumber);
    const recipientPub = recipient.deriveChild(sender, invoiceNumber);
    const sharedSecret = signingPriv.deriveSharedSecret(recipientPub);
    const symmetricKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$SymmetricKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](sharedSecret.encode(true).slice(1));
    return symmetricKey.decrypt(encrypted);
}; //# sourceMappingURL=EncryptedMessage.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/messages/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$messages$2f$SignedMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/messages/SignedMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$messages$2f$EncryptedMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/messages/EncryptedMessage.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/BSM.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "magicHash",
    ()=>magicHash,
    "sign",
    ()=>sign,
    "verify",
    ()=>verify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/ECDSA.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-ssr] (ecmascript)");
;
;
;
;
const prefix = 'Bitcoin Signed Message:\n';
const magicHash = (messageBuf)=>{
    const bw = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
    bw.writeVarIntNum(prefix.length);
    bw.write((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(prefix, 'utf8'));
    bw.writeVarIntNum(messageBuf.length);
    bw.write(messageBuf);
    const buf = bw.toArray();
    const hashBuf = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash256"](buf);
    return hashBuf;
};
const sign = (message, privateKey, mode = 'base64')=>{
    const hashBuf = magicHash(message);
    const sig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sign"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](hashBuf), privateKey, true);
    if (mode === 'raw') {
        return sig;
    }
    const h = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](hashBuf);
    const r = sig.CalculateRecoveryFactor(privateKey.toPublicKey(), h);
    return sig.toCompact(r, true, 'base64');
};
const verify = (message, sig, pubKey)=>{
    const hashBuf = magicHash(message);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$ECDSA$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verify"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](hashBuf), sig, pubKey);
}; //# sourceMappingURL=BSM.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/HD.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HD
]);
// @ts-nocheck
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Curve.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
class HD {
    versionBytesNum;
    depth;
    parentFingerPrint;
    childIndex;
    chainCode;
    privKey;
    pubKey;
    constants = {
        pubKey: 0x0488b21e,
        privKey: 0x0488ade4
    };
    /**
     * Constructor for the BIP32 HD wallet.
     * Initializes an HD wallet with optional parameters for version bytes, depth, parent fingerprint, child index, chain code, private key, and public key.
     * @param versionBytesNum - Version bytes number for the wallet.
     * @param depth - Depth of the key in the hierarchy.
     * @param parentFingerPrint - Fingerprint of the parent key.
     * @param childIndex - Index of the child key.
     * @param chainCode - Chain code for key derivation.
     * @param privKey - Private key of the wallet.
     * @param pubKey - Public key of the wallet.
     */ constructor(versionBytesNum, depth, parentFingerPrint, childIndex, chainCode, privKey, pubKey){
        this.versionBytesNum = versionBytesNum;
        this.depth = depth;
        this.parentFingerPrint = parentFingerPrint;
        this.childIndex = childIndex;
        this.chainCode = chainCode;
        this.privKey = privKey;
        this.pubKey = pubKey;
    }
    /**
     * Generates a new HD wallet with random keys.
     * This method creates a root HD wallet with randomly generated private and public keys.
     * @returns {HD} The current HD instance with generated keys.
     */ fromRandom() {
        this.versionBytesNum = this.constants.privKey;
        this.depth = 0x00;
        this.parentFingerPrint = [
            0,
            0,
            0,
            0
        ];
        this.childIndex = 0;
        this.chainCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(32);
        this.privKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromRandom();
        this.pubKey = this.privKey.toPublicKey();
        return this;
    }
    /**
     * Generates a new HD wallet with random keys.
     * This method creates a root HD wallet with randomly generated private and public keys.
     * @returns {HD} A new HD instance with generated keys.
     * @static
     */ static fromRandom() {
        return new this().fromRandom();
    }
    /**
     * Initializes the HD wallet from a given base58 encoded string.
     * This method decodes a provided string to set up the HD wallet's properties.
     * @param str - A base58 encoded string representing the wallet.
     * @returns {HD} The new instance with properties set from the string.
     */ static fromString(str) {
        return new this().fromString(str);
    }
    /**
     * Initializes the HD wallet from a given base58 encoded string.
     * This method decodes a provided string to set up the HD wallet's properties.
     * @param str - A base58 encoded string representing the wallet.
     * @returns {HD} The current instance with properties set from the string.
     */ fromString(str) {
        const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBase58Check"])(str);
        return this.fromBinary([
            ...decoded.prefix,
            ...decoded.data
        ]);
    }
    /**
     * Initializes the HD wallet from a seed.
     * This method generates keys and other properties from a given seed, conforming to the BIP32 specification.
     * @param bytes - An array of bytes representing the seed.
     * @returns {HD} The current instance with properties set from the seed.
     */ static fromSeed(bytes) {
        return new this().fromSeed(bytes);
    }
    /**
     * Initializes the HD wallet from a seed.
     * This method generates keys and other properties from a given seed, conforming to the BIP32 specification.
     * @param bytes - An array of bytes representing the seed.
     * @returns {HD} The current instance with properties set from the seed.
     */ fromSeed(bytes) {
        if (bytes.length < 128 / 8) {
            throw new Error('Need more than 128 bits of entropy');
        }
        if (bytes.length > 512 / 8) {
            throw new Error('More than 512 bits of entropy is nonstandard');
        }
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha512hmac"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])('Bitcoin seed', 'utf8'), bytes);
        this.depth = 0x00;
        this.parentFingerPrint = [
            0,
            0,
            0,
            0
        ];
        this.childIndex = 0;
        this.chainCode = hash.slice(32, 64);
        this.versionBytesNum = this.constants.privKey;
        this.privKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](hash.slice(0, 32));
        this.pubKey = this.privKey.toPublicKey();
        return this;
    }
    /**
     * Initializes the HD wallet from a binary buffer.
     * Parses a binary buffer to set up the wallet's properties.
     * @param buf - A buffer containing the wallet data.
     * @returns {HD} The new instance with properties set from the buffer.
     */ static fromBinary(buf) {
        return new this().fromBinary(buf);
    }
    /**
     * Initializes the HD wallet from a binary buffer.
     * Parses a binary buffer to set up the wallet's properties.
     * @param buf - A buffer containing the wallet data.
     * @returns {HD} The current instance with properties set from the buffer.
     */ fromBinary(buf) {
        // Both pub and private extended keys are 78 buf
        if (buf.length !== 78) {
            throw new Error('incorrect bip32 data length');
        }
        const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](buf);
        this.versionBytesNum = reader.readUInt32BE();
        this.depth = reader.readUInt8();
        this.parentFingerPrint = reader.read(4);
        this.childIndex = reader.readUInt32BE();
        this.chainCode = reader.read(32);
        const keyBytes = reader.read(33);
        const isPrivate = this.versionBytesNum === this.constants.privKey;
        const isPublic = this.versionBytesNum === this.constants.pubKey;
        if (isPrivate && keyBytes[0] === 0) {
            this.privKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](keyBytes.slice(1, 33));
            this.pubKey = this.privKey.toPublicKey();
        } else if (isPublic && (keyBytes[0] === 0x02 || keyBytes[0] === 0x03)) {
            this.pubKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromString((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(keyBytes));
        } else {
            throw new Error('Invalid key');
        }
        return this;
    }
    /**
     * Converts the HD wallet to a base58 encoded string.
     * This method provides a string representation of the HD wallet's current state.
     * @returns {string} A base58 encoded string of the HD wallet.
     */ toString() {
        const bin = this.toBinary();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase58Check"])(bin, []);
    }
    /**
     * Derives a child HD wallet based on a given path.
     * The path specifies the hierarchy of the child key to be derived.
     * @param path - A string representing the derivation path (e.g., 'm/0'/1).
     * @returns {HD} A new HD instance representing the derived child wallet.
     */ derive(path) {
        if (path === 'm') {
            return this;
        }
        const e = path.split('/');
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let bip32 = this;
        for (const [i, c] of e.entries()){
            if (i === 0) {
                if (c !== 'm') {
                    throw new Error('invalid path');
                }
                continue;
            }
            if (parseInt(c.replace("'", ''), 10).toString() !== c.replace("'", '')) {
                throw new Error('invalid path');
            }
            const usePrivate = c.length > 1 && c[c.length - 1] === "'";
            let childIndex = parseInt(usePrivate ? c.slice(0, c.length - 1) : c, 10) & 0x7fffffff;
            if (usePrivate) {
                childIndex += 0x80000000;
            }
            bip32 = bip32.deriveChild(childIndex);
        }
        return bip32;
    }
    /**
     * Derives a child HD wallet from the current wallet based on an index.
     * This method generates either a private or public child key depending on the current wallet's state.
     * @param i - The index of the child key to derive.
     * @returns {HD} A new HD instance representing the derived child wallet.
     */ deriveChild(i) {
        if (typeof i !== 'number') {
            throw new Error('i must be a number');
        }
        const ibc = [];
        ibc.push(i >> 24 & 0xff);
        ibc.push(i >> 16 & 0xff);
        ibc.push(i >> 8 & 0xff);
        ibc.push(i & 0xff);
        const ib = [
            ...ibc
        ];
        const usePrivate = (i & 0x80000000) !== 0;
        const isPrivate = this.versionBytesNum === this.constants.privKey;
        if (usePrivate && (this.privKey === null || this.privKey === undefined || !isPrivate)) {
            throw new Error('Cannot do private key derivation without private key');
        }
        let ret = null;
        if (this.privKey !== null && this.privKey !== undefined) {
            let data = null;
            if (usePrivate) {
                data = [
                    0,
                    ...this.privKey.toArray('be', 32),
                    ...ib
                ];
            } else {
                data = [
                    ...this.pubKey.encode(true),
                    ...ib
                ];
            }
            const hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha512hmac"](this.chainCode, data);
            const il = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](hash.slice(0, 32));
            const ir = hash.slice(32, 64);
            // ki = IL + kpar (mod n).
            const k = il.add(this.privKey).mod(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]().n);
            ret = new HD();
            ret.chainCode = ir;
            ret.privKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](k.toArray());
            ret.pubKey = ret.privKey.toPublicKey();
        } else {
            const data = [
                ...this.pubKey.encode(true),
                ...ib
            ];
            const hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha512hmac"](this.chainCode, data);
            const il = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](hash.slice(0, 32));
            const ir = hash.slice(32, 64);
            // Ki = (IL + kpar)*G = IL*G + Kpar
            const ilG = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]().g.mul(il);
            const Kpar = this.pubKey;
            const Ki = ilG.add(Kpar);
            const newpub = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](Ki.x, Ki.y);
            ret = new HD();
            ret.chainCode = ir;
            ret.pubKey = newpub;
        }
        ret.childIndex = i;
        const pubKeyhash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hash160"](this.pubKey.encode(true));
        ret.parentFingerPrint = pubKeyhash.slice(0, 4);
        ret.versionBytesNum = this.versionBytesNum;
        ret.depth = this.depth + 1;
        return ret;
    }
    /**
     * Converts the current HD wallet to a public-only wallet.
     * This method strips away the private key information, leaving only the public part.
     * @returns {HD} A new HD instance representing the public-only wallet.
     */ toPublic() {
        const bip32 = new HD(this.versionBytesNum, this.depth, this.parentFingerPrint, this.childIndex, this.chainCode, this.privKey, this.pubKey);
        bip32.versionBytesNum = this.constants.pubKey;
        bip32.privKey = undefined;
        return bip32;
    }
    /**
     * Converts the HD wallet into a binary representation.
     * This method serializes the wallet's properties into a binary format.
     * @returns {number[]} An array of numbers representing the binary data of the wallet.
     */ toBinary() {
        const isPrivate = this.versionBytesNum === this.constants.privKey;
        const isPublic = this.versionBytesNum === this.constants.pubKey;
        if (isPrivate) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]().writeUInt32BE(this.versionBytesNum).writeUInt8(this.depth).write(this.parentFingerPrint).writeUInt32BE(this.childIndex).write(this.chainCode).writeUInt8(0).write(this.privKey.toArray('be', 32)).toArray();
        } else if (isPublic) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]().writeUInt32BE(this.versionBytesNum).writeUInt8(this.depth).write(this.parentFingerPrint).writeUInt32BE(this.childIndex).write(this.chainCode).write(this.pubKey.encode(true)).toArray();
        } else {
            throw new Error('bip32: invalid versionBytesNum byte');
        }
    }
    /**
     * Checks if the HD wallet contains a private key.
     * This method determines whether the wallet is a private key wallet or a public key only wallet.
     * @returns {boolean} A boolean value indicating whether the wallet has a private key (true) or not (false).
     */ isPrivate() {
        return this.versionBytesNum === this.constants.privKey;
    }
} //# sourceMappingURL=HD.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/bip-39-wordlist-en.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wordList",
    ()=>wordList
]);
const wordList = {
    value: [
        'abandon',
        'ability',
        'able',
        'about',
        'above',
        'absent',
        'absorb',
        'abstract',
        'absurd',
        'abuse',
        'access',
        'accident',
        'account',
        'accuse',
        'achieve',
        'acid',
        'acoustic',
        'acquire',
        'across',
        'act',
        'action',
        'actor',
        'actress',
        'actual',
        'adapt',
        'add',
        'addict',
        'address',
        'adjust',
        'admit',
        'adult',
        'advance',
        'advice',
        'aerobic',
        'affair',
        'afford',
        'afraid',
        'again',
        'age',
        'agent',
        'agree',
        'ahead',
        'aim',
        'air',
        'airport',
        'aisle',
        'alarm',
        'album',
        'alcohol',
        'alert',
        'alien',
        'all',
        'alley',
        'allow',
        'almost',
        'alone',
        'alpha',
        'already',
        'also',
        'alter',
        'always',
        'amateur',
        'amazing',
        'among',
        'amount',
        'amused',
        'analyst',
        'anchor',
        'ancient',
        'anger',
        'angle',
        'angry',
        'animal',
        'ankle',
        'announce',
        'annual',
        'another',
        'answer',
        'antenna',
        'antique',
        'anxiety',
        'any',
        'apart',
        'apology',
        'appear',
        'apple',
        'approve',
        'april',
        'arch',
        'arctic',
        'area',
        'arena',
        'argue',
        'arm',
        'armed',
        'armor',
        'army',
        'around',
        'arrange',
        'arrest',
        'arrive',
        'arrow',
        'art',
        'artefact',
        'artist',
        'artwork',
        'ask',
        'aspect',
        'assault',
        'asset',
        'assist',
        'assume',
        'asthma',
        'athlete',
        'atom',
        'attack',
        'attend',
        'attitude',
        'attract',
        'auction',
        'audit',
        'august',
        'aunt',
        'author',
        'auto',
        'autumn',
        'average',
        'avocado',
        'avoid',
        'awake',
        'aware',
        'away',
        'awesome',
        'awful',
        'awkward',
        'axis',
        'baby',
        'bachelor',
        'bacon',
        'badge',
        'bag',
        'balance',
        'balcony',
        'ball',
        'bamboo',
        'banana',
        'banner',
        'bar',
        'barely',
        'bargain',
        'barrel',
        'base',
        'basic',
        'basket',
        'battle',
        'beach',
        'bean',
        'beauty',
        'because',
        'become',
        'beef',
        'before',
        'begin',
        'behave',
        'behind',
        'believe',
        'below',
        'belt',
        'bench',
        'benefit',
        'best',
        'betray',
        'better',
        'between',
        'beyond',
        'bicycle',
        'bid',
        'bike',
        'bind',
        'biology',
        'bird',
        'birth',
        'bitter',
        'black',
        'blade',
        'blame',
        'blanket',
        'blast',
        'bleak',
        'bless',
        'blind',
        'blood',
        'blossom',
        'blouse',
        'blue',
        'blur',
        'blush',
        'board',
        'boat',
        'body',
        'boil',
        'bomb',
        'bone',
        'bonus',
        'book',
        'boost',
        'border',
        'boring',
        'borrow',
        'boss',
        'bottom',
        'bounce',
        'box',
        'boy',
        'bracket',
        'brain',
        'brand',
        'brass',
        'brave',
        'bread',
        'breeze',
        'brick',
        'bridge',
        'brief',
        'bright',
        'bring',
        'brisk',
        'broccoli',
        'broken',
        'bronze',
        'broom',
        'brother',
        'brown',
        'brush',
        'bubble',
        'buddy',
        'budget',
        'buffalo',
        'build',
        'bulb',
        'bulk',
        'bullet',
        'bundle',
        'bunker',
        'burden',
        'burger',
        'burst',
        'bus',
        'business',
        'busy',
        'butter',
        'buyer',
        'buzz',
        'cabbage',
        'cabin',
        'cable',
        'cactus',
        'cage',
        'cake',
        'call',
        'calm',
        'camera',
        'camp',
        'can',
        'canal',
        'cancel',
        'candy',
        'cannon',
        'canoe',
        'canvas',
        'canyon',
        'capable',
        'capital',
        'captain',
        'car',
        'carbon',
        'card',
        'cargo',
        'carpet',
        'carry',
        'cart',
        'case',
        'cash',
        'casino',
        'castle',
        'casual',
        'cat',
        'catalog',
        'catch',
        'category',
        'cattle',
        'caught',
        'cause',
        'caution',
        'cave',
        'ceiling',
        'celery',
        'cement',
        'census',
        'century',
        'cereal',
        'certain',
        'chair',
        'chalk',
        'champion',
        'change',
        'chaos',
        'chapter',
        'charge',
        'chase',
        'chat',
        'cheap',
        'check',
        'cheese',
        'chef',
        'cherry',
        'chest',
        'chicken',
        'chief',
        'child',
        'chimney',
        'choice',
        'choose',
        'chronic',
        'chuckle',
        'chunk',
        'churn',
        'cigar',
        'cinnamon',
        'circle',
        'citizen',
        'city',
        'civil',
        'claim',
        'clap',
        'clarify',
        'claw',
        'clay',
        'clean',
        'clerk',
        'clever',
        'click',
        'client',
        'cliff',
        'climb',
        'clinic',
        'clip',
        'clock',
        'clog',
        'close',
        'cloth',
        'cloud',
        'clown',
        'club',
        'clump',
        'cluster',
        'clutch',
        'coach',
        'coast',
        'coconut',
        'code',
        'coffee',
        'coil',
        'coin',
        'collect',
        'color',
        'column',
        'combine',
        'come',
        'comfort',
        'comic',
        'common',
        'company',
        'concert',
        'conduct',
        'confirm',
        'congress',
        'connect',
        'consider',
        'control',
        'convince',
        'cook',
        'cool',
        'copper',
        'copy',
        'coral',
        'core',
        'corn',
        'correct',
        'cost',
        'cotton',
        'couch',
        'country',
        'couple',
        'course',
        'cousin',
        'cover',
        'coyote',
        'crack',
        'cradle',
        'craft',
        'cram',
        'crane',
        'crash',
        'crater',
        'crawl',
        'crazy',
        'cream',
        'credit',
        'creek',
        'crew',
        'cricket',
        'crime',
        'crisp',
        'critic',
        'crop',
        'cross',
        'crouch',
        'crowd',
        'crucial',
        'cruel',
        'cruise',
        'crumble',
        'crunch',
        'crush',
        'cry',
        'crystal',
        'cube',
        'culture',
        'cup',
        'cupboard',
        'curious',
        'current',
        'curtain',
        'curve',
        'cushion',
        'custom',
        'cute',
        'cycle',
        'dad',
        'damage',
        'damp',
        'dance',
        'danger',
        'daring',
        'dash',
        'daughter',
        'dawn',
        'day',
        'deal',
        'debate',
        'debris',
        'decade',
        'december',
        'decide',
        'decline',
        'decorate',
        'decrease',
        'deer',
        'defense',
        'define',
        'defy',
        'degree',
        'delay',
        'deliver',
        'demand',
        'demise',
        'denial',
        'dentist',
        'deny',
        'depart',
        'depend',
        'deposit',
        'depth',
        'deputy',
        'derive',
        'describe',
        'desert',
        'design',
        'desk',
        'despair',
        'destroy',
        'detail',
        'detect',
        'develop',
        'device',
        'devote',
        'diagram',
        'dial',
        'diamond',
        'diary',
        'dice',
        'diesel',
        'diet',
        'differ',
        'digital',
        'dignity',
        'dilemma',
        'dinner',
        'dinosaur',
        'direct',
        'dirt',
        'disagree',
        'discover',
        'disease',
        'dish',
        'dismiss',
        'disorder',
        'display',
        'distance',
        'divert',
        'divide',
        'divorce',
        'dizzy',
        'doctor',
        'document',
        'dog',
        'doll',
        'dolphin',
        'domain',
        'donate',
        'donkey',
        'donor',
        'door',
        'dose',
        'double',
        'dove',
        'draft',
        'dragon',
        'drama',
        'drastic',
        'draw',
        'dream',
        'dress',
        'drift',
        'drill',
        'drink',
        'drip',
        'drive',
        'drop',
        'drum',
        'dry',
        'duck',
        'dumb',
        'dune',
        'during',
        'dust',
        'dutch',
        'duty',
        'dwarf',
        'dynamic',
        'eager',
        'eagle',
        'early',
        'earn',
        'earth',
        'easily',
        'east',
        'easy',
        'echo',
        'ecology',
        'economy',
        'edge',
        'edit',
        'educate',
        'effort',
        'egg',
        'eight',
        'either',
        'elbow',
        'elder',
        'electric',
        'elegant',
        'element',
        'elephant',
        'elevator',
        'elite',
        'else',
        'embark',
        'embody',
        'embrace',
        'emerge',
        'emotion',
        'employ',
        'empower',
        'empty',
        'enable',
        'enact',
        'end',
        'endless',
        'endorse',
        'enemy',
        'energy',
        'enforce',
        'engage',
        'engine',
        'enhance',
        'enjoy',
        'enlist',
        'enough',
        'enrich',
        'enroll',
        'ensure',
        'enter',
        'entire',
        'entry',
        'envelope',
        'episode',
        'equal',
        'equip',
        'era',
        'erase',
        'erode',
        'erosion',
        'error',
        'erupt',
        'escape',
        'essay',
        'essence',
        'estate',
        'eternal',
        'ethics',
        'evidence',
        'evil',
        'evoke',
        'evolve',
        'exact',
        'example',
        'excess',
        'exchange',
        'excite',
        'exclude',
        'excuse',
        'execute',
        'exercise',
        'exhaust',
        'exhibit',
        'exile',
        'exist',
        'exit',
        'exotic',
        'expand',
        'expect',
        'expire',
        'explain',
        'expose',
        'express',
        'extend',
        'extra',
        'eye',
        'eyebrow',
        'fabric',
        'face',
        'faculty',
        'fade',
        'faint',
        'faith',
        'fall',
        'false',
        'fame',
        'family',
        'famous',
        'fan',
        'fancy',
        'fantasy',
        'farm',
        'fashion',
        'fat',
        'fatal',
        'father',
        'fatigue',
        'fault',
        'favorite',
        'feature',
        'february',
        'federal',
        'fee',
        'feed',
        'feel',
        'female',
        'fence',
        'festival',
        'fetch',
        'fever',
        'few',
        'fiber',
        'fiction',
        'field',
        'figure',
        'file',
        'film',
        'filter',
        'final',
        'find',
        'fine',
        'finger',
        'finish',
        'fire',
        'firm',
        'first',
        'fiscal',
        'fish',
        'fit',
        'fitness',
        'fix',
        'flag',
        'flame',
        'flash',
        'flat',
        'flavor',
        'flee',
        'flight',
        'flip',
        'float',
        'flock',
        'floor',
        'flower',
        'fluid',
        'flush',
        'fly',
        'foam',
        'focus',
        'fog',
        'foil',
        'fold',
        'follow',
        'food',
        'foot',
        'force',
        'forest',
        'forget',
        'fork',
        'fortune',
        'forum',
        'forward',
        'fossil',
        'foster',
        'found',
        'fox',
        'fragile',
        'frame',
        'frequent',
        'fresh',
        'friend',
        'fringe',
        'frog',
        'front',
        'frost',
        'frown',
        'frozen',
        'fruit',
        'fuel',
        'fun',
        'funny',
        'furnace',
        'fury',
        'future',
        'gadget',
        'gain',
        'galaxy',
        'gallery',
        'game',
        'gap',
        'garage',
        'garbage',
        'garden',
        'garlic',
        'garment',
        'gas',
        'gasp',
        'gate',
        'gather',
        'gauge',
        'gaze',
        'general',
        'genius',
        'genre',
        'gentle',
        'genuine',
        'gesture',
        'ghost',
        'giant',
        'gift',
        'giggle',
        'ginger',
        'giraffe',
        'girl',
        'give',
        'glad',
        'glance',
        'glare',
        'glass',
        'glide',
        'glimpse',
        'globe',
        'gloom',
        'glory',
        'glove',
        'glow',
        'glue',
        'goat',
        'goddess',
        'gold',
        'good',
        'goose',
        'gorilla',
        'gospel',
        'gossip',
        'govern',
        'gown',
        'grab',
        'grace',
        'grain',
        'grant',
        'grape',
        'grass',
        'gravity',
        'great',
        'green',
        'grid',
        'grief',
        'grit',
        'grocery',
        'group',
        'grow',
        'grunt',
        'guard',
        'guess',
        'guide',
        'guilt',
        'guitar',
        'gun',
        'gym',
        'habit',
        'hair',
        'half',
        'hammer',
        'hamster',
        'hand',
        'happy',
        'harbor',
        'hard',
        'harsh',
        'harvest',
        'hat',
        'have',
        'hawk',
        'hazard',
        'head',
        'health',
        'heart',
        'heavy',
        'hedgehog',
        'height',
        'hello',
        'helmet',
        'help',
        'hen',
        'hero',
        'hidden',
        'high',
        'hill',
        'hint',
        'hip',
        'hire',
        'history',
        'hobby',
        'hockey',
        'hold',
        'hole',
        'holiday',
        'hollow',
        'home',
        'honey',
        'hood',
        'hope',
        'horn',
        'horror',
        'horse',
        'hospital',
        'host',
        'hotel',
        'hour',
        'hover',
        'hub',
        'huge',
        'human',
        'humble',
        'humor',
        'hundred',
        'hungry',
        'hunt',
        'hurdle',
        'hurry',
        'hurt',
        'husband',
        'hybrid',
        'ice',
        'icon',
        'idea',
        'identify',
        'idle',
        'ignore',
        'ill',
        'illegal',
        'illness',
        'image',
        'imitate',
        'immense',
        'immune',
        'impact',
        'impose',
        'improve',
        'impulse',
        'inch',
        'include',
        'income',
        'increase',
        'index',
        'indicate',
        'indoor',
        'industry',
        'infant',
        'inflict',
        'inform',
        'inhale',
        'inherit',
        'initial',
        'inject',
        'injury',
        'inmate',
        'inner',
        'innocent',
        'input',
        'inquiry',
        'insane',
        'insect',
        'inside',
        'inspire',
        'install',
        'intact',
        'interest',
        'into',
        'invest',
        'invite',
        'involve',
        'iron',
        'island',
        'isolate',
        'issue',
        'item',
        'ivory',
        'jacket',
        'jaguar',
        'jar',
        'jazz',
        'jealous',
        'jeans',
        'jelly',
        'jewel',
        'job',
        'join',
        'joke',
        'journey',
        'joy',
        'judge',
        'juice',
        'jump',
        'jungle',
        'junior',
        'junk',
        'just',
        'kangaroo',
        'keen',
        'keep',
        'ketchup',
        'key',
        'kick',
        'kid',
        'kidney',
        'kind',
        'kingdom',
        'kiss',
        'kit',
        'kitchen',
        'kite',
        'kitten',
        'kiwi',
        'knee',
        'knife',
        'knock',
        'know',
        'lab',
        'label',
        'labor',
        'ladder',
        'lady',
        'lake',
        'lamp',
        'language',
        'laptop',
        'large',
        'later',
        'latin',
        'laugh',
        'laundry',
        'lava',
        'law',
        'lawn',
        'lawsuit',
        'layer',
        'lazy',
        'leader',
        'leaf',
        'learn',
        'leave',
        'lecture',
        'left',
        'leg',
        'legal',
        'legend',
        'leisure',
        'lemon',
        'lend',
        'length',
        'lens',
        'leopard',
        'lesson',
        'letter',
        'level',
        'liar',
        'liberty',
        'library',
        'license',
        'life',
        'lift',
        'light',
        'like',
        'limb',
        'limit',
        'link',
        'lion',
        'liquid',
        'list',
        'little',
        'live',
        'lizard',
        'load',
        'loan',
        'lobster',
        'local',
        'lock',
        'logic',
        'lonely',
        'long',
        'loop',
        'lottery',
        'loud',
        'lounge',
        'love',
        'loyal',
        'lucky',
        'luggage',
        'lumber',
        'lunar',
        'lunch',
        'luxury',
        'lyrics',
        'machine',
        'mad',
        'magic',
        'magnet',
        'maid',
        'mail',
        'main',
        'major',
        'make',
        'mammal',
        'man',
        'manage',
        'mandate',
        'mango',
        'mansion',
        'manual',
        'maple',
        'marble',
        'march',
        'margin',
        'marine',
        'market',
        'marriage',
        'mask',
        'mass',
        'master',
        'match',
        'material',
        'math',
        'matrix',
        'matter',
        'maximum',
        'maze',
        'meadow',
        'mean',
        'measure',
        'meat',
        'mechanic',
        'medal',
        'media',
        'melody',
        'melt',
        'member',
        'memory',
        'mention',
        'menu',
        'mercy',
        'merge',
        'merit',
        'merry',
        'mesh',
        'message',
        'metal',
        'method',
        'middle',
        'midnight',
        'milk',
        'million',
        'mimic',
        'mind',
        'minimum',
        'minor',
        'minute',
        'miracle',
        'mirror',
        'misery',
        'miss',
        'mistake',
        'mix',
        'mixed',
        'mixture',
        'mobile',
        'model',
        'modify',
        'mom',
        'moment',
        'monitor',
        'monkey',
        'monster',
        'month',
        'moon',
        'moral',
        'more',
        'morning',
        'mosquito',
        'mother',
        'motion',
        'motor',
        'mountain',
        'mouse',
        'move',
        'movie',
        'much',
        'muffin',
        'mule',
        'multiply',
        'muscle',
        'museum',
        'mushroom',
        'music',
        'must',
        'mutual',
        'myself',
        'mystery',
        'myth',
        'naive',
        'name',
        'napkin',
        'narrow',
        'nasty',
        'nation',
        'nature',
        'near',
        'neck',
        'need',
        'negative',
        'neglect',
        'neither',
        'nephew',
        'nerve',
        'nest',
        'net',
        'network',
        'neutral',
        'never',
        'news',
        'next',
        'nice',
        'night',
        'noble',
        'noise',
        'nominee',
        'noodle',
        'normal',
        'north',
        'nose',
        'notable',
        'note',
        'nothing',
        'notice',
        'novel',
        'now',
        'nuclear',
        'number',
        'nurse',
        'nut',
        'oak',
        'obey',
        'object',
        'oblige',
        'obscure',
        'observe',
        'obtain',
        'obvious',
        'occur',
        'ocean',
        'october',
        'odor',
        'off',
        'offer',
        'office',
        'often',
        'oil',
        'okay',
        'old',
        'olive',
        'olympic',
        'omit',
        'once',
        'one',
        'onion',
        'online',
        'only',
        'open',
        'opera',
        'opinion',
        'oppose',
        'option',
        'orange',
        'orbit',
        'orchard',
        'order',
        'ordinary',
        'organ',
        'orient',
        'original',
        'orphan',
        'ostrich',
        'other',
        'outdoor',
        'outer',
        'output',
        'outside',
        'oval',
        'oven',
        'over',
        'own',
        'owner',
        'oxygen',
        'oyster',
        'ozone',
        'pact',
        'paddle',
        'page',
        'pair',
        'palace',
        'palm',
        'panda',
        'panel',
        'panic',
        'panther',
        'paper',
        'parade',
        'parent',
        'park',
        'parrot',
        'party',
        'pass',
        'patch',
        'path',
        'patient',
        'patrol',
        'pattern',
        'pause',
        'pave',
        'payment',
        'peace',
        'peanut',
        'pear',
        'peasant',
        'pelican',
        'pen',
        'penalty',
        'pencil',
        'people',
        'pepper',
        'perfect',
        'permit',
        'person',
        'pet',
        'phone',
        'photo',
        'phrase',
        'physical',
        'piano',
        'picnic',
        'picture',
        'piece',
        'pig',
        'pigeon',
        'pill',
        'pilot',
        'pink',
        'pioneer',
        'pipe',
        'pistol',
        'pitch',
        'pizza',
        'place',
        'planet',
        'plastic',
        'plate',
        'play',
        'please',
        'pledge',
        'pluck',
        'plug',
        'plunge',
        'poem',
        'poet',
        'point',
        'polar',
        'pole',
        'police',
        'pond',
        'pony',
        'pool',
        'popular',
        'portion',
        'position',
        'possible',
        'post',
        'potato',
        'pottery',
        'poverty',
        'powder',
        'power',
        'practice',
        'praise',
        'predict',
        'prefer',
        'prepare',
        'present',
        'pretty',
        'prevent',
        'price',
        'pride',
        'primary',
        'print',
        'priority',
        'prison',
        'private',
        'prize',
        'problem',
        'process',
        'produce',
        'profit',
        'program',
        'project',
        'promote',
        'proof',
        'property',
        'prosper',
        'protect',
        'proud',
        'provide',
        'public',
        'pudding',
        'pull',
        'pulp',
        'pulse',
        'pumpkin',
        'punch',
        'pupil',
        'puppy',
        'purchase',
        'purity',
        'purpose',
        'purse',
        'push',
        'put',
        'puzzle',
        'pyramid',
        'quality',
        'quantum',
        'quarter',
        'question',
        'quick',
        'quit',
        'quiz',
        'quote',
        'rabbit',
        'raccoon',
        'race',
        'rack',
        'radar',
        'radio',
        'rail',
        'rain',
        'raise',
        'rally',
        'ramp',
        'ranch',
        'random',
        'range',
        'rapid',
        'rare',
        'rate',
        'rather',
        'raven',
        'raw',
        'razor',
        'ready',
        'real',
        'reason',
        'rebel',
        'rebuild',
        'recall',
        'receive',
        'recipe',
        'record',
        'recycle',
        'reduce',
        'reflect',
        'reform',
        'refuse',
        'region',
        'regret',
        'regular',
        'reject',
        'relax',
        'release',
        'relief',
        'rely',
        'remain',
        'remember',
        'remind',
        'remove',
        'render',
        'renew',
        'rent',
        'reopen',
        'repair',
        'repeat',
        'replace',
        'report',
        'require',
        'rescue',
        'resemble',
        'resist',
        'resource',
        'response',
        'result',
        'retire',
        'retreat',
        'return',
        'reunion',
        'reveal',
        'review',
        'reward',
        'rhythm',
        'rib',
        'ribbon',
        'rice',
        'rich',
        'ride',
        'ridge',
        'rifle',
        'right',
        'rigid',
        'ring',
        'riot',
        'ripple',
        'risk',
        'ritual',
        'rival',
        'river',
        'road',
        'roast',
        'robot',
        'robust',
        'rocket',
        'romance',
        'roof',
        'rookie',
        'room',
        'rose',
        'rotate',
        'rough',
        'round',
        'route',
        'royal',
        'rubber',
        'rude',
        'rug',
        'rule',
        'run',
        'runway',
        'rural',
        'sad',
        'saddle',
        'sadness',
        'safe',
        'sail',
        'salad',
        'salmon',
        'salon',
        'salt',
        'salute',
        'same',
        'sample',
        'sand',
        'satisfy',
        'satoshi',
        'sauce',
        'sausage',
        'save',
        'say',
        'scale',
        'scan',
        'scare',
        'scatter',
        'scene',
        'scheme',
        'school',
        'science',
        'scissors',
        'scorpion',
        'scout',
        'scrap',
        'screen',
        'script',
        'scrub',
        'sea',
        'search',
        'season',
        'seat',
        'second',
        'secret',
        'section',
        'security',
        'seed',
        'seek',
        'segment',
        'select',
        'sell',
        'seminar',
        'senior',
        'sense',
        'sentence',
        'series',
        'service',
        'session',
        'settle',
        'setup',
        'seven',
        'shadow',
        'shaft',
        'shallow',
        'share',
        'shed',
        'shell',
        'sheriff',
        'shield',
        'shift',
        'shine',
        'ship',
        'shiver',
        'shock',
        'shoe',
        'shoot',
        'shop',
        'short',
        'shoulder',
        'shove',
        'shrimp',
        'shrug',
        'shuffle',
        'shy',
        'sibling',
        'sick',
        'side',
        'siege',
        'sight',
        'sign',
        'silent',
        'silk',
        'silly',
        'silver',
        'similar',
        'simple',
        'since',
        'sing',
        'siren',
        'sister',
        'situate',
        'six',
        'size',
        'skate',
        'sketch',
        'ski',
        'skill',
        'skin',
        'skirt',
        'skull',
        'slab',
        'slam',
        'sleep',
        'slender',
        'slice',
        'slide',
        'slight',
        'slim',
        'slogan',
        'slot',
        'slow',
        'slush',
        'small',
        'smart',
        'smile',
        'smoke',
        'smooth',
        'snack',
        'snake',
        'snap',
        'sniff',
        'snow',
        'soap',
        'soccer',
        'social',
        'sock',
        'soda',
        'soft',
        'solar',
        'soldier',
        'solid',
        'solution',
        'solve',
        'someone',
        'song',
        'soon',
        'sorry',
        'sort',
        'soul',
        'sound',
        'soup',
        'source',
        'south',
        'space',
        'spare',
        'spatial',
        'spawn',
        'speak',
        'special',
        'speed',
        'spell',
        'spend',
        'sphere',
        'spice',
        'spider',
        'spike',
        'spin',
        'spirit',
        'split',
        'spoil',
        'sponsor',
        'spoon',
        'sport',
        'spot',
        'spray',
        'spread',
        'spring',
        'spy',
        'square',
        'squeeze',
        'squirrel',
        'stable',
        'stadium',
        'staff',
        'stage',
        'stairs',
        'stamp',
        'stand',
        'start',
        'state',
        'stay',
        'steak',
        'steel',
        'stem',
        'step',
        'stereo',
        'stick',
        'still',
        'sting',
        'stock',
        'stomach',
        'stone',
        'stool',
        'story',
        'stove',
        'strategy',
        'street',
        'strike',
        'strong',
        'struggle',
        'student',
        'stuff',
        'stumble',
        'style',
        'subject',
        'submit',
        'subway',
        'success',
        'such',
        'sudden',
        'suffer',
        'sugar',
        'suggest',
        'suit',
        'summer',
        'sun',
        'sunny',
        'sunset',
        'super',
        'supply',
        'supreme',
        'sure',
        'surface',
        'surge',
        'surprise',
        'surround',
        'survey',
        'suspect',
        'sustain',
        'swallow',
        'swamp',
        'swap',
        'swarm',
        'swear',
        'sweet',
        'swift',
        'swim',
        'swing',
        'switch',
        'sword',
        'symbol',
        'symptom',
        'syrup',
        'system',
        'table',
        'tackle',
        'tag',
        'tail',
        'talent',
        'talk',
        'tank',
        'tape',
        'target',
        'task',
        'taste',
        'tattoo',
        'taxi',
        'teach',
        'team',
        'tell',
        'ten',
        'tenant',
        'tennis',
        'tent',
        'term',
        'test',
        'text',
        'thank',
        'that',
        'theme',
        'then',
        'theory',
        'there',
        'they',
        'thing',
        'this',
        'thought',
        'three',
        'thrive',
        'throw',
        'thumb',
        'thunder',
        'ticket',
        'tide',
        'tiger',
        'tilt',
        'timber',
        'time',
        'tiny',
        'tip',
        'tired',
        'tissue',
        'title',
        'toast',
        'tobacco',
        'today',
        'toddler',
        'toe',
        'together',
        'toilet',
        'token',
        'tomato',
        'tomorrow',
        'tone',
        'tongue',
        'tonight',
        'tool',
        'tooth',
        'top',
        'topic',
        'topple',
        'torch',
        'tornado',
        'tortoise',
        'toss',
        'total',
        'tourist',
        'toward',
        'tower',
        'town',
        'toy',
        'track',
        'trade',
        'traffic',
        'tragic',
        'train',
        'transfer',
        'trap',
        'trash',
        'travel',
        'tray',
        'treat',
        'tree',
        'trend',
        'trial',
        'tribe',
        'trick',
        'trigger',
        'trim',
        'trip',
        'trophy',
        'trouble',
        'truck',
        'true',
        'truly',
        'trumpet',
        'trust',
        'truth',
        'try',
        'tube',
        'tuition',
        'tumble',
        'tuna',
        'tunnel',
        'turkey',
        'turn',
        'turtle',
        'twelve',
        'twenty',
        'twice',
        'twin',
        'twist',
        'two',
        'type',
        'typical',
        'ugly',
        'umbrella',
        'unable',
        'unaware',
        'uncle',
        'uncover',
        'under',
        'undo',
        'unfair',
        'unfold',
        'unhappy',
        'uniform',
        'unique',
        'unit',
        'universe',
        'unknown',
        'unlock',
        'until',
        'unusual',
        'unveil',
        'update',
        'upgrade',
        'uphold',
        'upon',
        'upper',
        'upset',
        'urban',
        'urge',
        'usage',
        'use',
        'used',
        'useful',
        'useless',
        'usual',
        'utility',
        'vacant',
        'vacuum',
        'vague',
        'valid',
        'valley',
        'valve',
        'van',
        'vanish',
        'vapor',
        'various',
        'vast',
        'vault',
        'vehicle',
        'velvet',
        'vendor',
        'venture',
        'venue',
        'verb',
        'verify',
        'version',
        'very',
        'vessel',
        'veteran',
        'viable',
        'vibrant',
        'vicious',
        'victory',
        'video',
        'view',
        'village',
        'vintage',
        'violin',
        'virtual',
        'virus',
        'visa',
        'visit',
        'visual',
        'vital',
        'vivid',
        'vocal',
        'voice',
        'void',
        'volcano',
        'volume',
        'vote',
        'voyage',
        'wage',
        'wagon',
        'wait',
        'walk',
        'wall',
        'walnut',
        'want',
        'warfare',
        'warm',
        'warrior',
        'wash',
        'wasp',
        'waste',
        'water',
        'wave',
        'way',
        'wealth',
        'weapon',
        'wear',
        'weasel',
        'weather',
        'web',
        'wedding',
        'weekend',
        'weird',
        'welcome',
        'west',
        'wet',
        'whale',
        'what',
        'wheat',
        'wheel',
        'when',
        'where',
        'whip',
        'whisper',
        'wide',
        'width',
        'wife',
        'wild',
        'will',
        'win',
        'window',
        'wine',
        'wing',
        'wink',
        'winner',
        'winter',
        'wire',
        'wisdom',
        'wise',
        'wish',
        'witness',
        'wolf',
        'woman',
        'wonder',
        'wood',
        'wool',
        'word',
        'work',
        'world',
        'worry',
        'worth',
        'wrap',
        'wreck',
        'wrestle',
        'wrist',
        'write',
        'wrong',
        'yard',
        'year',
        'yellow',
        'you',
        'young',
        'youth',
        'zebra',
        'zero',
        'zone',
        'zoo'
    ],
    space: ' '
}; //# sourceMappingURL=bip-39-wordlist-en.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/Mnemonic.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mnemonic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$bip$2d$39$2d$wordlist$2d$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/bip-39-wordlist-en.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-ssr] (ecmascript)");
;
;
;
;
class Mnemonic {
    mnemonic;
    seed;
    Wordlist;
    /**
     * Constructs a Mnemonic object.
     * @param {string} [mnemonic] - An optional mnemonic phrase.
     * @param {number[]} [seed] - An optional seed derived from the mnemonic.
     * @param {object} [wordlist=wordList] - An object containing a list of words and space character used in the mnemonic.
     */ constructor(mnemonic, seed, wordlist = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$bip$2d$39$2d$wordlist$2d$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wordList"]){
        this.mnemonic = mnemonic ?? ''; // Default to empty string if undefined
        this.seed = seed ?? []; // Default to empty array if undefined
        this.Wordlist = wordlist;
    }
    /**
     * Converts the mnemonic and seed into a binary representation.
     * @returns {number[]} The binary representation of the mnemonic and seed.
     */ toBinary() {
        const bw = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
        if (this.mnemonic !== '') {
            const buf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(this.mnemonic, 'utf8');
            bw.writeVarIntNum(buf.length);
            bw.write(buf);
        } else {
            bw.writeVarIntNum(0);
        }
        if (this.seed.length > 0) {
            bw.writeVarIntNum(this.seed.length);
            bw.write(this.seed);
        } else {
            bw.writeVarIntNum(0);
        }
        return bw.toArray();
    }
    /**
     * Loads a mnemonic and seed from a binary representation.
     * @param {number[]} bin - The binary representation of a mnemonic and seed.
     * @returns {this} The Mnemonic instance with loaded mnemonic and seed.
     */ fromBinary(bin) {
        const br = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"](bin);
        const mnemoniclen = br.readVarIntNum();
        if (mnemoniclen > 0) {
            this.mnemonic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(br.read(mnemoniclen), 'utf8');
        }
        const seedlen = br.readVarIntNum();
        if (seedlen > 0) {
            this.seed = br.read(seedlen);
        }
        return this;
    }
    /**
     * Generates a random mnemonic from a given bit length.
     * @param {number} [bits=128] - The bit length for the random mnemonic (must be a multiple of 32 and at least 128).
     * @returns {this} The Mnemonic instance with the new random mnemonic.
     * @throws {Error} If the bit length is not a multiple of 32 or is less than 128.
     */ fromRandom(bits) {
        if (bits === undefined || bits === null || isNaN(bits) || bits === 0) {
            bits = 128;
        }
        if (bits % 32 !== 0) {
            throw new Error('bits must be multiple of 32');
        }
        if (bits < 128) {
            throw new Error('bits must be at least 128');
        }
        const buf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(bits / 8);
        this.entropy2Mnemonic(buf);
        this.mnemonic2Seed();
        return this;
    }
    /**
     * Static method to generate a Mnemonic instance with a random mnemonic.
     * @param {number} [bits=128] - The bit length for the random mnemonic.
     * @returns {Mnemonic} A new Mnemonic instance.
     */ static fromRandom(bits) {
        return new this().fromRandom(bits);
    }
    /**
     * Converts given entropy into a mnemonic phrase.
     * This method is used to generate a mnemonic from a specific entropy source.
     * @param {number[]} buf - The entropy buffer, must be at least 128 bits.
     * @returns {this} The Mnemonic instance with the mnemonic set from the given entropy.
     * @throws {Error} If the entropy is less than 128 bits.
     */ fromEntropy(buf) {
        this.entropy2Mnemonic(buf);
        return this;
    }
    /**
     * Static method to create a Mnemonic instance from a given entropy.
     * @param {number[]} buf - The entropy buffer.
     * @returns {Mnemonic} A new Mnemonic instance.
     */ static fromEntropy(buf) {
        return new this().fromEntropy(buf);
    }
    /**
     * Sets the mnemonic for the instance from a string.
     * @param {string} mnemonic - The mnemonic phrase as a string.
     * @returns {this} The Mnemonic instance with the set mnemonic.
     */ fromString(mnemonic) {
        this.mnemonic = mnemonic;
        return this;
    }
    /**
     * Static method to create a Mnemonic instance from a mnemonic string.
     * @param {string} str - The mnemonic phrase.
     * @returns {Mnemonic} A new Mnemonic instance.
     */ static fromString(str) {
        return new this().fromString(str);
    }
    /**
     * Converts the instance's mnemonic to a string representation.
     * @returns {string} The mnemonic phrase as a string.
     */ toString() {
        return this.mnemonic;
    }
    /**
     * Converts the mnemonic to a seed.
     * The mnemonic must pass the validity check before conversion.
     * @param {string} [passphrase=''] - An optional passphrase for additional security.
     * @returns {number[]} The generated seed.
     * @throws {Error} If the mnemonic is invalid.
     */ toSeed(passphrase) {
        this.mnemonic2Seed(passphrase);
        return this.seed;
    }
    /**
     * Converts entropy to a mnemonic phrase.
     * This method takes a buffer of entropy and converts it into a corresponding
     * mnemonic phrase based on the Mnemonic wordlist. The entropy should be at least 128 bits.
     * The method applies a checksum and maps the entropy to words in the wordlist.
     * @param {number[]} buf - The entropy buffer to convert. Must be at least 128 bits.
     * @returns {this} The Mnemonic instance with the mnemonic set from the entropy.
     * @throws {Error} If the entropy is less than 128 bits or if it's not an even multiple of 11 bits.
     */ entropy2Mnemonic(buf) {
        if (buf.length < 128 / 8) {
            throw new Error('Entropy is less than 128 bits. It must be 128 bits or more.');
        }
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256"](buf);
        let bin = '';
        const bits = buf.length * 8;
        for(let i = 0; i < buf.length; i++){
            bin = bin + ('00000000' + buf[i].toString(2)).slice(-8);
        }
        let hashbits = hash[0].toString(2);
        hashbits = ('00000000' + hashbits).slice(-8).slice(0, bits / 32);
        bin = bin + hashbits;
        if (bin.length % 11 !== 0) {
            throw new Error('internal error - entropy not an even multiple of 11 bits - ' + bin.length.toString());
        }
        let mnemonic = '';
        for(let i = 0; i < bin.length / 11; i++){
            if (mnemonic !== '') {
                mnemonic = mnemonic + this.Wordlist.space;
            }
            const wi = parseInt(bin.slice(i * 11, (i + 1) * 11), 2);
            mnemonic = mnemonic + this.Wordlist.value[wi];
        }
        this.mnemonic = mnemonic;
        return this;
    }
    /**
     * Validates the mnemonic phrase.
     * Checks for correct length, absence of invalid words, and proper checksum.
     * @returns {boolean} True if the mnemonic is valid, false otherwise.
     * @throws {Error} If the mnemonic is not an even multiple of 11 bits.
     */ check() {
        const mnemonic = this.mnemonic;
        // confirm no invalid words
        const words = mnemonic.split(this.Wordlist.space);
        let bin = '';
        for(let i = 0; i < words.length; i++){
            const ind = this.Wordlist.value.indexOf(words[i]);
            if (ind < 0) {
                return false;
            }
            bin = bin + ('00000000000' + ind.toString(2)).slice(-11);
        }
        if (bin.length % 11 !== 0) {
            throw new Error('internal error - entropy not an even multiple of 11 bits - ' + bin.length.toString());
        }
        // confirm checksum
        const cs = bin.length / 33;
        const hashBits = bin.slice(-cs);
        const nonhashBits = bin.slice(0, bin.length - cs);
        const buf = [];
        for(let i = 0; i < nonhashBits.length / 8; i++){
            buf.push(parseInt(bin.slice(i * 8, (i + 1) * 8), 2));
        }
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256"](buf.slice(0, nonhashBits.length / 8));
        let expectedHashBits = hash[0].toString(2);
        expectedHashBits = ('00000000' + expectedHashBits).slice(-8).slice(0, cs);
        return expectedHashBits === hashBits;
    }
    /**
     * Converts a mnemonic to a seed.
     * This method takes the instance's mnemonic phrase, combines it with a passphrase (if provided),
     * and uses PBKDF2 to generate a seed. It also validates the mnemonic before conversion.
     * This seed can then be used for generating deterministic keys.
     * @param {string} [passphrase=''] - An optional passphrase for added security.
     * @returns {this} The Mnemonic instance with the seed generated from the mnemonic.
     * @throws {Error} If the mnemonic does not pass validation or if the passphrase is not a string.
     */ mnemonic2Seed(passphrase = '') {
        let mnemonic = this.mnemonic;
        if (!this.check()) {
            throw new Error('Mnemonic does not pass the check - was the mnemonic typed incorrectly? Are there extra spaces?');
        }
        if (typeof passphrase !== 'string') {
            throw new Error('passphrase must be a string or undefined');
        }
        mnemonic = mnemonic.normalize('NFKD');
        passphrase = passphrase.normalize('NFKD');
        const mbuf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(mnemonic, 'utf8');
        const pbuf = [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])('mnemonic', 'utf8'),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(passphrase, 'utf8')
        ];
        this.seed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pbkdf2"](mbuf, pbuf, 2048, 64, 'sha512');
        return this;
    }
    /**
     * Determines the validity of a given passphrase with the mnemonic.
     * This method is useful for checking if a passphrase matches with the mnemonic.
     * @param {string} [passphrase=''] - The passphrase to validate.
     * @returns {boolean} True if the mnemonic and passphrase combination is valid, false otherwise.
     */ isValid(passphrase = '') {
        let isValid;
        try {
            this.mnemonic2Seed(passphrase);
            isValid = true;
        } catch  {
            isValid = false;
        }
        return isValid;
    }
    /**
     * Static method to check the validity of a given mnemonic and passphrase combination.
     * @param {string} mnemonic - The mnemonic phrase.
     * @param {string} [passphrase=''] - The passphrase to validate.
     * @returns {boolean} True if the combination is valid, false otherwise.
     */ static isValid(mnemonic, passphrase = '') {
        return new Mnemonic(mnemonic).isValid(passphrase);
    }
} //# sourceMappingURL=Mnemonic.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/ECIES.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ECIES
]);
// import { AESWrappercbc } from './aescbc'
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PublicKey.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Point.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function AES(key) {
    if (this._tables[0][0][0] === 0) this._precompute();
    let tmp, encKey, decKey;
    const sbox = this._tables[0][4];
    const decTable = this._tables[1];
    const keyLen = key.length;
    let rcon = 1;
    if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
        throw new Error('invalid aes key size');
    }
    this._key = [
        encKey = key.slice(0),
        decKey = []
    ];
    // schedule encryption keys
    let i;
    for(i = keyLen; i < 4 * keyLen + 28; i++){
        tmp = encKey[i - 1];
        // apply sbox
        if (i % keyLen === 0 || keyLen === 8 && i % keyLen === 4) {
            tmp = sbox[tmp >>> 24] << 24 ^ sbox[tmp >> 16 & 255] << 16 ^ sbox[tmp >> 8 & 255] << 8 ^ sbox[tmp & 255];
            // shift rows and add rcon
            if (i % keyLen === 0) {
                tmp = tmp << 8 ^ tmp >>> 24 ^ rcon << 24;
                rcon = rcon << 1 ^ (rcon >> 7) * 283;
            }
        }
        encKey[i] = encKey[i - keyLen] ^ tmp;
    }
    // schedule decryption keys
    for(let j = 0; i > 0; j++, i--){
        tmp = encKey[(j & 3) !== 0 ? i : i - 4];
        if (i <= 4 || j < 4) {
            decKey[j] = tmp;
        } else {
            decKey[j] = decTable[0][sbox[tmp >>> 24]] ^ decTable[1][sbox[tmp >> 16 & 255]] ^ decTable[2][sbox[tmp >> 8 & 255]] ^ decTable[3][sbox[tmp & 255]];
        }
    }
}
AES.prototype = {
    /**
     * Encrypt an array of 4 big-endian words.
     * @param {Array} data The plaintext.
     * @return {Array} The ciphertext.
     */ encrypt: function(data) {
        return this._crypt(data, 0);
    },
    /**
     * Decrypt an array of 4 big-endian words.
     * @param {Array} data The ciphertext.
     * @return {Array} The plaintext.
     */ decrypt: function(data) {
        return this._crypt(data, 1);
    },
    /**
     * The expanded S-box and inverse S-box tables.  These will be computed
     * on the client so that we don't have to send them down the wire.
     *
     * There are two tables, _tables[0] is for encryption and
     * _tables[1] is for decryption.
     *
     * The first 4 sub-tables are the expanded S-box with MixColumns.  The
     * last (_tables[01][4]) is the S-box itself.
     *
     * @private
     */ _tables: [
        [
            new Uint32Array(256),
            new Uint32Array(256),
            new Uint32Array(256),
            new Uint32Array(256),
            new Uint32Array(256)
        ],
        [
            new Uint32Array(256),
            new Uint32Array(256),
            new Uint32Array(256),
            new Uint32Array(256),
            new Uint32Array(256)
        ]
    ],
    // Expand the S-box tables.
    _precompute: function() {
        const encTable = this._tables[0];
        const decTable = this._tables[1];
        const sbox = encTable[4];
        const sboxInv = decTable[4];
        let i;
        let x;
        let xInv;
        const d = new Uint8Array(256);
        const th = new Uint8Array(256);
        let x2;
        let x4;
        let x8;
        let s;
        let tEnc;
        let tDec;
        // Compute double and third tables
        for(i = 0; i < 256; i++){
            th[(d[i] = i << 1 ^ (i >> 7) * 283) ^ i] = i;
        }
        for(x = xInv = 0; sbox[x] === 0; x ^= x2 !== 0 ? x2 : 1, xInv = th[xInv] !== 0 ? th[xInv] : 1){
            // Compute sbox
            s = xInv ^ xInv << 1 ^ xInv << 2 ^ xInv << 3 ^ xInv << 4;
            s = s >> 8 ^ s & 255 ^ 99;
            sbox[x] = s;
            sboxInv[s] = x;
            // Compute MixColumns
            x8 = d[x4 = d[x2 = d[x]]];
            tDec = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
            tEnc = d[s] * 0x101 ^ s * 0x1010100;
            for(i = 0; i < 4; i++){
                encTable[i][x] = tEnc = tEnc << 24 ^ tEnc >>> 8;
                decTable[i][s] = tDec = tDec << 24 ^ tDec >>> 8;
            }
        }
    },
    /**
     * Encryption and decryption core.
     * @param {Array} input Four words to be encrypted or decrypted.
     * @param dir The direction, 0 for encrypt and 1 for decrypt.
     * @return {Array} The four encrypted or decrypted words.
     * @private
     */ _crypt: function(input, dir) {
        if (input.length !== 4) {
            throw new Error('invalid aes block size');
        }
        const key = this._key[dir];
        // state variables a,b,c,d are loaded with pre-whitened data
        let a = input[0] ^ key[0];
        let b = input[dir === 1 ? 3 : 1] ^ key[1];
        let c = input[2] ^ key[2];
        let d = input[dir === 1 ? 1 : 3] ^ key[3];
        let a2;
        let b2;
        let c2;
        const nInnerRounds = key.length / 4 - 2;
        let i;
        let kIndex = 4;
        const out = new Uint32Array(4);
        const table = this._tables[dir];
        // load up the tables
        const t0 = table[0];
        const t1 = table[1];
        const t2 = table[2];
        const t3 = table[3];
        const sbox = table[4];
        // Inner rounds.  Cribbed from OpenSSL.
        for(i = 0; i < nInnerRounds; i++){
            a2 = t0[a >>> 24] ^ t1[b >> 16 & 255] ^ t2[c >> 8 & 255] ^ t3[d & 255] ^ key[kIndex];
            b2 = t0[b >>> 24] ^ t1[c >> 16 & 255] ^ t2[d >> 8 & 255] ^ t3[a & 255] ^ key[kIndex + 1];
            c2 = t0[c >>> 24] ^ t1[d >> 16 & 255] ^ t2[a >> 8 & 255] ^ t3[b & 255] ^ key[kIndex + 2];
            d = t0[d >>> 24] ^ t1[a >> 16 & 255] ^ t2[b >> 8 & 255] ^ t3[c & 255] ^ key[kIndex + 3];
            kIndex += 4;
            a = a2;
            b = b2;
            c = c2;
        }
        // Last round.
        for(i = 0; i < 4; i++){
            out[dir === 1 ? 3 & -i : i] = sbox[a >>> 24] << 24 ^ sbox[b >> 16 & 255] << 16 ^ sbox[c >> 8 & 255] << 8 ^ sbox[d & 255] ^ key[kIndex++];
            a2 = a;
            a = b;
            b = c;
            c = d;
            d = a2;
        }
        return out;
    }
};
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class AESWrapper {
    static encrypt(messageBuf, keyBuf) {
        const key = AESWrapper.buf2Words(keyBuf);
        const message = AESWrapper.buf2Words(messageBuf);
        const a = new AES(key);
        const enc = a.encrypt(message);
        const encBuf = AESWrapper.words2Buf(enc);
        return encBuf;
    }
    static decrypt(encBuf, keyBuf) {
        const enc = AESWrapper.buf2Words(encBuf);
        const key = AESWrapper.buf2Words(keyBuf);
        const a = new AES(key);
        const message = a.decrypt(enc);
        const messageBuf = AESWrapper.words2Buf(message);
        return messageBuf;
    }
    static buf2Words(buf) {
        if (buf.length % 4 !== 0) {
            throw new Error('buf length must be a multiple of 4');
        }
        const words = [];
        for(let i = 0; i < buf.length / 4; i++){
            const val = buf[i * 4] * 0x1000000 + // Shift the first byte by 24 bits
            (buf[i * 4 + 1] << 16 | buf[i * 4 + 2] << 8 | // Shift the third byte by 8 bits
            buf[i * 4 + 3]); // The fourth byte
            words.push(val);
        }
        return words;
    }
    static words2Buf(words) {
        const buf = new Array(words.length * 4);
        for(let i = 0; i < words.length; i++){
            const word = words[i];
            buf[i * 4] = word >>> 24 & 0xff;
            buf[i * 4 + 1] = word >>> 16 & 0xff;
            buf[i * 4 + 2] = word >>> 8 & 0xff;
            buf[i * 4 + 3] = word & 0xff;
        }
        return buf;
    }
}
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class CBC {
    static buf2BlocksBuf(buf, blockSize) {
        const bytesize = blockSize / 8;
        const blockBufs = [];
        for(let i = 0; i <= buf.length / bytesize; i++){
            let blockBuf = buf.slice(i * bytesize, i * bytesize + bytesize);
            if (blockBuf.length < blockSize) {
                blockBuf = CBC.pkcs7Pad(blockBuf, blockSize);
            }
            blockBufs.push(blockBuf);
        }
        return blockBufs;
    }
    static blockBufs2Buf(blockBufs) {
        let last = blockBufs[blockBufs.length - 1];
        last = CBC.pkcs7Unpad(last);
        blockBufs[blockBufs.length - 1] = last;
        const buf = blockBufs.flat();
        return buf;
    }
    static encrypt(messageBuf, ivBuf, blockCipher /* TODO: type */ , cipherKeyBuf) {
        const blockSize = ivBuf.length * 8;
        const blockBufs = CBC.buf2BlocksBuf(messageBuf, blockSize);
        const encBufs = CBC.encryptBlocks(blockBufs, ivBuf, blockCipher, cipherKeyBuf);
        const encBuf = encBufs.flat();
        return encBuf;
    }
    static decrypt(encBuf, ivBuf, blockCipher /* TODO: type */ , cipherKeyBuf) {
        const bytesize = ivBuf.length;
        const encBufs = [];
        for(let i = 0; i < encBuf.length / bytesize; i++){
            encBufs.push(encBuf.slice(i * bytesize, i * bytesize + bytesize));
        }
        const blockBufs = CBC.decryptBlocks(encBufs, ivBuf, blockCipher, cipherKeyBuf);
        const buf = CBC.blockBufs2Buf(blockBufs);
        return buf;
    }
    static encryptBlock(blockBuf, ivBuf, blockCipher /* TODO: type */ , cipherKeyBuf) {
        const xorbuf = CBC.xorBufs(blockBuf, ivBuf);
        const encBuf = blockCipher.encrypt(xorbuf, cipherKeyBuf);
        return encBuf;
    }
    static decryptBlock(encBuf, ivBuf, blockCipher /* TODO: type */ , cipherKeyBuf) {
        const xorbuf = blockCipher.decrypt(encBuf, cipherKeyBuf);
        const blockBuf = CBC.xorBufs(xorbuf, ivBuf);
        return blockBuf;
    }
    static encryptBlocks(blockBufs, ivBuf, blockCipher /* TODO: type */ , cipherKeyBuf) {
        const encBufs = [];
        for(let i = 0; i < blockBufs.length; i++){
            const blockBuf = blockBufs[i];
            const encBuf = CBC.encryptBlock(blockBuf, ivBuf, blockCipher, cipherKeyBuf);
            encBufs.push(encBuf);
            ivBuf = encBuf;
        }
        return encBufs;
    }
    static decryptBlocks(encBufs, ivBuf, blockCipher /* TODO: type */ , cipherKeyBuf) {
        const blockBufs = [];
        for(let i = 0; i < encBufs.length; i++){
            const encBuf = encBufs[i];
            const blockBuf = CBC.decryptBlock(encBuf, ivBuf, blockCipher, cipherKeyBuf);
            blockBufs.push(blockBuf);
            ivBuf = encBuf;
        }
        return blockBufs;
    }
    static pkcs7Pad(buf, blockSize) {
        const bytesize = blockSize / 8;
        const padbytesize = bytesize - buf.length;
        const pad = new Array(padbytesize);
        pad.fill(padbytesize);
        const paddedbuf = [
            ...buf,
            ...pad
        ];
        return paddedbuf;
    }
    static pkcs7Unpad(paddedbuf) {
        const padlength = paddedbuf[paddedbuf.length - 1];
        const padbuf = paddedbuf.slice(paddedbuf.length - padlength, paddedbuf.length);
        const padbuf2 = new Array(padlength);
        padbuf2.fill(padlength);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(padbuf) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(padbuf2)) {
            throw new Error('invalid padding');
        }
        return paddedbuf.slice(0, paddedbuf.length - padlength);
    }
    static xorBufs(buf1, buf2) {
        if (buf1.length !== buf2.length) {
            throw new Error('bufs must have the same length');
        }
        const buf = new Array(buf1.length);
        for(let i = 0; i < buf1.length; i++){
            buf[i] = buf1[i] ^ buf2[i];
        }
        return buf;
    }
}
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class AESCBC {
    static encrypt(messageBuf, cipherKeyBuf, ivBuf, concatIvBuf = true) {
        ivBuf = ivBuf ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(128 / 8);
        const ctBuf = CBC.encrypt(messageBuf, ivBuf, AESWrapper, cipherKeyBuf);
        if (concatIvBuf) {
            return [
                ...ivBuf,
                ...ctBuf
            ];
        } else {
            return [
                ...ctBuf
            ];
        }
    }
    static decrypt(encBuf, cipherKeyBuf, ivBuf) {
        if (ivBuf == null) {
            ivBuf = encBuf.slice(0, 128 / 8);
            const ctBuf = encBuf.slice(128 / 8);
            return CBC.decrypt(ctBuf, ivBuf, AESWrapper, cipherKeyBuf);
        } else {
            const ctBuf = encBuf;
            return CBC.decrypt(ctBuf, ivBuf, AESWrapper, cipherKeyBuf);
        }
    }
}
class ECIES {
    /**
     * Generates the initialization vector (iv), encryption key (kE), and MAC key (kM)
     * using the sender's private key and receiver's public key.
     *
     * @param {PrivateKey} privKey - The sender's private key.
     * @param {PublicKey} pubKey - The receiver's public key.
     * @returns {Object} An object containing the iv, kE, and kM as number arrays.
     */ static ivkEkM(privKey, pubKey) {
        const r = privKey;
        const KB = pubKey;
        const P = KB.mul(r);
        const S = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](P.x, P.y);
        const Sbuf = S.encode(true);
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha512"](Sbuf);
        return {
            iv: hash.slice(0, 16),
            kE: hash.slice(16, 32),
            kM: hash.slice(32, 64)
        };
    }
    /**
     * Encrypts a given message using the Electrum ECIES method.
     *
     * @param {number[]} messageBuf - The message to be encrypted, in number array format.
     * @param {PublicKey} toPublicKey - The public key of the recipient.
     * @param {PrivateKey} [fromPrivateKey] - The private key of the sender. If not provided, a random private key is used.
     * @param {boolean} [noKey=false] - If true, does not include the sender's public key in the encrypted message.
     * @returns {number[]} The encrypted message as a number array.
     */ static electrumEncrypt(messageBuf, toPublicKey, fromPrivateKey, noKey = false) {
        let Rbuf = null;
        if (fromPrivateKey == null) {
            fromPrivateKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromRandom();
        }
        if (!noKey) {
            Rbuf = fromPrivateKey.toPublicKey().encode(true);
        }
        const { iv, kE, kM } = ECIES.ivkEkM(fromPrivateKey, toPublicKey);
        const ciphertext = AESCBC.encrypt(messageBuf, kE, iv, false);
        const BIE1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])('BIE1', 'utf8');
        let encBuf;
        if (Rbuf !== undefined && Rbuf !== null && Rbuf.length > 0) {
            encBuf = [
                ...BIE1,
                ...Rbuf,
                ...ciphertext
            ];
        } else {
            encBuf = [
                ...BIE1,
                ...ciphertext
            ];
        }
        const hmac = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256hmac"](kM, encBuf);
        return [
            ...encBuf,
            ...hmac
        ];
    }
    /**
     * Decrypts a message encrypted using the Electrum ECIES method.
     *
     * @param {number[]} encBuf - The encrypted message buffer.
     * @param {PrivateKey} toPrivateKey - The private key of the recipient.
     * @param {PublicKey} [fromPublicKey=null] - The public key of the sender. If not provided, it is extracted from the message.
     * @returns {number[]} The decrypted message as a number array.
     */ static electrumDecrypt(encBuf, toPrivateKey, fromPublicKey) {
        const tagLength = 32;
        const magic = encBuf.slice(0, 4);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(magic, 'utf8') !== 'BIE1') {
            throw new Error('Invalid Magic');
        }
        let offset = 4;
        // Determine if the sender's public key is included in encBuf
        let Rbuf = null;
        if (encBuf.length - offset - tagLength >= 33) {
            const firstByte = encBuf[offset];
            if (firstByte === 0x02 || firstByte === 0x03) {
                // Compressed public key
                Rbuf = encBuf.slice(offset, offset + 33);
                offset += 33;
            } else if (firstByte === 0x04) {
                // Uncompressed public key
                Rbuf = encBuf.slice(offset, offset + 65);
                offset += 65;
            }
        }
        if (Rbuf !== null) {
            if (fromPublicKey == null) {
                fromPublicKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromString((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(Rbuf));
            }
        } else {
            if (fromPublicKey == null) {
                throw new Error('Sender public key is required');
            }
        }
        const { iv, kE, kM } = ECIES.ivkEkM(toPrivateKey, fromPublicKey);
        const ciphertext = encBuf.slice(offset, encBuf.length - tagLength);
        const hmac = encBuf.slice(encBuf.length - tagLength, encBuf.length);
        const hmac2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256hmac"](kM, encBuf.slice(0, encBuf.length - tagLength));
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(hmac) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(hmac2)) {
            throw new Error('Invalid checksum');
        }
        return AESCBC.decrypt(ciphertext, kE, iv);
    }
    /**
     * Encrypts a given message using the Bitcore variant of ECIES.
     *
     * @param {number[]} messageBuf - The message to be encrypted, in number array format.
     * @param {PublicKey} toPublicKey - The public key of the recipient.
     * @param {PrivateKey} [fromPrivateKey] - The private key of the sender. If not provided, a random private key is used.
     * @param {number[]} [ivBuf] - The initialization vector for encryption. If not provided, a random IV is used.
     * @returns {number[]} The encrypted message as a number array.
     */ static bitcoreEncrypt(messageBuf, toPublicKey, fromPrivateKey, ivBuf) {
        if (fromPrivateKey == null) {
            fromPrivateKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromRandom();
        }
        if (ivBuf == null) {
            ivBuf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(16);
        }
        const r = fromPrivateKey;
        const RPublicKey = fromPrivateKey.toPublicKey();
        const RBuf = RPublicKey.encode(true);
        const KB = toPublicKey;
        const P = KB.mul(r);
        const S = P.getX();
        const Sbuf = S.toArray('be', 32);
        const kEkM = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha512"](Sbuf);
        const kE = kEkM.slice(0, 32);
        const kM = kEkM.slice(32, 64);
        const c = AESCBC.encrypt(messageBuf, kE, ivBuf);
        const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256hmac"](kM, [
            ...c
        ]);
        const encBuf = [
            ...RBuf,
            ...c,
            ...d
        ];
        return encBuf;
    }
    /**
     * Decrypts a message encrypted using the Bitcore variant of ECIES.
     *
     * @param {number[]} encBuf - The encrypted message buffer.
     * @param {PrivateKey} toPrivateKey - The private key of the recipient.
     * @returns {number[]} The decrypted message as a number array.
     */ static bitcoreDecrypt(encBuf, toPrivateKey) {
        const kB = toPrivateKey;
        const fromPublicKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromString((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(encBuf.slice(0, 33)));
        const R = fromPublicKey;
        const P = R.mul(kB);
        if (P.eq(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Point$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](0, 0))) {
            throw new Error('P equals 0');
        }
        const S = P.getX();
        const Sbuf = S.toArray('be', 32);
        const kEkM = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha512"](Sbuf);
        const kE = kEkM.slice(0, 32);
        const kM = kEkM.slice(32, 64);
        const c = encBuf.slice(33, encBuf.length - 32);
        const d = encBuf.slice(encBuf.length - 32, encBuf.length);
        const d2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256hmac"](kM, c);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(d) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(d2)) {
            throw new Error('Invalid checksum');
        }
        const messageBuf = AESCBC.decrypt(c, kE);
        return [
            ...messageBuf
        ];
    }
} //# sourceMappingURL=ECIES.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/Utxo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>fromUtxo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/LockingScript.js [app-ssr] (ecmascript)");
;
;
function fromUtxo(utxo, unlockingScriptTemplate) {
    const sourceTransaction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](0, [], [], 0);
    sourceTransaction.outputs = Array(utxo.vout + 1).fill(null);
    sourceTransaction.outputs[utxo.vout] = {
        satoshis: utxo.satoshis,
        lockingScript: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromHex(utxo.script)
    };
    return {
        sourceTransaction,
        sourceTXID: utxo.txid,
        sourceOutputIndex: utxo.vout,
        unlockingScriptTemplate,
        sequence: 0xffffffff
    };
} //# sourceMappingURL=Utxo.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$BSM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/BSM.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$HD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/HD.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$Mnemonic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/Mnemonic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$ECIES$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/ECIES.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$Utxo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/Utxo.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BSM",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$BSM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    "ECIES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$ECIES$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "HD",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$HD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "Mnemonic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$Mnemonic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "fromUtxo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$Utxo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$BSM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/BSM.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$HD$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/HD.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$Mnemonic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/Mnemonic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$ECIES$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/ECIES.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$compat$2f$Utxo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/compat/Utxo.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/totp/totp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOTP",
    ()=>TOTP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/BigNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
;
;
;
class TOTP {
    /**
     * Generates a Time-based One-Time Password (TOTP).
     * @param {number[]} secret - The secret key for TOTP.
     * @param {TOTPOptions} options - Optional parameters for TOTP.
     * @returns {string} The generated TOTP.
     */ static generate(secret, options) {
        const _options = this.withDefaultOptions(options);
        const counter = this.getCounter(_options.timestamp, _options.period);
        const otp = generateHOTP(secret, counter, _options);
        return otp;
    }
    /**
     * Validates a Time-based One-Time Password (TOTP).
     * @param {number[]} secret - The secret key for TOTP.
     * @param {string} passcode - The passcode to validate.
     * @param {TOTPValidateOptions} options - Optional parameters for TOTP validation.
     * @returns {boolean} A boolean indicating whether the passcode is valid.
     */ static validate(secret, passcode, options) {
        const _options = this.withDefaultValidateOptions(options);
        passcode = passcode.trim();
        if (passcode.length !== _options.digits) {
            return false;
        }
        const counter = this.getCounter(_options.timestamp, _options.period);
        const counters = [
            counter
        ];
        for(let i = 1; i <= _options.skew; i++){
            counters.push(counter + i);
            counters.push(counter - i);
        }
        for (const c of counters){
            const expected = generateHOTP(secret, c, _options);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constantTimeEquals"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(passcode, 'utf8'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])(expected, 'utf8'))) {
                return true;
            }
        }
        return false;
    }
    static getCounter(timestamp, period) {
        const epochSeconds = Math.floor(timestamp / 1000);
        const counter = Math.floor(epochSeconds / period);
        return counter;
    }
    static withDefaultOptions(options) {
        return {
            digits: 2,
            algorithm: 'SHA-1',
            period: 30,
            timestamp: Date.now(),
            ...options
        };
    }
    static withDefaultValidateOptions(options) {
        return {
            skew: 1,
            ...this.withDefaultOptions(options)
        };
    }
}
function generateHOTP(secret, counter, options) {
    const timePad = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](counter).toArray('be', 8);
    const hmac = calcHMAC(secret, timePad, options.algorithm);
    const signature = hmac.digest();
    // RFC 4226 https://datatracker.ietf.org/doc/html/rfc4226#section-5.4
    const offset = signature[signature.length - 1] & 0x0f; // offset is the last byte in the hmac
    const fourBytesRange = signature.slice(offset, offset + 4); // starting from offset, get 4 bytes
    const mask = 0x7fffffff; // 32-bit number with a leading 0 followed by 31 ones [0111 (...) 1111]
    const masked = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$BigNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](fourBytesRange).toNumber() & mask;
    const otp = masked.toString().slice(-options.digits);
    return otp;
}
function calcHMAC(secret, timePad, algorithm) {
    switch(algorithm){
        case 'SHA-1':
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA1HMAC"](secret).update(timePad);
        case 'SHA-256':
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA256HMAC"](secret).update(timePad);
        case 'SHA-512':
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHA512HMAC"](secret).update(timePad);
        default:
            throw new Error('unsupported HMAC algorithm');
    }
} //# sourceMappingURL=totp.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/totp/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$totp$2f$totp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/totp/totp.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/OverlayAdminTokenTemplate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OverlayAdminTokenTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$PushDrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/PushDrop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript) <export * as Utils>");
;
;
class OverlayAdminTokenTemplate {
    pushDrop;
    /**
     * Decodes a SHIP or SLAP advertisement from a given locking script.
     * @param script Locking script comprising a SHIP or SLAP token to decode
     * @returns Decoded SHIP or SLAP advertisement
     */ static decode(script) {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$PushDrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].decode(script);
        if (result.fields.length < 4) {
            throw new Error('Invalid SHIP/SLAP advertisement!');
        }
        const protocol = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(result.fields[0]);
        if (protocol !== 'SHIP' && protocol !== 'SLAP') {
            throw new Error('Invalid protocol type!');
        }
        const identityKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toHex(result.fields[1]);
        const domain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(result.fields[2]);
        const topicOrService = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(result.fields[3]);
        return {
            protocol,
            identityKey,
            domain,
            topicOrService
        };
    }
    /**
     * Constructs a new Overlay Admin template instance
     * @param wallet Wallet to use for locking and unlocking
     */ constructor(wallet, originator){
        this.pushDrop = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$PushDrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](wallet, originator);
    }
    /**
     * Creates a new advertisement locking script
     * @param protocol SHIP or SLAP
     * @param domain Domain where the topic or service is available
     * @param topicOrService Topic or service to advertise
     * @returns Locking script comprising the advertisement token
     */ async lock(protocol, domain, topicOrService) {
        const { publicKey: identityKey } = await this.pushDrop.wallet.getPublicKey({
            identityKey: true
        });
        return await this.pushDrop.lock([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toArray(protocol, 'utf8'),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toArray(identityKey, 'hex'),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toArray(domain, 'utf8'),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toArray(topicOrService, 'utf8')
        ], [
            2,
            protocol === 'SHIP' ? 'Service Host Interconnect' : 'Service Lookup Availability'
        ], '1', 'self');
    }
    /**
     * Unlocks an advertisement token as part of a transaction.
     * @param protocol SHIP or SLAP, depending on the token to unlock
     * @returns Script unlocker capable of unlocking the advertisement token
     */ unlock(protocol) {
        return this.pushDrop.unlock([
            2,
            protocol === 'SHIP' ? 'Service Host Interconnect' : 'Service Lookup Availability'
        ], '1', 'self');
    }
} //# sourceMappingURL=OverlayAdminTokenTemplate.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/HostReputationTracker.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HostReputationTracker",
    ()=>HostReputationTracker,
    "getOverlayHostReputationTracker",
    ()=>getOverlayHostReputationTracker
]);
const DEFAULT_LATENCY_MS = 1500;
const LATENCY_SMOOTHING_FACTOR = 0.25;
const BASE_BACKOFF_MS = 1000;
const MAX_BACKOFF_MS = 60_000;
const FAILURE_PENALTY_MS = 400;
const SUCCESS_BONUS_MS = 30;
const FAILURE_BACKOFF_GRACE = 2;
const STORAGE_KEY = 'bsvsdk_overlay_host_reputation_v1';
class HostReputationTracker {
    stats;
    store;
    constructor(store){
        this.stats = new Map();
        this.store = store ?? this.getLocalStorageAdapter();
        this.loadFromStorage();
    }
    reset() {
        this.stats.clear();
    }
    recordSuccess(host, latencyMs) {
        const entry = this.getOrCreate(host);
        const now = Date.now();
        const safeLatency = Number.isFinite(latencyMs) && latencyMs >= 0 ? latencyMs : DEFAULT_LATENCY_MS;
        if (entry.avgLatencyMs === null) {
            entry.avgLatencyMs = safeLatency;
        } else {
            entry.avgLatencyMs = (1 - LATENCY_SMOOTHING_FACTOR) * entry.avgLatencyMs + LATENCY_SMOOTHING_FACTOR * safeLatency;
        }
        entry.lastLatencyMs = safeLatency;
        entry.totalSuccesses += 1;
        entry.consecutiveFailures = 0;
        entry.backoffUntil = 0;
        entry.lastUpdatedAt = now;
        entry.lastError = undefined;
        this.saveToStorage();
    }
    recordFailure(host, reason) {
        const entry = this.getOrCreate(host);
        const now = Date.now();
        entry.totalFailures += 1;
        entry.consecutiveFailures += 1;
        const msg = typeof reason === 'string' ? reason : reason instanceof Error ? reason.message : undefined;
        const immediate = typeof msg === 'string' && (msg.includes('ERR_NAME_NOT_RESOLVED') || msg.includes('ENOTFOUND') || msg.includes('getaddrinfo') || msg.includes('Failed to fetch'));
        if (immediate && entry.consecutiveFailures < FAILURE_BACKOFF_GRACE + 1) {
            entry.consecutiveFailures = FAILURE_BACKOFF_GRACE + 1;
        }
        const penaltyLevel = Math.max(entry.consecutiveFailures - FAILURE_BACKOFF_GRACE, 0);
        if (penaltyLevel === 0) {
            entry.backoffUntil = 0;
        } else {
            const backoffDuration = Math.min(MAX_BACKOFF_MS, BASE_BACKOFF_MS * Math.pow(2, penaltyLevel - 1));
            entry.backoffUntil = now + backoffDuration;
        }
        entry.lastUpdatedAt = now;
        entry.lastError = typeof reason === 'string' ? reason : reason instanceof Error ? reason.message : undefined;
        this.saveToStorage();
    }
    rankHosts(hosts, now = Date.now()) {
        const seen = new Map();
        hosts.forEach((host, idx)=>{
            if (typeof host !== 'string' || host.length === 0) return;
            if (!seen.has(host)) seen.set(host, idx);
        });
        const orderedHosts = Array.from(seen.keys());
        const ranked = orderedHosts.map((host)=>{
            const entry = this.getOrCreate(host);
            return {
                ...entry,
                score: this.computeScore(entry, now),
                originalOrder: seen.get(host) ?? 0
            };
        });
        ranked.sort((a, b)=>{
            const aInBackoff = a.backoffUntil > now;
            const bInBackoff = b.backoffUntil > now;
            if (aInBackoff !== bInBackoff) return aInBackoff ? 1 : -1;
            if (a.score !== b.score) return a.score - b.score;
            if (a.totalSuccesses !== b.totalSuccesses) return b.totalSuccesses - a.totalSuccesses;
            return a.originalOrder - b.originalOrder;
        });
        return ranked.map(({ originalOrder, ...rest })=>rest);
    }
    snapshot(host) {
        const entry = this.stats.get(host);
        return entry != null ? {
            ...entry
        } : undefined;
    }
    getStorage() {
        try {
            const g = typeof globalThis === 'object' ? globalThis : undefined;
            if (g == null || g.localStorage == null) return undefined;
            return g.localStorage;
        } catch  {
            return undefined;
        }
    }
    getLocalStorageAdapter() {
        const s = this.getStorage();
        if (s == null) return undefined;
        return {
            get: (key)=>{
                try {
                    return s.getItem(key);
                } catch  {
                    return null;
                }
            },
            set: (key, value)=>{
                try {
                    s.setItem(key, value);
                } catch  {}
            }
        };
    }
    loadFromStorage() {
        const s = this.store;
        if (s == null) return;
        try {
            const raw = s.get(STORAGE_KEY);
            if (typeof raw !== 'string' || raw.length === 0) return;
            const data = JSON.parse(raw);
            if (typeof data !== 'object' || data === null) return;
            this.stats.clear();
            for (const k of Object.keys(data)){
                const v = data[k];
                if (v != null && typeof v === 'object') {
                    const entry = {
                        host: String(v.host ?? k),
                        totalSuccesses: Number(v.totalSuccesses ?? 0),
                        totalFailures: Number(v.totalFailures ?? 0),
                        consecutiveFailures: Number(v.consecutiveFailures ?? 0),
                        avgLatencyMs: v.avgLatencyMs == null ? null : Number(v.avgLatencyMs),
                        lastLatencyMs: v.lastLatencyMs == null ? null : Number(v.lastLatencyMs),
                        backoffUntil: Number(v.backoffUntil ?? 0),
                        lastUpdatedAt: Number(v.lastUpdatedAt ?? 0),
                        lastError: typeof v.lastError === 'string' ? v.lastError : undefined
                    };
                    this.stats.set(entry.host, entry);
                }
            }
        } catch  {}
    }
    saveToStorage() {
        const s = this.store;
        if (s == null) return;
        try {
            const obj = {};
            for (const [host, entry] of this.stats.entries()){
                obj[host] = entry;
            }
            s.set(STORAGE_KEY, JSON.stringify(obj));
        } catch  {}
    }
    computeScore(entry, now) {
        const latency = entry.avgLatencyMs ?? DEFAULT_LATENCY_MS;
        const failurePenalty = entry.consecutiveFailures * FAILURE_PENALTY_MS;
        const successBonus = Math.min(entry.totalSuccesses * SUCCESS_BONUS_MS, latency / 2);
        const backoffPenalty = entry.backoffUntil > now ? entry.backoffUntil - now : 0;
        return latency + failurePenalty + backoffPenalty - successBonus;
    }
    getOrCreate(host) {
        let entry = this.stats.get(host);
        if (entry == null) {
            entry = {
                host,
                totalSuccesses: 0,
                totalFailures: 0,
                consecutiveFailures: 0,
                avgLatencyMs: null,
                lastLatencyMs: null,
                backoffUntil: 0,
                lastUpdatedAt: 0
            };
            this.stats.set(host, entry);
        }
        return entry;
    }
}
const globalTracker = new HostReputationTracker();
const getOverlayHostReputationTracker = ()=>globalTracker; //# sourceMappingURL=HostReputationTracker.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/LookupResolver.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SLAP_TRACKERS",
    ()=>DEFAULT_SLAP_TRACKERS,
    "DEFAULT_TESTNET_SLAP_TRACKERS",
    ()=>DEFAULT_TESTNET_SLAP_TRACKERS,
    "HTTPSOverlayLookupFacilitator",
    ()=>HTTPSOverlayLookupFacilitator,
    "default",
    ()=>LookupResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-ssr] (ecmascript) <export default as Transaction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$OverlayAdminTokenTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/OverlayAdminTokenTemplate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$HostReputationTracker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/HostReputationTracker.js [app-ssr] (ecmascript)");
;
;
;
;
const defaultFetch = typeof globalThis !== 'undefined' && typeof globalThis.fetch === 'function' ? globalThis.fetch.bind(globalThis) : fetch;
const DEFAULT_SLAP_TRACKERS = [
    // BSVA clusters
    'https://overlay-us-1.bsvb.tech',
    'https://overlay-eu-1.bsvb.tech',
    'https://overlay-ap-1.bsvb.tech',
    // Babbage primary overlay service
    'https://users.bapp.dev'
];
const DEFAULT_TESTNET_SLAP_TRACKERS = [
    // Babbage primary testnet overlay service
    'https://testnet-users.bapp.dev'
];
const MAX_TRACKER_WAIT_TIME = 5000;
class HTTPSOverlayLookupFacilitator {
    fetchClient;
    allowHTTP;
    constructor(httpClient = defaultFetch, allowHTTP = false){
        if (typeof httpClient !== 'function') {
            throw new Error('HTTPSOverlayLookupFacilitator requires a fetch implementation. ' + 'In environments without fetch, provide a polyfill or custom implementation.');
        }
        this.fetchClient = httpClient;
        this.allowHTTP = allowHTTP;
    }
    async lookup(url, question, timeout = 5000) {
        if (!url.startsWith('https:') && !this.allowHTTP) {
            throw new Error('HTTPS facilitator can only use URLs that start with "https:"');
        }
        const controller = typeof AbortController !== 'undefined' ? new AbortController() : undefined;
        const timer = setTimeout(()=>{
            try {
                controller?.abort();
            } catch  {}
        }, timeout);
        try {
            const fco = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Aggregation': 'yes'
                },
                body: JSON.stringify({
                    service: question.service,
                    query: question.query
                }),
                signal: controller?.signal
            };
            const response = await this.fetchClient(`${url}/lookup`, fco);
            if (!response.ok) throw new Error(`Failed to facilitate lookup (HTTP ${response.status})`);
            if (response.headers.get('content-type') === 'application/octet-stream') {
                const payload = await response.arrayBuffer();
                const r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reader"]([
                    ...new Uint8Array(payload)
                ]);
                const nOutpoints = r.readVarIntNum();
                const outpoints = [];
                for(let i = 0; i < nOutpoints; i++){
                    const txid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](r.read(32));
                    const outputIndex = r.readVarIntNum();
                    const contextLength = r.readVarIntNum();
                    let context;
                    if (contextLength > 0) {
                        context = r.read(contextLength);
                    }
                    outpoints.push({
                        txid,
                        outputIndex,
                        context
                    });
                }
                const beef = r.read();
                return {
                    type: 'output-list',
                    outputs: outpoints.map((x)=>({
                            outputIndex: x.outputIndex,
                            context: x.context,
                            beef: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromBEEF(beef, x.txid).toBEEF()
                        }))
                };
            } else {
                return await response.json();
            }
        } catch (e) {
            // Normalize timeouts to a consistent error message
            if (e?.name === 'AbortError') throw new Error('Request timed out');
            throw e;
        } finally{
            clearTimeout(timer);
        }
    }
}
class LookupResolver {
    facilitator;
    slapTrackers;
    hostOverrides;
    additionalHosts;
    networkPreset;
    hostReputation;
    // ---- Caches / memoization ----
    hostsCache;
    hostsInFlight;
    hostsTtlMs;
    hostsMaxEntries;
    txMemo;
    txMemoTtlMs;
    constructor(config = {}){
        this.networkPreset = config.networkPreset ?? 'mainnet';
        this.facilitator = config.facilitator ?? new HTTPSOverlayLookupFacilitator(undefined, this.networkPreset === 'local');
        this.slapTrackers = config.slapTrackers ?? (this.networkPreset === 'mainnet' ? DEFAULT_SLAP_TRACKERS : DEFAULT_TESTNET_SLAP_TRACKERS);
        const hostOverrides = config.hostOverrides ?? {};
        this.assertValidOverrideServices(hostOverrides);
        this.hostOverrides = hostOverrides;
        this.additionalHosts = config.additionalHosts ?? {};
        const rs = config.reputationStorage;
        if (rs === 'localStorage') {
            this.hostReputation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$HostReputationTracker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HostReputationTracker"]();
        } else if (typeof rs === 'object' && rs !== null && typeof rs.get === 'function' && typeof rs.set === 'function') {
            this.hostReputation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$HostReputationTracker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HostReputationTracker"](rs);
        } else {
            this.hostReputation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$HostReputationTracker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOverlayHostReputationTracker"])();
        }
        // cache tuning
        this.hostsTtlMs = config.cache?.hostsTtlMs ?? 5 * 60 * 1000; // 5 min
        this.hostsMaxEntries = config.cache?.hostsMaxEntries ?? 128;
        this.txMemoTtlMs = config.cache?.txMemoTtlMs ?? 10 * 60 * 1000; // 10 min
        this.hostsCache = new Map();
        this.hostsInFlight = new Map();
        this.txMemo = new Map();
    }
    /**
     * Given a LookupQuestion, returns a LookupAnswer. Aggregates across multiple services and supports resiliency.
     */ async query(question, timeout) {
        let competentHosts = [];
        if (question.service === 'ls_slap') {
            competentHosts = this.networkPreset === 'local' ? [
                'http://localhost:8080'
            ] : this.slapTrackers;
        } else if (this.hostOverrides[question.service] != null) {
            competentHosts = this.hostOverrides[question.service];
        } else if (this.networkPreset === 'local') {
            competentHosts = [
                'http://localhost:8080'
            ];
        } else {
            competentHosts = await this.getCompetentHostsCached(question.service);
        }
        if (this.additionalHosts[question.service]?.length > 0) {
            // preserve order: resolved hosts first, then additional (unique)
            const extra = this.additionalHosts[question.service];
            const seen = new Set(competentHosts);
            for (const h of extra)if (!seen.has(h)) competentHosts.push(h);
        }
        if (competentHosts.length < 1) {
            throw new Error(`No competent ${this.networkPreset} hosts found by the SLAP trackers for lookup service: ${question.service}`);
        }
        const rankedHosts = this.prepareHostsForQuery(competentHosts, `lookup service ${question.service}`);
        if (rankedHosts.length < 1) {
            throw new Error(`All competent hosts for ${question.service} are temporarily unavailable due to backoff.`);
        }
        // Fire all hosts with per-host timeout, harvest successful output-list responses
        const hostResponses = await Promise.allSettled(rankedHosts.map(async (host)=>{
            return await this.lookupHostWithTracking(host, question, timeout);
        }));
        const outputsMap = new Map();
        // Memo key helper for tx parsing
        const beefKey = (beef)=>{
            if (typeof beef !== 'object') return ''; // The invalid BEEF has an empty key.
            // A fast and deterministic key for memoization; avoids large JSON strings
            // since beef is an array of integers, join is safe and compact.
            return beef.join(',');
        };
        for (const result of hostResponses){
            if (result.status !== 'fulfilled') continue;
            const response = result.value;
            if (response?.type !== 'output-list' || !Array.isArray(response.outputs)) continue;
            for (const output of response.outputs){
                const keyForBeef = beefKey(output.beef);
                let memo = this.txMemo.get(keyForBeef);
                const now = Date.now();
                if (typeof memo !== 'object' || memo === null || memo.expiresAt <= now) {
                    try {
                        const txId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromBEEF(output.beef).id('hex');
                        memo = {
                            txId,
                            expiresAt: now + this.txMemoTtlMs
                        };
                        // prune opportunistically if the map gets too large (cheap heuristic)
                        if (this.txMemo.size > 4096) this.evictOldest(this.txMemo);
                        this.txMemo.set(keyForBeef, memo);
                    } catch  {
                        continue;
                    }
                }
                const uniqKey = `${memo.txId}.${output.outputIndex}`;
                // last-writer wins is fine here; outputs are identical if uniqKey matches
                outputsMap.set(uniqKey, output);
            }
        }
        return {
            type: 'output-list',
            outputs: Array.from(outputsMap.values())
        };
    }
    /**
     * Cached wrapper for competent host discovery with stale-while-revalidate.
     */ async getCompetentHostsCached(service) {
        const now = Date.now();
        const cached = this.hostsCache.get(service);
        // if fresh, return immediately
        if (typeof cached === 'object' && cached.expiresAt > now) {
            return cached.hosts.slice();
        }
        // if stale but present, kick off a refresh if not already in-flight and return stale
        if (typeof cached === 'object' && cached.expiresAt <= now) {
            if (!this.hostsInFlight.has(service)) {
                this.hostsInFlight.set(service, this.refreshHosts(service).finally(()=>{
                    this.hostsInFlight.delete(service);
                }));
            }
            return cached.hosts.slice();
        }
        // no cache: coalesce concurrent requests
        if (this.hostsInFlight.has(service)) {
            try {
                const hosts = await this.hostsInFlight.get(service);
                if (typeof hosts !== 'object') {
                    throw new Error('Hosts is not defined.');
                }
                return hosts.slice();
            } catch  {
            // fall through to a fresh attempt below
            }
        }
        const promise = this.refreshHosts(service).finally(()=>{
            this.hostsInFlight.delete(service);
        });
        this.hostsInFlight.set(service, promise);
        const hosts = await promise;
        return hosts.slice();
    }
    /**
     * Actually resolves competent hosts from SLAP trackers and updates cache.
     */ async refreshHosts(service) {
        const hosts = await this.findCompetentHosts(service);
        const expiresAt = Date.now() + this.hostsTtlMs;
        // bounded cache with simple FIFO eviction
        if (!this.hostsCache.has(service) && this.hostsCache.size >= this.hostsMaxEntries) {
            const oldestKey = this.hostsCache.keys().next().value;
            if (oldestKey !== undefined) this.hostsCache.delete(oldestKey);
        }
        this.hostsCache.set(service, {
            hosts,
            expiresAt
        });
        return hosts;
    }
    /**
     * Returns a list of competent hosts for a given lookup service.
     * @param service Service for which competent hosts are to be returned
     * @returns Array of hosts competent for resolving queries
     */ async findCompetentHosts(service) {
        const query = {
            service: 'ls_slap',
            query: {
                service
            }
        };
        // Query all SLAP trackers; tolerate failures.
        const trackerHosts = this.prepareHostsForQuery(this.slapTrackers, 'SLAP trackers');
        if (trackerHosts.length === 0) return [];
        const trackerResponses = await Promise.allSettled(trackerHosts.map(async (tracker)=>await this.lookupHostWithTracking(tracker, query, MAX_TRACKER_WAIT_TIME)));
        const hosts = new Set();
        for (const result of trackerResponses){
            if (result.status !== 'fulfilled') continue;
            const answer = result.value;
            if (answer.type !== 'output-list') continue;
            for (const output of answer.outputs){
                try {
                    const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromBEEF(output.beef);
                    const script = tx.outputs[output.outputIndex]?.lockingScript;
                    if (typeof script !== 'object' || script === null) continue;
                    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$OverlayAdminTokenTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].decode(script);
                    if (parsed.topicOrService !== service || parsed.protocol !== 'SLAP') continue;
                    if (typeof parsed.domain === 'string' && parsed.domain.length > 0) {
                        hosts.add(parsed.domain);
                    }
                } catch  {
                    continue;
                }
            }
        }
        return [
            ...hosts
        ];
    }
    /** Evict an arbitrary “oldest” entry from a Map (iteration order). */ evictOldest(m) {
        const firstKey = m.keys().next().value;
        if (firstKey !== undefined) m.delete(firstKey);
    }
    assertValidOverrideServices(overrides) {
        for (const service of Object.keys(overrides)){
            if (!service.startsWith('ls_')) {
                throw new Error(`Host override service names must start with "ls_": ${service}`);
            }
        }
    }
    prepareHostsForQuery(hosts, context) {
        if (hosts.length === 0) return [];
        const now = Date.now();
        const ranked = this.hostReputation.rankHosts(hosts, now);
        const available = ranked.filter((h)=>h.backoffUntil <= now).map((h)=>h.host);
        if (available.length > 0) return available;
        const soonest = Math.min(...ranked.map((h)=>h.backoffUntil));
        const waitMs = Math.max(soonest - now, 0);
        throw new Error(`All ${context} hosts are backing off for approximately ${waitMs}ms due to repeated failures.`);
    }
    async lookupHostWithTracking(host, question, timeout) {
        const startedAt = Date.now();
        try {
            const answer = await this.facilitator.lookup(host, question, timeout);
            const latency = Date.now() - startedAt;
            const isValid = typeof answer === 'object' && answer !== null && answer.type === 'output-list' && Array.isArray(answer.outputs);
            if (isValid) {
                this.hostReputation.recordSuccess(host, latency);
            } else {
                this.hostReputation.recordFailure(host, 'Invalid lookup response');
            }
            return answer;
        } catch (err) {
            this.hostReputation.recordFailure(host, err);
            throw err;
        }
    }
} //# sourceMappingURL=LookupResolver.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/SHIPBroadcaster.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTTPSOverlayBroadcastFacilitator",
    ()=>HTTPSOverlayBroadcastFacilitator,
    "default",
    ()=>TopicBroadcaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-ssr] (ecmascript) <export default as Transaction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/LookupResolver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$OverlayAdminTokenTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/OverlayAdminTokenTemplate.js [app-ssr] (ecmascript)");
;
;
;
;
const MAX_SHIP_QUERY_TIMEOUT = 5000;
class HTTPSOverlayBroadcastFacilitator {
    httpClient;
    allowHTTP;
    constructor(httpClient = fetch, allowHTTP = false){
        this.httpClient = httpClient;
        this.allowHTTP = allowHTTP;
    }
    async send(url, taggedBEEF) {
        if (!url.startsWith('https:') && !this.allowHTTP) {
            throw new Error('HTTPS facilitator can only use URLs that start with "https:"');
        }
        const headers = {
            'Content-Type': 'application/octet-stream',
            'X-Topics': JSON.stringify(taggedBEEF.topics)
        };
        let body;
        if (Array.isArray(taggedBEEF.offChainValues)) {
            headers['x-includes-off-chain-values'] = 'true';
            const w = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Writer"]();
            w.writeVarIntNum(taggedBEEF.beef.length);
            w.write(taggedBEEF.beef);
            w.write(taggedBEEF.offChainValues);
            body = new Uint8Array(w.toArray());
        } else {
            body = new Uint8Array(taggedBEEF.beef);
        }
        const response = await fetch(`${url}/submit`, {
            method: 'POST',
            headers,
            body
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to facilitate broadcast');
        }
    }
}
class TopicBroadcaster {
    topics;
    facilitator;
    resolver;
    requireAcknowledgmentFromAllHostsForTopics;
    requireAcknowledgmentFromAnyHostForTopics;
    requireAcknowledgmentFromSpecificHostsForTopics;
    networkPreset;
    /**
     * Constructs an instance of the SHIP broadcaster.
     *
     * @param {string[]} topics - The list of SHIP topic names where transactions are to be sent.
     * @param {SHIPBroadcasterConfig} config - Configuration options for the SHIP broadcaster.
     */ constructor(topics, config = {}){
        if (topics.length === 0) {
            throw new Error('At least one topic is required for broadcast.');
        }
        if (topics.some((x)=>!x.startsWith('tm_'))) {
            throw new Error('Every topic must start with "tm_".');
        }
        this.topics = topics;
        this.networkPreset = config.networkPreset ?? 'mainnet';
        this.facilitator = config.facilitator ?? new HTTPSOverlayBroadcastFacilitator(undefined, this.networkPreset === 'local');
        this.resolver = config.resolver ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            networkPreset: this.networkPreset
        });
        this.requireAcknowledgmentFromAllHostsForTopics = config.requireAcknowledgmentFromAllHostsForTopics ?? [];
        this.requireAcknowledgmentFromAnyHostForTopics = config.requireAcknowledgmentFromAnyHostForTopics ?? 'all';
        this.requireAcknowledgmentFromSpecificHostsForTopics = config.requireAcknowledgmentFromSpecificHostsForTopics ?? {};
    }
    /**
     * Broadcasts a transaction to Overlay Services via SHIP.
     *
     * @param {Transaction} tx - The transaction to be sent.
     * @returns {Promise<BroadcastResponse | BroadcastFailure>} A promise that resolves to either a success or failure response.
     */ async broadcast(tx) {
        let beef;
        const offChainValues = tx.metadata.get('OffChainValues');
        try {
            beef = tx.toBEEF();
        } catch (error) {
            throw new Error('Transactions sent via SHIP to Overlay Services must be serializable to BEEF format.');
        }
        const interestedHosts = await this.findInterestedHosts();
        if (Object.keys(interestedHosts).length === 0) {
            return {
                status: 'error',
                code: 'ERR_NO_HOSTS_INTERESTED',
                description: `No ${this.networkPreset} hosts are interested in receiving this transaction.`
            };
        }
        const hostPromises = Object.entries(interestedHosts).map(async ([host, topics])=>{
            try {
                const steak = await this.facilitator.send(host, {
                    beef,
                    offChainValues,
                    topics: [
                        ...topics
                    ]
                });
                if (steak == null || Object.keys(steak).length === 0) {
                    throw new Error('Steak has no topics.');
                }
                return {
                    host,
                    success: true,
                    steak
                };
            } catch (error) {
                console.error(error);
                // Log error if needed
                return {
                    host,
                    success: false,
                    error
                };
            }
        });
        const results = await Promise.all(hostPromises);
        const successfulHosts = results.filter((result)=>result.success);
        if (successfulHosts.length === 0) {
            return {
                status: 'error',
                code: 'ERR_ALL_HOSTS_REJECTED',
                description: `All ${this.networkPreset} topical hosts have rejected the transaction.`
            };
        }
        // Collect host acknowledgments
        const hostAcknowledgments = {};
        for (const result of successfulHosts){
            const host = result.host;
            const steak = result.steak;
            const acknowledgedTopics = new Set();
            for (const [topic, instructions] of Object.entries(steak)){
                const outputsToAdmit = instructions.outputsToAdmit;
                const coinsToRetain = instructions.coinsToRetain;
                const coinsRemoved = instructions.coinsRemoved;
                if (outputsToAdmit?.length > 0 || coinsToRetain?.length > 0 || coinsRemoved?.length > 0) {
                    acknowledgedTopics.add(topic);
                }
            }
            hostAcknowledgments[host] = acknowledgedTopics;
        }
        // Now, perform the checks
        // Check requireAcknowledgmentFromAllHostsForTopics
        let requiredTopicsAllHosts;
        let requireAllHosts;
        if (this.requireAcknowledgmentFromAllHostsForTopics === 'all') {
            requiredTopicsAllHosts = this.topics;
            requireAllHosts = 'all';
        } else if (this.requireAcknowledgmentFromAllHostsForTopics === 'any') {
            requiredTopicsAllHosts = this.topics;
            requireAllHosts = 'any';
        } else if (Array.isArray(this.requireAcknowledgmentFromAllHostsForTopics)) {
            requiredTopicsAllHosts = this.requireAcknowledgmentFromAllHostsForTopics;
            requireAllHosts = 'all';
        } else {
            // Default to 'all' and 'all'
            requiredTopicsAllHosts = this.topics;
            requireAllHosts = 'all';
        }
        if (requiredTopicsAllHosts.length > 0) {
            const allHostsAcknowledged = this.checkAcknowledgmentFromAllHosts(hostAcknowledgments, requiredTopicsAllHosts, requireAllHosts);
            if (!allHostsAcknowledged) {
                return {
                    status: 'error',
                    code: 'ERR_REQUIRE_ACK_FROM_ALL_HOSTS_FAILED',
                    description: 'Not all hosts acknowledged the required topics.'
                };
            }
        }
        // Check requireAcknowledgmentFromAnyHostForTopics
        let requiredTopicsAnyHost;
        let requireAnyHost;
        if (this.requireAcknowledgmentFromAnyHostForTopics === 'all') {
            requiredTopicsAnyHost = this.topics;
            requireAnyHost = 'all';
        } else if (this.requireAcknowledgmentFromAnyHostForTopics === 'any') {
            requiredTopicsAnyHost = this.topics;
            requireAnyHost = 'any';
        } else if (Array.isArray(this.requireAcknowledgmentFromAnyHostForTopics)) {
            requiredTopicsAnyHost = this.requireAcknowledgmentFromAnyHostForTopics;
            requireAnyHost = 'all';
        } else {
            // No requirement
            requiredTopicsAnyHost = [];
            requireAnyHost = 'all';
        }
        if (requiredTopicsAnyHost.length > 0) {
            const anyHostAcknowledged = this.checkAcknowledgmentFromAnyHost(hostAcknowledgments, requiredTopicsAnyHost, requireAnyHost);
            if (!anyHostAcknowledged) {
                return {
                    status: 'error',
                    code: 'ERR_REQUIRE_ACK_FROM_ANY_HOST_FAILED',
                    description: 'No host acknowledged the required topics.'
                };
            }
        }
        // Check requireAcknowledgmentFromSpecificHostsForTopics
        if (Object.keys(this.requireAcknowledgmentFromSpecificHostsForTopics).length > 0) {
            const specificHostsAcknowledged = this.checkAcknowledgmentFromSpecificHosts(hostAcknowledgments, this.requireAcknowledgmentFromSpecificHostsForTopics);
            if (!specificHostsAcknowledged) {
                return {
                    status: 'error',
                    code: 'ERR_REQUIRE_ACK_FROM_SPECIFIC_HOSTS_FAILED',
                    description: 'Specific hosts did not acknowledge the required topics.'
                };
            }
        }
        // If all checks pass, return success
        return {
            status: 'success',
            txid: tx.id('hex'),
            message: `Sent to ${successfulHosts.length} Overlay Services ${successfulHosts.length === 1 ? 'host' : 'hosts'}.`
        };
    }
    checkAcknowledgmentFromAllHosts(hostAcknowledgments, requiredTopics, require) {
        for (const acknowledgedTopics of Object.values(hostAcknowledgments)){
            if (require === 'all') {
                for (const topic of requiredTopics){
                    if (!acknowledgedTopics.has(topic)) {
                        return false;
                    }
                }
            } else if (require === 'any') {
                let anyAcknowledged = false;
                for (const topic of requiredTopics){
                    if (acknowledgedTopics.has(topic)) {
                        anyAcknowledged = true;
                        break;
                    }
                }
                if (!anyAcknowledged) {
                    return false;
                }
            }
        }
        return true;
    }
    checkAcknowledgmentFromAnyHost(hostAcknowledgments, requiredTopics, require) {
        if (require === 'all') {
            // All required topics must be acknowledged by at least one host
            for (const acknowledgedTopics of Object.values(hostAcknowledgments)){
                let acknowledgesAllRequiredTopics = true;
                for (const topic of requiredTopics){
                    if (!acknowledgedTopics.has(topic)) {
                        acknowledgesAllRequiredTopics = false;
                        break;
                    }
                }
                if (acknowledgesAllRequiredTopics) {
                    return true;
                }
            }
            return false;
        } else {
            // At least one required topic must be acknowledged by at least one host
            for (const acknowledgedTopics of Object.values(hostAcknowledgments)){
                for (const topic of requiredTopics){
                    if (acknowledgedTopics.has(topic)) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
    checkAcknowledgmentFromSpecificHosts(hostAcknowledgments, requirements) {
        for (const [host, requiredTopicsOrAllAny] of Object.entries(requirements)){
            const acknowledgedTopics = hostAcknowledgments[host];
            if (acknowledgedTopics == null) {
                // Host did not respond successfully
                return false;
            }
            let requiredTopics;
            let require;
            if (requiredTopicsOrAllAny === 'all' || requiredTopicsOrAllAny === 'any') {
                require = requiredTopicsOrAllAny;
                requiredTopics = this.topics;
            } else if (Array.isArray(requiredTopicsOrAllAny)) {
                requiredTopics = requiredTopicsOrAllAny;
                require = 'all';
            } else {
                continue;
            }
            if (require === 'all') {
                for (const topic of requiredTopics){
                    if (!acknowledgedTopics.has(topic)) {
                        return false;
                    }
                }
            } else if (require === 'any') {
                let anyAcknowledged = false;
                for (const topic of requiredTopics){
                    if (acknowledgedTopics.has(topic)) {
                        anyAcknowledged = true;
                        break;
                    }
                }
                if (!anyAcknowledged) {
                    return false;
                }
            }
        }
        return true;
    }
    /**
     * Finds which hosts are interested in transactions tagged with the given set of topics.
     *
     * @returns A mapping of URLs for hosts interested in this transaction. Keys are URLs, values are which of our topics the specific host cares about.
     */ async findInterestedHosts() {
        // Handle the local network preset
        if (this.networkPreset === 'local') {
            const resultSet = new Set();
            for(let i = 0; i < this.topics.length; i++){
                resultSet.add(this.topics[i]);
            }
            return {
                'http://localhost:8080': resultSet
            };
        }
        // TODO: cache the list of interested hosts to avoid spamming SHIP trackers.
        // TODO: Monetize the operation of the SHIP tracker system.
        // TODO: Cache ship/slap lookup with expiry (every 5min)
        // Find all SHIP advertisements for the topics we care about
        const results = {};
        const answer = await this.resolver.query({
            service: 'ls_ship',
            query: {
                topics: this.topics
            }
        }, MAX_SHIP_QUERY_TIMEOUT);
        if (answer.type !== 'output-list') {
            throw new Error('SHIP answer is not an output list.');
        }
        for (const output of answer.outputs){
            try {
                const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromBEEF(output.beef);
                const script = tx.outputs[output.outputIndex].lockingScript;
                const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$OverlayAdminTokenTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].decode(script);
                if (!this.topics.includes(parsed.topicOrService) || parsed.protocol !== 'SHIP') {
                    continue;
                }
                if (results[parsed.domain] === undefined) {
                    results[parsed.domain] = new Set();
                }
                results[parsed.domain].add(parsed.topicOrService);
            } catch (e) {
                continue;
            }
        }
        return results;
    }
} //# sourceMappingURL=SHIPBroadcaster.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/withDoubleSpendRetry.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withDoubleSpendRetry",
    ()=>withDoubleSpendRetry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-ssr] (ecmascript)");
;
/**
 * Maximum number of retry attempts for double-spend resolution
 */ const MAX_DOUBLE_SPEND_RETRIES = 5;
async function withDoubleSpendRetry(operation, broadcaster, maxRetries = MAX_DOUBLE_SPEND_RETRIES) {
    let attempts = 0;
    while(attempts < maxRetries){
        attempts++;
        try {
            return await operation();
        } catch (error) {
            // Only handle double-spend errors on non-final attempts
            if (attempts < maxRetries && error.name === 'WERR_REVIEW_ACTIONS') {
                const reviewError = error;
                // Check if any action in the batch has a double-spend
                const doubleSpendResult = reviewError.reviewActionResults.find((result)=>result.status === 'doubleSpend');
                if (doubleSpendResult?.competingBeef != null && doubleSpendResult?.competingTxs != null && doubleSpendResult?.competingTxs.length > 0) {
                    const competingTx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromBEEF(doubleSpendResult.competingBeef, doubleSpendResult.competingTxs[0]);
                    // Recursively handle double-spend errors during broadcast
                    // The broadcast itself might fail if the competing tx depends on another missing tx
                    await withDoubleSpendRetry(async ()=>await broadcaster.broadcast(competingTx), broadcaster, maxRetries - attempts // Reduce max retries based on attempts already used
                    );
                    continue;
                }
            }
            // Non-double-spend error or max retries exceeded - rethrow
            throw error;
        }
    }
    // This should never be reached, but TypeScript requires it
    throw new Error('Unexpected end of retry loop');
} //# sourceMappingURL=withDoubleSpendRetry.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/LookupResolver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/SHIPBroadcaster.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$withDoubleSpendRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/withDoubleSpendRetry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$OverlayAdminTokenTemplate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/OverlayAdminTokenTemplate.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/LookupResolver.js [app-ssr] (ecmascript) <export default as LookupResolver>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LookupResolver",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/LookupResolver.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/SHIPBroadcaster.js [app-ssr] (ecmascript) <export default as SHIPBroadcaster>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SHIPBroadcaster",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/SHIPBroadcaster.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/SHIPBroadcaster.js [app-ssr] (ecmascript) <export default as TopicBroadcaster>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopicBroadcaster",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/SHIPBroadcaster.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/Historian.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Historian builds a chronological history (oldest → newest) of typed values by traversing
 * a transaction's input ancestry and interpreting each output with a provided interpreter.
 *
 * Core ideas:
 * - You provide an interpreter `(tx, outputIndex) => T | undefined` that decodes one output
 *   into your domain value (e.g., kvstore entries). If it returns `undefined`, that output
 *   contributes nothing to history.
 * - Traversal follows `Transaction.inputs[].sourceTransaction` recursively, so callers must
 *   supply transactions whose inputs have `sourceTransaction` populated (e.g., via overlay
 *   history reconstruction).
 * - The traversal visits each transaction once (cycle-safe) and collects interpreted values
 *   in reverse-chronological order, then returns them as chronological (oldest-first).
 * - Optional caching support: provide a `historyCache` Map to cache complete history results
 *   and avoid re-traversing identical transaction chains with the same context.
 *
 * Usage:
 * - Construct with an interpreter (and optional cache)
 * - Call historian.buildHistory(tx, context) to get an array of values representing the history of a token over time.
 *
 * Example:
 *   const cache = new Map() // Optional: for caching repeated queries
 *   const historian = new Historian(interpreter, { historyCache: cache })
 *   const history = await historian.buildHistory(tipTransaction, context)
 *   // history: T[] (e.g., prior values for a protected kvstore key)
 *
 * Caching:
 * - Cache keys are generated from `interpreterVersion|txid|contextKey`
 * - Cached results are immutable snapshots to prevent external mutation
 * - Bump `interpreterVersion` when interpreter semantics change to invalidate old cache entries
 */ __turbopack_context__.s([
    "Historian",
    ()=>Historian
]);
class Historian {
    interpreter;
    debug;
    // --- minimal cache support ---
    historyCache;
    interpreterVersion;
    ctxKeyFn;
    /**
     * Create a new Historian instance
     *
     * @param interpreter - Function to interpret transaction outputs into typed values
     * @param options - Configuration options
     * @param options.debug - Enable debug logging (default: false)
     * @param options.historyCache - Optional external cache for complete history results
     * @param options.interpreterVersion - Version identifier for cache invalidation (default: 'v1')
     * @param options.ctxKeyFn - Custom function to serialize context for cache keys (default: JSON.stringify)
     */ constructor(interpreter, options){
        this.interpreter = interpreter;
        this.debug = options?.debug ?? false;
        // Configure caching (all optional)
        this.historyCache = options?.historyCache;
        this.interpreterVersion = options?.interpreterVersion ?? 'v1';
        this.ctxKeyFn = options?.ctxKeyFn ?? ((ctx)=>{
            try {
                return JSON.stringify(ctx ?? null);
            } catch  {
                return '';
            }
        });
    }
    historyKey(startTransaction, context) {
        const txid = startTransaction.id('hex');
        const ctxKey = this.ctxKeyFn(context);
        return `${this.interpreterVersion}|${txid}|${ctxKey}`;
    }
    /**
     * Build history by traversing input chain from a starting transaction
     * Returns values in chronological order (oldest first)
     *
     * If caching is enabled, will first check for cached results matching the
     * startTransaction and context. On cache miss, performs full traversal and
     * stores the result for future queries.
     *
     * @param startTransaction - The transaction to start traversal from
     * @param context - The context to pass to the interpreter
     * @returns Array of interpreted values in chronological order
     */ async buildHistory(startTransaction, context) {
        // --- minimal cache fast path ---
        if (this.historyCache != null) {
            const cacheKey = this.historyKey(startTransaction, context);
            if (this.historyCache.has(cacheKey)) {
                const cached = this.historyCache.get(cacheKey);
                if (cached != null) {
                    if (this.debug) console.log('[Historian] History cache hit:', cacheKey);
                    // Return a shallow copy to avoid external mutation of the cached array
                    return cached.slice();
                }
            }
        }
        const history = [];
        const visited = new Set();
        // Recursively traverse input transactions to build history
        const traverseHistory = async (transaction)=>{
            const txid = transaction.id('hex');
            // Prevent infinite loops
            if (visited.has(txid)) {
                if (this.debug) {
                    console.log(`[Historian] Skipping already visited transaction: ${txid}`);
                }
                return;
            }
            visited.add(txid);
            if (this.debug) {
                console.log(`[Historian] Processing transaction: ${txid}`);
            }
            // Check all outputs in this transaction for interpretable values
            for(let outputIndex = 0; outputIndex < transaction.outputs.length; outputIndex++){
                try {
                    // Try to interpret this output
                    const interpretedValue = await Promise.resolve(this.interpreter(transaction, outputIndex, context));
                    if (interpretedValue !== undefined) {
                        history.push(interpretedValue);
                        if (this.debug) {
                            console.log('[Historian] Added value to history:', interpretedValue);
                        }
                    }
                } catch (error) {
                    if (this.debug) {
                        console.log(`[Historian] Failed to interpret output ${outputIndex}:`, error);
                    }
                // Skip outputs that can't be interpreted
                }
            }
            // Recursively traverse input transactions
            for (const input of transaction.inputs){
                if (input.sourceTransaction != null) {
                    await traverseHistory(input.sourceTransaction);
                } else if (this.debug) {
                    console.log('[Historian] Input missing sourceTransaction, skipping');
                }
            }
        };
        // Start traversal from the provided transaction
        await traverseHistory(startTransaction);
        // History is built in reverse chronological order during traversal,
        // so we reverse it to return oldest-first
        const chronological = history.reverse();
        if (this.historyCache != null) {
            const cacheKey = this.historyKey(startTransaction, context);
            // Store an immutable snapshot to avoid accidental external mutation
            this.historyCache.set(cacheKey, Object.freeze(chronological.slice()));
            if (this.debug) console.log('[Historian] History cached:', cacheKey);
        }
        return chronological;
    }
} //# sourceMappingURL=Historian.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/storage/StorageUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHashFromURL",
    ()=>getHashFromURL,
    "getURLForFile",
    ()=>getURLForFile,
    "getURLForHash",
    ()=>getURLForHash,
    "isValidURL",
    ()=>isValidURL,
    "normalizeURL",
    ()=>normalizeURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-ssr] (ecmascript) <export * as Hash>");
;
;
const normalizeURL = (URL)=>{
    if (URL.toLowerCase().startsWith('uhrp:')) URL = URL.slice(5);
    if (URL.startsWith('//')) URL = URL.slice(2);
    return URL;
};
const getURLForHash = (hash)=>{
    if (hash.length !== 32) {
        throw new Error('Hash length must be 32 bytes (sha256)');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBase58Check"])(hash, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"])('ce00', 'hex'));
};
const getURLForFile = (file)=>{
    const data = file instanceof Uint8Array ? file : Uint8Array.from(file);
    const hasher = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__["Hash"].SHA256();
    const chunkSize = 1024 * 1024;
    for(let i = 0; i < data.length; i += chunkSize){
        const chunk = data.subarray(i, i + chunkSize);
        hasher.update(Array.from(chunk));
    }
    const hash = hasher.digest();
    return getURLForHash(hash);
};
const getHashFromURL = (URL)=>{
    URL = normalizeURL(URL);
    const { data, prefix } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBase58Check"])(URL, undefined, 2);
    if (data.length !== 32) {
        throw new Error('Invalid length!');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(prefix) !== 'ce00') {
        throw new Error('Bad prefix');
    }
    return data;
};
const isValidURL = (URL)=>{
    try {
        getHashFromURL(URL);
        return true;
    } catch (e) {
        return false;
    }
}; //# sourceMappingURL=StorageUtils.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/storage/StorageUploader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageUploader",
    ()=>StorageUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$clients$2f$AuthFetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/clients/AuthFetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$storage$2f$StorageUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/storage/StorageUtils.js [app-ssr] (ecmascript)");
;
;
class StorageUploader {
    authFetch;
    baseURL;
    /**
     * Creates a new StorageUploader instance.
     * @param {UploaderConfig} config - An object containing the storage server's URL and a wallet interface
     */ constructor(config){
        this.baseURL = config.storageURL;
        this.authFetch = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$clients$2f$AuthFetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthFetch"](config.wallet);
    }
    /**
     * Requests information from the server to upload a file (including presigned URL and headers).
     * @private
     * @param {number} fileSize - The size of the file, in bytes
     * @param {number} retentionPeriod - The desired hosting time, in minutes
     * @returns {Promise<{ uploadURL: string; requiredHeaders: Record<string, string>; amount?: number }>}
     * @throws {Error} If the server returns a non-OK response or an error status
     */ async getUploadInfo(fileSize, retentionPeriod) {
        const url = `${this.baseURL}/upload`;
        const body = {
            fileSize,
            retentionPeriod
        };
        const response = await this.authFetch.fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`Upload info request failed: HTTP ${response.status}`);
        }
        const data = await response.json();
        if (data.status === 'error') {
            throw new Error('Upload route returned an error.');
        }
        return {
            uploadURL: data.uploadURL,
            requiredHeaders: data.requiredHeaders,
            amount: data.amount
        };
    }
    /**
     * Performs the actual file upload (HTTP PUT) to the presigned URL returned by the server.
     * @private
     * @param {string} uploadURL - The presigned URL where the file is to be uploaded
     * @param {UploadableFile} file - The file to upload, including its raw data and MIME type
     * @param {Record<string, string>} requiredHeaders - Additional headers required by the server (e.g. content-length)
     * @returns {Promise<UploadFileResult>} An object indicating whether publishing was successful and the resulting UHRP URL
     * @throws {Error} If the server returns a non-OK response
     */ async uploadFile(uploadURL, file, requiredHeaders) {
        const body = file.data instanceof Uint8Array ? file.data : Uint8Array.from(file.data);
        const response = await fetch(uploadURL, {
            method: 'PUT',
            body: body,
            headers: {
                'Content-Type': file.type,
                ...requiredHeaders
            }
        });
        if (!response.ok) {
            throw new Error(`File upload failed: HTTP ${response.status}`);
        }
        const uhrpURL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$storage$2f$StorageUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getURLForFile"](body);
        return {
            published: true,
            uhrpURL
        };
    }
    /**
     * Publishes a file to the storage server with the specified retention period.
     *
     * This will:
     * 1. Request an upload URL from the server.
     * 2. Perform an HTTP PUT to upload the file’s raw bytes.
     * 3. Return a UHRP URL referencing the file once published.
     *
     * @param {Object} params
     * @param {UploadableFile} params.file - The file data + type
     * @param {number} params.retentionPeriod - Number of minutes to host the file
     * @returns {Promise<UploadFileResult>} An object with the file's UHRP URL
     * @throws {Error} If the server or upload step returns a non-OK response
     */ async publishFile(params) {
        const { file, retentionPeriod } = params;
        const data = file.data instanceof Uint8Array ? file.data : Uint8Array.from(file.data);
        const fileSize = data.byteLength;
        const { uploadURL, requiredHeaders } = await this.getUploadInfo(fileSize, retentionPeriod);
        return await this.uploadFile(uploadURL, {
            data,
            type: file.type
        }, requiredHeaders);
    }
    /**
     * Retrieves metadata for a file matching the given UHRP URL from the `/find` route.
     * @param {string} uhrpUrl - The UHRP URL, e.g. "uhrp://abcd..."
     * @returns {Promise<FindFileData>} An object with file name, size, MIME type, and expiry time
     * @throws {Error} If the server or the route returns an error
     */ async findFile(uhrpUrl) {
        const url = new URL(`${this.baseURL}/find`);
        url.searchParams.set('uhrpUrl', uhrpUrl);
        const response = await this.authFetch.fetch(url.toString(), {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error(`findFile request failed: HTTP ${response.status}`);
        }
        const data = await response.json();
        if (data.status === 'error') {
            const errCode = data.code ?? 'unknown-code';
            const errDesc = data.description ?? 'no-description';
            throw new Error(`findFile returned an error: ${errCode} - ${errDesc}`);
        }
        return data.data;
    }
    /**
     * Lists all advertisements belonging to the user from the `/list` route.
     * @returns {Promise<any>} The array of uploads returned by the server
     * @throws {Error} If the server or the route returns an error
     */ async listUploads() {
        const url = `${this.baseURL}/list`;
        const response = await this.authFetch.fetch(url, {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error(`listUploads request failed: HTTP ${response.status}`);
        }
        const data = await response.json();
        if (data.status === 'error') {
            const errCode = data.code ?? 'unknown-code';
            const errDesc = data.description ?? 'no-description';
            throw new Error(`listUploads returned an error: ${errCode} - ${errDesc}`);
        }
        return data.uploads;
    }
    /**
     * Renews the hosting time for an existing file advertisement identified by uhrpUrl.
     * Calls the `/renew` route to add `additionalMinutes` to the GCS customTime
     * and re-mint the advertisement token on-chain.
     *
     * @param {string} uhrpUrl - The UHRP URL of the file (e.g., "uhrp://abcd1234...")
     * @param {number} additionalMinutes - The number of minutes to extend
     * @returns {Promise<RenewFileResult>} An object with the new and previous expiry times, plus any cost
     * @throws {Error} If the request fails or the server returns an error
     */ async renewFile(uhrpUrl, additionalMinutes) {
        const url = `${this.baseURL}/renew`;
        const body = {
            uhrpUrl,
            additionalMinutes
        };
        const response = await this.authFetch.fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`renewFile request failed: HTTP ${response.status}`);
        }
        const data = await response.json();
        if (data.status === 'error') {
            const errCode = data.code ?? 'unknown-code';
            const errDesc = data.description ?? 'no-description';
            throw new Error(`renewFile returned an error: ${errCode} - ${errDesc}`);
        }
        return {
            status: data.status,
            prevExpiryTime: data.prevExpiryTime,
            newExpiryTime: data.newExpiryTime,
            amount: data.amount
        };
    }
} //# sourceMappingURL=StorageUploader.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/storage/StorageUtils.js [app-ssr] (ecmascript) <export * as StorageUtils>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageUtils",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$storage$2f$StorageUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$storage$2f$StorageUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/storage/StorageUtils.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/storage/StorageDownloader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageDownloader",
    ()=>StorageDownloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LookupResolver$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/LookupResolver.js [app-ssr] (ecmascript) <export default as LookupResolver>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$storage$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/storage/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$storage$2f$StorageUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__StorageUtils$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/storage/StorageUtils.js [app-ssr] (ecmascript) <export * as StorageUtils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$PushDrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/PushDrop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Hash.js [app-ssr] (ecmascript) <export * as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript) <export * as Utils>");
;
;
;
;
;
class StorageDownloader {
    networkPreset = 'mainnet';
    lookupResolver;
    constructor(config){
        this.networkPreset = config?.networkPreset ?? 'mainnet';
        this.lookupResolver = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LookupResolver$3e$__["LookupResolver"]({
            networkPreset: this.networkPreset
        });
    }
    /**
     * Resolves the UHRP URL to a list of HTTP URLs where content can be downloaded.
     * @param uhrpUrl The UHRP URL to resolve.
     * @returns A promise that resolves to an array of HTTP URLs.
     */ async resolve(uhrpUrl) {
        // Use UHRP lookup service
        const response = await this.lookupResolver.query({
            service: 'ls_uhrp',
            query: {
                uhrpUrl
            }
        });
        if (response.type !== 'output-list') {
            throw new Error('Lookup answer must be an output list');
        }
        const decodedResults = [];
        const currentTime = Math.floor(Date.now() / 1000);
        for(let i = 0; i < response.outputs.length; i++){
            const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromBEEF(response.outputs[i].beef);
            const { fields } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$PushDrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].decode(tx.outputs[response.outputs[i].outputIndex].lockingScript);
            const expiryTime = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].Reader(fields[3]).readVarIntNum();
            if (expiryTime < currentTime) {
                continue;
            }
            decodedResults.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(fields[2]));
        }
        return decodedResults;
    }
    /**
     * Downloads the content from the UHRP URL after validating the hash for integrity.
     * @param uhrpUrl The UHRP URL to download.
     * @returns A promise that resolves to the downloaded content.
     */ async download(uhrpUrl) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$storage$2f$StorageUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__StorageUtils$3e$__["StorageUtils"].isValidURL(uhrpUrl)) {
            throw new Error('Invalid parameter UHRP url');
        }
        const hash = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$storage$2f$StorageUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__StorageUtils$3e$__["StorageUtils"].getHashFromURL(uhrpUrl);
        const expected = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toHex(hash);
        const downloadURLs = await this.resolve(uhrpUrl);
        if (!Array.isArray(downloadURLs) || downloadURLs.length === 0) {
            throw new Error('No one currently hosts this file!');
        }
        for(let i = 0; i < downloadURLs.length; i++){
            try {
                // The url is fetched
                const result = await fetch(downloadURLs[i], {
                    method: 'GET'
                });
                // If the request fails, continue to the next url
                if (!result.ok || result.status >= 400 || result.body == null) {
                    continue;
                }
                const reader = result.body.getReader();
                const hashStream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Hash$3e$__["Hash"].SHA256();
                const chunks = [];
                let totalLength = 0;
                while(true){
                    const { done, value } = await reader.read();
                    if (done) break;
                    hashStream.update(Array.from(value));
                    chunks.push(value);
                    totalLength += value.length;
                }
                const digest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toHex(hashStream.digest());
                if (digest !== expected) {
                    throw new Error('Data integrity error: value of content does not match hash of the url given');
                }
                const data = new Uint8Array(totalLength);
                let offset = 0;
                for (const chunk of chunks){
                    data.set(chunk, offset);
                    offset += chunk.length;
                }
                return {
                    data,
                    mimeType: result.headers.get('Content-Type')
                };
            } catch (error) {
                continue;
            }
        }
        throw new Error(`Unable to download content from ${uhrpUrl}`);
    }
} //# sourceMappingURL=StorageDownloader.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/storage/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$storage$2f$StorageUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/storage/StorageUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$storage$2f$StorageUploader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/storage/StorageUploader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$storage$2f$StorageDownloader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/storage/StorageDownloader.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/identity/types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_IDENTITY_CLIENT_OPTIONS",
    ()=>DEFAULT_IDENTITY_CLIENT_OPTIONS,
    "KNOWN_IDENTITY_TYPES",
    ()=>KNOWN_IDENTITY_TYPES,
    "defaultIdentity",
    ()=>defaultIdentity
]);
const defaultIdentity = {
    name: 'Unknown Identity',
    avatarURL: 'XUUB8bbn9fEthk15Ge3zTQXypUShfC94vFjp65v7u5CQ8qkpxzst',
    identityKey: '',
    abbreviatedKey: '',
    badgeIconURL: 'XUUV39HVPkpmMzYNTx7rpKzJvXfeiVyQWg2vfSpjBAuhunTCA9uG',
    badgeLabel: 'Not verified by anyone you trust.',
    badgeClickURL: 'https://projectbabbage.com/docs/unknown-identity'
};
const DEFAULT_IDENTITY_CLIENT_OPTIONS = {
    protocolID: [
        1,
        'identity'
    ],
    keyID: '1',
    tokenAmount: 1,
    outputIndex: 0
};
const KNOWN_IDENTITY_TYPES = {
    identiCert: 'z40BOInXkI8m7f/wBrv4MJ09bZfzZbTj2fJqCtONqCY=',
    discordCert: '2TgqRC35B1zehGmB21xveZNc7i5iqHc0uxMb+1NMPW4=',
    phoneCert: 'mffUklUzxbHr65xLohn0hRL0Tq2GjW1GYF/OPfzqJ6A=',
    xCert: 'vdDWvftf1H+5+ZprUw123kjHlywH+v20aPQTuXgMpNc=',
    registrant: 'YoPsbfR6YQczjzPdHCoGC7nJsOdPQR50+SYqcWpJ0y0=',
    emailCert: 'exOl3KM0dIJ04EW5pZgbZmPag6MdJXd3/a1enmUU/BA=',
    anyone: 'mfkOMfLDQmrr3SBxBQ5WeE+6Hy3VJRFq6w4A5Ljtlis=',
    self: 'Hkge6X5JRxt1cWXtHLCrSTg6dCVTxjQJJ48iOYd7n3g=',
    coolCert: 'AGfk/WrT1eBDXpz3mcw386Zww2HmqcIn3uY6x4Af1eo='
}; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/identity/ContactsManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactsManager",
    ()=>ContactsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletClient$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletClient.js [app-ssr] (ecmascript) <export default as WalletClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript) <export * as Utils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Random$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/Random.js [app-ssr] (ecmascript) <export default as Random>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LockingScript$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/LockingScript.js [app-ssr] (ecmascript) <export default as LockingScript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-ssr] (ecmascript) <export default as Transaction>");
;
;
;
;
const CONTACT_PROTOCOL_ID = [
    2,
    'contact'
];
// In-memory cache for cross-platform compatibility
class MemoryCache {
    cache = new Map();
    getItem(key) {
        return this.cache.get(key) ?? null;
    }
    setItem(key, value) {
        this.cache.set(key, value);
    }
    removeItem(key) {
        this.cache.delete(key);
    }
    clear() {
        this.cache.clear();
    }
}
class ContactsManager {
    wallet;
    cache = new MemoryCache();
    CONTACTS_CACHE_KEY = 'metanet-contacts';
    originator;
    constructor(wallet, originator){
        this.wallet = wallet ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletClient$3e$__["WalletClient"]();
        this.originator = originator;
    }
    /**
     * Load all records from the contacts basket
     * @param identityKey Optional specific identity key to fetch
     * @param forceRefresh Whether to force a check for new contact data
     * @param limit Maximum number of contacts to return
     * @returns A promise that resolves with an array of contacts
     */ async getContacts(identityKey, forceRefresh = false, limit = 1000) {
        // Check in-memory cache first unless forcing refresh
        if (!forceRefresh) {
            const cached = this.cache.getItem(this.CONTACTS_CACHE_KEY);
            if (cached != null && cached !== '') {
                try {
                    const cachedContacts = JSON.parse(cached);
                    return identityKey != null ? cachedContacts.filter((c)=>c.identityKey === identityKey) : cachedContacts;
                } catch (e) {
                    console.warn('Invalid cached contacts JSON; will reload from chain', e);
                }
            }
        }
        const tags = [];
        if (identityKey != null) {
            // Hash the identity key to use as a tag for quick lookup
            const { hmac: hashedIdentityKey } = await this.wallet.createHmac({
                protocolID: CONTACT_PROTOCOL_ID,
                keyID: identityKey,
                counterparty: 'self',
                data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toArray(identityKey, 'utf8')
            }, this.originator);
            tags.push(`identityKey ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toHex(hashedIdentityKey)}`);
        }
        // Get all contact outputs from the contacts basket
        const outputs = await this.wallet.listOutputs({
            basket: 'contacts',
            include: 'locking scripts',
            includeCustomInstructions: true,
            tags,
            limit
        }, this.originator);
        if (outputs.outputs == null || outputs.outputs.length === 0) {
            this.cache.setItem(this.CONTACTS_CACHE_KEY, JSON.stringify([]));
            return [];
        }
        const contacts = [];
        // Process each contact output
        for (const output of outputs.outputs){
            try {
                if (output.lockingScript == null) continue;
                // Decode the PushDrop data
                const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"].decode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$LockingScript$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LockingScript$3e$__["LockingScript"].fromHex(output.lockingScript));
                if (output.customInstructions == null) continue;
                const keyID = JSON.parse(output.customInstructions).keyID;
                // Decrypt the contact data
                const { plaintext } = await this.wallet.decrypt({
                    ciphertext: decoded.fields[0],
                    protocolID: CONTACT_PROTOCOL_ID,
                    keyID,
                    counterparty: 'self'
                }, this.originator);
                // Parse the contact data
                const contactData = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(plaintext));
                contacts.push(contactData);
            } catch (error) {
                console.warn('ContactsManager: Failed to decode contact output:', error);
            // Skip this contact and continue with others
            }
        }
        // Cache the loaded contacts
        this.cache.setItem(this.CONTACTS_CACHE_KEY, JSON.stringify(contacts));
        const filteredContacts = identityKey != null ? contacts.filter((c)=>c.identityKey === identityKey) : contacts;
        return filteredContacts;
    }
    /**
     * Save or update a Metanet contact
     * @param contact The displayable identity information for the contact
     * @param metadata Optional metadata to store with the contact (ex. notes, aliases, etc)
     */ async saveContact(contact, metadata) {
        // Get current contacts from cache or blockchain
        const cached = this.cache.getItem(this.CONTACTS_CACHE_KEY);
        let contacts;
        if (cached != null && cached !== '') {
            contacts = JSON.parse(cached);
        } else {
            // If cache is empty, get current data from blockchain
            contacts = await this.getContacts();
        }
        const existingIndex = contacts.findIndex((c)=>c.identityKey === contact.identityKey);
        const contactToStore = {
            ...contact,
            metadata
        };
        if (existingIndex >= 0) {
            contacts[existingIndex] = contactToStore;
        } else {
            contacts.push(contactToStore);
        }
        const { hmac: hashedIdentityKey } = await this.wallet.createHmac({
            protocolID: CONTACT_PROTOCOL_ID,
            keyID: contact.identityKey,
            counterparty: 'self',
            data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toArray(contact.identityKey, 'utf8')
        }, this.originator);
        // Check if this contact already exists (to update it)
        const outputs = await this.wallet.listOutputs({
            basket: 'contacts',
            include: 'entire transactions',
            includeCustomInstructions: true,
            tags: [
                `identityKey ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toHex(hashedIdentityKey)}`
            ],
            limit: 100 // Should only be one contact!
        }, this.originator);
        let existingOutput = null;
        let keyID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toBase64((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$Random$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Random$3e$__["Random"])(32));
        if (outputs.outputs != null) {
            // Find output by trying to decrypt and checking identityKey in payload
            for (const output of outputs.outputs){
                try {
                    const [txid, outputIndex] = output.outpoint.split('.');
                    const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromBEEF(outputs.BEEF, txid);
                    const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"].decode(tx.outputs[Number(outputIndex)].lockingScript);
                    if (output.customInstructions == null) continue;
                    keyID = JSON.parse(output.customInstructions).keyID;
                    const { plaintext } = await this.wallet.decrypt({
                        ciphertext: decoded.fields[0],
                        protocolID: CONTACT_PROTOCOL_ID,
                        keyID,
                        counterparty: 'self'
                    }, this.originator);
                    const storedContact = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(plaintext));
                    if (storedContact.identityKey === contact.identityKey) {
                        // Found the right output
                        existingOutput = output;
                        break;
                    }
                } catch (e) {
                // Skip malformed or undecryptable outputs
                }
            }
        }
        // Encrypt the contact data directly
        const contactWithMetadata = {
            ...contact,
            metadata
        };
        const { ciphertext } = await this.wallet.encrypt({
            plaintext: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toArray(JSON.stringify(contactWithMetadata), 'utf8'),
            protocolID: CONTACT_PROTOCOL_ID,
            keyID,
            counterparty: 'self'
        }, this.originator);
        // Create locking script for the new contact token
        const lockingScript = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"](this.wallet, this.originator).lock([
            ciphertext
        ], CONTACT_PROTOCOL_ID, keyID, 'self');
        if (existingOutput != null) {
            // Update existing contact by spending its output
            const [txid, outputIndex] = String(existingOutput.outpoint).split('.');
            const prevOutpoint = `${txid}.${outputIndex}`;
            const pushdrop = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"](this.wallet, this.originator);
            const { signableTransaction } = await this.wallet.createAction({
                description: 'Update Contact',
                inputBEEF: outputs.BEEF,
                inputs: [
                    {
                        outpoint: prevOutpoint,
                        unlockingScriptLength: 74,
                        inputDescription: 'Spend previous contact output'
                    }
                ],
                outputs: [
                    {
                        basket: 'contacts',
                        satoshis: 1,
                        lockingScript: lockingScript.toHex(),
                        outputDescription: `Updated Contact: ${contact.name ?? contact.identityKey.slice(0, 10)}`,
                        tags: [
                            `identityKey ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toHex(hashedIdentityKey)}`
                        ],
                        customInstructions: JSON.stringify({
                            keyID
                        })
                    }
                ],
                options: {
                    acceptDelayedBroadcast: false,
                    randomizeOutputs: false
                } // TODO: Support custom config as needed.
            }, this.originator);
            if (signableTransaction == null) throw new Error('Unable to update contact');
            const unlocker = pushdrop.unlock(CONTACT_PROTOCOL_ID, keyID, 'self');
            const unlockingScript = await unlocker.sign(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromBEEF(signableTransaction.tx), 0);
            const { tx } = await this.wallet.signAction({
                reference: signableTransaction.reference,
                spends: {
                    0: {
                        unlockingScript: unlockingScript.toHex()
                    }
                }
            }, this.originator);
            if (tx == null) throw new Error('Failed to update contact output');
        } else {
            // Create new contact output
            const { tx } = await this.wallet.createAction({
                description: 'Add Contact',
                outputs: [
                    {
                        basket: 'contacts',
                        satoshis: 1,
                        lockingScript: lockingScript.toHex(),
                        outputDescription: `Contact: ${contact.name ?? contact.identityKey.slice(0, 10)}`,
                        tags: [
                            `identityKey ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toHex(hashedIdentityKey)}`
                        ],
                        customInstructions: JSON.stringify({
                            keyID
                        })
                    }
                ],
                options: {
                    acceptDelayedBroadcast: false,
                    randomizeOutputs: false
                } // TODO: Support custom config as needed.
            }, this.originator);
            if (tx == null) throw new Error('Failed to create contact output');
        }
        this.cache.setItem(this.CONTACTS_CACHE_KEY, JSON.stringify(contacts));
    }
    /**
     * Remove a contact from the contacts basket
     * @param identityKey The identity key of the contact to remove
     */ async removeContact(identityKey) {
        // Update in-memory cache
        const cached = this.cache.getItem(this.CONTACTS_CACHE_KEY);
        if (cached != null && cached !== '') {
            try {
                const contacts = JSON.parse(cached);
                const filteredContacts = contacts.filter((c)=>c.identityKey !== identityKey);
                this.cache.setItem(this.CONTACTS_CACHE_KEY, JSON.stringify(filteredContacts));
            } catch (e) {
                console.warn('Failed to update cache after contact removal:', e);
            }
        }
        // Hash the identity key to use as a tag for quick lookup
        const tags = [];
        const { hmac: hashedIdentityKey } = await this.wallet.createHmac({
            protocolID: CONTACT_PROTOCOL_ID,
            keyID: identityKey,
            counterparty: 'self',
            data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toArray(identityKey, 'utf8')
        }, this.originator);
        tags.push(`identityKey ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toHex(hashedIdentityKey)}`);
        // Find and spend the contact's output
        const outputs = await this.wallet.listOutputs({
            basket: 'contacts',
            include: 'entire transactions',
            includeCustomInstructions: true,
            tags,
            limit: 100 // Should only be one contact!
        }, this.originator);
        if (outputs.outputs == null) return;
        // Find the output for this specific contact by decrypting and checking identityKey
        for (const output of outputs.outputs){
            try {
                const [txid, outputIndex] = String(output.outpoint).split('.');
                const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromBEEF(outputs.BEEF, txid);
                const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"].decode(tx.outputs[Number(outputIndex)].lockingScript);
                if (output.customInstructions == null) continue;
                const keyID = JSON.parse(output.customInstructions).keyID;
                const { plaintext } = await this.wallet.decrypt({
                    ciphertext: decoded.fields[0],
                    protocolID: CONTACT_PROTOCOL_ID,
                    keyID,
                    counterparty: 'self'
                }, this.originator);
                const storedContact = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(plaintext));
                if (storedContact.identityKey === identityKey) {
                    // Found the contact's output, spend it without creating a new one
                    const prevOutpoint = `${txid}.${outputIndex}`;
                    const pushdrop = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"](this.wallet, this.originator);
                    const { signableTransaction } = await this.wallet.createAction({
                        description: 'Delete Contact',
                        inputBEEF: outputs.BEEF,
                        inputs: [
                            {
                                outpoint: prevOutpoint,
                                unlockingScriptLength: 74,
                                inputDescription: 'Spend contact output to delete'
                            }
                        ],
                        outputs: [],
                        options: {
                            acceptDelayedBroadcast: false,
                            randomizeOutputs: false
                        } // TODO: Support custom config as needed.
                    }, this.originator);
                    if (signableTransaction == null) throw new Error('Unable to delete contact');
                    const unlocker = pushdrop.unlock(CONTACT_PROTOCOL_ID, keyID, 'self');
                    const unlockingScript = await unlocker.sign(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromBEEF(signableTransaction.tx), 0);
                    const { tx: deleteTx } = await this.wallet.signAction({
                        reference: signableTransaction.reference,
                        spends: {
                            0: {
                                unlockingScript: unlockingScript.toHex()
                            }
                        }
                    }, this.originator);
                    if (deleteTx == null) throw new Error('Failed to delete contact output');
                    return;
                }
            } catch (e) {
            // Skip malformed or undecryptable outputs
            }
        }
    }
} //# sourceMappingURL=ContactsManager.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/identity/IdentityClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IdentityClient",
    ()=>IdentityClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/identity/types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletClient$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletClient.js [app-ssr] (ecmascript) <export default as WalletClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-ssr] (ecmascript) <export default as Transaction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/auth/certificates/Certificate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PrivateKey$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/PrivateKey.js [app-ssr] (ecmascript) <export default as PrivateKey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript) <export * as Utils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LookupResolver$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/LookupResolver.js [app-ssr] (ecmascript) <export default as LookupResolver>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SHIPBroadcaster$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/SHIPBroadcaster.js [app-ssr] (ecmascript) <export default as SHIPBroadcaster>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TopicBroadcaster$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/SHIPBroadcaster.js [app-ssr] (ecmascript) <export default as TopicBroadcaster>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$withDoubleSpendRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/withDoubleSpendRetry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$ContactsManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/identity/ContactsManager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
class IdentityClient {
    options;
    originator;
    wallet;
    contactsManager;
    constructor(wallet, options = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_IDENTITY_CLIENT_OPTIONS"], originator){
        this.options = options;
        this.originator = originator;
        this.originator = originator;
        this.wallet = wallet ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletClient$3e$__["WalletClient"]();
        this.contactsManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$ContactsManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactsManager"](this.wallet, this.originator);
    }
    /**
     * Publicly reveals selected fields from a given certificate by creating a publicly verifiable certificate.
     * The publicly revealed certificate is included in a blockchain transaction and broadcast to a federated overlay node.
     *
     * @param {Certificate} certificate - The master certificate to selectively reveal.
     * @param {CertificateFieldNameUnder50Bytes[]} fieldsToReveal - An array of certificate field names to reveal. Only these fields will be included in the public certificate.
     *
     * @returns {Promise<object>} A promise that resolves with the broadcast result from the overlay network.
     * @throws {Error} Throws an error if the certificate is invalid, the fields cannot be revealed, or if the broadcast fails.
     */ async publiclyRevealAttributes(certificate, fieldsToReveal) {
        if (Object.keys(certificate.fields).length === 0) {
            throw new Error('Public reveal failed: Certificate has no fields to reveal!');
        }
        if (fieldsToReveal.length === 0) {
            throw new Error('Public reveal failed: You must reveal at least one field!');
        }
        try {
            const masterCert = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$auth$2f$certificates$2f$Certificate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](certificate.type, certificate.serialNumber, certificate.subject, certificate.certifier, certificate.revocationOutpoint, certificate.fields, certificate.signature);
            await masterCert.verify();
        } catch (error) {
            throw new Error('Public reveal failed: Certificate verification failed!');
        }
        // Given we already have a master certificate from a certifier,
        // create an anyone verifiable certificate with selectively revealed fields
        const { keyringForVerifier } = await this.wallet.proveCertificate({
            certificate,
            fieldsToReveal,
            verifier: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$PrivateKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PrivateKey$3e$__["PrivateKey"](1).toPublicKey().toString()
        }, this.originator);
        // Build the lockingScript with pushdrop.create() and the transaction with createAction()
        const lockingScript = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"](this.wallet, this.originator).lock([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toArray(JSON.stringify({
                ...certificate,
                keyring: keyringForVerifier
            }))
        ], this.options.protocolID, this.options.keyID, 'anyone', true, true);
        // TODO: Consider verification and if this is necessary
        // counterpartyCanVerifyMyOwnership: true
        const { tx } = await this.wallet.createAction({
            description: 'Create a new Identity Token',
            outputs: [
                {
                    satoshis: this.options.tokenAmount,
                    lockingScript: lockingScript.toHex(),
                    outputDescription: 'Identity Token'
                }
            ],
            options: {
                randomizeOutputs: false
            }
        }, this.originator);
        if (tx !== undefined) {
            // Submit the transaction to an overlay
            const broadcaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TopicBroadcaster$3e$__["TopicBroadcaster"]([
                'tm_identity'
            ], {
                networkPreset: (await this.wallet.getNetwork({})).network
            });
            return await broadcaster.broadcast(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromAtomicBEEF(tx));
        }
        throw new Error('Public reveal failed: failed to create action!');
    }
    /**
     * Resolves displayable identity certificates, issued to a given identity key by a trusted certifier.
     *
     * @param {DiscoverByIdentityKeyArgs} args - Arguments for requesting the discovery based on the identity key.
     * @param {boolean} [overrideWithContacts=true] - Whether to override the results with personal contacts if available.
     * @returns {Promise<DisplayableIdentity[]>} The promise resolves to displayable identities.
     */ async resolveByIdentityKey(args, overrideWithContacts = true) {
        if (overrideWithContacts) {
            // Override results with personal contacts if available
            const contacts = await this.contactsManager.getContacts(args.identityKey);
            if (contacts.length > 0) {
                return contacts;
            }
        }
        const { certificates } = await this.wallet.discoverByIdentityKey(args, this.originator);
        return certificates.map((cert)=>{
            return IdentityClient.parseIdentity(cert);
        });
    }
    /**
     * Resolves displayable identity certificates by specific identity attributes, issued by a trusted entity.
     *
     * @param {DiscoverByAttributesArgs} args - Attributes and optional parameters used to discover certificates.
     * @param {boolean} [overrideWithContacts=true] - Whether to override the results with personal contacts if available.
     * @returns {Promise<DisplayableIdentity[]>} The promise resolves to displayable identities.
     */ async resolveByAttributes(args, overrideWithContacts = true) {
        // Run both queries in parallel for better performance
        const [contacts, certificatesResult] = await Promise.all([
            overrideWithContacts ? this.contactsManager.getContacts() : Promise.resolve([]),
            this.wallet.discoverByAttributes(args, this.originator)
        ]);
        // Fast lookup by identityKey
        const contactByKey = new Map(contacts.map((contact)=>[
                contact.identityKey,
                contact
            ]));
        // Guard if certificates might be absent
        const certs = certificatesResult?.certificates ?? [];
        // Parse certificates and substitute with contacts where available
        return certs.map((cert)=>contactByKey.get(cert.subject) ?? IdentityClient.parseIdentity(cert));
    }
    /**
     * Remove public certificate revelation from overlay services by spending the identity token
     * @param serialNumber - Unique serial number of the certificate to revoke revelation
     */ async revokeCertificateRevelation(serialNumber) {
        // 1. Find existing UTXO
        const lookupResolver = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LookupResolver$3e$__["LookupResolver"]({
            networkPreset: (await this.wallet.getNetwork({})).network
        });
        const result = await lookupResolver.query({
            service: 'ls_identity',
            query: {
                serialNumber
            }
        });
        if (result.type !== 'output-list') {
            throw new Error('Failed to get lookup result');
        }
        const topicBroadcaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SHIPBroadcaster$3e$__["SHIPBroadcaster"]([
            'tm_identity'
        ], {
            networkPreset: (await this.wallet.getNetwork({})).network,
            requireAcknowledgmentFromAllHostsForTopics: [],
            requireAcknowledgmentFromAnyHostForTopics: [],
            requireAcknowledgmentFromSpecificHostsForTopics: {
                tm_identity: []
            }
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$withDoubleSpendRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withDoubleSpendRetry"])(async ()=>{
            const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromBEEF(result.outputs[0].beef);
            const outpoint = `${tx.id('hex')}.${this.options.outputIndex}`;
            const lockingScript = tx.outputs[this.options.outputIndex].lockingScript;
            if (lockingScript === undefined || outpoint === undefined) {
                throw new Error('Failed to get locking script for revelation output!');
            }
            // 2. Parse results
            const { signableTransaction } = await this.wallet.createAction({
                description: 'Spend certificate revelation token',
                inputBEEF: result.outputs[0].beef,
                inputs: [
                    {
                        inputDescription: 'Revelation token',
                        outpoint,
                        unlockingScriptLength: 74
                    }
                ],
                options: {
                    randomizeOutputs: false,
                    acceptDelayedBroadcast: false,
                    noSend: true
                }
            }, this.originator);
            if (signableTransaction === undefined) {
                throw new Error('Failed to create signable transaction');
            }
            const partialTx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromBEEF(signableTransaction.tx);
            const unlocker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"](this.wallet, this.originator).unlock(this.options.protocolID, this.options.keyID, 'anyone');
            const unlockingScript = await unlocker.sign(partialTx, this.options.outputIndex);
            const { tx: signedTx } = await this.wallet.signAction({
                reference: signableTransaction.reference,
                spends: {
                    [this.options.outputIndex]: {
                        unlockingScript: unlockingScript.toHex()
                    }
                },
                options: {
                    acceptDelayedBroadcast: false,
                    noSend: true
                }
            }, this.originator);
            if (signedTx === undefined) {
                throw new Error('Failed to sign transaction');
            }
            await topicBroadcaster.broadcast(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromAtomicBEEF(signedTx));
        }, topicBroadcaster);
    }
    /**
     * Load all records from the contacts basket
     * @param identityKey Optional specific identity key to fetch
     * @param forceRefresh Whether to force a check for new contact data
     * @param limit Optional limit on number of contacts to fetch
     * @returns A promise that resolves with an array of contacts
     */ async getContacts(identityKey, forceRefresh = false, limit = 1000) {
        return await this.contactsManager.getContacts(identityKey, forceRefresh, limit);
    }
    /**
     * Save or update a Metanet contact
     * @param contact The displayable identity information for the contact
     * @param metadata Optional metadata to store with the contact (ex. notes, aliases, etc)
     */ async saveContact(contact, metadata) {
        return await this.contactsManager.saveContact(contact, metadata);
    }
    /**
     * Remove a contact from the contacts basket
     * @param identityKey The identity key of the contact to remove
     */ async removeContact(identityKey) {
        return await this.contactsManager.removeContact(identityKey);
    }
    /**
     * Parse out identity and certifier attributes to display from an IdentityCertificate
     * @param identityToParse - The Identity Certificate to parse
     * @returns - IdentityToDisplay
     */ static parseIdentity(identityToParse) {
        const { type, decryptedFields, certifierInfo } = identityToParse;
        let name, avatarURL, badgeLabel, badgeIconURL, badgeClickURL;
        // Parse out the name to display based on the specific certificate type which has clearly defined fields.
        switch(type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KNOWN_IDENTITY_TYPES"].xCert:
                name = decryptedFields.userName;
                avatarURL = decryptedFields.profilePhoto;
                badgeLabel = `X account certified by ${certifierInfo.name}`;
                badgeIconURL = certifierInfo.iconUrl;
                badgeClickURL = 'https://socialcert.net'; // TODO Make a specific page for this.
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KNOWN_IDENTITY_TYPES"].discordCert:
                name = decryptedFields.userName;
                avatarURL = decryptedFields.profilePhoto;
                badgeLabel = `Discord account certified by ${certifierInfo.name}`;
                badgeIconURL = certifierInfo.iconUrl;
                badgeClickURL = 'https://socialcert.net'; // TODO Make a specific page for this.
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KNOWN_IDENTITY_TYPES"].emailCert:
                name = decryptedFields.email;
                avatarURL = 'XUTZxep7BBghAJbSBwTjNfmcsDdRFs5EaGEgkESGSgjJVYgMEizu';
                badgeLabel = `Email certified by ${certifierInfo.name}`;
                badgeIconURL = certifierInfo.iconUrl;
                badgeClickURL = 'https://socialcert.net'; // TODO Make a specific page for this.
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KNOWN_IDENTITY_TYPES"].phoneCert:
                name = decryptedFields.phoneNumber;
                avatarURL = 'XUTLxtX3ELNUwRhLwL7kWNGbdnFM8WG2eSLv84J7654oH8HaJWrU';
                badgeLabel = `Phone certified by ${certifierInfo.name}`;
                badgeIconURL = certifierInfo.iconUrl;
                badgeClickURL = 'https://socialcert.net'; // TODO Make a specific page for this.
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KNOWN_IDENTITY_TYPES"].identiCert:
                name = `${decryptedFields.firstName} ${decryptedFields.lastName}`;
                avatarURL = decryptedFields.profilePhoto;
                badgeLabel = `Government ID certified by ${certifierInfo.name}`;
                badgeIconURL = certifierInfo.iconUrl;
                badgeClickURL = 'https://identicert.me'; // TODO Make a specific page for this.
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KNOWN_IDENTITY_TYPES"].registrant:
                name = decryptedFields.name;
                avatarURL = decryptedFields.icon;
                badgeLabel = `Entity certified by ${certifierInfo.name}`;
                badgeIconURL = certifierInfo.iconUrl;
                badgeClickURL = 'https://projectbabbage.com/docs/registrant'; // TODO: Make this doc page exist
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KNOWN_IDENTITY_TYPES"].coolCert:
                name = decryptedFields.cool === 'true' ? 'Cool Person!' : 'Not cool!';
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KNOWN_IDENTITY_TYPES"].anyone:
                name = 'Anyone';
                avatarURL = 'XUT4bpQ6cpBaXi1oMzZsXfpkWGbtp2JTUYAoN7PzhStFJ6wLfoeR';
                badgeLabel = 'Represents the ability for anyone to access this information.';
                badgeIconURL = 'XUUV39HVPkpmMzYNTx7rpKzJvXfeiVyQWg2vfSpjBAuhunTCA9uG';
                badgeClickURL = 'https://projectbabbage.com/docs/anyone-identity'; // TODO: Make this doc page exist
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KNOWN_IDENTITY_TYPES"].self:
                name = 'You';
                avatarURL = 'XUT9jHGk2qace148jeCX5rDsMftkSGYKmigLwU2PLLBc7Hm63VYR';
                badgeLabel = 'Represents your ability to access this information.';
                badgeIconURL = 'XUUV39HVPkpmMzYNTx7rpKzJvXfeiVyQWg2vfSpjBAuhunTCA9uG';
                badgeClickURL = 'https://projectbabbage.com/docs/self-identity'; // TODO: Make this doc page exist
                break;
            default:
                {
                    const parsed = IdentityClient.tryToParseGenericIdentity(type, decryptedFields, certifierInfo);
                    name = parsed.name;
                    avatarURL = parsed.avatarURL;
                    badgeLabel = parsed.badgeLabel;
                    badgeIconURL = parsed.badgeIconURL;
                    badgeClickURL = parsed.badgeClickURL;
                    break;
                }
        }
        return {
            name,
            avatarURL,
            abbreviatedKey: identityToParse.subject.length > 0 ? `${identityToParse.subject.substring(0, 10)}...` : '',
            identityKey: identityToParse.subject,
            badgeIconURL,
            badgeLabel,
            badgeClickURL
        };
    }
    /**
     * Helper to check if a value is a non-empty string
     */ static hasValue(value) {
        return value !== undefined && value !== null && value !== '';
    }
    /**
     * Try to parse identity information from unknown certificate types
     * by checking common field names
     */ static tryToParseGenericIdentity(type, decryptedFields, certifierInfo) {
        // Try to construct a name from common field patterns
        const firstName = decryptedFields.firstName;
        const lastName = decryptedFields.lastName;
        const fullName = IdentityClient.hasValue(firstName) && IdentityClient.hasValue(lastName) ? `${firstName} ${lastName}` : IdentityClient.hasValue(firstName) ? firstName : IdentityClient.hasValue(lastName) ? lastName : undefined;
        const name = IdentityClient.hasValue(decryptedFields.name) ? decryptedFields.name : IdentityClient.hasValue(decryptedFields.userName) ? decryptedFields.userName : fullName ?? (IdentityClient.hasValue(decryptedFields.email) ? decryptedFields.email : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultIdentity"].name);
        // Try to find an avatar/photo from common field names
        const avatarURL = IdentityClient.hasValue(decryptedFields.profilePhoto) ? decryptedFields.profilePhoto : IdentityClient.hasValue(decryptedFields.avatar) ? decryptedFields.avatar : IdentityClient.hasValue(decryptedFields.icon) ? decryptedFields.icon : IdentityClient.hasValue(decryptedFields.photo) ? decryptedFields.photo : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultIdentity"].avatarURL;
        // Generate badge information
        const badgeLabel = IdentityClient.hasValue(certifierInfo?.name) ? `${type} certified by ${String(certifierInfo.name)}` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultIdentity"].badgeLabel;
        const badgeIconURL = IdentityClient.hasValue(certifierInfo?.iconUrl) ? certifierInfo.iconUrl : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultIdentity"].badgeIconURL;
        const badgeClickURL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultIdentity"].badgeClickURL;
        return {
            name,
            avatarURL,
            badgeLabel,
            badgeIconURL,
            badgeClickURL
        };
    }
} //# sourceMappingURL=IdentityClient.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/identity/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$IdentityClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/identity/IdentityClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$identity$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/identity/types/index.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/registry/RegistryClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RegistryClient",
    ()=>RegistryClient,
    "deserializeWalletProtocol",
    ()=>deserializeWalletProtocol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletClient$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletClient.js [app-ssr] (ecmascript) <export default as WalletClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript) <export * as Utils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-ssr] (ecmascript) <export default as Transaction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LookupResolver$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/LookupResolver.js [app-ssr] (ecmascript) <export default as LookupResolver>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TopicBroadcaster$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/SHIPBroadcaster.js [app-ssr] (ecmascript) <export default as TopicBroadcaster>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
const REGISTRANT_TOKEN_AMOUNT = 1;
const REGISTRANT_KEY_ID = '1';
class RegistryClient {
    wallet;
    originator;
    network;
    resolver;
    cachedIdentityKey;
    acceptDelayedBroadcast;
    constructor(wallet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WalletClient$3e$__["WalletClient"](), options = {}, originator){
        this.wallet = wallet;
        this.originator = originator;
        this.acceptDelayedBroadcast = options.acceptDelayedBroadcast ?? false;
        this.resolver = options.resolver ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LookupResolver$3e$__["LookupResolver"]();
    }
    /**
     * Gets the wallet's identity key, caching it after the first call.
     * @returns The public identity key as a hex string.
     */ async getIdentityKey() {
        if (this.cachedIdentityKey === undefined) {
            this.cachedIdentityKey = (await this.wallet.getPublicKey({
                identityKey: true
            })).publicKey;
        }
        return this.cachedIdentityKey;
    }
    /**
     * Gets the network, initializing and caching it on first call.
     * @returns The network type ('mainnet' or 'testnet').
     */ async getNetwork() {
        if (this.network === undefined) {
            this.network = (await this.wallet.getNetwork({})).network;
        }
        return this.network;
    }
    /**
     * Publishes a new on-chain definition for baskets, protocols, or certificates.
     * The definition data is encoded in a pushdrop-based UTXO.
     *
     * Registry operators (i.e., identity key owners) can create these definitions
     * to establish canonical references for basket IDs, protocol specs, or certificate schemas.
     *
     * @param data - Structured information about a 'basket', 'protocol', or 'certificate'.
     * @returns A promise with the broadcast result or failure.
     */ async registerDefinition(data) {
        const registryOperator = await this.getIdentityKey();
        const pushdrop = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"](this.wallet, this.originator);
        // Convert definition data into PushDrop fields
        const fields = this.buildPushDropFields(data, registryOperator);
        // Convert the user-friendly definitionType to the actual wallet protocol
        const protocol = this.mapDefinitionTypeToWalletProtocol(data.definitionType);
        // Lock the fields into a pushdrop-based UTXO
        const lockingScript = await pushdrop.lock(fields, protocol, REGISTRANT_KEY_ID, 'anyone', true);
        // Create a transaction
        const { tx } = await this.wallet.createAction({
            description: `Register a new ${data.definitionType} item`,
            outputs: [
                {
                    satoshis: REGISTRANT_TOKEN_AMOUNT,
                    lockingScript: lockingScript.toHex(),
                    outputDescription: `New ${data.definitionType} registration token`,
                    basket: this.mapDefinitionTypeToBasketName(data.definitionType)
                }
            ],
            options: {
                acceptDelayedBroadcast: this.acceptDelayedBroadcast,
                randomizeOutputs: false
            }
        }, this.originator);
        if (tx === undefined) {
            throw new Error(`Failed to create ${data.definitionType} registration transaction!`);
        }
        // Broadcast to the relevant topic
        const broadcaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TopicBroadcaster$3e$__["TopicBroadcaster"]([
            this.mapDefinitionTypeToTopic(data.definitionType)
        ], {
            networkPreset: await this.getNetwork(),
            resolver: this.resolver
        });
        const result = await broadcaster.broadcast(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromAtomicBEEF(tx));
        return result;
    }
    /**
     * Resolves registrant tokens of a particular type using a lookup service.
     *
     * The query object shape depends on the registry type:
     * - For "basket", the query is of type BasketMapQuery:
     *   { basketID?: string; name?: string; registryOperators?: string[]; }
     * - For "protocol", the query is of type ProtoMapQuery:
     *   { name?: string; registryOperators?: string[]; protocolID?: WalletProtocol; }
     * - For "certificate", the query is of type CertMapQuery:
     *   { type?: string; name?: string; registryOperators?: string[]; }
     *
     * @param definitionType - The registry type, which can be 'basket', 'protocol', or 'certificate'.
     * @param query - The query object used to filter registry records, whose shape is determined by the registry type.
     * @returns A promise that resolves to an array of matching registry records.
     */ async resolve(definitionType, query) {
        const serviceName = this.mapDefinitionTypeToServiceName(definitionType);
        // Make the lookup query
        const result = await this.resolver.query({
            service: serviceName,
            query
        });
        if (result.type !== 'output-list') {
            return [];
        }
        const parsedRegistryRecords = [];
        for (const output of result.outputs){
            try {
                const parsedTx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromBEEF(output.beef);
                const lockingScript = parsedTx.outputs[output.outputIndex].lockingScript;
                const record = await this.parseLockingScript(definitionType, lockingScript);
                parsedRegistryRecords.push(record);
            } catch  {
            // Skip invalid or non-pushdrop outputs
            }
        }
        return parsedRegistryRecords;
    }
    /**
     * Lists the registry operator's published definitions for the given type.
     *
     * Returns parsed registry records including transaction details such as txid, outputIndex, satoshis, and the locking script.
     *
     * @param definitionType - The type of registry definition to list ('basket', 'protocol', or 'certificate').
     * @returns A promise that resolves to an array of RegistryRecord objects.
     */ async listOwnRegistryEntries(definitionType) {
        const relevantBasketName = this.mapDefinitionTypeToBasketName(definitionType);
        const { outputs, BEEF } = await this.wallet.listOutputs({
            basket: relevantBasketName,
            include: 'entire transactions'
        });
        const results = [];
        for (const output of outputs){
            if (!output.spendable) {
                continue;
            }
            try {
                const [txid, outputIndex] = output.outpoint.split('.');
                const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromBEEF(BEEF, txid);
                const lockingScript = tx.outputs[Number(outputIndex)].lockingScript;
                const record = await this.parseLockingScript(definitionType, lockingScript);
                results.push({
                    ...record,
                    txid,
                    outputIndex: Number(outputIndex),
                    satoshis: output.satoshis,
                    lockingScript: lockingScript.toHex(),
                    beef: BEEF
                });
            } catch  {
            // Ignore parse errors
            }
        }
        return results;
    }
    /**
     * Removes a registry definition by spending its associated UTXO.
     *
     * @param registryRecord - The registry record to remove (must have valid txid, outputIndex, and lockingScript).
     * @returns Broadcast success/failure.
     */ async removeDefinition(registryRecord) {
        if (registryRecord.txid === undefined || typeof registryRecord.outputIndex === 'undefined' || registryRecord.lockingScript === undefined) {
            throw new Error('Invalid registry record. Missing txid, outputIndex, or lockingScript.');
        }
        // Check if the registry record belongs to the current user
        const currentIdentityKey = await this.getIdentityKey();
        if (registryRecord.registryOperator !== currentIdentityKey) {
            throw new Error('This registry token does not belong to the current wallet.');
        }
        // Create a descriptive label for the item we're removing
        const itemIdentifier = registryRecord.definitionType === 'basket' ? registryRecord.basketID : registryRecord.definitionType === 'protocol' ? registryRecord.name : registryRecord.definitionType === 'certificate' ? registryRecord.name !== undefined ? registryRecord.name : registryRecord.type : 'unknown';
        const outpoint = `${registryRecord.txid}.${registryRecord.outputIndex}`;
        const { signableTransaction } = await this.wallet.createAction({
            description: `Remove ${registryRecord.definitionType} item: ${itemIdentifier}`,
            inputBEEF: registryRecord.beef,
            inputs: [
                {
                    outpoint,
                    unlockingScriptLength: 74,
                    inputDescription: `Removing ${registryRecord.definitionType} token`
                }
            ],
            options: {
                acceptDelayedBroadcast: this.acceptDelayedBroadcast,
                randomizeOutputs: false
            }
        }, this.originator);
        if (signableTransaction === undefined) {
            throw new Error('Failed to create signable transaction.');
        }
        const partialTx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromAtomicBEEF(signableTransaction.tx);
        // Prepare the unlocker
        const pushdrop = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"](this.wallet, this.originator);
        const unlocker = pushdrop.unlock(this.mapDefinitionTypeToWalletProtocol(registryRecord.definitionType), REGISTRANT_KEY_ID, 'anyone');
        // Convert to Transaction, apply signature
        const finalUnlockScript = await unlocker.sign(partialTx, 0);
        // Complete signing with the final unlock script
        const { tx: signedTx } = await this.wallet.signAction({
            reference: signableTransaction.reference,
            spends: {
                0: {
                    unlockingScript: finalUnlockScript.toHex()
                }
            },
            options: {
                acceptDelayedBroadcast: this.acceptDelayedBroadcast
            }
        }, this.originator);
        if (signedTx === undefined) {
            throw new Error('Failed to finalize the transaction signature.');
        }
        // Broadcast
        const broadcaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TopicBroadcaster$3e$__["TopicBroadcaster"]([
            this.mapDefinitionTypeToTopic(registryRecord.definitionType)
        ], {
            networkPreset: await this.getNetwork(),
            resolver: this.resolver
        });
        const result = await broadcaster.broadcast(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromAtomicBEEF(signedTx));
        return result;
    }
    /**
     * Updates an existing registry record by spending its UTXO and creating a new one with updated data.
     *
     * @param registryRecord - The existing registry record to update (must have valid txid, outputIndex, and lockingScript).
     * @param updatedData - The new definition data to replace the old record.
     * @returns Broadcast success/failure.
     */ async updateDefinition(registryRecord, updatedData) {
        if (registryRecord.txid === undefined || typeof registryRecord.outputIndex === 'undefined' || registryRecord.lockingScript === undefined) {
            throw new Error('Invalid registry record. Missing txid, outputIndex, or lockingScript.');
        }
        // Verify the updated data matches the record type
        if (registryRecord.definitionType !== updatedData.definitionType) {
            throw new Error(`Cannot change definition type from ${registryRecord.definitionType} to ${updatedData.definitionType}`);
        }
        // Check if the registry record belongs to the current user
        const currentIdentityKey = await this.getIdentityKey();
        if (registryRecord.registryOperator !== currentIdentityKey) {
            throw new Error('This registry token does not belong to the current wallet.');
        }
        // Create a descriptive label for the item we're updating
        const itemIdentifier = registryRecord.definitionType === 'basket' ? registryRecord.basketID : registryRecord.definitionType === 'protocol' ? registryRecord.name : registryRecord.definitionType === 'certificate' ? registryRecord.name !== undefined ? registryRecord.name : registryRecord.type : 'unknown';
        const pushdrop = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"](this.wallet, this.originator);
        // Build the new locking script with updated data
        const fields = this.buildPushDropFields(updatedData, currentIdentityKey);
        const protocol = this.mapDefinitionTypeToWalletProtocol(updatedData.definitionType);
        const newLockingScript = await pushdrop.lock(fields, protocol, REGISTRANT_KEY_ID, 'anyone', true);
        const outpoint = `${registryRecord.txid}.${registryRecord.outputIndex}`;
        const { signableTransaction } = await this.wallet.createAction({
            description: `Update ${registryRecord.definitionType} item: ${itemIdentifier}`,
            inputBEEF: registryRecord.beef,
            inputs: [
                {
                    outpoint,
                    unlockingScriptLength: 74,
                    inputDescription: `Updating ${registryRecord.definitionType} token`
                }
            ],
            outputs: [
                {
                    satoshis: REGISTRANT_TOKEN_AMOUNT,
                    lockingScript: newLockingScript.toHex(),
                    outputDescription: `Updated ${registryRecord.definitionType} registration token`,
                    basket: this.mapDefinitionTypeToBasketName(registryRecord.definitionType)
                }
            ],
            options: {
                acceptDelayedBroadcast: this.acceptDelayedBroadcast,
                randomizeOutputs: false
            }
        }, this.originator);
        if (signableTransaction === undefined) {
            throw new Error('Failed to create signable transaction.');
        }
        const partialTx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromAtomicBEEF(signableTransaction.tx);
        // Prepare the unlocker for the input
        const unlocker = pushdrop.unlock(this.mapDefinitionTypeToWalletProtocol(registryRecord.definitionType), REGISTRANT_KEY_ID, 'anyone');
        // Sign the input
        const finalUnlockScript = await unlocker.sign(partialTx, 0);
        // Complete signing with the final unlock script
        const { tx: signedTx } = await this.wallet.signAction({
            reference: signableTransaction.reference,
            spends: {
                0: {
                    unlockingScript: finalUnlockScript.toHex()
                }
            },
            options: {
                acceptDelayedBroadcast: this.acceptDelayedBroadcast
            }
        }, this.originator);
        if (signedTx === undefined) {
            throw new Error('Failed to finalize the transaction signature.');
        }
        // Broadcast
        const broadcaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TopicBroadcaster$3e$__["TopicBroadcaster"]([
            this.mapDefinitionTypeToTopic(registryRecord.definitionType)
        ], {
            networkPreset: await this.getNetwork(),
            resolver: this.resolver
        });
        return await broadcaster.broadcast(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Transaction$3e$__["Transaction"].fromAtomicBEEF(signedTx));
    }
    // --------------------------------------------------------------------------
    // INTERNAL UTILITY METHODS
    // --------------------------------------------------------------------------
    /**
     * Convert definition data into an array of pushdrop fields (strings).
     * Each definition type has a slightly different shape.
     */ buildPushDropFields(data, registryOperator) {
        let fields;
        switch(data.definitionType){
            case 'basket':
                fields = [
                    data.basketID,
                    data.name,
                    data.iconURL,
                    data.description,
                    data.documentationURL
                ];
                break;
            case 'protocol':
                fields = [
                    JSON.stringify(data.protocolID),
                    data.name,
                    data.iconURL,
                    data.description,
                    data.documentationURL
                ];
                break;
            case 'certificate':
                fields = [
                    data.type,
                    data.name,
                    data.iconURL,
                    data.description,
                    data.documentationURL,
                    JSON.stringify(data.fields)
                ];
                break;
            default:
                throw new Error('Unsupported definition type');
        }
        // Append the operator's public identity key last
        fields.push(registryOperator);
        return fields.map((field)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toArray(field));
    }
    /**
     * Decodes a pushdrop locking script for a given definition type,
     * returning a typed record with the appropriate fields.
     */ async parseLockingScript(definitionType, lockingScript) {
        const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"].decode(lockingScript);
        if (decoded.fields.length === 0) {
            throw new Error('Not a valid registry pushdrop script.');
        }
        let registryOperator;
        let parsedData;
        switch(definitionType){
            case 'basket':
                {
                    if (decoded.fields.length !== 7) {
                        throw new Error('Unexpected field count for basket type.');
                    }
                    const [basketID, name, iconURL, description, docURL, operator] = decoded.fields;
                    registryOperator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(operator);
                    parsedData = {
                        definitionType: 'basket',
                        basketID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(basketID),
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(name),
                        iconURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(iconURL),
                        description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(description),
                        documentationURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(docURL)
                    };
                    break;
                }
            case 'protocol':
                {
                    if (decoded.fields.length !== 7) {
                        throw new Error('Unexpected field count for protocol type.');
                    }
                    const [protocolID, name, iconURL, description, docURL, operator] = decoded.fields;
                    registryOperator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(operator);
                    parsedData = {
                        definitionType: 'protocol',
                        protocolID: deserializeWalletProtocol(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(protocolID)),
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(name),
                        iconURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(iconURL),
                        description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(description),
                        documentationURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(docURL)
                    };
                    break;
                }
            case 'certificate':
                {
                    if (decoded.fields.length !== 8) {
                        throw new Error('Unexpected field count for certificate type.');
                    }
                    const [certType, name, iconURL, description, docURL, fieldsJSON, operator] = decoded.fields;
                    registryOperator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(operator);
                    let parsedFields = {};
                    try {
                        parsedFields = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(fieldsJSON));
                    } catch  {
                    // If there's a JSON parse error, assume empty
                    }
                    parsedData = {
                        definitionType: 'certificate',
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(certType),
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(name),
                        iconURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(iconURL),
                        description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(description),
                        documentationURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Utils$3e$__["Utils"].toUTF8(docURL),
                        fields: parsedFields
                    };
                    break;
                }
            default:
                throw new Error(`Unsupported definition type: ${definitionType}`);
        }
        // Return the typed data plus the operator key
        return {
            ...parsedData,
            registryOperator
        };
    }
    /**
     * Convert our definitionType to the wallet protocol format ([protocolID, keyID]).
     */ mapDefinitionTypeToWalletProtocol(definitionType) {
        switch(definitionType){
            case 'basket':
                return [
                    1,
                    'basketmap'
                ];
            case 'protocol':
                return [
                    1,
                    'protomap'
                ];
            case 'certificate':
                return [
                    1,
                    'certmap'
                ];
            default:
                throw new Error(`Unknown definition type: ${definitionType}`);
        }
    }
    /**
     * Convert 'basket'|'protocol'|'certificate' to the basket name used by the wallet.
     */ mapDefinitionTypeToBasketName(definitionType) {
        switch(definitionType){
            case 'basket':
                return 'basketmap';
            case 'protocol':
                return 'protomap';
            case 'certificate':
                return 'certmap';
            default:
                throw new Error(`Unknown definition type: ${definitionType}`);
        }
    }
    /**
     * Convert 'basket'|'protocol'|'certificate' to the broadcast topic name.
     */ mapDefinitionTypeToTopic(definitionType) {
        switch(definitionType){
            case 'basket':
                return 'tm_basketmap';
            case 'protocol':
                return 'tm_protomap';
            case 'certificate':
                return 'tm_certmap';
            default:
                throw new Error(`Unknown definition type: ${definitionType}`);
        }
    }
    /**
     * Convert 'basket'|'protocol'|'certificate' to the lookup service name.
     */ mapDefinitionTypeToServiceName(definitionType) {
        switch(definitionType){
            case 'basket':
                return 'ls_basketmap';
            case 'protocol':
                return 'ls_protomap';
            case 'certificate':
                return 'ls_certmap';
            default:
                throw new Error(`Unknown definition type: ${definitionType}`);
        }
    }
}
function deserializeWalletProtocol(str) {
    // Parse the JSON string back into a JavaScript value.
    const parsed = JSON.parse(str);
    // Validate that the parsed value is an array with exactly two elements.
    if (!Array.isArray(parsed) || parsed.length !== 2) {
        throw new Error('Invalid wallet protocol format.');
    }
    const [security, protocolString] = parsed;
    // Validate that the security level is one of the allowed numbers.
    if (![
        0,
        1,
        2
    ].includes(security)) {
        throw new Error('Invalid security level.');
    }
    // Validate that the protocol string is a string and its length is within the allowed bounds.
    if (typeof protocolString !== 'string') {
        throw new Error('Invalid protocolID');
    }
    return [
        security,
        protocolString
    ];
} //# sourceMappingURL=RegistryClient.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/registry/types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/registry/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$registry$2f$RegistryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/registry/RegistryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$registry$2f$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/registry/types/index.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/kvstore/LocalKVStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalKVStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$PushDrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/PushDrop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Beef.js [app-ssr] (ecmascript)");
;
;
;
;
;
class LocalKVStore {
    /**
     * The wallet interface used to manage outputs and perform cryptographic operations.
     * @private
     * @readonly
     */ wallet;
    /**
     * The context (basket name) used to namespace the key-value pairs within the wallet.
     * @private
     * @readonly
     */ context;
    /**
     * Flag indicating whether values should be encrypted before storing.
     * @private
     * @readonly
     */ encrypt;
    /**
     * An originator to use with PushDrop and the wallet.
     * @private
     * @readonly
     */ originator;
    acceptDelayedBroadcast = false;
    /**
     * A map to store locks for each key to ensure atomic updates.
     * @private
     */ keyLocks = new Map();
    /**
     * Creates an instance of the localKVStore.
     *
     * @param {WalletInterface} [wallet=new WalletClient()] - The wallet interface to use. Defaults to a new WalletClient instance.
     * @param {string} [context='kvstoredefault'] - The context (basket) for namespacing keys. Defaults to 'kvstore default'.
     * @param {boolean} [encrypt=true] - Whether to encrypt values. Defaults to true.
     * @param {string} [originator] — An originator to use with PushDrop and the wallet, if provided.
     * @throws {Error} If the context is missing or empty.
     */ constructor(wallet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](), context = 'kvstore default', encrypt = true, originator, acceptDelayedBroadcast = false){
        if (typeof context !== 'string' || context.length < 1) {
            throw new Error('A context in which to operate is required.');
        }
        this.wallet = wallet;
        this.context = context;
        this.encrypt = encrypt;
        this.originator = originator;
        this.acceptDelayedBroadcast = acceptDelayedBroadcast;
    }
    async queueOperationOnKey(key) {
        // Check if a lock exists for this key and wait for it to resolve
        let lockQueue = this.keyLocks.get(key);
        if (lockQueue == null) {
            lockQueue = [];
            this.keyLocks.set(key, lockQueue);
        }
        let resolveNewLock = ()=>{};
        const newLock = new Promise((resolve)=>{
            resolveNewLock = resolve;
            if (lockQueue != null) {
                lockQueue.push(resolve);
            }
        });
        // If we are the only request, resolve the lock immediately, queue remains at 1 item until request ends.
        if (lockQueue.length === 1) {
            resolveNewLock();
        }
        await newLock;
        return lockQueue;
    }
    finishOperationOnKey(key, lockQueue) {
        lockQueue.shift(); // Remove the current lock from the queue
        if (lockQueue.length > 0) {
            // If there are more locks waiting, resolve the next one
            lockQueue[0]();
        }
    }
    getProtocol(key) {
        return {
            protocolID: [
                2,
                this.context
            ],
            keyID: key
        };
    }
    async getOutputs(key, limit) {
        const results = await this.wallet.listOutputs({
            basket: this.context,
            tags: [
                key
            ],
            tagQueryMode: 'all',
            include: 'entire transactions',
            limit
        }, this.originator);
        return results;
    }
    /**
     * Retrieves the value associated with a given key.
     *
     * @param {string} key - The key to retrieve the value for.
     * @param {string | undefined} [defaultValue=undefined] - The value to return if the key is not found.
     * @returns {Promise<string | undefined>} A promise that resolves to the value as a string,
     *   the defaultValue if the key is not found, or undefined if no defaultValue is provided.
     * @throws {Error} If too many outputs are found for the key (ambiguous state).
     * @throws {Error} If the found output's locking script cannot be decoded or represents an invalid token format.
     */ async get(key, defaultValue = undefined) {
        const lockQueue = await this.queueOperationOnKey(key);
        try {
            const r = await this.lookupValue(key, defaultValue, 5);
            return r.value;
        } finally{
            this.finishOperationOnKey(key, lockQueue);
        }
    }
    getLockingScript(output, beef) {
        const [txid, vout] = output.outpoint.split('.');
        const tx = beef.findTxid(txid)?.tx;
        if (tx == null) {
            throw new Error(`beef must contain txid ${txid}`);
        }
        const lockingScript = tx.outputs[Number(vout)].lockingScript;
        return lockingScript;
    }
    async lookupValue(key, defaultValue, limit) {
        const lor = await this.getOutputs(key, limit);
        const r = {
            value: defaultValue,
            outpoint: undefined,
            lor
        };
        const { outputs } = lor;
        if (outputs.length === 0) {
            return r;
        }
        const output = outputs.slice(-1)[0];
        r.outpoint = output.outpoint;
        let field;
        try {
            if (lor.BEEF === undefined) {
                throw new Error('entire transactions listOutputs option must return valid BEEF');
            }
            const lockingScript = this.getLockingScript(output, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Beef"].fromBinary(lor.BEEF));
            const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$PushDrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].decode(lockingScript);
            if (decoded.fields.length < 1 || decoded.fields.length > 2) {
                throw new Error('Invalid token.');
            }
            field = decoded.fields[0];
        } catch (error) {
            throw new Error(`Invalid value found. You need to call set to collapse the corrupted state (or relinquish the corrupted ${outputs[0].outpoint} output from the ${this.context} basket) before you can get this value again. Original error: ${error instanceof Error ? error.message : String(error)}`);
        }
        if (!this.encrypt) {
            r.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](field);
        } else {
            const { plaintext } = await this.wallet.decrypt({
                ...this.getProtocol(key),
                ciphertext: field
            }, this.originator);
            r.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](plaintext);
        }
        return r;
    }
    getInputs(outputs) {
        const inputs = [];
        for(let i = 0; i < outputs.length; i++){
            inputs.push({
                outpoint: outputs[i].outpoint,
                unlockingScriptLength: 74,
                inputDescription: 'Previous key-value token'
            });
        }
        return inputs;
    }
    async getSpends(key, outputs, pushdrop, atomicBEEF) {
        const p = this.getProtocol(key);
        const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromAtomicBEEF(atomicBEEF);
        const spends = {};
        for(let i = 0; i < outputs.length; i++){
            const unlocker = pushdrop.unlock(p.protocolID, p.keyID, 'self');
            const unlockingScript = await unlocker.sign(tx, i);
            spends[i] = {
                unlockingScript: unlockingScript.toHex()
            };
        }
        return spends;
    }
    /**
     * Sets or updates the value associated with a given key atomically.
     * If the key already exists (one or more outputs found), it spends the existing output(s)
     * and creates a new one with the updated value. If multiple outputs exist for the key,
     * they are collapsed into a single new output.
     * If the key does not exist, it creates a new output.
     * Handles encryption if enabled.
     * If signing the update/collapse transaction fails, it relinquishes the original outputs and starts over with a new chain.
     * Ensures atomicity by locking the key during the operation, preventing concurrent updates
     * to the same key from missing earlier changes.
     *
     * @param {string} key - The key to set or update.
     * @param {string} value - The value to associate with the key.
     * @returns {Promise<OutpointString>} A promise that resolves to the outpoint string (txid.vout) of the new or updated token output.
     */ async set(key, value) {
        const lockQueue = await this.queueOperationOnKey(key);
        try {
            const current = await this.lookupValue(key, undefined, 10);
            if (current.value === value) {
                if (current.outpoint === undefined) {
                    throw new Error('outpoint must be valid when value is valid and unchanged');
                }
                // Don't create a new transaction if the value doesn't need to change
                return current.outpoint;
            }
            const protocol = this.getProtocol(key);
            let valueAsArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](value, 'utf8');
            if (this.encrypt) {
                const { ciphertext } = await this.wallet.encrypt({
                    ...protocol,
                    plaintext: valueAsArray
                }, this.originator);
                valueAsArray = ciphertext;
            }
            const pushdrop = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$PushDrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this.wallet, this.originator);
            const lockingScript = await pushdrop.lock([
                valueAsArray
            ], protocol.protocolID, protocol.keyID, 'self');
            const { outputs, BEEF: inputBEEF } = current.lor;
            let outpoint;
            try {
                const inputs = this.getInputs(outputs);
                const { txid, signableTransaction } = await this.wallet.createAction({
                    description: `Update ${key} in ${this.context}`,
                    inputBEEF,
                    inputs,
                    outputs: [
                        {
                            basket: this.context,
                            tags: [
                                key
                            ],
                            lockingScript: lockingScript.toHex(),
                            satoshis: 1,
                            outputDescription: 'Key-value token'
                        }
                    ],
                    options: {
                        acceptDelayedBroadcast: this.acceptDelayedBroadcast,
                        randomizeOutputs: false
                    }
                }, this.originator);
                if (outputs.length > 0 && typeof signableTransaction !== 'object') {
                    throw new Error('Wallet did not return a signable transaction when expected.');
                }
                if (signableTransaction == null) {
                    outpoint = `${txid}.0`;
                } else {
                    const spends = await this.getSpends(key, outputs, pushdrop, signableTransaction.tx);
                    const { txid } = await this.wallet.signAction({
                        reference: signableTransaction.reference,
                        spends
                    }, this.originator);
                    outpoint = `${txid}.0`;
                }
            } catch (error) {
                throw new Error(`There are ${outputs.length} outputs with tag ${key} that cannot be unlocked. Original error: ${error instanceof Error ? error.message : String(error)}`);
            }
            return outpoint;
        } finally{
            this.finishOperationOnKey(key, lockQueue);
        }
    }
    /**
     * Removes the key-value pair associated with the given key.
     * It finds the existing output(s) for the key and spends them without creating a new output.
     * If multiple outputs exist, they are all spent in the same transaction.
     * If the key does not exist, it does nothing.
     * If signing the removal transaction fails, it relinquishes the original outputs instead of spending.
     *
     * @param {string} key - The key to remove.
     * @returns {Promise<string[]>} A promise that resolves to the txids of the removal transactions if successful.
     */ async remove(key) {
        const lockQueue = await this.queueOperationOnKey(key);
        try {
            const txids = [];
            for(;;){
                const { outputs, BEEF: inputBEEF, totalOutputs } = await this.getOutputs(key);
                if (outputs.length > 0) {
                    const pushdrop = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$PushDrop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](this.wallet, this.originator);
                    try {
                        const inputs = this.getInputs(outputs);
                        const { signableTransaction } = await this.wallet.createAction({
                            description: `Remove ${key} in ${this.context}`,
                            inputBEEF,
                            inputs,
                            options: {
                                acceptDelayedBroadcast: this.acceptDelayedBroadcast
                            }
                        }, this.originator);
                        if (typeof signableTransaction !== 'object') {
                            throw new Error('Wallet did not return a signable transaction when expected.');
                        }
                        const spends = await this.getSpends(key, outputs, pushdrop, signableTransaction.tx);
                        const { txid } = await this.wallet.signAction({
                            reference: signableTransaction.reference,
                            spends
                        }, this.originator);
                        if (txid === undefined) {
                            throw new Error('signAction must return a valid txid');
                        }
                        txids.push(txid);
                    } catch (error) {
                        throw new Error(`There are ${totalOutputs} outputs with tag ${key} that cannot be unlocked. Original error: ${error instanceof Error ? error.message : String(error)}`);
                    }
                }
                if (outputs.length === totalOutputs) {
                    break;
                }
            }
            return txids;
        } finally{
            this.finishOperationOnKey(key, lockQueue);
        }
    }
} //# sourceMappingURL=LocalKVStore.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/kvstore/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "kvProtocol",
    ()=>kvProtocol
]);
const kvProtocol = {
    protocolID: 0,
    key: 1,
    value: 2,
    controller: 3,
    tags: 4,
    signature: 5 // Note: signature moves to position 5 when tags are present
}; //# sourceMappingURL=types.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/kvstore/kvStoreInterpreter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "kvStoreInterpreter",
    ()=>kvStoreInterpreter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/kvstore/types.js [app-ssr] (ecmascript)");
;
;
;
const kvStoreInterpreter = async (transaction, outputIndex, ctx)=>{
    try {
        const output = transaction.outputs[outputIndex];
        if (output == null || output.lockingScript == null) return undefined;
        if (ctx == null || ctx.key == null) return undefined;
        // Decode the KVStore token
        const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"].decode(output.lockingScript);
        // Support backwards compatibility: old format without tags, new format with tags
        const expectedFieldCount = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"]).length;
        const hasTagsField = decoded.fields.length === expectedFieldCount;
        const isOldFormat = decoded.fields.length === expectedFieldCount - 1;
        if (!isOldFormat && !hasTagsField) return undefined;
        // Only return values for the given key and protocolID
        const key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](decoded.fields[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"].key]);
        const protocolID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](decoded.fields[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"].protocolID]);
        if (key !== ctx.key || protocolID !== JSON.stringify(ctx.protocolID)) return undefined;
        try {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](decoded.fields[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"].value]);
        } catch  {
            return undefined;
        }
    } catch  {
        // Skip non-KVStore outputs or malformed tokens
        return undefined;
    }
}; //# sourceMappingURL=kvStoreInterpreter.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/kvstore/GlobalKVStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalKVStore",
    ()=>GlobalKVStore,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Transaction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/primitives/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TopicBroadcaster$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/SHIPBroadcaster.js [app-ssr] (ecmascript) <export default as TopicBroadcaster>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LookupResolver$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/LookupResolver.js [app-ssr] (ecmascript) <export default as LookupResolver>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$withDoubleSpendRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/withDoubleSpendRetry.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/script/templates/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/WalletClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/transaction/Beef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$Historian$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/overlay-tools/Historian.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$kvStoreInterpreter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/kvstore/kvStoreInterpreter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$ProtoWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/wallet/ProtoWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/kvstore/types.js [app-ssr] (ecmascript)");
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
/**
 * Default configuration values for GlobalKVStore operations.
 * Provides sensible defaults for overlay connection and protocol settings.
 */ const DEFAULT_CONFIG = {
    protocolID: [
        1,
        'kvstore'
    ],
    serviceName: 'ls_kvstore',
    tokenAmount: 1,
    topics: [
        'tm_kvstore'
    ],
    networkPreset: 'mainnet',
    acceptDelayedBroadcast: false,
    overlayBroadcast: false,
    tokenSetDescription: '',
    tokenUpdateDescription: '',
    tokenRemovalDescription: '' // Will be set dynamically
};
class GlobalKVStore {
    /**
     * The wallet interface used to create transactions and perform cryptographic operations.
     * @readonly
     */ wallet;
    /**
     * Configuration for the KVStore instance containing all runtime options.
     * @private
     * @readonly
     */ config;
    /**
     * Historian instance used to extract history from transaction outputs.
     * @private
     */ historian;
    /**
     * Lookup resolver used to query the overlay for transaction outputs.
     * @private
     */ lookupResolver;
    /**
     * Topic broadcaster used to broadcast transactions to the overlay.
     * @private
     */ topicBroadcaster;
    /**
     * A map to store locks for each key to ensure atomic updates.
     * @private
     */ keyLocks = new Map();
    /**
     * Cached user identity key
     * @private
     */ cachedIdentityKey = null;
    /**
     * Creates an instance of the GlobalKVStore.
     *
     * @param {KVStoreConfig} [config={}] - Configuration options for the KVStore. Defaults to empty object.
     * @param {WalletInterface} [config.wallet] - Wallet to use for operations. Defaults to WalletClient.
     * @throws {Error} If the configuration contains invalid parameters.
     */ constructor(config = {}){
        // Merge with defaults to create a fully resolved config
        this.config = {
            ...DEFAULT_CONFIG,
            ...config
        };
        this.wallet = config.wallet ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$WalletClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        this.historian = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$Historian$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Historian"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$kvStoreInterpreter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvStoreInterpreter"]);
        this.lookupResolver = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$LookupResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LookupResolver$3e$__["LookupResolver"]({
            networkPreset: this.config.networkPreset
        });
        this.topicBroadcaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$SHIPBroadcaster$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TopicBroadcaster$3e$__["TopicBroadcaster"](this.config.topics, {
            networkPreset: this.config.networkPreset
        });
    }
    /**
     * Retrieves data from the KVStore.
     * Can query by key+controller (single result), protocolID, controller, or key (multiple results).
     *
     * @param {KVStoreQuery} query - Query parameters sent to overlay
     * @param {KVStoreGetOptions} [options={}] - Configuration options for the get operation
     * @returns {Promise<KVStoreEntry | KVStoreEntry[] | undefined>} Single entry for key+controller queries, array for all other queries
     */ async get(query, options = {}) {
        if (Object.keys(query).length === 0) {
            throw new Error('Must specify either key, controller, or protocolID');
        }
        if (query.key != null && query.controller != null) {
            // Specific key+controller query - return single entry
            const entries = await this.queryOverlay(query, options);
            return entries.length > 0 ? entries[0] : undefined;
        }
        return await this.queryOverlay(query, options);
    }
    /**
     * Sets a key-value pair. The current user (wallet identity) becomes the controller.
     *
     * @param {string} key - The key to set (user computes this however they want)
     * @param {string} value - The value to store
     * @param {KVStoreSetOptions} [options={}] - Configuration options for the set operation
     * @returns {Promise<OutpointString>} The outpoint of the created token
     */ async set(key, value, options = {}) {
        if (typeof key !== 'string' || key.length === 0) {
            throw new Error('Key must be a non-empty string.');
        }
        if (typeof value !== 'string') {
            throw new Error('Value must be a string.');
        }
        const controller = await this.getIdentityKey();
        const lockQueue = await this.queueOperationOnKey(key);
        const protocolID = options.protocolID ?? this.config.protocolID;
        const tokenSetDescription = options.tokenSetDescription != null && options.tokenSetDescription !== '' ? options.tokenSetDescription : `Create KVStore value for ${key}`;
        const tokenUpdateDescription = options.tokenUpdateDescription != null && options.tokenUpdateDescription !== '' ? options.tokenUpdateDescription : `Update KVStore value for ${key}`;
        const tokenAmount = options.tokenAmount ?? this.config.tokenAmount;
        const tags = options.tags ?? [];
        try {
            // Create PushDrop locking script (reusable across retries)
            const pushdrop = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"](this.wallet, this.config.originator);
            const lockingScriptFields = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](JSON.stringify(protocolID), 'utf8'),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](key, 'utf8'),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](value, 'utf8'),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](controller, 'hex')
            ];
            // Add tags as optional 5th field for backwards compatibility
            if (tags.length > 0) {
                lockingScriptFields.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](JSON.stringify(tags), 'utf8'));
            }
            const lockingScript = await pushdrop.lock(lockingScriptFields, protocolID ?? this.config.protocolID, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArray"](key, 'utf8')), 'anyone', true);
            // Wrap entire operation in double-spend retry, including overlay query
            const outpoint = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$withDoubleSpendRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withDoubleSpendRetry"])(async ()=>{
                // Re-query overlay on each attempt to get fresh token state
                const existingEntries = await this.queryOverlay({
                    key,
                    controller
                }, {
                    includeToken: true
                });
                const existingToken = existingEntries.length > 0 ? existingEntries[0].token : undefined;
                if (existingToken != null) {
                    // Update existing token
                    const inputs = [
                        {
                            outpoint: `${existingToken.txid}.${existingToken.outputIndex}`,
                            unlockingScriptLength: 74,
                            inputDescription: 'Previous KVStore token'
                        }
                    ];
                    const inputBEEF = existingToken.beef;
                    const { signableTransaction } = await this.wallet.createAction({
                        description: tokenUpdateDescription,
                        inputBEEF: inputBEEF.toBinary(),
                        inputs,
                        outputs: [
                            {
                                satoshis: tokenAmount ?? this.config.tokenAmount,
                                lockingScript: lockingScript.toHex(),
                                outputDescription: 'KVStore token'
                            }
                        ],
                        options: {
                            acceptDelayedBroadcast: this.config.acceptDelayedBroadcast,
                            noSend: this.config.overlayBroadcast,
                            randomizeOutputs: false
                        }
                    }, this.config.originator);
                    if (signableTransaction == null) {
                        throw new Error('Unable to create update transaction');
                    }
                    const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromAtomicBEEF(signableTransaction.tx);
                    const unlocker = pushdrop.unlock(this.config.protocolID, key, 'anyone');
                    const unlockingScript = await unlocker.sign(tx, 0);
                    const { tx: finalTx } = await this.wallet.signAction({
                        reference: signableTransaction.reference,
                        spends: {
                            0: {
                                unlockingScript: unlockingScript.toHex()
                            }
                        },
                        options: {
                            acceptDelayedBroadcast: this.config.acceptDelayedBroadcast,
                            noSend: this.config.overlayBroadcast
                        }
                    }, this.config.originator);
                    if (finalTx == null) {
                        throw new Error('Unable to finalize update transaction');
                    }
                    const transaction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromAtomicBEEF(finalTx);
                    await this.submitToOverlay(transaction);
                    return `${transaction.id('hex')}.0`;
                } else {
                    // Create new token
                    const { tx } = await this.wallet.createAction({
                        description: tokenSetDescription,
                        outputs: [
                            {
                                satoshis: tokenAmount ?? this.config.tokenAmount,
                                lockingScript: lockingScript.toHex(),
                                outputDescription: 'KVStore token'
                            }
                        ],
                        options: {
                            acceptDelayedBroadcast: this.config.acceptDelayedBroadcast,
                            noSend: this.config.overlayBroadcast,
                            randomizeOutputs: false
                        }
                    }, this.config.originator);
                    if (tx == null) {
                        throw new Error('Failed to create transaction');
                    }
                    const transaction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromAtomicBEEF(tx);
                    await this.submitToOverlay(transaction);
                    return `${transaction.id('hex')}.0`;
                }
            }, this.topicBroadcaster);
            return outpoint;
        } finally{
            if (lockQueue.length > 0) {
                this.finishOperationOnKey(key, lockQueue);
            }
        }
    }
    /**
     * Removes the key-value pair associated with the given key from the overlay service.
     *
     * @param {string} key - The key to remove.
     * @param {CreateActionOutput[] | undefined} [outputs=undefined] - Additional outputs to include in the removal transaction.
     * @param {KVStoreRemoveOptions} [options=undefined] - Optional parameters for the removal operation.
     * @returns {Promise<HexString>} A promise that resolves to the txid of the removal transaction if successful.
     * @throws {Error} If the key is invalid.
     * @throws {Error} If the key does not exist in the store.
     * @throws {Error} If the overlay service is unreachable or the transaction fails.
     * @throws {Error} If there are existing tokens that cannot be unlocked.
     */ async remove(key, outputs, options = {}) {
        if (typeof key !== 'string' || key.length === 0) {
            throw new Error('Key must be a non-empty string.');
        }
        const controller = await this.getIdentityKey();
        const lockQueue = await this.queueOperationOnKey(key);
        const protocolID = options.protocolID ?? this.config.protocolID;
        const tokenRemovalDescription = options.tokenRemovalDescription != null && options.tokenRemovalDescription !== '' ? options.tokenRemovalDescription : `Remove KVStore value for ${key}`;
        try {
            const pushdrop = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"](this.wallet, this.config.originator);
            // Remove token with double-spend retry
            const txid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$overlay$2d$tools$2f$withDoubleSpendRetry$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withDoubleSpendRetry"])(async ()=>{
                // Re-query overlay on each attempt to get fresh token state
                const existingEntries = await this.queryOverlay({
                    key,
                    controller
                }, {
                    includeToken: true
                });
                if (existingEntries.length === 0 || existingEntries[0].token == null) {
                    throw new Error('The item did not exist, no item was deleted.');
                }
                const existingToken = existingEntries[0].token;
                const inputs = [
                    {
                        outpoint: `${existingToken.txid}.${existingToken.outputIndex}`,
                        unlockingScriptLength: 74,
                        inputDescription: 'KVStore token to remove'
                    }
                ];
                const { signableTransaction } = await this.wallet.createAction({
                    description: tokenRemovalDescription,
                    inputBEEF: existingToken.beef.toBinary(),
                    inputs,
                    outputs,
                    options: {
                        acceptDelayedBroadcast: this.config.acceptDelayedBroadcast,
                        randomizeOutputs: false,
                        noSend: this.config.overlayBroadcast
                    }
                }, this.config.originator);
                if (signableTransaction == null) {
                    throw new Error('Unable to create removal transaction');
                }
                const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromAtomicBEEF(signableTransaction.tx);
                const unlocker = pushdrop.unlock(protocolID ?? this.config.protocolID, key, 'anyone');
                const unlockingScript = await unlocker.sign(tx, 0);
                const { tx: finalTx } = await this.wallet.signAction({
                    reference: signableTransaction.reference,
                    spends: {
                        0: {
                            unlockingScript: unlockingScript.toHex()
                        }
                    },
                    options: {
                        acceptDelayedBroadcast: this.config.acceptDelayedBroadcast,
                        noSend: this.config.overlayBroadcast
                    }
                }, this.config.originator);
                if (finalTx == null) {
                    throw new Error('Unable to finalize removal transaction');
                }
                const transaction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromAtomicBEEF(finalTx);
                await this.submitToOverlay(transaction);
                return transaction.id('hex');
            }, this.topicBroadcaster);
            return txid;
        } finally{
            if (lockQueue.length > 0) {
                this.finishOperationOnKey(key, lockQueue);
            }
        }
    }
    /**
     * Queues an operation on a specific key to ensure atomic updates.
     * Prevents concurrent operations on the same key from interfering with each other.
     *
     * @param {string} key - The key to queue an operation for.
     * @returns {Promise<Array<(value: void | PromiseLike<void>) => void>>} The lock queue for cleanup.
     * @private
     */ async queueOperationOnKey(key) {
        // Check if a lock exists for this key and wait for it to resolve
        let lockQueue = this.keyLocks.get(key);
        if (lockQueue == null) {
            lockQueue = [];
            this.keyLocks.set(key, lockQueue);
        }
        let resolveNewLock = ()=>{};
        const newLock = new Promise((resolve)=>{
            resolveNewLock = resolve;
            if (lockQueue != null) {
                lockQueue.push(resolve);
            }
        });
        // If we are the only request, resolve the lock immediately, queue remains at 1 item until request ends.
        if (lockQueue.length === 1) {
            resolveNewLock();
        }
        await newLock;
        return lockQueue;
    }
    /**
     * Finishes an operation on a key and resolves the next waiting operation.
     *
     * @param {string} key - The key to finish the operation for.
     * @param {Array<(value: void | PromiseLike<void>) => void>} lockQueue - The lock queue from queueOperationOnKey.
     * @private
     */ finishOperationOnKey(key, lockQueue) {
        lockQueue.shift(); // Remove the current lock from the queue
        if (lockQueue.length > 0) {
            // If there are more locks waiting, resolve the next one
            lockQueue[0]();
        } else {
            // Clean up empty queue to prevent memory leak
            this.keyLocks.delete(key);
        }
    }
    /**
     * Helper function to fetch and cache user identity key
     *
     * @returns {Promise<PubKeyHex>} The identity key of the current user
     * @private
     */ async getIdentityKey() {
        if (this.cachedIdentityKey == null) {
            this.cachedIdentityKey = (await this.wallet.getPublicKey({
                identityKey: true
            }, this.config.originator)).publicKey;
        }
        return this.cachedIdentityKey;
    }
    /**
     * Queries the overlay service for KV entries.
     *
     * @param {KVStoreQuery} query - Query parameters sent to overlay
     * @param {KVStoreGetOptions} options - Configuration options for the query
     * @returns {Promise<KVStoreEntry[]>} Array of matching KV entries
     * @private
     */ async queryOverlay(query, options = {}) {
        const answer = await this.lookupResolver.query({
            service: options.serviceName ?? this.config.serviceName,
            query
        });
        if (answer.type !== 'output-list' || answer.outputs.length === 0) {
            return [];
        }
        const entries = [];
        for (const result of answer.outputs){
            try {
                const tx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Transaction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fromBEEF(result.beef);
                const output = tx.outputs[result.outputIndex];
                const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$script$2f$templates$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushDrop"].decode(output.lockingScript);
                // Support backwards compatibility: old format without tags, new format with tags
                const expectedFieldCount = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"]).length;
                const hasTagsField = decoded.fields.length === expectedFieldCount;
                const isOldFormat = decoded.fields.length === expectedFieldCount - 1;
                if (!isOldFormat && !hasTagsField) {
                    continue;
                }
                // Verify signature
                const anyoneWallet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$wallet$2f$ProtoWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProtoWallet"]('anyone');
                const signature = decoded.fields.pop();
                try {
                    await anyoneWallet.verifySignature({
                        data: decoded.fields.reduce((a, e)=>[
                                ...a,
                                ...e
                            ], []),
                        signature,
                        counterparty: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](decoded.fields[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"].controller]),
                        protocolID: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](decoded.fields[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"].protocolID])),
                        keyID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](decoded.fields[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"].key])
                    });
                } catch (error) {
                    continue;
                }
                // Extract tags if present (backwards compatible)
                let tags;
                if (hasTagsField && decoded.fields[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"].tags] != null) {
                    try {
                        tags = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](decoded.fields[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"].tags]));
                    } catch (e) {
                        // If tags parsing fails, continue without tags
                        tags = undefined;
                    }
                }
                const entry = {
                    key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](decoded.fields[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"].key]),
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](decoded.fields[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"].value]),
                    controller: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"](decoded.fields[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"].controller]),
                    protocolID: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$primitives$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toUTF8"](decoded.fields[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["kvProtocol"].protocolID])),
                    tags
                };
                if (options.includeToken === true) {
                    entry.token = {
                        txid: tx.id('hex'),
                        outputIndex: result.outputIndex,
                        beef: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$transaction$2f$Beef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Beef"].fromBinary(result.beef),
                        satoshis: output.satoshis ?? 1
                    };
                }
                if (options.history === true) {
                    entry.history = await this.historian.buildHistory(tx, {
                        key: entry.key,
                        protocolID: entry.protocolID
                    });
                }
                entries.push(entry);
            } catch (error) {
                continue;
            }
        }
        return entries;
    }
    /**
     * Submits a transaction to an overlay service using TopicBroadcaster.
     * Broadcasts the transaction to the configured topics for network propagation.
     *
     * @param {Transaction} transaction - The transaction to broadcast.
     * @returns {Promise<BroadcastResponse | BroadcastFailure>} The broadcast result.
     * @throws {Error} If the broadcast fails or the network is unreachable.
     * @private
     */ async submitToOverlay(transaction) {
        return await this.topicBroadcaster.broadcast(transaction);
    }
}
const __TURBOPACK__default__export__ = GlobalKVStore;
 //# sourceMappingURL=GlobalKVStore.js.map
}),
"[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/kvstore/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$LocalKVStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/kvstore/LocalKVStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$bsv$2b$sdk$40$1$2e$9$2e$31$2f$node_modules$2f40$bsv$2f$sdk$2f$dist$2f$esm$2f$src$2f$kvstore$2f$GlobalKVStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@bsv+sdk@1.9.31/node_modules/@bsv/sdk/dist/esm/src/kvstore/GlobalKVStore.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
];

//# sourceMappingURL=ef5fd_%40bsv_sdk_dist_esm_src_bf3c0cf8._.js.map