import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import {  Link } from "react-router-dom";
import OD from '../ODNavbar.png'

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/"><img src={OD} alt='logo'></img></Navbar.Brand>
            <Nav className="me-auto">
              <Link className='linx' to= "/">Login/Register</Link>
              <Link className='linx' to="/Home">Home</Link>
              <Link className='linx' to="/profile">Profile</Link>
              <Link className='linx' to="/message">Message</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;