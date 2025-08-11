import { NextFunction, Request, Response } from "express";
import { ZodAny } from "zod";

const validateRequest = (schema: ZodAny) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      await schema.parseAsync({
        body: req.body,
        cookies: req.cookies,
      });
    } catch (error) {
      next(error);
    }
  };
};

export default validateRequest;
