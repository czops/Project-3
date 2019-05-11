import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../EnterDataCard/EnterDataCard.css";

function EnterDataComponent(props) {
    console.log(props);
    return (
        <Form className="formBackground">
            <Form.Text className="titleText">
                ENTER NEW DATA
            </Form.Text>
            <Form.Text className="infoText">
                Please enter the number of Panels in the order start the data enter process.
            </Form.Text>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Total number of Panels</Form.Label>
                <Form.Control type="number" placeholder={props.panel} />
            </Form.Group>

            <Button variant="primary" type="submit" className="buttonStandard" >
                START
            </Button>

            <Button onClick={() => {
                props.setPanelNumber(props.panel);
            }}>test</Button>

        </Form>
    )
};

export default EnterDataComponent;