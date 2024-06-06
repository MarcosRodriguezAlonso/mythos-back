import morgan from "morgan";
import express from "express";
import chalk from "chalk";
import notFoundError from "./middlewares/errors/notFoundError.js";
import generalError from "./middlewares/errors/generalError.js";
import creaturesRouter from "../creatures/creaturesRouter.js";

const app = express();

export const startServer = () => {
  const port = process.env.PORT ?? 6060;

  app.listen(port, () => {
    console.log("Listening on " + chalk.blue("http://localhost:" + port));
  });
};

app.use(morgan("dev"));
app.use(express.json());

app.use("/creatures", creaturesRouter);

app.use(notFoundError);
app.use(generalError);

export default app;
