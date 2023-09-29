import { useContext, useEffect } from 'react';
import { MenuContext } from './MenuContext';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Intro } from './components/Intro';
import { Work } from './components/Work';
import { About } from './components/About';
import { Footer } from './components/Footer';

import './App.scss';

export const App = () => {
  const { isMenuOpen } = useContext(MenuContext);

  useEffect(() => {
    isMenuOpen 
    ? document.body.classList.add('body--with-menu')
    : document.body.classList.remove('body--with-menu');
  }, [isMenuOpen]);

  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  
  return (
    <div className="App">
      <Header />

      {isMenuOpen && (
        <Menu />
      )}

      <main>
        <Intro />
        <Work />
        <About />
      </main>

      <Footer />
    </div>
  );
};