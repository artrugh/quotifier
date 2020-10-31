export const GET_SOURCES_PENDING = "GET_SOURCES_PENDING";
export const GET_SOURCES_SUCCESS = "GET_SOURCES_SUCCESS";
export const GET_SOURCES_ERROR = "GET_SOURCES_ERROR";

export const GET_QUOTES_PENDING = "GET_QUOTES_PENDING";
export const GET_QUOTES_SUCCESS = "GET_QUOTES_SUCCESS";
export const GET_QUOTES_ERROR = "GET_QUOTES_ERROR";

function getSourcesPending() {
  return {
    type: GET_SOURCES_PENDING,
  };
}

function getSourcesSuccess(sources) {
  return {
    type: GET_SOURCES_SUCCESS,
    sources: sources,
  };
}

function getSourcesError(error) {
  return {
    type: GET_SOURCES_ERROR,
    error: error,
  };
}

function getQuotesPending() {
  return {
    type: GET_QUOTES_PENDING,
  };
}

function getQuotesSuccess(sources) {
  return {
    type: GET_QUOTES_SUCCESS,
    sources: sources,
  };
}

function getQuotesError(error) {
  return {
    type: GET_QUOTES_ERROR,
    error: error,
  };
}
