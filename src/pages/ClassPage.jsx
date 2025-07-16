import React, { useState, useEffect } from 'react';
import { classData, classSpriteImage } from '../data/classDB.js';

const SpriteIcon = ({ pos, type, size }) => {
  if (!pos || typeof pos.x === 'undefined' || typeof pos.y === 'undefined') return null;
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
  const [lang, setLang] = useState('KO'); // 'ko' or 'en'

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
        setAnimationKey(prev => prev + 1);
      }
    }
  }, [initialData]);

  const toggleLanguage = () => setLang(prev => (prev === 'KO' ? 'EN' : 'KO'));

  const handleBaseClassSelect = baseClass => {
    setActiveBaseClass(baseClass);
    setSelectedClass(baseClass);
    setAnimationKey(prev => prev + 1);
  };

  const handleAdvancedClassSelect = advClass => {
    setSelectedClass(advClass);
    setAnimationKey(prev => prev + 1);
  };

  if (!activeBaseClass || !selectedClass) return <div>{ lang === 'KO' ? '클래스 데이터를 불러오는 중...' : 'Loading class data...' }</div>;

  const identitySize = selectedClass.identityIconSize || { width: 48, height: 48 };
  const weaponSize = selectedClass.weaponIconSize || { width: 48, height: 48 };

  const renderName = item => lang === 'KO' ? item.name : item.name_en;
  const renderText = (item, key) => lang === 'KO' ? item[key] : item[`${key}_en`];

  const MenuPanel = (
    <div className="class-right-panel">
      <div className="base-class-list">
        {classData.map(base => (
          <div key={base.id} className={`base-class-item ${activeBaseClass.id === base.id ? 'active' : ''}`} onClick={() => handleBaseClassSelect(base)}>
            <img src={base.icon} alt={renderName(base)} className="base-class-icon-img" />
            <span>{renderName(base)}</span>
          </div>
        ))}
      </div>
      <div className="advanced-class-container">
        <h3 className="advanced-class-header">{renderName(activeBaseClass)} { lang === 'KO' ? '상세 클래스' : 'Advanced Classes' }</h3>
        <div className="advanced-class-grid">
          {activeBaseClass.advancedClasses.map(adv => (
            <div key={adv.id} className={`advanced-class-item ${selectedClass.id === adv.id ? 'active' : ''}`} onClick={() => handleAdvancedClassSelect(adv)}>
              <SpriteIcon pos={adv.iconPos} type="advanced" />
              <span>{renderName(adv)}</span>
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
        alt={renderName(selectedClass)}
        className={`class-preview-image ${selectedClass.layoutType === 'portrait' ? 'portrait' : 'landscape'}`}
      />
    </div>
  );

  const InfoPanel = (
    <div className="class-info-panel-mobile">
      <div className="class-info-content-box">
        <h2 className="class-info-name">{renderName(selectedClass)}</h2>
        {selectedClass.emphasis && (<p className="class-info-emphasis">"{renderText(selectedClass, 'emphasis')}"</p>)}
        <p className="class-info-description">{renderText(selectedClass, 'description')}</p>
        <div className="class-info-details">
          <div className="detail-item">
            <h3>{ lang === 'KO' ? '아이덴티티 & 대표 무기' : 'Identity & Main Weapon' }</h3>
            <div className="detail-content-icons">
              {selectedClass.identityImage
                ? <img src={selectedClass.identityImage} alt={`${renderName(selectedClass)} Identity`} className="detail-icon-img" />
                : <SpriteIcon pos={selectedClass.identityIconPos} type="identity" size={identitySize} />}
              {selectedClass.weaponImage
                ? <img src={selectedClass.weaponImage} alt={`${renderName(selectedClass)} Weapon`} className="detail-icon-img" />
                : <SpriteIcon pos={selectedClass.weaponIconPos} type="weapon" size={weaponSize} />}
            </div>
            <div className="detail-content-description">
              <p>{renderText(selectedClass, 'identity')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-content class-page-container">
      {isMobileView ? (
        <>
          {MenuPanel}
          {ImagePanel}
          {InfoPanel}
        </>
      ) : (
        <>
          <div className="class-main-panel" style={{ backgroundImage: `url(${activeBaseClass.backgroundImage})` }}>
            <div className="class-preview-image-wrapper">
              <img
                key={animationKey}
                src={selectedClass.previewImage}
                alt={renderName(selectedClass)}
                className={`class-preview-image ${selectedClass.layoutType === 'portrait' ? 'portrait' : 'landscape'}`}
              />
            </div>
            <div className="class-info-panel">
              {InfoPanel}
            </div>
          </div>
          {MenuPanel}
        </>
      )}
      <button className="language-toggle-button" onClick={toggleLanguage}>{lang}</button>
    </div>
  );
};

export default ClassPage;