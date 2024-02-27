import React from 'react'
import '../html-css-template/css/publicacoes.css'
// import fotoPerfil from '../html-css-template/imagens/foto-perfil.svg';

function Comentario({ autor, role, titulo ,descricao, imagemPerfil, id }) {

    function profile(id, cargo){
        if(cargo == "FREELANCER"){
            window.location.href = `/profile/${id}`
        }else{
            window.location.href = `/profileContratante/${id}`
        }
    }

  return (
    <div className="post-item">
        <div className="post-user-infos">
            <div onClick={()=> profile(id, role)} value={id} className="imagem-feed">
                <img  src={imagemPerfil} alt="" width={"80px"} />
            </div>
            <div className="feed-name-function">
                <div className="feed-name">{autor}</div>
                <div className="feed-function">{role}</div>
                <div className='feed-title'>{titulo}</div>
            </div>
        </div>
        <div className="text-feed">
            {descricao}
        </div>
    </div>
  )
}

export default Comentario