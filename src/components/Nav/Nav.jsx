import { useContext } from 'react';
import { Link } from 'react-scroll';
import { MenuContext } from '../../MenuContext';

import './Nav.scss';

export const Nav = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const handleClick = () => {
    if (!isMenuOpen) {
      return;
    }

    setIsMenuOpen(false)
  };

  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__item">
          <Link
            to="work"
            smooth={true}
            delay={0}
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
            delay={0}
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
            title="Ivan's mail"
            className="Nav__link"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};