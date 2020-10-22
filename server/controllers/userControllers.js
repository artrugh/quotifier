const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const SECRETTOKEN = process.env.SECRETTOKEN;
userControllers = {};

// error handling
const errorHandler = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // email not correct
  if (err.message === "Email not registered") {
    errors.email = "that email is not recognized";
  }

  // password not correct
  if (err.message === "Incorrect password") {
    errors.password = "that password is incorrect";
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "This email is in use";
    return errors;
  }

  // finds error message as defined in userModel.js and adds to errors object
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

// 3 days in seconds
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, `${SECRETTOKEN}`, {
    expiresIn: maxAge,
  });
};

userControllers.addUser = async (req, res) => {
  try {
    const newUser = await User.create({
      _id: mongoose.Types.ObjectId(),
      userFirst: req.body.userFirst,
      userLast: req.body.userLast,
      email: req.body.email,
      password: req.body.password,
    });
    const token = createToken(newUser._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: newUser.id });
  } catch (err) {
    const errors = errorHandler(err);
    res.status(400).json({ errors });
    console.log(errors);
    console.log(err);
  }
};

userControllers.login_get = (req, res) => {
  res.status(200).send("login");
};

userControllers.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = errorHandler(err);
    res.status(400).json({ errors });
  }
};

userControllers.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/login");
};

module.exports = userControllers;
