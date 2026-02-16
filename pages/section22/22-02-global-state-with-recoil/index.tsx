
import { useRecoilState } from "recoil";
import BoardWriteComponent from "../../../src/components/units/22-global-state/BoardWrite.container";
import { isEditState } from "../../../src/components/commons/stores";


export default function GlobalStatePage(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState<boolean>(isEditState);

  return <BoardWriteComponent />;
}