import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { GRAPHQL_SETTING } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [MyFunction] = useMutation(GRAPHQL_SETTING);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [isActive, setIsActive] = useState(false);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "" && title !== "" && contents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer !== "" && event.target.value !== "" && contents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
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
        isActive={isActive}
      />
      <div>$$$$$$$$$ container $$$$$$$$$$</div>
    </div>
  );
}
