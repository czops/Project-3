import authenticationAPI from "../../utils/authenticationAPI"
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
            userName: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        let userInfo = {
            userName: this.state.userName,
            password: this.state.password
        }
        console.log(userInfo)
        authenticationAPI.login(userInfo)
            .then(() => {
                console.log("works")
            })
    };



    render() {
        return (
            <div style={backgroundStyle}>
                <Container>
                    <Row>
                        <Col>
                            <LoginComponent
                                onChange={this.handleChange}
                                userName={this.state.userName}
                                password={this.state.password}
                                handleSubmit={this.handleSubmit} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Login;