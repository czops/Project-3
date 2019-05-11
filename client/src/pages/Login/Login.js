import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import LoginComponent from "../../components/LoginCard/LoginCard";
import connectImage from "../LandingPage/connectwork.png";
import logoImage from "../Login/logo_yellow.png";
import "../Login/Login.css";

var backgroundStyle = {
    backgroundImage: `url(${connectImage})`,
    resizeMode: "stretch",
    width: null,
    height: null
}

class Login extends Component {

    render() {
        return (
            <div style={backgroundStyle}>
                <Container className="mainBox">
                    <Row className="loginBox">
                        <Col>
                            <img src={logoImage} className="logo" />
                            <LoginComponent />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Login;