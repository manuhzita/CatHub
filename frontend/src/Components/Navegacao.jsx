import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navegação">
              <Link className='navLink' to="/">Home</Link>
              <Link className='navLink' to="/contato">Contato</Link>
              <Link className='navLink' to="/cadastro">Cadastro</Link>
              <Link className='navLink' to="/cadastro">CatBotas</Link>
              <Link className='navLink' to="/cadastro">CatCarro</Link>
              <Link className='navLink' to="/cadastro">CatComida</Link>
              <Link className='navLink' to="/cadastro">CatListrado</Link>
              <Link className='navLink' to="/cadastro">CatMeme</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  );
};

export default Header;
