import React from "react";
import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg"
import { useNavigate } from "react-router-dom";


function Logout() {

    const navigate = useNavigate();

function sair(){
    sessionStorage.clear();
    alert("Saindo")
    navigate('/login')


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
