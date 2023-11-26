import { useEffect, useState } from 'react';

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

  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(prevSelectedImage => {
      if (prevSelectedImage === item) {
        return '';
      } else {
        return item;
      }
    });
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
        {/* Wine-Grinch */}
        <div className="Work__section Work__section--split">
        <div className="Work__project Work__project--slider Work__project--slider--first">
            <Project
              project={projects[0]}
              isSelected={projects[0].name === selectedItem}
              onItemSelect={handleItemClick}
            />
          </div>
          <div className="Work__project">
            <Project
              project={projects[1]}
              isSelected={projects[1].name === selectedItem}
              onItemSelect={handleItemClick}
            />
          </div>

        </div>

        {/* Alps */}
        <div className="Work__section Work__section--full">
          <div className="Work__project">
            <Project
              project={projects[2]}
              isSelected={projects[2].name === selectedItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>

        {/* Posters1 */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider">
            <PosterSlider
              posters={projects.slice(3, 6)}
              duration={5000}
              isSelected={projects[3].name === selectedItem
                || projects[4].name === selectedItem
                || projects[5].name === selectedItem
              }
              onItemSelect={handleItemClick}
            />
          </div>
          <div className="Work__project Work__project--slider">
            <PosterSlider
              posters={projects.slice(6, 9)}
              duration={4300}
              isSelected={projects[6].name === selectedItem
                || projects[7].name === selectedItem
                || projects[8].name === selectedItem
              }
              onItemSelect={handleItemClick}
            />
          </div>
        </div>

        {/* Posters2 */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider Work__project--slider--poster">
            <PosterSlider
              posters={projects.slice(9, 12)}
              duration={4200}
              isSelected={projects[9].name === selectedItem
                || projects[10].name === selectedItem
                || projects[11].name === selectedItem
              }
              onItemSelect={handleItemClick}
            />
          </div>
          <div className="Work__project Work__project--slider Work__project--slider--poster">
            <PosterSlider
              posters={projects.slice(12, 15)}
              duration={4600}
              isSelected={projects[12].name === selectedItem
                || projects[13].name === selectedItem
                || projects[14].name === selectedItem
              }
              onItemSelect={handleItemClick}
            />
          </div>
        </div>

        {/* Awa-Tropicfeel */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider">
            <Project
              project={projects[15]}
              isSelected={projects[15].name === selectedItem}
              onItemSelect={handleItemClick}
              duration={4500}
            />
          </div>
          <div className="Work__project">
            <Project
              project={projects[16]}
              isSelected={projects[16].name === selectedItem}
              onItemSelect={handleItemClick}
              duration={4500}
            />
          </div>
        </div>

        {/* MDF - Organic */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider">
            <Project
              project={projects[17]}
              isSelected={projects[17].name === selectedItem}
              onItemSelect={handleItemClick}
              duration={4500}
            />
          </div>
          <div className="Work__project Work__project--slider Work__project--slider--last">
            <Project
              project={projects[18]}
              isSelected={projects[18].name === selectedItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>

        {/* Fatboy-LeonDore */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider">
            <Project
              project={projects[19]}
              isSelected={projects[19].name === selectedItem}
              onItemSelect={handleItemClick}
              duration={4000}
            />
          </div>
          <div className="Work__project Work__project--slider">
            <Project
              project={projects[20]}
              isSelected={projects[20].name === selectedItem}
              onItemSelect={handleItemClick}
              duration={4800}
            />
          </div>
        </div>

        {/* Business */}
        <div className="Work__section Work__section--full">
          <div className="Work__project">
            <Project
              project={projects[21]}
              isSelected={projects[21].name === selectedItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>

        {/* Kids */}
        <div className="Work__section Work__section--split">
          {projects.slice(22, 24).map(item => (
            <div className="Work__project" key={item.id}>
              <Project
                project={item}
                isSelected={item.name === selectedItem}
                onItemSelect={handleItemClick}
              />
            </div>
          ))}
        </div>

        {/* Peaks */}
        <div className="Work__section Work__section--full">
          <div className="Work__project">
            <Project
              project={projects[24]}
              isSelected={projects[24].name === selectedItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};