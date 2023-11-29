import React from "react";
import ItemFooter from "../components/ItemFooter";
import logoDevhub from '../html-css-template/imagens/logo-devhub-grey.png';

import fotoPerfil from '../html-css-template/imagens/foto-perfil.svg';
import Edificio from "../html-css-template/imagens/image-edficio=devhub.svg";
import arrowLeft from '../html-css-template/imagens/arrow-left (2).svg';
import '../html-css-template/css/publicacoes.css'
import { useState, useEffect } from 'react';
import Comentario from "../components/Comentario";

function Publicacoes() {

    const [diferenciar, setDiferenciar] = useState("");
    const [imagemUrl, setImagemUrl] = useState(null);

    useEffect(() => {
        const role = sessionStorage.getItem("role");
        if (role == "FREELANCER") {
            setDiferenciar("Sair")
        } else {
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

    function sairOuVoltar() {
        if (diferenciar == "Sair") {
            window.location.href = "/"
            sessionStorage.clear()
        } else {
            window.location.href = "/home"
        }
    }

    function paginaPerfil() {
        const id = sessionStorage.getItem('id');
        const role = sessionStorage.getItem('role');

        if (role == "FREELANCER") {
            window.location.href = `/profileCrud/${id}`
        } else {
            window.location.href = `/profileCrudContratante/${id}`
        }

    }

    function publicar(){

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
                <div className="publicar-img-icone" onClick={paginaPerfil}><img src={imagemUrl} alt="" width={"60px"} /></div>
                <input type="textArea" placeholder="O que você está pensando..."></input>
                <button className="publicar-img-icone" onClick={publicar}>Publicar</button>
            </div>

            <div className="feed">

                <div className="feed-body">

                    <Comentario />


                </div>
            </div>
            <ItemFooter />
        </>
    )
}
export default Publicacoes;