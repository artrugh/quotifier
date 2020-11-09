import React from "react";
//--------------components----------------------------
import About from "./components/About";
import Home from "./components/Home";
import Help from "./components/Help";
import Nav from "./components/Nav/Nav";
import LogIn from "./components/LogIn";
import Workspace from "./components/Workspace/Workspace";
import Register from "./components/Register";
import Footer from "./components/Footer";
import WorkspaceMainAllQuotes from "./components/Workspace/WorkspaceMainAllQuotes";
import WorkspaceMainTags from "./components/Workspace/WorkspaceMainTags";
import WorkspaceMainRecent from "./components/Workspace/WorkspaceMainRecent";
import NavLogin from "./components/Nav/NavLogin";
//----------------Routing--------------------------
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//----------------redux-----------------------------------
import { useSelector } from "react-redux";

function App() {
  //------redux---------------------------------------
  const isLogged = useSelector((state) => state.isLogged);
  if (isLogged) {
    return (
      <Router>
        <div className="app">
          <NavLogin />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/workspace" component={Workspace} />
            <Route path="/register" component={Register} />
            {/* <Route path="/confirmation" component={RegConfirmation} /> */}
            <Route path="/login" component={LogIn} />
            <Route path="/about" component={About} />
            <Route path="/help" component={Help} />
            <Route path="/allquotes" component={WorkspaceMainAllQuotes} />
            <Route path="/recent" component={WorkspaceMainRecent} />
            <Route path="/tags" component={WorkspaceMainTags} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/workspace" component={Workspace} />
            <Route path="/register" component={Register} />
            {/* <Route path="/confirmation" component={RegConfirmation} /> */}
            <Route path="/login" component={LogIn} />
            <Route path="/about" component={About} />
            <Route path="/help" component={Help} />
            <Route path="/allquotes" component={WorkspaceMainAllQuotes} />
            <Route path="/recent" component={WorkspaceMainRecent} />
            <Route path="/tags" component={WorkspaceMainTags} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
