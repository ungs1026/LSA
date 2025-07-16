// src/pages/ArkPage.jsx

import React, { useState, useEffect } from 'react';
import { arksData } from '../data/db';

const ArkPage = ({ initialData }) => {
  const [selectedArk, setSelectedArk] = useState(arksData[0]);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (initialData && initialData.type === 'ark') {
      const arkToSelect = arksData.find(ark => ark.id === initialData.id);
      if (arkToSelect) setSelectedArk(arkToSelect);
    }
  }, [initialData]);

  const handleArkSelect = ark => setSelectedArk(ark);
  const toggleLanguage = () => setLanguage(prev => prev === 'ko' ? 'en' : 'ko');

  // Helpers for multilingual fields
  const display = {
    name: language === 'ko' ? selectedArk.shortName : selectedArk.name_en,
    keyword: language === 'ko' ? selectedArk.keyword : selectedArk.keyword_en,
    location: language === 'ko' ? selectedArk.location : selectedArk.location_en,
    description: language === 'ko' ? selectedArk.description : selectedArk.description_en,
    narrative: language === 'ko' ? selectedArk.narrative : selectedArk.narrative_en,
    labelSymbol: language === 'ko' ? '상징' : 'Symbol',
    labelLocation: language === 'ko' ? '획득 위치' : 'Location',
    labelInfo: language === 'ko' ? '아크 정보' : 'Ark Information',
    labelNarrative: language === 'ko' ? '획득 서사' : 'Acquisition Narrative',
  };

  return (
    <div className="page-content ark-page-container">
      <div className="ark-left-panel">
        <div className="ark-list-header">
          {language === 'ko' ? '일곱 개의 아크' : 'The Seven Arks'}
        </div>
        <ul className="ark-list">
          {arksData.map(ark => (
            <li
              key={ark.id}
              className={`ark-list-item ${selectedArk.id === ark.id ? 'active' : ''}`}
              onClick={() => handleArkSelect(ark)}
            >
              <img src={ark.image} alt={ark.name} className="ark-list-image" />
              <span className="ark-list-name">
                {language === 'ko' ? ark.shortName : ark.name_en}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="ark-center-panel">
        <div className="ark-display-box">
          <h2 className="ark-display-name">{display.name}</h2>
          <div className="ark-image-wrapper">
            <img src={selectedArk.image} alt={display.name} className="ark-display-image" />
            <img src={selectedArk.hoverImage} alt={display.name} className="ark-hover-image" />
          </div>
          <div className="ark-materials">
            <div className="ark-material-item">
              <span className="material-name">{display.labelSymbol}</span>
              <span className="material-value">{display.keyword}</span>
            </div>
            <div className="ark-material-item">
              <span className="material-name">{display.labelLocation}</span>
              <span className="material-value">{display.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ark-right-panel">
        <div className="ark-description-box">
          <h3 className="ark-description-title">{display.labelInfo}</h3>
          <p className="ark-description-text">{display.description}</p>
          <h3 className="ark-description-title">{display.labelNarrative}</h3>
          <p className="ark-description-text">{display.narrative}</p>
        </div>
      </div>

      <button onClick={toggleLanguage} className="language-toggle-button">
        {language === 'ko' ? 'KO' : 'EN'}
      </button>
    </div>
  );
};

export default ArkPage;
