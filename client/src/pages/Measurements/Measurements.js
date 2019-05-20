import React, { Component } from "react";
import { Col, Row, Container, Form } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import connectImage from "../LandingPage/connectwork.png";
import DataEntryComponent2 from "../../components/DataEntry2/DataEntry2";

var backgroundStyle = {
    backgroundImage: `url(${connectImage})`,
    resizeMode: "stretch",
    width: null,
    height: null
}

class Measurements extends Component {

    render() {
        return (
            <div style={backgroundStyle}>
                <Navbar />
                <Container>
                    <Row>
                        <Col>
                            <DataEntryComponent2 />
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
};

export default Measurements;


