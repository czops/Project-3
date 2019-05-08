import React from "react";
import Navbar from "react-bootstrap"

export default function Nav() {
    return (
        <div>
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
        </div>
    )
};