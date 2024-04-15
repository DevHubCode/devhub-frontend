
import React from "react";
import setaEsquerda from "../html-css-template/imagens/arrow-left.svg";
import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg";
import BackgroundCover from "../html-css-template/imagens/2.png";
import api from "../api.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import "../html-css-template/css/reset.css";

function Login() {
  const navigate = useNavigate();

  function entrar() {
    const iemail = document.getElementById("email");
    const isenha = document.getElementById("senha");

    console.log(iemail.value);
    console.log(isenha.value);

    if (iemail && isenha && iemail.value && isenha.value) {
      api
        .post("/login", {
          email: iemail.value,
          senha: isenha.value,
        })
        .then((response) => {
          // Lida com a resposta do servidor após um login bem-sucedido
          console.log(response.data);
          Swal.fire({
            title: "Logando!",
            text: "Usuário encontrado, clique em ok para prosseguir",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              sessionStorage.setItem("id", response.data.id);
              sessionStorage.setItem("nome", response.data.nome);
              sessionStorage.setItem("email", response.data.email);
              sessionStorage.setItem("token", response.data.token);
              sessionStorage.setItem("role", response.data.role);
              sessionStorage.setItem("imagem", response.data.imagem);
              if (response.data.role === "CONTRATANTE") {
                navigate("/home");
              } else {
                navigate(`/publicacoes`);
              }

              console.log("O usuário clicou em OK!");
            }
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "Usuário não encontrado",
            text: "Verifique se os dados estão corretos!",
            icon: "error",
          });
        });
    } else {
      console.log("Campos de email e senha devem ser preenchidos");
    }
  }

  function inicio() {
    window.location.href = "/";
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

  return (
    <>
      <div className="body-login" style={myStyle}>
        <div className="block-1">
          <div className="voltar">
            <img src={setaEsquerda} onClick={inicio} alt="seta" />
            <div onClick={inicio} className="text-voltar">Inicio</div>
          </div>
          <div className="frase">
            Proporcionando encontros entre <div >demanda e competência.</div>
          </div>
          <div className="logo">
            <img src={logoDevhubBranco} alt="loogo DevHub" />
          </div>
          <div className="sloganX">
            &copy; 2023 ; todos os direitos reservados By DevHub Enterprise
          </div>
        </div>

        <div className="block-2">
          <div className="block-inputs">
            <div className="text-login-tittle">Entrar</div>
            <div className="inputs-login">
              <input type="text" useState="email" id="email" placeholder="Email" />
              <input
                type="password"
                useState="senha"
                id="senha"
                placeholder="Senha"
              />
            </div>
            <div className="not_cadastro">
              Não tem cadastro? <a href="./cadastro"> Cadastre-se já</a>!
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
