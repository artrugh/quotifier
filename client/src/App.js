import React from "react";
//--------------components----------------------------
import AboutElements from "./components/AboutElements";
import HomeElements from "./components/HomeElements";
import Help from "./components/Help";
import Nav from "./components/Nav";
//----------------Routing--------------------------
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//---------------Aux-------------------------------
import Aux from "./hoc/Aux";

function App() {
  return (
    <Aux>
      <div className="App">
        {/* <h1>Quotes and Notes</h1>
        <h1>Notes and Quotes</h1>
        <h1>Quotifier</h1> */}
        {/* <Nav />
        <Router>
          <Switch>
            <Route path="/" exact component={HomeElements} />
            <Route path="/About" component={AboutElements} />
            <Route path="/Help" component={Help} />
          </Switch>
        </Router> */}
      </div>
    </Aux>
  );
}

export default App;
