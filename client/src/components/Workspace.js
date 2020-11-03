import React from "react";
import LogOutButton from "./LogOutButton";
import { useSelector, useDispatch } from "react-redux";

const Workspace = () => {
  const userName = useSelector((state) => state.userName);
  return (
    <div className="workspace">
      <h2>Hello {userName}.</h2>
      <p className="text">
        here you can implement all your quotes and find them every time you need
        them just by clicking on the tags{" "}
      </p>
      <LogOutButton />
    </div>
  );
};

export default Workspace;
