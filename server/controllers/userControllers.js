const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const mongoose = require("mongoose");

const addUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    const newUser = await new User({
      _id: mongoose.Types.ObjectId(),
      userFirst: req.body.userFirst,
      userLast: req.body.userLast,
      email: req.body.email,
      password: hashedPassword,
    });
    newUser.save();
    res.status(201).send("new user added");
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { addUser };
