import React, { useState, useEffect } from 'react';
import Modal from '../ModalJsx/EditCrud';
import EditFuncaoModal from '../ModalJsx/SelectionCrud'
import Swal from 'sweetalert2';
import Select from 'react-select';
import arrowLeft from '../html-css-template/imagens/arrow-left (2).svg';
import lapisIcon from '../html-css-template/imagens/pencil.svg';
import star from '../html-css-template/imagens/icon-star.png';
import logoDevhub from '../html-css-template/imagens/logo-devhub-white.svg';
import githubLogo from '../html-css-template/imagens/github-logo.svg';
import linkedinLogo from '../html-css-template/imagens/LInkdln-logo.svg';
import api from '../api';
import { useParams } from 'react-router-dom';

import '../html-css-template/css/profileCrud.css';

function Profile() {
    const [avaliacao, setAvaliacao] = useState('');
    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [idDev, setId] = useState('');
    const [especialidades, setEspecialidades] = useState([]);
    const [imagemUrl, setImagemUrl] = useState(null);
    const [modalAberto, setModalAberto] = useState(false);
    const [editFuncaoModalOpen, setEditFuncaoModalOpen] = useState(false);
    const [atributoAtual, setAtributoAtual] = useState({
        attribute: '',
        currentValue: '',
    });
    const [form, setForm] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        api
            .get(`/freelancers/${id}`)
            .then((response) => {
                const devSelecionado = response.data;
                setId(devSelecionado.id_freelancer);
                setNome(devSelecionado.nome);
                setFuncao(devSelecionado.funcao);
                setDescricao(devSelecionado.descricao);
                setPreco(devSelecionado.valorHora);
                setEspecialidades(
                    devSelecionado.especialidades.map((especialidade) => especialidade.descricao)
                );

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
                    setAvaliacao('5.00');
                } else {
                    setAvaliacao(devSelecionado.nota);
                }

                console.log(devSelecionado);
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Usuário não encontrado',
                    text: 'Perfil de freelancer não encontrado',
                    icon: 'error',
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

    const abrirModalEdicaoFuncao = () => {
        setEditFuncaoModalOpen(true);
    };

    const fecharModalFuncao = () => {
        setEditFuncaoModalOpen(false);
    };

    const handleSalvarEdicaoFuncao = (novaFuncao) => {
        setForm({
            ...form,
            funcao: novaFuncao,
        });

        setFuncao(novaFuncao);

        console.log(form);

        fecharModalFuncao();
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
            case 'funcao':
                setFuncao(value);
                break;
            case 'valorHora':
                setPreco(value);
                break;
            case 'descricao':
                setDescricao(value);
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
        api.put(`/freelancers/${id}`, form)
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
                        <div className="freela-text-back" onClick={voltar}>
                            Voltar
                        </div>
                    </div>

                    <div className="freela-logo-devhub">
                        <img src={logoDevhub} alt="" width="160px" />
                    </div>
                </div>

                <div className="freela-items">
                    <div className="freela-img" style={{ backgroundImage: `url(${imagemUrl})` }}>
                        <div className="freela-score-freelancer-crud">
                            <div className="freela-icon-star">
                            </div>
                            <div className="freela-num-score" onClick={atualizarImagem}><img src={lapisIcon} alt="Editar" width="20px" /></div>
                        </div>
                    </div>

                    <div className="freela-profile">
                        <div className="freela-info">
                            <div className="freela-name" onClick={() => abrirModalEdicao('nome', nome)}>
                                {nome}
                                <div className="freela-edit-icon">
                                    <img src={lapisIcon} alt="Editar" width="20px" />
                                </div>
                            </div>
                            <div className="freela-function">
                                {funcao}
                                <div className="freela-edit-icon" onClick={abrirModalEdicaoFuncao}>
                                    <img src={lapisIcon} alt="Editar" width="20px" />
                                </div>
                            </div>
                            <div className="freela-tecno-especialidades">
                                <Select
                                    options={especialidades.map((especialidade) => ({
                                        value: especialidade,
                                        label: especialidade,
                                        isDisabled: true,
                                    }))}
                                    placeholder=" Especialidades "
                                />
                            </div>
                            <div className="freela-about">
                                <div className="freela-box-about">
                                    <div className="freela-tittle-about">Sobre mim: <img onClick={() => abrirModalEdicao('descricao', descricao)} src={lapisIcon} alt="Editar" width="20px" /></div>
                                    <div className="freela-text-about">
                                        {descricao}
                                    </div>
                                </div>
                            </div>
                            <div className="freela-box-price-contact">
                                <div className="freela-box-price">
                                    <div className="freela-tittle-price">Valor por hora</div>
                                    <div className="freela-price-value">R$ {preco}<img src={lapisIcon} alt="Editar" width="20px" onClick={() => abrirModalEdicao('valorHora', preco)}/></div>
                                </div>
                                <div className="freela-box-contact">
                                    <button onClick={salvar}>Salvar</button>
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

            {/* Renderização do Modal de Edição */}
            <Modal
                isOpen={modalAberto}
                onClose={fecharModal}
                onSave={handleSalvarEdicao}
                attribute={atributoAtual.attribute}
                currentValue={atributoAtual.currentValue}
            />
            <EditFuncaoModal
                isOpen={editFuncaoModalOpen}
                onClose={fecharModalFuncao}
                onSave={handleSalvarEdicaoFuncao}
            />
        </>
    );
}

export default Profile;
