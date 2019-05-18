import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../../components/404Animation";
import ErrorAnimation from "../../components/404Animation";
import Text from "react-bootstrap/FormText";
import Button from "react-bootstrap/Button";
import '../NotFound/NotFound.css';

function NotFound() {
    return (
        <Container className="mainErrorBox">
            <Row>
                <Col className="containError">
                    <ErrorAnimation />
                    <Text className="sorryText"> We're sorry, the page you're looking for doesn't exist.</Text>
                    <Button className="goButton" block> HOME </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound;