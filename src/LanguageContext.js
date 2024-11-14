import React, { createContext, useState } from 'react';
import enTranslations from './locales/en/translations.json';
import ptTranslations from './locales/pt/translations.json';
import esTranslations from './locales/es/translations.json';


export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [texts, setTexts] = useState(enTranslations);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    if (lang === 'en') {
      setTexts(enTranslations);
    } else if (lang === 'pt') {
      setTexts(ptTranslations);
    } else if (lang === 'es') {
      setTexts(esTranslations);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, texts, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
