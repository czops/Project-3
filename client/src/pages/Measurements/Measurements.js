import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import NavbarComponent from "../../components/navbar/Navbar";

class Measurements extends Component {



    render() {
        return (
            <div>
                <NavbarComponent />
                <Container>
                    <Row>
                        <Col>
                            <h1>Measurements</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Measurements;