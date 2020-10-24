const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    body: { type: String },
    tags: { type: Array },
    userNotes: { type: String },
    location: { type: String },
    sourceId: { type: Schema.Types.ObjectId, ref: "Source" },
  },
  { timestamps: true }
);

const Quote = mongoose.model("Quote", quoteSchema);
module.exports = Quote;
