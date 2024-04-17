import React, { useState, useEffect } from "react";

import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import BackgroundCover from "../html-css-template/imagens/2.png";
import iconFile from "../html-css-template/imagens/Group 120.png"
import "../html-css-template/css/especialidades.css";
import "../html-css-template/css/novaimagem.css";
import api from "../api";


const myStyle = {
    backgroundImage: `url(${BackgroundCover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
  };

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
            const role = sessionStorage.getItem("role");
            
            if(role === "FREELANCER"){
                const response = await api.patch(`/freelancers/foto/${id}`, formData);
            }else{
                const response = await api.patch(`/contratantes/foto/${id}`, formData);
            }
            

            Swal.fire({
                title: "imagem registrada com sucesso!",
                icon: "success",
            });

            sessionStorage.clear();

            // Redirecione ou faça outra ação após o sucesso do cadastro
            navigate("/login");
        } catch (error) {
            console.error("Erro no cadastro:", error);
            Swal.fire({
                title: "Erro no cadastro",
                text: "Ocorreu um erro ao cadastrar. Tente novamente.",
                icon: "error",
            });
        }
    };

    return (
        <>
            <div className="body-login" style={myStyle}>
                <div className="block-1">
                    <div className="frase-e">Proporcionando encontros entre <div >demanda e competência.</div></div>
                    <div className="logo">
                        <img src={logoDevhubBranco} alt="loogo DevHub" />
                    </div>
                    <div className="sloganX">
                        &copy; 2023 ; todos os direitos reservados By DevHub Enterprise
                    </div>
                </div>

                <div className="block-2">
                    <div className="block-inputs">
                        <div className="text-especialidades-tittle">Selecione uma imagem para o seu perfil</div>
                        <div className="inputs-especialidades-img">
                            <div className="img-file"> 
                            <img src={iconFile} alt="Imagem selecionada" style={{ width: '100px', height: '100px' }} />
                            </div>
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
                        <div className="button-especialidades-img">
                            <button onClick={cadastrar}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Especialidades;
