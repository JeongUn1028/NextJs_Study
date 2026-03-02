import { FormEvent } from "react";

//* async 함수를 일반 함수로 감싸주는 함수들 */
const wrapAsync =
  (asyncFunction: () => Promise<void>): (() => void) =>
  (): void => {
    void asyncFunction();
  };

//* Input태그에서 onChange 이벤트 핸들러로 사용할 때, async 함수를 일반 함수로 감싸주는 함수 */
const wrapEventAsync =
  <E>(asyncFunction: (event: E) => Promise<void>): ((event: E) => void) =>
  (event: E): void => {
    void asyncFunction(event);
  };

//* form 태그에서 onSubmit 이벤트 핸들러로 사용할 때, async 함수를 일반 함수로 감싸주는 함수 */
const wrapFormAsync =
  (
    asyncFunction: () => Promise<void>
  ): ((event: FormEvent<HTMLFormElement>) => void) =>
  (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    void asyncFunction();
  };
export { wrapAsync, wrapEventAsync, wrapFormAsync };
