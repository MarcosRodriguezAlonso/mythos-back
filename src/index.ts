import "dotenv/config.js";
import connectDataBase from "./database/index.js";
import { startServer } from "./server/app.js";
import chalk from "chalk";

const dataBaseUrl = process.env.MONGODB_URL!;

try {
  await connectDataBase(dataBaseUrl);
} catch (error) {
  console.log(chalk.red("An error ocurred"));
  process.exit();
}

startServer();
