import { useEffect, useState } from "react";
import { Nav } from "../Nav";
import { Socials } from "../Socials";

import './Menu.scss';

export const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`Menu ${isVisible ? '' : 'hidden'}`}>
      <div className="Menu__content">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Socials />
      </div>
    </div>
  );
};