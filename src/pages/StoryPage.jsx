import React, { useState, useEffect } from 'react';
import { stories } from '../data/db';
import StoryModal from '../components/StoryModal';
import map from '../assets/images/map.png';

const StoryList = ({ stories, onStoryClick }) => (
  <div id="story-list">
    {stories.map((story, index) => (
      <div key={index} className="story-title-item" onClick={() => onStoryClick(story)}>
        {story.title}
      </div>
    ))}
  </div>
);

const InteractiveMap = ({ stories, onStoryClick }) => (
    <div className="story-map-container">
      <img src={map} alt="World Map" className="story-map-image" />
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
  
const StoryPage = ({ pageType, title, initialData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth > 1024);

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