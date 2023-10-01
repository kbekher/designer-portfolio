import { useState } from 'react';
import projectsList from '../../utils/projects.json';
import { Project } from '../Project';
import './Work.scss';

export const Work = () => {
  const [selecetdItem, setSelectedItem] = useState(null);


  const handleItemClick = (item) => {
    if (selecetdItem === item) {
      setSelectedItem(null); // Deselect if already selected
    } else {
      setSelectedItem(item); // Otherwise, select the child item
    }
  }

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
        <div className="grid">
          <div className="row">
            {projectsList[0].projects.map(project => (
              <div className="col half-width" key={project.name}>
                <Project 
                  project={project}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
            ))}
          </div>

          <div className="Work__project-section row full-width"></div>

          <div className="Work__project-section row">
            <div className="col half-width"></div>
            <div className="col half-width"></div>
          </div>

          <div className="Work__project-section row">
            <div className="col half-width"></div>
            <div className="col half-width"></div>
          </div>

          <div className="row">
          {projectsList[4].projects.map(project => (
              <div className="col half-width" key={project.name}>
                <Project 
                  project={project}
                  selecetdItem={selecetdItem}
                  onItemSelect={handleItemClick}
                />
              </div>
            ))}
          </div>

          <div className="Work__project-section row full-width"></div>

          <div className="Work__project-section row">
            <div className="col half-width"></div>
            <div className="col half-width"></div>
          </div>

          <div className="Work__project-section row full-width"></div>

          <div className="Work__project-section row">
            <div className="col half-width"></div>
            <div className="col half-width"></div>
          </div>

          <div className="Work__project-section row full-width"></div>
        </div>
      </div>
    </div>
  );
};