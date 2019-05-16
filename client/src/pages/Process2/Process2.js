import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import connectImage from "../LandingPage/connectwork.png";
import "../Process2/Process2.css";

var backgroundStyle = {
    backgroundImage: `url(${connectImage})`,
    resizeMode: "stretch",
    width: null,
    height: null
}

class Process2 extends Component {
    render() {
        return (
            <div style={backgroundStyle}>
            <Navbar />
                <Container>
                    <Row>
                        <Col>
                            <p className="placeholderP2">This is Process 2!</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Process2;