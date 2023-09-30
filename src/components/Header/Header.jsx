import { Transition } from 'react-transition-group';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { Hamburger } from '../Hamburger';
import { Socials } from '../Socials';

import './Header.scss';

//#region animations
const duration = 800; // Animation duration in milliseconds

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: 'translateY(-110%)',
};

const transitionStyles = {
  entering: { transform: 'translateY(-110%)' },
  entered: { transform: 'translateY(0%)' },
};
//#endregion

export const Header = () => (
  <Transition in appear timeout={duration}>
    {(state) => (
      <header
        className="Header slide-in-component"
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <div className="Header__content">
          <div className="Header__logo">
            <Logo />
          </div>

          <div className="Header__nav">
            <Nav />
          </div>

          <div className="Header__socials" >
            <Socials />
          </div>

          <div className="Header__hamburger">
            <Hamburger />
          </div>
        </div>
      </header>
    )}
  </Transition>
);