import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../actions";
import { useDispatch } from "react-redux";
const axios = require("axios");

const LogOutButton = () => {
  const [redirect, setRedirect] = useState(null);

  const dispatch = useDispatch();
  const options = {
    url: "/api/v1/users/logout",
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const logout = () => {
    axios(options)
      .then((response) => {
        console.log(response);
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error.response);
        alert(`${error.response.data}`);
      });
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <button type="submit" value="Logout" onclick={logout}>
        Logout
      </button>
    </React.Fragment>
  );
};

export default LogOutButton;
