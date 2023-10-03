import { links } from '../../utils/links';
import { Form } from '../Form/Form';

import './About.scss';

export const About = () => {
  return (
    <div className="About" id="about">
      <div className="About__content">
        <div className="About__section">
          <h2 className="About__subtitle About__subtitle--small">A few words about me</h2>
          <div className="About__article">
            <div className="About__img-container">
              <img
                className="About__img"
                src="../images/about/photo.webp"
                alt="Ivan Inozemtsev"
              />
            </div>

            <p className="About__paragpraph">
              I am a graphic designer originally from Ukraine, currently based in Germany.
              With a deep appreciation for both Eastern and Western design influences,
              I bring a unique perspective to my work. I continually strive to enhance my personal
              style and I am always excited to collaborate and bring your visions to life…
            </p>
          </div>

        </div>

        <div className="About__section">
          <ul className="About__list">
            <li className="About__list-item">
              <h3 className="About__subtitle">
                Contact
              </h3>

              <a href="mailto:Inozemtsevco@gmail.com" className="About__contact-link">
                Inozemtsevco@gmail.com
              </a>
            </li>
            <li className="About__list-item">
              <h3 className="About__subtitle">
                Social Media
              </h3>

              <div className="About__socials">
                {links.map(link => (
                  <a
                    key={link.id}
                    href={link.url}
                    alt={`Ivan's ${link.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="About__contact-link"
                  >
                    {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                  </a>
                ))}
              </div>


            </li>
            <li className="About__list-item">
              <h3 className="About__subtitle">
                Achievements
              </h3>

              <a
                href="./images/about/certificate.webp"
                target="_blank"
                rel="noreferrer"
                className="About__certificate-link"
              >
                Graphic design certificate PRJCTR
              </a>
            </li>
          </ul>
        </div>

        <div className="About__section">
          <h3 className="About__subtitle About__subtitle--subscribe">Don't miss out – subscribe now!</h3>

          <div className="About__form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};