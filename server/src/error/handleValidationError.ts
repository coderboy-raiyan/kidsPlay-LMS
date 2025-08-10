import status from "http-status";
import mongoose from "mongoose";
import { TGenericErrorMessage } from "../app/types/error";

const handleMongooseValidationError = (
  err: mongoose.Error.ValidationError
): TGenericErrorMessage => {
  const errorSources = Object.values(err?.errors)?.map((val) => {
    return {
      path: val?.path,
      message: val?.message,
    };
  });

  return {
    statusCode: status.NOT_ACCEPTABLE,
    message: "Validation Error!",
    errorSources,
  };
};

export default handleMongooseValidationError;
