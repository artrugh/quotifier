import React from "react";
import LogOutButton from "./LogOutButton";
import WorkspaceMenuTopIcons from "./WorkspaceMenuTopIcons";
import WorkspaceMenuTopButtons from "./WorkspaceMenuTopButtons";

const WorkspaceMenuTop = () => {
  return (
    <div className="workspace-menu-top">
      <WorkspaceMenuTopButtons />
      <WorkspaceMenuTopIcons />
      <LogOutButton />
    </div>
  );
};

export default WorkspaceMenuTop;
