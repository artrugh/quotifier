import React from "react";
import WorkspaceMenuTopIcons from "./WorkspaceMenuTopIcons";
import WorkspaceMenuTopButtons from "./WorkspaceMenuTopButtons";

const WorkspaceMenuTop = () => {
  return (
    <div className="workspace-menu-top">
      <WorkspaceMenuTopButtons />
      <WorkspaceMenuTopIcons />
    </div>
  );
};

export default WorkspaceMenuTop;
