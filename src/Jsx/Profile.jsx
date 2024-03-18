import React from 'react'

import '../html-css-template/css/profile.css';
import { freelasComparacao } from '../Data';
import foto from "../html-css-template/imagens/image-edficio=devhub.svg"
import linkedinLogo from '../html-css-template/imagens/LInkdln-logo.svg';
import ModalComponent from '../ModalJsx/ModalContactar';
import ModalConcluir from '../ModalJsx/ModalConcluir'
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
    const [especialidades, setEspecialidades] = useState([]);
    const [imagemUrl, setImagemUrl] = useState(null);
    const [telefone, setTelefone] = useState("");
    const idContratantee = sessionStorage.getItem('id');
    const [contacted, setContacted] = useState(false);

    const { id } = useParams();

    const [modalOpen, setModalOpen] = useState(false);

    const [modalConcluirOpen, setModalConcluirOpen] = useState(false);


    useEffect(() => {

        api.get(`/freelancers/${id}`)
            .then(response => {
                const devSelecionado = response.data;
                setId(devSelecionado.id);
                setNome(devSelecionado.nome);
                setFuncao(devSelecionado.funcao);
                setDescricao(devSelecionado.descricao);
                setPreco(devSelecionado.valorHora);
                setEspecialidades(devSelecionado.especialidades.map(especialidade => especialidade.descricao));
                setTelefone(devSelecionado.telefone);

                const imagemEmByte = devSelecionado.imagem;
    
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

                if (devSelecionado.nota == null) {
                    setAvaliacao("5.00");
                } else {
                    const avaliacao = devSelecionado.nota.toFixed(2);
                    setAvaliacao(avaliacao);
                }


                console.log(response.data)

            })
            .catch(error => {
                Swal.fire({
                    title: 'Usuário não encontrado',
                    text: 'Perfil de freelancer não encontrado',
                    icon: 'error'
                });
            });
    }, []);

    useEffect(() => {
        api.get(`/servicos?idContratante=${idContratantee}&idFreelancer=${idDev}`)
            .then(response => {
                setContacted(response.data);
            }).catch(error => {
                console.log("Erro na busca do serviço")
            });
    }, [idDev]);

    const openModal = () => {
        api.post(`/servicos/criar?idContratante=${idContratantee}&idFreelancer=${idDev}`, {
        }).then(response => {
            setModalOpen(true);
        }).catch(error => {
            Swal.fire({
                title: "Contratante já entrou em contato",
                text: "Clique em ok para proseguir",
                icon: "error"
              });

        });
        };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    const openModalConcluir = () => {
        setModalConcluirOpen(true);
      };

    const closeModalConcluir = () => {
        setModalConcluirOpen(false);
      };

    const handleFinishService = () => {
        api.patch(`/servicos/concluir?idContratante=${idContratantee}&idFreelancer=${idDev}`, {
        }).then(response => {
            // Lida com a resposta do servidor após um login bem-sucedido
            console.log(response.data);
            Swal.fire({
                title: "Serviço concluido com sucesso",
                text: "clique em ok para proseguir",
                icon: "success"
              })
        }).catch(error => {
            Swal.fire({
                title: "Serviço já foi finalizado",
                text: "Clique em ok para proseguir",
                icon: "error"
              });

        });
    };

    const handleCancel = () => {
        api.patch(`/servicos/fechar?idContratante=${idContratantee}&idFreelancer=${idDev}`, {
        }).then(response => {
            // Lida com a resposta do servidor após um login bem-sucedido
            console.log(response.data);
            Swal.fire({
                title: "Serviço cancelado",
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
            window.location.href = '/home'
        } 
      }

      const customStyles = {
        control: (provided, state) => ({
          ...provided,
          color: 'black' 
        }),
      };
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
                        <div className="freela-score-freelancer">
                            <div className="freela-icon-star">
                                <img src={star} alt="" width="30px"/>
                            </div>
                            <div className="freela-num-score">{avaliacao}</div>
                        </div>
                    </div>

                    <div className="freela-profile">
                        <div className="freela-info">
                            <div className="freela-name">{nome}</div>
                            <div className="freela-function">{funcao}</div>
                            <div className="freela-tecno">
                                    <Select 
                                        styles={customStyles}
                                        options={especialidades.map(especialidade => ({
                                            value: especialidade,
                                            label: especialidade,
                                            isDisabled: false,
                                        }))} 
                                        placeholder=" Especialidades ">
                                        Especialidades
                                    </Select>

                            </div>
                            <div className="freela-about">
                                <div className="freela-box-about">
                                    <div className="freela-tittle-about">Sobre mim:</div>
                                    <div className="freela-text-about">
                                        {descricao}
                                    </div>
                                </div>
                            </div>
                            <div className="freela-box-price-contact">
                                <div className="freela-box-price">
                                    <div className="freela-tittle-price">Valor por hora</div>
                                    <div className="freela-price-value">R$ {preco}</div>
                                </div>
                                <div className="freela-box-contact">
                                    {contacted ? (
                                        <div>
                                            <button className='freela-button-start' onClick={openModalConcluir}>Concluir Serviço</button>
                                            <button className='freela-button-cancel' onClick={handleCancel}>Cancelar</button>
                                        </div>
                                    ) : (
                                        <button className='freela-button-contact' onClick={openModal}>Contactar</button>
                                    )}
                                </div>
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
        <ModalConcluir isOpen={modalConcluirOpen} onClose={closeModalConcluir} valorHora={preco} idContratante={idContratantee} idDev={idDev}/>
        </>
        
    )
}

export default Profile