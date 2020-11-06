import React from "react";
import LogOutButton from "./LogOutButton";
import WorkspaceMenuTop from "./WorkspaceMenuTop";
import WorkspaceMenuLeft from "./WorkspaceMenuLeft";
import WorkspaceMainRecentMain from "./WorkspaceMainRecentMain";

const WorkspaceMainRecent = () => {
  return (
    <div className="workspace">
      <div className="workspace-left">
        <WorkspaceMenuLeft />
      </div>
      <div className="workspace-right">
        <WorkspaceMenuTop />
        <WorkspaceMainRecentMain />
      </div>
    </div>
  );
};

export default WorkspaceMainRecent;
