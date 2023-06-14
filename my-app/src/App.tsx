import React, { useState } from 'react';
import './Modal.css';

const Modal: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="modal-container">
      <button onClick={openModal}>모달창 열기</button>
      {modalOpen && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* 모달창 내용 */}
            <h1>모달창</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
