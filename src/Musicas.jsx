import React from "react";
import setaEsquerda from "../src/html-css-template/imagens/arrow-left.svg"
import logoDevhubBranco from "../src/html-css-template/imagens/Group 85.svg"

function Musicas() {
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
                            <input type="text" class="email" placeholder="Email"/>
                            <input type="text" class="senha"placeholder="Senha"/>
                        </div>
                        <div className="button-login">
                            <button>Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Musicas;
