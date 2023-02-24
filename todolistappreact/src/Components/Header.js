import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
function Header() {
  return (
    <Navbar  bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>TODO LIST APP</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;