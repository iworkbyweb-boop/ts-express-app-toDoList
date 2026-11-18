import { DatabaseSync } from "node:sqlite";
import path from "node:path";

const pathDataUser_db = path.join(__dirname, '..', '..', 'databases', 'dataUser.db');
const db = new DatabaseSync(pathDataUser_db);
function createTable() {
  db.exec(`
CREATE TABLE IF NOT EXISTS users(
id INTEGER PRIMARY KEY AUTOINCREMENT,
username TEXT,
password TEXT
);
`)
}

console.log('Database Sudah Siap!');
export default createTable;