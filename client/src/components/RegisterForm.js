import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { userSources, addUser, userQuotes } from "../redux/actions";
import { useDispatch } from "react-redux";
import { getSources, getQuotes } from "../helpers/getUserData";

const axios = require("axios");

const RegisterForm = () => {
  const [userFirst, setFirst] = useState("");
  const [userLast, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(null);
  const dispatch = useDispatch();

  const options = {
    url: "/api/v1/users/register",
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      userFirst: userFirst,
      userLast: userLast,
      email: email,
      password: password,
    },
  };

  const submitForm = () => {
    axios(options)
      .then((response) => {
        let user = response.data.user;
        dispatch(addUser(user));
        const sources = getSources();
        const quotes = getQuotes();
        dispatch(userQuotes(quotes));
        dispatch(userSources(sources));
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
    return <Redirect to="/confirmation" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="firstName"
        name="firstName"
        className="input"
        onChange={(e) => setFirst(e.target.value)}
        placeholder="firstName"
        autoComplete="on"
        required
      />
      <input
        type="lastName"
        name="lastName"
        className="input"
        onChange={(e) => setLast(e.target.value)}
        placeholder="lastName"
        autoComplete="on"
        required
      />
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

export default RegisterForm;
