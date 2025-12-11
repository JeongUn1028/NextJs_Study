import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>글 번호: {el.number}</span>
          <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
        </div>
      ))}
      {/* <div>Moved Page 1!</div>
      <div>Writer: {data?.fetchBoards.writer}</div>
      <div>title: {data?.fetchBoards.title}</div>
      <div>contents: {data?.fetchBoards.contents}</div> */}
    </div>
  );
}
