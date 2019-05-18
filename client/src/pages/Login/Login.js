import API from "../../utils/API"
import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import LoginComponent from "../../components/LoginCard/LoginCard";
import connectImage from "../LandingPage/connectwork.png";
import "../Login/Login.css";


var backgroundStyle = {
    backgroundImage: `url(${connectImage})`,
    resizeMode: "stretch",
    width: null,
    height: null
}

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit() {
        //event.preventDefault();
        alert('A name was submitted: ' + this.state.value);
    }



    render() {
        return (
            <div style={backgroundStyle}>
                <Container>
                    <Row>
                        <Col>
                            <LoginComponent />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Login;