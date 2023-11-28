import React from "react";
import ItemFooter from "../components/ItemFooter";
import logoDevhub from '../html-css-template/imagens/logo-devhub-grey.png';

import fotoPerfil from '../html-css-template/imagens/foto-perfil.svg';
import Edificio from "../html-css-template/imagens/image-edficio=devhub.svg";
import arrowLeft from '../html-css-template/imagens/arrow-left (2).svg';
import '../html-css-template/css/publicacoes.css'
import { useState, useEffect } from 'react';


function Publicacoes() {
    
    const [diferenciar, setDiferenciar] = useState("");
    const [imagemUrl, setImagemUrl] = useState(null);

    useEffect(() => {
        const role = sessionStorage.getItem("role");
        if(role == "FREELANCER"){
            setDiferenciar("Sair")
        }else{
            setDiferenciar("Voltar")
        }
    }, []);

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

    function sairOuVoltar(){
        if(diferenciar == "Sair"){
            window.location.href = "/"
            sessionStorage.clear()
        }else{
            window.location.href = "/home"
        }
    }

    function paginaPerfil(){
        const id = sessionStorage.getItem('id');

        window.location.href = `/profile/${id}`
    }


    return (
        <>
 <div className="publi-header">
                <div className="publi-navbar">
                <div className="freela-back">
                        <div className="freela-icon-back">
                            <img src={arrowLeft} alt="" width="20px" />
                        </div>
                        <div className="freela-text-back" onClick={sairOuVoltar}>{diferenciar}</div>
                    </div>

                    <div className="publi-logo-devhub">
                        <img src={logoDevhub} alt="" width="150px" />
                    </div>

                    <div className="publi-img-profile">
                        
                    </div>
                </div>
             
                </div>
                <div className="publicar">
                   <div className="publicar-img-icone" onClick={paginaPerfil}><img src={imagemUrl} alt="" width={"60px"}/></div>
                   <input type="textArea" placeholder="O que você está pensando..."></input>
                   <button className="publicar-img-icone">Publicar</button>
                </div>

                <div className="feed">
                 
                    <div className="feed-body">
                       
                        <div className="post-item">
                            <div className="post-user-infos">
                                <div className="imagem-feed">
                                    <img src={fotoPerfil} alt="" width={"80px"}/>
                                </div>
                                <div className="feed-name-function">
                                  <div className="feed-name">João Felipe</div>
                                  <div className="feed-function"> Analista de Projetos</div>
                                </div>
                                </div>
                                <div className="text-feed">
                                  
A EZLIV é uma empresa de Tecnologia da Informação (TI) dedicada à gestão de condomínios. Com uma abordagem centrada no cliente, nossa plataforma personalizada oferece soluções para simplificar a administração, melhorar a comunicação e otimizar a manutenção. Nosso compromisso com a qualidade e segurança é primordial, garantindo a proteção de dados e a integridade das informações.
Nossa plataforma é flexível, adaptando-se às necessidades específicas de cada condomínio. Oferecemos uma experiência sem atritos para síndicos, condôminos e fornecedores, permitindo a colaboração em tempo real. Estamos empenhados em melhorar a qualidade de vida nos condomínios, promovendo um ambiente seguro e harmonioso.
                                </div>
                        </div>
                      
                        <div className="post-item">
                            <div className="post-user-infos">
                                <div className="imagem-feed">
                                    <img src={fotoPerfil} alt="" width={"80px"}/>
                                </div>
                                <div className="feed-name-function">
                                  <div className="feed-name">João Felipe</div>
                                  <div className="feed-function"> Analista de Projetos</div>
                                </div>
                                </div>
                                <div className="text-feed">
                                  
A EZLIV é uma empresa de Tecnologia da Informação (TI) dedicada à gestão de condomínios. Com uma abordagem centrada no cliente, nossa plataforma personalizada oferece soluções para simplificar a administração, melhorar a comunicação e otimizar a manutenção. Nosso compromisso com a qualidade e segurança é primordial, garantindo a proteção de dados e a integridade das informações.
Nossa plataforma é flexível, adaptando-se às necessidades específicas de cada condomínio. Oferecemos uma experiência sem atritos para síndicos, condôminos e fornecedores, permitindo a colaboração em tempo real. Estamos empenhados em melhorar a qualidade de vida nos condomínios, promovendo um ambiente seguro e harmonioso.
                                </div>
                        </div>
                        <div className="post-item">
                            <div className="post-user-infos">
                                <div className="imagem-feed">
                                    <img src={fotoPerfil} alt="" width={"80px"}/>
                                </div>
                                <div className="feed-name-function">
                                  <div className="feed-name">João Felipe</div>
                                  <div className="feed-function"> Analista de Projetos</div>
                                </div>
                                </div>
                                <div className="text-feed">
                                  
A EZLIV é uma empresa de Tecnologia da Informação (TI) dedicada à gestão de condomínios. Com uma abordagem centrada no cliente, nossa plataforma personalizada oferece soluções para simplificar a administração, melhorar a comunicação e otimizar a manutenção. Nosso compromisso com a qualidade e segurança é primordial, garantindo a proteção de dados e a integridade das informações.
Nossa plataforma é flexível, adaptando-se às necessidades específicas de cada condomínio. Oferecemos uma experiência sem atritos para síndicos, condôminos e fornecedores, permitindo a colaboração em tempo real. Estamos empenhados em melhorar a qualidade de vida nos condomínios, promovendo um ambiente seguro e harmonioso.
                                </div>
                        </div>

                        
                    </div>
                </div>
<ItemFooter/>
</>
    )
}
export default Publicacoes;