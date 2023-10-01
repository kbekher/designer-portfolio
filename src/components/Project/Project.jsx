import { useMemo} from 'react';
import { Fade } from 'react-slideshow-image';
import './Project.scss';

export const Project = ({ project, selecetdItem, onItemSelect}) => {
  const { name, images } = project;

  const urls = useMemo(() => ([...images].map(img => {
    return require(`../../../public/images/work/${img}.webp`);
  })), [images]);

  const handleClick = () => onItemSelect(project);

  const isSelected = selecetdItem === project;

  const itemStyles = { opacity: isSelected ? '1' : '0' };

  return (
    <div className="Project">
      {urls.length !== 1 ? (
        <Fade
          arrows={false}
          canSwipe={false}
          autoplay={!isSelected}
        >
          {urls.map(url => (
            <div
              key={url}
              className="each-slide"
              onClick={handleClick} 
            >
              <div className="Project__image-container">
                <img
                  src={url}
                  alt={name}
                  className="Project__image"
                />
              </div>

              <div 
                className="Project__content-container"
                style={itemStyles}
              >
                <h3 className="Project__title">{name}</h3>
              </div>
            </div>
          ))}
        </Fade>
      ) : (
        <div className="Project__slide" onClick={handleClick}>
          <div className="Project__image-container">
            <img
              src={urls[0]}
              alt={name}
              className="Project__image"
            />
          </div>

          <div 
            className="Project__content-container"
            style={itemStyles}
          >
            <h3 className="Project__title">{name}</h3>
          </div>
        </div>
      )}
    </div>
  );
};