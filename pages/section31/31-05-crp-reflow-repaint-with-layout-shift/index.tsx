import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

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
export default function StaticRoutingMovedPage(): JSX.Element {
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
      {(data?.fetchBoards ?? new Array(10).fill(1)).map(
        (el): JSX.Element => (
          <div key={el._id} style={{ height: "30" }}>
            <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
            <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
          </div>
        )
      )}
      {new Array(10).fill(1).map(
        (_, index): JSX.Element => (
          <span id={String(index + 1)} onClick={onClickPage} key={index}>
            {index + 1}
          </span>
        )
      )}
    </div>
  );
}
