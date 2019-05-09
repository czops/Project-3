import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";


class Measurements extends Component {

    // state = {
    //     // loggedIn: false
    //     process1M1: "",
    //     process2M2: ""
    // }

    render() {
        return (
            <Container>

                <Row>
                    <Col>
                        <h1>Measurements</h1>
                        { JSON.stringify( this.props.masterState )}
                        <button onClick={() => {
                            this.props.setMasterState( 'measurement', true );
                        }}>test</button>
                    </Col>

                </Row>
            </Container>
        )
    }
};

export default Measurements;