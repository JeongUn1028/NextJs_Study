// import { gql } from "@apollo/client";
// import { useMutation } from "@apollo/client/react";
import { wrapEventAsync } from "@/src/commons/libraries/asyncFunc";
import { useRef, useState, type ChangeEvent } from "react";
// import { checkValidationFile } from "../../../src/commons/libraries/validationFile";
// import {
//   IMutation,
//   IMutationUploadFileArgs,
// } from "../../../src/commons/types/generated/types";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage(): JSX.Element {
  // const [uploadFile] = useMutation<
  //   Pick<IMutation, "uploadFile">,
  //   IMutationUploadFileArgs
  // >(UPLOAD_FILE);

  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event?.target.files?.[0]; //* <input type="file" multiple={true} /> multiple 속성으로 여러개 선택 가능
    console.log(file);

    //* 파일이 없으면 중단
    if (!file) return;

    //// Image Validation, isValid가 true면 업로드, false면 중단
    // if (!checkValidationFile(file)) return;

    // const result = await uploadFile({ variables: { file } });
    // console.log(result.data?.uploadFile);
    // setImageUrl(result.data?.uploadFile.url ?? "");

    //* 임시 이미지 URL 생성 (내 브라우저에서만 접근 가능)
    const result = URL.createObjectURL(file);
    console.log(result);

    //* 임시 이미지 URL 생성 (다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event): void => {
      console.log(event.target?.result); //* 게시판에서 event.target 은 태그만을 가르키지 않음
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target.result);
      }
    };
  };
  return (
    <div>
      <h1>이미지 업로드 연습하기</h1>
      <input
        type="file"
        onChange={wrapEventAsync(onChangeFile)}
        multiple={true}
        accept="image/jpeg,image/png"
      />
      <img src={"https://storage.googleapis.com/" + imageUrl} />

      <input
        style={{ display: "none" }}
        type="file"
        onChange={wrapEventAsync(onChangeFile)}
        ref={fileRef}
        accept="image/jpeg,image/png"
      />
    </div>
  );
}
