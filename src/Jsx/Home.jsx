import React, { useState } from 'react';
import { freelancers } from '../Data';
import logoutIcon from '../html-css-template/imagens/icon-logout.png';
import logoDevhub from '../html-css-template/imagens/logo-devhub-grey.png';
import fotoPerfil from '../html-css-template/imagens/foto-perfil.svg';
import warningSVG from '../html-css-template/imagens/Group 108.svg';
import star from '../html-css-template/imagens/icon-star.png';

import '../html-css-template/css/home.css'

function Home() {

    const [ searchDev, setSearchDev ] = useState('');

    const filteredDevs = freelancers.filter(
        (freelancer) => 
        freelancer.nome.toLowerCase().includes(searchDev.toLowerCase()) ||
        freelancer.id.toString().includes(searchDev)
    );

    

    return (
        <>
            <div className="home-header">
                <div className="home-navbar">
                    <div className="home-back">
                        <div className="home-icon-menu">
                            <img src={logoutIcon} alt="" width="30px" />
                        </div>

                    </div>

                    <div className="home-logo-devhub">
                        <img src={logoDevhub} alt="" width="230px" />
                    </div>

                    <div className="home-img-profile">
                        <img src={fotoPerfil} width="35px" />
                    </div>
                </div>
                <div className="home-box-menu">
                    <div className="home-search">
                        <div className="home-search-tittle">Encontre seu Freela</div>
                        <div className="home-search-input">
                            <input 
                                type="text"
                                value={searchDev}
                                onChange={(e) => setSearchDev(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="home-sub-menu-section">
                        <div className="home-icon1">Beanchinmark</div>
                        <div className="home-icon2">Todos</div>
                        <div className="home-icon2">Publicações</div>
                    </div>
                </div>
                <div className="home-infos-home">
                    <div className="home-level-dev">
                        <div className="home-level-dev-icons">
                            <div className="home-color-level-dev1" ></div>

                            <div className="home-text-level-dev">
                                <div className="home-name-level-dev">Dev Senior</div>
                                <div className="home-yyyy"> 10 Anos</div>
                            </div>
                        </div>

                        <div className="home-level-dev-icons">
                            <div className="home-color-level-dev2"></div>

                            <div className="home-text-level-dev">
                                <div className="home-name-level-dev">Dev Pleno</div>
                                <div className="home-yyyy"> 10 Anos</div>
                            </div>
                        </div>

                        <div className="home-level-dev-icons">
                            <div className="home-color-level-dev3"></div>

                            <div className="home-text-level-dev">
                                <div className="home-name-level-dev">Dev Junior</div>
                                <div className="home-yyyy"> 10 Anos</div>
                            </div>
                        </div>



                    </div>

                    <div className="home-info-values">
                        <div className="home-icon-info-value">
                            <img src={warningSVG} alt="" />
                        </div>
                        <div className="home-text-info-values">
                            Todos os valores de prestação de serviços a baixo são referentes a hora de trabalho do freelancer.
                        </div>
                    </div>

                </div>
            </div>
            <div className="home-header-icons">
                {filteredDevs.length > 0 ? (
                    filteredDevs.map((freelancer) => {
                        return (
                            <div className="home-box-freelancer" key={freelancer.id}>
                                <div className="home-image-freelancer" >
    
                                    <div className="home-score-freelancer">
    
                                        <div className="home-box-icon-star">
                                            <img src={star} alt="" width="100%" />
                                        </div>
                                        <div className="home-box-score-number">
                                            {freelancer.score}
                                        </div>
    
                                    </div>
                                </div>
                                <div className="home-box-information">
                                    <div className="home-box-classification">
    
                                    </div>
                                    <div className="home-box-aux">
                                        <div className="home-box-name-age">
                                            {freelancer.nome}, {freelancer.idade}.
                                        </div>
                                        <div className="home-box-price">
                                            R$ {freelancer.preco}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className="home-no-results-message">Nenhum desenvolvedor encontrado.</div>
                )}
            </div>
        </>
    )
}

export default Home;