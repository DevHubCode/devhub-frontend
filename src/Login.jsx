import React from "react";
import ReactDOM from 'react-dom/client';
import setaEsquerda from "../src/html-css-template/imagens/arrow-left.svg"
import logoDevhubBranco from "../src/html-css-template/imagens/Group 85.svg"
import api from "./api.js"

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
                alert("Entrando...")
                sessionStorage.setItem("id", response.data.id)
                sessionStorage.setItem("nome", response.data.nome)
                sessionStorage.setItem("email", response.data.email)
                sessionStorage.setItem("token", response.data.token)
                window.location.href = '/logout';
            }).catch(error => {
                // Lida com erros, como login inválido
                alert("erro na API")
                throw error;

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
                            <input type="text" useState="email" id="email" placeholder="Email"/>
                            <input type="password" useState="senha" id="senha"placeholder="Senha"/>
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
