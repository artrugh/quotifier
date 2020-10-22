const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
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

// hook that runs right after doc saved to db
// userSchema.post("save", function (doc, next) {
//   console.log("new user created and saved", doc);
//   next();
// });

// hook that runs right before doc saved to db
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("Email not registered");
};

const User = mongoose.model("User", userSchema);
module.exports = User;
