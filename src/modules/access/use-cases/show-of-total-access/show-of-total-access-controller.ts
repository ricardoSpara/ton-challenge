import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowOfTotalAccessUseCase } from "./show-of-total-access-use-case";

class ShowOfTotalAccessController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showOfTotalAccessUseCase = container.resolve(
      ShowOfTotalAccessUseCase
    );

    const totalOfAccess = await showOfTotalAccessUseCase.execute();

    return response.status(200).json({ totalOfAccess });
  }
}

export { ShowOfTotalAccessController };
