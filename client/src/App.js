import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppIntro from "./components/AppIntro";
import Login from "./pages/Login/Login";
import Landing from "./pages/LandingPage/Landing";
import Process from "./pages/Process/Process";
import Measurements from "./pages/Measurements/Measurements"
import NotFound from "./pages/NotFound/NotFound";
import Process1 from "./pages/Process1/Process1"
import Process2 from "./pages/Process2/Process2"
import React, { Component } from "react";
import Success from "./pages/Success/Success"

import API from "./utils/API";

class App extends Component {
  // return <AppIntro />;

  state = {
    /*Login*/
    loggedIn: false,
   
    /*Landing*/
    panels: 0,
    process: 0,

    /*Process1*/
    panelSize: 0,
    zone: 0,
    shopOrder: 0,
    modelNumber: "",

    /*Measurements - this should be a separate state within the */

    process1M1: 0,
    process1M2: 0,



  }

  /*Optimized version of the props below - not really using this right now*/

  setMasterState = (key, value) => {

    const newState = {};
    newState[key] = value;

    this.setState(newState);
  }

  /*Edit the master state using the following props*/

  setPanelNumber = (number) => {
    console.log("Number of panels");
    console.log(number);
    this.setMasterState('panels', number);
  }

  setModelNumber = (number) => {
    console.log("Model number");
    console.log(number);
  }

  setShopOrderNumber = (number) => {
    console.log("Shop order number");
    console.log(number);
  }

  successPageLoad = () => {
    console.log(this.Process1.state);
    console.log(this.state);
  }

  process1CheckState = () => {
    console.log(this.Process1.state);

  }

  /*Function props to be passed into Process1*/

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
    debugger;
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

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            {/* <Route exact path="/LandingPage" render={(state) => <LandingPage {...state}/>} /> */}
            <Route exact path="/Landing" render={(state) => <Landing masterState={this.state} setMasterState={this.setMasterState} setPanelNumber={this.setPanelNumber} />} />
            <Route exact path="/Process" component={Process} />
            <Route exact path="/Measurements" render={(state) => <Measurements masterState={this.state} setMasterState={this.setMasterState} />} />
            <Route exact path="/Process1" render={(state) => <Process1 masterState={this.state} setMasterState={this.setMasterState} process1CheckState={this.process1CheckState} handleInputChange={this.handleInputChange} PUTsomeStuff={this.PUTsomeStuff} />} />
            <Route exact path="/Process2" render={(state) => <Process2 masterState={this.state} setMasterState={this.setMasterState} />} />
            <Route exact path="/Success" component={Success} />
            {/* Create route from api to pull all panels, for T&E */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;