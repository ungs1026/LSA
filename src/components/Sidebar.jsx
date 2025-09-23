import React from 'react';

const Sidebar = ({ isOpen, onClose, menuItems, onNavigate }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="sidebar">
      <button className="close-btn" onClick={onClose}>X</button>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} onClick={() => onNavigate(index)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
