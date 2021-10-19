import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo-medi.jpg';
import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="text-light" as={HashLink} to="/home">Home</Nav.Link>
            <Nav.Link className="text-light" as={HashLink} to="/services">Services</Nav.Link>
            <Nav.Link className="text-light" as={HashLink} to="/doctor">Doctor</Nav.Link>

            <Navbar.Text>
              <a className="text-decoration-none text-muted me-2" href="#login">{user?.displayName}</a>
            </Navbar.Text>
            {user?.email ?
              <Button onClick={logOut} variant="light">Log Out</Button> :
              <Nav.Link className="text-light" as={Link} to="/login">Login</Nav.Link>}
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Header;