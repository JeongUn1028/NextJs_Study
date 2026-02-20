import { FormEvent } from "react";

const wrapAsync =
  (asyncFunction: () => Promise<void>): (() => void) =>
  (): void => {
    void asyncFunction();
  };

const wrapFormAsync =
  (
    asyncFunction: () => Promise<void>
  ): ((event: FormEvent<HTMLFormElement>) => void) =>
  (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    void asyncFunction();
  };
export { wrapAsync, wrapFormAsync };
