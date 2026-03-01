import { memo } from "react";

interface IProps {
  count: number;
}

function MemoizationChildPage({ count }: IProps): JSX.Element {
  console.log("자식이 렌더링 됩니다.");
  return (
    <>
      <div> =================== </div>
      <h1>자식 컴포넌트</h1>
      <div>카운트(state): {count}</div>
      <div> =================== </div>
    </>
  );
}
export default memo<IProps>(MemoizationChildPage);
