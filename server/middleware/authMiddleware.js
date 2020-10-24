const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const SECRETTOKEN = process.env.SECRETTOKEN;

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check if json web token exists and is valid
  if (token) {
    jwt.verify(token, `${SECRETTOKEN}`, (err, decodedToken) => {
      if (err) {
        console.log("not logged in");
        console.log(err.message);
        res.redirect("/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    console.log("not logged in");
    res.redirect("/login");
  }
};

// check current logged in user

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, `${SECRETTOKEN}`, async (err, decodedToken) => {
      if (err) {
        console.log("not logged in");
        res.locals.user = null;
        console.log(err.message);
        res.end();
      } else {
        console.log(decodedToken);
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    console.log("not logged in");
    res.locals.user = null;
    res.end();
  }
};

module.exports = { requireAuth, checkUser };
