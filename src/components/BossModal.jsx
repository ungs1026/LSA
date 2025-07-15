// src/components/BossModal.jsx
import React, { useState, useEffect } from 'react';

const BossModal = ({ bossData, isOpen, onClose, language }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [activePattern, setActivePattern] = useState(null);

  useEffect(() => {
    if (bossData) {
      setSelectedDifficulty(bossData.difficulties[0]);
      setActivePattern(null);
    }
  }, [bossData]);

  if (!isOpen || !bossData || !selectedDifficulty) return null;

  const hpValue         = language==='ko' ? selectedDifficulty.hp          : selectedDifficulty.eng_hp;
  const goldValue       = language==='ko' ? `${selectedDifficulty.gold.toLocaleString()} G` : selectedDifficulty.eng_gold;
  const titleWarning    = language==='ko' ? '주요 주의 패턴(하드 기준)' : 'Key Warning Patterns (Hard)';
  const titleSpecial    = language==='ko' ? '특수 기믹' : 'Special Patterns';

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="boss-modal-content" onClick={e => e.stopPropagation()}>
        <span className="modal-close-btn" onClick={onClose}>&times;</span>
        <div className="boss-modal-left">
          <h2 className="boss-modal-title">
            {language==='ko' ? bossData.name : bossData.eng_name}
          </h2>
          <img
            src={bossData.innerImg}
            alt={language==='ko' ? bossData.name : bossData.eng_name}
            className="boss-modal-img"
            onError={e => { e.target.onerror=null; e.target.src=`https://placehold.co/400x400/1a1a1e/e0e0e0?text=${bossData.name}`; }}
          />
          <div className="difficulty-buttons">
            {bossData.difficulties.map(diff => (
              <button
                key={diff.level}
                className={`difficulty-btn ${diff.level===selectedDifficulty.level ? 'active': ''}`}
                onClick={()=>setSelectedDifficulty(diff)}
              >
                {language==='ko' ? diff.level : diff.eng_level}
              </button>
            ))}
          </div>
          <div className="boss-info">
            <div className="info-item">
              <span className="info-title">{language==='ko' ? '아이템 레벨' : 'Item Level'}</span>
              <span className="info-value">{selectedDifficulty.itemLevel}+</span>
            </div>
            <div className="info-item">
              <span className="info-title">{language==='ko' ? '체력' : 'HP'}</span>
              <span className="info-value">{hpValue}</span>
            </div>
            <div className="info-item">
              <span className="info-title">{language==='ko' ? '획득 골드' : 'Gold Reward'}</span>
              <span className="info-value">{goldValue}</span>
            </div>
          </div>
        </div>

        <div className="boss-modal-right">
          <div className="pattern-section">
            <h3 className="pattern-title">{titleWarning}</h3>
            {bossData.patterns.warning.map(pat => (
              <div key={pat.name} className="pattern-item">
                <button
                  className="pattern-button"
                  onClick={()=>setActivePattern(activePattern===pat.name?null:pat.name)}
                >
                  {language==='ko' ? pat.hpTrigger : pat.eng_hpTrigger}
                </button>
                {activePattern===pat.name && (
                  <div className="pattern-description">
                    <h4 className="pattern-name-header">
                      {language==='ko'? pat.name : pat.eng_name}
                    </h4>
                    <p>
                      {language==='ko'? pat.description : pat.eng_description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pattern-section">
            <h3 className="pattern-title">{titleSpecial}</h3>
            {bossData.patterns.special.map(pat => (
              <div key={pat.name} className="pattern-item">
                <button
                  className="pattern-button"
                  onClick={()=>setActivePattern(activePattern===pat.name?null:pat.name)}
                >
                  {language==='ko' ? pat.hpTrigger : pat.eng_hpTrigger}
                </button>
                {activePattern===pat.name && (
                  <div className="pattern-description">
                    <h4 className="pattern-name-header">
                      {language==='ko'? pat.name : pat.eng_name}
                    </h4>
                    <p>
                      {language==='ko'? pat.description : pat.eng_description}
                    </p>
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
