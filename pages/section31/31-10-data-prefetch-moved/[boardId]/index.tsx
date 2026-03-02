import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
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
  console.log(router.query.boardId);
  const boardId = router.query.boardId || "";
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId,
    },
  });
  console.log(data);
  return (
    <div>
      <div>Moved Page {boardId}!</div>
      <div>Writer: {data?.fetchBoard?.writer}</div>
      <div>title: {data?.fetchBoard?.title}</div>
      <div>contents: {data?.fetchBoard?.contents}</div>
    </div>
  );
}
