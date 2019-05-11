import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Process.css";
import connectImage from "./connectwork.png";


var backgroundStyle = {
    backgroundImage: `url(${connectImage})`,
    resizeMode: "stretch",
    width: null,
    height: null
}

class Process extends Component {
    render() {
        return (
            <div style={backgroundStyle}>
                <Container>
                    <Row>
                        <Col>
                            Enter model number and shop order number
                            Select which process to proceed
                        </Col>
                    </Row>
                </Container>
                <Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                </Container>
            </div>
        )
    }
};

export default Process;