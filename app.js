const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://akromjon:akrom96@ds043158.mlab.com:43158/graphqlproject")
  .then(() => console.log("conneted to database"));

const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
