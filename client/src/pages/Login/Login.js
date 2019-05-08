import React, { Component } from "react";
import NavbarComponent from "../../components/navbar/Navbar";
import { Col, Row, Container } from "react-bootstrap";

class Login extends Component {
    state = {
        userName: "",
        passWord: "",
        loggedIn: false,
        currentPage: "Login"
    }


    render() {
        return (
            <h1>Login Page</h1>
        )
    }
};

export default Login;