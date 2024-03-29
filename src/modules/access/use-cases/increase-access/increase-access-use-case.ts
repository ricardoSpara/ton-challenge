import { namespace, key } from "@modules/access/constants";
import { IAccessProvider } from "@shared/providers/access-provider/iaccess-provider";
import { inject, injectable } from "tsyringe";

@injectable()
class IncreaseAccessUseCase {
  constructor(
    @inject("AccessProvider")
    private accessProvider: IAccessProvider
  ) {}

  async execute(): Promise<void> {
    await this.accessProvider.increaseAccess(namespace, key);
  }
}

export { IncreaseAccessUseCase };
