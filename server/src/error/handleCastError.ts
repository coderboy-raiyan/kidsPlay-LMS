import status from "http-status";
import mongoose from "mongoose";
import { TGenericErrorMessage } from "../app/types/error";

const handleCastError = (
  err: mongoose.Error.CastError
): TGenericErrorMessage => {
  const errorSources = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];

  return {
    message: "Invalid!",
    statusCode: status.INTERNAL_SERVER_ERROR,
    errorSources,
  };
};

export default handleCastError;
