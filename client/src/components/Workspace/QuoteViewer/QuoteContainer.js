import React from "react";
import { useSelector, useDispatch } from "react-redux";

const QuoteContainer = (props) => {
  const MyId = props.id;
  const quote = useSelector((state) => state.quotes[`${MyId}`]);
  const source = useSelector((state) => state.sources[quote.source]);
  const quoteParts = Object.keys(quote);
  console.log(QuotesToRender);
  return <div className="quote-container">{QuotesToRender}</div>;
};

export default QuoteContainer;
