const express = require("express");
const app = express();
const morgan = require("morgan");

app.get("/_health", (req, res) => {
  res.status(200).send("ok");
});

module.exports = app;
