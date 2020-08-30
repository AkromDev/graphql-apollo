const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://akrom:akrom1996@ds135179.mlab.com:35179/books")
  .then(() => console.log("conneted to database"));

const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
