import React from "react";
import setaEsquerda from "../html-css-template/imagens/arrow-left.svg"
import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg"
import api from "../api.js"
import Swal from "sweetalert2";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Cadastrar() {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState("Contratante");
    const [botao, setCadastrar] = useState("Cadastrar");
    const [form, setForm] = useState([]);

    const mudarUsuario = () => {
        const radio = document.getElementById('usuario');


        radio.addEventListener('click', function () {

            if (this.checked) {
                this.checked = false;
            } else {
                this.checked = true;
            }
        });

        if (usuario === "Contratante") {
            setCadastrar("Avançar");
            setUsuario("Freelancer");
        } else {
            setCadastrar("Cadastrar");
            setUsuario("Contratante");
        }
    };

    function avancar() {
        const block3Div = document.querySelector('.block-3');
        const block2Div = document.querySelector('.block-2');
        alert("Entrou");
        block2Div.style.display = 'none';
        block3Div.style.display = 'flex';
        setCadastrar("Cadastrar");
    }


    function onChange(event) {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    }


    function cadastrar() {
        const inome = document.getElementById("nome");
        const iemail = document.getElementById("email");
        const isenha = document.getElementById('senha');
        const itelefone = document.getElementById('telefone');
        const iidentificador = document.getElementById('identificador');


        if (botao === "Avançar") {
            if (iemail && isenha && inome && iidentificador && itelefone && itelefone.value && iidentificador.value && inome.value && iemail.value && isenha.value) {
                avancar();
            }
        } else {
            console.log(iemail.value)
            console.log(isenha.value)
            if (usuario === "Freelancer") {

                const icargo = document.getElementById('cargos');
                const ivalorHora = document.getElementById('valorHora');
                const radioButtons = document.querySelectorAll('input[name="experiencia"]');
                let experienciaSelecionada = "";

                radioButtons.forEach(radioButton => {
                    if (radioButton.checked) {
                        experienciaSelecionada = radioButton.value;
                    }
                });

                if (icargo && ivalorHora && experienciaSelecionada && icargo.value && ivalorHora.value && experienciaSelecionada) {

                    api.post('/freelancers', {
                        nome: form.nome,
                        email: form.email,
                        senha: form.senha,
                        cpf: form.identificador,
                        telefone: form.telefone,
                        funcao: form.cargos,
                        valorHora: form.valorHora,
                        senioridade: form.senerioridade,
                        descricao: form.descricao
                    })
                        .then(response => {
                            // Lida com a resposta do servidor após um login bem-sucedido
                            console.log(response.data);
                            Swal.fire({
                                title: "Cadastrado!",
                                text: "Cadastro efetuado com sucesso, redirecionando para página de especialidades",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 3000
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    sessionStorage.setItem("id", response.data.id)
                                    sessionStorage.setItem("nome", response.data.nome)
                                    sessionStorage.setItem("email", response.data.email)
                                    navigate("/especialidades");
                                }else {
                                    sessionStorage.setItem("id", response.data.id)
                                    sessionStorage.setItem("nome", response.data.nome)
                                    sessionStorage.setItem("email", response.data.email)
                                    navigate("/especialidades");
                                }
                            });
                        }).catch(error => {
                            // Lida com erros, como login inválido
                            Swal.fire({
                                title: "Erro!",
                                text: "Verifique os dados digitados!",
                                icon: "error",
                                confirmButtonText: "OK!"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate("/cadastro");
                                }else {
                                    navigate("/cadastro");
                                }
                            });
                        });
                } else {
                    console.log("Preencha corretamente os seus dados");
                }
            } else {

                if (iemail && isenha && inome && iidentificador && itelefone && itelefone.value && iidentificador.value && inome.value && iemail.value && isenha.value) {
                    api.post('/contratantes', {
                        nome: inome.value,
                        email: iemail.value,
                        senha: isenha.value,
                        cnpj: iidentificador.value,
                        telefone: itelefone.value
                    })
                        .then(response => {
                            // Lida com a resposta do servidor após um login bem-sucedido
                            console.log(response.data);
                            Swal.fire({
                                title: "Cadastrado!",
                                text: "Cadastro efetuado, redirecionando para tela de login",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2000
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    // Redireciona para a página de login somente quando o botão for clicado
                                    window.location.href = '/login';
                                } else {
                                    window.location.href = '/login';
                                }
                            });
                        }).catch(error => {
                            // Lida com erros, como login inválido
                            Swal.fire({
                                title: "Erro!",
                                text: "Verifique os dados digitados!",
                                icon: "error",
                                confirmButtonText: "OK!"
                            });
                        });
                } else {
                    console.log("Preencha corretamente os seus dados");
                }
            }
        }
    }


    return (
        <>
            <div className="body-cadastro">
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
                        <div className="text-cadastro-tittle">Preencha seus dados pessoais</div>
                        <div className="inputs-cadastro">
                            <input onChange={onChange} type="name" useState="email" id="nome" placeholder="Nome Completo" />
                            <input onChange={onChange} type="email" useState="senha" id="email" placeholder="Email" />
                            <input onChange={onChange} useState="senha" id="telefone" placeholder="Telefone" />
                            <input onChange={onChange} type="password" useState="senha" id="senha" placeholder="Senha" />
                            <input onChange={onChange} useState="senha" id="identificador" placeholder="CPF / CNPJ" />
                        </div>
                        <div className="button-cadastro">
                            <button onClick={cadastrar}>{botao}</button>
                        </div>
                    </div>
                    <div className="alter_user">
                        <label class="switch">
                            <input type="radio" name="toggle" id="usuario" checked />
                            <span onClick={mudarUsuario} class="slider"></span>
                        </label>
                        <div>
                            {usuario}
                        </div>
                    </div>
                </div>
                <div className="block-3">
                    <div className="block-inputs">
                        <div className="text-cadastro-tittle-block3">Preencha seus dados profissionais</div>
                        <div className="inputs-cadastro-block3">
                            <label for="cargos">Cargo</label>
                            <select placeholder="Escolha um cargo" onChange={onChange} id="cargos">
                                <option value="" disabled selected>Escolha um cargo</option>
                                <option value="DESENVOLVEDOR_BACKEND">Desenvolvedor Backend</option>
                                <option value="DESENVOLVEDOR_FRONTEND">Desenvolvedor Frontend</option>
                                <option value="DESENVOLVEDOR_FULLSTACK">Desenvolvedor Fullstack</option>
                                <option value="BANCO_DE_DADOS">Banco de Dados</option>
                                <option value="PRODUCT_OWNER">Product Owner</option>
                                <option value="QUALITY_ASSURANCE">Quality Assurance</option>
                                <option value="WEB_DESIGNER">Web Designer</option>
                            </select>
                            <input onChange={onChange} type="text" id="valorHora" placeholder="Valor por hora(R$)" />
                            Senerioridade
                            <div class="check">
                                <div class="check-input">
                                    <label>
                                        <input onChange={onChange} id="senerioridade" type="radio" name="experiencia" value="Senior" />
                                        Senior
                                    </label>
                                </div>
                                <div class="check-input">
                                    <label>
                                        <input onChange={onChange} id="senerioridade" type="radio" name="experiencia" value="Pleno" />
                                        Pleno
                                    </label>
                                </div>
                                <div class="check-input">
                                    <label>
                                        <input onChange={onChange} id="senerioridade" type="radio" name="experiencia" value="Junior" />
                                        Junior
                                    </label>
                                </div>
                            </div>
                            <form className="input-form" action="">
                                <label htmlFor="descricao">Descrição:</label>
                                <input onChange={onChange} type="text" id="descricao" placeholder="Insira a descrição aqui..." />
                            </form>
                        </div>
                        <div className="button-cadastro">
                            <button onClick={cadastrar}>{botao}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}

export default Cadastrar;