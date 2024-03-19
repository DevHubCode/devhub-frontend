import React, { useState, useEffect } from 'react';
import Modal from '../ModalJsx/EditCrud';
import Swal from 'sweetalert2';
import arrowLeft from '../html-css-template/imagens/arrow-left (2).svg';
import lapisIcon from '../html-css-template/imagens/pencil.svg';
import logoDevhub from '../html-css-template/imagens/logo-devhub-white.svg';
import githubLogo from '../html-css-template/imagens/github-logo.svg';
import linkedinLogo from '../html-css-template/imagens/LInkdln-logo.svg';
import api from '../api';
import { useParams } from 'react-router-dom';

import '../html-css-template/css/profileCrud.css';

function Profile() {
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState([]);
    const [telefone, setTelefone] = useState("");
    const [idContratante, setId] = useState("");
    const [imagemUrl, setImagemUrl] = useState(null);
    const [modalAberto, setModalAberto] = useState(false);
    const [atributoAtual, setAtributoAtual] = useState({
        attribute: '',
        currentValue: '',
    });
    const [form, setForm] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        api.get(`/contratantes/${id}`)
            .then(response => {
                const contratanteSelecionado = response.data;
                setNome(contratanteSelecionado.nome)
                setTelefone(contratanteSelecionado.telefone)
                setCnpj(contratanteSelecionado.cnpj)
                setId(contratanteSelecionado.id_contratante)
                

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
    }, [id]);

    function voltar() {
        const role = sessionStorage.getItem('role');
        if (role === 'FREELANCER') {
            window.location.href = '/publicacoes';
        } else {
            window.location.href = '/home';
        }
    }

    // Função para abrir o modal de edição
    const abrirModalEdicao = (attribute, currentValue) => {
        console.log('Abrindo modal com:', attribute, currentValue);
        setModalAberto(true);
        setAtributoAtual({ attribute, currentValue });
    };

    // Função para fechar o modal
    const fecharModal = () => {
        setModalAberto(false);
    };

    console.log(form);

    const handleSalvarEdicao = (novosDados) => {
        console.log('Dados atualizados:', novosDados);

        const { attribute, value } = novosDados;

        setForm((prevForm) => ({
            ...prevForm,
            [attribute]: value,
        }));

        switch (attribute) {
            case 'nome':
                setNome(value);
                break;
            case 'cnpj':
                setCnpj(value);
                break;
            case 'telefone':
                setTelefone(value);
                break;
            default:
                break;
        }

        console.log(form);


        setModalAberto(false); // Fecha o modal após salvar
    };

    function salvar() {
        const id = sessionStorage.getItem("id")
        console.log(form);
        api.put(`/contratantes/${id}`, form)
            .then(response => {
                // Lida com a resposta do servidor após um login bem-sucedido
                console.log(response.data);
                Swal.fire({
                    title: "Logando!",
                    text: "Usuário encontrado, clique em ok para proseguir",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log("O usuário clicou em OK!");
                    }
                });

            }).catch(error => {
                Swal.fire({
                    title: "Usuário não encontrado",
                    text: "Verifique se os dados estão corretos!",
                    icon: "error"
                });

            });
    }

    function atualizarImagem() {
        window.location.href = "/atualizarImagem"
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
                        <div className="freela-score-contratante-crud">
                            <div className="freela-num-score-contratante" onClick={atualizarImagem}><img src={lapisIcon} alt="Editar" width="20px" /></div>
                        </div>
                       
                    </div>

                    <div className="freela-profile">
                        <div className="freela-info">
                            <div className="freela-name-contratante" >{nome}  <img src={lapisIcon} alt="Editar" width="20px"  onClick={() => abrirModalEdicao('nome', nome)}/></div>
                           
                            <div className="freela-tecno-contratante">
                                    Telefone: {telefone}  <img src={lapisIcon} alt="Editar" width="20px"  onClick={() => abrirModalEdicao('telefone', telefone)}/>
                            </div>
                            <div className="freela-tecno-contratante">
                                    CNPJ: {cnpj} <img src={lapisIcon} alt="Editar" width="20px"  onClick={() => abrirModalEdicao('cnpj', cnpj)}/>
                            </div>
                            <div className="freela-box-contact">
                                    <button onClick={salvar}>Salvar</button>
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
                            <div className="freela-id">{idContratante}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Renderização do Modal de Edição */}
            <Modal
                isOpen={modalAberto}
                onClose={fecharModal}
                onSave={handleSalvarEdicao}
                attribute={atributoAtual.attribute}
                currentValue={atributoAtual.currentValue}
            />
        </>
    );
}

export default Profile;
