import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename="/arduino">
      <App /> {/* App handles the routes and layout */}
    </HashRouter>
  </StrictMode>
);
