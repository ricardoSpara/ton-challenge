import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowTotalOfAccessUseCase } from "./show-total-of-access-use-case";

class ShowTotalOfAccessController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showTotalOfAccessUseCase = container.resolve(
      ShowTotalOfAccessUseCase
    );

    const totalOfAccess = await showTotalOfAccessUseCase.execute();

    return response.status(200).json({ totalOfAccess });
  }
}

export { ShowTotalOfAccessController };
