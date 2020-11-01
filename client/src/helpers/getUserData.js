const axios = require("axios");

export const getSources = () => {
  const sourceOptions = {
    url: "/api/v1/data/getSources",
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let data = [];
  axios(sourceOptions)
    .then((response) => {
      data.push(response.data);
    })
    .catch((error) => {
      console.log(error.response);
    });
  return data;
};
