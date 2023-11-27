import { useState, useEffect } from 'react';
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

export const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleHeaderHover = () => {
    setVisible(true);
  }

  return (
    <Transition in appear timeout={duration}>
      {(state) => (
        <header
          className="Header slide-in-component"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          onMouseEnter={handleHeaderHover}
        >
          <div className="Header__content">
            <div className="Header__logo">
              <Logo />
            </div>

            <div 
              className="Header__nav" 
              style={{ 
                opacity: visible ? 1 : 0,
                visibility: visible ? 'visible' : 'hidden'
              }}
            >
              <Nav />
            </div>

            <div 
              className="Header__socials" 
              style={{ 
                opacity: visible ? 1 : 0,
                visibility: visible ? 'visible' : 'hidden'
              }}
            >
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
};