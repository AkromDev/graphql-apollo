const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const resolvers = require('./resolvers');
const typeDefs = require('./schema');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    // rootValue: resolvers,
    graphiql: true,
  })
);

mongoose
  .connect('mongodb://akrom:akrom1996@ds135179.mlab.com:35179/books', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('conneted to database');
    app.listen(4000, () => {
      console.log('listening for requests on port 4000');
    });
  });
