import './Logo.scss';

export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a 
      href="/"
      className="Logo" 
      onClick={scrollToTop}
    >
      <img
        className="Logo__image"
        src="./images/logo.webp"
        alt="logo"
      />
    </a>
  );
};