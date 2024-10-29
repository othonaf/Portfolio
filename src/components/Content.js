import React, { useContext } from 'react';
import { Row, Col } from 'reactstrap';
import { Container, HOME_HAND_HQYY5, Perfil, Titulo, Badges, Certificacoes, TituloCert, Selo, Selo2 } from '../styled'
import perfil2 from '../perfil2.jpeg';
import ConsoleCard from './ConsoleCard';
import { LanguageContext } from '../LanguageContext';
import HardSkills from './HardSkills';
import Badge from './Badge';
import selo from "../selo.png";


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
          <HardSkills text={texts.content.skills} />
        </Row>
        <br></br>
      </Col>

      <Certificacoes>
        <TituloCert>{texts.content.certificacoes}:</TituloCert>
        <Badges>
          <Selo src={selo} alt=''></Selo>
          <Badge badgeId="94a4143c-013d-47e9-9113-cb1a1a697741" width="350" height="270" />
        </Badges>
        <Badges>
          <Selo2 src={selo} alt=''></Selo2>
          <Badge badgeId="c1506c6d-e200-49ca-b343-e3ccc499cf09" width="350" height="270" />
        </Badges>
      </Certificacoes>

    </Container>

  );
}

export default Content;