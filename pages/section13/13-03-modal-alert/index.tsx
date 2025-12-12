import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccess = (): void => {
    Modal.success({
      content: "게시글 등록에 성공",
    });
  };
  const onClickFail = (): void => {
    Modal.error({ content: "비밀번호가 틀렸습니다." });
  };
  return (
    <>
      <button onClick={onClickSuccess}>suc</button>
      <button onClick={onClickFail}>fail</button>
    </>
  );
}
