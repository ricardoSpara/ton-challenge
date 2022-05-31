import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUserByIdUseCase } from "./list-user-by-id-use-case";

class ListUserByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId: user_id } = request.params;

    const listUserByIdUseCase = container.resolve(ListUserByIdUseCase);

    const users = await listUserByIdUseCase.execute({ user_id });

    return response.status(200).json(users);
  }
}

export { ListUserByIdController };
