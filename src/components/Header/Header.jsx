import { Transition } from 'react-transition-group';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { Hamburger } from '../Hamburger';
import { Socials } from '../Socials';

import './Header.scss';

export const Header = () => {
  const duration = 400; // Animation duration in milliseconds

  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: 'translateY(-100%)',
  };

  const transitionStyles = {
    entering: { transform: 'translateY(-100%)' },
    entered: { transform: 'translateY(0%)' },
  };

  return (
    <Transition in={true} appear={true} timeout={duration}>
      {(state) => (
        <header
          className="Header slide-in-component"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}>
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
      )}
    </Transition>
  );
};