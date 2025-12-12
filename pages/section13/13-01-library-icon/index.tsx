import { PlusCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(PlusCircleOutlined)`
  color: red;
  font-size: 50px;
`;

export default function LibraryIconPage() {
  const onClickDelete = (event: MouseEvent<HTMLSpanElement>): void => {
    console.log(event.currentTarget.id);
  };

  return (
    <>
      <MyIcon onClick={onClickDelete} id="hi" />
    </>
  );
}
