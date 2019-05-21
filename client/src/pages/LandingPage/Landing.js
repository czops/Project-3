import { Col, Row, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom"
import "../LandingPage/Landing.css";
import connectImage from "./connectwork.png";
import DataEntryComponent from "../../components/DataEntry1/DataEntry1";
import DataEntryComponent2 from "../../components/DataEntry2/DataEntry2";
import EnterDataComponent from "../../components/EnterDataCard/EnterDataCard";
import NavBar from "../../components/navbar/Navbar";
import React from "react";
import {ToastsContainer, ToastsStore} from 'react-toasts';

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

    var token = localStorage.getItem("token");
    if (token === undefined || token === null) {
        return (
            <Redirect to="/" />
        );
    }

    return (
        <div style={backgroundStyle}>
            <NavBar />
            <Container>
                <Row>
                    <Col>
                        <DataEntryComponent
                            setModelNumber={props.setModelNumber}
                            setShopOrderNumber={props.setShopOrderNumber}
                            setZone={props.setZone} setSize={props.setSize} />
                        <EnterDataComponent
                            panel={props.masterState.panel}
                            setPanelNumber={props.setPanelNumber} />
                        <DataEntryComponent2
                            panels={props.masterState.panels}
                            setMeasurement1={props.setMeasurement1}
                            setMeasurement2={props.setMeasurement2}
                            history={props.history}
                            PUTsomeStuff={props.PUTsomeStuff} />
                    </Col>
                </Row>
            </Container>
            <div>
                <button onClick={() => ToastsStore.error("ERROR: Data not saved! Sorry, chum.")}>Click me</button>
                <ToastsContainer store={ToastsStore} />
            </div>
        </div>
    )
};

export default Landing;