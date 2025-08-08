import { config as dotEnvConfig } from "dotenv";
import path from "path";

dotEnvConfig({ path: path.join(process.cwd(), ".env") });

const config = {
  PORT: process.env.PORT || 5000,
  ORIGIN: process.env.ORIGIN || "http://localhost:5000",
  NODE_ENV: (process.env.NODE_ENV || "development") as
    | "development"
    | "production",
};

export default config;
