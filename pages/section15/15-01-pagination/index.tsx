import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data?.fetchBoards);
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };
  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
          <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <span id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))} */}
    </div>
  );
}
