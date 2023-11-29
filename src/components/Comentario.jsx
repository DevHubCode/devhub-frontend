import React from 'react'
import '../html-css-template/css/publicacoes.css'
// import fotoPerfil from '../html-css-template/imagens/foto-perfil.svg';

function Comentario({ autor, cargo, texto, imagemPerfil }) {

  return (
    <div className="post-item">
        <div className="post-user-infos">
            <div className="imagem-feed">
                <img src={imagemPerfil} alt="" width={"80px"} />
            </div>
            <div className="feed-name-function">
                <div className="feed-name">{autor}</div>
                <div className="feed-function">{cargo}</div>
            </div>
        </div>
        <div className="text-feed">
            {texto}
        </div>
    </div>
  )
}

export default Comentario