// EditFuncaoModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Necessário para acessibilidade

const EditFuncaoModal = ({ isOpen, onClose, onSave }) => {
  const [selectedFuncao, setSelectedFuncao] = useState('');

  const handleSave = () => {
    onSave(selectedFuncao);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal de Edição de Função"
      className="edit-modal" // Adicione a classe correspondente ao seu modal
      overlayClassName="modal-overlay" // Adicione a classe correspondente ao overlay
    >
      <h2>Editar Função</h2>
      <select
        value={selectedFuncao}
        onChange={(e) => setSelectedFuncao(e.target.value)}
      >
        <option value="DESENVOLVEDOR_BACKEND">Desenvolvedor Backend</option>
        <option value="DESENVOLVEDOR_FRONTEND">Desenvolvedor Frontend</option>
        <option value="DESENVOLVEDOR_FULLSTACK">Desenvolvedor Fullstack</option>
        <option value="BANCO_DE_DADOS">Banco de Dados</option>
        <option value="PRODUCT_OWNER">Product Owner</option>
        <option value="QUALITY_ASSURANCE">Quality Assurance</option>
        <option value="WEB_DESIGNER">Web Designer</option>
      </select>
      <button onClick={handleSave}>Salvar</button>
      <button onClick={onClose}>Cancelar</button>
    </Modal>
  );
};

export default EditFuncaoModal;
