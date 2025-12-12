import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalAlertPage() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };
  const handleOk = (): void => {
    setIsOpen(false);
  };
  const handleCancel = (): void => {
    setIsOpen(false);
  };

  const handleComplete = (data: Address) => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>open</button>
      {/* 모달 종료 방식 - 1 숨기기(ex. 이력서)*/}
      <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
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
