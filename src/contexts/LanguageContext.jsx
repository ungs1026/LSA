/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';

export const LanguageContext = createContext({
  language: 'ko',
  setLanguage: () => {}
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ko');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}

      
    </LanguageContext.Provider>
  );
};
