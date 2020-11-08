import React from "react";
import { logout } from "../redux/actions";
import { useDispatch } from "react-redux";
const axios = require("axios");

const LogOutButton = () => {
  const dispatch = useDispatch();

  const options = {
    url: "/api/v1/users/logout",
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const logoutUser = async () => {
    await axios(options)
      .then((response) => {
        console.log(response);
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error.response);
        alert(`${error.response.data}`);
      });
  };

  return (
    <React.Fragment>
      <button type="type" value="Logout" onClick={logoutUser}>
        Logout
      </button>
    </React.Fragment>
  );
};

export default LogOutButton;
