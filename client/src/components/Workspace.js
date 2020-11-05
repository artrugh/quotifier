import React from "react";
import LogOutButton from "./LogOutButton";
import WorkspaceMenuTop from "./WorkspaceMenuTop";
import WorkspaceMenuLeft from "./WorkspaceMenuLeft";
import WorkspaceMain from "./WorkspaceMain";
// import { useSelector, useDispatch } from "react-redux";

const Workspace = () => {
  // const userName = useSelector((state) => state.userName);

  return (
    <div className="workspace">
      <div className="workspace-left">
        <WorkspaceMenuLeft />
      </div>

      <div className="workspace-right">
        {" "}
        <WorkspaceMenuTop />
        <WorkspaceMain />
        {/* <h2>Hello {userName}.</h2> */}
        {/* <LogOutButton /> */}
      </div>
    </div>
  );
};

export default Workspace;
