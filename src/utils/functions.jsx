import { animateScroll as scroll } from 'react-scroll';

export const scrollTop = () => {
  scroll.scrollToTop({
    duration: 250,
    delay: 0,
    smooth: true,
  });
}