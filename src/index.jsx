import { createRoot } from 'react-dom/client';
import { App } from './App';
import { MenuProvider } from './MenuContext';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
  <MenuProvider>
    <App />
  </MenuProvider>
)