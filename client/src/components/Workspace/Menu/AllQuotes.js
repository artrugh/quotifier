import React from "react";
import { showAllQuotes, quoteViewerOn } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AllQuotes = () => {
  const dispatch = useDispatch();
  const quotesState = useSelector((state) => state.quotes);
  const allQuotes = Object.keys(quotesState);
  const handleShowQuotes = () => {
    console.log(allQuotes);
    dispatch(showAllQuotes(allQuotes));
    dispatch(quoteViewerOn());
  };
  return (
      <li className="workspace-menu-left-items-link">
        <button onClick={handleShowQuotes} type="submit">
          All Quotes
        </button>
      </li>
  );
};

export default AllQuotes;
