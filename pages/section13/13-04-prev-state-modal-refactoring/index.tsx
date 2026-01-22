import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

// ! 다음 주소 단계 API를 걼뜹 모달 예시
export default function ModalAlertPage() {
  const [isOpen, setIsOpen] = useState(false);

  // ! 모달 여닫기 토글 함수
  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>open</button>
      {/* 모달 종료 방식 - 1 숨기기(ex. 이력서)*/}
      <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
      {/* 모달 종료 방식 - 2 삭제(ex. 초기화)*/}
      {/* {isOpen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )} */}
    </>
  );
}
