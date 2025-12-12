import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import Board from "../../../src/components/units/15-lfting-pagenation/Board";
import Pagination from "../../../src/components/units/15-lfting-pagenation/Pagination";

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

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;
export default function StaticRoutingMovedPage() {
  //* getFetchBoardsQuery
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  //* getFetchBoardsCountQuery
  const { data: dataFetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS_COUNT);

  //* set lastPage
  const lastPage = Math.ceil(
    (dataFetchBoardsCount?.fetchBoardsCount ?? 10) / 10,
  );

  return (
    <div>
      <Board data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
