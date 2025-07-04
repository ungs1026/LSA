import React, { useState, useEffect, useRef } from 'react';
import { stories } from '../data/db';
import StoryModal from '../components/StoryModal';

const WorldviewPage = () => {
  const [worldviewStories, setWorldviewStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [pageBackground, setPageBackground] = useState('');
  const [lineTop, setLineTop] = useState(-10);
  const isHoveringButtonRef = useRef(false);

  // --- 신규 추가: 모달 상태에 따른 body 스크롤 제어 ---
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('body-modal-open');
    } else {
      document.body.classList.remove('body-modal-open');
    }
    // 컴포넌트 언마운트 시 클래스 제거
    return () => {
      document.body.classList.remove('body-modal-open');
    };
  }, [isModalOpen]);

  useEffect(() => {
    const filtered = stories.filter(story => story.category === 'worldview');
    setWorldviewStories(filtered);

    if (filtered.length > 0) {
      const initialStory = filtered[0];
      setSelectedStory(initialStory);
      if (initialStory.bg) {
        setPageBackground(initialStory.bg);
      }
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isHoveringButtonRef.current) {
        setLineTop(e.clientY);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleStoryHover = (e, story) => {
    isHoveringButtonRef.current = true;
    const rect = e.currentTarget.getBoundingClientRect();
    setLineTop(rect.top + rect.height / 2);
    setSelectedStory(story);
    if (story.bg) {
      setPageBackground(story.bg);
    }
  };
  
  const handleStoryLeave = () => {
    isHoveringButtonRef.current = false;
  };

  const handleStoryClick = (story) => {
    setModalContent(story);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="page-content worldview-container">
      <div className="mouse-follow-line" style={{ top: `${lineTop}px` }}></div>
      <div 
        className="worldview-background" 
        style={{ backgroundImage: `url(${pageBackground})` }}
      >
        <div className="worldview-content-wrapper">
          <div className="worldview-selected-title-container">
            {selectedStory && (
              <h2 className="worldview-selected-title">{selectedStory.title}</h2>
            )}
          </div>
          <div className="worldview-menu">
            {worldviewStories.map((story, index) => (
              <button
                key={index}
                className={`worldview-item ${selectedStory && selectedStory.title === story.title ? 'active' : ''}`}
                onMouseEnter={(e) => handleStoryHover(e, story)}
                onMouseLeave={handleStoryLeave}
                onClick={() => handleStoryClick(story)}
              >
                {story.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <StoryModal story={modalContent} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default WorldviewPage;