import { useState } from "react";

export default function CounterLetDocumentPage() {
  const [count, setCount] = useState(0);
  function onClickCountUp() {
    setCount((prev) => prev + 1);
  }

  function onClickCountDown() {
    setCount((prev) => prev - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>+</button>
      <button onClick={onClickCountDown}>-</button>
    </div>
  );
}
