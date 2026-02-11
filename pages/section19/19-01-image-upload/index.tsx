import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useRef, useState, type ChangeEvent } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; //* <input type="file" multiple={true} /> multiple 속성으로 여러개 선택 가능
    console.log(file);

    //* Image Validation, isValid가 true면 업로드, false면 중단
    if (!checkValidationFile(file)) return;

    const result = await uploadFile({ variables: { file } });
    console.log(result.data?.uploadFile);
    setImageUrl(result.data?.uploadFile.url ?? "");
  };
  return (
    <div>
      <h1>이미지 업로드 연습하기</h1>
      <input
        type="file"
        onChange={onChangeFile}
        multiple={true}
        accept="image/jpeg,image/png"
      />
      <img src={"https://storage.googleapis.com/" + imageUrl} />

      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
        accept="image/jpeg,image/png"
      />
    </div>
  );
}
