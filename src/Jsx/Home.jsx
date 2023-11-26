import React from 'react';
import { freelancers } from '../Data';
import logoutIcon from '../html-css-template/imagens/icon-logout.png';
import logoDevhub from '../html-css-template/imagens/logo-devhub-grey.png';
import fotoPerfil from '../html-css-template/imagens/foto-perfil.svg';
import warningSVG from '../html-css-template/imagens/Group 108.svg';
import star from '../html-css-template/imagens/icon-star.png';

import '../html-css-template/css/home.css'

function Home() {
    return (
        <>
            <div className="header">
                <div class="navbar">
                    <div class="back">
                        <div class="icon-menu">
                            <img src={logoutIcon} alt="" width="30px" />
                        </div>

                    </div>

                    <div class="logo-devhub">
                        <img src={logoDevhub} alt="" width="230px" />
                    </div>

                    <div class="img-profile">
                        <img src={fotoPerfil} width="35px" />
                    </div>
                </div>
                <div class="box-menu">
                    <div class="search">
                        <div class="search-tittle">Encontre seu Freela</div>
                        <div class="search-input">
                            <input type="text" />
                        </div>
                    </div>

                    <div class="sub-menu-section">
                        <div class="icon1">Beanchinmark</div>
                        <div class="icon2">Todos</div>
                        <div class="icon2">Publicações</div>
                    </div>
                </div>
                <div class="infos-home">
                    <div class="level-dev">
                        <div class="level-dev-icons">
                            <div class="color-level-dev1" ></div>

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
                        <div class="text-info-values">
                            Todos os valores de prestação de serviços a baixo são referentes a hora de trabalho do freelancer.
                        </div>
                    </div>

                </div>
            </div>
            <div className="header-icons">
                {freelancers.map((freelancer) => {
                    return (
                        <div class="box-freelancer" key={freelancer.id}>
                            <div class="image-freelancer" >

                                <div class="score-freelancer">

                                    <div class="box-icon-star">
                                        <img src={star} alt="" width="100%" />
                                    </div>
                                    <div class="box-score-number">
                                        {freelancer.score}
                                    </div>

                                </div>
                            </div>
                            <div class="box-information">
                                <div class="box-classification">

                                </div>
                                <div class="box-aux">
                                    <div class="box-name-age">
                                        {freelancer.nome}, {freelancer.idade}.
                                    </div>
                                    <div class="box-price">
                                        R$ {freelancer.preco}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home;