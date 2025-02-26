import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Home() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={9}>
              <h4>Velkommen til Arduino!</h4>
              <p>Dette er siden for introduktionen for Arduino hos Coding Pirates Esbjerg, hvor der er informationer til lektioner, øvelser og hjælp angående Arduino.</p>

              <p>
                &#8592; Tjek ugeplanen ud til venstre
              </p>

              <br />
              <h4>Vi skal lave følgende:</h4>
              <ul className="list-unstyled">
                <ul>
                  <li>Blinke med LED lys</li>
                  <li>Bruge knapper</li>
                  <li>LED lys med knapper</li>
                  <li>Lege med sensorer</li>
                  <li>Skrive beskeder fra og til Arduino</li>
                </ul>
            </ul>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default Home;
