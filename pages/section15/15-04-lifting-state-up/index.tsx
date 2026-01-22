import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifing-state-up/child1";
import Child2 from "../../../src/components/units/15-lifing-state-up/child2";

// ! 두 자식 컴포넌트 간 상태 공유 - 상태 끔맡기 모델
export default function CounterLetDocumentPage() {
  const [count, setCount] = useState(0);
  // ! 단계 1 단계 2 단계를 두 지원하는 기능
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
