import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../EnterDataCard/EnterDataCard.css";

function EnterDataComponent(props) {
    console.log(props);
    return (
        <Form className="formBackground">
            <Form.Text className="stepText">
                STEP 1.
            </Form.Text>
            <Form.Text className="infoText">
                Please enter the number of Panels in the order start the data enter process.
            </Form.Text>

            <Form.Group controlId="formPanelNumber" className="numberBox">
                <Form.Label>Total number of Panels</Form.Label>
                <Form.Control onChange={props.setPanelNumber} name="numPanels" type="number" placeholder="0" />
            </Form.Group>

        </Form>
    )
};

export default EnterDataComponent;