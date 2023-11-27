import React from "react";
import LogoBlack from "../html-css-template/imagens/Logo-DevHub-Black.svg"
import Mascote from "../html-css-template/imagens/macote-devhub.png"
import VetorPaises from "../html-css-template/imagens/vetor-paises.svg"
import Woman from "../html-css-template/imagens/woman-ref.svg"
import PlayStore from "../html-css-template/imagens/icon-play-store.svg"
import AppleStore from "../html-css-template/imagens/logo-apple-store.svg"
import Mobile from "../html-css-template/imagens/icon-mobile-ref.svg"
import Java from "../html-css-template/imagens/java-logo.svg"
import LogoFooter from "../html-css-template/imagens/logo-footer-grey.svg"
import UsaBand from "../html-css-template/imagens/usa-band.svg"
import BrBand from "../html-css-template/imagens/br-band.svg"
import Helpdesk from "../html-css-template/imagens/Vector-zendesk.svg"
import SubFooter from "../html-css-template/imagens/img-footer-redes.png"
import SpringBoot from "../html-css-template/imagens/logo=springboot.svg"
import Azure from "../html-css-template/imagens/logo-azure.svg"
import NodeImage from "../html-css-template/imagens/logo-nodeJS.svg"
import Python from "../html-css-template/imagens/logo-python.svg"
import ReactImage from "../html-css-template/imagens/logo-react.svg"
import UiPatch from "../html-css-template/imagens/UiPath.svg"
import Cmais from "../html-css-template/imagens/logo=c#.svg"
import MySql from "../html-css-template/imagens/mysql-horizontal.svg"
import JavaScript from "../html-css-template/imagens/javascript-ar21.svg"
import W3Html from "../html-css-template/imagens/w3_html5-ar21.svg"
import Edificio from "../html-css-template/imagens/image-edficio=devhub.svg"
import imageCode from "../html-css-template/imagens/image-code-example.svg"
import seis from "../html-css-template/imagens/06.svg"
import cinco from "../html-css-template/imagens/cinco.svg"
import nove from "../html-css-template/imagens/9.svg"
import dez from "../html-css-template/imagens/12.svg"
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import "../html-css-template/css/inicial.css"

function Inicial() {
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 20;

    const carouselContentRef = useRef(null);
    const startXRef = useRef(null);
    const draggingRef = useRef(false);

    useEffect(() => {
        startAutoScroll();
    }, []);

    function startDrag(e) {
        e.preventDefault();
        startXRef.current = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
        draggingRef.current = true;
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", endDrag);
        document.addEventListener("touchmove", drag);
        document.addEventListener("touchend", endDrag);
    }

    function drag(e) {
        if (!draggingRef.current) return;
        var currentX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
        var diff = (startXRef.current - currentX) * 3;
        carouselContentRef.current.style.transform = `translateX(${-currentIndex * (300 + 20) - diff
            }px)`;
    }

    function endDrag(event) {
        if (!draggingRef.current) return;
        draggingRef.current = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", endDrag);
        document.removeEventListener("touchmove", drag);
        document.removeEventListener("touchend", endDrag);

        var threshold = 50;
        if (startXRef.current - event.clientX > threshold && currentIndex < totalSlides - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else if (startXRef.current - event.clientX < -threshold && currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        } else if (currentIndex === totalSlides - 1) {
            setCurrentIndex(0);
        } else if (currentIndex === 0) {
            setCurrentIndex(totalSlides - 1);
        }

        updateCarousel();
    }

    function updateCarousel() {
        var newPosition = -currentIndex * (300 + 20);
        carouselContentRef.current.style.transform = `translateX(${newPosition}px)`;
    }

    function nextSlide() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        updateCarousel();
    }

    function startAutoScroll() {
        setInterval(nextSlide, 9000);
    }

    document.addEventListener("DOMContentLoaded", function () {

        var items = document.querySelectorAll(".item-navbar");

        for (var i = 0; i < items.length; i++) {

            if (i === 0) {
                items[i].style.borderBottom = "6px solid #23c1f1";
            }

            items[i].addEventListener("click", function () {

                var itemAtual = this;


                for (var j = 0; j < items.length; j++) {
                    if (items[j] !== itemAtual) {
                        items[j].style.borderBottom = "";
                    }
                }


                itemAtual.style.borderBottom = "6px solid #23c1f1";
            });
        }
    });

    function irParaServicos() {

        window.scrollTo(0, 1840);
    }

    function irParaSobre() {

        window.scrollTo(0, 520);
    }

    function irParaFooter() {

        window.scrollTo(0, 18324324);
    }

    function irParainicio() {

        window.scrollTo(0, 0);
    }

    function login() {
        window.location.href = '/login';
    }

    function cadastro() {
        window.location.href = '/cadastro';
    }

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={LogoBlack} alt="" width="170px" />
                </div>
                <div className="ntg">
                </div>
                <div className="items">
                    <div className="item-navbar" onclick={irParainicio}>Home</div>
                    <div className="item-navbar" onclick={irParaSobre}>Sobre</div>
                    <div className="item-navbar" onclick={irParaServicos}>Serviços</div>
                    <div className="item-navbar" onclick={irParaFooter}>Contato</div>
                    <div className="button-navbar" onClick={login}>
                        Entrar
                    </div>

                </div>
            </div>

            <div className="header-containers">
                <div className="container1">
                    <div className="sub-container">
                        <div className="sub-container1">
                            <div className="slogan">
                                <div className="sub-slogan1">Seu Freela a </div>
                                <div className="sub-slogan2">Poucos Cliques </div>
                            </div>

                        </div>
                        <div className="sub-container2">
                            <img src={Mascote} alt="" width="400px" style={{ marginBottom: "100px" }} />
                        </div>
                    </div>
                </div>
                <div className="container2">
                    <div className="sub-container">
                        <div className="sub-container1">
                            <div className="about-login">
                                <div onClick={cadastro} className="icon1">Junte-se</div>
                                <div className="icon2">Sobre Nós</div>
                            </div>
                            <div className="photos-container">
                                <div className="photo1" style={{ backgroundImage: `url(${Edificio})` }}>
                                    <div className="photo-1-txt"> Trabalho com segurança e proteção de forma simplificada.</div>
                                </div>
                                <div className="photo2" style={{ backgroundImage: `url(${imageCode})` }}>
                                    <div className="photo-2-txt" > Somos o segundo melhor site de freelancers do mundo em 2023, segundo a revista Times.</div>
                                </div>
                            </div>
                            <div className="paises"> <img src={VetorPaises} alt="" width="120px" /></div>
                        </div>
                        <div className="sub-container2">

                        </div>

                    </div>
                </div>
                <div className="container3">
                    <div className="box-1">
                        <div className="box-text">Proporcionando encontros </div>
                        <div className="box-text">entre demanda e </div>
                        <div className="box-text">competência.</div>
                    </div>


                    <div className="box-2">
                        <div className="box-img-woman-ref"><img src={Woman} alt="" width="544px" /></div>
                    </div>

                </div>
                <div className="container4">
                    <div className="box-1-c4">
                        <div className="tittle-c4">
                            <div className="box-text">VOCÊ PODERÁ </div>
                            <div className="box-text">BAIXAR NOSSO</div>
                            <div className="box-text">APP EM BREVE!</div>
                        </div>

                        <div className="text-c4">
                            <div className="box-text">Nossa Aplicação mobile estará</div>
                            <div className="box-text">disponivel nas lojas de aplicativos</div>
                            <div className="box-text">android e IOS a partir de 2024.</div>
                        </div>

                        <div className="icons-c4">

                            <div className="box-icon">
                                <div className="icon1-c4-1"><img src={PlayStore} alt="" width="32px" /></div>
                                <div className="text-icon-c4">
                                    <div className="text-icon-c4-1">Baixe no</div>
                                    <div className="text-icon-c4-2">Google Play</div>
                                </div>
                            </div>

                            <div className="box-icon">
                                <div className="icon1-c4-2"><img src={AppleStore} alt="" width="37px"
                                    style={{ paddingTop: "6px" }} /></div>
                                <div className="text-icon-c4">
                                    <div className="text-icon-c4-1">Baixe na</div>
                                    <div className="text-icon-c4-2">Apple Store</div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="box-2-c4">
                        <div className="box-img-mobile-ref"><img src={Mobile} alt="" width="484px" />
                        </div>
                    </div>


                </div>
                <div className="container5">
                    <div className="tittle-c5">Os Profissionais das principais tecnologias é só no DevHub.</div>

                    <div className="carrousel-c5">
                        <div id="carousel-container">
                            <div
                                id="carousel-content"
                                ref={carouselContentRef}
                                onMouseDown={startDrag}
                                onTouchStart={startDrag}
                            >
                                <div className="carousel-box" style={{ backgroundImage: `url(${dez})`, backgroundSize: "cover", backgroundColor: "#E5F1F2" }}></div>
                                <div className="carousel-box" style={{ backgroundImage: `url(${seis})`, backgroundSize: "cover", backgroundColor: "#E5F1F2"}}></div>
                                <div className="carousel-box" style={{ backgroundImage: `url(${cinco})`,backgroundSize: "cover", backgroundColor: "#E5F1F2" }}></div>
                                <div className="carousel-box" style={{ backgroundImage: `url(${nove})`, backgroundSize: "cover", backgroundColor: "#E5F1F2" }}></div>

                                <div className="carousel-box" style={{ backgroundImage: `url(${dez})`, backgroundSize: "cover", backgroundColor: "#E5F1F2" }}></div>
                                <div className="carousel-box" style={{ backgroundImage: `url(${seis})`, backgroundSize: "cover", backgroundColor: "#E5F1F2"}}></div>
                                <div className="carousel-box" style={{ backgroundImage: `url(${cinco})`,backgroundSize: "cover", backgroundColor: "#E5F1F2" }}></div>
                                <div className="carousel-box" style={{ backgroundImage: `url(${nove})`, backgroundSize: "cover", backgroundColor: "#E5F1F2" }}></div>

                                <div className="carousel-box" style={{ backgroundImage: `url(${dez})`, backgroundSize: "cover", backgroundColor: "#E5F1F2" }}></div>
                                <div className="carousel-box" style={{ backgroundImage: `url(${seis})`, backgroundSize: "cover", backgroundColor: "#E5F1F2"}}></div>
                                <div className="carousel-box" style={{ backgroundImage: `url(${cinco})`,backgroundSize: "cover", backgroundColor: "#E5F1F2" }}></div>
                                <div className="carousel-box" style={{ backgroundImage: `url(${nove})`, backgroundSize: "cover", backgroundColor: "#E5F1F2" }}></div>

                                <div className="carousel-box" style={{ backgroundImage: `url(${dez})`, backgroundSize: "cover", backgroundColor: "#E5F1F2" }}></div>
                                <div className="carousel-box" style={{ backgroundImage: `url(${seis})`, backgroundSize: "cover", backgroundColor: "#E5F1F2"}}></div>
                                <div className="carousel-box" style={{ backgroundImage: `url(${cinco})`,backgroundSize: "cover", backgroundColor: "#E5F1F2" }}></div>
                                <div className="carousel-box" style={{ backgroundImage: `url(${nove})`, backgroundSize: "cover", backgroundColor: "#E5F1F2" }}></div>   
                            </div>
                            </div>
                        </div>
                    </div>
                <div className="tecnologias">

                    <div className="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-box-tec"><img src={Java} alt="" width="100px" /></div>
                            <div className="carousel-box-tec"><img src={SpringBoot} alt="" width="100px" /></div>
                            <div className="carousel-box-tec"><img src={Azure} alt="" width="100px" /></div>
                            <div className="carousel-box-tec"><img src={NodeImage} alt="" width="80px" /></div>
                            <div className="carousel-box-tec"><img src={Python} alt="" width="48px" /></div>
                            <div className="carousel-box-tec"><img src={ReactImage} alt="" width="60px" /></div>
                            <div className="carousel-box-tec"><img src={UiPatch} alt="" width="100px" /></div>
                            <div className="carousel-box-tec"><img src={Cmais} alt="" width="100px" /></div>
                            <div className="carousel-box-tec"><img src={MySql} alt="" width="110px" /></div>
                            <div className="carousel-box-tec"><img src={JavaScript} alt="" width="110px" /></div>
                            <div className="carousel-box-tec"><img src={W3Html} alt="" width="100px" /></div>
                            <div className="carousel-box-tec"><img src={Java} alt="" width="100px" /></div>
                            <div className="carousel-box-tec"><img src={SpringBoot} alt="" width="100px" /></div>
                            <div className="carousel-box-tec"><img src={Azure} alt="" width="100px" /></div>
                            <div className="carousel-box-tec"><img src={NodeImage} alt="" width="80px" /></div>
                            <div className="carousel-box-tec"><img src={Python} alt="" width="48px" /></div>
                            <div className="carousel-box-tec"><img src={ReactImage} alt="" width="60px" /></div>
                            <div className="carousel-box-tec"><img src={UiPatch} alt="" width="100px" /></div>
                            <div className="carousel-box-tec"><img src={Cmais} alt="" width="100px" /></div>
                            <div className="carousel-box-tec"><img src={MySql} alt="" width="110px" /></div>
                            <div className="carousel-box-tec"><img src={JavaScript} alt="" width="110px" /></div>
                            <div className="carousel-box-tec"><img src={W3Html} alt="" width="100px" /></div>
                        </div>
                    </div>
                </div>

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
            </div>



        </>
    )
}


export default Inicial;