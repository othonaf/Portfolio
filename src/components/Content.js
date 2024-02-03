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
          {/* <p align="center">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" />
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" />
            </a>
            <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="36" height="36" alt="PostgreSQL" />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" />
            </a>
            <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" />
            </a>
            <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg" width="36" height="36" alt="Heroku" />
            </a>
            <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" width="36" height="36" alt="Docker" />
            </a>
            <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg" width="36" height="36" alt="Amazon Web Services" />
            </a>
            <a href="https://cloud.google.com/" target="_blank" rel="noreferrer">
              <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg" width="36" height="36" alt="Google Cloud" />
            </a>
          </p> */}
        </Row>

        <br></br>



      </Col>
    </Container>

  );
}

export default Content;