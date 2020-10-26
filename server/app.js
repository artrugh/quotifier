const express = require("express");
const app = express();
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
const morgan = require("morgan");
app.use(morgan("dev"));
// cross origin resource sharing
// this allows requests from a domain outside of the server
const cors = require("cors");
app.use(cors());

// middleware to parse json and cookies
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const cookieParser = require("cookie-parser");
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

app.get("/_health", (req, res) => {
  res.status(200).send("ok");
});

const userRoutes = require("./routes/userRoutes");
app.use("/api/v1/users", userRoutes);

const dataRoutes = require("./routes/dataRoutes");
app.use("/api/v1/data", dataRoutes);

// error handling

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// this isn't part of app but shows how to set cookies
// app.get("/set-cookies", (req, res) => {
//   // res.setHeader("Set-Cookie", "newUser=true");
//   res.cookie("newUser", false);
//   res.cookie("userName", "faceboy");
//   //secure: true = https or else it won't save the cookie
//   // maxAge: 1000 * 60 * 60 * 24 = 1 day in miliseconds
//   res.cookie("isEmployee", true, { maxAge: 1000 * 60 * 60 * 24 });
//   res.send("you got the cookies");
// });

// how to read cookies
// app.get("/read-cookies", (req, res) => {
//   const cookies = req.cookies;
//   console.log(cookies);
//   res.json(cookies);
// });

//test routes for authMiddleware.js

// app.get("/protected-route", requireAuth, (req, res) => {
//   res.status(200).send("you're OK");
// });

// app.get("/check-me", checkUser);

module.exports = app;
