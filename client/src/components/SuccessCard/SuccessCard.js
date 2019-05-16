import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../SuccessCard/SuccessCard.css";
import UncontrolledLottie from "../../components/UncontrolledLottie";


function SuccessComponent() {
    return (
        <div className="positionBox">
            <UncontrolledLottie />
            <Card className="mainCard">
                <Card.Title className="cardTitle"> Data Entered Successfully!</Card.Title>
                <Card.Body className="cardMessage">The <strong>puck #</strong> associated with this entry is: <span controlId="puckGenerated">#</span></Card.Body>
                <Button>HOME</Button>
            </Card>
        </div>
    )
};

export default SuccessComponent;