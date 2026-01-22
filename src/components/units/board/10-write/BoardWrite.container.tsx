import { useMutation } from "@apollo/client/react";
import { ChangeEvent, MouseEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { GRAPHQL_SETTING, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardWriteTypes";

export default function BoardWrite(props: IBoardWriteProps) {
  const [MyFunction] = useMutation(GRAPHQL_SETTING);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const router = useRouter();

  // * 작성자명 변경 핸들러
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  // * 제목 변경 핸들러
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  // * 내용 변경 핸들러
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
    router.push(
      `/section10/10-02-typescript-boards/${result.data.createBoard.number}`,
    );
  };

  // ! 게시글 수정 함수 - 변경된 데이터만 GraphQL Mutation 실행
  const onClickUpdate = async () => {
    const myVariables: IMyVariables = { number: Number(router.query.number) };

    if (writer) {
      myVariables.writer = writer;
    }
    if (title) {
      myVariables.title = title;
    }
    if (contents) {
      myVariables.contents = contents;
    }
    const result = await updateBoard({
      variables: myVariables,
    });
    console.log(result);
    router.push(
      `/section10/10-02-typescript-boards/${result.data.updateBoard.number}`,
    );
  };
  return (
    <div>
      <div>$$$$$$$$$ container $$$$$$$$$$</div>
      <BoardWriteUI
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        isEdit={props.isEdit}
        data={props.data}
      />
      <div>$$$$$$$$$ container $$$$$$$$$$</div>
    </div>
  );
}
