import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.tsx';
import Forberedelse from './pages/forberedelse/Forberedelse.tsx';
import Install from './pages/Installer_Arduino/install.tsx';
import Eksempel1 from './pages/eksempel-1/eksempel-1.tsx';
import Eksempel2 from './pages/eksempel-2/eksempel-2.tsx';
import Eksempel3 from './pages/eksempel-3/eksempel-3.tsx';

function App() {
  return (
    <>

      <main>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forberedelse" element={<Forberedelse />} />
          <Route path="/install" element={<Install/>} />
          <Route path="/eksempel1" element={<Eksempel1/>} />
          <Route path="/eksempel2" element={<Eksempel2/>} />
          <Route path="/eksempel3" element={<Eksempel3/>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
