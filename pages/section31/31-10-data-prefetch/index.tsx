import { gql } from "@apollo/client";
import { useApolloClient, useQuery } from "@apollo/client/react";
import { debounce, type DebouncedFunc } from "lodash";
import Link from "next/link";
import { useMemo } from "react";
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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const client = useApolloClient();

  //* 마우스 올렸을 때, 해당 게시글 데이터 미리 받아오기
  const preFetchBoard = useMemo<DebouncedFunc<(boardId: string) => void>>(
    (): DebouncedFunc<(boardId: string) => void> =>
      debounce((boardId: string): void => {
        void client.query({
          query: FETCH_BOARD,
          variables: { boardId },
        });
      }, 500),
    [client]
  );

  return (
    <ul>
      {data?.fetchBoards?.map(
        (el): JSX.Element => (
          <li key={el._id}>
            <Link href={`/section31/31-10-data-prefetch-moved/${el._id}`}>
              <div onMouseEnter={(): void => void preFetchBoard(el._id)}>
                <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
                <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
