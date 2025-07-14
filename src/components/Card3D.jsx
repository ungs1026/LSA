import React from 'react';

const Card3D = ({ item, onClick, language }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = `https://placehold.co/400x500/1a1a1e/e0e0e0?text=${item.name}`;
  };

  const backgroundPosition = `${item.bg_x_position || 'center'} center`;
  const name = language === 'en' && item.type === 'character' ? item.eng_name : item.name;

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
        <img src={item.img} alt={name} className="card-img" onError={handleImageError} />
        <div className="card-title">{name}</div>
      </div>
    </div>
  );
};

export default Card3D;
