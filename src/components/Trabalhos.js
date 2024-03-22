import React, { useContext } from 'react';
import {LinhaDireita, Container, Timeline, Heading, Cartao, CartaoBody, CartaoTitulo, Col, Button2, ProjetosContainer} from '../styled'
import { Row } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Projetos from './Projetos';
import { LanguageContext } from '../LanguageContext';
import cardImage from '../calc.png';
import chartImage from '../chart.png';
import Fsat from '../Site_FonteneleSat.jpg';


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
                        <Heading>{texts.trabalhos.titulo}:</Heading>
                        <Cartao>
                            <CartaoBody>
                                <CartaoTitulo>2014-2017</CartaoTitulo>
                                <p>{texts.trabalhos.detalheCard1}</p>
                            </CartaoBody>
                        </Cartao>
                        <Cartao>
                            <LinhaDireita>
                                <CartaoTitulo>2021-2022</CartaoTitulo>
                                <p>{texts.trabalhos.detalheCard2}</p>
                            </LinhaDireita>
                        </Cartao>
                        <Cartao>
                            <CartaoBody>
                                <CartaoTitulo>2020-2022</CartaoTitulo>
                                <p>{texts.trabalhos.detalheCard3}</p>
                            </CartaoBody>
                        </Cartao>
                        <Cartao>
                            <LinhaDireita>
                                <CartaoTitulo>2022-2023</CartaoTitulo>
                                <p>{texts.trabalhos.detalheCard4}</p>
                            </LinhaDireita>
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
            
                <h3>{texts.trabalhos.titulo2} </h3><br />
                <ProjetosContainer>
                    <Projetos
                        link={'https://frontend-mercado-livre.onrender.com/'}
                        tituloCard1={texts.projetos.tituloCard1}
                        descCard1={texts.projetos.descCard1} 
                        imagem={cardImage}
                    />
                    <Projetos
                        link={'https://github.com/othonaf/Teste-Copybase/'}
                        tituloCard1={texts.projetos.tituloCard2}
                        descCard1={texts.projetos.descCard2} 
                        imagem={chartImage}
                    />
                    <Projetos
                        link={'https://github.com/othonaf/backend-developer-test-Plooral-/tree/OthonASFontenele'}
                        tituloCard1={texts.projetos.tituloCard3}
                        descCard1={texts.projetos.descCard3} 
                        imagem={'https://imgs.search.brave.com/GfuUq2h7M_5DMt-eq95Dp_Qlymud6lCB4gQXoM2E1tA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hcnF1/aXZvLmRldm1lZGlh/LmNvbS5ici9jdXJz/b3MvaW1hZ2VtL2N1/cnNvXzE0ODIuanBn'}
                    />
                    <Projetos
                        link={'https://github.com/othonaf/FonteneleSatFrontend'}
                        tituloCard1={texts.projetos.tituloCard4}
                        descCard1={texts.projetos.descCard4} 
                        imagem={Fsat}
                    />
                    <Projetos
                        link={'https://github.com/othonaf/FonteneleSatFrontend'}
                        tituloCard1={texts.projetos.tituloCard5}
                        descCard1={texts.projetos.descCard5} 
                        imagem={'https://i.pinimg.com/564x/74/e1/e1/74e1e16434acae34f99ec4686de8385e.jpg'}
                    />
                </ProjetosContainer>

            
            <Button2 onClick={handleClick}>
                {texts.trabalhos.botão}
            </Button2>
        </Container>

    );
}

export default Trabalhos;