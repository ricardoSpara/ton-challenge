interface IAccessProvider {
  increaseAccess(namespace: string, key: string): Promise<void>;
  showTotalOfAccess(
    namespace: string,
    key: string
  ): Promise<number>;
}

export { IAccessProvider };
