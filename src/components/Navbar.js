import React from 'react';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

function Navbar(props) {
  return (
    <NavbarBootstrap bg="dark" variant="dark" expand="sm">
      <Container>
        <NavbarBootstrap.Brand href="/">React-Weather</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export { Navbar };
