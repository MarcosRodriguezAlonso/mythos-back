import mongoose, { Schema } from "mongoose";
import type Creature from "../types";

const CreatureSchema = new Schema<Creature>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  lineage: {
    type: String,
    required: true,
  },
  augury: {
    type: Boolean,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
    unique: true,
  },
  alternativeText: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const CreatureModel = mongoose.model("Creature", CreatureSchema, "creatures");

export default CreatureModel;
