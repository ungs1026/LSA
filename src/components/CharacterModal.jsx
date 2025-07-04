import React, { useState, useEffect } from 'react';

const CharacterModal = ({ character, isOpen, onClose }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // 모달이 닫히거나 캐릭터가 변경될 때 선택된 스킬 초기화
  useEffect(() => {
    if (!isOpen) {
      setSelectedSkill(null);
    } else {
      // 모달이 열릴 때(캐릭터가 변경될 때) 스킬 선택 초기화
      setSelectedSkill(null);
    }
  }, [isOpen, character]);

  if (!isOpen || !character) {
    return null;
  }

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = `https://placehold.co/400x400/1a1a1e/e0e0e0?text=${character.name}`;
  };

  const handleSkillClick = (skill) => {
    // 이미 선택된 스킬을 다시 클릭하면 설명을 닫고, 아니면 새로운 설명을 보여줌
    setSelectedSkill(prevSkill => prevSkill && prevSkill.name === skill.name ? null : skill);
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="character-modal-content new-layout" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close-btn" onClick={onClose}>&times;</span>
        
        <img 
          src={character.bg} 
          alt={`${character.name} background`} 
          className="character-modal-img-top"
          onError={(e) => handleImageError(e)}
        />

        <div className="char-info-container">
          {/* --- 좌측 정보 패널 --- */}
          <div className="char-info-left">
            <div className="char-group-display">
              <span>{character.group}</span>
            </div>
            <h2 className="char-info-name">{character.name}</h2>
            <p className="char-info-subtitle">{character.subtitle}</p>
            
            <div className="char-info-divider"></div>

            <div className="char-info-details">
              <div className="detail-item">
                <span className="detail-title">종족</span>
                <span className="detail-value">{character.race}</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">칭호</span>
                <span className="detail-value">{character.title}</span>
              </div>
            </div>

            {/* --- 에스더 스킬 섹션 --- */}
            {character.estherSkills && (
              <div className="esther-skill-section">
                <div className="char-info-divider"></div>
                <h3 className="detail-title" style={{marginBottom: '15px'}}>에스더 스킬</h3>
                <div className="esther-skills-container">
                  {character.estherSkills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`esther-skill-icon ${selectedSkill && selectedSkill.name === skill.name ? 'active' : ''}`}
                      onClick={() => handleSkillClick(skill)}
                      title={skill.name}
                    >
                      <img src={skill.icon} alt={skill.name} onError={(e) => e.target.style.display='none'} />
                    </div>
                  ))}
                </div>
                {selectedSkill && (
                  <div className="esther-skill-description">
                    <p>{selectedSkill.description}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* --- 중앙 이미지 패널 (데스크탑) [수정됨] --- */}
          <div className="char-info-center">
            <img 
              src={character.group === '카제로스 군단장' ? character.bg : character.img} 
              alt={character.name} 
              className="character-modal-img"
              onError={(e) => handleImageError(e)}
            />
          </div>

          {/* --- 우측 설명 패널 --- */}
          <div className="char-info-right">
            <div className="char-info-description">
              <h3 className="description-title">기본 정보</h3>
              <p>{character.basicInfo}</p>
              <div className="char-info-divider small"></div>
              
              <h3 className="description-title">능력</h3>
              <p>{character.combatInfo}</p>
              <div className="char-info-divider small"></div>

              <h3 className="description-title">서사</h3>
              <p>{character.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
