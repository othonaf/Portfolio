import React, { useContext } from 'react';
import { Row, Col } from 'reactstrap';
import { Container, HOME_HAND_HQYY5, Perfil, Titulo } from '../styled'
import perfil2 from '../perfil2.jpeg';
import ConsoleCard from './ConsoleCard';
import { LanguageContext } from '../LanguageContext';
import HardSkills from './HardSkills';


function Content() {
  const { texts } = useContext(LanguageContext);
  return (
    <Container>
      <Row>
        <Col>
          <Perfil src={perfil2} alt='' width="200" height="200" />
        </Col>
      </Row>
      <Row>
        <Col><h2>{texts.content.ola}
          <HOME_HAND_HQYY5>👋</HOME_HAND_HQYY5>
        </h2>
        </Col>
      </Row>
      <Row>
        <Col><Titulo>{texts.content.titulo}.</Titulo></Col>
      </Row>
      <br></br>

      <Col>
        <Row id='sobre-mim'>
          <div>
            <ConsoleCard />
          </div>
        </Row>

        <Row>
          <HardSkills text={texts.content.skills}/>
        </Row>

        <br></br>



      </Col>
    </Container>

  );
}

export default Content;