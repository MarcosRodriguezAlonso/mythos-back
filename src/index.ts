import chalk from "chalk";
import connectDataBase from "./database/index.js";
import { app } from "./server/app.js";
import "dotenv/config.js";

const port = process.env.PORT ?? 8080;
const dataBaseUrl = process.env.MONGODB_URL!;

await connectDataBase(dataBaseUrl);

app.listen(port, () => {
  console.log(`Escuchando en ${chalk.blue(`http://localhost:${port}`)}`);
});
