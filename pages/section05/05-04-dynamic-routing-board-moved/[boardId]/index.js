import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const router = useRouter();
  const boardId = Number(router.query.boardId);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: boardId,
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
