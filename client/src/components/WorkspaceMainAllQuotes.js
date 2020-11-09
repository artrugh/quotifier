import React from "react";
import WorkspaceMenuLeft from "./WorkspaceMenuLeft";
import WorkspaceMainAllQuotesMain from "./WorkspaceMainAllQuotesMain";

const WorkspaceMainAllQuotes = () => {
  return (
    <div className="workspace">
      <div className="workspace-left">
        <WorkspaceMenuLeft />
      </div>
      <div className="workspace-right">
        <WorkspaceMainAllQuotesMain />
      </div>
    </div>
  );
};

export default WorkspaceMainAllQuotes;
