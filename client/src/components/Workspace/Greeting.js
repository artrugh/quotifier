import React from "react";
import { useSelector } from "react-redux";

const Greeting = () => {
  const userName = useSelector((state) => state.userName);
  return (
    <>
      <h2>Hello {userName}.</h2>
      <p className="text">
        here you can implement all your quotes and find them every time you need
        them just by clicking on the tags{" "}
      </p>
    </>
  );
};

export default Greeting;
