import type { Response, Request, NextFunction } from "express";
import ServerError from "./ServerError.js";

const notFoundError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const error = new ServerError("Not found", 404);

  next(error);
};

export default notFoundError;
