import React from "react";
import { useSelector, useDispatch } from "react-redux";
import QuoteViewer from "./QuoteViewer/QuoteViewer.js";
import Greeting from "./Greeting";

const WorkspaceMain = () => {
  const quoteViewer = useSelector((state) => state.quoteViewer);
  return (
    <div className="workspace-main">
      <MainContent />
    {quoteViewer?QuoteViewer:Greeting}
    </div>
  );
};

export default WorkspaceMain;
