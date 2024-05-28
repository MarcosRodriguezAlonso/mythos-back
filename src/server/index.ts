import express from "express";
import "dotenv/config";
import chalk from "chalk";
import connectDataBase from "../database/index.js";

export const app = express();

const port = process.env.PORT ?? 8080;
const dataBaseUrl = process.env.MONGODB_URL!;

app.listen(port, () => {
  console.log(`Escuchando en ${chalk.blue(`http://localhost:${port}`)}`);
});

await connectDataBase(dataBaseUrl);
