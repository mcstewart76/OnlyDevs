import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import OD from '../ODNavbar.png'

const Navigation = () => {
  return (
    <>
      <Navbar className= 'nbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="/"><img src={OD} alt='logo'></img></Navbar.Brand>
          <Nav className="ms-auto">
            <Link className='linx' to="/">Login</Link>
            <Link className='linx' to="/Registration">Register</Link>
            <Link className='linx' to="/Home">Home</Link>
            <Link className='linx' to="/profile">Profile</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default Navigation;