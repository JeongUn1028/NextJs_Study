import wrapAsync from "@/src/commons/libraries/asyncFunc";
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


export default function GraphqlMutationPage(): JSX.Element {
  const [MyFunction] = useMutation(GRAPHQL_SETTING);

  const onClickSubmit = async (): Promise<void> => {
    const result = await MyFunction();
    console.log(result);
  };

  return <button onClick={wrapAsync(onClickSubmit)}>GRAPHQL-API Request</button>;
}
