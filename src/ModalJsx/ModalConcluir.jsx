import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import logoDevhub from '../html-css-template/imagens/logo-devhub-white.svg';
import Swal from 'sweetalert2';
import api from '../api';

const ModalComponent = ({ isOpen, onClose, valorHora, idContratante, idDev }) => {
  const [totalHoras, setTotalHoras] = useState(0);
  const [totalAPagar, setTotalAPagar] = useState(0);
  const [avancarParaPagamento, setAvancarParaPagamento] = useState(false);
  const [avancarParaAvaliacao, setAvancarParaAvaliacao] = useState(false);
  const [avaliacao, setAvaliacao] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handlePagamentoButtonClick = () => {
    const totalAPagar = parseFloat((totalHoras * valorHora)).toFixed(2);
    setTotalAPagar(totalAPagar);
    setAvancarParaPagamento(true);
  };

  const handleAvaliacaoButtonClick = () => {
    console.log(totalAPagar)
    api.patch(`/servicos/concluir`, {
            idContratante: idContratante,
            idFreelancer: idDev,
            valorHora: totalAPagar
    }).then(response => {
       
    }).catch(error => {
        Swal.fire({
            title: "Serviço já foi finalizado",
            text: "Clique em ok para proseguir",
            icon: "error"
          });

    });
    setAvancarParaAvaliacao(true);
  };

  const handleBackButtonClick = () => {
    setAvancarParaPagamento(false);
    setAvancarParaAvaliacao(false);
  };

  const handleStarClick = (valor) => {
    setAvaliacao(valor);
  };

  const handleStarHover = (valor) => {
    setHovered(valor);
  };

  const avaliar = () => {
    const notaFormatada = avaliacao.toFixed(2)
    api.post(`/avaliacoes-freelancer/${idContratante}/${idDev}`,{
        nota: notaFormatada
    }
    ).then(response => {
        console.log(response.data);
        Swal.fire({
            title: "Serviço concluido com sucesso",
            text: "clique em ok para proseguir",
            icon: "success"
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = `/profile/${idDev}`;
            }
        });
    }).catch(error => {
        Swal.fire({
            title: "Serviço já foi finalizado",
            text: "Clique em ok para proseguir",
            icon: "error"
          });

    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={logoDevhub} alt="Logo" className="modal-logo" />
        {!avancarParaPagamento && !avancarParaAvaliacao && (
          <>
            <label htmlFor="totalHoras">Total de horas trabalhadas:</label>
            <input
              type="number"
              id="totalHoras"
              value={totalHoras}
              onChange={(e) => setTotalHoras(parseFloat(e.target.value))}
            />
            <button className="avancar-button" onClick={handlePagamentoButtonClick}>Avançar para o pagamento</button>
          </>
        )}
        {avancarParaPagamento && !avancarParaAvaliacao && (
          <>
            <p>Total a pagar: R${totalAPagar}</p>
            <QRCode value={`Total a pagar: ${totalAPagar}`} />
            <button className="avancar-button" onClick={handleAvaliacaoButtonClick}>Avançar para a avaliação</button>
            <button className="back-button" onClick={handleBackButtonClick}>Voltar</button>
          </>
        )}
       {avancarParaPagamento && avancarParaAvaliacao && (
            <>
                <p>Avalie o serviço prestado pelo freelancer:</p>
                <div className="stars-container">
                {[1, 2, 3, 4, 5].map((valor) => (
                    <span
                    key={valor}
                    className={`star ${valor <= (hovered || avaliacao) ? 'filled' : ''}`}
                    onClick={() => handleStarClick(valor)}
                    onMouseEnter={() => handleStarHover(valor)}
                    onMouseLeave={() => handleStarHover(0)}
                    >
                    ★
                    </span>
                ))}
                </div>
                <button className='avancar-button' onClick={avaliar}>Confirmar</button>
            </>
            )}
      </div>
    </div>
  );
};

export default ModalComponent;
