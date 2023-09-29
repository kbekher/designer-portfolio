import { useContext } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Logo.scss';
import { MenuContext } from '../../MenuContext';

export const Logo = () => {
  const {isMenuOpen, setIsMenuOpen} = useContext(MenuContext);
  
  const handleClick = () => {
    if (!isMenuOpen) {
      scroll.scrollToTop();
      return;
    }

    setIsMenuOpen(false)
    scroll.scrollToTop();
  }

  return (
    <button
      type="button"
      className="Logo" 
      onClick={handleClick}
    >
      <img
        className="Logo__image"
        src="./images/logo.webp"
        alt="logo"
      />
    </button>
  );
};