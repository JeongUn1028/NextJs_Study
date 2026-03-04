import { useState } from "react";

export default function UnitTestPage(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  const onClickCountUp = (): void => {
    setCount((prev: number): number => prev + 1);
  };
  return (
    <>
      <div>유닛 테스트 페이지2</div>
      <div role="count">{count}</div>
      <button onClick={onClickCountUp} role="count-button">
        카운트 올리기
      </button>
    </>
  );
}
