import React, { useState, useEffect } from 'react'
import logoDevhub from '../html-css-template/imagens/logo-devhub-grey.png';
import fotoPerfil from '../html-css-template/imagens/foto-perfil.svg';
import warningSVG from '../html-css-template/imagens/Group 108.svg';
import linkedinLogo from '../html-css-template/imagens/LInkdln-logo.svg'
import githubLogo from '../html-css-template/imagens/github-logo.svg'
import javaLogo from '../html-css-template/imagens/java-logo.svg'
import springLogo from '../html-css-template/imagens/spring-logo.svg'
import azureLogo from '../html-css-template/imagens/azure-logo.svg'
import star from '../html-css-template/imagens/icon-star.png';
import { Link, useNavigate } from 'react-router-dom';
import '../html-css-template/css/benchmarking.css'

import { freelasComparacao } from '../Data';

function Benchmarking() {

    const [searchId, setSearchId] = useState('');
    const [showDevCard, setShowDevCard] = useState(false);
    const [foundDev, setFoundDev] = useState(null);
    const [imagemUrl, setImagemUrl] = useState(null);

    const [searchId2, setSearchId2] = useState('');
    const [showDevCard2, setShowDevCard2] = useState(false);
    const [foundDev2, setFoundDev2] = useState(null);

    const navigate = useNavigate();

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
            console.log('Desenvolvedor encontrado: ', devFound)
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

    const handleContactLink = () => {
        if (foundDev && foundDev.id) {
            console.log('1o Dev foi escolhido: >>', foundDev);
            navigate(`/profile/${foundDev.id}`);
        } else if (foundDev2 && foundDev2.id) {
            console.log('2o Dev foi o escolhido: >>', foundDev2);
            navigate(`/profile/${foundDev2.id}`);
        } else {
            console.log('Nenhum desenvolvedor encontrado para contato.');
            // Handle the case where no developer is found for contact
        }
    }
    
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
            <div className="bench-header">
                <div className="bench-navbar">

                    <div className="bench-back">
                        <div className="bench-icon-menu"><img src="././assets/icon-menu.svg" alt="" width="40px" /></div>
                    </div>

                    <div className="bench-logo-devhub">
                        <img src={logoDevhub} alt="" width="200px" />
                    </div>
                    <div className="bench-img-profile"><img src={imagemUrl} width="35px" /></div>
                </div>
                <div className="bench-box-menu">
                    <div className="bench-search">
                        <div className="bench-search-tittle">Beanchinmark</div>

                    </div>

                    <div className="bench-sub-menu-section">
                        <button className="bench-icon1">Limpar</button>
                        <button className="bench-icon2">Comparar</button>
                    </div>

                </div>
                <div className="bench-infos-home">
                    <div className="bench-level-dev">
                        <div className="bench-level-dev-icons">
                            <div className="bench-color-level-dev1"></div>

                            <div className="bench-text-level-dev">
                                <div className="bench-name-level-dev">Dev Senior</div>
                                <div className="bench-yyyy"> 10 Anos</div>
                            </div>
                        </div>

                        <div className="bench-level-dev-icons">
                            <div className="bench-color-level-dev2"></div>

                            <div className="bench-text-level-dev">
                                <div className="bench-name-level-dev">Dev Pleno</div>
                                <div className="bench-yyyy"> 10 Anos</div>
                            </div>
                        </div>

                        <div className="bench-level-dev-icons">
                            <div className="bench-color-level-dev3"></div>

                            <div className="bench-text-level-dev">
                                <div className="bench-name-level-dev">Dev Junior</div>
                                <div className="bench-yyyy"> 10 Anos</div>
                            </div>
                        </div>



                    </div>

                    <div className="bench-info-values">
                        <div className="bench-icon-info-value">
                            <img src={warningSVG} alt="" />
                        </div>
                        <div className="bench-text-info-values">Todos os valores de prestação de serviços a baixo são referentes a hora de
                            trabalho do freelancer.</div>

                    </div>


                </div>

            </div>

            <div className="bench-container-bench">

                <div className="bench-box-cdev">

                    {showDevCard ? (
                        <div className="bench-card-dev">
                            <div className="bench-box" key={foundDev.id}>
                                <div className="bench-box1">
                                    <div className="bench-image-free">
                                        <div className="bench-image-ipt">
                                            <img src={foundDev.image} width="100%" alt="" />
                                        </div>
                                    </div>
                                    <div className="bench-infos-dev">
                                        <div className="bench-name">{foundDev.nome}</div>
                                        <div className="bench-function">{foundDev.funcao}d</div>
                                        <div className="bench-box-about">
                                            <div className="bench-tittle-about">Sobre mim:</div>
                                            <div className="bench-text-about">{foundDev.sobre}</div>
                                            <div className="bench-box-tecnos">
                                                <div className="bench-icon-tecno"><img src={javaLogo} alt="" width="35px" />
                                                </div>
                                                <div className="bench-icon-tecno"><img src={springLogo} alt="" width="38px" />
                                                </div>
                                                <div className="bench-icon-tecno"><img src={azureLogo} alt="" width="35px" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bench-box2">
                                    <div className="bench-box-price">
                                        <div className="bench-tittle-price">Valor por hora: </div>
                                        <div className="bench-price-value">{foundDev.preco}</div>
                                    </div>
                                    <div className="bench-links">
                                        <div className="bench-social">
                                            <div className="bench-git-hub-link"> <img src={githubLogo} alt="" width="33px" />
                                            </div>
                                            <div className="bench-linkedln-link"><img src={linkedinLogo} alt="" width="33px" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bench-box-contact">
                                        <div className="bench-score-freelancer">

                                            <div className="bench-box-icon-star">
                                                <img src={star} alt="" width="100%" />
                                            </div>
                                            <div className="bench-box-score-number">
                                                {foundDev.score}
                                            </div>

                                        </div>
                                        <button onClick={() => handleContactLink(foundDev)}>Contactar</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bench-color-level-dev"></div>
                        </div>
                    ) : (
                        <div className="bench-card-dev-search">
                            <div className="bench-input-tittle">Preencha o ID:</div>
                            <input
                                type="text"
                                value={searchId}
                                onChange={(e) => setSearchId(e.target.value)}
                            />
                            <button onClick={handleSearchClick}>Pesquisar</button>
                        </div>
                    )}
                </div>

                <div className="bench-x">x</div>

                <div className="bench-box-cdev">

                    {showDevCard2 ? (
                        <div className="bench-card-dev">
                            <div className="bench-box" key={foundDev2.id}>
                                <div className="bench-box1">
                                    <div className="bench-image-free">
                                        <div className="bench-image-ipt">
                                            <img src={foundDev2.image} width="100%" alt="" />
                                        </div>
                                    </div>
                                    <div className="bench-infos-dev">
                                        <div className="bench-name">{foundDev2.nome}</div>
                                        <div className="bench-function">{foundDev2.funcao}d</div>
                                        <div className="bench-box-about">
                                            <div className="bench-tittle-about">Sobre mim:</div>
                                            <div className="bench-text-about">{foundDev2.sobre}</div>
                                            <div className="bench-box-tecnos">
                                                <div className="bench-icon-tecno"><img src={javaLogo} alt="" width="35px" />
                                                </div>
                                                <div className="bench-icon-tecno"><img src={springLogo} alt="" width="38px" />
                                                </div>
                                                <div className="bench-icon-tecno"><img src={azureLogo} alt="" width="35px" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bench-box2">
                                    <div className="bench-box-price">
                                        <div className="bench-tittle-price">Valor por hora: </div>
                                        <div className="bench-price-value">{foundDev2.preco}</div>
                                    </div>
                                    <div className="bench-links">
                                        <div className="bench-social">
                                            <div className="bench-git-hub-link"> <img src={githubLogo} alt="" width="33px" />
                                            </div>
                                            <div className="bench-linkedln-link"><img src={linkedinLogo} alt="" width="33px" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bench-box-contact">
                                        <div className="bench-score-freelancer">

                                            <div className="bench-box-icon-star">
                                                <img src={star} alt="" width="100%" />
                                            </div>
                                            <div className="bench-box-score-number">
                                                {foundDev2.score}
                                            </div>

                                        </div>
                                        
                                        <button onClick={() => handleContactLink(foundDev2)}>Contactar</button>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="bench-color-level-dev "></div>
                        </div>
                    ) : (
                        <div className="bench-card-dev-search">
                            <div className="bench-input-tittle">Preencha o Segundo ID:</div>
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