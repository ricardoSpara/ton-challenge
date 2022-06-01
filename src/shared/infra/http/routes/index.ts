import { Router } from "express";
import { accessesRoutes } from "./accesses-routes";
import { usersRoutes } from "./users-routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/accesses", accessesRoutes);

export { router };
