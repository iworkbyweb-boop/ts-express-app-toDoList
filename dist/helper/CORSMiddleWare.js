"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CORSMiddleWare = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        res.status(200).send();
        return;
    }
    next();
};
exports.default = CORSMiddleWare;
//# sourceMappingURL=CORSMiddleWare.js.map