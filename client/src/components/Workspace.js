import React from "react";
import LogOutButton from "./LogOutButton";
import { useSelector, useDispatch } from "react-redux";

const Workspace = () => {
  const sources = useSelector((state) => state.sources);
  console.log(sources);
  const userData = useSelector((state) => state.userData);
  return (
    <div className="workspace">
      You are logged in.
      <p className="text">
        here you can implement all your quotes and find them every time you need
        them just by clicking on the tags{" "}
      </p>
      <LogOutButton />
    </div>
  );
};

export default Workspace;
