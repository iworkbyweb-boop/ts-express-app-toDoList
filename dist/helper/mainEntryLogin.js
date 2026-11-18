"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicPath = exports.entryLogin = void 0;
const node_path_1 = __importDefault(require("node:path"));
const promises_1 = require("node:fs/promises");
const publicPath = node_path_1.default.join(__dirname, '..', '..', 'public');
exports.publicPath = publicPath;
const pathEntryLogin = node_path_1.default.join(__dirname, '..', '..', 'public', 'index.html');
const entryLogin = async () => {
    try {
        const data = await (0, promises_1.readFile)(pathEntryLogin, 'utf-8');
        return data;
    }
    catch (err) {
        return {
            message: 'File Tidak Ditemukan!',
            status: 404,
            success: false
        };
    }
};
exports.entryLogin = entryLogin;
//# sourceMappingURL=mainEntryLogin.js.map