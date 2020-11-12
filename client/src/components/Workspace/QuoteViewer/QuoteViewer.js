import React from "react";
import { useSelector, useDispatch } from "react-redux";
import QuoteContainer from "./QuoteContainer";

const QuoteViewer = () => {
  const quotes = useSelector((state) => state.filteredQuotes);
  const QuotesToRender = quotes.map((quoteId) => (
    <QuoteContainer id={quoteId} key={quoteId} />
  ));
  return <div>{QuotesToRender}</div>;
};

export default QuoteViewer;
