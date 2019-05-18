import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../LoginCard/LoginCard.css";

function LoginComponent(props) {

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter Username</Form.Label>
                <Form.Control type="name" placeholder="Username" value={props.username} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={props.password} />
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                className="loginButton"
                onClick={() => props.buttonLogic(props.id)}
            >
                LOGIN
            </Button>
        </Form>
    )
};

export default LoginComponent;