import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../LandingPage/Landing.css";
import connectImage from "./connectwork.png";
import EnterDataComponent from "../../components/EnterDataCard/EnterDataCard";
import LookUpComponent from "../../components/LookUpCard/LookUpCard";
import NavBar from "../../components/navbar/Navbar";

var backgroundStyle = {
    backgroundImage: `url(${connectImage})`,
    resizeMode: "stretch",
    width: null,
    height: null
}

function Landing(props) {
    console.log(props);
    console.log(props.masterState.panel);
    console.log(props.setPanelNumber);
    return (
        <div style={backgroundStyle}>
            <NavBar />
            <Container>
                <Row>
                    <Col>
                        <EnterDataComponent panel={props.masterState.panel} setPanelNumber={props.setPanelNumber}/>
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
};

export default Landing;