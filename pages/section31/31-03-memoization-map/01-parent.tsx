import { useState } from "react";
import MemoizationWthMapChildPage from "./02-child";

export default function MemoizationWithMapParentPage(): JSX.Element {
  const [data, setData] = useState<string>(
    "철수는 오늘 점심을 맛있게 먹었습니다."
  );

  const onClickDataChange = (): void => {
    setData("영희는 오늘 점심을 맛있게 먹었습니다.");
  };

  return (
    <>
      {data.split(" ").map(
        //* memo시 key 또는 el 이 바뀌지 않는 값만 리렌더링 된다.
        (el, index): JSX.Element => (
          //* memo를 해도 key가 바뀌면 리렌더링 된다.
          <MemoizationWthMapChildPage key={index} el={el} />
        )
      )}
      <button onClick={onClickDataChange}>데이터 변경하기</button>
    </>
  );
}
