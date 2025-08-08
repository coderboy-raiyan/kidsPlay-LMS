import http from "http";
import app from "./app";
import config from "./config";

const server = http.createServer(app);

async function bootstrap() {
  try {
    server.listen(config?.PORT, () => {
      console.log(`Server is listening on PORT ${config?.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
