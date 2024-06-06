import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Rodape from './Components/Rodape/rodape';
import Navbar from './Components/Navbar/Navbar';

//Importar complementos aqui
import Rotas from "./Routes";

//Importar componentes aqui
import Navegacao from "./Components/Navegacao";

const App = () => {
  return (
    <>
    <Navbar />
      <Router>
        <Navegacao />
        <Rotas />
      </Router>
      <Rodape />
    </>
  );
};

export default App;
