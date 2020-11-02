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
