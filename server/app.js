const express = require("express");
const app = express();

//route test
//go to localhost:5000/home to see if server is started
app.get("/home", (req, res) => {
  res.send("homepage");
});

module.exports = app;
