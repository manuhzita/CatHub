import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contato from "./Pages/Contato/Contato";
import Cadastro from "./Pages/Cadastro/Cadastro";
import CatBotas from "./Pages/CatBotas/CatBotas";
import CatCarro from './Pages/CatCarro/CatCarro';
import CatComida from './Pages/CatComida/CatComida';
import CatListrado from './Pages/CatListrado/CatListrado';
import CatMeme from './Pages/CatMeme/CatMeme';

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/catBotas" element={<CatBotas />} />
        <Route path="/catCarro" element={<CatCarro />} />
        <Route path="/catComida" element={<CatComida />} />
        <Route path="/catListrado" element={<CatListrado />} />
        <Route path="/catMeme" element={<CatMeme />} />
      </Routes>
    </>
  );
};

export default Rotas;
