import React, { useContext } from 'react';
import { CardBody, Button } from 'reactstrap'
import {CadImage, CardsProjetos, TituloProjeto, DescricaoProjt} from './styled';
import cardImage from './calc.png';
import { LanguageContext } from './LanguageContext';


const Projetos = () => {
    const { texts } = useContext(LanguageContext);
    const handleClick = () => {
        window.open('https://frontend-mercado-livre.onrender.com/', '_blank');
    }
    return (
        <CardsProjetos
            body
            inverse
            style={{
                width: '19rem', 
            }}
        >
            <CadImage alt="" src={cardImage} />
            <CardBody>
                <TituloProjeto>
                    {texts.projetos.tituloCard1}
                </TituloProjeto>
                <DescricaoProjt>
                    {texts.projetos.descCard1}
                </DescricaoProjt>
                <Button onClick={handleClick}>
                    {texts.projetos.botao}
                </Button>
            </CardBody>
        </CardsProjetos>
    )
}

export default Projetos;