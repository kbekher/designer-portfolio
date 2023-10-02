import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MenuProvider } from './MenuContext';
import { App } from './App';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
  <BrowserRouter forceRefresh={true}>
    <MenuProvider>
      <App />
    </MenuProvider>
  </BrowserRouter>
);