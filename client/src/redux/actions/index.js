export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = () => {
  return {
    type: "SIGN_IN",
  };
};

export const logout = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const getUser = (data) => {
  return {
    type: "USER_NAME",
    payload: data,
  };
};

export const loading = () => {
  return {
    type: "LOADING",
  };
};

export const loadSources = (sources) => {
  return {
    type: "LOAD_SOURCES",
    payload: sources,
  };
};

export const loadQuotes = (quotes) => {
  return {
    type: "LOAD_QUOTES",
    payload: quotes,
  };
};

export const addSource = (source) => {
  return {
    type: "ADD_SOURCE",
    payload: source,
  };
};

export const addQuote = (quote) => {
  return {
    type: "ADD_QUOTE",
    payload: quote,
  };
};
