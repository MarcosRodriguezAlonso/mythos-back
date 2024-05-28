import express from "express";
import morgan from "morgan";
import "dotenv/config";
import chalk from "chalk";
import connectDataBase from "../database/index.js";
import notFoundError from "./middlewares/errors/notFoundError.js";

export const app = express();

const port = process.env.PORT ?? 8080;
const dataBaseUrl = process.env.MONGODB_URL!;

await connectDataBase(dataBaseUrl);

app.listen(port, () => {
  console.log(`Escuchando en ${chalk.blue(`http://localhost:${port}`)}`);
});

app.use(morgan("dev"));
app.use(notFoundError);
