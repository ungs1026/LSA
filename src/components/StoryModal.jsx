import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// 이해: LanguageContext 대신 상위에서 전달된 lang prop 사용

gsap.registerPlugin(TextPlugin);

const StoryModal = ({ story, isOpen, onClose, lang }) => {
  const modalContentRef = useRef(null); // 모달 콘텐츠 영역 ref
  const animationRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // 모달 스크롤 상태 관리
  useEffect(() => {
    const modalEl = modalContentRef.current;
    if (!modalEl) return;

    const handleScroll = () => setIsScrolled(modalEl.scrollTop > 10);

    if (isOpen) modalEl.addEventListener('scroll', handleScroll);

    return () => {
      if (modalEl) modalEl.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  // 타이핑 애니메이션 초기화 및 실행
  useLayoutEffect(() => {
    if (animationRef.current) animationRef.current.kill();

    setIsScrolled(false);
    if (modalContentRef.current) modalContentRef.current.scrollTop = 0;

    // 서론/결론인 경우에만 텍스트 애니메이션
    if (
      isOpen &&
      story &&
      (story.title.includes('서론') || story.title.includes('결론'))
    ) {
      const paragraphs = modalContentRef.current.querySelectorAll('.story-paragraph');
      if (paragraphs.length > 0) {
        paragraphs.forEach(p => (p.textContent = ''));

        const content = lang === 'KO' ? story.content : story.eng_content;
        const tl = gsap.timeline();

        paragraphs.forEach((p, idx) => {
          const text = content.split('\n\n')[idx];
          if (text) {
            tl.to(p, {
              duration: text.length * 0.05,
              text,
              ease: 'none',
            });
          }
        });
        animationRef.current = tl;
      }
    }

    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, [isOpen, story, lang]);

  const handleAnimationSkip = () => {
    if (animationRef.current && animationRef.current.isActive()) {
      animationRef.current.progress(1).kill();
    }
  };

  if (!isOpen || !story) return null;

  // lang prop 기준 본문 분기
  const content = lang === 'KO' ? story.content : story.eng_content;
  const paragraphs = content.split('\n\n');
  const images = story.images || [];

  const handleImageError = e => {
    e.target.onerror = null;
    e.target.style.display = 'none';
  };

  const handleModalContentClick = e => {
    e.stopPropagation();
    handleAnimationSkip();
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={handleModalContentClick} ref={modalContentRef}>
        <span className={`modal-close-btn ${isScrolled ? 'scrolled' : ''}`} onClick={onClose}>&times;</span>
        {/* lang prop에 따른 제목 */}
        <h2 id="modal-title">{lang === 'KO' ? story.title : story.eng_title}</h2>
        <div id="modal-body">
          {paragraphs.map((para, idx) => (
            <React.Fragment key={idx}>
              <p className="story-paragraph">
                {/* 서론/결론이 아니면 바로 렌더링 */}
                {!(story.title.includes('서론') || story.title.includes('결론')) ? para : ''}
              </p>
              {images[idx] && (
                <img
                  src={images[idx]}
                  alt={`Story illustration ${idx + 1}`}
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
