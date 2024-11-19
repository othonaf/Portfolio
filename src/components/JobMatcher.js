import React, { useState, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from '../LanguageContext';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { JobMatch, MatchTitulo, MatchSubtitulo, MatchButton, TextArea, DivResponse } from '../styled';

const JobMatcher = () => {
    const { texts } = useContext(LanguageContext);
    const { language } = useContext(LanguageContext); 
    let languageVariable;
    if (language === 'en') { languageVariable = 'inglês'; }
    else if (language === 'pt') { languageVariable = 'português'; }
    else if (language === 'es') { languageVariable = 'espanhol'; }

    const [input, setInput] = useState('');    // Armazena o texto da vaga inserido pelo recrutador
    const [output, setOutput] = useState('');  // Armazena a resposta gerada pela API
    const [loading, setLoading] = useState(false);  // Controle de estado para o carregamento

    const linkProd = "https://portfoliobackend-production-4701.up.railway.app/jobMatch";
    //const linkDevTest = "http://localhost:3003/jobMatch";

    const processarTexto = async () => {
        setLoading(true);

        try {
            const response = await axios.post(linkProd,
                {
                    input: input,
                    lang: languageVariable
                }
            );

            if (response.data) {
                setOutput(response.data.trim());
            } else {
                throw new Error("Resposta inesperada da API.");
            }
        } catch (error) {
            setOutput("Houve um erro ao processar sua solicitação. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <JobMatch>
            {output && (
                <DivResponse>
                    <h3>{texts.prompt.resposta}</h3>
                    {output.split('\n').map((paragraph, index) => ( <p key={index}>{paragraph}</p> ))}
                   
                </DivResponse>
            )}
            <MatchTitulo>{texts.prompt.titulo}</MatchTitulo>
            <MatchSubtitulo><FaArrowAltCircleRight /> {texts.prompt.subtitulo}</MatchSubtitulo>
            <TextArea
                rows="10"
                value={input}                  
                onChange={(e) => setInput(e.target.value)}
                placeholder={texts.prompt.descricao}
            />
            <MatchButton type='button' onClick={processarTexto} disabled={loading}>
                {loading ? `${texts.prompt.botao_Op2}` : `${texts.prompt.botao_Op1}`}
            </MatchButton>

            
        </JobMatch>
    );
};

export default JobMatcher;

