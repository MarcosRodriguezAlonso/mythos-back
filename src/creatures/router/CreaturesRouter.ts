import express from "express";
import MongooseCreaturesRepository from "../repository/MongooseRepository.js";
import CreatureModel from "../model/Creature.js";
import CreaturesController from "../controller/CreatureController.js";

const creaturesRouter = express.Router();

const creaturesRepository = new MongooseCreaturesRepository(CreatureModel);
const creaturesController = new CreaturesController(creaturesRepository);

creaturesRouter.get("/", creaturesController.getAll);

export default creaturesRouter;
