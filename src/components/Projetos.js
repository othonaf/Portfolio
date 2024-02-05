import React, { useContext } from 'react';
import { CardBody, Button } from 'reactstrap'
import {CadImage, CardsProjetos, TituloProjeto, DescricaoProjt} from '../styled';
import { LanguageContext } from '../LanguageContext';


const Projetos = (props) => {
    const { texts } = useContext(LanguageContext);
    const handleClick = () => {
        window.open(props.link, '_blank');
    }
    return (
        <CardsProjetos
            body
            inverse
            
        >
            <CadImage alt="" src={props.imagem} />
            <CardBody>
                <TituloProjeto>
                    {props.tituloCard1}
                </TituloProjeto>
                <DescricaoProjt>
                    {props.descCard1}
                </DescricaoProjt>
                <Button onClick={handleClick}>
                    {texts.projetos.botao}
                </Button>
            </CardBody>
        </CardsProjetos>
    )
}

export default Projetos;