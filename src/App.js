import api from "./api";
import { useState } from "react";
import "./html-css-template/css/style.css";
import "./html-css-template/css/reset.css";
import "./script.js"
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/logout" element={<Logout />} ></Route>
      </Routes>
    </BrowserRouter>

  );
}
export default App;
