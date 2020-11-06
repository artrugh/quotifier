import React from "react";
import WorkspaceMenuTopIcons from "./WorkspaceMenuTopIcons";
import WorkspaceMenuTopButtons from "./WorkspaceMenuTopButtons";
import LogOutButton from "./LogOutButton";

const WorkspaceMenuTop = () => {
  return (
    <div className="workspace-menu-top">
      <LogOutButton />
      <WorkspaceMenuTopButtons />
      <WorkspaceMenuTopIcons />
    </div>
  );
};

export default WorkspaceMenuTop;
