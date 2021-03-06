import React from "react";
import WorkspaceMenuLeft from "./Menu/WorkspaceMenuLeft";
import WorkspaceMain from "./WorkspaceMain";

const Workspace = () => {
  return (
    <div className="workspace">
      <div className="workspace-left">
        <WorkspaceMenuLeft />
      </div>
      <div className="workspace-right">
        <WorkspaceMain />
      </div>
    </div>
  );
};

export default Workspace;
