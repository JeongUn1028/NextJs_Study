import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

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
  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {
        // variables === $
        writer: "huni",
        title: "hi",
        contents: "bye",
      },
    });
    console.log(result);
  };
  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API Request</button>
    </>
  );
}
