const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  userFirst: {
    type: String,
    trim: true,
  },
  userLast: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: "Email is required,",
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: "Password is required.",
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
