interface IAccessProvider {
  increaseAccess(namespace: string, key: string): Promise<void>;
  showTotalOfAccess(
    namespace: string,
    key: string
  ): Promise<number | undefined>;
}

export { IAccessProvider };
