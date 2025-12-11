import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { GRAPHQL_SETTING, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [MyFunction] = useMutation(GRAPHQL_SETTING);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const router = useRouter();

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
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
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`);
  };

  //* 수정
  const onClickUpdate = async () => {
    const myVariables = {};
    myVariables.number = Number(router.query.number);
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
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
  };
  return (
    <div>
      <div>$$$$$$$$$ container $$$$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
        data={props.data}
      />
      <div>$$$$$$$$$ container $$$$$$$$$$</div>
    </div>
  );
}
