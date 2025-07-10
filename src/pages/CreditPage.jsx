import React, { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { imageData } from "../data/db.js";
import seaTexture from '../assets/images/sea_wather_texture.jpg';

gsap.registerPlugin(TextPlugin);

const i18nData = {
  ko: {
    tabs: [
      { id: "purpose", name: "목적" },
      { id: "review", name: "후기" },
      { id: "tech", name: "사용 기술" },
      { id: "images", name: "이미지 정보" },
      { id: "git", name: "GitHub" },
    ],
    content: {
      purpose: "해당 프로젝트는 스마일게이트 사의 LostArk 게임의 여름방학 이벤트를 맞아 스토리를 소개하는 목적으로 제작되었습니다.",
      review: "React와 다양한 라이브러리를 이용해 인터렉티브 요소를 구현했습니다. \nGSAP과 같은 애니메이션 라이브러리, Three.js와 같은 3D 렌더링 라이브러리에 대해 이해를 높일 수 있었습니다. \nReact의 components 단위의 SPA 페이징 기법을 익힐 수 있었고 재사용성과 효율적인 상태 관리에 대해 깊이 고민하는 계기가 되었습니다.\nLost Ark라는 게임의 유저들의 UX를 중요시 하여 UI를 구성했습니다. \n사용자의 입장에서 어떻게 하면 더 재미있고 편리하게 정보를 탐색할 수 있을지 고민하는 과정 자체가 즐거운 경험이었습니다.",
      tech: "Front-end: React \nBackend: Supabase \nStyling: CSS \nEtc: gsap, three.js, crypto-js, react-youtube",
      images: "프로젝트에 사용된 대부분의 이미지와 아이콘은 로스트아크 공식 홈페이지, 공식 콘텐츠 크리에이터 키트, 그리고 로스트아크 인게임 스크린샷을 통해 수집되었습니다. 모든 저작권은 Smilegate RPG에 있습니다.",
      git: "프로젝트의 전체 소스 코드는 아래 GitHub 저장소에서 확인하실 수 있습니다.\nhttps://github.com/ungs1026/LSA",
    }
  },
  en: {
    tabs: [
      { id: "purpose", name: "Purpose" },
      { id: "review", name: "Review" },
      { id: "tech", name: "Tech Stack" },
      { id: "images", name: "Image Info" },
      { id: "git", name: "GitHub" },
    ],
    content: {
      purpose: "This project was developed to systematically organize the vast worldview, characters, and raid information of Smilegate's game, Lost Ark, and to provide users with an easy and immersive experience using React and Supabase.",
      review: "Implemented interactive elements using React and various libraries. \nIt was an opportunity to enhance understanding of animation libraries like GSAP and 3D rendering libraries like Three.js. \nI was able to learn SPA paging techniques using React components and had a chance to deeply consider reusability and efficient state management. \nI designed the UI with a focus on the UX for Lost Ark players. \nThe process of thinking about how to make information exploration more fun and convenient from the user's perspective was an enjoyable experience in itself.",
      tech: "Front-end: React \nBackend: Supabase \nStyling: CSS \nEtc: gsap, three.js, crypto-js, react-youtube",
      images: "Most of the images and icons used in the project were collected from the official Lost Ark website, the official content creator kit, and in-game screenshots. All copyrights belong to Smilegate RPG.",
      git: "The entire source code for the project can be found at the GitHub repository below.\nhttps://github.com/ungs1026/LSA",
    }
  }
};

const ImageContent = ({ contentText, onDownload, onPreviewMove, onPreviewLeave }) => {
    return (
        <div className="image-download-list">
            <p className="copyright-notice">{contentText}</p>
            {imageData.map((img, index) => (
                <div
                    key={index}
                    className="image-list-item"
                    onMouseMove={(e) => onPreviewMove(e, img.url)}
                    onMouseLeave={onPreviewLeave}
                >
                    <span className="image-usage">{img.usage}</span>
                    <button
                        className="download-btn"
                        onClick={() => onDownload(img.url, img.name)}
                    >
                        ↓
                    </button>
                </div>
            ))}
        </div>
    );
};

const InfoWindow = ({ modal, onClose, onDragStart, zIndex }) => {
    const contentRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        if (typeof modal.content === 'string' && contentRef.current) {
            if (timelineRef.current) timelineRef.current.kill();
            
            const contentElement = contentRef.current;
            contentElement.innerHTML = "";
            
            const lines = modal.content.split('\n');
            timelineRef.current = gsap.timeline();

            lines.forEach(line => {
                const lineDiv = document.createElement('div');
                contentElement.appendChild(lineDiv);
                if (line.trim() === '') {
                    lineDiv.style.height = '1em';
                } else {
                    timelineRef.current.to(lineDiv, {
                        duration: line.length * 0.05,
                        text: line,
                        ease: "none",
                    });
                }
            });
        }
    }, [modal.content]);

    const handleSkipAnimation = () => {
        if (timelineRef.current && timelineRef.current.isActive()) {
            timelineRef.current.progress(1);
        }
    };

    return (
        <div 
            className="info-window" 
            style={{ top: `${modal.y}px`, left: `${modal.x}px`, zIndex: zIndex }}
            onMouseDown={(e) => onDragStart(e, modal.id)}
        >
            <div className="info-window-header">
                <span className="info-window-title">{modal.title}</span>
                <button className="info-window-close-btn" onClick={() => onClose(modal.id)}>×</button>
            </div>
            <div className="info-window-content" onClick={handleSkipAnimation}>
                {typeof modal.content === 'string' ? <div ref={contentRef}></div> : modal.content}
            </div>
        </div>
    );
};

const CreditPage = () => {
  const [language, setLanguage] = useState("ko");
  const mountRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  const [modals, setModals] = useState([]);
  const [draggingModal, setDraggingModal] = useState(null);
  const [preview, setPreview] = useState({ visible: false, src: "", x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openTabModal = (tab) => {
    if (modals.find(m => m.id === tab.id)) {
        bringToFront(tab.id);
        return;
    }
    
    let content;
    if (tab.id === 'images') {
        content = <ImageContent 
            contentText={i18nData[language].content.images}
            onDownload={handleDownload}
            onPreviewMove={handlePreviewMove}
            onPreviewLeave={handlePreviewLeave}
        />;
    } else {
        content = i18nData[language].content[tab.id];
    }
    
    const newModal = {
      id: tab.id,
      title: i18nData[language].tabs.find(t => t.id === tab.id)?.name || 'Info',
      content: content,
      x: window.innerWidth / 2 - 250,
      y: window.innerHeight / 2 - 200,
      zIndex: (modals.length > 0 ? Math.max(...modals.map(m => m.zIndex)) : 0) + 1,
    };

    if (isMobile) {
        setModals([newModal]);
    } else {
        setModals(prevModals => [...prevModals, newModal]);
    }
  };

  const closeModal = (id) => {
    setModals(prevModals => prevModals.filter(m => m.id !== id));
  };
    
  const bringToFront = (id) => {
    const maxZIndex = (modals.length > 0 ? Math.max(...modals.map(m => m.zIndex)) : 0);
    setModals(prevModals => prevModals.map(m => 
        m.id === id ? { ...m, zIndex: maxZIndex + 1 } : m
    ));
  };

  const handleDragStart = (e, id) => {
    if (isMobile || e.button !== 0) return;
    bringToFront(id);
    const modalElement = e.currentTarget;
    const rect = modalElement.getBoundingClientRect();
    setDraggingModal({
      id,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    });
  };
  
  const handlePreviewMove = (e, src) => { setPreview({ visible: true, src, x: e.clientX + 20, y: e.clientY + 20 }); };
  const handlePreviewLeave = () => { setPreview({ visible: false, src: "", x: 0, y: 0 }); };
  const handleDownload = async (url, filename) => {
      try {
          const response = await fetch(url);
          const blob = await response.blob();
          const blobUrl = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
          console.error("Download failed:", error);
          window.open(url, "_blank");
      }
  };

  const handleDrag = useCallback((e) => {
    if (!draggingModal) return;
    setModals(prevModals => 
      prevModals.map(m => 
        m.id === draggingModal.id 
          ? { ...m, x: e.clientX - draggingModal.offsetX, y: e.clientY - draggingModal.offsetY } 
          : m
      )
    );
  }, [draggingModal]);
  
  const handleDragEnd = () => {
    setDraggingModal(null);
  };

  useEffect(() => {
    if (draggingModal) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
    };
  }, [draggingModal, handleDrag]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
      if (!window.THREE) {
        console.error("Three.js is not loaded.");
        return;
      }
  
      const THREE = window.THREE;
      const currentMount = mountRef.current;
  
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0a0a2a, 0.0015);
  
      const camera = new THREE.PerspectiveCamera(
        70,
        currentMount.clientWidth / currentMount.clientHeight,
        0.2,
        2000
      );
      camera.position.set(20, 90, 200);
      camera.lookAt(scene.position);
  
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      currentMount.appendChild(renderer.domElement);
  
      const ambientLight = new THREE.AmbientLight(0x17161e, 2);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0x01205b, 1);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);
  
      const textureLoader = new THREE.TextureLoader();
      const loadedTexture = textureLoader.load(seaTexture);
      loadedTexture.wrapS = THREE.RepeatWrapping;
      loadedTexture.wrapT = THREE.RepeatWrapping;
      loadedTexture.repeat.set(5, 5);
  
      const geometry = new THREE.PlaneGeometry(2000, 2000, 200, 200);
      const material = new THREE.MeshPhongMaterial({
        shininess: 50,
        map: loadedTexture,
      });
  
      const plane = new THREE.Mesh(geometry, material);
      plane.rotation.x = -Math.PI / 2;
      scene.add(plane);
  
      let frame = 0;
      const { array, original } = {
        array: plane.geometry.attributes.position.array,
        original: plane.geometry.attributes.position.array.slice(),
      };
  
      const animate = () => {
        frame++;
        const time = frame * 0.02;
  
        // --- 자연스러운 파도 효과를 위한 애니메이션 로직 수정 ---
        for (let i = 0; i < array.length; i += 3) {
          const x = original[i];
          const y_depth = original[i + 1];
  
          // 1. 깊이에 따른 진폭 계산 (오류 수정 및 값 조정)
          const normalizedDepth = (y_depth + 1000) / 1000;
          const amplitude = Math.pow(normalizedDepth, 3) * 9;
  
          // 2. 여러 파동을 중첩하여 자연스러운 물결 생성
          // 주된 방향성을 가진 큰 파도 (멀리서 다가오는 느낌의 기반)
          let zOffset = Math.sin(y_depth * 0.01 - time) * 0.4;
          // X축 방향으로 흐르는 중간 크기의 파도 추가
          zOffset += Math.cos(x * 0.008 + time * 0.5) * 0.3;
          // 대각선 방향의 작고 빠른 잔물결 추가 (랜덤함 증폭)
          zOffset += Math.sin((x + y_depth) * 0.02 + time * 2.0) * 0.2;
          // 더 작은 노이즈성 물결 추가
          zOffset += Math.sin(x * 0.05 + y_depth * 0.1 + time * 2.5) * 0.1;
  
          // 3. 최종 높이 계산
          array[i + 2] = original[i + 2] + zOffset * amplitude;
        }
        plane.geometry.attributes.position.needsUpdate = true;
  
        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };
  
      let animationFrameId = requestAnimationFrame(animate);
  
      const handleResize = () => {
        if (currentMount) {
          camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        }
      };
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        if (currentMount && renderer.domElement) {
          currentMount.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        loadedTexture.dispose();
        renderer.dispose();
      };
    }, []);

  return (
    <div className="credit-page-wrapper">
      <div ref={mountRef} className="threejs-background"></div>

      {preview.visible && (
        <div
          className="image-preview-tooltip"
          style={{ top: `${preview.y}px`, left: `${preview.x}px` }}
        >
          <img src={preview.src} alt="preview" />
        </div>
      )}

      <div className="credit-content-area">
        <header className="credit-header-section">
          <div className="live-clock-display">
            {currentTime.toLocaleString("ko-KR", {
                year: "numeric", month: "long", day: "numeric",
                weekday: "long", hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit'
            })}
          </div>
          <div className="credit-main-title">
            <span>SEASON 2</span>
            <span className="main-logo-text">LOST ARK</span>
            <span className="sub-logo-text">ARCHIVES</span>
          </div>
          <div className="language-switcher-top">
            <button className={language === 'ko' ? 'active' : ''} onClick={() => setLanguage('ko')}>KO</button>
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
          </div>
        </header>

        <main className="credit-card-container">
            <div className="credit-card-header">
                <span>{i18nData[language].tabs.find(t => t.id === 'purpose')?.name || '항목'}</span>
            </div>
            <div className="credit-card-body">
                {i18nData[language].tabs.map(tab => (
                    <div key={tab.id} className="credit-tab-row" onClick={() => openTabModal(tab)}>
                        <span className="tab-row-name">{tab.name}</span>
                    </div>
                ))}
            </div>
        </main>
      </div>

      {modals.map(modal => (
        <InfoWindow 
          key={modal.id}
          modal={modal}
          onClose={closeModal}
          onDragStart={handleDragStart}
          zIndex={modal.zIndex}
        />
      ))}
    </div>
  );
};

export default CreditPage;