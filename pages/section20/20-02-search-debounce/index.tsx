import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage(): JSX.Element {
  //* Keyword
  const [keyword, setKeyword] = useState<string>("");

  //* useQuery
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    //* 검색에서 refetch 할 때, search 검색어가 refetch에 이미 저장되어 있음, 추가로 search를 넣어줄 필요 없음
    void refetch({ page: Number(event.currentTarget.id) });
  };

  //* debouncing: 사용자가 입력을 멈추고 일정 시간이 지난 후에 특정 기능을 실행시키는 기법
  //* throttling: 사용자가 일정 시간 내에 여러 번 이벤트를 발생시켜도, 그 중에서 가장 처음  한 번만 실행시키는 기법

  const getDebounced = _.debounce((value: string): void => {
    void refetch({ page: 1, search: value });
    setKeyword(value);
  }, 500);
  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    getDebounced(event.currentTarget.value);
  };

  // const onClickSearch = (): void => {
  //   void refetch({ page: 1, search });
  // };

  return (
    <div>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards?.map(
        (el): JSX.Element => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
            <span style={{ margin: "10px" }}>
              글 제목:{" "}
              {el.title
                .replaceAll(keyword, `**${keyword}**`)
                .split("**")
                .map(
                  (el, index): JSX.Element => (
                    <span
                      key={index}
                      style={{ color: el === keyword ? "red" : "black" }}
                    >
                      {el}
                    </span>
                  )
                )}
            </span>
          </div>
        )
      )}
      {new Array(10).fill(1).map(
        (_, index): JSX.Element => (
          <span key={index} id={String(index + 1)} onClick={onClickPage}>
            {index}
          </span>
        )
      )}
    </div>
  );
}
