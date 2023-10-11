import React from 'react';
import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

import { ProjectImage } from './ProjectImage';
import './Project.scss';

export const Project = ({
  project,
  isSelected,
  onItemSelect,
  duration = 5000,
}) => {
  const { name, imageId, imageIds, subtitle } = project;

  let element;

  if (imageId) {
    element = <ProjectImage
      img={imageId}
      name={name}
      subtitle={subtitle}
      isSelected={isSelected}
      onClick={() => onItemSelect(name)}
    />;
  }

  if (imageIds) {
    element = <Fade
      arrows={false}
      canSwipe={false}
      pauseOnHover={false}
      autoplay={!isSelected}
      duration={duration}
    >
      {imageIds.map(img => (
        <div className="each-slide" key={img}>
          <ProjectImage
            img={img}
            name={name}
            subtitle={subtitle}
            isSelected={isSelected}
            onClick={() => onItemSelect(name)}
          />
        </div>
      ))}
    </Fade>;
  }

  return (
    <div className="Project">
      {element}
    </div>
  );
};