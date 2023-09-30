import projectsList from '../../utils/projects.json';
import { Project } from '../Project';
import './Work.scss';

export const Work = () => {


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
        {/* {projectsList.map(item => (
          <div className="Work__project-section" key={item.id}>
            <ProjectSection section={item} />
          </div>
        ))} */}
        <div className="grid">
          <div className="Work__project-section row">
            {projectsList[0].projects.map(project => (
              <div className="col half-width" key={project.name}>
                <Project 
                  project={project}
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