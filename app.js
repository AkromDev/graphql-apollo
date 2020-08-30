const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// connect to mlab database
// make sure to replace my db string & creds with your own
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