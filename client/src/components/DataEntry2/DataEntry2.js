import "../DataEntry2/DataEntry2.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import API from "../../utils/API";

class DataEntryComponent2 extends Component {

    constructor(props) {
        super(props);
    }

    savePanels = (event) => { //function that call api to add Panels [Array] to db
        event.preventDefault()

        // console.log(this.props);
        // console.log(this.props.history);

        let Panels = this.props.panels
        API.multiplePanels(Panels)
            .then((res) => {
                console.log(res)
                // if (res.status === 200) {
                //     this.props.history.push('/Success');
                // }
            })
        // http://docs.sequelizejs.com/manual/instances.html#working-in-bulk--creating--updating-and-destroying-multiple-rows-at-once-
    };

    render() {

        return (
            <div className="formBox">

                <Form>
                    <Form.Text className="stepText">
                        STEP 3.
            </Form.Text>
                    <Form.Text className="sizeTitle">
                        Enter the Measurements
            </Form.Text>
                    {this.props.panels.map(panel =>
                        <Form.Row className="measureBox">
                            <Form.Group as={Col} controlId="formModelNumber">
                                <Form.Text className="processTitle"> PANEL {panel.panelNumber} <span className="panelNumberEnter"></span></Form.Text>
                                <Form.Row>
                                    <Form.Group>
                                        <Form.Label>Measurement 1</Form.Label>
                                        <Form.Control
                                            onChange={(event) => this.props.setMeasurement1(event, panel.panelNumber)}
                                            value={panel.m1} placeholder="Enter #" className="measurement1" />
                                    </Form.Group>
                                    <Form.Group className="secondMeasure">
                                        <Form.Label>Measurement 2</Form.Label>
                                        <Form.Control
                                            onChange={(event) => this.props.setMeasurement2(event, panel.panelNumber)}
                                            value={panel.m2} placeholder="Enter #" className="measurement2" />
                                    </Form.Group>

                                </Form.Row>
                            </Form.Group>
                        </Form.Row>
                    )}

                    <div className="buttonBox">
                        <Button variant="primary" type="submit" className="submitButton" block
                            onClick={(event) => this.savePanels(event)}>
                            SUBMIT
                    </Button>
                    </div>

                </Form>
            </div>
        )
    };
}



export default DataEntryComponent2;