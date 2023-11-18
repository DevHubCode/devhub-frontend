import api from "./api";
import { useState } from "react";
import "./html-css-template/css/style.css";
import "./html-css-template/css/reset.css";
import "./html-css-template/css/cadastro.css"
import "./html-css-template/css/especialidades.css"
import "./script.js";
import Cadastro from './Jsx/Cadastro.jsx';
import Login from './Jsx/Login.jsx';
import Logout from './Jsx/Logout.jsx';
import Especialidades from "./Jsx/Especialidades.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/cadastro" element={<Cadastro />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/logout" element={<Logout />} ></Route>
        <Route path="/especialidades" element={<Especialidades />} ></Route>
      </Routes>
    </BrowserRouter>

  );
}
export default App;
