import { type Request, type Response, type NextFunction } from "express";

interface CreaturesControllerStructure {
  getAll(req: Request, res: Response, next: NextFunction): void;
}

export default CreaturesControllerStructure;
