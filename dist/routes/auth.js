"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_sqlite_1 = require("node:sqlite");
const node_path_1 = __importDefault(require("node:path"));
const dataUser_db = node_path_1.default.join(__dirname, '..', '..', 'databases', 'dataUser.db');
const db = new node_sqlite_1.DatabaseSync(dataUser_db);
const route = express_1.default.Router();
route.use(express_1.default.json());
route.post('/', (req, res) => {
    const { username, password } = req.body;
    const findUsers = db.prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    const result = findUsers.get(username, password);
    if (result) {
        res.status(200).json({
            message: 'Login Berhasil, Mengalihkan...',
            status: 200,
            success: true
        });
        return;
    }
    if (!result) {
        res.status(400).json({
            message: 'Gagal Login',
            status: 400,
            success: false
        });
        return;
    }
});
exports.default = route;
//# sourceMappingURL=auth.js.map