import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// GSAP 플러그인 등록
gsap.registerPlugin(TextPlugin);

const StoryModal = ({ story, isOpen, onClose }) => {
  const modalBodyRef = useRef(null);
  const animationRef = useRef(null);

  useLayoutEffect(() => {
    // 진행중인 애니메이션이 있다면 중지 (story가 변경될 때를 대비)
    if (animationRef.current) {
      animationRef.current.kill();
    }

    if (isOpen && story && (story.title.includes('서론') || story.title.includes('결론'))) {
      const paragraphs = modalBodyRef.current.querySelectorAll('.story-paragraph');
      if (paragraphs.length > 0) {
        paragraphs.forEach(p => { p.textContent = ''; });

        const tl = gsap.timeline();
        paragraphs.forEach((p, index) => {
          // 원본 텍스트를 찾아서 애니메이션 대상으로 삼음
          const originalText = story.content.split('\n\n')[index];
          if (originalText) {
            tl.to(p, {
              duration: originalText.length * 0.05,
              text: originalText,
              ease: 'none',
            });
          }
        });
        animationRef.current = tl;
      }
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [isOpen, story]);

  // 애니메이션 스킵 핸들러 추가
  const handleAnimationSkip = () => {
    // 애니메이션 타임라인이 존재하고, 아직 진행중일 경우
    if (animationRef.current && animationRef.current.isActive()) {
      // 애니메이션을 즉시 100% 진행된 상태로 만들고, 비활성화시킴
      animationRef.current.progress(1).kill();
    }
  };

  if (!isOpen || !story) {
    return null;
  }

  const paragraphs = story.content.split('\n\n');
  const images = story.images || [];

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.style.display = 'none';
  };

  // 기존 stopPropagation과 함께 handleAnimationSkip 호출
  const handleModalContentClick = (e) => {
    e.stopPropagation();
    handleAnimationSkip();
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={handleModalContentClick}>
        <span className="modal-close-btn" onClick={onClose}>&times;</span>
        <h2 id="modal-title">{story.title}</h2>
        <div id="modal-body" ref={modalBodyRef}>
          {paragraphs.map((paragraph, index) => (
            <React.Fragment key={index}>
              <p className="story-paragraph">
                {/* '서론'/'결론'이 아니고, 애니메이션이 적용되지 않는 경우에만 텍스트를 바로 렌더링 */}
                {!(story.title.includes('서론') || story.title.includes('결론')) ? paragraph : ''}
              </p>
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