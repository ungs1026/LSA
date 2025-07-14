import React, { useState, useEffect } from 'react';
import { oldEsthers, currentEsthers, commanders } from '../data/db';
import Card3D from '../components/Card3D';
import CharacterModal from '../components/CharacterModal';

const CharactersPage = ({ initialData }) => {
  const [activeTab, setActiveTab] = useState('current-esthers');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChar, setSelectedChar] = useState(null);
  const [language, setLanguage] = useState('ko');

  useEffect(() => {
    if (initialData && initialData.type === 'character') {
      if (initialData.source === 'allEsthersData' && initialData.group === '(구) 에스더') setActiveTab('old-esthers');
      else if (initialData.source === 'allEsthersData') setActiveTab('current-esthers');
      else if (initialData.source === 'commanders') setActiveTab('commanders');

      handleCardClick(initialData);
    }
  }, [initialData]);

  const handleCardClick = (character) => {
    setSelectedChar(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedChar(null);
  };

  const handleToggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

  const renderContent = () => {
    let characterList;
    switch (activeTab) {
      case 'old-esthers': characterList = oldEsthers; break;
      case 'current-esthers': characterList = currentEsthers; break;
      case 'commanders': characterList = commanders; break;
      default: characterList = [];
    }
    return characterList.map(item => (
      <Card3D 
        key={`${activeTab}-${item.name}`} 
        item={item} 
        onClick={() => handleCardClick(item)} 
        language={language}
      />
    ));
  };

  return (
    <div className="page-content">
      <h1 className="page-title">CHARACTERS</h1>
      <div id="boss-toggle-buttons">
        <button className={`toggle-btn ${activeTab === 'old-esthers' ? 'active' : ''}`} onClick={() => setActiveTab('old-esthers')}>
          (구) 에스더
        </button>
        <button className={`toggle-btn ${activeTab === 'current-esthers' ? 'active' : ''}`} onClick={() => setActiveTab('current-esthers')}>
          에스더
        </button>
        <button className={`toggle-btn ${activeTab === 'commanders' ? 'active' : ''}`} onClick={() => setActiveTab('commanders')}>
          카제로스 군단장
        </button>
      </div>
      <div className="boss-grid">{renderContent()}</div>
      <CharacterModal 
        character={selectedChar} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        language={language}
      />
      <button onClick={handleToggleLanguage} className="language-toggle-button">
        {language === 'ko' ? 'KO' : 'EN'}
      </button>
    </div>
  );
};

export default CharactersPage;