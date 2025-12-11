import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const router = useRouter();
  const number = Number(router.query.number);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: number,
    },
  });
  console.log(data);
  const onClickMove = () => {
    router.push(`/section09/09-03-boards/${number}/edit`);
  };
  return (
    <div>
      <div>Moved Page {number}!</div>
      <div>Writer: {data?.fetchBoard?.writer}</div>
      <div>title: {data?.fetchBoard?.title}</div>
      <div>contents: {data?.fetchBoard?.contents}</div>
      <button onClick={onClickMove}>수정</button>
    </div>
  );
}
