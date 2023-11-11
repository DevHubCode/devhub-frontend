import React from "react";
import ReactDOM from 'react-dom/client';
import setaEsquerda from "../html-css-template/imagens/arrow-left.svg"
import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg"
import api from "../api.js"
import Swal from "sweetalert2";

function Login() {
    function entrar() {
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
                        <div className="text-login-tittle">Entrar</div>
                        <div className="inputs-login">
                            <input type="text" useState="email" id="email" placeholder="Email" />
                            <input type="password" useState="senha" id="senha" placeholder="Senha" />
                        </div>
                        <div className="not_cadastro">
                            Não tem cadastro ? <a href="./cadastro">Cadastre-se já</a>!
                        </div>
                        <div className="button-login">
                            <button onClick={entrar}>Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Login;
