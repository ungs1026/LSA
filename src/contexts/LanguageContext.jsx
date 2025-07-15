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

      {/* 우측 하단 EN/KO 토글 버튼 */}
      <div className="fixed bottom-4 right-4 space-x-2 z-50">
        <button
          onClick={() => setLanguage('ko')}
          className="language-toggle-button"
        >
          KO
        </button>
        <button
          onClick={() => setLanguage('en')}
          className="language-toggle-button"
        >
          EN
        </button>
      </div>
    </LanguageContext.Provider>
  );
};
