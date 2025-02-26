import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import Sidebar from './components/Sidebar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename="/arduino">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Sidebar/>
          </div>
          <div className="col-9" style={{marginTop: 15}}>
            <App /> {/* App handles the routes and layout */}
          </div>
        </div>
      </div>
    </HashRouter>
  </StrictMode>
);
