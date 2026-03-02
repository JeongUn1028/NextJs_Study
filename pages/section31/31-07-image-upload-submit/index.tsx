import { gql, useMutation } from "@apollo/client";
// import { useMutation } from "@apollo/client/react";
import { wrapEventAsync } from "@/src/commons/libraries/asyncFunc";
import { checkValidationFile } from "@/src/commons/libraries/validationFile";
import { useState, type ChangeEvent } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const SUBMIT_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [file, setFile] = useState<File>();

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createBoard] = useMutation(SUBMIT_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    if (!file) return;
    //* 1. 이미지 업로드 하고 URL 받아오기
    const resultFile = await uploadFile({ variables: { file } });
    console.log(resultFile.data?.uploadFile.url);
    const imageUrl = resultFile.data?.uploadFile.url ?? "";
    //* 2. 나머지 데이터와 함께 게시물 등록하기
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용이에요@@@",
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event?.target.files?.[0]; //* <input type="file" multiple={true} /> multiple 속성으로 여러개 선택 가능
    console.log(file);

    //* 파일이 없으면 중단
    if (!file) return;

    //* Image Validation, isValid가 true면 업로드, false면 중단
    if (!checkValidationFile(file)) return;

    const result = await uploadFile({ variables: { file } });
    console.log(result.data?.uploadFile);
    setImageUrl(result.data?.uploadFile.url ?? "");

    //* 임시 이미지 URL 생성 (내 브라우저에서만 접근 가능)
    // const result = URL.createObjectURL(file);
    // console.log(result);

    //* 임시 이미지 URL 생성 (다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event): void => {
      console.log(event.target?.result); //* 게시판에서 event.target 은 태그만을 가르키지 않음
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target.result);
        setFile(file);
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
      <img src={imageUrl} />
      <button onClick={wrapEventAsync(onClickSubmit)}>게시물 등록하기</button>
    </div>
  );
}
