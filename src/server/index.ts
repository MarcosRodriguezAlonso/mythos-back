import express from "express";
import "dotenv/config";
import chalk from "chalk";

export const app = express();

const port = process.env.PORT ?? 8080;

app.listen(port, () => {
  console.log(`Listening on ${chalk.blue(`http://localhost:${port}`)}`);
});
