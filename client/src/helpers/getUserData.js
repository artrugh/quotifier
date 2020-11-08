const axios = require("axios");

// returns all User Sources

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

// returns all User Quotes

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

// returns one User Quote with ID

export const getOneQuote = async (quoteId) => {
  const quoteOptions = {
    url: `/api/v1/data/getQuote/${quoteId}`,
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

// returns one User Source with ID

export const getOneSource = async (sourceId) => {
  const sourceOptions = {
    url: `/api/v1/data/getSource/${sourceId}`,
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
