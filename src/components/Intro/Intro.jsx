import './Intro.scss';

export const Intro = () => {
  return (
    <div className="Intro">
      <h1 className="visually-hidden">Ivan Inozemtsev</h1>

      <div className="Intro__content">
        <div className="Intro__holder">
          <img
            className="Intro__title-img"
            src="./images/intro/title.webp"
            alt="Ivan Inozemtsev"
          />
          <p className="Intro__subtitle">
            Ukrainian designer & illustrator based in Germany.
            Please visit my Instagram to keep up with my latest work.
          </p>
        </div>
      </div>
    </div>
  );
};