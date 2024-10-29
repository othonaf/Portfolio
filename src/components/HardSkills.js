import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import {
    SkillsContainer,
    SkillLevel,
    SkillName,
    SkillInfo,
    SkillSection,
    SkillImg,
    HeadingSkills,
    SkillCard
}
    from '../styled';

function HardSkills(props) {
    const { texts } = useContext(LanguageContext);
    return (
        <SkillSection>
            <HeadingSkills>{props.text}:</HeadingSkills>
            <SkillsContainer>
                <SkillCard>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="" />
                    </a>
                    <SkillLevel>98%</SkillLevel>
                    <SkillName>JavaScript</SkillName>
                    <SkillInfo>{texts.hardskills.javascript}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" alt="" />
                    </a>
                    <SkillLevel>98%</SkillLevel>
                    <SkillName>TypeScript</SkillName>
                    <SkillInfo>{texts.hardskills.TypeScript}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" alt="" />
                    </a>
                    <SkillLevel>98%</SkillLevel>
                    <SkillName>Git</SkillName>
                    <SkillInfo>{texts.hardskills.git}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" alt="" />
                    </a>
                    <SkillLevel>89%</SkillLevel>
                    <SkillName>ReactJS</SkillName>
                    <SkillInfo>{texts.hardskills.react}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" alt="" />
                    </a>
                    <SkillLevel>81%</SkillLevel>
                    <SkillName>MySQL</SkillName>
                    <SkillInfo>{texts.hardskills.mysql}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" alt="" />
                    </a>
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>PostgreSQL</SkillName>
                    <SkillInfo>{texts.hardskills.PostgreSQL}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" alt="" />
                    </a>
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>NodeJS</SkillName>
                    <SkillInfo>{texts.hardskills.nodejs}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" alt="" />
                    </a>
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>ExpressJS</SkillName>
                    <SkillInfo>{texts.hardskills.express}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg" alt="" />
                    </a>
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>Heroku</SkillName>
                    <SkillInfo>{texts.hardskills.heroku}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" alt="" />
                    </a>
                    <SkillLevel>80%</SkillLevel>
                    <SkillName>Docker</SkillName>
                    <SkillInfo>{texts.hardskills.docker}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
                        <SkillImg src="https://icon.icepanel.io/Technology/png-shadow-512/AWS.png" alt="" />
                    </a>
                    <SkillLevel>67%</SkillLevel>
                    <SkillName>AWS</SkillName>
                    <SkillInfo>{texts.hardskills.aws}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://cloud.google.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg" alt="" />
                    </a>
                    <SkillLevel>87%</SkillLevel>
                    <SkillName>Google Cloud</SkillName>
                    <SkillInfo>{texts.hardskills.gcp}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://nestjs.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg" alt="" />
                    </a>
                    <SkillLevel>87%</SkillLevel>
                    <SkillName>NestJS</SkillName>
                    <SkillInfo>{texts.hardskills.nest}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png" alt="" />
                    </a>
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>NextJS</SkillName>
                    <SkillInfo>{texts.hardskills.next}</SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://jestjs.io/pt-BR/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://icon.icepanel.io/Technology/svg/Jest.svg" alt="" />
                    </a>
                    <SkillLevel>95%</SkillLevel>
                    <SkillName>JestJS</SkillName>
                    <SkillInfo>{texts.hardskills.jest}</SkillInfo>
                </SkillCard>
            </SkillsContainer>
        </SkillSection>
    )
}

export default HardSkills;