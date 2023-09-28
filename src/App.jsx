import './App.scss';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Intro } from './components/Intro';
import { Work } from './components/Work';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { useContext } from 'react';
import { MenuContext } from './MenuContext';

export const App = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <div
      className="App"
      style={{
        'overflow': isMenuOpen ? 'hidden' : ''
      }}
    >
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