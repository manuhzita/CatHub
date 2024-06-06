//Rodape
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logoBranco from '../../img/logoBranco.png';
import Col from 'react-bootstrap/Col';
import '../Rodape/style.css'

const Rodape = () => {
    return (
        <>
            <footer className="rodape">
                <Container className="rodaCat">
                    <Row>
                        <Col md={4}>
                            <div>
                                <h4>Comunidade</h4>
                                <p className="complemento">Desenvolvedores</p>
                                <p className="complemento">Âgencia e profissionais</p>
                                <p className="complemento">Eventos</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div>
                                <h4>Nossa empresa</h4>
                                <p className="complemento">Nossa história</p>
                                <p className="complemento">Sala de imprensa</p>
                                <p className="complemento">Carreiras</p>
                                <p className="complemento">Acessibilidade</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div>
                                <h4>Ajuda</h4>
                                <p className="complemento">Fale conosco</p>
                                <p className="complemento">Contrate um especialista</p>
                                <p className="complemento">Central de ajuda</p>
                                <p className="complemento">Equipe de venda</p>
                            </div>
                        </Col>
                    </Row>

                    <hr />
                    <Row className="secondRodape">
                        <Col md={9}>
                            <div>
                                <img className="image" src={logoBranco} />
                            </div>
                        </Col>
                        <Col className="extras" md={1}><p>Sobre nós</p></Col>
                        <Col className="extras" md={1}><p>Contato</p></Col>
                        <Col className="extras" md={1}><p>Legal</p></Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Rodape;
