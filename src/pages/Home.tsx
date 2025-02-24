import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={9}>
              <h4>Velkommen til Arduino!</h4>
              <p>Dette er siden for elektronik hos Coding Pirates Esbjerg, hvor der er informationer til lektioner, øvelser og hjælp angående Arduino.</p>

              <br />
              <h4>Ting du skal have med</h4>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">Bærbar med USB 3.0 eller 2.0</li>
                <li className="list-group-item">Arduino installeret på computeren (Instruksioner <Link to="/forberedelse">her</Link>)</li>
              </ol>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Home;
