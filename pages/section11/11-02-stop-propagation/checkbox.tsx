import { MouseEvent } from "react";

export default function Checkbox() {
  const qqq2 = () => {
    alert("2 click");
  };
  const qqq3 = (event: MouseEvent<HTMLSpanElement>) => {
    // event.stopPropagation();
    alert("3 click");
  };
  return (
    <span onClick={qqq2}>
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}
