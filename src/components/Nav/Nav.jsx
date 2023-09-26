import { Link } from 'react-scroll';

import './Nav.scss';

export const Nav = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleClick = () => setIsMenuOpen(false);

  return (
    <ul className="Nav">
      <li className="Nav__item">
        <Link
          to="work"
          smooth={true}
          duration={250}
          className="Nav__link"
          onClick={handleClick}
        >
          Work
        </Link>
      </li>
      <li className="Nav__item">
        <Link
          to="about"
          smooth={true}
          duration={250}
          className="Nav__link"
          onClick={handleClick}
        >
          About
        </Link>
      </li>
      <li className="Nav__item">
        <a
          href="mailto:Inozemtsevco@gmail.com"
          className="Nav__link"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};