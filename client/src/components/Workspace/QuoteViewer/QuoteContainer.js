import React from "react";
import { useSelector, useDispatch } from "react-redux";

const QuoteContainer = (props) => {
  const MyId = props.id;
  const quote = useSelector((state) => state.quotes[`${MyId}`]);
  const source = useSelector((state) => state.sources[quote.source]);
  console.log(quote);
  return (
    <div className="quote-container">
      <ul>
        <li>{quote.body}</li>
        <li>{quote.location}</li>
        <li>{source.sourceTitle}</li>
        <li>{source.sourceInfo}</li>
      </ul>
    </div>
  );
};

export default QuoteContainer;
