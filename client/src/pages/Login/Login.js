import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import LoginComponent from "../../components/LoginCard/LoginCard";
import connectImage from "../LandingPage/connectwork.png";
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
                <Container>
                    <Row>
                        <Col>
                            <LoginComponent />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Login;