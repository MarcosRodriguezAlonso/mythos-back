import "dotenv/config.js";
import chalk from "chalk";
import connectDataBase from "./database/index.js";
import { app } from "./server/app.js";

const port = process.env.PORT ?? 6060;
const dataBaseUrl = process.env.MONGODB_URL!;

await connectDataBase(dataBaseUrl);

app.listen(port, () => {
  console.log(`Escuchando en ${chalk.blue(`http://localhost:${port}`)}`);
});
