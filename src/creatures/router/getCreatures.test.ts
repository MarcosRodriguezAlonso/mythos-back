import { MongoMemoryServer } from "mongodb-memory-server";
import connectDataBase from "../../database/index.js";
import mongoose from "mongoose";
import request from "supertest";
import app from "../../server/app.js";
import type Creature from "../types";
import CreatureModel from "../model/Creature.js";

describe("Given a GET /creatures endpoint", () => {
  describe("When it receives a request", () => {
    let mongoMemoryServer: MongoMemoryServer;

    beforeAll(async () => {
      mongoMemoryServer = await MongoMemoryServer.create();
      const serverUri = mongoMemoryServer.getUri();
      await connectDataBase(serverUri);
    });

    afterAll(async () => {
      await mongoose.disconnect();
      await mongoMemoryServer.stop();
    });

    test("Then it should respond with a status code 200 and an array of creatures", async () => {
      const ktulu = {
        name: "Ktulu",
        alternativeText: "Criatura espacial",
        augury: true,
        author: "Mockraft",
        description: "Pulpo espacial con muchos tentáculos",
        imageUrl: "https//:www.ktulu.com",
        lineage: "monstruito",
      };
      await CreatureModel.create(ktulu);

      const path = "/creatures";
      const expectedStatusCode = 200;
      const response = await request(app).get(path).expect(expectedStatusCode);
      const body = response.body as { creatures: Creature[] };

      expect(body.creatures).toEqual(
        expect.arrayContaining([expect.objectContaining({ name: "Ktulu" })]),
      );
    });
  });
});
