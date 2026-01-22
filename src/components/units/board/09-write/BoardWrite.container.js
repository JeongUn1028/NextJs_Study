import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { GRAPHQL_SETTING, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [MyFunction] = useMutation(GRAPHQL_SETTING);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const router = useRouter();

  // * 작성자명 변경 핸들러
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  // * 제목 변경 핸들러
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  // * 내용 변경 핸들러
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  // ! 게시글 등록 함수 - GraphQL Mutation 실행
  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {
        // variables === $
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
  };

  // ! 게시글 수정 함수 - 변경된 데이터만 GraphQL Mutation 실행
  const onClickUpdate = async () => {
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: writer,
        contents: contents,
        title: title,
      },
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
  };
  return (
    <div>
      <div>$$$$$$$$$ container $$$$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
      />
      <div>$$$$$$$$$ container $$$$$$$$$$</div>
    </div>
  );
}
