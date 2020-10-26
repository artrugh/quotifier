import React from "react";
import Aux from "./hoc/Aux";
import { useSelector, useDispatch } from "react-redux";
import Home from "./components/Home";
import { increment, decrement, login } from "./actions";
import About from "./components/About";

function App() {
  // useSelector makes possible to access the whole state
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <Aux>
      <div className="App">
        <h1>Quotes and Notes</h1>

        <h1>Notes and Quotes</h1>

        <h1>Quotifier</h1>

        <h1>Counter {counter}</h1>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            dispatch(login());
          }}
        >
          Log In
        </button>

        {/* {isLogged ? <h3>valuable content</h3> : <h3>NO CONTENT</h3>} */}
        {isLogged ? <Home /> : <h3>NO CONTENT</h3>}

        {/* <Counter /> */}

        {/* <LogIns /> */}
      </div>
    </Aux>
  );
}

export default App;
