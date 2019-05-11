import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../LandingPage/Landing.css";
import connectImage from "./connectwork.png";
import EnterDataComponent from "../../components/EnterDataCard/EnterDataCard";
import LookUpComponent from "../../components/LookUpCard/LookUpCard";

var backgroundStyle = {
    backgroundImage: `url(${connectImage})`,
    resizeMode: "stretch",
    width: null,
    height: null
}

class Landing extends Component {

    render() {
        return (
            <div style={backgroundStyle}>
                <Container>
                    <Row>
                        <Col>
                            <EnterDataComponent />
                            <LookUpComponent />
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

export default Landing;