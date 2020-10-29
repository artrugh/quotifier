import React, { useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" className="input" placeholder="email" />
      <input type="password" className="input" placeholder="password" />
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
