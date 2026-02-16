import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

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
export default function FetchPolicyExample(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    { fetchPolicy: "network-only" }
  );
  console.log(data?.fetchBoards);

  return (
    <div>
      {data?.fetchBoards?.map(
        (el): JSX.Element => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
            <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
          </div>
        )
      )}
    </div>
  );
}
