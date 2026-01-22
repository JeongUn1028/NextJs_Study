import { Modal } from "antd";

// ! Ant Design Modal 에러/성공 표시 페이지
export default function ModalAlertPage() {
  // * 성공 모달 표시 함수
  const onClickSuccess = (): void => {
    Modal.success({
      content: "게시글 등록에 성공",
    });
  };
  // * 실패 모달 표시 함수
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
