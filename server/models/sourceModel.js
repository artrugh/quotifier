const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sourceSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    quotes: [{ type: Schema.Types.ObjectId, ref: "Quote" }],
    author: {
      type: Array,
      default: undefined,
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
      default: undefined,
    },
    editor: {
      type: Array,
      default: undefined,
    },
    translator: {
      type: Array,
      default: undefined,
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
