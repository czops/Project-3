import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import NavbarComponent from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          {/* <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;