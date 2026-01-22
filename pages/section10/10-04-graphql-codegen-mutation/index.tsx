import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";
// import { useState } from "react";

// ! GraphQL 게시글 작성 뮤테이션
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
  // const [MyFunction] = useMutation<결과타입, 인수타입>(GRAPHQL_SETTING);
  const [MyFunction] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(GRAPHQL_SETTING);
  // const [writer, setWriter] = useState<string>("");
  // ! GraphQL Mutation 실행 함수
  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {
        // variables === $
        writer: "huni",
        title: "hi",
        contents: "as",
      },
    });
    console.log(result.data?.createBoard?.message);
  };
  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API Request</button>
    </>
  );
}
