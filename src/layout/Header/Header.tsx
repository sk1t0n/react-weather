import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  const links = [
    { title: 'Home', to: '/', exact: true },
    { title: 'Info', to: '/info', exact: false }
  ];

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand href="/">React-Weather</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {links.map(link => (
                <NavLink
                  key={link.title}
                  className={'nav-link'}
                  to={link.to}
                  exact={link.exact}
                >
                  { link.title }
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
