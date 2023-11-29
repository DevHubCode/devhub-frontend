import React from 'react'
import '../html-css-template/css/publicacoes.css'
import fotoPerfil from '../html-css-template/imagens/foto-perfil.svg';

function Comentario() {
  return (
    <div className="post-item">
        <div className="post-user-infos">
            <div className="imagem-feed">
                <img src={fotoPerfil} alt="" width={"80px"} />
            </div>
            <div className="feed-name-function">
                <div className="feed-name">João Felipe</div>
                <div className="feed-function"> Analista de Projetos</div>
            </div>
        </div>
        <div className="text-feed">

            A EZLIV é uma empresa de Tecnologia da Informação (TI) dedicada à gestão de condomínios. Com uma abordagem centrada no cliente, nossa plataforma personalizada oferece soluções para simplificar a administração, melhorar a comunicação e otimizar a manutenção. Nosso compromisso com a qualidade e segurança é primordial, garantindo a proteção de dados e a integridade das informações.
            Nossa plataforma é flexível, adaptando-se às necessidades específicas de cada condomínio. Oferecemos uma experiência sem atritos para síndicos, condôminos e fornecedores, permitindo a colaboração em tempo real. Estamos empenhados em melhorar a qualidade de vida nos condomínios, promovendo um ambiente seguro e harmonioso.
        </div>
    </div>
  )
}

export default Comentario