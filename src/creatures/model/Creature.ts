import mongoose, { Schema } from "mongoose";
import type CreatureStructure from "../types";

const CreatureSchema = new Schema<CreatureStructure>({
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

const Creature = mongoose.model("Creature", CreatureSchema, "Creatures");

export default Creature;
