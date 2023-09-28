import { useContext } from 'react';
import cn from 'classnames';
import { MenuContext } from '../../MenuContext';

import './Hamburger.scss';

export const Hamburger = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="Hamburger" onClick={handleClick}>
      <div className={cn("icon-1", {'a': isMenuOpen})}>{""}</div>
      <div className={cn("icon-2", {'c': isMenuOpen})}>{""}</div>
      <div className={cn("icon-3", {'b': isMenuOpen})}>{""}</div>
      <div className="clear"></div>
    </div >
  );
};