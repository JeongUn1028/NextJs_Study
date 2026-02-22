import { wrapFormAsync } from "@/src/commons/libraries/asyncFunc";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
// import { useEffect } from "react";
import "react-quill/dist/quill.snow.css";

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  //TODO
  const { register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  //FUNC ReactQuill의 onChange 는 event 객체x value
  const onChangeContents = (value: string): void => {
    console.log(value);

    //* React Hook Form의 setValue 함수를 사용하여 ReactQuill의 값이 폼 상태에 반영되도록 설정
    if (value === "<p><br></p>") {
      setValue("contents", "");
    } else {
      setValue("contents", value);
    }

    //?*React Hook Form의 onChange 이벤트는 trigger 함수를 사용하여 수동으로 유효성 검사를 트리거해야 합니다.
    trigger("contents");
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
      작성자: <input type="text" {...register("writer")} /> <br />
      비밀번호: <input type="password" {...register("password")} /> <br />
      제목: <input type="text" {...register("title")} /> <br />
      내용: <ReactQuill onChange={onChangeContents} /> <br />
      <button>등록하기</button>
    </form>
  );
}
