import { socialLinks } from '../../utils/links';

import './Socials.scss';

const SocialLink = ({ name, url }) => {
  const backgroundImage = require(`../../../public/images/icons/${name}.webp`);

  return (
    <a 
      href={url}
      target="_blank"
      rel="noreferrer" 
      className="SocialLink" 
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      {" "}
    </a>
  );
};

export const Socials = () => {
  return (
    <div className="Socials">
      {socialLinks.map(link => (
        <SocialLink 
          key={link.id} 
          name={link.name} 
          url={link.url}
        />
      ))}
    </div>
  );
};