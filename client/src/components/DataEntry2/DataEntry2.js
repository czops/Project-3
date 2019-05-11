import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import "../DataEntry2/DataEntry2.css";

function DataEntryComponent2 () {
    return (
        <div className="formBox">
            <Form>
            <Form.Text className="stepText">
                STEP 2. PANEL <span className="currentPanel"> # </span> OUT OF <span className="totalPanels">#</span>
            </Form.Text>
            <Form.Text className="sizeTitle">Enter the Measurements</Form.Text>
            <Form.Row className="selectRow1">
                <ListGroup variant="flush">
                    <ListGroup.Item> Model #: <span className="modelEntered"> Model</span></ListGroup.Item>
                    <ListGroup.Item>Shop Order #: <span className="shopEntered"> Shop</span></ListGroup.Item>
                    <ListGroup.Item>Panel Size: <span className="shopEntered"> Size</span></ListGroup.Item>
                    <ListGroup.Item>Zone: <span className="shopEntered"> Zone</span></ListGroup.Item>
                </ListGroup>
                </Form.Row>
                <Form.Row className="selectRow2">
                    <Form.Group as={Col} controlId="formModelNumber">
                        <Form.Text className="processTitle"> PROCESS 1</Form.Text>
                        <Form.Label>Measurement 1</Form.Label>
                        <Form.Control placeholder="Enter #" className="measurement1"/>
                        <Form.Label className="measureBox">Measurement 2</Form.Label>
                        <Form.Control placeholder="Enter #" className="measurement2"/>
                    </Form.Group>
                </Form.Row>
            <Button variant="primary" type="submit" className="submitButton">
                SUBMIT
            </Button>
        </Form>
    </div>
    )
};

export default DataEntryComponent2;