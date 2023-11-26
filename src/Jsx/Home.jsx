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
    )

    return (
        <>
            <div className="header">
                <div className="navbar">
                    <div className="back">
                        <div className="icon-menu">
                            <img src={logoutIcon} alt="" width="30px" />
                        </div>

                    </div>

                    <div className="logo-devhub">
                        <img src={logoDevhub} alt="" width="230px" />
                    </div>

                    <div className="img-profile">
                        <img src={fotoPerfil} width="35px" />
                    </div>
                </div>
                <div className="box-menu">
                    <div className="search">
                        <div className="search-tittle">Encontre seu Freela</div>
                        <div className="search-input">
                            <input 
                                type="text"
                                value={searchDev}
                                onChange={(e) => setSearchDev(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="sub-menu-section">
                        <div className="icon1">Beanchinmark</div>
                        <div className="icon2">Todos</div>
                        <div className="icon2">Publicações</div>
                    </div>
                </div>
                <div className="infos-home">
                    <div className="level-dev">
                        <div className="level-dev-icons">
                            <div className="color-level-dev1" ></div>

                            <div className="text-level-dev">
                                <div className="name-level-dev">Dev Senior</div>
                                <div className="yyyy"> 10 Anos</div>
                            </div>
                        </div>

                        <div className="level-dev-icons">
                            <div className="color-level-dev2"></div>

                            <div className="text-level-dev">
                                <div className="name-level-dev">Dev Pleno</div>
                                <div className="yyyy"> 10 Anos</div>
                            </div>
                        </div>

                        <div className="level-dev-icons">
                            <div className="color-level-dev3"></div>

                            <div className="text-level-dev">
                                <div className="name-level-dev">Dev Junior</div>
                                <div className="yyyy"> 10 Anos</div>
                            </div>
                        </div>



                    </div>

                    <div className="info-values">
                        <div className="icon-info-value">
                            <img src={warningSVG} alt="" />
                        </div>
                        <div className="text-info-values">
                            Todos os valores de prestação de serviços a baixo são referentes a hora de trabalho do freelancer.
                        </div>
                    </div>

                </div>
            </div>
            <div className="header-icons">
                {filteredDevs.length > 0 ? (
                    filteredDevs.map((freelancer) => {
                        return (
                            <div className="box-freelancer" key={freelancer.id}>
                                <div className="image-freelancer" >
    
                                    <div className="score-freelancer">
    
                                        <div className="box-icon-star">
                                            <img src={star} alt="" width="100%" />
                                        </div>
                                        <div className="box-score-number">
                                            {freelancer.score}
                                        </div>
    
                                    </div>
                                </div>
                                <div className="box-information">
                                    <div className="box-classification">
    
                                    </div>
                                    <div className="box-aux">
                                        <div className="box-name-age">
                                            {freelancer.nome}, {freelancer.idade}.
                                        </div>
                                        <div className="box-price">
                                            R$ {freelancer.preco}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className="no-results-message">Nenhum desenvolvedor encontrado.</div>
                )}
            </div>
        </>
    )
}

export default Home;