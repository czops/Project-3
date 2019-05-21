import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../DataEntry1/DataEntry.css";

function DataEntryComponent (props) {
    return (
        <div className="formBox">
            <Form>
            <Form.Text className="stepText">
                STEP 1.
            </Form.Text>
            <Form.Text className="sizeTitle">Enter the size of the Panels</Form.Text>
            <Form.Row className="selectRow1">
                
        
                    <Form.Group>
                        <Image src="./images/image_12x18.svg" rounded className="circuitImage" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPanelSize" className="panelDrop">
                        <Form.Label>Panel Size</Form.Label>
                        <Form.Control as="select" onChange={props.setSize}>
                            <option>12x18</option>
                            <option>12x24</option>
                            <option>12x36</option>
                            <option>18x24</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formZoneNumber" className="zoneDrop">
                        <Form.Label>Zone Number</Form.Label>
                        <Form.Control as="select" onChange={props.setZone}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row className="selectRow2">
                    <Form.Group as={Col} controlId="formModelNumber">
                        <Form.Label>Model Number</Form.Label>
                        <Form.Control onChange={props.setModelNumber} placeholder="Enter #" />
                    </Form.Group>
        
                    <Form.Group as={Col} controlId="formShopNumber">
                        <Form.Label>Shop Number</Form.Label>
                        <Form.Control onChange={props.setShopOrderNumber} type="number" placeholder="Enter #" />
                    </Form.Group>
                </Form.Row>
        </Form>
    </div>
    )
};

export default DataEntryComponent;