import './App.scss';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useState } from 'react';

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      <main>
        <Intro />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};