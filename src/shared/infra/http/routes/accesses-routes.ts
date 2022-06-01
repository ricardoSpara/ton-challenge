import { IncreseAccessController } from "@modules/access/use-cases/increase-access/increase-access-controller";
import { ShowOfTotalAccessController } from "@modules/access/use-cases/show-of-total-access/show-of-total-access-controller";
import { Router } from "express";

const accessesRoutes = Router();

const increseAccessController = new IncreseAccessController();
const showOfTotalAccessController = new ShowOfTotalAccessController();

accessesRoutes.post("/", increseAccessController.handle);
accessesRoutes.get("/", showOfTotalAccessController.handle);

export { accessesRoutes };
