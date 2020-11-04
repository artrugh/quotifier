const axios = require("axios");

export const getSources = async () => {
  const sourceOptions = {
    url: "/api/v1/data/getSources",
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(sourceOptions);
  const data = await response.data;
  return data;
};

export const getQuotes = async () => {
  const quoteOptions = {
    url: "/api/v1/data/getQuotes",
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(quoteOptions);
  const data = await response.data;
  return data;
};
