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

const ModalHome = ({ isOpen, onClose, onSearchClick }) => {

    const [searchDev, setSearchDev] = useState('');

    const [freelancers, setFreelancers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imagemUrl, setImagemUrl] = useState(null);

    useEffect(() => {

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

    const filteredDevs = freelancers.filter((freelancer) => {
        const searchTermLower = searchDev.toLowerCase();

        return (
            freelancer.nome.toLowerCase().includes(searchTermLower) ||
            freelancer.funcao.toLowerCase().includes(searchTermLower) ||
            freelancer.senioridade.toLowerCase().includes(searchTermLower) ||
            freelancer.especialidades.some(
                (especialidade) =>
                    especialidade.descricao.toLowerCase().includes(searchTermLower)
            )
        );
    });

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
        }
    }

    function arrumarNota(nota) {
        if (nota == null) {
            return "5.00";
        } else {
            const avaliacao = parseFloat(nota).toFixed(2);
            return avaliacao;
        }
    }

    const mostrarFreela = async (freelancerId) => {
        if (freelancerId) {
            console.log('Desenvolvedor encontrado: ', freelancerId);
            onSearchClick(freelancerId);
            onClose(true)
        } else {
            console.log('Desenvolvedor não encontrado');
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-container-modal">
                <div className="modal-content-modal">
                <span className="close-button-modal" onClick={onClose}>&times;</span>
                    <div className="home-header-modal">
                        <div className="home-box-menu">
                            <div className="home-search">
                                <div className="home-search-title">Encontre seu Freela</div>
                                <div className="home-search-input">
                                    <input
                                        type="text"
                                        value={searchDev}
                                        onChange={(e) => setSearchDev(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="home-infos-home-modal">
                            <div className="home-level-dev-modal">
                                <div className="home-level-dev-icons">
                                    <div className="home-color-level-dev1"></div>
                                    <div className="home-text-level-dev">
                                        <div className="home-name-level-dev">Dev Senior</div>
                                        <div className="home-yyyy">10 Anos</div>
                                    </div>
                                </div>
                                <div className="home-level-dev-icons">
                                    <div className="home-color-level-dev2"></div>
                                    <div className="home-text-level-dev">
                                        <div className="home-name-level-dev">Dev Pleno</div>
                                        <div className="home-yyyy">5-9 Anos</div>
                                    </div>
                                </div>
                                <div className="home-level-dev-icons">
                                    <div className="home-color-level-dev3"></div>
                                    <div className="home-text-level-dev">
                                        <div className="home-name-level-dev">Dev Junior</div>
                                        <div className="home-yyyy">1-4 Ano(s)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-info-values">
                                <div className="home-icon-info-value">
                                    <img src={warningSVG} alt="" />
                                </div>
                                <div className="home-text-info-values">
                                    Todos os valores de prestação de serviços abaixo são referentes à hora de trabalho do freelancer.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-header-icons-modal">
                        {loading ? (
                            <div>Carregando...</div>
                        ) : filteredDevs.length > 0 ? (
                            filteredDevs.map((freelancer) => {
                                const seniorityColorClass = getSeniorityColor(freelancer.senioridade)
                                const firstName = freelancer.nome.split(' ')[0];
                                const freelancerNota = arrumarNota(freelancer.nota);

                                return (
                                    <div
                                        className="home-box-freelancer-modal"
                                        value={freelancer.id}
                                        id='freela'
                                        onClick={() => mostrarFreela(freelancer.id)}
                                        data-freelancer-id={freelancer.id}
                                        key={freelancer.id_freelancer}
                                    >
                                        <div
                                            className="home-image-freelancer-modal"
                                            style={{ backgroundImage: `url(${renderImageFromBytes(freelancer.imagem)})` }}
                                        >
                                            <div className="home-score-freelancer">
                                                <div className="home-box-icon-star">
                                                    <img src={star} alt="" width="100%" />
                                                </div>
                                                <div className="home-box-score-number">
                                                    {freelancerNota}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-box-information">
                                            <div className={`home-box-classification ${seniorityColorClass}`}></div>
                                            <div className="home-box-aux">
                                                <div className="home-box-name-age">{firstName}</div>
                                                <div className="home-box-price">R$ {freelancer.valorHora}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <div className="home-no-results-message">Nenhum desenvolvedor encontrado.</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalHome;