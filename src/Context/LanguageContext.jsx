import React, { createContext, useContext, useState } from 'react';
import i18n from '../i18n';
import Cookies from 'js-cookie';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(Cookies.get('i18next') || 'en');

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    Cookies.set('i18next', lang, { expires: 7 }); // Store for 7 days
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
