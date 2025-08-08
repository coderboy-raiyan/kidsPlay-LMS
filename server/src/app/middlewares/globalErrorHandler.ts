import { NextFunction, Request, Response } from "express";
import status from "http-status";
import config from "../../config";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  let statusCode = status.INTERNAL_SERVER_ERROR;
  let message = err?.message || "Something went wrong";
  let errorMessages = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  return res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
  });
};

export default globalErrorHandler;
