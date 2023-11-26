import React from 'react'
import logoDevhub from '../html-css-template/imagens/logo-devhub-grey.png';
import fotoPerfil from '../html-css-template/imagens/foto-perfil.svg';
import warningSVG from '../html-css-template/imagens/Group 108.svg';
import linkedinLogo from '../html-css-template/imagens/LInkdln-logo.svg'
import githubLogo from '../html-css-template/imagens/github-logo.svg'
import javaLogo from '../html-css-template/imagens/java-logo.svg'
import springLogo from '../html-css-template/imagens/spring-logo.svg'
import azureLogo from '../html-css-template/imagens/azure-logo.svg'
import star from '../html-css-template/imagens/icon-star.png';

import '../html-css-template/css/benchmarking.css'

import { freelasComparacao } from '../Data';

function Benchmarking() {
    return (
        <>
            <div class="header">
                <div class="navbar">

                    <div class="back">
                        <div class="icon-menu"><img src="././assets/icon-menu.svg" alt="" width="40px" /></div>
                    </div>

                    <div class="logo-devhub">
                        <img src={logoDevhub} alt="" width="200px" />
                    </div>
                    <div class="img-profile"><img src={fotoPerfil} width="35px" /></div>
                </div>
                <div class="box-menu">
                    <div class="search">
                        <div class="search-tittle">Beanchinmark</div>

                    </div>

                    <div class="sub-menu-section">
                        <button class="icon1">Limpar</button>
                        <button class="icon2">Comparar</button>
                    </div>

                </div>
                <div class="infos-home">
                    <div class="level-dev">
                        <div class="level-dev-icons">
                            <div class="color-level-dev1"></div>

                            <div class="text-level-dev">
                                <div class="name-level-dev">Dev Senior</div>
                                <div class="yyyy"> 10 Anos</div>
                            </div>
                        </div>

                        <div class="level-dev-icons">
                            <div class="color-level-dev2"></div>

                            <div class="text-level-dev">
                                <div class="name-level-dev">Dev Pleno</div>
                                <div class="yyyy"> 10 Anos</div>
                            </div>
                        </div>

                        <div class="level-dev-icons">
                            <div class="color-level-dev3"></div>

                            <div class="text-level-dev">
                                <div class="name-level-dev">Dev Junior</div>
                                <div class="yyyy"> 10 Anos</div>
                            </div>
                        </div>



                    </div>

                    <div class="info-values">
                        <div class="icon-info-value">
                            <img src={warningSVG} alt="" />
                        </div>
                        <div class="text-info-values">Todos os valores de prestação de serviços a baixo são referentes a hora de
                            trabalho do freelancer.</div>

                    </div>


                </div>

            </div>

            <div class="container-bench">
                <div class="box-cdev">

                    <div class="card-dev-search">
                        <div class="input-tittle">Preencha o ID:</div>
                        <input type="text" />
                    </div>

                    <div class="card-dev">

                    </div>

                </div>

                <div class="x">x</div>

                <div class="box-cdev">
                    
                    
                    <div class="card-dev-search">
                        <div class="input-tittle">Preencha o ID:</div>
                        <input type="text" />
                    </div>

                    <div class="card-dev">
                        {freelasComparacao.map((freelancer) => {
                            return (
                                <div class="box" key={freelancer.id}>
                                    <div class="box1">
                                        <div class="image-free">
                                            <div class="image-ipt">
                                                <img src={fotoPerfil} width="100%" alt="" />
                                            </div>
                                        </div>
                                        <div class="infos-dev">
                                            <div class="name">{freelancer.nome}</div>
                                            <div class="function">{freelancer.funcao}d</div>
                                            <div class="box-about">
                                                <div class="tittle-about">Sobre mim:</div>
                                                <div class="text-about">{freelancer.sobre}</div>
                                                <div class="box-tecnos">
                                                    <div class="icon-tecno"><img src={javaLogo} alt="" width="35px" />
                                                    </div>
                                                    <div class="icon-tecno"><img src={springLogo} alt="" width="38px" />
                                                    </div>
                                                    <div class="icon-tecno"><img src={azureLogo} alt="" width="35px" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box2">
                                        <div class="box-price">
                                            <div class="tittle-price">Valor por hora: </div>
                                            <div class="price-value">{freelancer.preco}</div>
                                        </div>
                                        <div class="links">
                                            <div class="social">
                                                <div class="git-hub-link"> <img src={githubLogo} alt="" width="33px" />
                                                </div>
                                                <div class="linkedln-link"><img src={linkedinLogo} alt="" width="33px" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="box-contact">
                                            <div class="score-freelancer">

                                                <div class="box-icon-star">
                                                    <img src={star} alt="" width="100%" />
                                                </div>
                                                <div class="box-score-number">
                                                    {freelancer.score}
                                                </div>

                                            </div>
                                            <button>Contactar</button>
                                        </div>
                                    </div>


                                </div>
                            )
                        })}
                        <div class="color-level-dev"></div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Benchmarking