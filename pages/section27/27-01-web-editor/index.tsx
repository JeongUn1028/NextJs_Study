import { wrapFormAsync } from "@/src/commons/libraries/asyncFunc";
import dynamic from "next/dynamic";
// import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  //* ReactQuill의 onChange 는 event 객체x value
  const onChangeContents = (value: string): void => {
    console.log(value);
  };

  // useEffect((): void => {
  //   async function importFunc(): Promise<void> {
  //     const { Modal } = await import("antd"); // code splitting
  //     Modal.info({ content: "화면에 필요한 라이브러리를 불러왔습니다." });
  //   }
  //   importFunc();
  // }, []);

  //* onClickSubmit 이벤트는 form 태그의 onSubmit 이벤트로 변경
  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd"); // code splitting
    Modal.success({ content: "게시글이 등록되었습니다." });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      <div>웹 에디터 연습 페이지입니다.</div> <br />
      작성자: <input type="text" /> <br />
      비밀번호: <input type="password" /> <br />
      제목: <input type="text" /> <br />
      내용: <ReactQuill onChange={onChangeContents} /> <br />
      <button>등록하기</button>
    </form>
  );
}
