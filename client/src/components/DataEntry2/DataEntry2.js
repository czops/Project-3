import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../DataEntry2/DataEntry2.css";

function DataEntryComponent2(props) {
    return (
        <div className="formBox">

            <Form>
                <Form.Text className="stepText">
                    STEP 3.
            </Form.Text>
                <Form.Text className="sizeTitle">
                    Enter the Measurements
            </Form.Text>
                {props.panels.map(panel =>
                    <Form.Row className="measureBox">
                        <Form.Group as={Col} controlId="formModelNumber">
                            <Form.Text className="processTitle"> PANEL {panel.panelNumber} <span className="panelNumberEnter"></span></Form.Text>
                            <Form.Row>
                                <Form.Group>
                                    <Form.Label>Measurement 1</Form.Label>
                                    <Form.Control
                                        onChange={(event) => props.setMeasurement1(event, panel.panelNumber)}
                                        value={panel.m1} placeholder="Enter #" className="measurement1" />
                                </Form.Group>
                                <Form.Group className="secondMeasure">
                                    <Form.Label>Measurement 2</Form.Label>
                                    <Form.Control
                                        onChange={(event) => props.setMeasurement2(event, panel.panelNumber)}
                                        value={panel.m2} placeholder="Enter #" className="measurement2" />
                                </Form.Group>

                            </Form.Row>
                        </Form.Group>
                    </Form.Row>
                )}

                <div className="buttonBox">
                    <Button variant="primary" type="submit" className="submitButton" block> 
                        SUBMIT
                    </Button>
                </div>

            </Form>
        </div>
    )
            }

export default DataEntryComponent2;