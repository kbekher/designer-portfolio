import React from 'react';
import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

import './Project.scss';

export const PosterSlider = ({
  posters,
  duration,
  // selectedItem,
  // onItemSelect,
}) => {

  return (
    <div className="PosterSlider">
      <Fade
        arrows={false}
        canSwipe={false}
        pauseOnHover={false}
        duration={duration}
      >
        {posters.map(poster => (
          <div
            key={poster.id}
            className='PosterSlider__slide'
            // onClick={() => onItemSelect(poster.name)}
          >
            <div>
              <img
                src={`./images/work/${poster.imageId}.webp`}
                alt={poster.name}
                className='PosterSlider__img'
              />
            </div>
            <div
              className="PosterSlider__content-container"
              // style={{ opacity: selectedItem === poster.name ? '1' : '0' }}
            >
              <h2 className='PosterSlider__title'>
                {poster.name}
              </h2>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};