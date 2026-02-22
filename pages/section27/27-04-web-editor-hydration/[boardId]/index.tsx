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
      <div style={{ color: "red" }}>Writer: {data?.fetchBoard?.writer}</div>
      <div style={{ color: "blue" }}>title: {data?.fetchBoard?.title}</div>
      <div style={{ color: "green" }}>
        contents: {data?.fetchBoard?.contents}
      </div>
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard?.contents),
          }}
        ></div>
      ) : (
        <div style={{ color: "green" }}></div>
      )}
      <div style={{ color: "purple" }}>aaa</div>
    </div>
  );
}
