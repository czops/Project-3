import React from "react";
import Navbar from "react-bootstrap/Navbar"
// import logo from "../../../public/assets/logo.png"

function NavbarComponent() {
    return (
        <Navbar bg="dark">
            <Navbar.Brand>
                <img
                    src="./logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Circuit Ninja logo"
                />
            </Navbar.Brand>
        </Navbar>
    )
};

export default NavbarComponent;