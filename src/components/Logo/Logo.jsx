import { useContext } from 'react';
import { scrollTop } from '../../utils/functions';
import './Logo.scss';
import { MenuContext } from '../../MenuContext';

export const Logo = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const handleClick = () => {
    if (!isMenuOpen) {
      scrollTop();
      return;
    }

    setIsMenuOpen(false)
    scrollTop();
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