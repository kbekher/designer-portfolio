import './Project.scss';

const getUrl = (imageId) => {
  const url = require(`../../../public/images/work/${imageId}.webp`);
  return url;
};

export const ProjectImage = ({
  img,
  name,
  subtitle = '',
  isSelected,
  onClick,
}) => {
  return (
    <div className="ProjectImage" onClick={onClick}>
      <div className="ProjectImage__wrapper">
        <img
          src={getUrl(img)}
          alt={name}
          className="ProjectImage__image"
        />

        <div 
          className="ProjectImage__content-container" 
          style={{ opacity: isSelected ? '1' : '0' }}
        >
          <h3 className="ProjectImage__title">
            {name}
          </h3>
          {subtitle && (
            <span className="ProjectImage__subtitle">
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};