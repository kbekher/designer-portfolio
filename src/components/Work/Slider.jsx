import React from 'react';
import { Fade } from 'react-slideshow-image';

import './Work.scss';

export const Slider = ({ selectedItem, children }) => {
  const isSelected = children.some(child =>
    child.props.name === selectedItem
  );

  console.log(!isSelected);

  return (
    <Fade
      arrows={false}
      canSwipe={false}
      pauseOnHover={false}
      autoplay={!isSelected}
    >
      <div className="each-slide">
        {children}
      </div>
    </Fade>
  );
};