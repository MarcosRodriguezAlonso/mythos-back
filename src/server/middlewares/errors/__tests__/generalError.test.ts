import generalError from "../generalError";
import type ServerError from "../ServerError/ServerError";
import { type Request, type Response } from "express";

describe("Given the generalError midleware", () => {
  describe("When it receives an error without a message and without statusCode", () => {
    test("Then it should call the response's status method with an statusCode 500 and the json method with an error:'Server Error'", () => {
      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();

      const error = new Error();
      const expectedStatusCode = 500;
      const expectedErrorMessage = "Server Error";

      generalError(error as ServerError, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith({ error: expectedErrorMessage });
    });
  });
});
