import { CreateUserController } from "@modules/accounts/use-cases/create-user/create-user-controller";
import { ListUserController } from "@modules/accounts/use-cases/list-user/list-user-controller";
import { ListUserByIdController } from "@modules/accounts/use-cases/list-user-by-id/list-user-by-id-controller";
import { Router } from "express";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const listUserByIdController = new ListUserByIdController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUserController.handle);
usersRoutes.get("/:userId", listUserByIdController.handle);

export { usersRoutes };
