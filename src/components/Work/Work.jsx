import { useEffect, useState } from 'react';
import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

import { projects } from "../../utils/projects";
import { Project } from '../Project';
import { PosterSlider } from '../Project/PosterSlider';

import './Work.scss';

export const Work = () => {
  useEffect(() => {
    window.addEventListener('error', e => {
      if (e.message === 'ResizeObserver loop limit exceeded') {
        const resizeObserverErrDiv = document.getElementById(
          'webpack-dev-server-client-overlay-div'
        );
        const resizeObserverErr = document.getElementById(
          'webpack-dev-server-client-overlay'
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute('style', 'display: none');
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute('style', 'display: none');
        }
      }
    });
  }, []);

  const [selecetdItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(prevSelectedImage => {
      if (prevSelectedImage === item) {
        return '';
      } else {
        return item;
      }
    });
  };

  const isSelected = (name) => {
    return selecetdItem === name;
  };

  return (
    <div className="Work" id="work">
      <div className="Work__intro">
        <div className="Work__intro-img-wrapper">
          <img
            className="Work__intro-img"
            src="./images/work/intro.webp"
            alt="intro dive in"
          />
        </div>

        <div className="Work__intro-content">
          <h2 className="Work__intro-title">Let's dive into my world!</h2>
        </div>
      </div>

      <div className="Work__projects">
        {/* Simmons-Lasso */}
        <div className="Work__section Work__section--split">
          <div className="Work__project">
            <Project
              name={projects[0].name}
              image={projects[0].imageId}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
          <div className="Work__project Work__project--slider Work__project--slider--first">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(projects[1].name)}
            >
              {projects[1].imageIds.map(img => (
                <div className="each-slide" key={img}>
                  <Project
                    name={projects[1].name}
                    image={img}
                    selecetdItem={selecetdItem}
                    onItemSelect={handleItemClick}
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>

        {/* Amster */}
        <div className="Work__section Work__section--full">
          <div className="Work__project">
            <Project
              name={projects[2].name}
              image={projects[2].imageId}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>

        {/* Poster1 */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider">
            <PosterSlider
              posters={projects.slice(3, 6)}
              duration={5000}
              // selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
          <div className="Work__project Work__project--slider">
            <PosterSlider
              posters={projects.slice(6, 9)}
              duration={4300}
              // selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>
  

        {/* Poster2 */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider Work__project--slider--poster">
          <PosterSlider
              posters={projects.slice(9, 12)}
              duration={4200}
              // selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
          <div className="Work__project Work__project--slider Work__project--slider--poster">
          <PosterSlider
              posters={projects.slice(12, 15)}
              duration={4600}
              // selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />

          </div>
        </div>

        {/* Awa-Tropicfeel */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(projects[15].name)}
              duration={4500}
            >
              {projects[15].imageIds.map(img => (
                <div className="each-slide" key={img}>
                  <Project
                    name={projects[15].name}
                    image={img}
                    selecetdItem={selecetdItem}
                    onItemSelect={handleItemClick}
                  />
                </div>
              ))}
            </Fade>
          </div>
          <div className="Work__project">
            <Project
              name={projects[16].name}
              image={projects[16].imageId}
              subtitle={projects[16].subtitle}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>

        {/* MDF - Organic */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(projects[17].name)}
              duration={4500}
            >
              {projects[17].imageIds.map(img => (
                <div className="each-slide" key={img}>
                  <Project
                    name={projects[17].name}
                    image={img}
                    subtitle={projects[17].subtitle}
                    selecetdItem={selecetdItem}
                    onItemSelect={handleItemClick}
                  />
                </div>
              ))}
            </Fade>
          </div>
          <div className="Work__project Work__project--slider Work__project--slider--last">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(projects[18].name)}
            >
              {projects[18].imageIds.map(img => (
                <div className="each-slide" key={img}>
                  <Project
                    name={projects[18].name}
                    subtitle={projects[18].subtitle}
                    image={img}
                    selecetdItem={selecetdItem}
                    onItemSelect={handleItemClick}
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>

        {/* Fatboy-LeonDore */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(projects[19].name)}
              duration={4000}
            >
              {projects[19].imageIds.map(img => (
                <div className="each-slide" key={img}>
                  <Project
                    name={projects[19].name}
                    image={img}
                    selecetdItem={selecetdItem}
                    onItemSelect={handleItemClick}
                  />
                </div>
              ))}
            </Fade>
          </div>
          <div className="Work__project Work__project--slider">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(projects[20].name)}
              duration={4800}
            >
              {projects[20].imageIds.map(img => (
                <div className="each-slide" key={img}>
                  <Project
                    // key={img}
                    name={projects[20].name}
                    image={img}
                    selecetdItem={selecetdItem}
                    onItemSelect={handleItemClick}
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>

        {/* Faces */}
        <div className="Work__section Work__section--full">
          <div className="Work__project">
            <Project
              name={projects[21].name}
              image={projects[21].imageId}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>

        {/* Kids */}
        <div className="Work__section Work__section--split">
          {projects.slice(22, 24).map(item => (
            <div className="Work__project" key={item.id}>
              <Project
                name={item.name}
                image={item.imageId}
                selecetdItem={selecetdItem}
                onItemSelect={handleItemClick}
              />
            </div>
          ))}
        </div>


        {/* Bike */}
        <div className="Work__section Work__section--full">
          <div className="Work__project">
            <Project
              name={projects[24].name}
              image={projects[24].imageId}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};