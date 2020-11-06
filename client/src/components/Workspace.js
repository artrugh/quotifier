import React from "react";
import LogOutButton from "./LogOutButton";
import WorkspaceMenuTop from "./WorkspaceMenuTop";
import WorkspaceMenuLeft from "./WorkspaceMenuLeft";
import WorkspaceMain from "./WorkspaceMain";

const Workspace = () => {
  return (
    <div className="workspace">
      <div className="workspace-left">
        <WorkspaceMenuLeft />
      </div>
      <div className="workspace-right">
        <WorkspaceMenuTop />
        <WorkspaceMain />
      </div>
    </div>
  );
};

export default Workspace;
