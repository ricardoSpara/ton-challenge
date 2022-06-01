import { IAccessProvider } from "../iaccess-provider";

type ITotalKey = {
  [key: string]: number;
};

type ITotalNamespace = {
  [key: string]: ITotalKey;
};

class FakeAccessProvider implements IAccessProvider {
  public totalOfAccess = {} as ITotalNamespace;

  public async increaseAccess(namespace: string, key: string): Promise<void> {
    if (!this.totalOfAccess[namespace]) {
      this.totalOfAccess[namespace] = {};
    }

    if (!this.totalOfAccess[namespace][key]) {
      this.totalOfAccess[namespace][key] = 1;
    } else {
      this.totalOfAccess[namespace][key] += 1;
    }
  }

  public async showTotalOfAccess(
    namespace: string,
    key: string
  ): Promise<number> {
    if (!this.totalOfAccess[namespace] || !this.totalOfAccess[namespace][key]) {
      return 0;
    }

    return this.totalOfAccess[namespace][key];
  }
}

export { FakeAccessProvider };
