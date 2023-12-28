import { links } from '../../utils/links';
import './Socials.scss';

const selectedLinks = links.slice(0, 3);

const SocialLink = ({ name, url }) => {
  const backgroundImage = require(`../../../public/images/icons/${name}.webp`);

  return (
    <a
      href={url}
      target="_blank"
      title={`Ivan's ${name}`}
      rel="noreferrer"
      className="SocialLink"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {" "}
    </a>
  );
};

export const Socials = () => (
  <div className="Socials">
    {selectedLinks.map(link => (
      <SocialLink
        key={link.id}
        name={link.name}
        url={link.url}
      />
    ))}
  </div>
);