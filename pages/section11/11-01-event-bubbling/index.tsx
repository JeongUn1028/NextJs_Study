import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { writer } from "repl";

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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.dataset.writer);
  };

  const qqq = () => {
    alert("클릭 타이틀");
  };
  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <div
          key={el?.number}
          onClick={onClickAlert}
          data-writer={el.writer}
          style={{ border: "1px solid black" }}
        >
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>글 번호: {el.number}</span>
          <span style={{ margin: "10px" }}>글 작성자: {el.writer}</span>
          <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
        </div>
      ))}
    </div>
  );
}
