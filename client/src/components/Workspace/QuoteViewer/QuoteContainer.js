import React from "react";
import { useSelector, useDispatch } from "react-redux";

const QuoteContainer = (props) => {
  const id = props.id;
  const quote = useSelector((state) => state.quotes[`${id}`]);
  const source = useSelector((state) => state.sources[quote.source]);
  const quoteParts = [quote.body, quote.userNotes, quote.location];
  const sourceParts = [source.sourceTitle, source.sourceInfo];
  const renderQuote = quoteParts.map((val, i) => {
    if (val !== undefined) {
      return <li key={i}>{val}</li>;
    }
  });
  const renderSource = sourceParts.map((val, i) => {
    if (val !== undefined) {
      return <li key={i}>{val}</li>;
    }
  });

  return (
    <div className="quote-container text">
      <ul className="quote-things">{renderQuote}</ul>
      <ul className="source-things">{renderSource}</ul>
      <hr />
    </div>
  );
};

export default QuoteContainer;
