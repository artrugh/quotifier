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

export const addUser = (data) => {
  return {
    type: "ADD_USER",
    payload: data,
  };
};

export const getUser = (data) => {
  return {
    type: "USER_DATA",
    payload: data,
  };
};

export const loading = () => {
  return {
    type: "LOADING",
  };
};

export const userSources = (sources) => {
  return {
    type: "USER_SOURCES",
    payload: sources,
  };
};

export const userQuotes = (quotes) => {
  return {
    type: "USER_QUOTES",
    payload: quotes,
  };
};
