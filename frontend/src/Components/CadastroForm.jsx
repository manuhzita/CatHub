// CadastroForm.jsx
import React, { useState } from 'react'
import 'rsuite/dist/rsuite.min.css';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Form, ButtonToolbar, Button } from 'rsuite';
import { Modal } from 'rsuite';
import { Tabs } from 'rsuite';
import '../css/modalogin.css'
import { Link } from 'react-router-dom';
import CatLogo from '../img/cathub-removebg-preview.png'

const ModalLogin = () => {
  const [loginFormData, setLoginFormData] = useState({
    nome: '',
    senha: ''
  });

  const [cadastroFormData, setCadastroFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const handleLoginChange = (value, name) => {
    setLoginFormData({
      ...loginFormData,
      [name]: value
    });
  };

  const handleCadastrosChange = (value, name) => {
    setCadastroFormData({
      ...cadastroFormData,
      [name]: value
    });
  };

  const handleLoginSubmit = async () => {

    try {
      await axios.post('http://localhost:3001/cadastro', loginFormData, {
        email: 'example@example.com',
        senha: 'examplepassword'
      });

      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Login feito com sucesso!'
      })
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao criar cadastro de login. Verifique o console para mais detalhes.',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleCadastrosSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/cadastro', cadastroFormData);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Cadastro criado com sucesso!'
      }).then(() => {
        window.location.reload(false);
      });
    } catch (error) {
      console.error('Erro ao criar cadastro', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Erro ao criar cadastro. Verifique o console para mais detalhes.'
      });
    }
  };
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEntered = () => {
    setTimeout(() => setRows(80), 2000);
  };

  return (
    <>
      <ButtonToolbar>
        <Button onClick={handleOpen}>Open</Button>
      </ButtonToolbar>

      <Modal
        open={open}
        onClose={handleClose}
        onEntered={handleEntered}
        onExited={() => {
          setRows(0);
        }}
      >
        <Modal.Header >
          {/* APAGAR MAIS TARDE, NÃO SERVE PRA NADA "setRows={rows}", SERVE APENAS PRA DEFINIR O "rows" QUE ESTAVA INDEFINIDO E DANDO ERRO!!! */}
          setRows={rows}
        </Modal.Header>

        <Modal.Body>
          <Tabs defaultActiveKey="1" appearance="subtle">
            <Tabs.Tab eventKey="1" title="Login">
              <br />
              <div className='d-flex login'>
                <h3 className='titulomodallogin'>Login</h3>
                <img className='logotitulologin' src={CatLogo} alt="imagem" />
              </div>
              <br />
              <br />
              <Form onSubmit={handleLoginSubmit}>
                <Form.Group controlId="name">
                  <Form.ControlLabel>Username</Form.ControlLabel>
                  <Form.Control name="nome" value={loginFormData.nome} onChange={(value) => handleLoginChange(value, "nome")} />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control name="senha" type="password" autoComplete="off" value={loginFormData.senha} onChange={(value) => handleLoginChange(value, "senha")} />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <br />
                    <Link appearance="default">Esqueceu a senha?</Link>
                    <br />
                    <Button type='submit' className='modalloginbutton' appearance="primary">Entrar</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Cadastro">
              <Form onSubmit={handleCadastrosSubmit}>
                <div className='d-flex cadastro'>
                  <h3 className='titulomodalcadastro'>Cadastro</h3>
                  <img className='logotitulocadastro' src={CatLogo} alt="imagem" />
                </div>
                <Form.Group controlId="cadastroNome">
                  <Form.ControlLabel>Username</Form.ControlLabel>
                  <Form.Control type='text' name="nome" value={cadastroFormData.nome} onChange={(value) => handleCadastrosChange(value, "nome")} />
                </Form.Group>
                <Form.Group controlId="cadastroEmail">
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <Form.Control name="email" type="email" value={cadastroFormData.email} onChange={(value) => handleCadastrosChange(value, "email")} />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Senha</Form.ControlLabel>
                  <Form.Control name="senha" type="password" value={cadastroFormData.senha} onChange={(value) => handleCadastrosChange(value, "senha")} autoComplete="off" />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button type='submit' className='modalloginbutton'>Criar conta</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Tabs.Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalLogin;
