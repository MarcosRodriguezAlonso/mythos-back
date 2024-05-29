import type Creature from "../types";

interface CreaturesRepository {
  getAll(): Promise<Creature[]>;
}

export default CreaturesRepository;
