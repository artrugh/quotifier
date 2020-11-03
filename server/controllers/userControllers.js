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

// 3 days in seconds = 3 days * 24 hours * 60 mins * 60 seconds
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
    // when user is created they should be logged in immediately so we send create and send a JWT
    const token = createToken(newUser._id);
    //cookies use milliseconds so we have to multiply the maxAge by 1000
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: newUser });
  } catch (err) {
    const errors = errorHandler(err);
    res.status(400).json({ errors });
  }
};

userControllers.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user });
  } catch (err) {
    const errors = errorHandler(err);
    res.status(400).json({ errors });
  }
};

// logout creates a new JWT token that expires immediately
userControllers.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.json("logged out");
};

userControllers.updateUser = async (req, res) => {
  const currentUser = res.locals.user;
  if (req.body.userFirst != null) {
    currentUser.userFirst = req.body.userFirst;
  }
  if (req.body.userLast != null) {
    currentUser.userLast = req.body.userLast;
  }
  if (req.body.email != null) {
    currentUser.email = req.body.email;
  }
  if (req.body.password != null) {
    currentUser.password = req.body.password;
  }
  try {
    await currentUser.save();
    res.status(200).json({ message: "User updated" });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = userControllers;
