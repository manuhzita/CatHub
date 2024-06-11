// Navbar
import logoBranco from '../../img/logoBranco.png';
import '../Navbar/style.css';
import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import '../../css/modalogin.css';
import 'rsuite/dist/rsuite.min.css';
import CatLogo from '../../img/gatu.png';
import { Modal, ButtonToolbar, Button, Form, Tabs } from 'rsuite';
import Logo from "../../img/gatu.png";
import Image from "react-bootstrap/Image";
import Modall from "react-bootstrap/Modal";
import Buttonn from "react-bootstrap/Button";


function Navbar() {
    const [cadastroFormData, setCadastroFormData] = useState({
        nome: '',
        email: '',
        senha: ''
    });

    const handleCadastrosChange = (value, name) => {
        setCadastroFormData({
            ...cadastroFormData,
            [name]: value
        });
    };
    const handleCadastrosSubmit = async () => {
        try {
            await axios.post('http://localhost:3002/cadastro', cadastroFormData);
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Cadastro criado com sucesso!'
            }).then(() => {
                window.location.reload(true);
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
    const [loginFormData, setLoginFormData] = useState({
        nome: '',
        senha: ''
    });

    const handleLoginChange = (event, name) => {
        if (event && event.target) {
            const { value } = event.target;
            setLoginFormData({
                ...loginFormData,
                [name]: value
            });
        }
    };
    const handleLoginSubmit = async (event) => {
        if (event && event.preventDefault) {
            event.preventDefault();
        }

        try {
            console.log('Dados do formulário:', loginFormData);
            await axios.post('http://localhost:3002/cadastro', loginFormData);
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Login bem-sucedido!'
            }).then(() => {
                window.location.reload(true);
            });
        } catch (error) {
            console.error('Erro ao fazer login', error);
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Erro ao fazer login. Verifique o console para mais detalhes.'
            });
        }

    };
    const [contatoFormData, setContatoFormData] = useState({
        email: '',
        mensagem: ''
    });

    const handleContatoChange = (event) => {
        const { name, value } = event.target;
        setContatoFormData({
            ...contatoFormData,
            [name]: value
        });
    };

    const handleContatoSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:3002/contatos', contatoFormData);
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Mensagem enviada com sucesso!'
            }).then(() => {
                // Se deseja alguma ação após o envio, adicione aqui
            });
        } catch (error) {
            console.error('Erro ao enviar mensagem', error);
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Erro ao enviar mensagem. Verifique o console para mais detalhes.'
            });
        }
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [show, setShow] = useState(false);
    const handleClosed = () => setShow(false);
    const handleShows = () => setShow(true);
    return (
        <>
            <nav className="navbar">

                <img className='cathub' src={logoBranco} />

                <div className="search-bar">
                    <input className='buscar' type="text" placeholder="Buscar..." />
                </div>
                <button className='Buscar-botao' type="button">Buscar</button>


                <ButtonToolbar className='d-flex toolbar'>

                    <Buttonn className='Login-botao' variant="primary" onClick={handleShows}>
                        Fale conosco!
                    </Buttonn>
                    <Button className='Login-botao ' onClick={handleOpen}> Entrar</Button>
                </ButtonToolbar>




                <Modal open={open} onClose={handleClose}>
                    <Modal.Header>
                    </Modal.Header>
                    <Modal.Body>
                        <Tabs defaultActiveKey="1" appearance="subtle">
                            <Tabs.Tab eventKey="1" title="Login">

                                <div className='d-flex login'>
                                    <h3 className='titulomodallogin'>Login</h3>
                                    <img className='logotitulologin' src={CatLogo} alt="imagem" />
                                </div>
                                <br />
                                <h6 className='sub'>Entre para ter acesso a videos exclusivos!</h6>
                                <br />
                                <Form onSubmit={(event) => handleLoginSubmit(event)}>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel className='formlabel'>Nome de Usuário</Form.ControlLabel>
                                        <Form.Control className='inputform' name="nome" type='text' onChange={(event) => handleLoginChange(event, "nome")} />
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.ControlLabel className='formlabel'>Senha</Form.ControlLabel>
                                        <Form.Control className='inputform' name="senha" type="password" onChange={(event) => handleLoginChange(event, "senha")} autoComplete="off" />
                                    </Form.Group>

                                    <Form.Group>
                                        <ButtonToolbar>
                                            <Button type='submit' className='modalloginbutton' appearance="primary">Entrar</Button>
                                        </ButtonToolbar>
                                    </Form.Group>
                                </Form>
                                <br />
                            </Tabs.Tab>

                            <Tabs.Tab eventKey="2" title="Cadastro">
                                <Form onSubmit={handleCadastrosSubmit}>
                                    <div className='d-flex cadastro'>
                                        <h3 className='titulomodalcadastro'>Cadastro</h3>
                                        <img className='logotitulocadastro' src={CatLogo} alt="imagem" />
                                    </div>
                                    <Form.Group controlId="cadastroNome">
                                        <Form.ControlLabel className='formlabel'>Nome de usuário</Form.ControlLabel>
                                        <Form.Control className='inputform' type='text' name="nome" value={cadastroFormData.nome} onChange={(value) => handleCadastrosChange(value, "nome")} />
                                    </Form.Group>
                                    <Form.Group controlId="cadastroEmail">
                                        <Form.ControlLabel className='formlabel'>Email</Form.ControlLabel>
                                        <Form.Control className='inputform' name="email" type="email" value={cadastroFormData.email} onChange={(value) => handleCadastrosChange(value, "email")} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.ControlLabel className='formlabel'>Senha</Form.ControlLabel>
                                        <Form.Control className='inputform' name="senha" type="password" value={cadastroFormData.senha} onChange={(value) => handleCadastrosChange(value, "senha")} autoComplete="off" />
                                    </Form.Group>
                                    <Form.Group>
                                        <ButtonToolbar>
                                            <Button type='submit' className='modalcadastrobutton'>Criar conta</Button>
                                        </ButtonToolbar>
                                    </Form.Group>
                                </Form>
                            </Tabs.Tab>
                        </Tabs>
                    </Modal.Body>

                </Modal>

                <Modall
                    show={show}
                    onHide={handleClosed}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modall.Body>
                        <div class="form-container">
                            <Image src={Logo} className="CatHub" width={180} rounded alt='imagem' />
                            <form className="form" onSubmit={handleContatoSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Coloque seu Email para entrarmos em contato</label>
                                    <input
                                        required
                                        name="email"
                                        id="email"
                                        type="email"
                                        value={contatoFormData.email}
                                        onChange={handleContatoChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mensagem">Como Podemos Ajudar Você</label>
                                    <textarea
                                        required
                                        cols="50"
                                        rows="10"
                                        id="mensagem"
                                        name="mensagem"
                                        value={contatoFormData.mensagem}
                                        onChange={handleContatoChange}
                                    />
                                </div>
                                <button type="submit" className="form-submit-btn">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </Modall.Body>
                </Modall>
            </nav>
        </>
    );
}

export default Navbar;