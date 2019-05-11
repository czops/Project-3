import React, { Component } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import API from "../../utils/API";

class Process1 extends Component {
    state = {
        process1M1: "",
        process1M2: "",
        shopOrder: 8685231
    }

    componentDidMount() {
        API.getAllPanels() //get all panels on page load and log to client console
            .then((res) => {
                console.log(res.data)
            });
        let shopOrder = this.state.shopOrder;
        API.getOnePanel(shopOrder)
            .then((panel) => {
                console.log("panel----------------------------")
                console.log(panel)
            })
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    PUTsomeStuff = () => {
        let Process1 = {
            process1M1: this.state.process1M1,
            process1M2: this.state.process1M2,
            shopOrder: this.state.shopOrder
        }
        console.log(Process1);

        API.processTwo(Process1)
            .then((res) => {
                console.log(res)
            })
    }



    render() {
        return (
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
                            </Container>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default Process1;