import { Project } from '../Project/Project';
import './ProjectSection.scss';

export const ProjectSection = ({ section }) => {
  const { id, projects } = section;

  if (id === 0) {
    return (
      <div className="ProjectSection">
        <div className="ProjectSection__slides">
          {projects.map(project => (
            <div className="ProjectSection__slide" key={project.name}>
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === 5) {
    return (
      <div className="ProjectSection">

      </div>
    );
  }

  return (
    <div className="ProjectSection">

    </div>
  );
};