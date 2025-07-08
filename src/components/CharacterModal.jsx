import React, { useState, useEffect } from 'react';
import ImageViewerModal from './ImageViewerModal'; // 새로 만든 컴포넌트 임포트

const CharacterModal = ({ character, isOpen, onClose }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  // 이미지 뷰어 모달을 위한 상태 추가
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerImageUrl, setViewerImageUrl] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setSelectedSkill(null);
      // 캐릭터 모달이 닫히면 이미지 뷰어 모달도 닫기
      setIsViewerOpen(false);
    } else {
      setSelectedSkill(null);
    }
  }, [isOpen, character]);

  if (!isOpen || !character) {
    return null;
  }

  // 이미지 뷰어 열기 핸들러
  const openImageViewer = (url) => {
    setViewerImageUrl(url);
    setIsViewerOpen(true);
  };

  // 이미지 뷰어 닫기 핸들러
  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = `https://placehold.co/400x400/1a1a1e/e0e0e0?text=${character.name}`;
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(prevSkill => prevSkill && prevSkill.name === skill.name ? null : skill);
  };

  // 표시할 메인 이미지를 결정하는 변수
  const mainImageUrl = character.group === '카제로스 군단장' ? character.bg : character.img;

  return (
    <>
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

              {character.estherSkills && (
                <div className="esther-skill-section">
                  <div className="char-info-divider"></div>
                  <h3 className="detail-title" style={{marginBottom: '15px'}}>에스더 스킬 & 연합군 스킬</h3>
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

            {/* --- 중앙 이미지 패널 --- */}
            <div className="char-info-center">
              <img 
                src={mainImageUrl} 
                alt={character.name} 
                className="character-modal-img"
                onError={(e) => handleImageError(e)}
                // 클릭 시 이미지 뷰어 열기 이벤트 추가
                onClick={() => openImageViewer(mainImageUrl)}
                style={{ cursor: 'pointer' }}
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
      
      {/* 이미지 뷰어 모달 렌더링 */}
      <ImageViewerModal
        isOpen={isViewerOpen}
        onClose={closeImageViewer}
        imageUrl={viewerImageUrl}
      />
    </>
  );
};

export default CharacterModal;