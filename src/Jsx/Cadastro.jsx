import React from "react";
import ReactDOM from 'react-dom/client';
import setaEsquerda from "../html-css-template/imagens/arrow-left.svg"
import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg"
import api from "../api.js"
import Swal from "sweetalert2";

function Cadastrar() {

    function cadastrar() {
        const inome = document.getElementById("nome");
        const iemail = document.getElementById("email");
        const isenha = document.getElementById('senha');
        const cnpj = document.getElementById('cnpj')
        const telefone = document.getElementById('telefone')

        console.log(iemail.value)
        console.log(isenha.value)
    
        if (iemail && isenha && iemail.value && isenha.value) {
            api.post('/contratantes', {
                nome: inome.value,
                email: iemail.value,
                senha: isenha.value,
                cnpj: cnpj.value,
                telefone: telefone.value
            })
            .then(response => {
                // Lida com a resposta do servidor após um login bem-sucedido
                console.log(response.data);
                Swal.fire({
                    title: "Cadastrado!",
                    text: "Cadastro efetuado com sucesso, clique no botão",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonText: "Ir para o login"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      // Redireciona para a página de login somente quando o botão for clicado
                      window.location.href = '/login';
                    }
                  });
            }).catch(error => {
                // Lida com erros, como login inválido
                alert("erro na API")
                throw error;

            });
        } else {
            console.log("Preencha corretamente os seus dados");
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
                            <input type="name" useState="email" id="nome" placeholder="Nome Completo"/>
                            <input type="email" useState="senha" id="email" placeholder="Email"/>
                            <input useState="senha" id="telefone" placeholder="Telefone"/>
                            <input type="password" useState="senha" id="senha" placeholder="Senha"/>
                            <input useState="senha" id="cnpj" placeholder="CPF / CNPJ"/>
                        </div>
                        <div className="button-cadastro">
                            <button onClick={cadastrar}>Cadastrar</button>
                            <input type="radio" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    
}

export default Cadastrar;