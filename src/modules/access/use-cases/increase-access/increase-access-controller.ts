import { Request, Response } from "express";
import { container } from "tsyringe";

import { IncreaseAccessUseCase } from "./increase-access-use-case";

class IncreseAcessController {
  async handle(request: Request, response: Response): Promise<Response> {
    const increaseAccessUseCase = container.resolve(IncreaseAccessUseCase);

    await increaseAccessUseCase.execute();

    return response.status(201).json();
  }
}

export { IncreseAcessController };
