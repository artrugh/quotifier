import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import cleanHtml from "../../../utils/cleanHtml";

const QuoteContainer = (props) => {
  const id = props.id;
  const quote = useSelector((state) => state.quotes[`${id}`]);
  const source = useSelector((state) => state.sources[quote.source]);
  const quoteBodyClean = cleanHtml(quote.body);
  const quoteBody = ReactHtmlParser(quoteBodyClean);
  const quoteNotes = quote.userNotes;
  const quoteLocation = quote.location;
  const sourceTitle = source.sourceTitle;
  const sourceInfo = ReactHtmlParser(source.sourceInfo);
  const quoteTags = quote.tags;
  let renderTags;
  if (quoteTags !== undefined) {
    renderTags = quoteTags.map((val, i) => {
      if (val !== undefined) {
        return (
          <li className="comma" key={i}>
            {val}
          </li>
        );
      }
    });
  } else {
    renderTags = null;
  }

  return (
    <div className="quote-container text">
      <span>{quoteBody}</span>
      <ul className="quoteTags">
        <li>Tags: </li>
        {renderTags}
      </ul>
      <span>Notes: {quoteNotes}</span>
      <span>Location: {quoteLocation}</span>
      <span>Source: {sourceTitle}</span>
      <span>Details: {sourceInfo}</span>
    </div>
  );
};

export default QuoteContainer;
