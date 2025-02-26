import { Link } from 'react-router-dom';
import './Sidebar.css';
import { Navbar, Container } from 'react-bootstrap';

function Sidebar() {
  
    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#/arduino">Coding Pirates Esbjerg</Navbar.Brand>
            </Container>
        </Navbar>
        <div className="container-fluid">
            <h4>Ugeplan</h4>
            <ul className="list-group">
            <li className="list-group-item">
                Uge 1
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/install">Installer Arduino</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/eksempel1">Eksempel 1 - LED</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/eksempel2">Eksempel 2 - Knap</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/eksempel3">Eksempel 3 - LED + Knap</Link>
                    </li>
                </ul>
            </li>
            <li className="list-group-item">
                Uge 2
                <ul className="list-group">
                    <li className="list-group-item">Eksempel 4 - Temperatur Sensor</li>
                    <li className="list-group-item">Eksempel 5 - Lyssensor</li>
                    <li className="list-group-item">Eksempel 6 - Lyssensor + LED</li>
                </ul>
            </li>
            </ul>
        </div>
      </>
    )
  }
  
  export default Sidebar
  