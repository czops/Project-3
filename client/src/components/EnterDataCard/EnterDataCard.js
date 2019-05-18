import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../EnterDataCard/EnterDataCard.css";

function EnterDataComponent(props) {
    console.log(props);
    return (
        <Form className="formBackground">
            <Form.Text className="stepText">
                STEP 2.
            </Form.Text>
            <Form.Text className="infoText">
                Please enter the number of panels in the puck to start the data entry process.
            </Form.Text>

            <Form.Group controlId="formPanelNumber" className="numberBox">
                <Form.Label>Total number of Panels</Form.Label>
                <Form.Control maxLength={"2"} onChange={props.setPanelNumber} name="numPanels" type="number" placeholder="0" />
            </Form.Group>

        </Form>
    )
};

export default EnterDataComponent;