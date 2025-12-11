import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

const GRAPHQL_SETTING = gql`
  mutation {
    createBoard(writer: "jiwoo", title: "hi", contents: "hi") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [MyFunction] = useMutation(GRAPHQL_SETTING);
  const onClickSubmit = async () => {
    const result = await MyFunction();
    console.log(result);
  };
  return <button onClick={onClickSubmit}>GRAPHQL-API Request</button>;
}
