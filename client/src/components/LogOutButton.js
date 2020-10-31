import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../actions";
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

  const logoutUser = () => {
    axios(options)
      .then((response) => {
        console.log(response);
        dispatch(logout());
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
      <button type="type" value="Logout" onClick={logoutUser}>
        Logout
      </button>
    </React.Fragment>
  );
};

export default LogOutButton;
