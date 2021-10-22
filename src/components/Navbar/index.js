import React from 'react';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const isActive = (location, path) => {
  console.log(location.pathname)
  if (path === '/' && location.pathname === '/') {
    return true;
  } else {
    return path.length > 1 && location.pathname.startsWith(path);
  }
}

function Navbar(props) {
  const location = useLocation();
  const links = [
    { title: 'Home', to: '/', active: isActive(location, '/') },
    { title: 'Info', to: '/info', active: isActive(location, '/info') }
  ];

  return (
    <NavbarBootstrap bg="dark" variant="dark" expand="sm">
      <Container>
        <NavbarBootstrap.Brand href="/">React-Weather</NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map(link => (
              <Link 
                key={link.title}
                className={`nav-link ${link.active ? 'active' : ''}`}
                to={link.to}
              >
                { link.title }
              </Link>
            ))}
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export { Navbar };
