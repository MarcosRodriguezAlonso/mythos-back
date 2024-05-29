import type mongoose from "mongoose";
import type CreaturesRepository from "./types";
import type Creature from "../types";

class MongooseCreaturesRepository implements CreaturesRepository {
  constructor(public creatureModel: mongoose.Model<Creature>) {}

  async getAll(): Promise<Creature[]> {
    const creatures = await this.creatureModel.find().exec();
    return creatures;
  }
}

export default MongooseCreaturesRepository;
