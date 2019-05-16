import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../DataEntry2/DataEntry2.css";

function DataEntryComponent2 () {
    return (
        <div className="formBox">
            <Form>
            <Form.Text className="stepText">
                STEP 3.
            </Form.Text>
            <Form.Text className="sizeTitle">
                Enter the Measurements
            </Form.Text>
            <Form.Row className="measureBox">
                <Form.Group as={Col} controlId="formModelNumber">
                    <Form.Text className="processTitle"> PANEL # <span className="panelNumberEnter"></span></Form.Text>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Measurement 1</Form.Label>
                            <Form.Control placeholder="Enter #" className="measurement1"/>
                        </Form.Group>
                        <Form.Group className="secondMeasure">
                            <Form.Label>Measurement 2</Form.Label>
                            <Form.Control placeholder="Enter #" className="measurement2"/>
                        </Form.Group>
                    </Form.Row>
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