import React, { useState } from 'react'
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

    const [searchId, setSearchId] = useState('');
    const [showDevCard, setShowDevCard] = useState(false);
    const [foundDev, setFoundDev] = useState(null);

    const [searchId2, setSearchId2] = useState('');
    const [showDevCard2, setShowDevCard2] = useState(false);
    const [foundDev2, setFoundDev2] = useState(null);

    const handleSearchClick = () => {
        // Lógica de pesquisa aqui com base no 'searchId'
        // Atualize o estado ou faça chamadas à API conforme necessário
        // Exemplo: fazer uma chamada de API fictícia usando fetch
        // fetch(`sua/api/endpoint/${searchId}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         // Atualize o estado ou faça o que for necessário com os dados da pesquisa
        //         setShowDevCard(true);
        //     })
        //     .catch(error => {
        //         // Trate os erros, se necessário
        //         console.error('Erro na pesquisa:', error);
        //     });

        const devFound = freelasComparacao.find(freelancer => freelancer.id === parseInt(searchId));


        if (devFound) {
            console.log('Desenvolvedor encontrado: ', foundDev)
            setFoundDev(devFound);
            setShowDevCard(true);

        } else {
            console.log('Desenvolvedor não encontrado')
            setFoundDev(null);
            setShowDevCard(false);
        }
    };

    const handleSearchClick2 = () => {
        const devFound2 = freelasComparacao.find(freelancer => freelancer.id === parseInt(searchId2));

        if (devFound2) {
            console.log('2o Desenvolvedor encontrado : ', devFound2);
            setFoundDev2(devFound2);
            setShowDevCard2(true);
        } else {
            console.log('2o Desenvolvedor NÃO encontrado!!');
            setFoundDev2(null);
            setShowDevCard2(false);
        }

    }


    return (
        <>
            <div className="header">
                <div className="navbar">

                    <div className="back">
                        <div className="icon-menu"><img src="././assets/icon-menu.svg" alt="" width="40px" /></div>
                    </div>

                    <div className="logo-devhub">
                        <img src={logoDevhub} alt="" width="200px" />
                    </div>
                    <div className="img-profile"><img src={fotoPerfil} width="35px" /></div>
                </div>
                <div className="box-menu">
                    <div className="search">
                        <div className="search-tittle">Beanchinmark</div>

                    </div>

                    <div className="sub-menu-section">
                        <button className="icon1">Limpar</button>
                        <button className="icon2">Comparar</button>
                    </div>

                </div>
                <div className="infos-home">
                    <div className="level-dev">
                        <div className="level-dev-icons">
                            <div className="color-level-dev1"></div>

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
                        <div className="text-info-values">Todos os valores de prestação de serviços a baixo são referentes a hora de
                            trabalho do freelancer.</div>

                    </div>


                </div>

            </div>

            <div className="container-bench">

                <div className="box-cdev">

                    {showDevCard ? (
                        <div className="card-dev">
                            <div className="box" key={foundDev.id}>
                                <div className="box1">
                                    <div className="image-free">
                                        <div className="image-ipt">
                                            <img src={foundDev.image} width="100%" alt="" />
                                        </div>
                                    </div>
                                    <div className="infos-dev">
                                        <div className="name">{foundDev.nome}</div>
                                        <div className="function">{foundDev.funcao}d</div>
                                        <div className="box-about">
                                            <div className="tittle-about">Sobre mim:</div>
                                            <div className="text-about">{foundDev.sobre}</div>
                                            <div className="box-tecnos">
                                                <div className="icon-tecno"><img src={javaLogo} alt="" width="35px" />
                                                </div>
                                                <div className="icon-tecno"><img src={springLogo} alt="" width="38px" />
                                                </div>
                                                <div className="icon-tecno"><img src={azureLogo} alt="" width="35px" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box2">
                                    <div className="box-price">
                                        <div className="tittle-price">Valor por hora: </div>
                                        <div className="price-value">{foundDev.preco}</div>
                                    </div>
                                    <div className="links">
                                        <div className="social">
                                            <div className="git-hub-link"> <img src={githubLogo} alt="" width="33px" />
                                            </div>
                                            <div className="linkedln-link"><img src={linkedinLogo} alt="" width="33px" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box-contact">
                                        <div className="score-freelancer">

                                            <div className="box-icon-star">
                                                <img src={star} alt="" width="100%" />
                                            </div>
                                            <div className="box-score-number">
                                                {foundDev.score}
                                            </div>

                                        </div>
                                        <button>Contactar</button>
                                    </div>
                                </div>
                            </div>
                            <div className="color-level-dev"></div>
                        </div>
                    ) : (
                        <div className="card-dev-search">
                            <div className="input-tittle">Preencha o ID:</div>
                            <input
                                type="text"
                                value={searchId}
                                onChange={(e) => setSearchId(e.target.value)}
                            />
                            <button onClick={handleSearchClick}>Pesquisar</button>
                        </div>
                    )}
                </div>

                <div className="x">x</div>

                <div className="box-cdev">

                    {showDevCard2 ? (
                        <div className="card-dev">
                            <div className="box" key={foundDev2.id}>
                                <div className="box1">
                                    <div className="image-free">
                                        <div className="image-ipt">
                                            <img src={foundDev2.image} width="100%" alt="" />
                                        </div>
                                    </div>
                                    <div className="infos-dev">
                                        <div className="name">{foundDev2.nome}</div>
                                        <div className="function">{foundDev2.funcao}d</div>
                                        <div className="box-about">
                                            <div className="tittle-about">Sobre mim:</div>
                                            <div className="text-about">{foundDev2.sobre}</div>
                                            <div className="box-tecnos">
                                                <div className="icon-tecno"><img src={javaLogo} alt="" width="35px" />
                                                </div>
                                                <div className="icon-tecno"><img src={springLogo} alt="" width="38px" />
                                                </div>
                                                <div className="icon-tecno"><img src={azureLogo} alt="" width="35px" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box2">
                                    <div className="box-price">
                                        <div className="tittle-price">Valor por hora: </div>
                                        <div className="price-value">{foundDev2.preco}</div>
                                    </div>
                                    <div className="links">
                                        <div className="social">
                                            <div className="git-hub-link"> <img src={githubLogo} alt="" width="33px" />
                                            </div>
                                            <div className="linkedln-link"><img src={linkedinLogo} alt="" width="33px" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box-contact">
                                        <div className="score-freelancer">

                                            <div className="box-icon-star">
                                                <img src={star} alt="" width="100%" />
                                            </div>
                                            <div className="box-score-number">
                                                {foundDev2.score}
                                            </div>

                                        </div>
                                        <button>Contactar</button>
                                    </div>
                                </div>
                            </div>
                            <div className="color-level-dev "></div>
                        </div>
                    ) : (
                        <div className="card-dev-search">
                            <div className="input-tittle">Preencha o Segundo ID:</div>
                            <input
                                type="text"
                                value={searchId2}
                                onChange={(e) => setSearchId2(e.target.value)}
                            />
                            <button onClick={handleSearchClick2}>Pesquisar</button>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Benchmarking