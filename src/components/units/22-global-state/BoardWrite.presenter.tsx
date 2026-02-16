import { useRecoilState } from "recoil";
import { isEditState } from "../../commons/stores";

export default function BoardWriteUI(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState<boolean>(isEditState);

  return (
    <div>
      <div>{isEdit ? "수정하기" : "등록하기"}</div>
    </div>
  );
}