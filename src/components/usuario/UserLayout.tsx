// import './App.css';
import React from "react";
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const UserLayout = () => {
  const homeClasses = 'color-white bg-white';
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ color: 'white' }}>
            <img
              src="https://www.metroecuador.com.ec/resizer/eHx0jN2NtSzxBVP-rSqp7P-J5iE=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/V43PE3P46RHT3BO4VOAW7H7NME.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: 'white' }}>Inicio</Nav.Link>
              <Nav.Link href="/ShowCard" style={{ color: 'white' }}>Tradear cartas</Nav.Link>
              <Nav.Link href="/Soporte" style={{ color: 'white' }}>Soporte</Nav.Link>
              <Nav.Link href="/Contacto" style={{ color: 'white' }}>Contacto</Nav.Link>
            </Nav>
            <NavDropdown className={homeClasses} title="Usuario" id="basic-nav-dropdown">
                <Nav.Link href="/UserConfig">Perfil</Nav.Link>
                <Nav.Link href="/MyCards">Mis cartas</Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link href="/Logout">Cerrar sesion</Nav.Link>
              </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
};

export default UserLayout;