import { app } from "./app.js";
import "dotenv/config";
import connectDataBase from "../database/index.js";
import chalk from "chalk";

const port = process.env.PORT ?? 8080;
const dataBaseUrl = process.env.MONGODB_URL!;

await connectDataBase(dataBaseUrl);

app.listen(port, () => {
  console.log(`Escuchando en ${chalk.blue(`http://localhost:${port}`)}`);
});
