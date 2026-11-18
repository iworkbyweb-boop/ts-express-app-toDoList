import { Request, Response, NextFunction } from "express"
const CORSMiddleWare = (req: Request, res:Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(200).send();
    return;
  }
  next();
}

export default CORSMiddleWare;