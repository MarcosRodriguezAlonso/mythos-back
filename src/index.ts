import "dotenv/config.js";
import connectDataBase from "./database/index.js";
import { startServer } from "./server/app.js";

const dataBaseUrl = process.env.MONGODB_URL!;

await connectDataBase(dataBaseUrl);

startServer();
