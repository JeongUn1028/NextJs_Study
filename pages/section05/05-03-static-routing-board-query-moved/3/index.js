import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 99) {
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
      <div>Moved Page 3!</div>
      <div>Writer: {data?.fetchBoard.writer}</div>
      <div>title: {data?.fetchBoard.title}</div>
      <div>
        contents: {data ? data.fetchBoard.contents : <div>loading...</div>}
      </div>
    </div>
  );
}
