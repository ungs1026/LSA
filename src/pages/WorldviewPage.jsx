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
  
  // useState 대신 useRef를 사용하여 호버 상태를 관리합니다.
  const isHoveringButtonRef = useRef(false);

  // 초기 데이터 로딩 useEffect
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

  // 마우스 움직임 감지를 위한 useEffect
  useEffect(() => {
    const handleMouseMove = (e) => {
      // isHoveringButtonRef의 현재 값을 참조하여 조건부로 lineTop 상태를 업데이트합니다.
      if (!isHoveringButtonRef.current) {
        setLineTop(e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 컴포넌트가 언마운트될 때 한 번만 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // 의존성 배열을 비워 최초 렌더링 시에만 실행되도록 합니다.

  // 마우스를 올렸을 때 배경, 제목, 선 위치를 변경하는 핸들러
  const handleStoryHover = (e, story) => {
    isHoveringButtonRef.current = true; // ref의 값을 true로 변경
    const rect = e.currentTarget.getBoundingClientRect();
    setLineTop(rect.top + rect.height / 2);

    setSelectedStory(story);
    if (story.bg) {
      setPageBackground(story.bg);
    }
  };
  
  // 마우스가 버튼을 벗어났을 때 호버 상태를 해제하는 핸들러
  const handleStoryLeave = () => {
    isHoveringButtonRef.current = false; // ref의 값을 false로 변경
  };

  // 클릭했을 때 모달을 여는 핸들러
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