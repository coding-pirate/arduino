import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
    <HashRouter basename='/arduino'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
