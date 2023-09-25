import './App.scss';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App = () => (
  <div className="App">
    <Header />

    <main>
      <Intro />
      <Work />
      <Contact />
    </main>

    <Footer />
  </div>
)