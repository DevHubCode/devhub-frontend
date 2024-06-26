import React, { useState, useEffect } from 'react'
import logoDevhub from '../html-css-template/imagens/logo-devhub-grey.png';
import warningSVG from '../html-css-template/imagens/Group 108.svg';
import linkedinLogo from '../html-css-template/imagens/LInkdln-logo.svg'
import githubLogo from '../html-css-template/imagens/github-logo.svg'
import star from '../html-css-template/imagens/icon-star.png';
import search from '../html-css-template/imagens/serch-bench.png'
import arrowLeft from '../html-css-template/imagens/arrow-left (2).svg';
import { useNavigate } from 'react-router-dom';
import '../html-css-template/css/benchmarking.css'
import api from '../api';
import Select from 'react-select';

import ModalHome from '../ModalJsx/ModalHome';

function Benchmarking() {

    const [showDevCard, setShowDevCard] = useState(false);
    const [foundDev, setFoundDev] = useState(null);
    const [imagemUrl, setImagemUrl] = useState(null);
    const [segundaPesquisa, setSegundaPesquisa] = useState(true);
    const [seniorityColor, setSeniorityColor] = useState('');
    const [seniorityColor2, setSeniorityColor2] = useState('');

    const [showDevCard2, setShowDevCard2] = useState(false);
    const [foundDev2, setFoundDev2] = useState(null);

    const [modalHomeOpen, setModalHomeOpen] = useState(false);

    const openModalHome = () => {
        setModalHomeOpen(true);
    };

    const closeModalHome = () => {
        setModalHomeOpen(false);
    };

    const navigate = useNavigate();


    const fetchDeveloperById = async (developerId) => {
        try {
            const response = await api.get(`/freelancers/${developerId}`);
            return response.data;
        } catch (error) {
            console.error(`Erro ao buscar desenvolvedor: ${developerId}`);
            return null;
        }
    }


    const handleSearchClick = async (id) => {
        try {
            const devFound = await fetchDeveloperById(id);

            if (devFound) {
                console.log('Desenvolvedor encontrado: ', devFound);
                setFoundDev(devFound);
                setShowDevCard(true);
                setSegundaPesquisa(false);

                setSeniorityColor(getSeniorityColor(devFound));
            } else {
                console.log('Desenvolvedor não encontrado');
                setFoundDev(null);
                setShowDevCard(false);
            }
        } catch (error) {
            console.error('Erro ao buscar desenvolvedor:', error);
        }
    };

    const handleSearchClick2 = async (id) => {
        try {
            const devFound2 = await fetchDeveloperById(id);

            if (devFound2) {
                console.log('2o Desenvolvedor encontrado : ', devFound2);
                setFoundDev2(devFound2);
                setShowDevCard2(true);

                setSeniorityColor2(getSeniorityColor(devFound2));
            } else {
                console.log('2o Desenvolvedor NÃO encontrado!!');
                setFoundDev2(null);
                setShowDevCard2(false);
            }
        } catch (error) {
            console.error('Erro ao buscar desenvolvedor:', error);
        }
    };


    const handleContactLink2 = async () => {

        const id = document.getElementById("botao2")

        console.log(id.value)

        navigate(`/profile/${id.value}`);
    }

    const handleContactLink = async () => {

        const id = document.getElementById("botao")

        console.log(id.value)

        navigate(`/profile/${id.value}`);


        try {
            const selectedDev = null

            if (foundDev && foundDev.id) {
                console.log('1o Dev foi escolhido: >>', foundDev);
                selectedDev = await fetchDeveloperById(foundDev.id);
            } else if (foundDev2 && foundDev2.id) {
                console.log('2o Dev foi o escolhido: >>', foundDev2);
                selectedDev = await fetchDeveloperById(foundDev2.id);
            } else {
                console.log('Nenhum desenvolvedor encontrado para contato.');
                return;
            }

            if (selectedDev) {
                console.log('Redirecionando para o perfil do desenvolvedor:', selectedDev);
                navigate(`/freelancers/${selectedDev.id}`);
                console.log(selectedDev)
            } else {
                console.log('Desenvolvedor não encontrado para contato.');
            }
        } catch (error) {
            console.error('Erro ao buscar desenvolvedor para contato:', error);
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

    function voltar() {
        window.location.href = "/home"
    }

    const renderImageFromBytes = (bytes) => {
        if (bytes) {
            const binaryString = atob(bytes);
            const byteArray = new Uint8Array(binaryString.length);

            for (let i = 0; i < binaryString.length; i++) {
                byteArray[i] = binaryString.charCodeAt(i);
            }

            const blob = new Blob([byteArray], { type: 'image/**' });
            const url = URL.createObjectURL(blob);

            return url;
        }
    }

    const getSeniorityColor = (devFound) => {
        switch (devFound.senioridade) {
            case "Pleno":
                return 'pleno-color';
            case "Senior":
                return 'senior-color';
            case "Junior":
                return 'junior-color';
            default:
                return '';
        }
    };

    function arrumarNota(nota) {
        if (nota == null) {
            return "5.00";
        } else {
            const avaliacao = parseFloat(nota).toFixed(2);
            return avaliacao;
        }
    }

    const getOptionLabel = (option) => {
        if (option.isDisabled) {
          return (
            <div style={{ opacity: 1, color: 'black', background: 'transparent'}}>
              {option.label}
            </div>
          );
        }
        return option.label;
      };
    
    function limpar (){
        setShowDevCard(false)
        setShowDevCard2(false)
        setSegundaPesquisa(true)
    }

    function publicacoes (){
        navigate("/publicacoes")
    }

    return (
        <>
            <div className="bench-header">
                <div className="bench-navbar">

                    <div className="freela-back">
                        <div className="freela-icon-back">
                            <img src={arrowLeft} alt="" width="20px" />
                        </div>
                        <div className="freela-text-back" onClick={voltar}>Voltar</div>
                    </div>

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
                        <div className="bench-search-tittle">Benchmarking</div>

                    </div>

                    <div className="bench-sub-menu-section">
                        <button onClick={limpar} className="bench-icon1">Limpar</button>
                        <button onClick={publicacoes} className="bench-icon2">Publicações</button>
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
                                            <img src={renderImageFromBytes(foundDev.imagem)} width="100%" alt="" />
                                        </div>
                                    </div>
                                    <div className="bench-infos-dev">
                                        <div className="bench-name">{foundDev.nome}</div>
                                        <div className="bench-function">{foundDev.funcao}</div>
                                        <div className="bench-box-about">
                                            <div className="bench-tittle-about">Sobre mim:</div>
                                            <div className="bench-text-about">{foundDev.descricao}</div>
                                            <Select className='select-especialidades'
                                                    options={foundDev.especialidades.map(especialidade => ({
                                                        value: especialidade.descricao,
                                                        label: especialidade.descricao,
                                                        isDisabled: true,
                                                    }))}
                                                    getOptionLabel={getOptionLabel}
                                                    placeholder="Especialidades"
                                                />
                                        </div>
                                    </div>
                                </div>
                                <div className="bench-box2">
                                    <div className="bench-box-price">
                                        <div className="bench-tittle-price">Valor por hora: </div>
                                        <div className="bench-price-value">R$ {foundDev.valorHora}</div>
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
                                            {arrumarNota(foundDev.nota)}
                                            </div>

                                        </div>
                                        <button value={foundDev.id} id='botao' onClick={() => handleContactLink(foundDev)}>Contactar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={`bench-color-level-dev ${seniorityColor}`}></div>
                        </div>
                    ) : (
                        <div  onClick={openModalHome} className="bench-card-dev-search">
                            <img src={search} alt="" />
                            <div className="bench-input-tittle">Selecione um user</div>
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
                                            <img src={renderImageFromBytes(foundDev2.imagem)} width="100%" alt="" />
                                        </div>
                                    </div>
                                    <div className="bench-infos-dev">
                                        <div className="bench-name">{foundDev2.nome}</div>
                                        <div className="bench-function">{foundDev2.funcao}</div>
                                        <div className="bench-box-about">
                                            <div className="bench-tittle-about">Sobre mim:</div>
                                            <div className="bench-text-about">{foundDev2.descricao}</div>
                                            <Select className='select-especialidades'
                                                    options={foundDev2.especialidades.map(especialidade => ({
                                                        value: especialidade.descricao,
                                                        label: especialidade.descricao,
                                                        isDisabled: true,
                                                    }))}
                                                    getOptionLabel={getOptionLabel}
                                                    placeholder="Especialidades"
                                                />
                                        </div>
                                    </div>
                                </div>
                                <div className="bench-box2">
                                    <div className="bench-box-price">
                                        <div className="bench-tittle-price">Valor por hora: </div>
                                        <div className="bench-price-value">R$ {foundDev2.valorHora}</div>
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
                                            {arrumarNota(foundDev2.nota)}
                                            </div>

                                        </div>

                                        <button value={foundDev2.id} id='botao2' onClick={() => handleContactLink2(foundDev2)}>Contactar</button>

                                    </div>
                                </div>
                            </div>
                            <div className={`bench-color-level-dev ${seniorityColor2}`}></div>
                        </div>
                    ) : (
                        <div onClick={openModalHome} className="bench-card-dev-search">
                            <img src={search} alt="" />
                            <div className="bench-input-tittle">Selecione um user</div>
                        </div>
                    )}
                </div>

            </div>
            {modalHomeOpen && <ModalHome isOpen={modalHomeOpen} onClose={closeModalHome} onSearchClick={segundaPesquisa ? handleSearchClick : handleSearchClick2}/>}
        </>
    )
}

export default Benchmarking