const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;

app.use("/graphql", graphqlHTTP({}));

// Add a health check route in express
app.get("/_health", (req, res) => {
  res.status(200).send("ok");
});

app.listen(PORT, () => {
  console.log(`listening to requests on port ${PORT}`);
});
