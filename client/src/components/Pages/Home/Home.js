import React, { useEffect } from "react";
import About from "./About";
import SignUp from "./SignUp";
import Quote from "./Quote";
//-----animations on scrolling-----------------------
// import Aos from "aos";
// import "aos/dist/aos.css";

function Home() {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  return (
    <div className="home">
      <About />
      <SignUp />
      <Quote />
    </div>
  );
}

export default Home;
