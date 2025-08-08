import chalk from "chalk";
import http from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const server = http.createServer(app);

async function main() {
  try {
    const db = await mongoose.connect(config.DB_URI);
    console.log(
      `DB is successfully connected to ${chalk.green.bold(db.connection.host)}`
    );

    server.listen(config?.PORT, () => {
      console.log(
        chalk.bgBlackBright(`Server is listening on PORT ${config?.PORT}`)
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
