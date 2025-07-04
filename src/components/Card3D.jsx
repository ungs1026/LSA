import React from 'react';

const Card3D = ({ item, onClick }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = `https://placehold.co/400x500/1a1a1e/e0e0e0?text=${item.name}`;
  };

  // item 객체에 bg_x_position이 있으면 그 값을 사용하고, 없으면 'center'를 기본값으로 사용합니다.
  const backgroundPosition = `${item.bg_x_position || 'center'} center`;

  return (
    <div className="card-container" onClick={onClick}>
      <div className="card-3d">
        <div 
          className="card-bg" 
          style={{ 
            backgroundImage: `url('${item.bg}')`,
            backgroundPosition: backgroundPosition 
          }}
        ></div>
        <img src={item.img} alt={item.name} className="card-img" onError={handleImageError} />
        <div className="card-title">{item.name}</div>
      </div>
    </div>
  );
};

export default Card3D;
