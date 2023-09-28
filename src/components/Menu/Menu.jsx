import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Nav } from '../Nav';
import { Socials } from '../Socials';

import './Menu.scss';

export const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={cn("Menu", { "hidden": !isVisible })}>
      <div className="Menu__content">
        <Nav />
        <Socials />
      </div>
    </div>
  );
};