import React from 'react';
import { useState, useEffect } from 'react';

const ModalComponent = ({ isOpen, onClose, whatsappNumber }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <p>Entre em contato pelo WhatsApp:</p>
        
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-button">Abrir WhatsApp</button>
        </a>
      </div>
    </div>
  );
};

export default ModalComponent;