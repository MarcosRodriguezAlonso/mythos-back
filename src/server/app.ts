import express from "express";
import morgan from "morgan";
import notFoundError from "./middlewares/errors/notFoundError.js";
import generalError from "./middlewares/errors/generalError.js";
import creaturesRouter from "../creatures/router/CreaturesRouter.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/creatures", creaturesRouter);

app.use(notFoundError);
app.use(generalError);
