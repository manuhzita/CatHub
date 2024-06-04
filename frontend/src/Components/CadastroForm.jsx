// CadastroForm.jsx
import React from 'react'
import 'rsuite/dist/rsuite.min.css';
import { Form, ButtonToolbar, Button, Input } from 'rsuite';
import { Modal } from 'rsuite';
import { Tabs } from 'rsuite';
import '../css/modalogin.css'
import { Link } from 'react-router-dom';
import CatLogo from '../img/cathub-removebg-preview.png'

const ModalLogin = () => {
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

        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="1" appearance="subtle">
            <Tabs.Tab eventKey="1" title="Login">
              <br />
              <div className='d-flex login'>
                <h3 className='titulomodallogin'>Login</h3>
                <img className='logotitulologin' src={CatLogo} />

              </div>
              <br />
              <br />
              <Form >
                <Form.Group controlId="name">
                  <Form.ControlLabel>Username</Form.ControlLabel>
                  <Form.Control name="name" />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <br />
                    <Link appearance="default">Esqueceu a senha?</Link>
                    <br />
                    <Button className='modalloginbutton' appearance="primary">Entrar</Button>

                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Tabs.Tab>
            <Tabs.Tab eventKey="2" title="Cadastro">
              <Form>
                <div className='d-flex cadastro'>
                  <h3 className='titulomodalcadastro'>Cadastro</h3>
                  <img className='logotitulocadastro' src={CatLogo} />

                </div>
                <Form.Group controlId="name">
                  <Form.ControlLabel>Username</Form.ControlLabel>
                  <Form.Control name="name" />

                </Form.Group>
                <Form.Group controlId="email">
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <Form.Control name="email" type="email" />

                </Form.Group>
                <Form.Group controlId="password">
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button className='modalloginbutton'> Criar conta</Button>
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

export default CadastroForm;

//meu penis está ereto
//meu pau ta muito sujo