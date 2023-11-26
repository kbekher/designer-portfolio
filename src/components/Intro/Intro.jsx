import { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './Intro.scss';

//#region animations
const duration1 = 400; // Animation duration in milliseconds
const duration2 = 800;

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
  entered: { transform: `translateY(0)`, opacity: 1 },
};

const defaultBgStyle = {
  transition: `all ${duration2}ms ease-in-out`,
  transform: `translateY(100%)`,
  opacity: 0,
};

const transitionBgStyles = {
  entering: { transform: `translateY(100%)`, opacity: 0 },
  entered: { transform: `translateY(0)`, opacity: 1 },
};
//#endregion

export const Intro = () => {
  const [vh, setVh] = useState(window.innerHeight * 0.01);

  useEffect(() => {
    setVh(window.innerHeight * 0.01);
  }, []);

  return (
    <TransitionGroup>
      <div className="Intro" style={{
        height: `calc(${vh}px * 100)`,
      }}
      >
        <h1 className="visually-hidden">Ivan Inozemtsev</h1>

        <div className="Intro__content">
          <div className="Intro__holder">
            <CSSTransition in appear timeout={duration1}>
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
          </div>

          <CSSTransition in appear timeout={duration2}>
            {(state) => (
              <div
                className="Intro__sub-container"
                style={{
                  ...defaultSubtitleStyle,
                  ...transitionSubtitleStyles[state],
                }}
              >
                <p className="Intro__subtitle">
                  Ukrainian designer & illustrator based in Germany.
                  Please visit my Instagram to keep up with my latest work.
                </p>
              </div>

            )}
          </CSSTransition>
        </div>

        <CSSTransition in appear timeout={duration2}>
          {(state) => (
            <div
              className="Intro__bg-container"
              style={{
                ...defaultBgStyle,
                ...transitionBgStyles[state],
              }}
            >
            </div>
          )}
        </CSSTransition>
      </div>
    </TransitionGroup>
  );
};