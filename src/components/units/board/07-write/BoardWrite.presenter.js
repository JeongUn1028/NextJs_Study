import { MyButton, MyInput } from "./BoardWrite.styles";

export default function BoardWriteUI({
  onChangeTitle,
  onChangeContents,
  onChangeWriter,
  onClickSubmit,
  isActive,
}) {
  return (
    <>
      <div>@@@@@@@@@@@@ Presenter @@@@@@@@@@@</div>
      writer: <MyInput type="text" onChange={onChangeWriter} />
      title: <input type="text" onChange={onChangeTitle} />
      contents: <input type="text" onChange={onChangeContents} />
      <MyButton onClick={onClickSubmit} isActive={isActive}>
        GRAPHQL-API Request
      </MyButton>
      <div>@@@@@@@@@@@@ Presenter @@@@@@@@@@@</div>
    </>
  );
}
