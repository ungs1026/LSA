import React, { useState, useEffect } from 'react';
import { arksData } from '../data/db';

const ArkPage = ({ initialData }) => {
  const [selectedArk, setSelectedArk] = useState(arksData[0]);

  useEffect(() => {
    if (initialData && initialData.type === 'ark') {
      // arksData에서 일치하는 데이터를 찾아 상태 업데이트
      const arkToSelect = arksData.find(ark => ark.id === initialData.id);
      if (arkToSelect) {
        setSelectedArk(arkToSelect);
      }
    }
  }, [initialData]);

  const handleArkSelect = (ark) => setSelectedArk(ark);

  return (
    <div className="page-content ark-page-container">
      <div className="ark-left-panel">
        <div className="ark-list-header">The Seven Arks</div>
        <ul className="ark-list">
          {arksData.map((ark) => (
            <li
              key={ark.id}
              className={`ark-list-item ${selectedArk.id === ark.id ? 'active' : ''}`}
              onClick={() => handleArkSelect(ark)}
            >
              <img src={ark.image} alt={ark.name} className="ark-list-image" />
              <span className="ark-list-name">{ark.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="ark-center-panel">
        <div className="ark-display-box">
          <h2 className="ark-display-name">{selectedArk.name}</h2>
          <div className="ark-image-wrapper">
            <img src={selectedArk.image} alt={selectedArk.name} className="ark-display-image" />
            <img src={selectedArk.hoverImage} alt={selectedArk.name} className="ark-hover-image" />
          </div>
          <div className="ark-materials">
            <div className="ark-material-item">
              <span className="material-name">상징</span>
              <span className="material-value">{selectedArk.keyword}</span>
            </div>
            <div className="ark-material-item">
              <span className="material-name">획득 위치</span>
              <span className="material-value">{selectedArk.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ark-right-panel">
        <div className="ark-description-box">
          <h3 className="ark-description-title">Ark Information</h3>
          <p className="ark-description-text">{selectedArk.description}</p>
          <h3 className="ark-description-title">Acquisition Narrative</h3>
          <p className="ark-description-text">{selectedArk.narrative}</p>
        </div>
      </div>
    </div>
  );
};

export default ArkPage;