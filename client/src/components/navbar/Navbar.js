import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../navbar/navbar.css";
//import ciruitLogo from "./navbar/logo.png";

function NavbarComponent() {
    return (
        <Navbar className="navbarBig">
            <Navbar.Brand>
                <img
                    src="./images/logo.png"
                    width="230"
                    height="auto"
                    className="d-inline-block align-top"
                    alt="Circuit Ninjas"
                />
            </Navbar.Brand>
            <Navbar.Text className="logoutLink">
                <a href="/"> | LOGOUT</a>
            </Navbar.Text>
        </Navbar>
    )
};

export default NavbarComponent;