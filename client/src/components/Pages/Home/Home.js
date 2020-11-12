import React, { useEffect } from "react";
import About from "./About";
import SignUp from "./SignUp";
import Quote from "./Quote";

function Home() {
  return (
    <div className="home">
      <About />
      <SignUp />
      <Quote />
    </div>
  );
}

export default Home;
