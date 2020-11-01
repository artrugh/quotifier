import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login, userSources } from "../actions";
import { useDispatch } from "react-redux";
const axios = require("axios");

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(null);
  const dispatch = useDispatch();

  const options = {
    url: "/api/v1/users/login",
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: { email: email, password: password },
  };

  const submitForm = () => {
    axios(options)
      .then((response) => {
        console.log(response);
        dispatch(login());
        dispatch();
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error.response);
        alert(
          `${error.response.data.errors.email} ${error.response.data.errors.password}`
        );
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  if (redirect) {
    return <Redirect to="/workspace" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        className="input"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        autoComplete="on"
        required
      />
      <input
        type="password"
        name="password"
        className="input"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        autoComplete="on"
        required
      />
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
