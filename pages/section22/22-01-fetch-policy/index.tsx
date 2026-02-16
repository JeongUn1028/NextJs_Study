import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState } from "react";
import FetchPolicyExample from "../../../src/components/units/22-fetch-policy";
import { useRouter } from 'next/router';

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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  //* 1. 새로운 컴포넌트 등장시에도 글로벌 스테이트 값이 유지되는지
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClickIsOpen = (): void => {
    setIsOpen((prev: boolean): boolean => !prev);
  };

  //* 2. 새로운 페이지 이동시에도 글로벌 스테이트 값이 유지되는지?
  const router = useRouter()
  const onClickMove = (): void => {
    void router.push("/section22/22-01-fetch-policy-moved")
  }
  return (
    <div>
      <button onClick={onClickIsOpen}>1. Show New Component</button>
      {isOpen && <FetchPolicyExample />}
      <button onClick={onClickMove}>
        2. Move Page
      </button>
    </div>
  );
}
