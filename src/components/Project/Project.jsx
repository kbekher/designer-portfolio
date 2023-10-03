import React from 'react';
import './Project.scss';


export const Project = ({
  name,
  image,
  selecetdItem,
  onItemSelect,
}) => {
  const url = require(`../../../public/images/work/${image}.webp`);

  const handleClick = () => {
    onItemSelect(name);
  }

  const isSelected = selecetdItem === name;

  const itemStyles = { opacity: isSelected ? '1' : '0' };

  return (
    <div className="Project" onClick={handleClick}>
      <div className="Project__wrapper">
        <img src={url} alt={name} className="Project__image" />

        <div className="Project__content-container" style={itemStyles}>
          <h3 className="Project__title">{name}</h3>
        </div>
      </div>
    </div>
  );
};
