import React from 'react';

const StoryModal = ({ story, isOpen, onClose }) => {
  if (!isOpen || !story) {
    return null;
  }

  // 1. content를 '\n\n' 기준으로 문단 배열로 분리합니다.
  const paragraphs = story.content.split('\n\n');
  // 2. images 배열을 가져옵니다. (없을 경우 빈 배열)
  const images = story.images || [];

  // 이미지 로딩 실패 시 대체 이미지를 숨기는 핸들러
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.style.display = 'none'; // 이미지가 깨졌을 경우 보이지 않도록 처리
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close-btn" onClick={onClose}>&times;</span>
        <h2 id="modal-title">{story.title}</h2>
        <div id="modal-body">
          {/* 3. 문단 배열을 순회하며 텍스트와 이미지를 번갈아 렌더링합니다. */}
          {paragraphs.map((paragraph, index) => (
            // React.Fragment를 사용하여 불필요한 div 생성을 방지합니다.
            <React.Fragment key={index}>
              <p className="story-paragraph">{paragraph}</p>
              {/* 현재 문단에 해당하는 이미지가 있다면 출력합니다. */}
              {images[index] && (
                <img
                  src={images[index]}
                  alt={`Story illustration ${index + 1}`}
                  className="story-image"
                  onError={handleImageError}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
