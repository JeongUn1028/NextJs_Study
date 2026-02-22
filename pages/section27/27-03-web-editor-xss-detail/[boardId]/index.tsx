import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import Dompurify from "dompurify";
import { useRouter } from "next/router";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  return (
    <div>
      <div>Writer: {data?.fetchBoard?.writer}</div>
      <div>title: {data?.fetchBoard?.title}</div>
      <div>contents: {data?.fetchBoard?.contents}</div>
      <div
        dangerouslySetInnerHTML={{
          __html:
            typeof window !== "undefined"
              ? Dompurify.sanitize(data?.fetchBoard?.contents || "")
              : "",
        }}
      ></div>
    </div>
  );
}
