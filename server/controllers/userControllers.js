const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const TOKEN = process.env.SECRETTOKEN;
userControllers = {};

// error handling
const handleErrors = (err) => {
  let errors = { email: "", password: "" };

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
  return jwt.sign({ id }, `${TOKEN}`, {
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
    const errors = handleErrors(err);
    res.status(400).json({ errors });
    console.log(errors);
    console.log(err);
  }
};

module.exports = userControllers;
