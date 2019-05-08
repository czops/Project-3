import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AppIntro from "./components/AppIntro";
import Login from "./pages/Login/Login"
import NavbarComponent from "./components/navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;