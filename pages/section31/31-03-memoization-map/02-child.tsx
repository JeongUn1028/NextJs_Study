import { memo } from "react";

interface IMemoizationWithMapChildPageProps {
  key: number;
  el: string;
}

function MemoizationWthMapChildPage({
  key,
  el,
}: IMemoizationWithMapChildPageProps): JSX.Element {
  return (
    <>
      <span key={key}>{el}</span>
    </>
  );
}

export default memo(MemoizationWthMapChildPage);
