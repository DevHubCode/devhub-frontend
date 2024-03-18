import React, { useState, useEffect } from "react";

import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg";
import arrowLeft from '../html-css-template/imagens/arrow-left (2).svg';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import "../html-css-template/css/especialidades.css";
import "../html-css-template/css/novaimagem.css";
import api from "../api";

function Especialidades() {
    const [selectedFileName, setSelectedFileName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fileInput = document.getElementById("file");
        fileInput.addEventListener("change", handleFileChange);

        return () => {
            fileInput.removeEventListener("change", handleFileChange);
        };
    }, []);

    const handleFileChange = () => {
        const fileInput = document.getElementById("file");
        const file = fileInput.files[0];

        if (file) {
            const fileName = file.name;
            setSelectedFileName(`Arquivo selecionado: ${fileName}`);
            setSelectedFile(file);

            const imageUrl = URL.createObjectURL(file);
            setImageUrl(imageUrl);
        }
    };

    const cadastrar = async () => {
        const id = sessionStorage.getItem("id");
        try {
            if (!selectedFile) {
                Swal.fire({
                    title: "Selecione uma imagem",
                    icon: "error",
                });
                return;
            }

            const formData = new FormData();
            formData.append("image", selectedFile);

            console.log(formData)
            let role = sessionStorage.getItem("role");
            
            role = role.toLocaleLowerCase().concat("s")
            await api.patch(`/${role}/foto/${id}`, formData);
            
            const newImage = await api.get(`/${role}/${id}`)
            sessionStorage.setItem("imagem", newImage)

            Swal.fire({
                title: "imagem registrada com sucesso!",
                icon: "success",
            });

            // Redirecione ou faça outra ação após o sucesso do cadastro
            navigate("/publicacoes");
        } catch (error) {
            console.error("Erro no cadastro:", error);
            Swal.fire({
                title: "Erro no cadastro",
                text: "Ocorreu um erro ao cadastrar. Tente novamente.",
                icon: "error",
            });
        }
    };

    function voltar(){
        const id = sessionStorage.getItem("id")
        window.location.href = `/profileCrud/${id}`
    }

    return (
        <>
            <div className="body-login">
                <div className="block-1">
                <div className="freela-back">
                        <div className="freela-icon-back">
                            <img src={arrowLeft} alt="" width="20px" />
                        </div>
                        <div className="freela-text-back" onClick={voltar}>Voltar</div>
                    </div>
                    <div className="frase">Proporcionando encontros entre demanda e competência.</div>
                    <div className="logo">
                        <img src={logoDevhubBranco} alt="loogo DevHub" />
                    </div>
                    <div className="sloganX">
                        &copy; 2023 ; todos os direitos reservados By DevHub Enterprise
                    </div>
                </div>

                <div className="block-2">
                    <div className="block-inputs">
                        <div className="text-especialidades-tittle">Atualize sua imagem de perfil</div>
                        <div className="inputs-especialidades">
                            <div className="file-input">
                                <label htmlFor="file">Escolher arquivo</label>
                                <input type="file" id="file" />
                            </div>

                            <div className="file-name" style={{ height: "30px" }}>{selectedFileName}</div>

                            {selectedFile && (
                                <div className="image-preview">
                                    <img src={imageUrl} alt="Imagem selecionada" style={{ width: '50px', height: '50px' }} />
                                </div>
                            )}
                        </div>
                        <div className="button-especialidades">
                            <button onClick={cadastrar}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Especialidades;
