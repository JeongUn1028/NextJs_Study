import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useState } from "react";

const GRAPHQL_SETTING = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
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
    <>
      writer: <input type="text" onChange={onChangeWriter} />
      title: <input type="text" onChange={onChangeTitle} />
      contents: <input type="text" onChange={onChangeContents} />
      <button onClick={onClickSubmit}>GRAPHQL-API Request</button>
    </>
  );
}
