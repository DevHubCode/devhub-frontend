import React from 'react'

import '../html-css-template/css/profileContratante.css';
import { freelasComparacao } from '../Data';
import foto from "../html-css-template/imagens/image-edficio=devhub.svg"
import linkedinLogo from '../html-css-template/imagens/LInkdln-logo.svg';
import ModalComponent from '../ModalJsx/ModalContactar';
import githubLogo from '../html-css-template/imagens/github-logo.svg';
import star from '../html-css-template/imagens/icon-star.png';
import arrowLeft from '../html-css-template/imagens/arrow-left (2).svg';
import logoDevhub from '../html-css-template/imagens/logo-devhub-white.svg';
import { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import api from '../api';
import Swal from "sweetalert2";
import Select from 'react-select';

function Profile() {

    const [avaliacao, setAvaliacao] = useState("");
    const [nome, setNome] = useState("");
    const [funcao, setFuncao] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [idDev, setId] = useState("");
    const [cnpj, setCnpj] = useState([]);
    const [imagemUrl, setImagemUrl] = useState(null);
    const [telefone, setTelefone] = useState("");

    const { id } = useParams();

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };


    useEffect(() => {
        api.get(`/contratantes/${id}`)
            .then(response => {
                const contratanteSelecionado = response.data;
                setNome(contratanteSelecionado.nome)
                setTelefone(contratanteSelecionado.telefone)
                setCnpj(contratanteSelecionado.cnpj)

                console.log(contratanteSelecionado)

                const imagemEmByte = contratanteSelecionado.imagem;
    
                if (imagemEmByte) {
                  const binaryString = atob(imagemEmByte);
                  const byteArray = new Uint8Array(binaryString.length);
            
                  for (let i = 0; i < binaryString.length; i++) {
                    byteArray[i] = binaryString.charCodeAt(i);
                  }
            
                  const blob = new Blob([byteArray], { type: 'image/**' });
                  const url = URL.createObjectURL(blob);
            
                  setImagemUrl(url);
                }

            })
            .catch(error => {
                Swal.fire({
                    title: 'Usuário não encontrado',
                    text: 'Perfil de contratante não encontrado',
                    icon: 'error'
                });
            });
    }, []);

    useEffect(() => {
        const imagemEmByte = imagemUrl;
    
        if (imagemEmByte) {
          const binaryString = atob(imagemEmByte);
          const byteArray = new Uint8Array(binaryString.length);
    
          for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
          }
    
          const blob = new Blob([byteArray], { type: 'image/**' });
          const url = URL.createObjectURL(blob);
    
          setImagemUrl(url);
        }
      }, []);
      
      function voltar(){
        const role = sessionStorage.getItem("role")
        if(role == "FREELANCER"){
            window.location.href = '/publicacoes'
        }else{
            window.location.href = '/publicacoes'
        } 
      }

    return (
        <>
            <div className="freela-header">
                <div className="freela-navbar">
                    <div className="freela-back">
                        <div className="freela-icon-back">
                            <img src={arrowLeft} alt="" width="20px" />
                        </div>
                        <div className="freela-text-back" onClick={voltar}>Voltar</div>
                    </div>

                    <div className="freela-logo-devhub">
                        <img src={logoDevhub} alt="" width="160px" />
                    </div>
                </div>

                <div className="freela-items">
                    <div className="freela-img" style={{backgroundImage: `url(${imagemUrl})`}}>
                       
                    </div>

                    <div className="freela-profile">
                        <div className="freela-info">
                            <div className="freela-name">{nome}</div>
                            <div className="freela-tecno">
                                    Telefone: {telefone}
                            </div>
                            <div className="freela-tecno">
                                    CNPJ: {cnpj}
                            </div>
                        </div>

                        <div className="freela-links">
                            <div className="freela-social">
                                <div className="freela-git-hub-link">
                                    <img src={githubLogo} alt="" width="80px" />
                                </div>
                                <div className="freela-linkedln-link">
                                    <img src={linkedinLogo} alt="" width="80px" />
                                </div>
                            </div>
                            <div className="freela-id">{idDev}</div>
                        </div>
                    </div>
                </div>
            </div>
        <ModalComponent isOpen={modalOpen} onClose={closeModal} whatsappNumber={"55" + telefone} />
        </>
    )
}

export default Profile