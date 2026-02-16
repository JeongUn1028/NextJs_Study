import ChildPage from "./02-child";
import type { ReactElement } from "react";

export default function ParentPage(): ReactElement {
  return (
    <>
      <h1>부모 컴포넌트</h1>
      <ChildPage count={10} />
    </>
  );
}
