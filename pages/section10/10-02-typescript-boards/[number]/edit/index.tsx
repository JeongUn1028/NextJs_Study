import BoardWrite from "../../../../../src/components/units/board/10-write/BoardWrite.container";
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
export default function GraphqlMutationPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: number,
    },
  });
  return (
    <div>
      <div>########### Page #########</div>
      <BoardWrite isEdit={true} data={data} />
      <div>########### Page #########</div>
    </div>
  );
}
