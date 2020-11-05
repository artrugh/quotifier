const Source = require("../models/sourceModel");
const Quote = require("../models/quoteModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");
const { findById } = require("../models/userModel");
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
    }).lean();
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
    }).lean();
    res.status(200).json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

dataControllers.updateQuote = async (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;
  try {
    const quote = await Quote.quoteCheck(id);
    if (req.body.source !== undefined && req.body.source !== quote.source) {
      const oldSource = await Source.sourceCheck(quote.source);
      console.log(oldSource.id);
      await Source.findByIdAndUpdate(
        oldSource.id,
        { $pull: { quotes: id } },
        { new: true },
        function (err, source) {
          if (err) {
            console.log(err);
          } else {
            console.log(source);
          }
        }
      );
      const newSource = await Source.sourceCheck(changes.source);
      console.log(newSource.id);
      await Source.findByIdAndUpdate(
        newSource.id,
        { $addToSet: { quotes: id } },
        { new: true },
        function (err, source) {
          if (err) {
            console.log(err);
          } else {
            console.log(source);
          }
        }
      );
      quote.source = changes.source;
    }
    if (req.body.body !== undefined) {
      quote.body = changes.body;
    }
    if (req.body.tags !== undefined) {
      quote.tags = changes.tags;
    }
    if (req.body.userNotes !== undefined) {
      quote.userNotes = changes.userNotes;
    }
    if (req.body.location !== undefined) {
      quote.location = changes.location;
    }
    await quote.save();
    res.json(quote);
  } catch (err) {
    let errorMsg = err.message;
    return res.status(500).json({ status: 500, error: errorMsg });
  }
};

dataControllers.updateSource = async (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;
  try {
    const source = await Source.sourceCheck(id);
    if (req.body.author !== undefined) {
      source.author = changes.author;
    }
    if (req.body.sourceTitle !== undefined) {
      source.sourceTitle = changes.sourceTitle;
    }
    if (req.body.containerTitle !== undefined) {
      source.containerTitle = changes.containerTitle;
    }
    if (req.body.otherContributors !== undefined) {
      source.otherContributors = changes.otherContributors;
    }
    if (req.body.editor !== undefined) {
      source.editor = changes.editor;
    }
    if (req.body.translator !== undefined) {
      source.translator = changes.translator;
    }
    if (req.body.version !== undefined) {
      source.version = changes.version;
    }
    if (req.body.number !== undefined) {
      source.number = changes.number;
    }
    if (req.body.publisher !== undefined) {
      source.publisher = changes.publisher;
    }
    if (req.body.pubDate !== undefined) {
      source.editor = changes.pubDate;
    }
    await source.save();
    res.json(source);
  } catch (err) {
    console.log(err.message);
  }
};

// dataControllers.updateQuote = async (req, res) => {
//   const currentQuote = req.body._id;
//   let quoteUpdate = {};
//   if (req.body.body !== undefined) {
//     quoteUpdate["body"] = req.body.body;
//   }
//   try {
//     Quote.findOneAndUpdate({ _id: currentQuote }, quoteUpdate, {
//       new: true,
//     }).then((data) => {
//       if (data === null) {
//         throw new Error("quote not found");
//       }
//       res.json({ message: "Quote updated." });
//       console.log("New quote data", data);
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// dataControllers.updateQuote = async (req, res) => {
//   const currentQuote = req.body._id;
//   try {
//     const quoteToUpdate = await Quote.findOne({ _id: `${currentQuote}` });
//     if (req.body.body !== undefined) {
//       quoteToUpdate.body = req.body.body;
//     }
//     if (req.body.tags !== undefined) {
//       quoteToUpdate.tags = req.body.tags;
//     }
//     if (req.body.userNotes !== undefined) {
//       quoteToUpdate.userNotes = req.body.userNotes;
//     }
//     if (req.body.location !== undefined) {
//       quoteToUpdate.location = req.body.location;
//     }
//     if (
//       req.body.source !== undefined &&
//       req.body.source !== quoteToUpdate.source
//     ) {
//       quoteToUpdate.source = req.body.source;
//       const sourceToUpdate = await Source.findOne({ _id: req.body.source });
//       sourceToUpdate.quotes.push(req.body._id);
//       await sourceToUpdate.save();
//       console.log(sourceToUpdate);
//     }
//     await quoteToUpdate.save();
//     res.json(quoteToUpdate);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

module.exports = dataControllers;
