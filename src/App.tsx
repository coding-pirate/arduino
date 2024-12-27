import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

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
              <Nav.Link as={Link} to="/contact">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
