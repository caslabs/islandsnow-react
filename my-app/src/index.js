import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col, Image, Dropdown, Form, Button } from 'react-bootstrap';
import { HouseFill, Search, PersonFill, Facebook, Twitter, Pinterest, Instagram } from 'react-bootstrap-icons';

const TopMenu = () => (
      <Navbar bg="light" expand="lg">
        <Container>
          {/* Left-hand side icons */}
          <Nav>
            <Nav.Link href="#"><Facebook /></Nav.Link>
            <Nav.Link href="#"><Twitter /></Nav.Link>
            <Nav.Link href="#"><Pinterest /></Nav.Link>
            <Nav.Link href="#"><Instagram /></Nav.Link>
          </Nav>

          {/* Right-hand side icons */}
          <Nav className="ms-auto">
            <Nav.Link href="#"><HouseFill /></Nav.Link>
            <Nav.Link href="#"><Search /></Nav.Link>
            <Nav.Link href="#"><PersonFill /></Nav.Link>
            <NavDropdown title="My Cart" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Your cart is empty.</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
);

const IslandSnowLogo = () => (
  <Row>
    <Col>
      <Image src="https://courses.ics.hawaii.edu/ics314s24/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png" className="img-fluid rounded mx-auto d-block py-1" alt="Island Snow Logo"/>
    </Col>
  </Row>
);

const MiddleMenu = () => (
    <Row className="justify-content-center pt-3">
      <Col xs={1}>
        <Dropdown>
          <Dropdown.Toggle as="div">
            <strong>MEN</strong>
          </Dropdown.Toggle>
        </Dropdown>
      </Col>
      <Col xs={1}>
        <Dropdown>
          <Dropdown.Toggle as="div">
            <strong>WOMEN</strong>
          </Dropdown.Toggle>
        </Dropdown>
      </Col>
      <Col xs={1}>
        <Dropdown>
          <Dropdown.Toggle as="div">
            <strong>KIDS</strong>
          </Dropdown.Toggle>
        </Dropdown>
      </Col>
      <Col xs={1}>
        <Dropdown>
          <Dropdown.Toggle as="div">
            <strong>BRANDS</strong>
          </Dropdown.Toggle>
        </Dropdown>
      </Col>
      <Col xs={1}>
        <div>
          <strong>SEARCH</strong>
        </div>
      </Col>
    </Row>
  );

const FullWidthImage = () => (
  <Row className="justify-content-center">
    <Col>
      <Image src="https://courses.ics.hawaii.edu/ics314s24/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png" className="img-fluid" alt="Model on Bridge"/>
    </Col>
  </Row>
);

const FooterMenu = () => (
    <footer style={{ backgroundColor: "#292929", color: "white" }}>
      <Container>
        <Row>
          {/* First Column */}
          <Col>
            <h5 className="text-uppercase">Navigation</h5>
            <hr />
            <p>About Us</p>
            <p>Employment</p>
            <p>Videos</p>
          </Col>
          {/* Second Column */}
          <Col>
            <h5 className="text-uppercase">Main Menu</h5>
            <hr />
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
          </Col>
          {/* Third Column */}
          <Col>
            <h5 className="text-uppercase">Connect</h5>
            <hr />
            <Form>
              <p>Sign up for the latest updates</p>
              <Form.Group controlId="footerEmailSignUp">
                <Form.Control type="email" placeholder="Enter Email Address" className="my-2" />
              </Form.Group>
              <Button variant="dark" type="button">Join</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );

const IslandSnow = () => (
<Container fluid>
    <TopMenu />
    <IslandSnowLogo />
    <MiddleMenu />
    <FullWidthImage />
    <FooterMenu />
</Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IslandSnow />);
