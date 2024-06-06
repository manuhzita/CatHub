// Navbar
import React from 'react';
import logoBranco from '../../img/logoBranco.png';
import '../Navbar/style.css';
 
 
function Navbar() {
    return (
        <>
        <nav className="navbar">
 
            <img className='cathub' src={logoBranco} />
 
            <div className="search-bar">
                <input className='buscar' type="text" placeholder="Buscar..." />
            </div>
            <button className='Buscar-botao' type="button">Buscar</button>
 
            <button className='Cadastro-botao'>Contato</button>
            <button className='Login-botao'>Login</button>
            <hr />
        </nav>
        </>
    );
}
 
export default Navbar;