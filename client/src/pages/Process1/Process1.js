import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import connectImage from "../LandingPage/connectwork.png";
import DataEntryComponent from "../../components/DataEntry1/DataEntry1";
import Navbar from "../../components/navbar/Navbar";
import "../Process1/Process1.css";

var backgroundStyle = {
    backgroundImage: `url(${connectImage})`,
    resizeMode: "stretch",
    width: null,
    height: null
}

function Process1(props) {

    // console.log(props);

    return (
        <div style={backgroundStyle}>
            <Navbar />
            <Container>
                <Row>
                    <Col>
                        <DataEntryComponent />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h1>Process 1</h1>
                        <form>
                            <Container>
                                <Row>
                                    <Col>
                                        <input
                                            name="process1M1"
                                            value={props.masterState.process1M1}
                                            onChange={(event) => props.handleInputChange(event)}
                                            placeholder="0.00"
                                        />
                                        <p>Process 1 Measurement 1</p>
                                        <br />

                                        <input
                                            name="process1M2"
                                            value={props.masterState.process1M2}
                                            onChange={(event) => props.handleInputChange(event)}
                                            placeholder="0.00"
                                        />
                                        <p>Process 1 Measurement 2</p>
                                    </Col>
                                </Row>
                                <Button onClick={(event) => props.PUTsomeStuff(event)}>
                                    Do Stuff!
                                    </Button>
                            </Container>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Process1;