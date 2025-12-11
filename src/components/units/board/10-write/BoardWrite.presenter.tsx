import { MyButton, MyInput } from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWriteTypes";

export default function BoardWriteUI({
  onChangeTitle,
  onChangeContents,
  onChangeWriter,
  onClickSubmit,
  onClickUpdate,
  isEdit,
  data,
}: IBoardWriteUIProps) {
  return (
    <>
      <div>@@@@@@@@@@@@ Presenter @@@@@@@@@@@</div>
      writer:
      <MyInput
        type="text"
        onChange={onChangeWriter}
        defaultValue={data?.fetchBoard.writer}
      />
      title:{" "}
      <input
        type="text"
        onChange={onChangeTitle}
        defaultValue={data?.fetchBoard.title}
      />
      contents:{" "}
      <input
        type="text"
        onChange={onChangeContents}
        defaultValue={data?.fetchBoard.contents}
      />
      <MyButton onClick={isEdit ? onClickUpdate : onClickSubmit}>
        {isEdit ? "수정" : "작성"} 하기
      </MyButton>
      <div>@@@@@@@@@@@@ Presenter @@@@@@@@@@@</div>
    </>
  );
}
