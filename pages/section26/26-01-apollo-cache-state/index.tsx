import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

//* GraphQL 게시글 조회 쿼리
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

//* GraphQL 게시글 삭제 쿼리
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId) {
      number
      message
    }
  }
`;

//* GraphQL 게시글 등록 쿼리
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

interface IPrev {
  __ref: string;
}

export default function StaticRoutingMovedPage(): JSX.Element {
  //* 게시글 조회
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  //* 게시글 삭제
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickDelete =
    (boardId: string): (() => void) =>
    (): void => {
      deleteBoard({
        variables: {
          boardId,
        },
        update(cache, { data }): void {
          const deletedId = data?.deleteBoard.number;
          cache.modify({
            fields: {
              fetchBoards: (
                prev: IPrev[],
                {
                  readField,
                }: { readField: (fieldName: string, obj: IPrev) => string }
              ): IPrev[] => {
                return prev.filter(
                  (el): boolean => deletedId !== readField("_id", el)
                );
              },
            },
          });
        },
      });
    };

  //* 게시글 등록
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const onClickSubmit = (): void => {
    void createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용입니다@@@",
        },
      },
      update(cache, { data }): void {
        cache.modify({
          fields: {
            fetchBoards: (prev): IPrev[] => {
              return [data?.createBoard, ...prev];
            },
          },
        });
      },
    });
  };
  return (
    <div>
      {data?.fetchBoards?.map(
        (el): JSX.Element => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>글 번호: {el._id}</span>
            <span style={{ margin: "10px" }}>글 제목: {el.title}</span>
            <button id={el._id} onClick={onClickDelete(el._id)}>
              삭제하기
            </button>
          </div>
        )
      )}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
