const Source = require("../models/sourceModel");
const Quote = require("../models/quoteModel");
const User = require("../models/userModel");
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
      otherContributors: req.body.otherContributors,
      editor: req.body.editor,
      translator: req.body.translator,
      version: req.body.version,
      number: req.body.number,
      publisher: req.body.publisher,
      pubDate: req.body.pubDate,
    });
    res.status(201).json(source);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

dataControllers.addQuote = async (req, res) => {
  const currentUser = res.locals.user;
  Source.findById(req.body.source)
    .then((source) => {
      if (source) {
        const quote = new Quote({
          _id: new mongoose.Types.ObjectId(),
          user: currentUser.id,
          body: req.body.body,
          tags: req.body.tags,
          userNotes: req.body.userNotes,
          location: req.body.location,
          source: source.id,
        });
        quote.save();
        source.quotes.push(quote);
        source.save();
        res.status(201).json(quote);
      } else if (source === null) {
        const quote = new Quote({
          _id: new mongoose.Types.ObjectId(),
          user: currentUser.id,
          body: req.body.body,
          tags: req.body.tags,
          userNotes: req.body.userNotes,
          location: req.body.location,
        });
        quote.save();
        res.status(201).json(quote);
      } else {
        return res.status(404).json({
          message: "Source Not Found",
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: err.message,
      });
    });
};

dataControllers.getSources = async (req, res) => {
  try {
    const currentUser = res.locals.user;
    const sources = await Source.find({
      user: `${currentUser.id}`,
    });
    res.status(200).json(sources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

dataControllers.getQuotes = async (req, res) => {
  try {
    const currentUser = res.locals.user;
    const quotes = await Quote.find({
      user: `${currentUser.id}`,
    });
    res.status(200).json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

dataControllers.updateQuote = async (req, res) => {
  const currentQuote = req.body._id;
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

module.exports = dataControllers;
