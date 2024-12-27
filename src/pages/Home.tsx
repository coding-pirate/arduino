import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={9}>
              <h1>Velkommen til elektronik!</h1>
              <p>Dette er siden for elektronik hos Coding Pirates Esbjerg, hvor der er informationer til lektioner, øvelser og hjælp angående Arduino.</p>

              <br />
              <h4>Ting du skal have med</h4>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">Bærbar med USB 3.0 eller 2.0</li>
                <li className="list-group-item">Arduino installeret på computeren (Instruksioner nedeunder)</li>
                <li className="list-group-item">Godt humør :)</li>
              </ol>

              <br />
              <h4>Resurser</h4>
              <br />

              {/* Example of using Link for internal routing */}
              <Link to="/forberedelse">Arduino installering</Link>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Home;
