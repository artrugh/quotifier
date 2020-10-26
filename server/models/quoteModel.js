const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    body: { type: String },
    tags: {
      type: Array,
      default: undefined,
    },
    userNotes: { type: String },
    location: { type: String },
    source: { type: String },
  },
  { timestamps: true }
);

const Quote = mongoose.model("Quote", quoteSchema);
module.exports = Quote;
