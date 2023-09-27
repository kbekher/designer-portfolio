import { Nav } from "../Nav";
import { Socials } from "../Socials";

import './Menu.scss';

export const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="Menu">
      <div className="Menu__content">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Socials />
      </div>
    </div>
  );
};