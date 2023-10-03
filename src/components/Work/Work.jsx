import { useEffect, useState } from 'react';
import { Fade } from 'react-slideshow-image';
import { projects } from "../../utils/projects";
import { Project } from '../Project';
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
        {/* <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(posters[0].names[0])
                && !isSelected(posters[0].names[1])
                && !isSelected(posters[0].names[2])
              }
            >
              {posters[0].imageIds.map((img, i) =>{
                return  (
                  <div className="each-slide" key={img}>
                    <Project
                      name={posters[0].names[i]}
                      image={img}
                      selecetdItem={selecetdItem}
                      onItemSelect={handleItemClick}
                    />
                  </div>
                );
              })}
            </Fade>
          </div>
          <div className="Work__project Work__project--slider">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(posters[1].names[0])
                && !isSelected(posters[1].names[1])
                && !isSelected(posters[1].names[2])
              }
            >
              {posters[1].imageIds.map((img, i) => (
                <div className="each-slide" key={img}>
                  <Project
                    name={posters[1].names[i]}
                    image={img}
                    selecetdItem={selecetdItem}
                    onItemSelect={handleItemClick}
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div> */}

        {/* Poster2 */}
        {/* <div className="Work__section Work__section--split">
          <div className="Work__project Work__project--slider Work__project--slider--poster">
            <Fade
              arrows={false}
              canSwipe={false}
              pauseOnHover={false}
              autoplay={!isSelected(posters3[0].name)
                || !isSelected(posters3[0].name)
                || !isSelected(posters3[0].name)
              }
              duration={4800}
            >
              {posters3.map(poster => (
                <div className="each-slide" key={poster.imageId}>
                  <Project
                    name={poster.name}
                    image={poster.imageId}
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
              duration={5000}
            >
              {posters4.map(poster => (
                <div className="each-slide" key={poster.imageId}>
                  <Project
                    name={poster.name}
                    image={poster.imageId}
                    selecetdItem={selecetdItem}
                    onItemSelect={handleItemClick}
                  />
                </div>
              ))}
            </Fade>
          </div>
        </div> */}

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