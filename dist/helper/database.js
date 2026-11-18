"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_sqlite_1 = require("node:sqlite");
const node_path_1 = __importDefault(require("node:path"));
const pathDataUser_db = node_path_1.default.join(__dirname, '..', '..', 'databases', 'dataUser.db');
const db = new node_sqlite_1.DatabaseSync(pathDataUser_db);
function createTable() {
    db.exec(`
CREATE TABLE IF NOT EXISTS users(
id INTEGER PRIMARY KEY AUTOINCREMENT,
username TEXT,
password TEXT
);
`);
}
console.log('Database Sudah Siap!');
exports.default = createTable;
//# sourceMappingURL=database.js.map