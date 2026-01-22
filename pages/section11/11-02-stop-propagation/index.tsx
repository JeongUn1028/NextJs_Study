import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import Checkbox from "./checkbox";

// ! GraphQL 게시글 조회 쿼리
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
// ! 이벤트 전파 중단(stopPropagation) 데모 페이지
export default function StaticRoutingMovedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );

  // * 완전한 값을 간단힐 쫼니 alert로 변경
  const onClickAlert = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.dataset.writer);
  };

  // * 타이틀 영역 크리 이벤트
  const qqq = () => {
    alert("클릭 타이틈");
  };

  // * 단계 1 깊이의 크리 이벤트
  const qqq1 = () => {
    alert("1 click");
  };
  // * 단계 4 단계를 초늨하는 중단 이벤트
  const qqq4 = () => {
    alert("4 click");
  };
  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <div
          key={el?.number}
          onClick={qqq1}
          data-writer={el.writer}
          style={{ border: "1px solid black" }}
        >
          <Checkbox />
          <span style={{ margin: "10px" }} onClick={qqq4}>
            글 번호: {el.number}
          </span>
          <span style={{ margin: "10px" }}>글 작성자: {el.writer}</span>
          <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
        </div>
      ))}
    </div>
  );
}
