import { config as dotEnvConfig } from "dotenv";
import path from "path";

dotEnvConfig({ path: path.join(process.cwd(), ".env") });

const config = {
  PORT: process.env.PORT,
};

export default config;
