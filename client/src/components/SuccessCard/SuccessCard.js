import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../SuccessCard/SuccessCard.css";
import SuccessAnimation from "../SuccessAnimation";


function SuccessComponent() {
    return (
        <div className="positionBox">
            <Card className="mainCard">
                <Card.Title className="cardTitle"> Data Entered Successfully!</Card.Title>
                <SuccessAnimation />
                <Card.Body className="cardMessage">The <strong>puck #</strong> associated with this entry is: <span controlId="puckGenerated">#</span></Card.Body>
                <Button variant="primary" type="submit" className="homeButton float-right">HOME</Button>
            </Card>
        </div>
    )
};

export default SuccessComponent;