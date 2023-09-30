import { Fade } from 'react-slideshow-image';
import './Project.scss';

export const Project = ({ project }) => {
  const { name, images } = project;

  const urls = [...images].map(img => {
    const image = require(`../../../public/images/work/${img}.webp`);
    return image;
  });

  return (
    <div className="Project">
      {urls.length !== 1 ? (
           <Fade arrows={false} canSwipe={false}>
           {urls.map(url => (
             <div className="each-slide" key={url}>
             <div>
               <img src={url} alt={name} />
             </div>
             <p>{name}</p>
           </div>
           ))}
         </Fade>
      ) : (
        <div className="Project__slide">
        <div>
          <img 
            src={urls[0]} 
            alt={name} 
            className="Project__image"
          />
        </div>
        <p>{name}</p>
      </div>
      )}
    </div>
  );
};