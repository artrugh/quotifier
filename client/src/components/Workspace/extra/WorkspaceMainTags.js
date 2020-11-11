import React from "react";
import WorkspaceMenuLeft from "./WorkspaceMenuLeft";
import WorkspaceMainTagsMain from "./WorkspaceMainTagsMain";

const WorkspaceTagsRecent = () => {
  return (
    <div className="workspace">
      <div className="workspace-left">
        <WorkspaceMenuLeft />
      </div>
      <div className="workspace-right">
        <WorkspaceMainTagsMain />
      </div>
    </div>
  );
};

export default WorkspaceTagsRecent;
