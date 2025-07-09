import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { imageData } from "../data/db.js";
import seaTexture from '../assets/images/sea_wather_texture.jpg';

gsap.registerPlugin(TextPlugin);

const CreditPage = () => {
  const [activeTab, setActiveTab] = useState("purpose");
  const contentRef = useRef(null);
  const timelineRef = useRef(null);
  const mountRef = useRef(null);

  const [preview, setPreview] = useState({
    visible: false,
    src: "",
    x: 0,
    y: 0,
  });

  const contentData = {
    purpose:
      "본 프로젝트는 React와 Supabase를 활용하여 로스트아크의 방대한 세계관과 캐릭터, 보스 레이드 정보를 체계적으로 정리하고, 사용자에게 쉽고 몰입감 있는 경험을 제공하기 위해 제작되었습니다. 비동기 데이터 처리, 상태 관리, 반응형 웹 디자인 등 모던 웹 개발 기술을 종합적으로 적용하는 것을 목표로 했습니다.",
    review:
      "다양한 인터랙티브 요소를 구현하며 GSAP와 같은 애니메이션 라이브러리에 대한 이해를 높일 수 있었습니다. 특히, 컴포넌트 단위의 재사용성과 효율적인 상태 관리에 대해 깊이 고민하는 계기가 되었습니다. 사용자의 입장에서 어떻게 하면 더 재미있고 편리하게 정보를 탐색할 수 있을지 고민하는 과정 자체가 즐거운 경험이었습니다.",
    tech: "Frontend: React, GSAP\nBackend: Supabase\nStyling: CSS\nEtc: crypto-js, react-youtube",
    images:
      "프로젝트에 사용된 대부분의 이미지와 아이콘은 로스트아크 공식 홈페이지, 공식 콘텐츠 크리에이터 키트, 그리고 로스트아크 인게임 스크린샷을 통해 수집되었습니다. 모든 저작권은 Smilegate RPG에 있습니다.",
    git: "프로젝트의 전체 소스 코드는 아래 GitHub 저장소에서 확인하실 수 있습니다.\n\nhttps://github.com/your-username/lostark-archives",
  };

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
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      1,
      2000
    );
    camera.position.set(0, 75, 200);
    camera.lookAt(scene.position);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    
    const ambientLight = new THREE.AmbientLight(0x000F63, 2);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0x80aaff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00bfff, 1.5, 800);
    scene.add(pointLight);

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

      for (let i = 0; i < array.length; i += 3) {
        const x = original[i];
        const y_depth = original[i + 1];

        const normalizedDepth = (y_depth + 1000) / 1200; 
        
        // 1. 최대 파도 높이를 10에서 4로 줄여 움직임의 반경을 좁게 수정
        const amplitude = Math.pow(normalizedDepth, 1) * 8;

        const zOffset = Math.sin(x * 0.01 + time) + Math.cos(y_depth * 0.01 + time * 0.8);
        
        array[i + 2] = original[i + 2] + zOffset * amplitude;
      }
      plane.geometry.attributes.position.needsUpdate = true;
      
      const lightTime = time * 0.5;
      pointLight.position.x = Math.sin(lightTime * 0.7) * 300;
      pointLight.position.y = 100;
      pointLight.position.z = Math.cos(lightTime * 0.5) * 300;

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

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    if (!contentRef.current) return;
    if (activeTab !== "images") {
      const contentElement = contentRef.current;
      const newText = contentData[activeTab];
      contentElement.innerHTML = "";
      timelineRef.current = gsap.timeline();
      timelineRef.current.to(contentElement, {
        duration: newText.length * 0.05,
        text: { value: newText },
        ease: "none",
      });
    }
  }, [activeTab]);

  const handleSkipAnimation = () => {
    if (timelineRef.current && timelineRef.current.isActive()) {
      timelineRef.current.progress(1);
    }
  };

  const handlePreviewMove = (e, src) => {
    setPreview({ visible: true, src, x: e.clientX + 20, y: e.clientY + 20 });
  };
  const handlePreviewLeave = () => {
    setPreview({ visible: false, src: "", x: 0, y: 0 });
  };

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

  const renderTabs = () => {
    const tabs = [
      { id: "purpose", name: "목적" },
      { id: "review", name: "후기" },
      { id: "tech", name: "사용 기술" },
      { id: "images", name: "이미지 저작권" },
      { id: "git", name: "GitHub" },
    ];

    return tabs.map((tab) => (
      <button
        key={tab.id}
        className={`credit-tab-btn ${activeTab === tab.id ? "active" : ""}`}
        onClick={() => setActiveTab(tab.id)}
      >
        {tab.name}
      </button>
    ));
  };

  const renderContent = () => {
    if (activeTab === "images") {
      return (
        <div className="image-download-list">
          <p className="copyright-notice">{contentData.images}</p>
          {imageData.map((img, index) => (
            <div
              key={index}
              className="image-list-item"
              onMouseMove={(e) => handlePreviewMove(e, img.url)}
              onMouseLeave={handlePreviewLeave}
            >
              <span className="image-usage">{img.usage}</span>
              <button
                className="download-btn"
                onClick={() => handleDownload(img.url, img.name)}
              >
                ↓
              </button>
            </div>
          ))}
        </div>
      );
    }
    
    return <p ref={contentRef}></p>;
  };

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
      <div className="credit-card" onClick={handleSkipAnimation}>
        <div className="credit-tabs">{renderTabs()}</div>
        <div className="credit-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default CreditPage;