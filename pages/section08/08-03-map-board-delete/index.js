import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      number
      message
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  console.log(data?.fetchBoards);
  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>글 번호: {el.number}</span>
          <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </>
  );
}
