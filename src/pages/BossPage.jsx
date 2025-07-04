import React, { useState, useEffect } from 'react';
import { bossRaids } from '../data/db';
import Card3D from '../components/Card3D';
import BossModal from '../components/BossModal';

const BossPage = ({ initialData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoss, setSelectedBoss] = useState(null);

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

  return (
    <div className="page-content">
      <h1 className="page-title">BOSS RAID</h1>
      <div className="boss-grid">
        {bossRaids.map((item) => (
          <Card3D 
            key={item.name} 
            item={item}
            onClick={() => handleCardClick(item)} 
          />
        ))}
      </div>
      <BossModal 
        bossData={selectedBoss}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default BossPage;