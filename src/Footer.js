import React, { useContext } from 'react';
import { Background, Titulo3, Whatsapp, Container, Titulo4 } from './styled'
import { Row, Col } from 'reactstrap';
import whatsimage from './whatsimage.png';
import outlook from './outlook.png';
import { LanguageContext } from './LanguageContext';

const anoAtual = new Date().toLocaleDateString('pt-BR', {
  year: 'numeric'
});

function Footer(props) {
  const { texts } = useContext(LanguageContext);
  return (
    <Container>
      <Background>
        <Row>
          <Titulo3>Othon Abraão S. Fontenele</Titulo3>
        </Row>
        <Col>
          <Row>
            <Titulo4> <Whatsapp src={whatsimage} alt='' /> Whatsapp: (85)99810-5575</Titulo4>
          </Row>
          <Titulo4> <Whatsapp src={outlook} alt='' /> othon.ab@hotmail.com</Titulo4>
        </Col>

        <Col>
          <Row>
            <Titulo4>{texts.contato.redes}</Titulo4>
            <p> <a href="https://www.github.com/othonaf" target="_blank" rel="noreferrer">
              <picture>
                <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github-dark.svg" />
                <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" />
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" alt='' width="32" height="32" />
              </picture>
            </a>
              <a href="https://www.linkedin.com/in/abraão-fontenele-5a4433102/" target="_blank" rel="noreferrer"> <picture>
                <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin-dark.svg" />
                <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" />
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" alt='' width="32" height="32" />
              </picture>
              </a>
              <a href="https://www.youtube.com/@othonabraao7742" target="_blank" rel="noreferrer">
                <picture>
                  <source media="(prefers-color-scheme: dark)" srcset="undefined" />
                  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/youtube.svg" />
                </picture>
              </a>
            </p>
          </Row>
        </Col>
        <Row>
          <Titulo4>{anoAtual}</Titulo4>
        </Row>
      </Background>
    </Container>
  )
};

export default Footer;

