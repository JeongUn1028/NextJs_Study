import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useRouter } from "next/router";
import { useState } from "react";

const GRAPHQL_SETTING = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();
  const [MyFunction] = useMutation(GRAPHQL_SETTING);
  const [form, setForm] = useState({ writer: "", title: "", contents: "" });

  //* 게시글 작성 함수
  const onChangeForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  //* 게시글 제출 함수
  const onClickSubmit = async () => {
    try {
      //* Try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 무시하고, catch 실행
      const result = await MyFunction({
        variables: form,
      });
      console.log(result.data);
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>게시글 작성</div>
      Writer: <input name="writer" type="text" onChange={onChangeForm} />
      Title: <input name="title" type="text" onChange={onChangeForm} />
      Contents: <input name="contents" type="text" onChange={onChangeForm} />
      <button onClick={onClickSubmit}>작성</button>
    </>
  );
}
