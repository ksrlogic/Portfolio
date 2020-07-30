import React from "react";
import { Nav, Navbar } from "react-bootstrap";
const NavbarComponent = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" variant="light">
        <Navbar.Brand href="#home">KIM S R</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
