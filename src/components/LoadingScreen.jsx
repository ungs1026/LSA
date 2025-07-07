import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import logoImage from '../assets/images/logo_w.png'; // 로고 이미지 import

gsap.registerPlugin(TextPlugin);

const LoadingScreen = ({ onAnimationComplete }) => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const textEl = textRef.current;
    const imageEl = imageRef.current;

    const tl = gsap.timeline({
      // 모든 애니메이션이 끝나면 onAnimationComplete 함수 호출
      onComplete: () => {
        // 1초 후 페이지 전환
        setTimeout(onAnimationComplete, 1000);
      }
    });

    // 1. "Lost Ark" 텍스트 타이핑 애니메이션
    tl.to(textEl, {
      duration: 2,
      text: "Lost Ark",
      ease: "none"
    });

    // 2. 텍스트가 사라짐과 동시에 이미지가 나타나는 전환 애니메이션
    tl.to(textEl, {
      duration: 1.5,
      opacity: 0,
      ease: "power2.inOut"
    }, "+=0.5"); // 0.5초 대기 후 시작

    tl.to(imageEl, {
      duration: 1.5,
      opacity: 1,
      ease: "power2.inOut"
    }, "<"); // 이전 애니메이션과 동시에 시작

    return () => {
      tl.kill(); // 컴포넌트 언마운트 시 타임라인 정리
    };
  }, [onAnimationComplete]);

  return (
    <div className="loading-screen-container">
      <div className="loading-animation-wrapper" ref={wrapperRef}>
        <div ref={imageRef} className='loading-image-wrapper'>
          <img  src={logoImage} alt="Lost Ark Logo" className="loading-image" />
        </div>
        <h2 ref={textRef} className="loading-text"></h2>
      </div>
    </div>
  );
};

export default LoadingScreen;