import React, { useState, useEffect } from 'react';
import { freelancers } from '../Data';
import menuIcon1 from '../html-css-template/imagens/icon-menu.svg';
import menuIcon from '../html-css-template/imagens/icon-menu (2).svg';
import logoDevhub from '../html-css-template/imagens/logo-devhub-grey.png';
import fotoPerfil from '../html-css-template/imagens/foto-perfil.svg';
import warningSVG from '../html-css-template/imagens/Group 108.svg';
import star from '../html-css-template/imagens/icon-star.png';
import ItemFooter from '../components/ItemFooter';
import { Link } from 'react-router-dom'


import api from '../api';

import '../html-css-template/css/home.css'

function Home() {

    const [ searchDev, setSearchDev ] = useState('');

    const [freelancers, setFreelancers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imagemUrl, setImagemUrl] = useState(null);

    useEffect(() => {
        // Função assincrona para buscar os freelancers na API

        const fetchFreelancers = async () => {
            try {
                const response = await api.get(`/freelancers`)
                setFreelancers(response.data);
                setLoading(false);
                console.log(freelancers)
            } catch (error) {
                console.error('Erro ao buscar freelancer >>: ', error);
                setLoading(false)
            }
        }

        fetchFreelancers();
    }, [])

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

    console.log(freelancers);

    const filteredDevs = freelancers.filter((freelancer) => {
        const searchTermLower = searchDev.toLowerCase();
    
        return Object.values(freelancer).some((value) => {
            if (typeof value === 'string') {
                return value.toLowerCase().includes(searchTermLower);
            } else if (Array.isArray(value)) {
                return value.some((item) =>
                    typeof item === 'object' && item.descricao.toLowerCase().includes(searchTermLower)
                );
            } else {
                return false;
            }
        });
    });
    
    

    // const filteredDevs = freelancers.filter((freelancer) => {
    //     const searchTermLower = searchDev.toLowerCase();

    //     return (
    //         freelancer.nome.toLowerCase().includes(searchTermLower) ||
    //         freelancer.id.toString().includes(searchTermLower) ||
    //         freelancer.especialidades.some(
    //         (especialidade) =>
    //             especialidade.descricao.toLowerCase().includes(searchTermLower)
    //         )
    //     );
    // });
    
    const getSeniorityColor = (freelancer) => {
        switch (freelancer) {
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
    }}
    
    function sair(){
        window.location.href = "/";
        sessionStorage.clear();
    }

    function arrumarNota(nota) {
        if (nota == null) {
            return 5.00;
        } else {
            const avaliacao = parseFloat(nota).toFixed(2);
            return avaliacao;
        }
    }

    function publicacoes(){
        window.location.href = "/publicacoes"
    }

    function beanchinmark(){
        window.location.href = "/benchmarking"
    }
    
    function profileFreelancer(){
        const id = sessionStorage.getItem("id")

        window.location.href = `/profileCrudContratante/${id}`
    }
    const menuHome = document.querySelector('.menu-home');
  
    
    function abrirMenu() {
        menuHome.style.display = 'block'; // Unhide the menu
    }
    
    function fecharMenu() {
        menuHome.style.display = 'none'; // Hide the menu
    }

    function profile(freelancerId){

        console.log(freelancerId);

        // window.location.href = `/profile/${id.value}`
        window.location.href = `/profile/${freelancerId}`
    }

    return (
        <>
            <div className="home-header">
                <div className="home-navbar">
                    <div className="home-back">
                        <div className="home-icon-menu" >
                            <img src={menuIcon1} alt="" width="40px" onClick={abrirMenu}/>
                            <div className='menu-home' style={{display: "none"}}>
                            <img src={menuIcon} alt="" width="40px" onClick={fecharMenu}/>
                                <div className='textjk'  onClick={sair}> Sair</div>
                                <div className='textjk'> Desativar Conta</div>
                            </div>
                        </div>

                    </div>

                    <div className="home-logo-devhub">
                        <img src={logoDevhub} alt="" width="230px" />
                    </div>

                    <div className="home-img-profile">
                        <img onClick={profileFreelancer} src={imagemUrl} width="35px" />
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
                        <div className="home-icon1" onClick={beanchinmark}>Benchmarking</div>
                        <div className="home-icon2">Todos</div>
                        <div className="home-icon2" onClick={publicacoes}>Publicações</div>
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
                                <div className="home-yyyy"> 5-9 Anos</div>
                            </div>
                        </div>

                        <div className="home-level-dev-icons">
                            <div className="home-color-level-dev3"></div>

                            <div className="home-text-level-dev">
                                <div className="home-name-level-dev">Dev Junior</div>
                                <div className="home-yyyy"> 1-4 Ano(s)</div>
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
                { 
                loading ? (
                    <div>Carregando...</div>
                ) :                    
                filteredDevs.length > 0 ? (
                    filteredDevs.map((freelancer) => {

                        const seniorityColorClass = getSeniorityColor(freelancer.senioridade)

                        const firstName = freelancer.nome.split(' ')[0];

                        const freelancerNota = arrumarNota(freelancer.nota);

                        const decodedImage = atob(freelancer.imagem);

                        return (
                            <div className="home-box-freelancer" value={freelancer.id} id='freela' onClick={()=> profile(freelancer.id)}
                            data-freelancer-id={freelancer.id}
                             key={freelancer.id_freelancer}
                             >
                                <div className="home-image-freelancer" style={{backgroundImage: `url(${renderImageFromBytes(freelancer.imagem)})`}}>
    
                                    <div className="home-score-freelancer">
    
                                        <div className="home-box-icon-star" >
                                            <img src={star} alt="" width="100%" />
                                        </div>
                                        <div className="home-box-score-number">
                                            {freelancerNota}
                                        </div>
    
                                    </div>
                                </div>
                                <div className="home-box-information">
                                    <div className={`home-box-classification ${seniorityColorClass}`}>
    
                                    </div>
                                    <div className="home-box-aux">
                                        <div className="home-box-name-age">
                                            {firstName}
                                        </div>
                                        <div className="home-box-price">
                                            R$ {freelancer.valorHora}
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

            <ItemFooter/>
        </>
    )
}

export default Home;