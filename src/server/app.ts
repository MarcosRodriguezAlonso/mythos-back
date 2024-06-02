import express from "express";
import morgan from "morgan";
import notFoundError from "./middlewares/errors/notFoundError.js";
import generalError from "./middlewares/errors/generalError.js";
import creaturesRouter from "../creatures/creaturesRouter.js";
import chalk from "chalk";

const app = express();

export const startServer = () => {
  const port = process.env.PORT ?? 6060;

  app.listen(port, () => {
    console.log(`Escuchando en ${chalk.blue(`http://localhost:${port}`)}`);
  });
};

app.use(morgan("dev"));
app.use(express.json());

app.use("/creatures", creaturesRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
