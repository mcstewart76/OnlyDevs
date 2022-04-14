import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import OD from '../ODNavbar.png'
import auth from '../utils/auth';

const Navigation = () => {
  const logout = (event) => {
    event.preventDefault();
    auth.logout();
  };

  return (
    <> 
      <Navbar className= 'nbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="/"><img src={OD} alt='logo'></img></Navbar.Brand>
          <Nav className="ms-auto">
            {auth.loggedIn() ? (
              <>
               <Link className='linx' to="/login" onClick={logout}>Logout</Link>
               </>
            ):(
              <>
            <Link className='linx' to="/login">Login</Link>
            <Link className='linx' to="/Registration">Register</Link>
            </>
            )
            }
            <Link className='linx' to="/">Home</Link>
            <Link className='linx' to="/profile">Profile</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default Navigation;