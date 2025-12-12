import { Modal } from "antd";
import { useState } from "react";

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

  return (
    <>
      <button onClick={showModal}>open</button>
      <Modal
        title="모달제목"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        password: <input type="password" />
      </Modal>
    </>
  );
}
