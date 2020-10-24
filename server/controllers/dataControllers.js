const Source = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
dataControllers = {};

dataControllers.addSource = (req, res) => {
  const user = res.locals.user.id;
  res.status(200).json("added source");
};

module.exports = dataControllers;
