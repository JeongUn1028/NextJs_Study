import { useState } from "react";

export default function CounterLetDocumentPage(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  function onClickCountUp(): void {
    setCount((prev: number): number => prev + 1);

    setCount(function (prev: number): number {
      //* logic 추가 가능
      return prev + 1;
    });
  }

  return (
    <div>
      <div id="count">{count}</div>
      <button onClick={onClickCountUp}>+</button>
    </div>
  );
}
