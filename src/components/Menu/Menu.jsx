import { useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import { MenuContext } from '../../MenuContext';
import { Nav } from '../Nav';
import { Socials } from '../Socials';

import './Menu.scss';

export const Menu = ( ) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={cn("Menu", {"hidden": !isVisible})}>
      <div className="Menu__content">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Socials />
      </div>
    </div>
  );
};