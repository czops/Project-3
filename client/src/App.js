import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AppIntro from "./components/AppIntro";
import Login from "./pages/Login/Login";
import Landing from "./pages/LandingPage/Landing";
import Measurements from "./pages/Measurements/Measurements"
import NavbarComponent from "./components/navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import Process1 from "./pages/Process1/Process1"
import Process2 from "./pages/Process2/Process2"
import React from "react";
import Success from "./pages/Success/Success"

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Landing" component={Landing} />
          <Route exact path="/Measurements" component={Measurements} />
          <Route exact path="/Process1" component={Process1} />
          <Route exact path="/Process2" component={Process2} />
          <Route exact path="/Success" component={Success} />
          {/* Create route from api to pull all panels, for T&E */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;