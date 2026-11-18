import express , {type Application, Request, Response} from 'express';
import {entryLogin, publicPath } from './helper/mainEntryLogin';
import CORSMiddleWare from './helper/CORSMiddleWare';
import createTable from './helper/database';
import AuthRoute from './routes/auth';
import LoggerServer from './helper/loggerServer';
const app: Application = express();
const port: number = 3000;
const hostName: string = "127.0.0.1"; 
createTable();

app.use(LoggerServer);
app.use('/auth', AuthRoute);
app.use(CORSMiddleWare);
app.use(express.static(publicPath));
app.get('/', async (_req: Request, res: Response) => {
  res.status(200).send(await entryLogin());
})

app.listen(port, hostName, (): void => {
  console.log(`Server Berjalan Di http://${hostName}:${port}`);
})
