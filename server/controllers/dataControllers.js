const Source = require("../models/sourceModel");
const Quote = require("../models/quoteModel");
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
      translator: req.body.tranlsator,
      version: req.body.version,
      number: req.body.number,
      publisher: req.body.publisher,
      pubDate: req.body.pubDate,
    });
    res.status(201).json(source);
  } catch (err) {
    res.status(400).json(err);
  }
};

dataControllers.addQuote = async (req, res) => {
  const currentUser = res.locals.user;
  Source.findById(req.body.sourceId)
    .then((source) => {
      if (source) {
        const quote = new Quote({
          _id: new mongoose.Types.ObjectId(),
          user: currentUser.id,
          body: req.body.body,
          tags: req.body.tags,
          userNotes: req.body.userNotes,
          location: req.body.location,
        });
        quote.save();
        source.quotes.push(quote);
        source.save();
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

module.exports = dataControllers;
