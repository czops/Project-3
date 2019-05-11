import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../LoginCard/LoginCard.css";

function LoginComponent () {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter Username</Form.Label>
                <Form.Control type="name" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Enter Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="loginButton">
                LOGIN
            </Button>
        </Form>
    )
};

export default LoginComponent;