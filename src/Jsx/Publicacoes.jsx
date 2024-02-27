import React from "react";
import ItemFooter from "../components/ItemFooter";
import logoDevhub from '../html-css-template/imagens/logo-devhub-grey.png';

import fotoPerfil from '../html-css-template/imagens/foto-perfil.svg';
import Edificio from "../html-css-template/imagens/image-edficio=devhub.svg";
import arrowLeft from '../html-css-template/imagens/arrow-left (2).svg';
import '../html-css-template/css/publicacoes.css'
import { useState, useEffect } from 'react';
import Comentario from "../components/Comentario";
import api from "../api";
import Swal from "sweetalert2";

function Publicacoes() {

    const [diferenciar, setDiferenciar] = useState("");
    const [imagemUrl, setImagemUrl] = useState(null);
    const [ comentarios, setComentarios ] = useState([]);
    const descricao = document.getElementById("descricao");

    useEffect(() => {
        const role = sessionStorage.getItem("role");
        if (role == "FREELANCER") {
            setDiferenciar("Sair")
        } else {
            setDiferenciar("Voltar")
        }
    }, []);

    useEffect(() => {

        const fetchPublicacoes = async () => {
            try {
                const response = await api.get(`/publicacoes`)
                setComentarios(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Erro ao buscar publicacoes >>: ', error);
            }
        }

        fetchPublicacoes();
    }, [])

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
        const id = sessionStorage.getItem('id');
        const roleUser = sessionStorage.getItem('role');
        console.log(id)
        console.log(roleUser)
        console.log(descricao.value)
        api.post(`/publicacoes/${id}`,{
            descricao: descricao.value,
            role: roleUser,
            id_usuario: id
        } )
        .then(response => {
            // Lida com a resposta do servidor após um login bem-sucedido
            console.log(response.data);
            Swal.fire({
                title: "Publicação efetuada",
                text: "Post concluido",
                icon: "success"
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/publicacoes';
                }
              });
           
        }).catch(error => {
            Swal.fire({
                title: "Usuário não encontrado",
                text: "Verifique se os dados estão corretos!",
                icon: "error"
              });

        });
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
                <input type="textArea" id="descricao" placeholder="O que você está pensando..."></input>
                <button className="publicar-img-icone" onClick={publicar}>Publicar</button>
            </div>
            

            <div className="feed">

                <div className="feed-body">

                {comentarios.map((comentario, index) => (
                    <Comentario
                        key={index}
                        autor={comentario.nome}
                        role={comentario.role}
                        descricao={comentario.descricao}
                        id={comentario.id_usuario}
                        imagemPerfil={renderImageFromBytes(comentario.imagem)}
                    />
                ))}


                </div>
            </div>
            <ItemFooter />
        </>
    )
}
export default Publicacoes;