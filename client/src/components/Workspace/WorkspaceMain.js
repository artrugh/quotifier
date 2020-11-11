import React from "react";
import { useSelector, useDispatch } from "react-redux";
import QuoteViewer from "./QuoteViewer/QuoteViewer.js";

const WorkspaceMain = () => {
  const userName = useSelector((state) => state.userName);

  return (
    <div className="workspace-main">
      <QuoteViewer />
      <h2>Hello {userName}.</h2>
      <p className="text">
        here you can implement all your quotes and find them every time you need
        them just by clicking on the tags{" "}
      </p>
    </div>
  );
};

export default WorkspaceMain;
