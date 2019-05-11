import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppIntro from "./components/AppIntro";
import Login from "./pages/Login/Login";
import Landing from "./pages/LandingPage/Landing";
import Process from "./pages/Process/Process";
import Measurements from "./pages/Measurements/Measurements"
import NotFound from "./pages/NotFound/NotFound";
import Process1 from "./pages/Process1/Process1"
import Process2 from "./pages/Process2/Process2"
import React, { Component} from "react";
import Success from "./pages/Success/Success"

class App extends Component {
  // return <AppIntro />;

  state = {
    loggedIn: false,
    panel: 1
  }
  
  setMasterState = ( key, value) => {

    const newState = {};
    newState[key] = value;

    this.setState(newState);
  }

  setPanelNumber = (number) => {
    console.log("got here!!");
    console.log(number);
  }
    
render(){
  return (
    
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/LandingPage" render={(state) => <LandingPage {...state}/>} /> */}
          <Route exact path="/Landing" render={(state) => <Landing masterState={this.state} setMasterState={this.setMasterState} setPanelNumber={this.setPanelNumber} />} />
          <Route exact path="/Process" component={Process} />
          <Route exact path="/Measurements" render={(state) => <Measurements masterState={this.state} setMasterState={this.setMasterState} />} />
          <Route exact path="/Process1" component={Process1} />
          <Route exact path="/Process2" component={Process2} />
          <Route exact path="/Success" component={Success} />
          {/* Create route from api to pull all panels, for T&E */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}}

export default App;