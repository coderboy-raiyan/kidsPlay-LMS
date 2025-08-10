import { NextFunction, Request, Response } from "express";
import status from "http-status";
import config from "../../config";
import handleCastError from "../../error/handleCastError";
import handleMongooseValidationError from "../../error/handleValidationError";
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
    const transformError = handleCastError(err);
    statusCode = transformError?.statusCode;
    message = transformError?.message;
    errorSources = transformError?.errorSources;
  } else if (err?.name === "ValidationError") {
    const transformError = handleMongooseValidationError(err);
    statusCode = transformError?.statusCode;
    message = transformError?.message;
    errorSources = transformError?.errorSources;
  } else if (err?.code === 11000) {
    statusCode = status.BAD_REQUEST;
    message = `Duplicate  ${Object.keys(err?.keyValues)} entered`;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
  });
};

export default globalErrorHandler;
