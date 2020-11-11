import React from "react";
import { useSelector, useDispatch } from "react-redux";

const QuoteContainer = (props) => {
  const MyId = props.id;
  const quote = useSelector((state) => state.quotes[`${MyId}`]);
  console.log(quote);
  return (
    <div className="quote-container">
      <ul>
        <li>"{quote.body}"</li>
        <li>{quote.location}</li>
        <li>{quote.source}</li>
      </ul>
    </div>
  );
};

export default QuoteContainer;
