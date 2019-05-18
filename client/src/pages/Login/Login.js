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
            username: "",
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
            username: this.state.username,
            password: this.state.password
        }
        authenticationAPI.login(userInfo)
            .then((loggedUser) => {
                localStorage.setItem("username", loggedUser.data.userName);
                localStorage.setItem("token", loggedUser.data.token);
                this.props.history.push('/landing')
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
                                username={this.state.username}
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