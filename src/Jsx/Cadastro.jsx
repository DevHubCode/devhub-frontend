import React from "react";
import setaEsquerda from "../html-css-template/imagens/arrow-left.svg"
import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg"
import api from "../api.js"
import Swal from "sweetalert2";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../html-css-template/css/cadastro.css'
import "../html-css-template/css/reset.css"
import BackgroundCover from "../html-css-template/imagens/2.png";

function Cadastrar() {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState("Contratante");
    const [botao, setCadastrar] = useState("Cadastrar");
    const [form, setForm] = useState([]);
    const block3Div = document.querySelector('.cadastro-block-3');
    const block2Div = document.querySelector('.cadastro-block-2');
    const block21Div = document.querySelector('.cadastro-block-21');
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
        block2Div.style.display = 'none';
        block21Div.style.display = 'none';
        block3Div.style.display = 'flex';
        setCadastrar("Cadastrar");
    }


    function block21() {
        if (usuario === "Freelancer"){
            block21Div.style.display = 'flex';
            block2Div.style.display = 'none';
            block3Div.style.display = 'none';
            setCadastrar("Avançar");
        } else {
            block21Div.style.display = 'flex';
            block2Div.style.display = 'none';
            block3Div.style.display = 'none';
            setCadastrar("Cadastrar")
        }
        
    }

    function onChange(event) {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    }
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
                                    sessionStorage.setItem("role", response.data.role)
                                    navigate("/especialidades");
                                } else {
                                    sessionStorage.setItem("id", response.data.id)
                                    sessionStorage.setItem("nome", response.data.nome)
                                    sessionStorage.setItem("email", response.data.email)
                                    sessionStorage.setItem("role", response.data.role)
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
                                    block2Div.style.display = 'flex';
                                    block3Div.style.display = 'none';
                                } else {
                                    navigate("/cadastro");
                                    block2Div.style.display = 'flex';
                                    block3Div.style.display = 'none';
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
                                text: "Cadastro efetuado, redirecionando para imagens",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2000
                            }).then((result) => {
                                if (result) {
                                    // Redireciona para a página de login somente quando o botão for clicado
                                    sessionStorage.setItem("id", response.data.id)
                                    sessionStorage.setItem("nome", response.data.nome)
                                    sessionStorage.setItem("email", response.data.email)
                                    sessionStorage.setItem("role", response.data.role)
                                    window.location.href = '/imagem';
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

    function inicio(){
        window.location.href = '/';
    }


    return (
        <>
            <div className="cadastro-body-cadastro" style={myStyle}>
                <div className="cadastro-block-1">
                <div className="cadastro-voltar" onClick={inicio}>
                        <img src={setaEsquerda} alt="seta"/>
                        <div className="cadastro-text-voltar">Inicio</div>
                    </div>
                    <div className="cadastro-frase">Proporcionando encontros entre <div >demanda e competência.</div></div>
                    <div className="cadastro-logo">
                        <img src={logoDevhubBranco} alt="loogo DevHub" />
                    </div>
                    <div className="cadastro-sloganX">
                        &copy; 2023 ; todos os direitos reservados By DevHub Enterprise
                    </div>
                </div>

                <div className="cadastro-block-2">
                    <div className="cadastro-block-inputs">
                        <div className="cadastro-text-cadastro-tittle">Preencha seus dados</div>
                        <div className="cadastro-inputs-cadastro">
                            <input onChange={onChange} type="name" useState="email" id="nome" placeholder="Nome Completo" />
                        
                            <input onChange={onChange} useState="senha" id="telefone" placeholder="Telefone" /> 
                          
                            <input onChange={onChange} useState="senha" id="identificador" placeholder="CPF / CNPJ" />
                        </div>
                        <div className="cadastro-button-cadastro">
                            <button onClick={block21}>{botao}</button>
                            <div class="espacamento"></div>
                        </div>
                    </div>
                    <div className="cadastro-alter_user">
                        <label class="cadastro-switch">
                            <input type="radio" name="toggle" id="usuario" checked />
                            <span onClick={mudarUsuario} class="cadastro-slider"></span>
                        </label>
                        <div class="contratante-freela-slider-text">
                            {usuario}
                        </div>
                    </div>
                </div>
                <div className="cadastro-block-21">
                    <div className="cadastro-block-inputs">
                        <div className="cadastro-text-cadastro-tittle">Preencha seus Dados</div>
                        <div className="cadastro-inputs-cadastro-1">
                           
                            <input onChange={onChange} type="email" useState="senha" id="email" placeholder="Email" />
                            
                            <input onChange={onChange} type="password" useState="senha" id="senha" placeholder="Senha" />
                         
                        </div>
                        <div className="cadastro-button-cadastro">
                            <button onClick={cadastrar}>{botao}</button>
                            <div class="espacamento"></div>
                        </div>
                    </div>
                   
                </div>
                <div className="cadastro-block-3">
                    <div className="cadastro-block-inputs">
                        <div className="cadastro-text-cadastro-tittle-block3">Preencha seus dados profissionais</div>
                        <div className="cadastro-inputs-cadastro-block3">
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
                            Sênioridade
                            <div class="cadastro-check">
                                <div class="cadastro-check-input">
                                    <label>
                                        <input onChange={onChange} id="senerioridade" type="radio" name="experiencia" value="Senior" />
                                        Senior
                                    </label>
                                </div>
                                <div class="cadastro-check-input">
                                    <label>
                                        <input onChange={onChange} id="senerioridade" type="radio" name="experiencia" value="Pleno" />
                                        Pleno
                                    </label>
                                </div>
                                <div class="cadastro-check-input">
                                    <label>
                                        <input onChange={onChange} id="senerioridade" type="radio" name="experiencia" value="Junior" />
                                        Junior
                                    </label>
                                </div>
                            </div>
                            <form className="cadastro-input-form" action="">
                                <label htmlFor="descricao">Descrição:</label>
                                <textarea onChange={onChange} type="text" id="descricao" placeholder="Insira a descrição aqui..." />
                            </form>
                        </div>
                        <div className="cadastro-button-cadastro">
                            <button onClick={cadastrar}>{botao}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}

export default Cadastrar;