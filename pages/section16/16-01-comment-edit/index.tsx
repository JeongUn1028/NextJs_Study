import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState } from "react";

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
  const [myIndex, setMyIndex] = useState(-1);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );

  //* Edit
  const onClickEdit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setMyIndex(Number(event.currentTarget.id));
  };
  return (
    <div>
      {data?.fetchBoards?.map((el, index) => (
        <div key={el._id}>
          {index !== myIndex ? (
            <>
              <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
              <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
              <button id={String(index)} onClick={onClickEdit}>
                edit
              </button>
            </>
          ) : (
            <>
              <input type="text" key={el._id} />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
