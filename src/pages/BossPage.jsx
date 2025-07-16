// src/pages/BossPage.jsx
import React, { useState, useEffect } from 'react';
import { bossRaids } from '../data/db';
import Card3D from '../components/Card3D';
import BossModal from '../components/BossModal';

const BossPage = ({ initialData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoss, setSelectedBoss] = useState(null);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (initialData && initialData.type === 'boss') {
      handleCardClick(initialData);
    }
  }, [initialData]);

  const handleCardClick = (boss) => {
    if (boss.difficulties && boss.patterns) {
      setSelectedBoss(boss);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBoss(null);
  };

  const toggleLanguage = () => {
    setLanguage(l => (l === 'ko' ? 'en' : 'ko'));
  };

  return (
    <div className="page-content">
      <h1 className="page-title">
        {language === 'ko' ? '보스 레이드' : 'BOSS RAID'}
      </h1>
      <div className="boss-grid">
        {bossRaids.map(item => (
          <Card3D
            key={item.name}
            item={{
              name: language === 'ko' ? item.name : item.eng_name,
              bg: item.bg,
              bg_x_position: item.bg_x_position,
              img: item.img,
              type: item.page
            }}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </div>
      <BossModal
        bossData={selectedBoss}
        isOpen={isModalOpen}
        onClose={closeModal}
        language={language}
      />
      <button
        className="language-toggle-button"
        onClick={toggleLanguage}
        style={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        {language === 'ko' ? 'KO' : 'EN'}
      </button>
    </div>
  );
};

export default BossPage;
