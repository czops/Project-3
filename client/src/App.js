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
    loggedIn: false,

    panels: [
      // panelNumber: 1,
      // shopOrderNumber: this.state.shopOrderNumber,
      // m1: this.state.process1M1,
      // m2: this.state.process1M2

    ],
    panelsY: 0,
    process1M1: 0,
    process1M2: 0,
    process2M1: 0,
    process2M2: 0,
    shopOrderNumber: 0,
    modelNumber: "",
    size: "",
    zone: 0
  }

  /*Optimized version of the setState props below --- stretch is making this work instead*/

  setMasterState = (key, value) => {

    const newState = {};
    newState[key] = value;

    this.setState(newState);
  }

  /*Edit the master state using the following props*/

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  setPanelNumber = (number) => {
    console.log("Number of panels");
    console.log(number);
    let panelCount = parseInt(number.target.value);
    //this.setState({ panelsY: number.target.value });

    var newPanels = [];
    for(let i = 0; i < panelCount; i++) {
      newPanels.push({
        panelNumber: i+1,
        shopOrderNumber: this.state.shopOrderNumber,
        m1: 0,
        m2: 0

      })
    }
    this.setState({
      panelsY: panelCount,
      panels: newPanels
    });
    // this.setMasterState('panels', number);
  }
  
  setMeasurement1 = (event, number) => {
    debugger;
    var value = event.target.value;
    var name = event.target.name;
    console.log("Measurement 1");
    console.log(number);
    var currentPanels = this.state.panels;
    for(var i = 0; i < currentPanels.length; i++) {
      if(currentPanels[i].panelNumber === number) {
        currentPanels[i].m1 = value;
        break;
      }
    }
    debugger;
    this.setState({ 
      panels : currentPanels
    });
  }

  setMeasurement2 = (event, number) => {
    debugger;
    console.log("Measurement 2");
    console.log(number);
    // this.setState({ 
    //   // panels[number].process1M2: number.target.value 
    // });
  }

  setModelNumber = (number) => {
    console.log("Model number");
    console.log(number);
    this.setState({ modelNumber: number.target.value });
  }

  setShopOrderNumber = (number) => {
    console.log("Shop order number");
    console.log(number);
    this.setState({ shopOrderNumber: number.target.value });
  }

  setSize = (number) => {
    console.log("Panel Size");
    console.log(number);
    //This is not an input box - rather a selection
    this.setState({ size: number.target.value });
  }

  setZone = (number) => {
    console.log("Panel Size");
    console.log(number);
    //This is not an input box - rather a selection
    this.setState({ zone: number.target.value });
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
            <Route exact path="/Landing" render={(state) => <Landing 
            masterState={this.state} 
            setMasterState={this.setMasterState} 
            setPanelNumber={this.setPanelNumber} 
            setModelNumber={this.setModelNumber} 
            setShopOrderNumber={this.setShopOrderNumber} 
            setZone={this.setZone} 
            setSize={this.setSize}
            setMeasurement1={this.setMeasurement1} 
            setMeasurement2={this.setMeasurement2}
            />} />

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