import React from 'react';

const ModalComponent = ({ isOpen, onClose, whatsappNumber }) => {
  if (!isOpen) return null;

  const handleButtonClick = () => {
    onClose();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="modal-overlay-whats">
      <div className="modal-content-whats">
        <span className="close-button" onClick={onClose}>&times;</span>
        <p>Entre em contato pelo WhatsApp:</p>
        
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-button" onClick={handleButtonClick}>Abrir WhatsApp</button>
        </a>
      </div>
    </div>
  );
};

export default ModalComponent;