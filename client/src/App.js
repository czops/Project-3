import React, { Component } from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import ProcessSelection from "./components/ProcessSelection";
import Process1DataEntry from "./components/Process1DataEntry";
// import Process2 from "./components/Process2";
import Measurements from "./components/Measurements";
import SuccessScreen from "./components/SuccessScreen";



// import logo from "./logo.svg";
import "./App.css";


/*does this App need to be a class ?? */

function App() {
  return (
    <Router>
      <div>
        
        <Route exact path="/" component={Login} />
        <Route exact path="/ProcessSelection" component={ProcessSelection} />
        <Route exact path="/Process1DataEntry" component={Process1DataEntry} />
        <Route exact path="/Measurements" component={Measurements} />
        <Route exact path="/SuccessScreen" component={SuccessScreen} />
        
      </div>
    </Router>
  );
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">

//           <img src={logo} className="App-logo" alt="logo" />
//           <h2></h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
