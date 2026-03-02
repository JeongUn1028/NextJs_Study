import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
} from "@/src/commons/types/generated/types";
import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard {
    fetchBoard {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

export default function OptimisticUIPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">>(FETCH_BOARD, {
    variables: { boardId: "642d9c8e1b1a0c001c5f2b9e" },
  });
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickLikeUp = (): void => {
    //TODO : 좋아요 수 1 증가시키는 API 요청 보내기
    void likeBoard({
      variables: { boardId: "642d9c8e1b1a0c001c5f2b9e" },
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }): void => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "642d9c8e1b1a0c001c5f2b9e" },
          data: {
            fetchBoard: {
              _id: "642d9c8e1b1a0c001c5f2b9e",
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
    //
  };

  return (
    <div>
      <div>좋아요: {data?.fetchBoard?.likeCount}</div>
      <button onClick={onClickLikeUp}>좋아요</button>
    </div>
  );
}
