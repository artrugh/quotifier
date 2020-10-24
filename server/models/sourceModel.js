const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sourceSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    quotes: [{ type: Schema.Types.ObjectId, ref: "Quote" }],
    author: {
      type: Array,
    },
    sourceTitle: {
      type: String,
      trim: true,
    },
    containerTitle: {
      type: String,
      trim: true,
    },
    otherContributors: {
      type: Array,
    },
    editor: {
      type: Array,
    },
    translator: {
      type: Array,
    },
    version: {
      type: String,
      trim: true,
    },
    number: {
      type: String,
      trim: true,
    },
    publisher: {
      type: String,
      trim: true,
    },
    pubDate: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Source = mongoose.model("Source", sourceSchema);
module.exports = Source;
