import React from "react";
import WorkspaceMenuTop from "./WorkspaceMenuTop";
import WorkspaceMenuLeft from "./WorkspaceMenuLeft";
import WorkspaceMainAllQuotesMain from "./WorkspaceMainAllQuotesMain";

const WorkspaceMainAllQuotes = () => {
  return (
    <div className="workspace">
      <div className="workspace-left">
        <WorkspaceMenuLeft />
      </div>
      <div className="workspace-right">
        <WorkspaceMenuTop />
        <WorkspaceMainAllQuotesMain />
      </div>
    </div>
  );
};

export default WorkspaceMainAllQuotes;
