"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoggerServer = (req, _res, next) => {
    console.log("—— LOG REQUEST & RESPONSE ——");
    console.log("METHOD:", req.method);
    console.log("URL PATH:", req.url);
    console.log("BODY:", req.body || {});
    next();
};
exports.default = LoggerServer;
//# sourceMappingURL=loggerServer.js.map