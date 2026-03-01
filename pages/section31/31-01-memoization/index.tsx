import { useCallback, useMemo, useState } from "react";

export default function MemoizationPage(): JSX.Element {
  console.log("컴포넌트가 렌더링 됩니다.");
  let letCount = 0;
  const [stateCount, setStateCount] = useState<number>(0);

  //* 1. useMemo를 사용하여 변수 기억
  const aaa = useMemo((): number => Math.random(), []);
  console.log("aaa:", aaa);

  // * 2. useCallback을 사용하여 함수 기억
  const onClickLetCount = useCallback((): void => {
    console.log("Before letCount:", letCount);
    letCount += 1;
    console.log("After letCount:", letCount);
  }, []);

  //* 3. useCallback을 사용할때 주의사항
  const onClickStateCount = useCallback((): void => {
    console.log("Before stateCount:", stateCount);
    setStateCount((prev): number => {
      const newCount = prev + 1;
      console.log("After stateCount:", newCount);
      return newCount;
    });
  }, [stateCount]);

  //* 4. useMemo로 useCallback 만들기
  // const onClickStateCount2 = useMemo((): (() => void) => {
  //   return (): void => {
  //     console.log("Before stateCount:", stateCount);
  //     setStateCount((prev): number => {
  //       const newCount = prev + 1;
  //       console.log("After stateCount:", newCount);
  //       return newCount;
  //     });
  //   };
  // }, [stateCount]);
  return (
    <div>
      <div>카운트(let): {letCount}</div>
      <button onClick={onClickLetCount}>카운트(let) +1</button>
      <div>카운트(state): {stateCount}</div>
      <button onClick={onClickStateCount}>카운트(state) +1</button>
    </div>
  );
}
