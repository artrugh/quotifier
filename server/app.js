const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
app.use(morgan("dev"));

// middleware
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cookieParser());

// connect database
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("DB is connected"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });

// routes
const authRoutes = require("./routes/authRoutes");
app.get("/_health", (req, res) => {
  res.status(200).send("ok");
});
app.use(authRoutes);
const userRoutes = require("./routes/userRoutes");
app.use(userRoutes);

app.get("/set-cookies", (req, res) => {
  // res.setHeader("Set-Cookie", "newUser=true");
  res.cookie("newUser", false);
  res.cookie("userName", "faceboy");
  //secure: true = https or else it won't save the cookie
  // maxAge: 1000 * 60 * 60 * 24 = 1 day in miliseconds
  res.cookie("isEmployee", true, { maxAge: 1000 * 60 * 60 * 24 });
  res.send("you got the cookies");
});

app.get("/read-cookies", (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies);
});

module.exports = app;
