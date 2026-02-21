import { useState } from "react";

export default function CounterLetDocumentPage(): JSX.Element {
  const result = useState<number>(0);
  function onClickCountUp(): void {
    result[1](result[0] + 1);
  }

  function onClickCountDown(): void {
    result[1](result[0] - 1);
  }

  return (
    <div>
      <div>{result[0]}</div>
      <button onClick={onClickCountUp}>+</button>
      <button onClick={onClickCountDown}>-</button>
    </div>
  );
}
