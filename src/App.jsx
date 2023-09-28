import './App.scss';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Intro } from './components/Intro';
import { Work } from './components/Work';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { useState } from 'react';

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="App"
      style={{
        'overflow': isMenuOpen ? 'hidden' : ''
      }}
    >
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {isMenuOpen && (
        <Menu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
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