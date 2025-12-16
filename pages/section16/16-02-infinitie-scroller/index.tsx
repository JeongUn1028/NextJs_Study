import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import InfiniteScroller from "react-infinite-scroller";

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
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: (data?.fetchBoards.length ?? 10) / 10 + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards)
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div style={{ height: "400px", overflow: "auto" }}>
      <InfiniteScroller
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
            <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
          </div>
        ))}
      </InfiniteScroller>
    </div>
  );
}
