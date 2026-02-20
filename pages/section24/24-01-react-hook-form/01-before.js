import { useState } from "react";

export default function GraphqlMutationPage() {
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

  return (
    <>
      writer: <input type="text" onChange={onChangeWriter} />
      title: <input type="text" onChange={onChangeTitle} />
      contents: <input type="text" onChange={onChangeContents} />
    </>
  );
}
