import React from "react";
import setaEsquerda from "../html-css-template/imagens/arrow-left.svg"
import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg"
import api from "../api.js"


function Logout() {
function sair(){
    sessionStorage.clear();
    alert("Saindo")
    window.location.href = '/login';


}

    return (  
        <>
            <div className="body-login">
                <div className="block-1">
                   
                    <div className="logo-logout">
                    <img src={logoDevhubBranco} alt="loogo DevHub" />
                    </div>
                   
                </div>

                <div className="block-2">
                    <div className="block-inputs">
                        <div className="text-login-tittle">Sair</div>
                        <div className="button-login">
                            <button onClick={sair}>Sair</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Logout;
