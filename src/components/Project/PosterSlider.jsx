import React from 'react';
import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

import './Project.scss';

export const PosterSlider = ({
  posters,
  delay,
  // selecetdItem,
  onItemSelect,
}) => {

  return (
    <div className="PosterSlider">
      <Fade
        arrows={false}
        canSwipe={false}
        pauseOnHover={false}
        delay={delay}
      >
        {posters.map(poster => (
          <div
            key={poster.id}
            className='PosterSlider__slide'
            onClick={() => onItemSelect(poster.name)}
          >
            <div>
              <img
                src={`./images/work/${poster.imageId}.webp`}
                alt={poster.name}
                className='PosterSlider__img'
              />
            </div>
            {/* <h2 
              className='Poster__title'
              style={{opacity: selecetdItem === poster.name ? '1' : '0'}}
            >
              {poster.name}
            </h2> */}
          </div>
        ))}
      </Fade>
    </div>
  );
};