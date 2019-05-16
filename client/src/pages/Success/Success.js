import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import connectImage from "../LandingPage/connectwork.png";
import SuccessComponent from "../../components/SuccessCard/SuccessCard";
import NavBar from "../../components/navbar/Navbar";

var backgroundStyle = {
    backgroundImage: `url(${connectImage})`,
    resizeMode: "stretch",
    width: null,
    height: null
}

class Success extends Component {

    render() {
        return (
            <div style={backgroundStyle}>
                <NavBar />
                <Container>
                    <Row>
                        <Col>
                            <SuccessComponent />
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <br />
            </div>
        )
    }
};

export default Success;