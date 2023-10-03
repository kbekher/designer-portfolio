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

  const posters = projects.slice(3, 15);
  const posters1 = posters.splice(0, 3);
  const posters2 = posters.splice(0, 3);
  const posters3 = posters.splice(0, 3);
  const posters4 = posters;

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
              {projects[1].images.map(img => (
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
              image={projects[2].image}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>

        {/* Poster1 */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider Work__project--slider--poster">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(posters1[0].name)
                || !isSelected(posters1[0].name)
                || !isSelected(posters1[0].name)
              }
            >
              {posters1.map(poster => (
                <div className="each-slide" key={poster.name}>
                  <Project
                    key={poster.name}
                    name={poster.name}
                    image={poster.image}
                    selecetdItem={selecetdItem}
                    onItemSelect={handleItemClick}
                  />
                </div>
              ))}
            </Fade>
          </div>
          <div className="Work__project Work__project--slider Work__project--slider--poster">
          <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(posters2[0].name)
                || !isSelected(posters2[0].name)
                || !isSelected(posters2[0].name)
              }
            >
              {posters2.map(poster => (
                <div className="each-slide" key={poster.name}>
                  <Project
                    key={poster.name}
                    name={poster.name}
                    image={poster.image}
                    selecetdItem={selecetdItem}
                    onItemSelect={handleItemClick}
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>

        {/* Poster2 */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider Work__project--slider--poster">
          <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(posters3[0].name)
                || !isSelected(posters3[0].name)
                || !isSelected(posters3[0].name)
              }
            >
              {posters3.map(poster => (
                <div className="each-slide" key={poster.name}>
                  <Project
                    key={poster.name}
                    name={poster.name}
                    image={poster.image}
                    selecetdItem={selecetdItem}
                    onItemSelect={handleItemClick}
                  />
                </div>
              ))}
            </Fade>
          </div>
          <div className="Work__project Work__project--slider Work__project--slider--poster">
          <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(posters4[0].name)
                || !isSelected(posters4[0].name)
                || !isSelected(posters4[0].name)
              }
            >
              {posters4.map(poster => (
                <div className="each-slide" key={poster.name}>
                  <Project
                    key={poster.name}
                    name={poster.name}
                    image={poster.image}
                    selecetdItem={selecetdItem}
                    onItemSelect={handleItemClick}
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div>

        {/* Awa-Fatboy */}
        <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(projects[15].name)}
            >
              {projects[15].images.map(img => (
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
          <div className="Work__project Work__project--slider">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(projects[16].name)}
            >
              {projects[16].images.map(img => (
                <div className="each-slide" key={img}>
                <Project
                  name={projects[16].name}
                  image={img}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
              ))}
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
              name={projects[18].name}
              image={projects[18].image}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
          <div className="Work__project Work__project--slider Work__project--slider--last">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(projects[19].name)}
            >
              {projects[19].images.map(img => (
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
        </div>

        {/* Faces */}
        <div className="Work__section Work__section--full">
          <div className="Work__project">
            <Project
              name={projects[20].name}
              image={projects[20].image}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>

        {/* Kids */}
        <div className="Work__section Work__section--split">
          {projects.slice(21, 23).map(item => (
            <div className="Work__project" key={item.name}>
            <Project
              name={item.name}
              image={item.image}
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
              name={projects[23].name}
              image={projects[23].image}
              selecetdItem={selecetdItem}
              onItemSelect={handleItemClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};