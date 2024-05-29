import request from "supertest";
import { app } from "../../../app.js";

describe("Given a not existing endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with statusCode 404 and the message: 'Not found'", async () => {
      const response = await request(app)
        .get("/not-existing-endpoint")
        .expect(404);

      const body = response.body as { error: string };
      const expectedeMessage = "Not found";
      const expectedStatusCode = 404;

      expect(body.error).toBe(expectedeMessage);
      expect(response.statusCode).toBe(expectedStatusCode);
    });
  });
});
