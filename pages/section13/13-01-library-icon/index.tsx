import { PlusCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(PlusCircleOutlined)`
  color: red;
  font-size: 50px;
`;

// ! Ant Design 아이콘 라이브러리 데모
export default function LibraryIconPage() {
  // * 아이콘 삭제 핸들러
  const onClickDelete = (event: MouseEvent<HTMLSpanElement>): void => {
    console.log(event.currentTarget.id);
  };

  return (
    <>
      <MyIcon onClick={onClickDelete} id="hi" />
    </>
  );
}
