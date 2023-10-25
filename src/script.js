const iemail = document.querySelector(".email");
const isenha = document.querySelector(".senha");
function entrar() {
    fetch("http://localhost:8080/login",
        {

            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",

            body: JSON.stringify({

                email: iemail.value, 
                senha: isenha.value

            }
            )
        })

        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })

}