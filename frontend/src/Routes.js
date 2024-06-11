import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import CatBotas from "./Pages/CatBotas/CatBotas";
import CatComida from './Pages/CatComida/CatComida';
import CatListrado from './Pages/CatListrado/CatListrado';
import CatMeme from './Pages/CatMeme/CatMeme';

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/catComida" element={<CatComida />} />
        <Route path="/catBotas" element={<CatBotas />} />
      </Routes>
    </>
  );
};

export default Rotas;
