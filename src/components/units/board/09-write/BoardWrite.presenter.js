import { MyButton, MyInput } from "./BoardWrite.styles";

export default function BoardWriteUI({
  onChangeTitle,
  onChangeContents,
  onChangeWriter,
  onClickSubmit,
  onClickUpdate,
  isEdit,
}) {
  return (
    <>
      <div>@@@@@@@@@@@@ Presenter @@@@@@@@@@@</div>
      writer: <MyInput type="text" onChange={onChangeWriter} />
      title: <input type="text" onChange={onChangeTitle} />
      contents: <input type="text" onChange={onChangeContents} />
      <MyButton onClick={isEdit ? onClickUpdate : onClickSubmit}>
        {isEdit ? "수정" : "작성"} 하기
      </MyButton>
      <div>@@@@@@@@@@@@ Presenter @@@@@@@@@@@</div>
    </>
  );
}
