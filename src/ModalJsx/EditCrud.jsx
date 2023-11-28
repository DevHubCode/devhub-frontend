import React, { useState } from 'react';
import Modal from 'react-modal';
import "../html-css-template/css/profileCrud.css"

Modal.setAppElement('#root'); // Necessário para acessibilidade

const EditModal = ({ isOpen, onClose, onSave, attribute, currentValue }) => {
    console.log('Props recebidas no Modal:', attribute, currentValue);
  
    const [newValue, setNewValue] = useState(currentValue);
  
    const handleSave = () => {
        onSave({ attribute: attribute, value: newValue });
        onClose();
    };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={`Modal de Edição - ${attribute}`}
      className="edit-modal" // Adicione a classe correspondente ao seu modal
      overlayClassName="modal-overlay" // Adicione a classe correspondente ao overlay
    >
      <h2>{`Editar ${attribute}`}</h2>
      <label>{`Novo ${attribute}:`}</label>
      <input type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      <button onClick={handleSave}>Salvar</button>
      <button onClick={onClose}>Cancelar</button>
    </Modal>
  );
};

export default EditModal;
