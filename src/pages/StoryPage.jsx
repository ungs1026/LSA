import React, { useState, useEffect, useRef, useMemo, useContext } from 'react';
import { stories } from '../data/db';
import StoryModal from '../components/StoryModal';
import { gsap } from 'gsap';
import map from '../assets/images/map.png';
import travelerIcon from '../assets/images/traveler.png';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { LanguageContext } from '../contexts/LanguageContext';

gsap.registerPlugin(MotionPathPlugin);

const StoryList = ({ stories, onStoryClick, language }) => (
  <div id="story-list">
    {stories.map((story, index) => (
      <div
        key={index}
        className="story-title-item"
        onClick={() => onStoryClick(story)}
      >
        {language === 'ko' ? story.title : story.eng_title}
      </div>
    ))}
  </div>
);

const InteractiveMap = ({ stories, onStoryClick, language }) => {
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
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 40,
      ease: "power1.inOut",
      repeat: -1,
      delay: 2
    });

    return () => motionAnimation.kill();
  }, [pathData]);

  return (
    <div className="story-map-container">
      <img src={map} alt="World Map" className="story-map-image" />
      <svg className="story-map-svg" viewBox={`0 0 ${mapWidth} ${mapHeight}`}>
        <path ref={pathRef} d={pathData} className="story-map-path" />
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
            title={language === 'ko' ? story.title : story.eng_title}
          >
            <span className="map-button-pulse"></span>
          </button>
        )
      )}
    </div>
  );
};

const StoryPage = ({ pageType, title, initialData }) => {
  // Context에서 언어와 토글 함수 사용
  const { language, toggleLanguage } = useContext(LanguageContext);
  const isEn = language === 'en';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth > 1024);

  useEffect(() => {
    document.body.classList.toggle('body-modal-open', isModalOpen);
    return () => document.body.classList.remove('body-modal-open');
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

  const openModal = story => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  const filteredStories = stories.filter(s => s.category === pageType);

  return (
    <div className="page-content">
      <h1 className="page-title">{isEn ? title : title}</h1>

      {pageType === 'continent' && isDesktopView ? (
        <InteractiveMap
          stories={filteredStories}
          onStoryClick={openModal}
          language={language}
        />
      ) : (
        <StoryList
          stories={filteredStories}
          onStoryClick={openModal}
          language={language}
        />
      )}

      <StoryModal
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={closeModal}
        lang={language === 'ko' ? 'KO' : 'EN'}
      />

      <button
        className="language-toggle-button"
        onClick={toggleLanguage}
      >
        {isEn ? 'EN' : 'KO'}
      </button>
    </div>
  );
};

export default StoryPage;
