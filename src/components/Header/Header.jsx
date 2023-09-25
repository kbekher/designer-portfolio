import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { Socials } from '../Socials';

import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <div className="Header__content">
        <Logo />

        <div className="Header__nav">
          <Nav />
        </div>

        <div className="Header__socials">
          <Socials />
        </div>

        {/* <button className="Header__menu-btn">
          {" "}
        </button> */}
      </div>
    </header>
  );
};