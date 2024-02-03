import { SkillsContainer, 
    SkillLevel, 
    SkillName, 
    SkillInfo, 
    SkillSection, 
    SkillImg, 
    HeadingSkills, 
    SkillCard } 
from '../styled';

function HardSkills(props) {
    return (
        <SkillSection>
            <HeadingSkills>{props.text}:</HeadingSkills>
            <SkillsContainer>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="" />
                    <SkillLevel>98%</SkillLevel>
                    <SkillName>JavaScript</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" alt="" />
                    <SkillLevel>98%</SkillLevel>
                    <SkillName>TypeScript</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" alt="" />
                    <SkillLevel>98%</SkillLevel>
                    <SkillName>Git</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" alt="" />
                    <SkillLevel>89%</SkillLevel>
                    <SkillName>ReactJS</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" alt="" />
                    <SkillLevel>81%</SkillLevel>
                    <SkillName>MySQL</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" alt="" />
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>PostgreSQL</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" alt="" />
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>NodeJS</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" alt="" />
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>ExpressJS</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg" alt="" />
                    <SkillLevel>90%</SkillLevel>
                    <SkillName>Heroku</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" alt="" />
                    <SkillLevel>80%</SkillLevel>
                    <SkillName>Docker</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg" alt="" />
                    <SkillLevel>87%</SkillLevel>
                    <SkillName>AWS</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg" alt="" />
                    <SkillLevel>87%</SkillLevel>
                    <SkillName>Google Cloud</SkillName>
                    <SkillInfo></SkillInfo>
                </SkillCard>
                <SkillCard>
                    <SkillImg src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg" alt="" />
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