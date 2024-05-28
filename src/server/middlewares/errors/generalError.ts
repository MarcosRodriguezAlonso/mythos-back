import { type Request, type Response, type NextFunction } from "express";
import type ServerError from "./ServerError.js";
import chalk from "chalk";

const generalError = (
  error: ServerError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const errorMessage = error.message || "Server Error";
  const statusCode = error.statusCode ?? 500;

  console.log(chalk.red(`${error.message}`));

  res.status(statusCode).json({ error: `${errorMessage}` });
};

export default generalError;
