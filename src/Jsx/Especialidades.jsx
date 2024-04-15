import React from "react";
import setaEsquerda from "../html-css-template/imagens/arrow-left.svg";
import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg";
import api from "../api.js";
import Swal from "sweetalert2";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

import '../html-css-template/css/especialidades.css'

function Especialidades() {

    const [termoPesquisa, setTermoPesquisa] = useState([]);

    const navigate = useNavigate();

    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/especialidades/filtrar?termoPesquisa=${termoPesquisa}`);
                setResultados(response.data);
            } catch (error) {
                console.error('Erro ao obter dados:', error);
            }
        };

        fetchData();
    }, [termoPesquisa]);


    function Cadastrar() {
        const id = sessionStorage.getItem("id");

        console.log(id)

        if (termoPesquisa) {
            api.post(`freelancers/${id}/especialidades`, termoPesquisa.map(item => item.value))
                .then(response => {
                    console.log(response.data);
                    Swal.fire({
                        title: "Cadastrado!",
                        text: "Especialidades cadastrada, redirecionando para imagem!",
                        icon: "success"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/imagem');
                        } else {
                            navigate('/imagem');
                        }
                    });
                })
                .catch(error => {
                    console.error(error);
                    Swal.fire({
                        title: "Usuário não encontrado",
                        text: "Verifique se os dados estão corretos!",
                        icon: "error"
                    });
                })
        } else {
            console.log("Campos de email e senha devem ser preenchidos");
        }
    }

    function handlePesquisa(index, data) {
        const pesquisa = [...termoPesquisa]
        pesquisa[index] = data
        setTermoPesquisa(pesquisa)
    }

    return (
        <>
            <div className="body-login">
                <div className="block-1">
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
                        <div className="text-especialidades-tittle-1">Escolha suas especialidades</div>
                        <div className="inputs-especialidades">
                            <div className="selects-especialidades">
                                <label for="cargos"></label>

                                <Select
                                    className="select-especialidades"
                                    type="text"
                                    id="pesquisa"
                                    value={termoPesquisa[0] || ""}
                                    onChange={(e) => handlePesquisa(0, e)}
                                    options={resultados.map((palavra) => ({
                                        value: palavra,
                                        label: palavra
                                    }))}
                                >
                                </Select>
                                <Select
                                    className="select-especialidades"
                                    type="text"
                                    id="pesquisa1"
                                    value={termoPesquisa[1] || ""}
                                    onChange={(e) => handlePesquisa(1, e)}
                                    options={resultados.map((palavra) => ({
                                        value: palavra,
                                        label: palavra
                                    }))}
                                >
                                </Select>
                                <Select
                                    className="select-especialidades"
                                    type="text"
                                    id="pesquisa2"
                                    value={termoPesquisa[2] || ""}
                                    onChange={(e) => handlePesquisa(2, e)}
                                    options={resultados.map((palavra) => ({
                                        value: palavra,
                                        label: palavra
                                    }))}
                                >
                                </Select>

                            </div>
                        </div>
                        <div className="button-especialidades">
                            <button onClick={Cadastrar}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Especialidades;
