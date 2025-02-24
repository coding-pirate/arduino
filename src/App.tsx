import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Ugeplan from './pages/Ugeplan.tsx';
import Forberedelse from './pages/Forberedelse.tsx';

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#/arduino">Coding Pirates Esbjerg</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Replace Nav.Link with Link for client-side routing */}
              <Nav.Link as={Link} to="/">Introduktion</Nav.Link>
              <Nav.Link as={Link} to="/ugeplan">Ugeplan</Nav.Link>
              <Nav.Link as={Link} to="/forberedelse">Forberedelse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ugeplan" element={<Ugeplan />} />
          <Route path="/forberedelse" element={<Forberedelse />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
