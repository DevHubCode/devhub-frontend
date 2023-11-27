import React from "react";
import Helpdesk from "../html-css-template/imagens/Vector-zendesk.svg"
import SubFooter from "../html-css-template/imagens/img-footer-redes.png"
import LogoFooter from "../html-css-template/imagens/logo-footer-grey.svg"
import UsaBand from "../html-css-template/imagens/usa-band.svg"
import BrBand from "../html-css-template/imagens/br-band.svg"

import '../html-css-template/css/ItemFooter.css'

function ItemFooter(props) {
    return (
        <>
        <div className="footer">

<div className="footer-infos">
    <div className="sub-footer-1"><img src={LogoFooter} alt="" width="220px" /></div>
    <div className="sub-footer-2">
        <div className="tittle-fotter">Páginas</div>
        <div className="item">Home</div>
        <div className="item">Login</div>
    </div>
    <div className="sub-footer-3">
        <div className="tittle-fotter">Telefones</div>
        <div className="item"> +1 13900 01880  <img src={UsaBand} alt="" width="20px" /></div>
        <div className="item">+55 0800 01930  <img src={BrBand} alt="" width="20px" /></div>
    </div>
    <div className="sub-footer-4">
        <div className="tittle-fotter-5">Helpdesk</div>
        <img src={Helpdesk} alt="" width="200px" />

    </div>
    <div className="sub-footer-5">
        <img src={SubFooter} alt="" width="40px" />
    </div>
</div>
<div className="footer-business"> &copy; 2023 ; todos os direitos reservados By DevHub Enterprise</div>
</div>
</>
    )
}
export default ItemFooter;