import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import connectImage from "../LandingPage/connectwork.png";
import API from "../../utils/API";
import DataEntryComponent from "../../components/DataEntry1/DataEntry1";
import Navbar from "../../components/navbar/Navbar";
import "../Process1/Process1.css";

var backgroundStyle = {
    backgroundImage: `url(${connectImage})`,
    resizeMode: "stretch",
    width: null,
    height: null
}

function Process1(props) {

    console.log(props);
    // state = {
    //     process1M1: "",
    //     process1M2: "",
    //     shopOrder: 8685231
    // }

    // componentDidMount() {
    //     API.getAllPanels() //get all panels on page load and log to client console
    //         .then((res) => {
    //             console.log(res.data)
    //         });
    //     let shopOrder = this.state.shopOrder;
    //     API.getOnePanel(shopOrder)
    //         .then((panel) => {
    //             console.log("panel----------------------------")
    //             console.log(panel)
    //         })
    // };

    // handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // PUTsomeStuff = () => {
    //     let Process1 = {
    //         process1M1: this.state.process1M1,
    //         process1M2: this.state.process1M2,
    //         shopOrder: this.state.shopOrder
    //     }
    //     console.log(Process1);

    //     API.processTwo(Process1)
    //         .then((res) => {
    //             console.log(res)
    //         })
    // }

    //render() {
        return (
            <div style={backgroundStyle}>
                <Navbar />
                <Container>
                    <Row>
                        <Col>
                            <DataEntryComponent />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <h1>Process 1</h1>
                            <form>
                                <Container>
                                    <Row>
                                        <Col>

                                            <input
                                                name="process1M1"
                                                value={props.masterState.process1M1}
                                                onChange={(event) => props.handleInputChange(event)}
                                                placeholder="0.00"
                                            />
                                            <p>Process 1 Measurement 1</p>
                                            <br />

                                            <input
                                                name="process1M2"
                                                value={props.masterState.process1M2}
                                                onChange={(event) => props.handleInputChange(event)}
                                                placeholder="0.00"
                                            />
                                            <p>Process 1 Measurement 2</p>
                                        </Col>
                                    </Row>
                                    <Button onClick={props.PUTsomeStuff}>
                                        Do Stuff!
                                    </Button>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
};

export default Process1;

{/* <Container>
    <Row>
        <Col>

            <input
                name="process1M1"
                value={this.state.process1M1}
                onChange={this.handleInputChange}
                placeholder="0.00"
            />
            <p>Process 1 Measurement 1</p>
            <br />

            <input
                name="process1M2"
                value={this.state.process1M2}
                onChange={this.handleInputChange}
                placeholder="0.00"
            />
            <p>Process 1 Measurement 2</p>
        </Col>
    </Row>
    <Button onClick={this.PUTsomeStuff}>
        Do Stuff!
    </Button>
</Container> */}