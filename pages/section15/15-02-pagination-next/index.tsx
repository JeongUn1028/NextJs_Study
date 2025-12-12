import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";

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
  const [startPage, setStartPage] = useState<number>(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  console.log(data?.fetchBoards);
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  //* 이전
  const onClickPrev = () => {
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };
  //* 다음
  const onClickNext = () => {
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };
  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
          <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
        </div>
      ))}
      <span onClick={onClickPrev}>이전</span>
      {new Array(10).fill(1).map((_, index) => (
        <span id={String(index + startPage)} onClick={onClickPage}>
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNext}>다음</span>
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <span id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))} */}
    </div>
  );
}
