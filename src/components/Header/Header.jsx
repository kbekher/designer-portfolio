import cn from 'classnames';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { Socials } from '../Socials';

import './Header.scss';

export const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="Header">
      <div className="Header__content">
        <Logo />

        <div className={cn("Header__menu", {
          "Header__menu--visible": isMenuOpen,
        })}>
          <Nav />
        </div>

        <div className="Header__socials">
          <Socials />
        </div>

        <button
          type="button"
          className={cn("Header__hamburger", {
            "Header__hamburger--menu": !isMenuOpen,
            "Header__hamburger--cross": isMenuOpen,
          })}
          onClick={handleClick}
        >
          {" "}
        </button>
      </div>
    </header>
  );
};