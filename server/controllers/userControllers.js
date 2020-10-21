const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const mongoose = require("mongoose");
userControllers = {};

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);

  if (err.message.includes("User validation failed")) {
    console.log(err);
  }
};

userControllers.addUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      _id: mongoose.Types.ObjectId(),
      userFirst: req.body.userFirst,
      userLast: req.body.userLast,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json(newUser);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports = userControllers;
