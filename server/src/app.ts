import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import config from "./config";
const app = express();

app.use(express.json());
app.use(cors({ origin: config.ORIGIN, credentials: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy!",
  });
});

// route not found
app.use(notFound);

// global Error Handler
app.use(globalErrorHandler);

export default app;
