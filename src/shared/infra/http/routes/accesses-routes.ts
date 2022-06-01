import { IncreseAcessController } from "@modules/access/use-cases/increase-access/increase-access-controller";
import { Router } from "express";

const accessesRoutes = Router();

const increseAcessController = new IncreseAcessController();

accessesRoutes.post("/", increseAcessController.handle);

export { accessesRoutes };
