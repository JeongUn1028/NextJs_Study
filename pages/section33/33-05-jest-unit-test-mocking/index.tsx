import { wrapEventAsync } from "@/src/commons/libraries/asyncFunc";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "@/src/commons/types/generated/types";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useRouter } from "next/router";
import { type ChangeEvent, useState } from "react";

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

export default function StaticRoutingMovedPage(): JSX.Element {
  const router = useRouter();
  const [writer, setWriter] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  //* 게시글 등록
  const onClickSubmit = async (): Promise<void> => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            title,
            contents,
            password: "1234",
          },
        },
      });
      console.log(result.data?.createBoard);
      const boardId = result.data?.createBoard._id;
      router.push(`/section23/23-02-board/${boardId}`);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
  return (
    <>
      writer:
      <input role="writer-input" type="text" onChange={onChangeWriter} />
      title: <input role="title-input" type="text" onChange={onChangeTitle} />
      contents:
      <input role="contents-input" type="text" onChange={onChangeContents} />
      <button role="submit-button" onClick={wrapEventAsync(onClickSubmit)}>
        GRAPHQL-API Request
      </button>
    </>
  );
}
