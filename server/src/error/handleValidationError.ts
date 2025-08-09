import mongoose from "mongoose";

const handleMongooseValidationError = (err: mongoose.Error.ValidationError) => {
  const errorSources = Object.values(err?.errors)?.map((val) => {
    return {
      path: val?.path,
      message: val?.message,
    };
  });
};
