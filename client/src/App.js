import React from "react";
//--------------components----------------------------
import About from "./components/About";
import Home from "./components/Home";
import Help from "./components/Help";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import Workspace from "./components/Workspace";
import RegisterForm from "./components/RegisterForm";
import RegConfirmation from "./components/RegConfirmation";
//----------------Routing--------------------------
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//----------------redux-----------------------------------
import { useSelector } from "react-redux";

function App() {
  //------redux---------------------------------------
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workspace" component={Workspace} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/confirmation" component={RegConfirmation} />
          <Route path="/login" component={LogIn} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
