import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "../DataEntry1/DataEntry.css";

function DataEntryComponent () {
    return (
        <div className="formBox">
            <Form>
            <Form.Text className="stepText">
                STEP 2.
            </Form.Text>
            <Form.Text className="sizeTitle">Enter the size of the Panels</Form.Text>
            <Form.Row className="selectRow1">
                <Form>
                    {['radio'].map(type => (
                        <div key={`default-${type}`} className="mb-3">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label="12 x 18"
                            />
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label="12 x 24"
                            />
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label="12 x 36"
                            />
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label="18 x 24"
                            />
                        </div>
                    ))}
                </Form>
        
                    <Form.Group>
                        <Image src="./images/circuit_logo.png" rounded className="circuitImage" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formZoneNumber" className="zoneDrop">
                        <Form.Label>Zone Number</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>Zone 1</option>
                            <option>Zone 2</option>
                            <option>Zone 3</option>
                            <option>Zone 4</option>
                            <option>Zone 5</option>
                            <option>Zone 6</option>
                            <option>Zone 7</option>
                            <option>Zone 8</option>
                            <option>Zone 9</option>
                        </Form.Control>
                    </Form.Group>

                </Form.Row>
                <Form.Row className="selectRow2">
                    <Form.Group as={Col} controlId="formModelNumber">
                        <Form.Label>Model Number</Form.Label>
                        <Form.Control placeholder="Enter #" />
                    </Form.Group>
        
                    <Form.Group as={Col} controlId="formShopNumber">
                        <Form.Label>Shop Number</Form.Label>
                        <Form.Control placeholder="Enter #" />
                    </Form.Group>
                </Form.Row>
        </Form>
    </div>
    )
};

export default DataEntryComponent;