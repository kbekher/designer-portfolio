import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { Hamburger } from '../Hamburger';
import { Socials } from '../Socials';

import './Header.scss';

export const Header = () => {  
  return (
    <header className="Header">
      <Logo />

      <div className="Header__nav">
        <Nav />
      </div>


      <div className="Header__socials" >
        <Socials />
      </div>

      <div className="Header__hamburger">
        <Hamburger />
      </div>

    </header>

  );
};