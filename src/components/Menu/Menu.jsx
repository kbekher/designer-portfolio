import { Logo } from '../Logo';

import './Menu.scss';

export const Menu = () => {
  return (
    <div className="Menu" id="Menu">
      <div className="Menu__top">
        <Logo />

        <a href="/" className="Menu__close-icon" />
      </div>
    </div>
  );
};
