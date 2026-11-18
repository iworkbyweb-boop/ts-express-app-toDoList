import { Request, Response, NextFunction } from "express"
const LoggerServer = (req: Request, _res: Response, next: NextFunction): void => {
  console.log("—— LOG REQUEST & RESPONSE ——");
  console.log("METHOD:", req.method);
  console.log("URL PATH:", req.url);
  console.log("BODY:", req.body || {});
  next();
}

export default LoggerServer;