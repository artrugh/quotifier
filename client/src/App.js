import React from "react";
import Aux from "./hoc/Aux";
import Counter from "./components/CounterElements";
import LogIns from "./containers/LogIns";
import { useSelector } from "react-redux";
import HomeElements from "react";
import SIGN_IN from "./store/actions";

function App() {
  // this makes possible to access the whole state
  const isLogged = useSelector((state) => state.reducer);
  return (
    <Aux>
      <div className="App">
        <h1>Quotes and Notes</h1>

        <h1>Notes and Quotes</h1>

        <h1>Quotifier</h1>

        {/* {isLogged ? <HomeElements /> : ""} */}

        {isLogged ? <h3>valuable content</h3> : <h3>NO CONTENT</h3>}

        <Counter />

        <LogIns />
      </div>
    </Aux>
  );
}

export default App;
