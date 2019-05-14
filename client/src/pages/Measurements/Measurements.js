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

    // state = {
    //     // loggedIn: false
    //     process1M1: "",2
    //     process2M2: ""
    // }

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
    //     return (
    //         <div>
    //         <Navbar />
    //         <Container>

    //             <Row>
    //                 <Col>
    //                     <h1>Measurements</h1>
    //                     { JSON.stringify( this.props.masterState )}
    //                     <button onClick={() => {
    //                         this.props.setMasterState( 'measurement', true );
    //                     }}>test</button>
    //                 </Col>

    //             </Row>
    //         </Container>
    //         </div>
    //     )
    // }
};

export default Measurements;


