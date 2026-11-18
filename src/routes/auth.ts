import express, { Request, Response} from 'express';
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';

const dataUser_db = path.join(__dirname, '..', '..', 'databases', 'dataUser.db');
const db = new DatabaseSync(dataUser_db);
const route = express.Router();

route.use(express.json());
route.post('/', (req: Request, res: Response) => {
  const { username, password} = req.body;
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
    })
    return;
  }
 });

export default route;