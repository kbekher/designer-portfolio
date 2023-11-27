import './Project.scss';

const getUrl = (imageId) => {
  const url = require(`../../../public/images/work/${imageId}.webp`);
  return url;
};

export const ProjectImage = ({
  img,
  name,
  subtitle = '',
  url = '',
  isSelected,
  onClick,
  onMouseLeave,
}) => {
  return (
    <div 
      className="ProjectImage" 
      onClick={onClick}
      onMouseLeave={onMouseLeave}
    >
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

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="ProjectImage__link"
              onClick={!isSelected ? (e) => e.preventDefault() : undefined}
            >
              See Project on Behance →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};