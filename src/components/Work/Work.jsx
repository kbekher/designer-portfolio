import { useEffect, useState } from 'react';
import { Fade } from 'react-slideshow-image';
import projects from '../../utils/projects.json';
import { Project } from '../Project/Project';
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
    if (selecetdItem === item) {
      setSelectedItem(''); // Deselect if already selected
    } else {
      setSelectedItem(item); // Otherwise, select the child item
    }
  }

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
              image={projects[0].image}
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
              <div className="each-slide">
                <Project
                  name={projects[1].name}
                  image={projects[1].images[0]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
              <div className="each-slide">
                <Project
                  name={projects[1].name}
                  image={projects[1].images[1]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
            </Fade>
          </div>
        </div>

        {/* Amster */}
        <div className="Work__section Work__section--full">
          <div className="Work__project">
            <Project
              name={projects[2].name}
              image={projects[2].image}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>

        {/* Poster1 */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={
                !isSelected(projects[3].names[0])
                || !isSelected(projects[3].names[1])
                || !isSelected(projects[3].names[2])
              }
            >
              <div className="each-slide">
                <Project
                  name={projects[3].names[0]}
                  image={projects[3].images[0]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
              <div className="each-slide">
                <Project
                  name={projects[3].names[1]}
                  image={projects[3].images[1]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
              <div className="each-slide">
                <Project
                  name={projects[3].names[2]}
                  image={projects[3].images[2]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
            </Fade>
          </div>
          <div className="Work__project Work__project--slider">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={
                !isSelected(projects[4].names[0])
                || !isSelected(projects[4].names[1])
                || !isSelected(projects[4].names[2])
              }
            >
              <div className="each-slide">
                <Project
                  name={projects[4].names[0]}
                  image={projects[4].images[0]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
              <div className="each-slide">
                <Project
                  name={projects[4].names[1]}
                  image={projects[4].images[1]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
              <div className="each-slide">
                <Project
                  name={projects[4].names[2]}
                  image={projects[4].images[2]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
            </Fade>
          </div>
        </div>

        {/* Poster2 */}
        <div className="Work__section Work__section--split">
          <div className="Work__project">slider</div>
          <div className="Work__project">slider</div>
        </div>

        {/* Awa-Fatboy */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(projects[7].name)}
            >
              <div className="each-slide">
                <Project
                  name={projects[7].name}
                  image={projects[7].images[0]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
              <div className="each-slide">
                <Project
                  name={projects[7].name}
                  image={projects[7].images[1]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
              <div className="each-slide">
                <Project
                  name={projects[7].name}
                  image={projects[7].images[2]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
            </Fade>
          </div>
          <div className="Work__project Work__project--slider">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(projects[8].name)}
            >
              <div className="each-slide">
                <Project
                  name={projects[8].name}
                  image={projects[8].images[0]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
              <div className="each-slide">
                <Project
                  name={projects[8].name}
                  image={projects[8].images[1]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
              <div className="each-slide">
                <Project
                  name={projects[8].name}
                  image={projects[8].images[2]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
            </Fade>
          </div>
        </div>

        {/* MDF */}
        <div className="Work__section Work__section--full">
          <div className="Work__project">slider-mobile</div>

          <div className="Work__project">slider</div>
          <div className="Work__project">slider</div>
        </div>

        {/* Tropicfeel-Organic */}
        <div className="Work__section Work__section--split">
          <div className="Work__project">
            <Project
              name={projects[10].name}
              image={projects[10].image}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
          <div className="Work__project Work__project--slider Work__project--slider--last">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(projects[11].name)}
            >
              <div className="each-slide">
                <Project
                  name={projects[11].name}
                  image={projects[11].images[0]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
              <div className="each-slide">
                <Project
                  name={projects[11].name}
                  image={projects[11].images[1]}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
            </Fade>
          </div>
        </div>

        {/* Faces */}
        <div className="Work__section Work__section--full">
          <div className="Work__project">
            <Project
              name={projects[12].name}
              image={projects[12].image}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>

        {/* Kids */}
        <div className="Work__section Work__section--split">
          <div className="Work__project">
            <Project
              name={projects[13].name}
              image={projects[13].image}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
          <div className="Work__project">
            <Project
              name={projects[14].name}
              image={projects[14].image}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>


        {/* Bike */}
        <div className="Work__section Work__section--full">
          <div className="Work__project">
            <Project
              name={projects[15].name}
              image={projects[15].image}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};