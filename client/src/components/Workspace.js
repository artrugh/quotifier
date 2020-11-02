import React from "react";
import LogOutButton from "./LogOutButton";
import { useSelector, useDispatch } from "react-redux";

const Workspace = () => {
  const sources = useSelector((state) => state.sources);
  console.log(sources);
  const userData = useSelector((state) => state.userData);
  return (
    <div className="workspace">
      You are logged in. <LogOutButton />
    </div>
  );
};

export default Workspace;
