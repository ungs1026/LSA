import React, { useState, useEffect } from 'react';

const BossModal = ({ bossData, isOpen, onClose }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [activePattern, setActivePattern] = useState(null);

  useEffect(() => {
    if (bossData) {
      setSelectedDifficulty(bossData.difficulties[0]);
      setActivePattern(null);
    }
  }, [bossData]);

  const handlePatternClick = (patternName) => {
    setActivePattern(activePattern === patternName ? null : patternName);
  };

  if (!isOpen || !bossData || !selectedDifficulty) {
    return null;
  }

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="boss-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close-btn" onClick={onClose}>&times;</span>
        
        {/* --- 좌측 패널 --- */}
        <div className="boss-modal-left">
          <h2 className="boss-modal-title">{bossData.name}</h2>
          <img 
            src={bossData.innerImg} 
            alt={bossData.name} 
            className="boss-modal-img"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x400/1a1a1e/e0e0e0?text=${bossData.name}`; }}
          />
          <div className="difficulty-buttons">
            {bossData.difficulties.map((diff) => (
              <button 
                key={diff.level}
                className={`difficulty-btn ${selectedDifficulty.level === diff.level ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty(diff)}
              >
                {diff.level}
              </button>
            ))}
          </div>
          <div className="boss-info">
            <div className="info-item">
              <span className="info-title">아이템 레벨</span>
              <span className="info-value">{selectedDifficulty.itemLevel}+</span>
            </div>
            <div className="info-item">
              <span className="info-title">체력</span>
              <span className="info-value">{selectedDifficulty.hp}</span>
            </div>
            <div className="info-item">
              <span className="info-title">획득 골드</span>
              <span className="info-value">{selectedDifficulty.gold.toLocaleString()} G</span>
            </div>
          </div>
        </div>

        {/* --- 우측 패널 --- */}
        <div className="boss-modal-right">
          <div className="pattern-section">
            <h3 className="pattern-title">주요 주의 패턴(하드 기준)</h3>
            {bossData.patterns.warning.map((pattern) => (
              <div key={pattern.name} className="pattern-item">
                <button className="pattern-button" onClick={() => handlePatternClick(pattern.name)}>
                  {pattern.hpTrigger}
                </button>
                {activePattern === pattern.name && (
                  <div className="pattern-description">
                    <h4 className="pattern-name-header">{pattern.name}</h4>
                    <p>{pattern.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="pattern-section">
            <h3 className="pattern-title">특수 기믹 (Special Pattern)</h3>
            {bossData.patterns.special.map((pattern) => (
              <div key={pattern.name} className="pattern-item">
                <button className="pattern-button" onClick={() => handlePatternClick(pattern.name)}>
                  {pattern.hpTrigger}
                </button>
                {activePattern === pattern.name && (
                  <div className="pattern-description">
                    <h4 className="pattern-name-header">{pattern.name}</h4>
                    <p>{pattern.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BossModal;