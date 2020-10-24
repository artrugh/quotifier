const Source = require("../models/sourceModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
dataControllers = {};

dataControllers.addSource = async (req, res) => {
  const currentUser = res.locals.user;
  try {
    const source = await Source.create({
      _id: new mongoose.Types.ObjectId(),
      user: currentUser.id,
      author: req.body.author,
      sourceTitle: req.body.sourceTitle,
      containerTitle: req.body.containerTitle,
      otherContributers: req.body.otherContributers,
      editor: req.body.editor,
      translator: req.body.tranlsator,
      version: req.body.version,
      number: req.body.number,
      publisher: req.body.publisher,
      pubDate: req.body.pubDate,
    });
    res.status(201).json(source);
  } catch (err) {
    console.log(err);
  }
};

module.exports = dataControllers;
