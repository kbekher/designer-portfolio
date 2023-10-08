import React from 'react';
import { Fade } from 'react-slideshow-image';

import './Project.scss';

const getUrl = (imageId) => {
  const url = require(`../../../public/images/work/${imageId}.webp`);
  return url;
};

export const Project = ({
  project,
  selectedItem,
  onItemSelect,
  duration = 5000,
}) => {
  const { name, imageId, imageIds, subtitle } = project;
  let element;

  const isSelected = selectedItem === name;

  const itemStyles = { opacity: isSelected ? '1' : '0' };

  if (imageId) {
    element = <div className="Project" onClick={() => onItemSelect(name)}>
      <div className="Project__wrapper">
        <img
          src={getUrl(imageId)}
          alt={name}
          className="Project__image"
        />

        <div className="Project__content-container" style={itemStyles}>
          <h3 className="Project__title">
            {name}
          </h3>
          {project.subtitle && (
            <span className="Project__subtitle">
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
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
          <div
            key={img}
            className="Project"
            onClick={() => onItemSelect(name)}
          >
            <div className="Project__wrapper">
              <img
                src={getUrl(img)}
                alt={name}
                className="Project__image"
              />

              <div className="Project__content-container" style={itemStyles}>
                <h3 className="Project__title">
                  {name}
                </h3>
                {project.subtitle && (
                  <span className="Project__subtitle">
                    {subtitle}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fade>
  }

  return element;
};