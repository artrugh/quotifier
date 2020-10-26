import React from "react";
//----------------redux-----------------------------------
import { useSelector } from "react-redux";
//----------------components-----------------------------------
import Home from "./components/Home";
import ReduxButtonTestLogin from "./components/ReduxButtonTestLogin";
import Aux from "./hoc/Aux";

function App() {
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <Aux>
      <div className="App">
        <ReduxButtonTestLogin />
        {isLogged ? <Home /> : <h3>NO CONTENT</h3>}
      </div>
    </Aux>
  );
}

export default App;
