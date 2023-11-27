import React from "react";
import ReactDOM from 'react-dom/client';
import setaEsquerda from "../html-css-template/imagens/arrow-left.svg"
import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg"
import api from "../api.js"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import '../html-css-template/css/reset.css'

function Login() {

    const navigate = useNavigate();

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
                            navigate('/logout');
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

const linguagensDeProgramacao = [
    'JavaScript',
    'Python',
    'Java',
    'C#',
    'C++',
    'TypeScript',
    'Ruby',
    'Swift',
    'Kotlin',
    'Go',
    'PHP',
    'HTML/CSS',
    'Objective-C',
    'Rust',
    'MATLAB',
    'Shell',
    'R',
    'Scala',
    'Dart',
    'Groovy',
    'Lua',
    'Perl',
    'MATLAB',
    'Shell Script',
    'Haskell',
    'Assembly',
    'COBOL',
    'Fortran',
    'Ada',
    'Lisp',
    'Scheme',
    'Prolog',
    'SQL',
    'Erlang',
    'Clojure',
    'Apex',
    'ABAP',
    'Visual Basic',
    'PowerShell',
    'Delphi',
    'F#',
    'ActionScript',
    'Dart',
    'ColdFusion',
    'Objective-C',
    'VHDL',
    'Verilog',
    'Julia',
    'Crystal',
    'COOL',
    'Kotlin',
    'Factor',
    'Forth',
    'Groovy',
    'Scratch',
    'Ada',
    'J',
    'COQ',
    'Alice',
    'Simula',
    'Pascal',
    'PL/I',
    'Ada',
    'Algol',
    'APL',
    'Bash',
    'Eiffel',
    'Forth',
    'FoxPro',
    'HTML',
    'IDL',
    'Inform',
    'JCL',
    'JavaFX Script',
    'JScript',
    'LotusScript',
    'ML',
    'Modula',
    'MUMPS',
    'Objective-C',
    'OpenCL',
    'OpenGL Shading Language',
    'Oz',
    'Paradox',
    'PostScript',
    'Promela',
    'Python',
    'Q',
    'RPG',
    'Ruby',
    'Rust',
    'S',
    'SAS',
    'SPARK',
    'SQL',
    'Swift',
    'TACL',
    'Tcl',
    'TeX',
    'Visual Basic',
];