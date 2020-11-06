import React from "react";
import LogOutButton from "./LogOutButton";
import WorkspaceMenuTop from "./WorkspaceMenuTop";
import WorkspaceMenuLeft from "./WorkspaceMenuLeft";
import WorkspaceMainTagsMain from "./WorkspaceMainTagsMain";

const WorkspaceTagsRecent = () => {
  return (
    <div className="workspace">
      <div className="workspace-left">
        <WorkspaceMenuLeft />
      </div>
      <div className="workspace-right">
        <WorkspaceMenuTop />
        <WorkspaceMainTagsMain />
      </div>
    </div>
  );
};

export default WorkspaceTagsRecent;
