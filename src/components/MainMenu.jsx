import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const MainMenu = ({ menuItems, currentMenuIndex, onMenuClick, onNavigate }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (swiperRef.current.swiper.realIndex !== currentMenuIndex) {
        swiperRef.current.swiper.slideToLoop(currentMenuIndex);
      }
    }
  }, [currentMenuIndex]);

  return (
    <div id="main-menu-container">
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        effect={'coverflow'}
        modules={[EffectCoverflow]}
        speed={600}
        // 3개 슬라이드에 맞게 효과 미세 조정
        coverflowEffect={{ 
          rotate: 0, 
          stretch: 6, // 슬라이드 간 간격 조정
          depth: 0, // 3D 깊이감 조정
          modifier: 1, 
          slideShadows: false 
        }}
        loop={true}
        centeredSlides={true}
        initialSlide={currentMenuIndex}
        className="main-menu-swiper"
        onSlideChange={(swiper) => {
          if (swiper.realIndex !== currentMenuIndex) {
            onMenuClick(swiper.realIndex);
          }
        }}
      >
        {menuItems.map((item, index) => (
          <SwiperSlide 
            key={item.id} 
            onClick={() => {
              if (index === currentMenuIndex) {
                onNavigate();
              } else {
                // 클릭 시 해당 슬라이드로 이동하도록 Swiper 인스턴스를 직접 제어
                swiperRef.current.swiper.slideToLoop(index);
              }
            }}
          >
            <div className="slide-item">{item.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainMenu;
