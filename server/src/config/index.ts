import { config as dotEnvConfig } from "dotenv";
import path from "path";

dotEnvConfig({ path: path.join(process.cwd(), ".env") });

const config = {
  PORT: process.env.PORT || 5000,
  ORIGIN: process.env.ORIGIN || "http://localhost:5000",
  NODE_ENV: (process.env.NODE_ENV || "development") as
    | "development"
    | "production",

  DB_URI:
    ((process.env.NODE_ENV === "development"
      ? process.env.DB_URI_LOCAL
      : process.env.DB_URI_PROD) as string) ||
    ("mongodb://127.0.0.1:27017/kidsplay-lms" as string),

  CLOUD_NAME: process.env.CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  REDIS_URL: process.env.REDIS_URL,
};

export default config;
