import { CreateUserController } from "@modules/accounts/use-cases/create-user/create-user-controller";
import { ListUserController } from "@modules/accounts/use-cases/list-user/list-user-controller";
import { Router } from "express";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUserController.handle);

export { usersRoutes };
