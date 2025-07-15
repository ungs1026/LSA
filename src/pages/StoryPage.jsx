import React, { useState, useEffect, useRef, useMemo, useContext } from 'react';
import { stories } from '../data/db';
import StoryModal from '../components/StoryModal';
import { gsap } from 'gsap';
import map from '../assets/images/map.png';
import travelerIcon from '../assets/images/traveler.png'; // 움직이는 객체 이미지 import
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { LanguageContext } from '../contexts/LanguageContext';

gsap.registerPlugin(MotionPathPlugin);

const StoryList = ({ stories, onStoryClick }) => (
  <div id="story-list">
    {stories.map((story, index) => (
      <div key={index} className="story-title-item" onClick={() => onStoryClick(story)}>
        {story.title}
      </div>
    ))}
  </div>
);

const InteractiveMap = ({ stories, onStoryClick }) => {
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

    // 2. 객체가 경로를 따라 움직이는 애니메이션만 남김
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
        {/* 움직이는 객체를 circle에서 image로 변경 */}
        <image
          ref={travelerRef}
          href={travelerIcon}
          width="24"
          height="24"
          className="story-map-traveler"
        />
      </svg>
      {stories.map((story, index) => (
        story.coords &&
        <button
          key={index}
          className="map-button"
          style={{ top: story.coords.top, left: story.coords.left }}
          onClick={() => onStoryClick(story)}
          title={story.title}
        >
          <span className="map-button-pulse"></span>
        </button>
      ))}
    </div>
  );
};

const StoryPage = ({ pageType, title, initialData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const { language } = useContext(LanguageContext);
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

  const filteredStories = stories.filter(story => story.category === pageType);

  return (
    <div className="page-content">
      <h1 className="page-title">{title}</h1>
      {pageType === 'continent' && isDesktopView ? (
        <InteractiveMap stories={filteredStories} onStoryClick={openModal} />
      ) : (
        <StoryList stories={filteredStories} onStoryClick={openModal} />
      )}
      <StoryModal story={selectedStory} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default StoryPage;