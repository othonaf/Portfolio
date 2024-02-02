import React, { useState, useContext } from 'react';
import { CardBody } from 'reactstrap';
import {Card, Console1, Console2, Console3} from '../styled';
import Typewriter from 'typewriter-effect';
import { LanguageContext } from '../LanguageContext';



const ConsoleCard = () => {
  const { texts } = useContext(LanguageContext);
  const [isTyped, setIsTyped] = useState(false);
  const text = texts.console.texto;

  return (
    <Card>
      <CardBody>
        <pre style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
          <Console1>
            {'Othon@PORTFOLIO '}
          </Console1>
          <Console2>
            {'HiRe-ME '}
            <Console3>
              {texts.console.console3}
            </Console3>
          </Console2> <br />
          <code>
            {isTyped ? `$ ${text}` :
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(`$ ${text}`)
                    .pauseFor(3000)
                    .callFunction(() => {
                      setIsTyped(true);
                    })
                    .start();
                }}
                options={{
                  delay: 50,
                }}
              />
            }
          </code>
        </pre>
      </CardBody>
    </Card>
  );
};

export default ConsoleCard;

