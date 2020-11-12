const quoteView = (state = false, action) => {
  switch (action.type) {
    case "QUOTE_VIEWER_ON":
      return true;
    case "QUOTE_VIEWER_OFF":
      return false;
    default:
      return state;
  }
};

export default quoteView;
