const mongoose = require("mongoose");
const { isEmail } = require("validator");
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
    required: [true, "Please enter your email"],
    lowercase: true,
    unique: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [6, "Password must contain at least 6 characters"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
