import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2019/11/21/MEDITATION-YOGA-8.jpg"
            alt="Logo"
            height="100"
            width="100"
            className="custom-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
            <Link className="nav-link" to="/class">
              Class
            </Link>
            <Link className="nav-link" to="/team">
              Team
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>

          {/* Add Button here */}
          <Button variant="outline-success" className="ms-3" href="#contact">
            View Classes
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
