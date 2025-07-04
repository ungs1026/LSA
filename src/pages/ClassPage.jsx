import React, { useState } from 'react';
import { classData, classSpriteImage } from '../data/classDB.js';

const SpriteIcon = ({ pos, type, size }) => {
  if (!pos || typeof pos.x === 'undefined' || typeof pos.y === 'undefined') {
    return null;
  }

  return (
    <div
      className={`class-sprite-icon ${type}-icon`}
      style={{
        backgroundImage: `url(${classSpriteImage})`,
        backgroundPosition: `-${pos.x}px -${pos.y}px`,
        width: size ? `${size.width}px` : undefined,
        height: size ? `${size.height}px` : undefined,
      }}
    />
  );
};

const ClassPage = () => {
  const [activeBaseClass, setActiveBaseClass] = useState(classData[0]);
  const [selectedClass, setSelectedClass] = useState(classData[0]);
  const [animationKey, setAnimationKey] = useState(0);

  const handleBaseClassSelect = (baseClass) => {
    setActiveBaseClass(baseClass);
    setSelectedClass(baseClass);
    setAnimationKey(prevKey => prevKey + 1);
  };

  const handleAdvancedClassSelect = (advClass) => {
    setSelectedClass(advClass);
    setAnimationKey(prevKey => prevKey + 1);
  };
  
  if (!activeBaseClass) {
    return <div>클래스 데이터를 불러오는 중...</div>;
  }

  const identitySize = selectedClass.identityIconSize || { width: 48, height: 48 };
  const weaponSize = selectedClass.weaponIconSize || { width: 48, height: 48 };

  return (
    <div className="page-content class-page-container">
      {/* 중앙 및 좌측 패널 (메인 콘텐츠) */}
      <div className="class-main-panel" style={{ backgroundImage: `url(${activeBaseClass.backgroundImage})` }}>
        <div className="class-preview-image-wrapper">
          <img
            key={animationKey}
            src={selectedClass.previewImage}
            alt={selectedClass.name}
            className={`class-preview-image ${selectedClass.layoutType === 'portrait' ? 'portrait' : 'landscape'}`}
          />
        </div>
        <div className="class-info-panel">
          {/* 내용을 감싸는 새로운 div 추가 */}
          <div className="class-info-content-box">
            <h2 className="class-info-name">{selectedClass.name}</h2>
            
            {selectedClass.emphasis && (
              <p className="class-info-emphasis">"{selectedClass.emphasis}"</p>
            )}

            <p className="class-info-description">{selectedClass.description}</p>
            <div className="class-info-details">
              <div className="detail-item">
                <h3>아이덴티티 & 대표 무기</h3>
                <div className="detail-content-icons">
                  {selectedClass.identityImage ? (
                    <img src={selectedClass.identityImage} alt={`${selectedClass.name} Identity`} className="detail-icon-img" />
                  ) : (
                    <SpriteIcon pos={selectedClass.identityIconPos} type="identity" size={identitySize} />
                  )}

                  {selectedClass.weaponImage ? (
                    <img src={selectedClass.weaponImage} alt={`${selectedClass.name} Weapon`} className="detail-icon-img" />
                  ) : (
                    <SpriteIcon pos={selectedClass.weaponIconPos} type="weapon" size={weaponSize} />
                  )}
                </div>
                <div className="detail-content-description">
                  <p>{selectedClass.identity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 우측 패널 (클래스 선택 목록) */}
      <div className="class-right-panel">
        <div className="base-class-list">
          {classData.map(baseClass => (
            <div
              key={baseClass.id}
              className={`base-class-item ${activeBaseClass.id === baseClass.id ? 'active' : ''}`}
              onClick={() => handleBaseClassSelect(baseClass)}
            >
              <img src={baseClass.icon} alt={baseClass.name} className="base-class-icon-img" />
              <span>{baseClass.name}</span>
            </div>
          ))}
        </div>
        <div className="advanced-class-container">
            <h3 className="advanced-class-header">{activeBaseClass.name} 상세 클래스</h3>
            <div className="advanced-class-grid">
              {activeBaseClass.advancedClasses.map(advClass => (
                <div 
                  key={advClass.id} 
                  className={`advanced-class-item ${selectedClass.id === advClass.id ? 'active' : ''}`}
                  onClick={() => handleAdvancedClassSelect(advClass)}
                >
                  <SpriteIcon pos={advClass.iconPos} type="advanced" />
                  <span>{advClass.name}</span>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ClassPage;