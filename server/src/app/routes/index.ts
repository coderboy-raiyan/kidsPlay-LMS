import { Router } from "express";
import UserRoutes from "../modules/user/user.route";

const router = Router();

const routes = [
  {
    path: "/user",
    route: UserRoutes,
  },
];

routes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
