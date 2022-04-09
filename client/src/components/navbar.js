import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import {  Link } from "react-router-dom";


const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/">OnlyDevs</Navbar.Brand>
            <Nav className="ms-auto">
              <Link to= "/">Login</Link>
              <Link to= "/Registration">Register</Link>
              <Link to="/Home">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/message">Message</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;