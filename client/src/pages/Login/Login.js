import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import LoginComponent from "./LoginCard";
import "../Login/Login.css";

class Login extends Component {
    state = {
        userName: "",
        passWord: "",
        loggedIn: false,
        currentPage: "Login"
    }


    render() {
        return (
            <Container className="mainBox">
                <Row className="loginBox">
                    <Col>
                        <LoginComponent />
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Login;