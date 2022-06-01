import { IAccessProvider } from "@shared/providers/access-provider/iaccess-provider";
import { inject, injectable } from "tsyringe";

@injectable()
class IncreaseAccessUseCase {
  namespace: string = "ton";
  key: string = "challenge-ricardo";

  constructor(
    @inject("AccessProvider")
    private accessProvider: IAccessProvider
  ) {}

  async execute(): Promise<void> {
    console.log("execute", this.accessProvider);

    await this.accessProvider.increaseAccess(this.namespace, this.key);
  }
}

export { IncreaseAccessUseCase };
