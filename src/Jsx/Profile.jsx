import React from 'react'

import '../html-css-template/css/profile.css';
import { freelasComparacao } from '../Data';

import linkedinLogo from '../html-css-template/imagens/LInkdln-logo.svg';
import githubLogo from '../html-css-template/imagens/github-logo.svg';
import star from '../html-css-template/imagens/icon-star.png';
import arrowLeft from '../html-css-template/imagens/arrow-left.svg';
import logoDevhub from '../html-css-template/imagens/logo-devhub-grey.png';
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

    const { id } = useParams();


    useEffect(() => {
        api.get(`/freelancers/${id}`)
            .then(response => {
                const devSelecionado = response.data;
                setId(devSelecionado.id_freelancer);
                setNome(devSelecionado.nome);
                setAvaliacao(devSelecionado.avaliacao);
                setFuncao(devSelecionado.funcao);
                setDescricao(devSelecionado.descricao);
                setPreco(devSelecionado.valorHora);
                setEspecialidades(devSelecionado.especialidades.map(especialidade => especialidade.descricao));

                console.log(devSelecionado)
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
        const imagemEmByte = sessionStorage.getItem('imagem');
    
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

    return (
        <>
            <div className="header">
                <div className="navbar">
                    <div className="back">
                        <div className="icon-back">
                            <img src={arrowLeft} alt="" width="20px" />
                        </div>
                        <div className="text-back">Voltar</div>
                    </div>

                    <div className="logo-devhub">
                        <img src={logoDevhub} alt="" width="160px" />
                    </div>
                </div>

                <div className="items">
                    <div className="img" style={{backgroundImage: `url(${imagemUrl})`}}>
                        <div className="score-freelancer">
                            <div className="icon-star">
                                <img src={star} alt="" width="30px"/>
                            </div>
                            <div className="num-score">{avaliacao}</div>
                        </div>
                    </div>

                    <div className="profile">
                        <div className="info">
                            <div className="name">{nome}</div>
                            <div className="function">{funcao}</div>
                            <div className="tecno">
                                <div className="box-tecnos">
                                    <Select options={especialidades.map(especialidade => ({
                                        value: especialidade,
                                        label: especialidade,
                                        isDisabled: true,
                                    }))}  placeholder=" Especialidades ">
                                        Especialidades
                                    </Select>
                                </div>
                            </div>
                            <div className="about">
                                <div className="box-about">
                                    <div className="tittle-about">Sobre mim:</div>
                                    <div className="text-about">
                                        {descricao}
                                    </div>
                                </div>
                            </div>
                            <div className="box-price-contact">
                                <div className="box-price">
                                    <div className="tittle-price">Valor por hora</div>
                                    <div className="price-value">R$ {preco}</div>
                                </div>
                                <div className="box-contact">
                                    <button>Contactar</button>
                                </div>
                            </div>
                        </div>

                        <div className="links">
                            <div className="social">
                                <div className="git-hub-link">
                                    <img src={githubLogo} alt="" width="80px" />
                                </div>
                                <div className="linkedln-link">
                                    <img src={linkedinLogo} alt="" width="80px" />
                                </div>
                            </div>
                            <div className="id">{idDev}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile