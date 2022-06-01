import { namespace, key } from "@modules/access/constants";
import { IAccessProvider } from "@shared/providers/access-provider/iaccess-provider";
import { inject, injectable } from "tsyringe";

@injectable()
class ShowTotalOfAccessUseCase {
  constructor(
    @inject("AccessProvider")
    private accessProvider: IAccessProvider
  ) {}

  async execute(): Promise<number> {
    const totalOfAccess = await this.accessProvider.showTotalOfAccess(
      namespace,
      key
    );

    return totalOfAccess;
  }
}

export { ShowTotalOfAccessUseCase };
