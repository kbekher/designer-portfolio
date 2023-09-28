import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Intro.scss';

export const Intro = () => {
  const duration1 = 400; // Animation duration in milliseconds
  const duration2 = 800; // Animation duration in milliseconds

  const defaultTitleStyle = {
    transition: `opacity ${duration1}ms ease-in-out 0.5s`,
    opacity: 0,
  };

  const transitionTitleStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  };

  const defaultSubtitleStyle = {
    transition: `all ${duration2}ms ease-in-out 0.3s`,
    transform: `translateY(40px)`,
    opacity: 0,
  };

  const transitionSubtitleStyles = {
    entering: { transform: `translateY(40px)`, opacity: 0 },
    entered: { transform: `translateY(0)`, opacity: 1},
  };

  return (
    <TransitionGroup>
      {/* <CSSTransition in={true} appear={true} timeout={400} classNames="fade"> */}
      <div className="Intro">
        <h1 className="visually-hidden">Ivan Inozemtsev</h1>

        <div className="Intro__content">
          <div className="Intro__holder">
            <CSSTransition in={true} appear={true} timeout={duration1}>
              {(state) => (
                <img
                  className="Intro__title-img"
                  style={{
                    ...defaultTitleStyle,
                    ...transitionTitleStyles[state],
                  }}
                  src="./images/intro/title.webp"
                  alt="Ivan Inozemtsev"
                />
              )}
            </CSSTransition>

            <CSSTransition in={true} appear={true} timeout={duration2}>
              {(state) => (
                <p className="Intro__subtitle"
                  style={{
                    ...defaultSubtitleStyle,
                    ...transitionSubtitleStyles[state],
                  }}
                >
                  Ukrainian designer & illustrator based in Germany.
                  Please visit my Instagram to keep up with my latest work.
                </p>
              )}
            </CSSTransition>
          </div>
        </div>
      </div>
      {/* </CSSTransition> */}
    </TransitionGroup>
  );
};