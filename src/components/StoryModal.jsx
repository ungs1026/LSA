import React, { useState, useRef, useEffect, useLayoutEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { LanguageContext } from '../contexts/LanguageContext'; // LanguageContext import

gsap.registerPlugin(TextPlugin);

const StoryModal = ({ story, isOpen, onClose }) => {
  const modalContentRef = useRef(null); // 모달 콘텐츠 영역의 ref
  const animationRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false); // 스크롤 상태를 관리하는 state
  const { language } = useContext(LanguageContext); // 언어 컨텍스트 사용

  // 스크롤 이벤트 핸들러 추가
  useEffect(() => {
    const modalEl = modalContentRef.current;
    if (!modalEl) return;

    const handleScroll = () => {
      // 스크롤 위치가 10px보다 크면 isScrolled를 true로 설정
      setIsScrolled(modalEl.scrollTop > 10);
    };

    // 모달이 열려있을 때만 스크롤 이벤트 리스너 추가
    if (isOpen) {
      modalEl.addEventListener('scroll', handleScroll);
    }

    // 컴포넌트 정리 시 이벤트 리스너 제거
    return () => {
      if (modalEl) {
        modalEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isOpen]); // isOpen 상태가 변경될 때마다 이펙트 실행

  useLayoutEffect(() => {
    if (animationRef.current) {
      animationRef.current.kill();
    }
    
    // 모달이 열리거나 스토리가 변경되면 스크롤 상태와 위치를 초기화
    setIsScrolled(false); 
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }

    if (isOpen && story && (story.title.includes('서론') || story.title.includes('결론'))) {
      const paragraphs = modalContentRef.current.querySelectorAll('.story-paragraph');
      if (paragraphs.length > 0) {
        paragraphs.forEach(p => { p.textContent = ''; });
        
        // 언어에 따라 컨텐츠 선택
        const content = language === 'ko' ? story.content : story.eng_content;

        const tl = gsap.timeline();
        paragraphs.forEach((p, index) => {
          // 선택된 언어의 컨텐츠로 애니메이션 적용
          const originalText = content.split('\n\n')[index];
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
  }, [isOpen, story, language]); // language를 의존성 배열에 추가

  const handleAnimationSkip = () => {
    if (animationRef.current && animationRef.current.isActive()) {
      animationRef.current.progress(1).kill();
    }
  };

  if (!isOpen || !story) {
    return null;
  }

  // 언어에 따라 본문 내용 선택
  const content = language === 'ko' ? story.content : story.eng_content;
  const paragraphs = content.split('\n\n');
  const images = story.images || [];

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.style.display = 'none';
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
    handleAnimationSkip();
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={handleModalContentClick} ref={modalContentRef}>
        <span className={`modal-close-btn ${isScrolled ? 'scrolled' : ''}`} onClick={onClose}>&times;</span>
        {/* 언어에 따라 제목 선택 */}
        <h2 id="modal-title">{language === 'ko' ? story.title : story.eng_title}</h2>
        <div id="modal-body">
          {paragraphs.map((paragraph, index) => (
            <React.Fragment key={index}>
              <p className="story-paragraph">
                {/* 애니메이션 대상이 아닐 경우에만 텍스트를 직접 렌더링 */}
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
