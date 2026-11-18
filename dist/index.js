"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainEntryLogin_1 = require("./helper/mainEntryLogin");
const CORSMiddleWare_1 = __importDefault(require("./helper/CORSMiddleWare"));
const database_1 = __importDefault(require("./helper/database"));
const auth_1 = __importDefault(require("./routes/auth"));
const loggerServer_1 = __importDefault(require("./helper/loggerServer"));
const app = (0, express_1.default)();
const port = 3000;
const hostName = "127.0.0.1";
(0, database_1.default)();
app.use(loggerServer_1.default);
app.use('/auth', auth_1.default);
app.use(CORSMiddleWare_1.default);
app.use(express_1.default.static(mainEntryLogin_1.publicPath));
app.get('/', async (_req, res) => {
    res.status(200).send(await (0, mainEntryLogin_1.entryLogin)());
});
app.listen(port, hostName, () => {
    console.log(`Server Berjalan Di http://${hostName}:${port}`);
});
//# sourceMappingURL=index.js.map