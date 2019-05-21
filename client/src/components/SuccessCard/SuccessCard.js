import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../SuccessCard/SuccessCard.css";
import SuccessAnimation from "../SuccessAnimation";

class SuccessComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    routeToLanding = (event) => {
        this.props.history.push('/Landing');
        this.props
    }


    render() {

        return (
            <div className="positionBox">
                <Card className="mainCard">
                    <Card.Title className="cardTitle"> Data Entered Successfully!</Card.Title>
                    <SuccessAnimation />
                    <Card.Body className="cardMessage">The <strong>puck #</strong> associated with this entry is: <span controlId="puckGenerated">#</span></Card.Body>
                    <Button onClick={(event) => this.routeToLanding(event)} variant="primary" type="submit" className="homeButton float-right">ENTER MORE DATA</Button>
                </Card>
            </div>
        )
    };
};

export default SuccessComponent;