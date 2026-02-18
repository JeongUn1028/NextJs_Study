import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
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
  //* 페이지네이션 구현하기
  const onClickPage = (page: number): (() => void) => (): void => {
    void refetch({ page });
  };
  return (
    <div>
      {data?.fetchBoards?.map((el): JSX.Element => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
          <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index): JSX.Element => (
        <span key={String(index + 1)} id={String(index + 1)} onClick={onClickPage(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
