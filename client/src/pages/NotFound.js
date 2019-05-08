import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

function NotFound() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>404 Page Not Found</h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound;