import "./script.js";
import Cadastro from './Jsx/Cadastro.jsx';
import Login from './Jsx/Login.jsx';
import Logout from './Jsx/Logout.jsx';
import Especialidades from "./Jsx/Especialidades.jsx";
import Home from "./Jsx/Home.jsx";
import Publicacoes from "./Jsx/Publicacoes.jsx";
import Benchmarking from "./Jsx/Benchmarking.jsx";
import Profile from "./Jsx/Profile.jsx";
import Inicial from "./Jsx/Inicial.jsx";
import TelaImagem from "./Jsx/ColocarImagem.jsx"
import ProfileCrud from "./Jsx/ProfileCrud.jsx"
import UpdateImage from "./ModalJsx/ColocarImagemCrud.jsx"
import ProfileContratante from "./Jsx/ProfileContratante.jsx"
import ProfileCrudContratante from "./Jsx/ProfileCrudContratante.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home />} />

        <Route path="/cadastro" element={<Cadastro />} ></Route>
        <Route path="/imagem" element={<TelaImagem />} ></Route>
        <Route path="/profileCrudContratante/:id" element={<ProfileCrudContratante />} ></Route>
        <Route path="/profileContratante/:id" element={<ProfileContratante />} ></Route>
        <Route path="/atualizarImagem" element={<UpdateImage />} ></Route>
        <Route path="/profileCrud/:id" element={<ProfileCrud />} ></Route>
        <Route path="/publicacoes" element={<Publicacoes />} ></Route>
        <Route path="/" element={<Inicial />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/logout" element={<Logout />} ></Route>
        <Route path="/especialidades" element={<Especialidades />} ></Route>
        <Route path="/benchmarking" element={<Benchmarking />} />
        <Route path="/profile/:id" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>

  );
}
export default App;
