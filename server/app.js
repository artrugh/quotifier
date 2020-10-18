const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;

app.use("/graphql", graphqlHTTP({}));

app.listen(PORT, () => {
  console.log(`listening to requests on port ${PORT}`);
});
