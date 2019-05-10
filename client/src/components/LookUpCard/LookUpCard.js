import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../LookUpCard/LookUpCard.css";

function LookupComponent () {
    return (
        <Form className="formBackground">
            <Form.Text className="titleText">
                LOOKUP DATA
            </Form.Text>
            <Form.Text className="infoText">
                Please enter the Shop Order Number associated with the data you're trying to find.
            </Form.Text>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Shop Order</Form.Label>
                <Form.Control type="number" placeholder="#" />
            </Form.Group>

            <Button variant="primary" type="submit" className="buttonStandard">
                FIND
            </Button>
        </Form>
    )
};

export default LookupComponent;