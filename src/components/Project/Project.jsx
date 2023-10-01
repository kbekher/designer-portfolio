import { useMemo } from 'react';
import { Fade } from 'react-slideshow-image';
import './Project.scss';

export const Project = ({ project, selecetdItem, onItemSelect }) => {
  const { name, images } = project;

  const urls = useMemo(() => ([...images].map(img => {
    return require(`../../../public/images/work/${img}.webp`);
  })), [images]);

  const handleClick = () => onItemSelect(project);

  const isSelected = selecetdItem === project;

  const itemStyles = { opacity: isSelected ? '1' : '0' };

  return (
    <div className="Project"  onClick={handleClick}>
        <div className="Project__wrapper">
          <div className="Project__image-container">
            <img src={urls[0]} alt={name} className="Project__image" />
          </div>

          <div className="Project__content-container" style={itemStyles}>
            <h3 className="Project__title">{name}</h3>
          </div>
        </div>
    </div>
  );
};


// <Fade
// arrows={false}
// canSwipe={false}
// pauseOnHover={false}
// autoplay={!isSelected}
// >