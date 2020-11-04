import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login, loadSources, getUser, loadQuotes } from "../redux/actions";
import { useDispatch } from "react-redux";
import { getSources, getQuotes } from "../helpers/getUserData";

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
        let user = response.data.user;
        dispatch(getUser(user));
        dispatch(login());
        const sources = getSources();
        const quotes = getQuotes();
        dispatch(loadQuotes(quotes));
        dispatch(loadSources(sources));
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
    <form className="login-form" onSubmit={handleSubmit}>
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
      <button className="input sign-in-button" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
