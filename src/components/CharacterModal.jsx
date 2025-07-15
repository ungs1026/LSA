import React, { useState, useEffect } from 'react';
import ImageViewerModal from './ImageViewerModal';

const CharacterModal = ({ character, isOpen, onClose, language }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerImageUrl, setViewerImageUrl] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setSelectedSkill(null);
      setIsViewerOpen(false);
    } else {
      setSelectedSkill(null);
    }
  }, [isOpen, character]);

  if (!isOpen || !character) {
    return null;
  }

  const openImageViewer = (url) => {
    setViewerImageUrl(url);
    setIsViewerOpen(true);
  };

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

  const mainImageUrl = character.group === '카제로스 군단장' ? character.bg : character.img;

  const name = language === 'en' ? character.eng_name : character.name;
  const subtitle = language === 'en' ? character.eng_subtitle : character.subtitle;
  const basicInfo = language === 'en' ? character.eng_basicInfo : character.basicInfo;
  const combatInfo = language === 'en' ? character.eng_combatInfo : character.combatInfo;
  const description = language === 'en' ? character.eng_description : character.description;
  const title = language === 'en' && character.eng_title ? character.eng_title : character.title;
  const role = language === 'en' && character.eng_role ? character.eng_role : character.role;

  return (
    <>
      <div className="modal-overlay active" onClick={onClose}>
        <div className="character-modal-content new-layout" onClick={(e) => e.stopPropagation()}>
          <span className="modal-close-btn" onClick={onClose}>&times;</span>

          <img 
            src={character.bg} 
            alt={`${name} background`} 
            className="character-modal-img-top"
            onError={(e) => handleImageError(e)}
          />

          <div className="char-info-container">
            <div className="char-info-left">
              <div className="char-group-display">
                <span>{character.group}</span>
              </div>
              <h2 className="char-info-name">{name}</h2>
              <p className="char-info-subtitle">{subtitle}</p>

              <div className="char-info-divider"></div>

              <div className="char-info-details">
                <div className="detail-item">
                  <span className="detail-title">종족</span>
                  <span className="detail-value">{character.race}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-title">칭호</span>
                  <span className="detail-value">{title}</span>
                </div>
                {role && (
                <div className="detail-item">
                  <span className="detail-title">역할</span>
                  <span className="detail-value">{role}</span>
                </div>
                )}
              </div>

              {character.estherSkills && (
                <div className="esther-skill-section">
                  <div className="char-info-divider"></div>
                  <h3 className="detail-title" style={{marginBottom: '15px'}}>{language === 'en' ? 'Esther & Legion Skills' : '에스더 스킬 & 연합군 스킬'}</h3>
                  <div className="esther-skills-container">
                    {character.estherSkills.map((skill) => (
                      <div 
                        key={skill.name} 
                        className={`esther-skill-icon ${selectedSkill && selectedSkill.name === skill.name ? 'active' : ''}`}
                        onClick={() => handleSkillClick(skill)}
                        title={language === 'en' && skill.eng_name ? skill.eng_name : skill.name}
                      >
                        <img src={skill.icon} alt={skill.name} onError={(e) => e.target.style.display='none'} />
                      </div>
                    ))}
                  </div>
                  {selectedSkill && (
                    <div className="esther-skill-description">
                      <p>{language === 'en' && selectedSkill.eng_description ? selectedSkill.eng_description : selectedSkill.description}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="char-info-center">
              <img 
                src={mainImageUrl} 
                alt={name} 
                className="character-modal-img"
                onError={(e) => handleImageError(e)}
                onClick={() => openImageViewer(mainImageUrl)}
                style={{ cursor: 'pointer' }}
              />
            </div>

            <div className="char-info-right">
              <div className="char-info-description">
                <h3 className="description-title">{language === 'en' ? 'Basic Info' : '기본 정보'}</h3>
                <p>{basicInfo}</p>
                <div className="char-info-divider small"></div>

                <h3 className="description-title">{language === 'en' ? 'Abilities' : '능력'}</h3>
                <p>{combatInfo}</p>
                <div className="char-info-divider small"></div>

                <h3 className="description-title">{language === 'en' ? 'Lore' : '서사'}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageViewerModal
        isOpen={isViewerOpen}
        onClose={closeImageViewer}
        imageUrl={viewerImageUrl}
      />
    </>
  );
};

export default CharacterModal;
