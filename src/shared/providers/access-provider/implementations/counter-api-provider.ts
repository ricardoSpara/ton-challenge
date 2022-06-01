import { getClientApi } from "@shared/helpers";
import { AxiosInstance } from "axios";
import { IAccessProvider } from "../iaccess-provider";

class CounterApiProvider implements IAccessProvider {
  accessService: AxiosInstance;

  constructor() {
    this.accessService = getClientApi(String(process.env.ACCESS_SERVICE_URL));
  }

  public async increaseAccess(namespace: string, key: string): Promise<void> {
    try {
      await this.accessService.get(`/hit/${namespace}/${key}`);
    } catch (err) {
      console.error("Error when increasing the number of access", err.message);
    }
  }

  public async showTotalOfAccess(
    namespace: string,
    key: string
  ): Promise<number | undefined> {
    try {
      const totalOfAccess: number = await this.accessService.get(
        `/get/${namespace}/${key}`
      );

      return totalOfAccess;
    } catch (err) {
      console.error("Error when getting the total of access", err.message);
      return undefined;
    }
  }
}

export { CounterApiProvider };
