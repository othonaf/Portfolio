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
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" alt="" />
                    </a>
                    <SkillLevel>98%</SkillLevel>
                    <SkillName>TypeScript</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" alt="" />
                    </a>
                    <SkillLevel>98%</SkillLevel>
                    <SkillName>Git</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" alt="" />
                    </a>
                    <SkillLevel>89%</SkillLevel>
                    <SkillName>ReactJS</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" alt="" />
                    </a>
                    <SkillLevel>81%</SkillLevel>
                    <SkillName>MySQL</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" alt="" />
                    </a>
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>PostgreSQL</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" alt="" />
                    </a>
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>NodeJS</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" alt="" />
                    </a>
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>ExpressJS</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg" alt="" />
                    </a>
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>Heroku</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" alt="" />
                    </a>
                    <SkillLevel>80%</SkillLevel>
                    <SkillName>Docker</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg" alt="" />
                    </a>
                    <SkillLevel>87%</SkillLevel>
                    <SkillName>AWS</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://cloud.google.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg" alt="" />
                    </a>
                    <SkillLevel>87%</SkillLevel>
                    <SkillName>Google Cloud</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <a href="https://nestjs.com/" target="_blank" rel="noreferrer">
                        <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg" alt="" />
                    </a>
                    <SkillLevel>87%</SkillLevel>
                    <SkillName>NestJS</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
            </SkillsContainer>
        </SkillSection>
    )
    //
}

export default HardSkills;