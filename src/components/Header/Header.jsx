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

        <div
          className="Header__menu"
          style={{
            'display': isMenuOpen ? 'block' : 'none'
          }}
        >
          <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        </div>

        <div
          className="Header__socials"
          style={{
            'display': isMenuOpen ? 'block' : 'none'
          }}
        >
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