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
  const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" });

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: { ...inputs },
    });
    console.log(result);
  };
  return (
    <>
      writer: <input type="text" name="writer" onChange={onChangeInputs} />
      title: <input type="text" name="title" onChange={onChangeInputs} />
      contents: <input type="text" name="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GRAPHQL-API Request</button>
    </>
  );
}
