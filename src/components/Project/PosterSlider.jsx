import React from 'react';
import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

import { ProjectImage } from './ProjectImage';
import './Project.scss';

export const PosterSlider = ({
  posters,
  duration,
  isSelected,
  onItemSelect,
}) => {
  return (
    <div className="PosterSlider">
      <Fade
        arrows={false}
        canSwipe={false}
        pauseOnHover={false}
        duration={duration}
        autoplay={!isSelected}
      >
        {posters.map(poster => (
          <div className="each-slide" key={poster.id}>
            <ProjectImage
              img={poster.imageId}
              name={poster.name}
              subtitle={poster.subtitle}
              isSelected={isSelected}
              onClick={() => onItemSelect(poster.name)}
              onMouseLeave={() => onItemSelect('')}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};