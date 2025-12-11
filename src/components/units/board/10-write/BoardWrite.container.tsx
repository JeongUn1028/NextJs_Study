import { useMutation } from "@apollo/client/react";
import { ChangeEvent, MouseEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { GRAPHQL_SETTING, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardWriteTypes";

export default function BoardWrite(props: IBoardWriteProps) {
  const [MyFunction] = useMutation(GRAPHQL_SETTING);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const router = useRouter();

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  //* 등록
  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {
        // variables === $
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(
      `/section10/10-02-typescript-boards/${result.data.createBoard.number}`
    );
  };

  //* 수정
  const onClickUpdate = async () => {
    const myVariables: IMyVariables = { number: Number(router.query.number) };

    if (writer) {
      myVariables.writer = writer;
    }
    if (title) {
      myVariables.title = title;
    }
    if (contents) {
      myVariables.contents = contents;
    }
    const result = await updateBoard({
      variables: myVariables,
    });
    console.log(result);
    router.push(
      `/section10/10-02-typescript-boards/${result.data.updateBoard.number}`
    );
  };
  return (
    <div>
      <div>$$$$$$$$$ container $$$$$$$$$$</div>
      <BoardWriteUI
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        isEdit={props.isEdit}
        data={props.data}
      />
      <div>$$$$$$$$$ container $$$$$$$$$$</div>
    </div>
  );
}
