import React, { useContext } from 'react';
import { CardBody, CardText, Button } from 'reactstrap'
import './App.css';
import {CadImage, CardsProjetos, TituloProjeto} from './styled';
import cardImage from './calc.png';
import { LanguageContext } from './LanguageContext';


const Projetos = () => {
    const { texts } = useContext(LanguageContext);
    const handleClick = () => {
        window.open('https://frontend-calculadora-mercado-p-65eb42d5d0ce.herokuapp.com/', '_blank');
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
                <CardText className='descProjeto'>
                    {texts.projetos.descCard1}
                </CardText>
                <Button onClick={handleClick}>
                    {texts.projetos.botao}
                </Button>
            </CardBody>
        </CardsProjetos>
    )
}

export default Projetos;