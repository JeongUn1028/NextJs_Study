const wrapAsync =
  (asyncFunction: () => Promise<void>): (() => void) =>
  (): void => {
    void asyncFunction();
  };
export default wrapAsync;
