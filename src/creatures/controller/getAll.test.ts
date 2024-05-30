import type CreaturesRepository from "../repository/types";
import type Creature from "../types";
import CreaturesController from "./CreatureController";
import { type Response, type Request, type NextFunction } from "express";

describe("Given the CreatureController getAll method", () => {
  describe("When it receives a response", () => {
    const creatures: Creature[] = [
      {
        _id: "",
        alternativeText: "",
        augury: true,
        author: "",
        description: "",
        imageUrl: "",
        lineage: "",
        name: "",
      },
    ];
    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const creaturesRepository: CreaturesRepository = {
      getAll: async () => creatures,
    };

    const next = jest.fn();
    const creatureController = new CreaturesController(creaturesRepository);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should  call its status method with 200", async () => {
      await creatureController.getAll(
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call its json method with a list of creatures", async () => {
      await creatureController.getAll(
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({ creatures });
    });
  });
});
