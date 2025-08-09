import { NextFunction, Request, Response } from "express";
import status from "http-status";
import config from "../../config";
import handleCastError from "../../error/handleCastError";
import { TErrorSources } from "../types/error";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  let statusCode: number = status.INTERNAL_SERVER_ERROR;
  let message: string = err?.message || "Internal server Error!";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Internal server Error!",
    },
  ];

  if (err?.name === "CastError") {
    statusCode = handleCastError(err)?.statusCode;
    message = handleCastError(err)?.message;
    errorSources = handleCastError(err)?.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
  });
};

export default globalErrorHandler;
