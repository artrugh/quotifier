import React from "react";
//--------------components----------------------------
import About from "./components/About";
import Home from "./components/Home";
import Help from "./components/Help";
import Nav from "./components/Nav";
import ReduxButtonTestLogin from "./components/ReduxButtonTestLogin";
//----------------Routing--------------------------
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//----------------redux-----------------------------------
import { useSelector } from "react-redux";
//---------------Aux-------------------------------
import Aux from "./hoc/Aux";


function App() {
    const isLogged = useSelector((state) => state.isLogged);

  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Help" component={Help} />
        </Switch>
       <ReduxButtonTestLogin />
        {isLogged ? <Home /> : <h3>NO CONTENT</h3>}
      </div>
    </Router>
  );
}

export default App;
