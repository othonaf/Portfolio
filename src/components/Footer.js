import React, { useContext } from 'react';
import { Titulo3, BackFooter, TitulosFooter, Nome, Contato, Redes, ContatoWhats} from '../styled'
import { SiWhatsapp } from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { LanguageContext } from '../LanguageContext';

const anoAtual = new Date().toLocaleDateString('pt-BR', {
  year: 'numeric'
});

function Footer(props) {
  const { texts } = useContext(LanguageContext);
  return (
    <BackFooter id='background-footer'>
      <Nome>
        <Titulo3>Othon Abraão S. Fontenele</Titulo3>
      </Nome>

      <Contato>
        <TitulosFooter>
          <ContatoWhats href="https://wa.me/5585998105575" target="_blank" rel="noreferrer">
            <SiWhatsapp /> (85) 99810-5575
          </ContatoWhats>
        </TitulosFooter>
        <TitulosFooter>
          <ContatoWhats href="mailto:othon.ab@hotmail.com" target="_blank" rel="noreferrer">
            <PiMicrosoftOutlookLogoFill /> othon.ab@hotmail.com
          </ContatoWhats>
        </TitulosFooter>
      </Contato>

      <Redes>
        <TitulosFooter>{texts.contato.redes}</TitulosFooter>
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

      </Redes>
      <Nome>
        <TitulosFooter>©{anoAtual}</TitulosFooter>
      </Nome>

    </BackFooter>
  )
};

export default Footer;

