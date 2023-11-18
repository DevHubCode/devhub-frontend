import React from "react";
import setaEsquerda from "../html-css-template/imagens/arrow-left.svg";
import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg";
import api from "../api.js";
import Swal from "sweetalert2";
import { useState, useEffect } from 'react';
import Select from 'react-select';

function Especialidades() {
    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [termoPesquisa1, setTermoPesquisa1] = useState('');
    const [termoPesquisa2, setTermoPesquisa2] = useState('');
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/especialidades/filtrar?termoPesquisa=${termoPesquisa}`);
                let resposta = response.data
                setResultados(response.data);
            } catch (error) {
                console.error('Erro ao obter dados:', error);
            }
        };

        fetchData();
    }, [termoPesquisa]);


    function Cadastrar() {
        const iemail = document.getElementById("email");
        const isenha = document.getElementById("senha");


        console.log(iemail.value)
        console.log(isenha.value)

        if (iemail && isenha && iemail.value && isenha.value) {
            api.post('/login', {
                email: iemail.value,
                senha: isenha.value
            })
                .then(response => {
                    // Lida com a resposta do servidor após um login bem-sucedido
                    console.log(response.data);
                    Swal.fire({
                        title: "Logando!",
                        text: "Usuário encontrado, clique em ok para proseguir",
                        icon: "success"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            sessionStorage.setItem("id", response.data.id)
                            sessionStorage.setItem("nome", response.data.nome)
                            sessionStorage.setItem("email", response.data.email)
                            sessionStorage.setItem("token", response.data.token)
                            window.location.href = '/logout';
                            console.log("O usuário clicou em OK!");
                        }
                    });

                }).catch(error => {
                    Swal.fire({
                        title: "Usuário não encontrado",
                        text: "Verifique se os dados estão corretos!",
                        icon: "error"
                    });

                });
        } else {
            console.log("Campos de email e senha devem ser preenchidos");
        }
    }

    return (
        <>
            <div className="body-login">
                <div className="block-1">
                    <div className="voltar">
                        <img src={setaEsquerda} alt="seta" />
                        Inicio
                    </div>
                    <div className="frase">Proporcionando encontros entre demanda e competência.</div>
                    <div className="logo">
                        <img src={logoDevhubBranco} alt="loogo DevHub" />
                    </div>
                    <div className="slogan">
                        &copy; 2023 ; todos os direitos reservados By DevHub Enterprise
                    </div>
                </div>

                <div className="block-2">
                    <div className="block-inputs">
                        <div className="text-especialidades-tittle">Escolha suas principais especialidades</div>
                        <div className="inputs-especialidades">
                            <div className="selects-especialidades">
                                <label for="cargos">Especialidades</label>

                                <Select
                                    className="select-especialidades"
                                    type="text"
                                    id="pesquisa"
                                    value={termoPesquisa}
                                    onChange={(e) => setTermoPesquisa(e)}
                                    options={resultados.map((palavra) => ({
                                        value: palavra,
                                        label: palavra
                                    }))}
                                >
                                </Select>
                                <Select
                                    className="select-especialidades"
                                    type="text"
                                    id="pesquisa"
                                    value={termoPesquisa1}
                                    onChange={(e) => setTermoPesquisa1(e)}
                                    options={resultados.map((palavra) => ({
                                        value: palavra,
                                        label: palavra
                                    }))}
                                >
                                </Select>
                                <Select
                                    className="select-especialidades"
                                    type="text"
                                    id="pesquisa"
                                    value={termoPesquisa2}
                                    onChange={(e) => setTermoPesquisa2(e)}
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
