import React from "react";
import setaEsquerda from "../html-css-template/imagens/arrow-left.svg"
import logoDevhubBranco from "../html-css-template/imagens/Group 85.svg"
import api from "../api.js"


function Inicial() {
function sair(){
    sessionStorage.clear();
    alert("Saindo")
    window.location.href = '/login';


}

    return (  
        <>
            <div class="header">
        <div class="navbar">

            <div class="back">
                <div class="icon-menu"><img src="././assets/icon-menu.svg" alt="" width="40px"/></div>
            
            </div>

            <div class="logo-devhub"><img src="././assets/logo-devhub-grey.png" alt="" width="200px"/></div>

            <div class="img-profile"><img src="././assets/foto-perfil.svg" width="35px"/></div>
        </div>
        <div class="box-menu">
            <div class="search">
                <div class="search-tittle">Encontre seu Frela</div>
                <div class="search-input"> <input type="text"/></div>
            </div>

            <div class="sub-menu-section">
                <div class="icon1">Beanchinmark</div>
                <div class="icon2">Todos</div>
                <div class="icon2">Publicações</div>
            </div>

        </div>
        <div class="infos-home">
            <div class="level-dev">
                <div class="level-dev-icons">
                    <div class="color-level-dev1" ></div>

                    <div class="text-level-dev">
                    <div class="name-level-dev">Dev Senior</div>
                    <div class="yyyy"> 10 Anos</div>
                    </div>      
                   </div>

                   <div class="level-dev-icons">
                    <div class="color-level-dev2"></div>

                    <div class="text-level-dev">
                    <div class="name-level-dev">Dev Pleno</div>
                    <div class="yyyy"> 10 Anos</div>
                    </div>      
                   </div>

                   <div class="level-dev-icons">
                    <div class="color-level-dev3"></div>

                    <div class="text-level-dev">
                    <div class="name-level-dev">Dev Junior</div>
                    <div class="yyyy"> 10 Anos</div>
                    </div>      
                   </div>

    

            </div>

            <div class="info-values">
                <div class="icon-info-value"><img src="assets/info-values-alert.svg" alt=""/></div>
                <div class="text-info-values">Todos os valores de prestação de serviços a baixo são referentes a hora de trabalho do freelancer.</div>
            
        </div>

      
    </div>

</div>
<div class="header-icons">
    <div class="box-freelancer">
        <div class="image-freelancer" >

            <div class="score-freelancer">

                <div class="box-icon-star">
            <img src="./assets/icon-star.png" alt="" width="100%"/>
                </div>
                <div class="box-score-number">
                4,85
                </div> 

            </div>
        </div>
        <div class="box-information">
         <div class="box-classification">
      
            </div>
            <div class="box-aux">
                <div class="box-name-age">
                  Julio, 19.
                </div>
                <div class="box-price">
                  R$ 179,99
                </div>
            </div>
        </div>
    </div>
       <div class="box-freelancer">
        <div class="image-freelancer" >

            <div class="score-freelancer">

                <div class="box-icon-star">
            <img src="./assets/icon-star.png" alt="" width="100%"/>
                </div>
                <div class="box-score-number">
                4,85
                </div> 

            </div>
        </div>
        <div class="box-information">
         <div class="box-classification">
      
            </div>
            <div class="box-aux">
                <div class="box-name-age">
                  Julio, 19.
                </div>
                <div class="box-price">
                  R$ 179,99
                </div>
            </div>
        </div>
    </div>
    <div class="box-freelancer">
        <div class="image-freelancer" >

            <div class="score-freelancer">

                <div class="box-icon-star">
            <img src="./assets/icon-star.png" alt="" width="100%"/>
                </div>
                <div class="box-score-number">
                4,85
                </div> 

            </div>
        </div>
        <div class="box-information">
         <div class="box-classification">
      
            </div>
            <div class="box-aux">
                <div class="box-name-age">
                  Julio, 19.
                </div>
                <div class="box-price">
                  R$ 179,99
                </div>
            </div>
        </div>
    </div>

    <div class="box-freelancer">
        <div class="image-freelancer" >

            <div class="score-freelancer">

                <div class="box-icon-star">
            <img src="./assets/icon-star.png" alt="" width="100%"/>
                </div>
                <div class="box-score-number">
                4,85
                </div> 

            </div>
        </div>
        <div class="box-information">
         <div class="box-classification">
      
            </div>
            <div class="box-aux">
                <div class="box-name-age">
                  Julio, 19.
                </div>
                <div class="box-price">
                  R$ 179,99
                </div>
            </div>
        </div>
    </div>
       <div class="box-freelancer">
        <div class="image-freelancer" >

            <div class="score-freelancer">

                <div class="box-icon-star">
            <img src="./assets/icon-star.png" alt="" width="100%"/>
                </div>
                <div class="box-score-number">
                4,85
                </div> 

            </div>
        </div>
        <div class="box-information">
         <div class="box-classification">
      
            </div>
            <div class="box-aux">
                <div class="box-name-age">
                  Julio, 19.
                </div>
                <div class="box-price">
                  R$ 179,99
                </div>
            </div>
        </div>
    </div>
    <div class="box-freelancer">
        <div class="image-freelancer" >

            <div class="score-freelancer">

                <div class="box-icon-star">
            <img src="./assets/icon-star.png" alt="" width="100%"/>
                </div>
                <div class="box-score-number">
                4,85
                </div> 

            </div>
        </div>
        <div class="box-information">
         <div class="box-classification">
      
            </div>
            <div class="box-aux">
                <div class="box-name-age">
                  Julio, 19.
                </div>
                <div class="box-price">
                  R$ 179,99
                </div>
            </div>
        </div>
    </div>
    <div class="box-freelancer">
        <div class="image-freelancer" >

            <div class="score-freelancer">

                <div class="box-icon-star">
            <img src="./assets/icon-star.png" alt="" width="100%"/>
                </div>
                <div class="box-score-number">
                4,85
                </div> 

            </div>
        </div>
        <div class="box-information">
         <div class="box-classification">
      
            </div>
            <div class="box-aux">
                <div class="box-name-age">
                  Julio, 19.
                </div>
                <div class="box-price">
                  R$ 179,99
                </div>
            </div>
        </div>
    </div>
       <div class="box-freelancer">
        <div class="image-freelancer" >

            <div class="score-freelancer">

                <div class="box-icon-star">
            <img src="./assets/icon-star.png" alt="" width="100%"/>
                </div>
                <div class="box-score-number">
                4,85
                </div> 

            </div>
        </div>
        <div class="box-information">
         <div class="box-classification">
      
            </div>
            <div class="box-aux">
                <div class="box-name-age">
                  Julio, 19.
                </div>
                <div class="box-price">
                  R$ 179,99
                </div>
            </div>
        </div>
    </div>
    <div class="box-freelancer">
        <div class="image-freelancer" >

            <div class="score-freelancer">

                <div class="box-icon-star">
            <img src="./assets/icon-star.png" alt="" width="100%"/>
                </div>
                <div class="box-score-number">
                4,85
                </div> 

            </div>
        </div>
        <div class="box-information">
         <div class="box-classification">
      
            </div>
            <div class="box-aux">
                <div class="box-name-age">
                  Julio, 19.
                </div>
                <div class="box-price">
                  R$ 179,99
                </div>
            </div>
        </div>
    </div>
    
</div>
        </>
    )
}


export default Inicial;