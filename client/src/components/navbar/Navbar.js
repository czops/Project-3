import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../navbar/navbar.css";
//import ciruitLogo from "./navbar/logo.png";

function NavbarComponent() {
    return (
      <Navbar collapseOnSelect expand="lg" className="navbarBig">
        <Navbar.Brand>
                <img
                    src="./images/logo.png"
                    width="230"
                    height="auto"
                    className="d-inline-block align-top"
                    alt="Circuit Ninjas"
                />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="/" className="logoutLink">LOGOUT</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
)};

export default NavbarComponent;