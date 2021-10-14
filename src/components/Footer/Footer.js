import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.scss';

function Footer() {
  const author = 'Anton Grabovsky';
  const url = 'https://github.com/sk1t0n/react-weather'

  return (
    <footer className="footer py-3 bg-dark">
      <Container>
        <span>Copyright &copy; { new Date().getFullYear() }</span>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;All rights reserved&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href={url} className="link">{ author }</a>
      </Container>
    </footer>
  );
}

export { Footer };
