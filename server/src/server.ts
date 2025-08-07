import http from "http";
import app from "./app";
import config from "./config";

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Listening on PORT ${config.PORT}`);
});
