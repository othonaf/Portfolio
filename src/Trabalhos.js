import React, { useContext } from 'react';
import './App.css';
import {Container, Timeline, Heading, Cartao, CartaoBody, CartaoTitulo, Col, Button2} from './styled'
import { Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Projetos from './Projetos';
import { LanguageContext } from './LanguageContext';

function Trabalhos() {
    const { texts } = useContext(LanguageContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Timeline>
                        <Heading>{texts.trabalhos.titulo} </Heading>
                        <Cartao>
                            <CartaoBody>
                                <CartaoTitulo>2014-2017</CartaoTitulo>
                                <p>{texts.trabalhos.detalheCard1}</p>
                            </CartaoBody>
                        </Cartao>
                        <Cartao>
                            <CartaoBody>
                                <CartaoTitulo>2021-2022</CartaoTitulo>
                                <p>{texts.trabalhos.detalheCard2}</p>
                            </CartaoBody>
                        </Cartao>
                        <Cartao>
                            <CartaoBody>
                                <CartaoTitulo>2020-2022</CartaoTitulo>
                                <p>{texts.trabalhos.detalheCard3}</p>
                            </CartaoBody>
                        </Cartao>
                        <Cartao>
                            <CartaoBody>
                                <CartaoTitulo>2022-2023</CartaoTitulo>
                                <p>{texts.trabalhos.detalheCard4}</p>
                            </CartaoBody>
                        </Cartao>
                        <Cartao>
                            <CartaoBody>
                                <CartaoTitulo>{texts.trabalhos.card5Titulo}</CartaoTitulo>
                                <p>{texts.trabalhos.detalheCard5}</p>
                            </CartaoBody>
                        </Cartao>
                    </Timeline>
                    <br />
                    <br />

                </Col>
            </Row>
            <Row>
                <h3>{texts.trabalhos.titulo2} </h3>
                <Col><Projetos /></Col>

            </Row>
            <Button2 onClick={handleClick}>
                {texts.trabalhos.botão}
            </Button2>
        </Container>

    );
}

export default Trabalhos;