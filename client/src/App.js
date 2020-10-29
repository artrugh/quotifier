import React from "react";
//--------------components----------------------------
import About from "./components/About";
import Home from "./components/Home";
import Help from "./components/Help";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import ReduxButtonTestLogin from "./components/ReduxButtonTestLogin";
import PersonalProfile from "./components/PersonalProfile";
//----------------Routing--------------------------
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//----------------redux-----------------------------------
import { useSelector } from "react-redux";
//---------------Aux-------------------------------
// import Aux from "./hoc/Aux";

function App() {
  //------redux---------------------------------------
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/About" component={About} />
          <Route path="/Help" component={Help} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
