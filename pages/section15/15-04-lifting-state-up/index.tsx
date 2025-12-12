import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifing-state-up/child1";
import Child2 from "../../../src/components/units/15-lifing-state-up/child2";

export default function CounterLetDocumentPage() {
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <Child1 count={count} onClickCountUp={onClickCountUp} />
      <div>=====================</div>
      <Child2 count={count} setCount={setCount} />
    </div>
  );
}
