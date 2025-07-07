import React, { useState, useEffect } from 'react';
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

const ClassPage = ({ initialData }) => {
  const [activeBaseClass, setActiveBaseClass] = useState(classData[0]);
  const [selectedClass, setSelectedClass] = useState(classData[0]);
  const [animationKey, setAnimationKey] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (initialData && initialData.type === 'class') {
      const targetClass = initialData;
      const parentBaseClass = classData.find(base => base.id === targetClass.baseClassId || base.id === targetClass.id);
      
      if (parentBaseClass) {
        setActiveBaseClass(parentBaseClass);
        setSelectedClass(targetClass);
        setAnimationKey(prevKey => prevKey + 1);
      }
    }
  }, [initialData]);

  const handleBaseClassSelect = (baseClass) => {
    setActiveBaseClass(baseClass);
    setSelectedClass(baseClass);
    setAnimationKey(prevKey => prevKey + 1);
  };

  const handleAdvancedClassSelect = (advClass) => {
    setSelectedClass(advClass);
    setAnimationKey(prevKey => prevKey + 1);
  };
  
  if (!activeBaseClass || !selectedClass) {
    return <div>클래스 데이터를 불러오는 중...</div>;
  }

  const identitySize = selectedClass.identityIconSize || { width: 48, height: 48 };
  const weaponSize = selectedClass.weaponIconSize || { width: 48, height: 48 };

  // --- 각 패널 렌더링 함수/변수 정의 ---
  const MenuPanel = (
    <div className="class-right-panel">
      <div className="base-class-list">
        {classData.map(baseClass => (
          <div key={baseClass.id} className={`base-class-item ${activeBaseClass.id === baseClass.id ? 'active' : ''}`} onClick={() => handleBaseClassSelect(baseClass)}>
            <img src={baseClass.icon} alt={baseClass.name} className="base-class-icon-img" />
            <span>{baseClass.name}</span>
          </div>
        ))}
      </div>
      <div className="advanced-class-container">
        <h3 className="advanced-class-header">{activeBaseClass.name} 상세 클래스</h3>
        <div className="advanced-class-grid">
          {activeBaseClass.advancedClasses.map(advClass => (
            <div key={advClass.id} className={`advanced-class-item ${selectedClass.id === advClass.id ? 'active' : ''}`} onClick={() => handleAdvancedClassSelect(advClass)}>
              <SpriteIcon pos={advClass.iconPos} type="advanced" />
              <span>{advClass.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ImagePanel = (
    <div className="class-image-panel-mobile" style={{ backgroundImage: `url(${activeBaseClass.backgroundImage})` }}>
        <img
            key={animationKey}
            src={selectedClass.previewImage}
            alt={selectedClass.name}
            className={`class-preview-image ${selectedClass.layoutType === 'portrait' ? 'portrait' : 'landscape'}`}
        />
    </div>
  );

  const InfoPanel = (
    <div className="class-info-panel-mobile">
        <div className="class-info-content-box">
            <h2 className="class-info-name">{selectedClass.name}</h2>
            {selectedClass.emphasis && (<p className="class-info-emphasis">"{selectedClass.emphasis}"</p>)}
            <p className="class-info-description">{selectedClass.description}</p>
            <div className="class-info-details">
                <div className="detail-item">
                    <h3>아이덴티티 & 대표 무기</h3>
                    <div className="detail-content-icons">
                        {selectedClass.identityImage ? (<img src={selectedClass.identityImage} alt={`${selectedClass.name} Identity`} className="detail-icon-img" />) : (<SpriteIcon pos={selectedClass.identityIconPos} type="identity" size={identitySize} />)}
                        {selectedClass.weaponImage ? (<img src={selectedClass.weaponImage} alt={`${selectedClass.name} Weapon`} className="detail-icon-img" />) : (<SpriteIcon pos={selectedClass.weaponIconPos} type="weapon" size={weaponSize} />)}
                    </div>
                    <div className="detail-content-description">
                        <p>{selectedClass.identity}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <div className="page-content class-page-container">
      {isMobileView ? (
        // 모바일 뷰: 메뉴 -> 이미지 -> 설명 순서
        <>
          {MenuPanel}
          {ImagePanel}
          {InfoPanel}
        </>
      ) : (
        // 데스크탑 뷰: 메인(이미지+설명) | 메뉴 순서
        <>
          <div className="class-main-panel" style={{ backgroundImage: `url(${activeBaseClass.backgroundImage})` }}>
            <div className="class-preview-image-wrapper">
              <img
                key={animationKey}
                src={selectedClass.previewImage}
                alt={selectedClass.name}
                className={`class-preview-image ${selectedClass.layoutType === 'portrait' ? 'portrait' : 'landscape'}`}
              />
            </div>
            {/* InfoPanel의 부모 div를 데스크탑용으로 따로 만듦 */}
            <div className="class-info-panel"> 
                {InfoPanel}
            </div>
          </div>
          {MenuPanel}
        </>
      )}
    </div>
  );
};

export default ClassPage;