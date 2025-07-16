import React, { useState, useEffect, useRef, useMemo, useContext } from 'react';
import { stories } from '../data/db';
import StoryModal from '../components/StoryModal';
import { gsap } from 'gsap';
import map from '../assets/images/map.png';
import travelerIcon from '../assets/images/traveler.png'; // 움직이는 객체 이미지 import
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { LanguageContext } from '../contexts/LanguageContext';

gsap.registerPlugin(MotionPathPlugin);

const StoryList = ({ stories, onStoryClick, lang }) => (
  <div id="story-list">
    {stories.map((story, index) => (
      <div
        key={index}
        className="story-title-item"
        onClick={() => onStoryClick(story)}
      >
        {lang === 'KO' ? story.title : story.eng_title}
      </div>
    ))}
  </div>
);

const InteractiveMap = ({ stories, onStoryClick, lang }) => {
  const pathRef = useRef(null);
  const travelerRef = useRef(null);
  const mapWidth = 1200;
  const mapHeight = 662;

  const pathData = useMemo(() => {
    if (stories.length === 0) return '';
    const pathPoints = stories
      .filter(story => story.coords)
      .map(story => {
        const x = (parseFloat(story.coords.left) / 100) * mapWidth;
        const y = (parseFloat(story.coords.top) / 100) * mapHeight;
        return `${x},${y}`;
      });
    return `M ${pathPoints.join(' L ')}`;
  }, [stories]);

  useEffect(() => {
    const path = pathRef.current;
    const traveler = travelerRef.current;
    if (!path || !traveler || path.getTotalLength() === 0) return;

    const motionAnimation = gsap.to(traveler, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5], // 이미지의 중앙을 경로에 맞춤
        autoRotate: true,
      },
      duration: 40,
      ease: "power1.inOut",
      repeat: -1,
      delay: 2
    });

    return () => {
      motionAnimation.kill();
    }
  }, [pathData]);

  return (
    <div className="story-map-container">
      <img src={map} alt="World Map" className="story-map-image" />
      <svg className="story-map-svg" viewBox={`0 0 ${mapWidth} ${mapHeight}`}>
        <path
          ref={pathRef}
          d={pathData}
          className="story-map-path"
        />
        <image
          ref={travelerRef}
          href={travelerIcon}
          width="24"
          height="24"
          className="story-map-traveler"
        />
      </svg>
      {stories.map((story, index) =>
        story.coords && (
          <button
            key={index}
            className="map-button"
            style={{ top: story.coords.top, left: story.coords.left }}
            onClick={() => onStoryClick(story)}
            title={lang === 'KO' ? story.title : story.eng_title}
          >
            <span className="map-button-pulse"></span>
          </button>
        )
      )}
    </div>
  );
};

const StoryPage = ({ pageType, title, initialData }) => {
  // Context에서 초기 언어 받아와 로컬 state로 관리
  const { language: ctxLang } = useContext(LanguageContext);
  const [lang, setLang] = useState(ctxLang.toUpperCase()); // 'KO' or 'EN'

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth > 1024);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('body-modal-open');
    } else {
      document.body.classList.remove('body-modal-open');
    }
    return () => {
      document.body.classList.remove('body-modal-open');
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (initialData && initialData.type === 'story') {
      openModal(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    const handleResize = () => setIsDesktopView(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  // Lang toggle (클래스 페이지와 동일)
  const toggleLanguage = () => setLang(prev => (prev === 'KO' ? 'EN' : 'KO'));

  const filteredStories = stories.filter(story => story.category === pageType);

  return (
    <div className="page-content">
      {/* 제목도 lang에 따라 분기 */}
      <h1 className="page-title">
        {lang === 'KO' ? title : title /* 영어 별도 관리 없다면 동일 노출 */}
      </h1>

      {pageType === 'continent' && isDesktopView ? (
        <InteractiveMap
          stories={filteredStories}
          onStoryClick={openModal}
          lang={lang}
        />
      ) : (
        <StoryList
          stories={filteredStories}
          onStoryClick={openModal}
          lang={lang}
        />
      )}

      <StoryModal
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={closeModal}
        lang={lang}
      />

      {/* 오른쪽 하단 언어 토글 버튼 */}
      <button className="language-toggle-button" onClick={toggleLanguage}>
        {lang}
      </button>
    </div>
  );
};

export default StoryPage;
