import ServerError from "../../server/middlewares/errors/ServerError/ServerError.js";
import type CreaturesRepository from "../repository/types";
import type CreaturesControllerStructure from "./types";
import { type Request, type Response, type NextFunction } from "express";

class CreaturesController implements CreaturesControllerStructure {
  constructor(public repository: CreaturesRepository) {}

  getAll = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const creatures = await this.repository.getAll();
      res.status(200).json({ creatures });
    } catch (error) {
      const serverError = new ServerError((error as Error).message, 500);
      next(serverError);
    }
  };
}

export default CreaturesController;
