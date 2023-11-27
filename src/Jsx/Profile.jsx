import React from 'react'

// import '../html-css-template/css/profile.css';
import { freelasComparacao } from '../Data';

import linkedinLogo from '../html-css-template/imagens/LInkdln-logo.svg';
import githubLogo from '../html-css-template/imagens/github-logo.svg';
import javaLogo from '../html-css-template/imagens/java-logo.svg';
import springLogo from '../html-css-template/imagens/spring-logo.svg';
import azureLogo from '../html-css-template/imagens/azure-logo.svg';
import star from '../html-css-template/imagens/icon-star.png';
import arrowLeft from '../html-css-template/imagens/arrow-left.svg';
import logoDevhub from '../html-css-template/imagens/logo-devhub-grey.png';
import { useParams } from 'react-router-dom';

function Profile() {

    const { id }= useParams();

    const devSelecionado = freelasComparacao.find(freelancer => freelancer.id === parseInt(id));

    if (!devSelecionado) {
        // Handle the case where the developer with the specified id is not found
        return (
            <div>
                Developer not found!
            </div>
        );
    }

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
                    <div className="img">
                        <div className="score-freelancer">
                            <div className="icon-star">
                                <img src={star} alt="" width="30px" />
                            </div>
                            <div className="num-score">{devSelecionado.score}</div>
                        </div>
                    </div>

                    <div className="profile">
                        <div className="info">
                            <div className="name">{devSelecionado.nome}</div>
                            <div className="function">{devSelecionado.funcao}</div>
                            <div className="tecno">
                                <div className="box-tecnos">
                                    <div className="icon-tecno">
                                        <img src={javaLogo} alt="" width="65px" />
                                    </div>
                                    <div className="icon-tecno">
                                        <img src={springLogo} alt="" width="65px" />
                                    </div>
                                    <div className="icon-tecno">
                                        <img src={azureLogo} alt="" width="65px" />
                                    </div>
                                </div>
                            </div>
                            <div className="about">
                                <div className="box-about">
                                    <div className="tittle-about">Sobre mim:</div>
                                    <div className="text-about">
                                        {devSelecionado.sobre}
                                    </div>
                                </div>
                            </div>
                            <div className="box-price-contact">
                                <div className="box-price">
                                    <div className="tittle-price">Valor por hora</div>
                                    <div className="price-value">R$ {devSelecionado.preco}</div>
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
                            <div className="id">{devSelecionado.id}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile