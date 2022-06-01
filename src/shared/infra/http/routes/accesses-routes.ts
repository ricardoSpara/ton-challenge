import { IncreseAccessController } from "@modules/access/use-cases/increase-access/increase-access-controller";
import { ShowTotalOfAccessController } from "@modules/access/use-cases/show-total-of-access/show-total-of-access-controller";
import { Router } from "express";

const accessesRoutes = Router();

const increseAccessController = new IncreseAccessController();
const showTotalOfAccessController = new ShowTotalOfAccessController();

accessesRoutes.post("/", increseAccessController.handle);
accessesRoutes.get("/", showTotalOfAccessController.handle);

export { accessesRoutes };
