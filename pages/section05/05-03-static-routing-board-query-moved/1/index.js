import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 101) {
      number
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARD);
  console.log(data);
  return (
    <div>
      <div>Moved Page 1!</div>
      <div>Writer: {data?.fetchBoard.writer}</div>
      <div>title: {data?.fetchBoard.title}</div>
      <div>contents: {data?.fetchBoard.contents}</div>
    </div>
  );
}
