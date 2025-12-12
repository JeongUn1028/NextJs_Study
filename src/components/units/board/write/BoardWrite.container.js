/* eslint-disable no-undef */
import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { GRAPHQL_SETTING } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [MyFunction] = useMutation(GRAPHQL_SETTING);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

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
  };
  return (
    <div>
      <div>$$$$$$$$$ container $$$$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
      />
      <div>$$$$$$$$$ container $$$$$$$$$$</div>
    </div>
  );
}
