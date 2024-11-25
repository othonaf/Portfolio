import React, { useContext } from 'react';
import { Titulo3, BackFooter, TitulosFooter, Nome, Contato, Redes, ContatoWhats, RedesIcons, SiWhatsapp, PiMicrosoftOutlookLogoFill, Telegram, LinkedinItem, YoutubeItem, GitHubItem } from '../styled'
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { LanguageContext } from '../LanguageContext';
import { SiGithub } from "react-icons/si";



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
            <SiWhatsapp /> +55 (85) 99810-5575
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
        <RedesIcons>
          <GitHubItem href="https://www.github.com/othonaf" target="_blank" rel="noreferrer">
            <SiGithub />
          </GitHubItem>
          <LinkedinItem href="https://www.linkedin.com/in/abraao-fontenele/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </LinkedinItem>
          <YoutubeItem href="https://www.youtube.com/@othonabraao7742" target="_blank" rel="noreferrer">
            <IoLogoYoutube />
          </YoutubeItem>
          <Telegram href="http://t.me/othonaf" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </Telegram>
        </RedesIcons>

      </Redes>
      <Nome>
        <TitulosFooter>©{anoAtual}</TitulosFooter>
      </Nome>

    </BackFooter>
  )
};

export default Footer;

